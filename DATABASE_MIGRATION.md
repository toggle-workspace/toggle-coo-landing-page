# Database Split & Migration Implementation Plan

**Stack:** Next.js + Payload CMS + Neon Postgres + Vercel

## Context

Currently dev and production share the same live Neon database. This plan splits them into isolated environments and establishes a proper migration workflow going forward.

---

## Phase 1: Create Isolated Dev Branch

- [ ] In Neon Console (or CLI), create a new branch named `dev` with `main`/production as the parent
  ```bash
  neon branches create --name dev --parent main
  ```
- [ ] Retrieve the new branch's connection string
  ```bash
  neon connection-string dev
  ```
- [ ] Store this as a temporary reference — do not use it yet until Phase 2 is complete

**Verification:** Confirm in Neon Console that `dev` branch exists and shows the same table/row counts as `main` at time of creation.

---

## Phase 2: Update Environment Variables

- [ ] Update local `.env.local` → `DATABASE_URI` = new `dev` branch connection string
- [ ] In Vercel Project Settings → Environment Variables:
  - [ ] **Production** scope → `DATABASE_URI` = original/current connection string (unchanged)
  - [ ] **Preview** scope → `DATABASE_URI` = new `dev` branch connection string
  - [ ] **Development** scope (if used) → `DATABASE_URI` = new `dev` branch connection string
- [ ] Double-check no accidental cross-assignment (dev URL in Production scope or vice versa)

**Verification (critical — do not skip):**

- [ ] Restart local dev server
- [ ] Sign up a test user locally
- [ ] Confirm the test user appears in Neon Console under `dev` branch → `users` table
- [ ] Confirm the test user does **NOT** appear under `main`/prod branch
- [ ] Trigger a Vercel preview deployment and repeat the same check against Preview env

---

## Phase 3: Configure Payload for Environment-Aware Migrations

- [ ] Update `payload.config.ts` so schema push mode is disabled in production:
  ```ts
  db: postgresAdapter({
    pool: { connectionString: process.env.DATABASE_URI },
    push: process.env.NODE_ENV !== "production",
  });
  ```
- [ ] Confirm `src/migrations/` directory exists (create if missing) and is committed to version control

---

## Phase 4: Establish Migration Baseline

- [ ] Since dev and prod currently share schema, generate a baseline migration capturing current state:
  ```bash
  npx payload migrate:create initial-baseline
  ```
- [ ] Review the generated file — it should reflect existing schema, not introduce changes
- [ ] Commit this baseline migration to the repo before making any further schema changes

---

## Phase 5: Set Up Deploy Pipeline to Run Migrations

- [ ] Update `package.json` build script to run pending migrations on deploy:
  ```json
  "scripts": {
    "build": "payload migrate && next build"
  }
  ```
- [ ] Confirm this only affects Production deployments meaningfully (Preview will run migrations against `dev` branch, which is fine/expected)

---

## Phase 6: Ongoing Schema Change Workflow (going forward)

For every future schema change:

1. [ ] Make schema/collection changes locally against `dev` branch (push mode auto-syncs)
2. [ ] Once finalized, generate a migration:
   ```bash
   npx payload migrate:create <descriptive-name>
   ```
3. [ ] Review the generated SQL/migration file manually — check for:
   - New required fields without defaults on existing rows
   - Destructive changes (dropped columns/tables)
4. [ ] Test the migration against a **fresh branch reset from prod** (not raw dev, which may have drifted):
   ```bash
   neon branches reset dev --parent
   DATABASE_URI=<dev-connection-string> npx payload migrate
   ```
5. [ ] If successful, merge/push code — deploy pipeline runs migration against real prod automatically (Phase 5)
6. [ ] Verify in Vercel deploy logs that migration ran without errors

`.github/workflows/migration-check.yml` enforces step 2 mechanically: any PR
that touches `payload.config.ts` without also adding a file under
`src/migrations/` fails CI. It only checks that a migration file exists —
step 3's manual review is still on you.

---

## Phase 7: Optional — Periodic Dev Data Refresh

If you want dev to reflect realistic (but not sensitive) prod data periodically:

- [ ] Set up a scheduled job (GitHub Action or Vercel Cron) that:
  1. Resets `dev` branch from `main` via Neon API
  2. Immediately runs an anonymization script to scrub PII:
     ```sql
     UPDATE users SET
       email = 'user' || id || '@example.com',
       password = '$2b$10$dummyhashvalue...',
       phone = NULL,
       name = 'Test User ' || id;
     ```
- [ ] Document this job clearly so no one assumes dev data is real/production-sensitive

---

## Safety Checklist Before Any Prod Migration Run

- [ ] Migration tested against a fresh reset-from-prod branch
- [ ] Migration file manually reviewed (not blindly trusting auto-generation)
- [ ] Vercel Production env var confirmed pointing at correct database
- [ ] Backup/point-in-time recovery confirmed available in Neon (Neon supports PITR by default — confirm retention window is sufficient)
- [ ] Rollback plan identified (Neon branch point-in-time restore, or a down-migration if written)

---

## Notes for AI Assistant Executing This Plan

- Never run `push: true` mode against the production `DATABASE_URI`
- Always generate migrations from dev, never hand-write schema changes directly against prod
- Treat any `DATABASE_URI` pointing to the prod/main branch as read-sensitive — do not run destructive scripts, resets, or seed scripts against it
- If uncertain which branch a connection string points to, verify via Neon Console or `neon branches list` before running any command that modifies data
