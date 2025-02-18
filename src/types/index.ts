export interface MSAConfig {
  city: string;
  state: string;
  counties: string[];
  surroundingCities: string[];
  msa_region: string;
  coordinates: {
    latitude: string;
    longitude: string;
  };
}

export interface ProcessingStatus {
  type: 'error' | 'success' | 'info';
  message: string;
}

export interface ProcessingResult {
  processed: string[];
  errors: Array<{
    msa: string;
    error: string;
  }>;
}

export interface ContentRow {
  url_slug: string;
  city: string;
  state: string;
  msa_region: string;
  practice_area: string;
  case_type: string;
  page_title: string;
  meta_description: string;
  h1_heading: string;
  content_section_1: string;
  content_section_2: string;
  cta_text: string;
  image_url: string;
  image_alt_text: string;
  surrounding_cities: string;
  county_name: string;
  schema_markup: string;
}