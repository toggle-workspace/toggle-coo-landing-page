import * as migration_20260719_074235_add_team_collection from './20260719_074235_add_team_collection';
import * as migration_20260719_132356_add_industries from './20260719_132356_add_industries';
import * as migration_20260719_152124_add_case_studies_richtext_results_fields from './20260719_152124_add_case_studies_richtext_results_fields';
import * as migration_20260720_170946_remove_case_studies_category_and_image from './20260720_170946_remove_case_studies_category_and_image';
import * as migration_20260722_155226_add_company_info_global from './20260722_155226_add_company_info_global';
import * as migration_20260722_163349_add_testimonials_collection from './20260722_163349_add_testimonials_collection';
import * as migration_20260722_164516_add_content_sections_collection from './20260722_164516_add_content_sections_collection';
import * as migration_20260724_153126_add_faq_collection from './20260724_153126_add_faq_collection';

export const migrations = [
  {
    up: migration_20260719_074235_add_team_collection.up,
    down: migration_20260719_074235_add_team_collection.down,
    name: '20260719_074235_add_team_collection',
  },
  {
    up: migration_20260719_132356_add_industries.up,
    down: migration_20260719_132356_add_industries.down,
    name: '20260719_132356_add_industries',
  },
  {
    up: migration_20260719_152124_add_case_studies_richtext_results_fields.up,
    down: migration_20260719_152124_add_case_studies_richtext_results_fields.down,
    name: '20260719_152124_add_case_studies_richtext_results_fields',
  },
  {
    up: migration_20260720_170946_remove_case_studies_category_and_image.up,
    down: migration_20260720_170946_remove_case_studies_category_and_image.down,
    name: '20260720_170946_remove_case_studies_category_and_image',
  },
  {
    up: migration_20260722_155226_add_company_info_global.up,
    down: migration_20260722_155226_add_company_info_global.down,
    name: '20260722_155226_add_company_info_global',
  },
  {
    up: migration_20260722_163349_add_testimonials_collection.up,
    down: migration_20260722_163349_add_testimonials_collection.down,
    name: '20260722_163349_add_testimonials_collection',
  },
  {
    up: migration_20260722_164516_add_content_sections_collection.up,
    down: migration_20260722_164516_add_content_sections_collection.down,
    name: '20260722_164516_add_content_sections_collection',
  },
  {
    up: migration_20260724_153126_add_faq_collection.up,
    down: migration_20260724_153126_add_faq_collection.down,
    name: '20260724_153126_add_faq_collection'
  },
];
