// Supabase
export const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
export const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

// DeepSeek
export const DEEPSEEK_API_KEY = import.meta.env.DEEPSEEK_API_KEY;

// Validation
if (!SUPABASE_URL) {
  console.error('Missing VITE_SUPABASE_URL environment variable');
}

if (!SUPABASE_ANON_KEY) {
  console.error('Missing VITE_SUPABASE_ANON_KEY environment variable');
}

if (!DEEPSEEK_API_KEY) {
  console.warn('DeepSeek API key not found. Content rewriting will be disabled.');
}