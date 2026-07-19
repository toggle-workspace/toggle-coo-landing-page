import * as migration_20260719_074235_add_team_collection from './20260719_074235_add_team_collection';
import * as migration_20260719_132356_add_industries from './20260719_132356_add_industries';
import * as migration_20260719_152124_add_case_studies_richtext_results_fields from './20260719_152124_add_case_studies_richtext_results_fields';

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
    name: '20260719_152124_add_case_studies_richtext_results_fields'
  },
];
