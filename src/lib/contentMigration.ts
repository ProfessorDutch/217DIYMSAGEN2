import { supabase } from './supabase';
import { MSA_CONFIG } from '../config/msaConfig';
import { rewriteContent } from './deepseek';
import type { ContentRow } from '../types';

export async function migrateContent(msaKey: string, sourceRow: ContentRow) {
  try {
    const msaData = MSA_CONFIG[msaKey];
    if (!msaData) {
      throw new Error(`MSA configuration not found for ${msaKey}`);
    }

    // Parse existing schema markup
    let schemaData = {};
    try {
      schemaData = JSON.parse(sourceRow.schema_markup || '{}');
    } catch (e) {
      console.warn(`Invalid schema markup for ${msaKey}:`, e);
    }

    // Create the updated schema while preserving existing data
    const updatedSchema = {
      ...schemaData,
      "@type": schemaData["@type"] || "LegalService",
      "@context": "https://schema.org",
      name: `${msaData.city} ${sourceRow.case_type} Attorney Payment Plans`,
      url: `https://www.legalfeefinder.com/${msaData.city.toLowerCase()}-${sourceRow.case_type.toLowerCase().replace(/\s+/g, '-')}`,
      image: sourceRow.image_url,
      description: `Connect with ${msaData.city} ${sourceRow.case_type.toLowerCase()} attorneys through LegalFeeFinder's exclusive payment programs. Serving clients throughout ${msaData.counties[0]} County and ${msaData.msa_region}.`,
      address: {
        "@type": "PostalAddress",
        streetAddress: msaData.address.street,
        addressLocality: msaData.city,
        addressRegion: msaData.state,
        postalCode: msaData.address.zipCode,
        addressCountry: "US"
      },
      areaServed: {
        "@type": "MetropolitanStatisticalArea",
        name: msaData.msa_region,
        containsPlace: [
          {
            "@type": "City",
            name: msaData.city,
            containedInPlace: {
              "@type": "State",
              name: msaData.state
            }
          },
          ...msaData.surroundingCities.map(city => ({
            "@type": "City",
            name: city
          }))
        ]
      },
      provider: {
        "@type": "Attorney",
        name: "Local Criminal Defense Attorneys Offering Payment Plans Near Me",
        areaServed: {
          "@type": "GeoCircle",
          geoRadius: "80467.2",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: msaData.coordinates.latitude,
            longitude: msaData.coordinates.longitude
          }
        }
      },
      serviceArea: {
        "@type": "GeoCircle",
        geoRadius: "80467.2",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: msaData.coordinates.latitude,
          longitude: msaData.coordinates.longitude
        }
      },
      priceRange: "$$",
      offers: {
        "@type": "Offer",
        price: "Varies",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        validFrom: new Date().toISOString().split('T')[0]
      },
      serviceType: [
        sourceRow.practice_area,
        sourceRow.case_type,
        "Payment Plans",
        "Legal Representation",
        "Criminal Court Representation",
        "Legal Defense Services"
      ],
      openingHours: "Mo-Fr 09:00-17:00",
      paymentAccepted: ["Credit Card", "Debit Card", "Payment Plans Available"],
      potentialAction: {
        "@type": "SearchAction",
        target: `https://www.legalfeefinder.com/${msaData.city.toLowerCase()}-attorneys-near-me-payment-plans?q={search_term}`,
        "query-input": "required name=search_term"
      }
    };

    // Rewrite content sections with DeepSeek
    const { content1, content2 } = await rewriteContent({
      msa: msaData,
      case_type: sourceRow.case_type,
      content_section_1: sourceRow.content_section_1,
      content_section_2: sourceRow.content_section_2
    });

// Replace "Miami" with the correct MSA city in the meta description
const updatedMetaDescription = sourceRow.meta_description.replace(/\bMiami\b/, msaData.city);


    // Create new content row
    const updatedContent = {
      url_slug: sourceRow.url_slug.replace(/^[^-]+-/, `${msaData.city.toLowerCase()}-`),
      city: msaData.city,
      state: msaData.state,
      msa_region: msaData.msa_region,
      practice_area: sourceRow.practice_area,
      case_type: sourceRow.case_type,
      page_title: sourceRow.page_title,
      meta_description: updatedMetaDescription,
      h1_heading: sourceRow.h1_heading,
      content_section_1: content1,
      content_section_2: content2,
      cta_text: sourceRow.cta_text,
      image_url: sourceRow.image_url,
      image_alt_text: `${msaData.city} ${sourceRow.case_type} attorney office`,
      surrounding_cities: msaData.surroundingCities.join(', '),
      county_name: msaData.counties[0],
      schema_markup: JSON.stringify(updatedSchema)
    };

    // Ensure we're authenticated before making the request
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      throw new Error('Not authenticated');
    }

    // Insert the new content row
    const { data, error } = await supabase
      .from('content')
      .insert([updatedContent])
      .select();

    if (error) {
      console.error('Supabase insert error:', error);
      throw new Error(`Failed to insert content for ${msaKey}: ${error.message}`);
    }

    if (!data || data.length === 0) {
      throw new Error(`No data returned after inserting content for ${msaKey}`);
    }

    return {
      success: true,
      data: data[0]
    };
  } catch (error) {
    console.error(`Content migration error for ${msaKey}:`, error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
}