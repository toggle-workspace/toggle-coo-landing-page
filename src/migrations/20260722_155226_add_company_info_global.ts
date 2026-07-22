import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "company_info_social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_id" integer,
  	"label" varchar NOT NULL,
  	"link" varchar NOT NULL
  );
  
  CREATE TABLE "company_info" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"description" varchar,
  	"email" varchar,
  	"phone" varchar,
  	"location" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "company_info_social_links" ADD CONSTRAINT "company_info_social_links_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "company_info_social_links" ADD CONSTRAINT "company_info_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."company_info"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "company_info_social_links_order_idx" ON "company_info_social_links" USING btree ("_order");
  CREATE INDEX "company_info_social_links_parent_id_idx" ON "company_info_social_links" USING btree ("_parent_id");
  CREATE INDEX "company_info_social_links_icon_idx" ON "company_info_social_links" USING btree ("icon_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "company_info_social_links" CASCADE;
  DROP TABLE "company_info" CASCADE;`)
}
