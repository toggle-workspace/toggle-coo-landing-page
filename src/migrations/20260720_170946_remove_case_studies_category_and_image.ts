import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "case_studies" DROP CONSTRAINT "case_studies_image_id_media_id_fk";
  
  DROP INDEX "case_studies_image_idx";
  ALTER TABLE "case_studies" DROP COLUMN "category";
  ALTER TABLE "case_studies" DROP COLUMN "image_id";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "case_studies" ADD COLUMN "category" varchar;
  ALTER TABLE "case_studies" ADD COLUMN "image_id" integer;
  ALTER TABLE "case_studies" ADD CONSTRAINT "case_studies_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "case_studies_image_idx" ON "case_studies" USING btree ("image_id");`)
}
