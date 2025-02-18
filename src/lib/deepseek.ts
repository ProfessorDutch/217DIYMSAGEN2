import { DEEPSEEK_API_KEY } from '../config/env';
import type { MSAConfig } from '../config/msaConfig';

interface RewriteResponse {
  content1: string;
  content2: string;
}

interface RewriteRequest {
  msa: MSAConfig;
  case_type: string;
  content_section_1: string;
  content_section_2: string;
}

const MAX_RETRIES = 3;
const TARGET_LENGTH = 620;
const VARIANCE_PERCENTAGE = 0.12; // 12% variance allowed
const MIN_LENGTH = Math.floor(TARGET_LENGTH * (1 - VARIANCE_PERCENTAGE));
const MAX_LENGTH = Math.ceil(TARGET_LENGTH * (1 + VARIANCE_PERCENTAGE));

function isValidLength(content: string): boolean {
  const length = content.length;
  return length >= MIN_LENGTH && length <= MAX_LENGTH;
}

export async function rewriteContent({
  msa,
  case_type,
  content_section_1,
  content_section_2
}: RewriteRequest): Promise<RewriteResponse> {
  let attempts = 0;

  while (attempts < MAX_RETRIES) {
    try {
      if (!DEEPSEEK_API_KEY) {
        throw new Error('DeepSeek API key is not configured');
      }

      const prompt = `You are a content writer for LegalFeeFinder, a lead generation website that connects users with attorneys offering payment plans. Rewrite the following content sections for ${case_type} in ${msa.city} to include local laws, courthouses, and locale.

Content Section 1:
${content_section_1}

Content Section 2:
${content_section_2}

Local Details:
- City: ${msa.city}
- County: ${msa.counties[0]}
- Courts: ${msa.counties[0]} County Criminal Court
- Area: ${msa.msa_region}
- Nearby cities: ${msa.surroundingCities.join(', ')}
- Courthouse Address: ${msa.address.street}, ${msa.city}, ${msa.state} ${msa.address.zipCode}

Requirements:
1. Each section MUST be exactly ${TARGET_LENGTH} characters (±${Math.floor(VARIANCE_PERCENTAGE * 100)}%)
2. Maintain the original tone and structure
3. Include local courthouse and jurisdiction details
4. Mention the specific county courts and legal system
5. Reference the surrounding cities when discussing service area
6. Focus on how LegalFeeFinder helps users find attorneys offering payment plans
7. Format output exactly as:
SECTION1: [rewritten content for section 1]
SECTION2: [rewritten content for section 2]

CRITICAL: Each section MUST be between ${MIN_LENGTH} and ${MAX_LENGTH} characters.`;

      const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${DEEPSEEK_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'deepseek-chat',
          messages: [
            {
              role: 'system',
              content: 'You are a content writer for LegalFeeFinder, a lead generation website that connects users with attorneys offering payment plans.'
            },
            {
              role: 'user',
              content: prompt
            }
          ],
          temperature: 0.7,
          max_tokens: 2000,
        }),
      });

      if (!response.ok) {
        throw new Error(`DeepSeek API error: ${response.statusText}`);
      }

      const data = await response.json();
      const content = data.choices[0].message.content;

      // Parse the sections from the response
      const sections = content.split('\n').reduce((acc, line) => {
        if (line.startsWith('SECTION1:')) {
          acc.content1 = line.replace('SECTION1:', '').trim();
        } else if (line.startsWith('SECTION2:')) {
          acc.content2 = line.replace('SECTION2:', '').trim();
        }
        return acc;
      }, { content1: '', content2: '' });

      // Validate section lengths
      if (!sections.content1 || !sections.content2) {
        throw new Error('Invalid response format from DeepSeek API');
      }

      if (!isValidLength(sections.content1) || !isValidLength(sections.content2)) {
        console.warn(`Content length validation failed on attempt ${attempts + 1}:
          Section 1: ${sections.content1.length} chars
          Section 2: ${sections.content2.length} chars
          Required: ${MIN_LENGTH}-${MAX_LENGTH} chars`);
        
        attempts++;
        if (attempts >= MAX_RETRIES) {
          console.error('Max retries reached, returning original content');
          return {
            content1: content_section_1,
            content2: content_section_2,
          };
        }
        continue;
      }

      return sections;
    } catch (error) {
      console.error('DeepSeek rewrite error:', error);
      return {
        content1: content_section_1,
        content2: content_section_2,
      };
    }
  }

  // Fallback to original content if all retries fail
  return {
    content1: content_section_1,
    content2: content_section_2,
  };
}