export interface Database {
  public: {
    Tables: {
      new_legal_pages_duplicate: {
        Row: {
          id: string;
          created_at: string;
          updated_at: string;
          city: string;
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
          schema_markup: string | null;
          url_slug: string;
          state: string;
        };
      };
      content: {
        Row: {
          id: string;
          created_at: string;
          updated_at: string;
          city: string;
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
          schema_markup: string | null;
          url_slug: string;
          state: string;
        };
      };
    };
  };
}