# Case studies: Payload migration spec

Status: **implemented** and fully cut over. `payload.config.ts`, `SCHEMA.md`,
`src/lib/case-studies.ts`, and every case-studies consumer (`/`,
`/case-studies`, `/case-studies/[slug]`, `/services/[slug]`) read from the
`case-studies` Payload collection. `src/data/case-studies.ts` has been
deleted — there is no static fallback left anywhere on the site.

## 1. Why

Per `SCHEMA.md` and `DESIGN.md`, `/case-studies` (list + detail) was a known,
deliberate deviation: it read from a static `CASE_STUDIES` array instead of
the `case-studies` collection, because the collection never carried enough
fields to represent a full case study. This closed that gap and removed the
static file entirely.

## 2. Field additions — `client` collection

Added as plain top-level fields (matching the collection's existing flat
style):

```ts
{ name: 'description', type: 'textarea' },
{ name: 'location', type: 'text' },
{ name: 'website', type: 'text' },
```

Company name and logo on the case-study detail page come from this relation
(`client.company_name`, `client.logo`) — no duplicate `company`/`logo` fields
were added on `case-studies`.

## 3. Field additions — `case-studies` collection

```ts
{ name: 'category', label: 'Category', type: 'text' },
{ name: 'image', label: 'Hero image', type: 'upload', relationTo: 'media' },
{ name: 'challenges', label: 'Challenges', type: 'richText' },
{ name: 'approach', label: 'Our approach', type: 'richText' },
{
  name: 'results',
  label: 'The results',
  type: 'array',
  minRows: 0,
  maxRows: 6,
  fields: [
    { name: 'value', type: 'text', required: true },
    { name: 'label', type: 'text', required: true },
  ],
},
```

`long_description` (pre-existing richText field) had no consumer in the
layout and was removed rather than left unused. `challenges`/`approach` are
`richText` fields (not `{title, description}` arrays) so editors write
free-form prose/lists, rendered via a shared `RichText` component
(`src/components/rich-text.tsx`, wrapping `@payloadcms/richtext-lexical/react`'s
`RichText`).

`client` on `case-studies` is not `required: true` in code (would break any
existing doc with no client set), but editorially every published case study
should have one — `ClientInfoCard` is simply omitted if `client` is unset.

## 4. Shared data layer — `src/lib/case-studies.ts`

All case-study fetching goes through this module rather than each page
querying Payload directly:

- `getAllCaseStudies(limit?)` — all case studies, sorted by `order`. Used by
  the homepage (`limit: 6`), `/case-studies` list page (no limit), and as
  `/services/[slug]`'s fallback when a service has no tagged case studies.
- `getRelatedCaseStudies(serviceId, limit?)` — case studies tagged to a given
  service via the `services` relationship. Used by `/services/[slug]`.

Both return a lightweight `CaseStudySummary` shape (`title`, `company`,
`description`, `slug?`) — exactly what `CaseStudiesGrid` renders.

## 5. Page wiring

- **`/` (home)**: fetches `getAllCaseStudies(6)`, passes to `CaseStudiesGrid`.
- **`/case-studies`**: fetches `getAllCaseStudies()` (no limit), passes to
  `CaseStudiesGrid` with `showHeader={false}`.
- **`/case-studies/[slug]`**: fetches the single doc via `payload.find`
  (`depth: 2`, so `client.logo`/`client.industry` resolve). Maps fields to
  the page markup:
  - Page header eyebrow = `` `${category}  |  ${services.map(s => s.service_name).join(", ")}` ``
  - Page header title = `name`
  - "Challenges" / "Our Approach" sections render via `<RichText data={...} />`
  - `StatGrid` items ← `results[]`, description ← `short_description`
  - `ClientInfoCard` props ← the `client` relation's fields
  - The "related case studies" grid at the bottom of this page was removed
    (deliberate — no longer shows a "Latest case studies" section here).
- **`/services/[slug]`**: fetches `getRelatedCaseStudies(service.id, 3)`; if
  empty, falls back to `getAllCaseStudies(3)` (a generic recent set) so the
  section still has content when nothing is tagged yet.

## 6. Empty-state handling

`CaseStudiesGrid` returns `null` when `studies` is empty, instead of
rendering an empty white section with just a heading. This matters now that
there's no static fallback — an empty `case-studies` collection means these
sections simply don't render anywhere they're used.

## 7. Migration workflow

Followed `DATABASE_MIGRATION.md`'s process: edited `payload.config.ts`
locally against the `dev` branch (push mode auto-synced it), ran
`npx payload migrate:create add_case_studies_richtext_results_fields`,
reviewed the generated SQL (new `client` columns, new `case-studies` columns,
new `case_studies_results` array table, `long_description` dropped), and ran
`npx payload generate:types` to refresh `src/payload-types.ts`. Still needs:
testing against a fresh branch reset from prod before this ships to
production, per that doc's safety checklist.

## 8. Explicitly out of scope

- Seeding real case studies into Payload — the collection is empty until
  someone fills it in via the admin UI.
- Any taxonomy/filtering rework (DESIGN.md's deferred Industry/Service sidebar
  filters on `/case-studies`) — not solved here.
