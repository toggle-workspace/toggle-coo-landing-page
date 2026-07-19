<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Design reference

Before designing or building any new page or section, read `DESIGN.md` at the repo root. Update it whenever you introduce a new brand token, new shared section component, or a deliberate deviation from the Figma design.

# Schema reference

Before adding or changing a Payload collection or field, read `SCHEMA.md` at the repo root — it mirrors `payload.config.ts` for quick reference. Update it whenever a collection or field changes.

# Database migrations

Before creating or running a Payload migration, read `DATABASE_MIGRATION.md` at the repo root — it covers the dev/preview/production Neon branch split and the migration workflow. Local dev is the only environment allowed to use push mode (`DATABASE_URI` pointed at the `dev` branch); pointing it at `preview` or `production` plants a drift marker in `payload_migrations` (`batch = -1`) that makes `payload migrate` hang non-interactively in CI. If that happens, clear it with `DELETE FROM "payload_migrations" WHERE batch = -1;` on the affected branch.
