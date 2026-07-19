import * as migration_20260719_074235_add_team_collection from './20260719_074235_add_team_collection';

export const migrations = [
  {
    up: migration_20260719_074235_add_team_collection.up,
    down: migration_20260719_074235_add_team_collection.down,
    name: '20260719_074235_add_team_collection'
  },
];
