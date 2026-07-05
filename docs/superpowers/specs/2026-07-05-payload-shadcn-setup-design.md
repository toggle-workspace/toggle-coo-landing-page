# Payload CMS + shadcn/ui Setup

## Summary

Install and configure Payload CMS v3 (with Neon/PostgreSQL) and shadcn/ui into the existing Next.js 16 + Tailwind v4 project.

## What's Already Done

- Tailwind v4 — installed, configured in `globals.css`

## Payload CMS

**Packages:** `payload`, `@payloadcms/next`, `@payloadcms/db-postgres`, `@payloadcms/richtext-lexical`

**Config:** `payload.config.ts` at project root with:
- `db`: `postgresAdapter` pointed at `process.env.DATABASE_URI`
- `secret`: `process.env.PAYLOAD_SECRET`
- `collections`: Users only (default)
- `editor`: `lexicalEditor`

**Next.js integration:**
- `src/app/(payload)/admin/[[...segments]]/page.tsx` — admin UI catch-all
- `src/app/(payload)/admin/[[...segments]]/not-found.tsx`
- `src/app/(payload)/api/[...slug]/route.ts` — REST/GraphQL API

**Env vars needed:**
- `DATABASE_URI` — Neon connection string (postgres://)
- `PAYLOAD_SECRET` — random secret string

## shadcn/ui

- Run `npx shadcn@latest init` with Tailwind v4 defaults
- Adds `components.json` and `src/lib/utils.ts`

## Out of Scope

- Additional Payload collections (added later as needed)
- Deploying to Vercel (separate step)
