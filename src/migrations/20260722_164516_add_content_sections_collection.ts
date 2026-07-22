import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "content_sections_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "content_sections" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"key" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar,
  	"image_id" integer NOT NULL,
  	"link_label" varchar,
  	"link_href" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "content_sections_id" integer;
  ALTER TABLE "content_sections_stats" ADD CONSTRAINT "content_sections_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."content_sections"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "content_sections" ADD CONSTRAINT "content_sections_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "content_sections_stats_order_idx" ON "content_sections_stats" USING btree ("_order");
  CREATE INDEX "content_sections_stats_parent_id_idx" ON "content_sections_stats" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "content_sections_key_idx" ON "content_sections" USING btree ("key");
  CREATE INDEX "content_sections_image_idx" ON "content_sections" USING btree ("image_id");
  CREATE INDEX "content_sections_updated_at_idx" ON "content_sections" USING btree ("updated_at");
  CREATE INDEX "content_sections_created_at_idx" ON "content_sections" USING btree ("created_at");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_content_sections_fk" FOREIGN KEY ("content_sections_id") REFERENCES "public"."content_sections"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_content_sections_id_idx" ON "payload_locked_documents_rels" USING btree ("content_sections_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "content_sections_stats" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "content_sections" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "content_sections_stats" CASCADE;
  DROP TABLE "content_sections" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_content_sections_fk";
  
  DROP INDEX "payload_locked_documents_rels_content_sections_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "content_sections_id";`)
}
