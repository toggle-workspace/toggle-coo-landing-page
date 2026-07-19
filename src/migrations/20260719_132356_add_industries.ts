import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "industries" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "client" ADD COLUMN "industry_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "industries_id" integer;
  CREATE INDEX "industries_updated_at_idx" ON "industries" USING btree ("updated_at");
  CREATE INDEX "industries_created_at_idx" ON "industries" USING btree ("created_at");
  ALTER TABLE "client" ADD CONSTRAINT "client_industry_id_industries_id_fk" FOREIGN KEY ("industry_id") REFERENCES "public"."industries"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_industries_fk" FOREIGN KEY ("industries_id") REFERENCES "public"."industries"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "client_industry_idx" ON "client" USING btree ("industry_id");
  CREATE INDEX "payload_locked_documents_rels_industries_id_idx" ON "payload_locked_documents_rels" USING btree ("industries_id");
  ALTER TABLE "client" DROP COLUMN "short_description";
  ALTER TABLE "client" DROP COLUMN "slug";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "industries" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "industries" CASCADE;
  ALTER TABLE "client" DROP CONSTRAINT "client_industry_id_industries_id_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_industries_fk";
  
  DROP INDEX "client_industry_idx";
  DROP INDEX "payload_locked_documents_rels_industries_id_idx";
  ALTER TABLE "client" ADD COLUMN "short_description" varchar;
  ALTER TABLE "client" ADD COLUMN "slug" varchar;
  ALTER TABLE "client" DROP COLUMN "industry_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "industries_id";`)
}
