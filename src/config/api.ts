import { supabase } from '../lib/supabase';
import { migrateContent } from '../lib/contentMigration';
import type { ProcessingResult } from '../types';

export const api = {
  processMSAs: async (msas: string[]): Promise<ProcessingResult> => {
    try {
      // Get all source content from Supabase
      const { data: sourceContent, error: fetchError } = await supabase
        .from('new_legal_pages_duplicate')
        .select('*');

      if (fetchError) {
        console.error('Failed to fetch source content:', fetchError);
        throw new Error(`Database error: ${fetchError.message}`);
      }

      if (!sourceContent || sourceContent.length === 0) {
        throw new Error('No source content found in the database');
      }

      const processed: string[] = [];
      const errors: Array<{ msa: string; error: string }> = [];

      // Process each MSA
      for (const msa of msas) {
        try {
          for (const row of sourceContent) {
            const result = await migrateContent(msa, row);
            if (result.success) {
              if (!processed.includes(msa)) {
                processed.push(msa);
              }
            } else {
              errors.push({ 
                msa, 
                error: result.error || 'Unknown error during content migration'
              });
              console.error(`Failed to process MSA ${msa} with row ${row.id}:`, result.error);
            }
          }
        } catch (error) {
          errors.push({ 
            msa, 
            error: error instanceof Error ? error.message : 'Unknown error in MSA processing'
          });
          console.error(`Error processing MSA ${msa}:`, error);
        }
      }

      return { processed, errors };
    } catch (error) {
      console.error('Failed to process MSAs:', error);
      throw new Error(
        error instanceof Error 
          ? `Failed to process MSAs: ${error.message}` 
          : 'Unknown error occurred while processing MSAs'
      );
    }
  },
};