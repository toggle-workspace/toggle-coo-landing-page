# Services Payload: Fully CMS-Driven Detail Page

## SECTION 1: SPEC

**One-line purpose**
Content editors can fully manage every service's marketing copy (listing card, hero, deliverables, and process list) from the CMS, with no per-service content hardcoded in the page templates.

**Users and use cases**
- As a marketing content editor, I want to edit a service's title, description, deliverables, and process steps in the CMS so that I don't need a developer to change service page content.
- As a site visitor, I want every `/services/[slug]` page to show accurate, service-specific copy so that I understand what each service actually delivers.
- As a developer, I want the service detail template to render purely from CMS data so that adding a new service requires no code changes.

**Requirements**
1. The `services` collection must supply a page hero `title` distinct from `service_name` (the admin-facing/eyebrow name) and `description`.
2. The `services` collection must supply a `process` section (its own `section_title` + an ordered list of steps, each with an `order`, `title`, and `description`) to drive `NumberedFeatureGrid`.
3. The `services` collection must supply a `deliverables` section with its own `section_title` (feeding `IconFeatureGrid`'s `title` prop) plus an `items[]` list, each with `icon`, `title`, and `description` — mirroring `process`'s shape.
4. The services index page (`/services`) must continue to list all services sorted by `order`, using `service_name`, `description`, `icon`, and `slug`.
5. The service detail page (`/services/[slug]`) must render hero, deliverables, and process entirely from the fetched service document — no hardcoded copy per route, including both section titles.
6. Each grid section's `eyebrow` label ("What we deliver", "Why choose us", "Featured case studies") stays hardcoded/generic in the template — confirmed these never vary per service, so only each section's `title` becomes CMS-driven, not `eyebrow`.
7. If a service is missing optional fields, the detail page must still render without runtime errors, falling back to sensible defaults.
8. `long_description` is removed from the schema — it was unused on the detail page and nothing replaces it.
9. `ServiceWhy` is removed from the detail page entirely (stock photo + generic CTA overlay, not per-service content) and its component file deleted.
10. The detail page's case-studies grid shows only case studies related to that service via the existing (currently unused) `case-studies.services` relationship, scoped to this page only — falls back to a generic set if none are tagged. `/case-studies` and `/case-studies/[slug]` stay on their existing static data source; migrating those is out of scope.

**Edge cases**
- A service has zero deliverable items → deliverables section renders nothing (already handled by existing `?? []`).
- A service has zero process steps → the process section is omitted entirely rather than rendering an empty grid.
- A service is missing `deliverables.section_title` or `process.section_title` → the respective component falls back to its own default `title` prop rather than rendering blank (the `eyebrow` prop is unaffected since it's always hardcoded).
- A service is missing `title` → fall back to `description`.
- An icon upload is deleted from `media` after being referenced → fall back to `FALLBACK_ICON` (existing pattern already does this for `icon`/`deliverables.items[].icon`).
- Two services share the same `slug` → prevented by `unique: true` at the field level, not app logic.
- A service has no related case studies → the detail page's `CaseStudiesGrid` falls back to its existing generic/static default rather than rendering empty.

**Acceptance criteria**
```
Given a service document with title, a deliverables section_title + 3 items (with icons), and a process section_title + 3 ordered steps
When a visitor loads /services/[slug]
Then the page renders the CMS title, the deliverables section under its own CMS section title, and the process steps under its own CMS section title, in the given order, with no hardcoded fallback copy and no ServiceWhy section — while each section's eyebrow label stays the same generic hardcoded text

Given a service document with the process list empty
When a visitor loads /services/[slug]
Then the process section does not render

Given a service document missing `deliverables.section_title`
When a visitor loads /services/[slug]
Then IconFeatureGrid renders using its own default title, not a blank heading

Given a service document missing `title`
When a visitor loads /services/[slug]
Then the page renders using `description` as a fallback title without throwing

Given the services index page
When a visitor loads /services
Then all services appear sorted by `order`, each linking to its own detail page with correct icon, service_name, and description

Given a case study tagged with a given service via the `case-studies.services` relationship
When a visitor loads that service's /services/[slug] page
Then only case studies tagged with that service appear in the case-studies grid
```

---

## SECTION 2: PLAN

**Stack and architecture**
Payload CMS (Postgres adapter) defined inline in `payload.config.ts`; Next.js App Router server components fetch via `getPayload({ config }).find(...)`. No API route layer — pages query Payload directly. Continue this pattern; no new architecture needed.

**Data model changes**
Rework the `services` collection (`payload.config.ts:30-55`):

| Field | Type | Notes |
|---|---|---|
| `service_name` | `text`, required | Renamed from `name`. `useAsTitle` in admin config. |
| `description` | `textarea` | Renamed from `short_description`. |
| `title` | `text` | New. Detail page H1. Falls back to `description` if empty. |
| `icon` | `upload` → `media` | Unchanged. |
| `order` | `number` | Unchanged. |
| `slug` | `text`, `unique: true` | Unchanged name, adds uniqueness constraint. |
| `deliverables` | group, see below | Restructured — adds `section_title`, wraps existing rows in `items[]`. Feeds `IconFeatureGrid`. |
| `process` | group, see below | New. Feeds `NumberedFeatureGrid`. |

`deliverables` field detail:
- `section_title` (`text`) — feeds `IconFeatureGrid`'s `title` prop only (replaces the hardcoded "From interest to action, we turn your efforts into measurable growth" string). The component's `eyebrow` prop ("What we deliver") stays hardcoded in the template — not sourced from this field.
- `items` (`array`, `minRows: 0`, `maxRows: 6`), each row (unchanged from current schema):
  - `icon` (`upload` → `media`)
  - `title` (`text`, required)
  - `description` (`textarea`)

`process` field detail:
- `section_title` (`text`) — feeds `NumberedFeatureGrid`'s `title` prop only (replaces the hardcoded "Partner with us for a unique and differentiated approach" string). The component's `eyebrow` prop ("Why choose us") stays hardcoded in the template, same treatment as deliverables.
- `items` (`array`, `minRows: 0`, `maxRows: 4`), each row:
  - `order` (`number`) — explicit, editor-set sort/step number, rendered as `"01."`-style in the template. Confirmed: real stored field, template sorts by it — not computed from array position.
  - `title` (`text`, required)
  - `description` (`textarea`)

Removed: `long_description` (richText) — dropped entirely, no replacement.

Note: `CaseStudiesGrid`'s `eyebrow`/`title` ("Featured case studies" / "Our marketing strategy in practice") also stay hardcoded — no CMS field requested for this section's heading, only its `studies` content (via the relationship, below).

**API contracts**
No new endpoints — Payload's local API (`payload.find`) used server-side only, consistent with both existing pages.

- `getServices()` in `services/page.tsx` — update field references (`name` → `service_name`, `short_description` → `description`).
- `getService(slug)` in `services/[slug]/page.tsx` — same `payload.find` call, `depth: 2` sufficient for the new nested group/array fields.
- New: `getRelatedCaseStudies(serviceId)` in `services/[slug]/page.tsx` — queries the `case-studies` collection `where: { services: { contains: serviceId } }`, `depth: 2` to populate `client` for company name, `limit: 3`.

**Patterns to follow**
Match the existing icon fallback pattern (`(typeof x === "object" ? x?.url : undefined) ?? FALLBACK_ICON`) for `deliverables.items[].icon`. Match the existing inline-typed `.map()` style used for `deliverables` in `[slug]/page.tsx` for the new `process.items.map()`.

**Testing strategy**
No existing test suite for these routes — manual QA via dev server. Seed one service with every field populated and one with optional fields empty; load `/services` and `/services/[slug]` for each.

**Security and performance constraints**
No `access` control on `services` today — publicly readable by default, unchanged. No performance concerns — new fields are scalar/small-array; the related-case-studies query is capped at `limit: 3`.

---

## SECTION 3: TASKS

### Task 1: Rework services collection schema
**What to build:** In `payload.config.ts`: rename `name` → `service_name` (update `useAsTitle`), rename `short_description` → `description`, add new `title` field, remove `long_description`, add `unique: true` to `slug`, restructure `deliverables` into `{ section_title, items[] }` (items keep existing `icon`/`title`/`description` shape), and add the new `process` field (`section_title` + `items` array of `order`/`title`/`description`).
**Files likely affected:** `payload.config.ts`
**Acceptance criteria:**
1. Admin UI shows the renamed fields, the restructured `deliverables`, and the new `process` field on the Services collection.
2. `src/payload-types.ts` regenerates with the updated shape.
3. Duplicate slug is rejected by the CMS.
**Dependencies:** none

### Task 2: Update services index + homepage teaser for renamed fields
**What to build:** Update `getServices()` in `src/app/(site)/services/page.tsx` (and the homepage's equivalent fetch) to read `service_name`/`description` instead of `name`/`short_description`.
**Files likely affected:** `src/app/(site)/services/page.tsx`, `src/app/(site)/page.tsx`
**Acceptance criteria:**
1. `/services` renders all services with correct name/description/icon/slug.
2. Homepage services teaser renders unchanged visually.
**Dependencies:** Task 1

### Task 3: Rebuild the service detail page
**What to build:** In `src/app/(site)/services/[slug]/page.tsx`: use `service.title ?? service.description` for `PageHeader`; update `IconFeatureGrid`'s `title` prop to `service.deliverables?.section_title` (fallback to component default, `eyebrow` stays hardcoded) and `items` to `service.deliverables?.items`; remove the `ServiceWhy` import/usage; build `NumberedFeatureGrid`'s `title` prop from `service.process?.section_title` (fallback to component default, `eyebrow` stays hardcoded) and `items` from `process.items` sorted by `order`; add `getRelatedCaseStudies(service.id)` and pass its result into `CaseStudiesGrid`'s `studies` prop (omit/fallback when empty, `eyebrow`/`title` stay hardcoded).
**Files likely affected:** `src/app/(site)/services/[slug]/page.tsx`
**Acceptance criteria:**
1. Hero title, deliverables (with section title, icons, and items), and process steps (with section title, in order) all render from CMS data with no hardcoded copy, while every section's `eyebrow` label remains the same generic hardcoded text as before.
2. No `ServiceWhy` section renders.
3. Case studies grid shows only case studies tagged with this service, falling back gracefully when none are tagged.
**Dependencies:** Task 1

### Task 4: Delete ServiceWhy
**What to build:** Delete `src/components/service-why.tsx` (no remaining callers after Task 3). Update `DESIGN.md`'s "Marketing Section Family" section, which currently documents `ServiceWhy` as still used on `/services/[slug]`.
**Files likely affected:** `src/components/service-why.tsx` (delete), `DESIGN.md`
**Acceptance criteria:**
1. No references to `ServiceWhy` remain in the codebase.
2. `DESIGN.md` no longer lists it as in use.
**Dependencies:** Task 3

### Task 5: Seed and manually verify
**What to build:** No code — seed one fully-populated service (with a tagged case study) and one with optional fields empty via the admin UI.
**Files likely affected:** none (CMS data only)
**Acceptance criteria:**
1. `/services` and `/` render unaffected.
2. `/services/[fully-populated-slug]` shows CMS title, deliverables (with its own section title, icons, and items), ordered process steps (with its own section title), and only its tagged case stud(ies) — with every eyebrow label matching the old hardcoded text.
3. `/services/[empty-slug]` renders without errors, using fallbacks, with the process section omitted and deliverables/process titles falling back to component defaults.
**Dependencies:** Tasks 1–4

---

## Assumptions to review

1. Related case studies are capped at `limit: 3` — Impact: LOW
   Correct this if: you want a different cap or unlimited.

2. No automated tests added since none exist for these routes today — Impact: LOW
   Correct this if: you want a minimal smoke test introduced alongside this change.

**Confirmed during planning (no longer open):**
- `process.items[].order` is a real editor-set field; the template sorts by it rather than computing numbering from array position.
- `deliverables` is restructured to `{ section_title, items[] }`, mirroring `process`, so both CMS-backed sections on the detail page have their own editable section title.
- Every grid section's `eyebrow` ("What we deliver", "Why choose us", "Featured case studies") stays hardcoded/generic — only each section's `title` is CMS-driven, since eyebrows are confirmed to never vary per service.
