/*
  # Initial Database Setup

  1. Tables
    - `content`
      - Primary table for storing legal content pages
      - Includes all necessary fields for content management
      - Has address fields for schema markup
    - `new_legal_pages_duplicate`
      - Source content table for migration
      - Mirrors content table structure

  2. Security
    - RLS enabled on both tables
    - Public access policies for all operations
    - Indexes for optimized queries

  3. Features
    - Automatic timestamps
    - Updated_at trigger
    - Unique constraints on url_slug
*/

-- Drop existing tables if they exist
DROP TABLE IF EXISTS content;
DROP TABLE IF EXISTS new_legal_pages_duplicate;

-- Create content table
CREATE TABLE content (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  url_slug text NOT NULL UNIQUE,
  city text NOT NULL,
  state text NOT NULL,
  msa_region text NOT NULL,
  practice_area text NOT NULL,
  case_type text NOT NULL,
  page_title text NOT NULL,
  meta_description text NOT NULL,
  h1_heading text NOT NULL,
  content_section_1 text NOT NULL,
  content_section_2 text NOT NULL,
  cta_text text NOT NULL,
  image_url text NOT NULL,
  image_alt_text text NOT NULL,
  surrounding_cities text NOT NULL,
  county_name text NOT NULL,
  schema_markup jsonb,
  street_address text,
  zip_code text
);

-- Create source content table
CREATE TABLE new_legal_pages_duplicate (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  url_slug text NOT NULL UNIQUE,
  city text NOT NULL,
  state text NOT NULL,
  msa_region text NOT NULL,
  practice_area text NOT NULL,
  case_type text NOT NULL,
  page_title text NOT NULL,
  meta_description text NOT NULL,
  h1_heading text NOT NULL,
  content_section_1 text NOT NULL,
  content_section_2 text NOT NULL,
  cta_text text NOT NULL,
  image_url text NOT NULL,
  image_alt_text text NOT NULL,
  surrounding_cities text NOT NULL,
  county_name text NOT NULL,
  schema_markup jsonb,
  street_address text,
  zip_code text
);

-- Enable RLS
ALTER TABLE content ENABLE ROW LEVEL SECURITY;
ALTER TABLE new_legal_pages_duplicate ENABLE ROW LEVEL SECURITY;

-- Create policies for content table
CREATE POLICY "content_select"
  ON content
  FOR SELECT
  TO PUBLIC
  USING (true);

CREATE POLICY "content_insert"
  ON content
  FOR INSERT
  TO PUBLIC
  WITH CHECK (true);

CREATE POLICY "content_update"
  ON content
  FOR UPDATE
  TO PUBLIC
  USING (true)
  WITH CHECK (true);

CREATE POLICY "content_delete"
  ON content
  FOR DELETE
  TO PUBLIC
  USING (true);

-- Create policies for source content table
CREATE POLICY "source_select"
  ON new_legal_pages_duplicate
  FOR SELECT
  TO PUBLIC
  USING (true);

CREATE POLICY "source_insert"
  ON new_legal_pages_duplicate
  FOR INSERT
  TO PUBLIC
  WITH CHECK (true);

CREATE POLICY "source_update"
  ON new_legal_pages_duplicate
  FOR UPDATE
  TO PUBLIC
  USING (true)
  WITH CHECK (true);

CREATE POLICY "source_delete"
  ON new_legal_pages_duplicate
  FOR DELETE
  TO PUBLIC
  USING (true);

-- Create indexes for better query performance
CREATE INDEX idx_content_url_slug ON content(url_slug);
CREATE INDEX idx_content_city ON content(city);
CREATE INDEX idx_content_state ON content(state);
CREATE INDEX idx_content_practice_area ON content(practice_area);
CREATE INDEX idx_content_case_type ON content(case_type);
CREATE INDEX idx_content_zip_code ON content(zip_code);

CREATE INDEX idx_source_url_slug ON new_legal_pages_duplicate(url_slug);
CREATE INDEX idx_source_city ON new_legal_pages_duplicate(city);
CREATE INDEX idx_source_state ON new_legal_pages_duplicate(state);
CREATE INDEX idx_source_zip_code ON new_legal_pages_duplicate(zip_code);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_content_updated_at
  BEFORE UPDATE ON content
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_source_updated_at
  BEFORE UPDATE ON new_legal_pages_duplicate
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();