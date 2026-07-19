import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "case_studies_results" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL,
  	"label" varchar NOT NULL
  );
  
  ALTER TABLE "client" ADD COLUMN "description" varchar;
  ALTER TABLE "client" ADD COLUMN "location" varchar;
  ALTER TABLE "client" ADD COLUMN "website" varchar;
  ALTER TABLE "case_studies" ADD COLUMN "category" varchar;
  ALTER TABLE "case_studies" ADD COLUMN "image_id" integer;
  ALTER TABLE "case_studies" ADD COLUMN "challenges" jsonb;
  ALTER TABLE "case_studies" ADD COLUMN "approach" jsonb;
  ALTER TABLE "case_studies_results" ADD CONSTRAINT "case_studies_results_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "case_studies_results_order_idx" ON "case_studies_results" USING btree ("_order");
  CREATE INDEX "case_studies_results_parent_id_idx" ON "case_studies_results" USING btree ("_parent_id");
  ALTER TABLE "case_studies" ADD CONSTRAINT "case_studies_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "case_studies_image_idx" ON "case_studies" USING btree ("image_id");
  ALTER TABLE "case_studies" DROP COLUMN "long_description";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "case_studies_results" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "case_studies_results" CASCADE;
  ALTER TABLE "case_studies" DROP CONSTRAINT "case_studies_image_id_media_id_fk";
  
  DROP INDEX "case_studies_image_idx";
  ALTER TABLE "case_studies" ADD COLUMN "long_description" jsonb;
  ALTER TABLE "client" DROP COLUMN "description";
  ALTER TABLE "client" DROP COLUMN "location";
  ALTER TABLE "client" DROP COLUMN "website";
  ALTER TABLE "case_studies" DROP COLUMN "category";
  ALTER TABLE "case_studies" DROP COLUMN "image_id";
  ALTER TABLE "case_studies" DROP COLUMN "challenges";
  ALTER TABLE "case_studies" DROP COLUMN "approach";`)
}
