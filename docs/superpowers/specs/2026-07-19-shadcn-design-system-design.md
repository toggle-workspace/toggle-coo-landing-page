# shadcn Design System from Marketing Components

## Summary

Extend `src/components/ui/` (shadcn primitives) so their styling is pulled
from the existing marketing components in `src/components/*.tsx` — those
components are the source of truth, not the other way around. Add the
missing primitives, then refactor the marketing components that duplicate
hand-rolled markup to consume them instead. No visual change: same pixels,
routed through shared components.

## New primitives

### `ui/card.tsx` (new file — no Card exists today)

Standard shadcn `Card`/`CardContent` shape, CVA `variant` prop:

- `default` — `bg-card border rounded-lg` (matches the panel already
  hand-rolled in `Contact.tsx`, which already uses shadcn tokens, not a
  marketing hex)
- `muted` — flat `bg-[#f2f3f3]`, no border (the tile look duplicated in
  `CaseStudiesGrid`, `Testimonials`, `StatGrid`, `IconLabelGrid`,
  `ClientInfoCard`)

### `ui/badge.tsx` (new file — no Badge exists today)

Standard shadcn `Badge` shape, CVA `variant` prop:

- `tag` — red `#ff584d` text, no background (blog category tag in
  `BlogPreview`)

### `ui/button.tsx` (extend existing `buttonVariants`)

- new size `pill`: `h-fit rounded-full px-8 py-5 text-base font-semibold`
- new variant `brand`: `bg-[#eb332d] text-white hover:bg-[#eb332d]/90`
- new variant `brand-outline`: `border-[#292b2c] text-[#292b2c]
  hover:bg-[#292b2c] hover:text-white`

Replaces the repeated `cn(buttonVariants(), "rounded-full bg-[#eb332d]...")`
overrides in `CTA` and `Hero`.

### `ui/text-link.tsx` (new file)

Small standalone anchor component (not CVA-button-based — it isn't
button-shaped): `border-b-2 border-[#eb332d] pb-1.5 font-semibold
text-[#292b2c]`. Replaces the duplicated underline-link markup in
`CaseStudiesGrid`, `IconFeatureGrid`, `Story`.

## Refactor targets

Swap hand-rolled markup for the primitives above, no visual/prop-API change
to the outside of each component:

| Component | Change |
|---|---|
| `CaseStudiesGrid` | tile → `Card variant="muted"`, footer link → `TextLink` |
| `BlogPreview` | category tag → `Badge variant="tag"` |
| `Testimonials` | quote panel → `Card variant="muted"` |
| `StatGrid` | stat tile → `Card variant="muted"` |
| `IconLabelGrid` | value tile → `Card variant="muted"` |
| `ClientInfoCard` | logo box → `Card variant="muted"` |
| `IconFeatureGrid` | "Learn more" link → `TextLink` |
| `Story` | footer link → `TextLink` |
| `CTA` | button → `Button variant="brand" size="pill"` |
| `Hero` | action buttons → `Button variant="brand"/"brand-outline" size="pill"` |
| `Contact` | outer form/testimonial wrapper → `Card variant="default"` |

## Out of scope

- `Header`, `Footer`, `FAQ`, `ServiceWhy`, `VideoPanel`, `ClientLogos`,
  `Eyebrow`, `MarkerList`, `NumberedFeatureGrid`, `TeamGrid` — no
  duplicated pattern that maps to a missing shadcn primitive.
- `globals.css` theme tokens (`--primary`, `--accent`, etc.) — untouched.
  Brand hex values stay hardcoded inside the new primitives' variant
  classes, same as `DESIGN.md` already documents them today.
- The repeated `Eyebrow` + `h2` + optional description + optional trailing
  link section-header block (~7 occurrences) — a bespoke composite, not a
  shadcn primitive. Flagged, not built.

## Verification

- `npm run build` (or `tsc --noEmit`) after refactor — no type errors.
- Visual diff: run the dev server, screenshot each touched page
  (`/`, `/about`, `/case-studies`, `/case-studies/[slug]`, `/contact`)
  before and after, confirm pixel parity.
- Update `DESIGN.md`'s component catalog / Button Variants table with the
  new `Card`, `Badge`, `TextLink` primitives and the new Button
  variants/size.
