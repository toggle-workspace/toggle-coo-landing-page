# Design System

> Read this file before designing or building any new page or section.
> **Every new page in this site should be built from the "Marketing
> Section Family" component catalog below** — skip straight to that
> section. It's the current, actively maintained reference, covering
> `/`, `/about`, `/services`, `/services/[slug]`, `/case-studies`,
> `/case-studies/[slug]`, and `/contact`. The sections above it describe
> the original shadcn-based theme, kept only as history — every page is
> now on this family.

## Fonts

| Token | Family | Variable |
|-------|--------|----------|
| Sans | Inter | `--font-sans` |
| Mono | Geist Mono | `--font-geist-mono` |

## Color Tokens (oklch)

### Light mode

| Token | Value | Description |
|-------|-------|-------------|
| `--background` | `oklch(1 0 0)` | White |
| `--foreground` | `oklch(0.145 0 0)` | Near black |
| `--primary` | `oklch(0.205 0 0)` | Dark gray |
| `--primary-foreground` | `oklch(0.985 0 0)` | Off-white |
| `--secondary` | `oklch(0.97 0 0)` | Very light gray |
| `--muted` | `oklch(0.97 0 0)` | Same as secondary |
| `--muted-foreground` | `oklch(0.556 0 0)` | Mid gray |
| `--border` | `oklch(0.922 0 0)` | Light gray |
| `--input` | `oklch(0.922 0 0)` | Same as border |
| `--destructive` | `oklch(0.577 0.245 27.325)` | Red |

### Dark mode overrides

| Token | Value |
|-------|-------|
| `--background` | `oklch(0.145 0 0)` |
| `--foreground` | `oklch(0.985 0 0)` |
| `--primary` | `oklch(0.922 0 0)` |
| `--card` | `oklch(0.205 0 0)` |
| `--border` | `oklch(1 0 0 / 10%)` |
| `--input` | `oklch(1 0 0 / 15%)` |

## Border Radius

Base: `--radius: 0.625rem` (10px)

| Scale | Calc | px |
|-------|------|----|
| `--radius-sm` | `* 0.6` | 6px |
| `--radius-md` | `* 0.8` | 8px |
| `--radius-lg` | `* 1` | 10px |
| `--radius-xl` | `* 1.4` | 14px |
| `--radius-2xl` | `* 1.8` | 18px |
| `--radius-3xl` | `* 2.2` | 22px |
| `--radius-4xl` | `* 2.6` | 26px |

## Typography Scale

| Role | Classes | Weight |
|------|---------|--------|
| Hero h1 | `text-4xl sm:text-5xl md:text-6xl` | 500 (medium) |
| Section h2 | `text-4xl md:text-5xl` | 600 (semibold) |
| Card h3 | `text-3xl md:text-[42px]` | 600 (semibold) |
| Project title | `text-2xl` | default |
| Body | `text-base md:text-lg` | default |
| Secondary | `text-sm` | default |
| Eyebrow / label | `text-xs` tracking-widest uppercase | 600 (semibold) |

## Spacing

### Horizontal padding (section-level)

| Breakpoint | Class | px |
|------------|-------|----|
| base/sm | `px-6` | 24 |
| lg | `px-8` | 32 |

All section containers use `px-6 lg:px-8`.

### Vertical spacing (page-level)

| Context | Class | px |
|---------|-------|----|
| Section padding | `py-16 sm:py-32` | 64 / 128 |
| Section gap | `space-y-16 sm:space-y-32` | 64 / 128 |

### Component-level gaps

| Context | Class |
|---------|-------|
| Hero content | `gap-7` |
| Accordion items | `py-6`, `gap-6` / `gap-12` |
| Contact form fields | `gap-x-3 gap-y-6` |
| Card grids | `gap-4` / `gap-6` / `gap-8` |
| Form label | `gap-2.5` / `gap-1.5` |
| Infinite slider | `gap-[112px]` (custom) |

## Containers / Max-widths

| Token | rem | px | Used in |
|-------|-----|-----|---------|
| `max-w-7xl` | 80rem | 1280px | All section-level outer containers (Header, Footer, and every page section) |
| `max-w-3xl` | 48rem | 768px | Narrow content blocks |
| `max-w-xl` | 36rem | 576px | Subtext / descriptions |

All section containers use `max-w-7xl mx-auto px-6 lg:px-8`.

## Breakpoints (Tailwind defaults)

| Name | px |
|------|-----|
| `sm` | 640 |
| `md` | 768 |
| `lg` | 1024 |
| `xl` | 1280 |

## Button Variants

Defined with CVA in `src/components/ui/button.tsx`.

### Variants

| Name | Style |
|------|-------|
| `default` | `bg-primary text-primary-foreground` |
| `outline` | `border-border bg-background` |
| `secondary` | `bg-secondary text-secondary-foreground` |
| `ghost` | `hover:bg-muted` |
| `destructive` | `bg-destructive/10 text-destructive` |
| `link` | `text-primary underline-offset-4` |

### Sizes

| Name | Height | Padding | Font |
|------|--------|---------|------|
| `default` | `h-8` | `px-2.5` | — |
| `xs` | `h-6` | `px-2` | `text-xs` |
| `sm` | `h-7` | `px-2.5` | `text-[0.8rem]` |
| `lg` | `h-9` | `px-2.5` | — |
| `icon` | `h-8 w-8` | — | — |
| `icon-xs` | `h-6 w-6` | — | — |
| `icon-sm` | `h-7 w-7` | — | — |
| `icon-lg` | `h-9 w-9` | — | — |
| `pill` | `h-fit` | `px-8 py-5` | `text-base font-semibold` |

`pill` is the rounded-full CTA/Hero action button size (Marketing Section
Family). Pair with variant `brand` (`bg-[#eb332d]` red fill) or
`brand-outline` (`border-[#292b2c]` ink outline, inverts on hover) — both
sourced from the brand hex tokens above, not the oklch theme.

## Form Elements

| Element | Key classes |
|---------|-------------|
| Input | `h-8 rounded-lg border border-input px-2.5 py-1 text-base md:text-sm` |
| Label | `text-sm font-semibold` |
| Textarea | `min-h-32` |
| Select | Base UI `SelectTrigger` with custom Tailwind styling |

## Animations

| Name | Behaviour | Duration |
|------|-----------|----------|
| `infinite-scroll` | translateX 0 → -50% (horizontal loop) | `--scroll-speed` (40s default) |
| `infinite-scroll-reverse` | Same, reversed direction | `--scroll-speed` |
| `ticker` | translateX marquee | CSS var |

Speed control via CSS variable: `--scroll-speed` (default 40s), hover overrides via `--scroll-speed-hover` (20s).

## Components

### Header

```
sticky top-0 z-60
height: h-16
max-w-7xl mx-auto px-6 lg:px-8
border-b
Logo: 100×27px
```

Mobile: `Sheet` drawer for nav links.

---

### Hero (legacy dark variant — superseded, see Marketing Section Family below)

```
height: h-[70svh] md:h-[80svh]  (max-h-450 min-h-140)
background: dark gradient zinc-900 → zinc-800
layout: flex flex-col items-center justify-center
gap: gap-7
CTA margin-top: mt-8
contains: LogoCloud infinite slider (bottom)
```

This described the pre-redesign `hero.tsx`. It's been replaced by the
`Hero` component documented under "Marketing Section Family" — this
entry is kept only as history, don't build against it.

---

### Services

```
max-w-7xl mx-auto px-6 lg:px-8
Section header gap: gap-4
Accordion item: border-t py-6
Accordion icon: size-8 (collapsed) / size-10 (expanded)
Gap between title and bullets: gap-6 / gap-12
```

---

### Features Tabs (deleted — `features-tabs.tsx` had no remaining callers)

```
max-w-7xl mx-auto px-6 lg:px-8
container: rounded-4xl border p-4 lg:p-8
TabsList: h-12 inline-flex rounded-full
Tab indicator: absolute, animated underline
```

---

### Client Logos (legacy grid variant — superseded, see Marketing Section Family below)

```
max-w-7xl mx-auto px-6 lg:px-8
grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4
gap-x-8 gap-y-6 lg:gap-12
Logo aspect: aspect-3/1
dark:invert applied to images
```

`client-logos.tsx` is now the `InfiniteSlider` marquee variant described
below — this entry is kept only as history.

---

### Projects (deleted — `projects.tsx` was superseded by `CaseStudiesGrid`)

```
max-w-7xl mx-auto px-6 lg:px-8
Section header: flex row, title+description left, prev/next icon-lg buttons right (md+)
Carousel: Embla, edge fade masks (linear-gradient)
Carousel item: basis-[85%] md:basis-[45%]
Dot pagination: size-2 rounded-full, bg-primary (active) / bg-primary/20
```

---

### Contact

```
max-w-7xl mx-auto px-6 lg:px-8
grid grid-cols-1 lg:grid-cols-2
Form panel: border-b lg:border-r, rounded-lg border, p-8
Form fields: gap-x-3 gap-y-6
```

---

### Footer

```
max-w-7xl mx-auto px-6 lg:px-8
py-16
layout: flex flex-col → flex-row on md
columns gap: gap-12
Divider: border-border
```

---

### Meet the Team (deleted — `meet-the-team.tsx` was superseded by `TeamGrid`)

```
py-24
FaceSlider item size: size-40
rows gap: gap-2
overflow-hidden with mask-image gradient (progressive blur)
```

---

### Logo Cloud (infinite slider) (deleted — `logo-cloud.tsx` was superseded by `ClientLogos`)

```
overflow-hidden
mask-image: linear-gradient fade on edges (progressive blur)
gap-[112px] between items
animation: infinite-scroll / infinite-scroll-reverse
```

---

## Marketing Section Family (Figma `toggle-static` redesign)

Everything in this section covers the components used to build `/` and
`/about`, ported from the Figma file `toggle-static`
(`NIamr2doi24Fcs6LFqbAAd`). **Read this whole section before designing
or building a new page or section** — it's the reference point, update
it any time a decision here changes.

### Source of truth

- Design: Figma `toggle-static`. Use `get_design_context` (via the
  `figma-design-to-code` skill) on the target frame — treat the
  returned code as reference, adapt it to the conventions below rather
  than pasting it verbatim.
- Copy/content reference: `https://the7.io/fse-marketing-agency/` (the
  demo the Figma file itself was modeled on). Check it when unsure about
  copy or section order — but see "Known deviations" below for where we
  intentionally diverged from it.

### Brand tokens (as built)

These are hardcoded hex values inside the components below, **not**
the oklch theme tokens above — this redesign deliberately didn't touch
`globals.css`'s `--primary`/`--foreground`/etc., to avoid a global
side-effect from one section of the site. Use these hex values
directly when extending this component family.

| Token | Hex | Use |
|---|---|---|
| Ink | `#292b2c` | headings, primary text |
| Muted text | `#565b5d` | body copy |
| Faint text | `#889091` | captions, meta (dates, company names) |
| Faint number | `#d7dada` | large decorative numerals (e.g. `01.` in NumberedFeatureGrid) |
| Brand red | `#eb332d` | CTAs, accents, underlines, bottom bars |
| Light card bg | `#f2f3f3` | card/tile backgrounds |
| Light section bg | `#f7f8f8` | full-bleed section backgrounds (e.g. ClientLogos) |
| Tag red | `#ff584d` | blog post category tags (on dark image overlays) |

Font: still **Inter** — Figma specifies "Plus Jakarta Sans" but we kept
the site's existing font rather than swap it globally (see Known
deviations).

Layout: sections are full-width (`w-full`), inner content capped at
`max-w-325` (1300px, not the `max-w-7xl`/1280px used elsewhere in this
doc — this family is slightly wider), horizontal padding `px-6 lg:px-8`.
Pages stack sections with `space-y-24 sm:space-y-32` in the page's
wrapper div (see `src/app/(site)/page.tsx`).

### Component catalog

All in `src/components/`. Every one takes props with defaults matching
current home/about copy — pass overrides for a new page, don't fork
the file.

| Component | Purpose | Key props |
|---|---|---|
| `Eyebrow` | small bullet-icon + label, used above section headings | `children` |
| `Hero` | homepage-only landing hero: centered, with CTA `actions[]` | `eyebrow`, `title`, `description`, `actions[]` |
| `PageHeader` | inner-page header: left-aligned, no actions. Used by every non-homepage page (`/about`, `/services`, `/services/[slug]`, `/case-studies`, `/case-studies/[slug]`, `/contact`) | `eyebrow`, `title`, `description` |
| `Story` | two-column text + `VideoPanel`. Optional `stats[]` and `link` cover both the homepage and about-page variants | `title`, `description?`, `link?`, `stats?`, `videoImage`, `videoTitle?`, `videoDescription?` |
| `VideoPanel` | the "watch a video" image card with red play button, used inside `Story` | `image`, `title?`, `description?` |
| `IconFeatureGrid` | 2-col icon+text feature grid, generic (not services-specific) | `eyebrow`, `title`, `items[]` (`icon: string \| ReactNode`, `title`, `description`, `href?`, `linkLabel?`) |
| `ClientLogos` | logo marquee (`InfiniteSlider`) on a light gray band | `title`, `logos[]` |
| `CaseStudiesGrid` | 3-col case study cards with red bottom accent, links to `/case-studies/[slug]` | `eyebrow?`, `title`, `linkLabel`, `linkHref`, `showHeader`, `studies[]` (`slug?`), `limit` |
| `MarkerList` | single-column list, marker+title header row per item with indented description below | `title`, `description?`, `items[]` (`marker: ReactNode`, `title`, `description`) |
| `StatGrid` | 2-col (or 4-col) stat tiles on a light card background | `title`, `description?`, `items[]` (`value`, `label`), `columns` (`2 \| 4`) |
| `ClientInfoCard` | sidebar card: logo, description, industry/location, website link | `name`, `logo`, `description`, `industry`, `location`, `website` |
| `NumberedFeatureGrid` | 3-col numbered ("01.", "02.", "03.") feature list, generic (not "why us"-specific) | `eyebrow`, `title`, `items[]` |
| `IconLabelGrid` | 2x4 icon+label tile grid, generic (not values-specific) | `eyebrow`, `title`, `description`, `items[]` |
| `TeamGrid` | 4-col team member photo grid with red accent bar | `eyebrow`, `title`, `description`, `members[]` |
| `Testimonials` | quote card carousel (shadcn `Carousel`) | `eyebrow`, `title`, `testimonials[]` |
| `BlogPreview` | 3-col blog post cards over full-bleed photos | `eyebrow`, `title`, `linkLabel`, `linkHref`, `posts[]` |
| `CTA` | closing call-to-action band | `title`, `description`, `buttonLabel`, `buttonHref`, `footnote?` |

### Shared shadcn primitives (`src/components/ui/`)

Added to formalize markup that was duplicated across the catalog above —
these are new shadcn-shaped primitives whose styling was pulled from the
existing marketing components (never the other way around):

| Primitive | Variants | Used by |
|---|---|---|
| `Card` / `CardContent` | `default` (`bg-card border rounded-lg`, matches `Contact`'s panel), `muted` (flat `bg-[#f2f3f3]`, no border/radius) | `CaseStudiesGrid`, `Testimonials`, `StatGrid`, `IconLabelGrid`, `ClientInfoCard` (all `muted`); `Contact` (`default`) |
| `Badge` | `tag` (`text-[#ff584d]`, no background) | `BlogPreview` category tag |
| `TextLink` | single style: `border-b-2 border-[#eb332d] pb-1.5 font-semibold text-[#292b2c]` | `CaseStudiesGrid`, `IconFeatureGrid`, `Story` footer/inline links |

Note: `muted` `Card` intentionally has **no border-radius** — the marketing
tiles it replaces (case study cards, testimonial quotes, stat tiles, value
tiles, client logo box) are square-cornered. Only `default` gets
`rounded-lg`, matching `Contact`'s pre-existing panel.

Every page (`/`, `/about`, `/services`, `/services/[slug]`,
`/case-studies`, `/case-studies/[slug]`, `/contact`) is now built
entirely on this catalog.
`FeaturesTabs`, `MeetTheTeam`, and `LogoCloud` have been deleted — the
sections describing them above are kept only as history, don't
resurrect them. (Note: `PageHeader` is back as a real component in the
catalog above — a new, unrelated component built for this family, not
a resurrection of the deleted legacy one.) `FAQ` and `ServiceWhy` are
still legacy — used on
`/services/[slug]` alongside the migrated components, not yet folded
into the catalog. Don't reach for a legacy component for new
brand-design work — prefer the components above, and for a genuinely
novel section, build a new one that follows their shape (see "Building
a new page" below). Folding `FAQ`/`ServiceWhy` into the catalog is a
fine idea, but do it as its own deliberate task, not a drive-by change
while building something else.

### Data files

`src/data/*.ts` — plain arrays, no CMS (`blog-posts.ts`,
`case-studies.ts`, `testimonials.ts`). Use this pattern for page copy
that isn't in Payload. Add a new file here rather than hardcoding
arrays inside a component when the same shape could plausibly be
reused by more than one page.

Payload-backed content (currently only `services`) is fetched in the
page's server component and passed down as a `payload` prop — see
`getServices()` in `src/app/(site)/page.tsx`. Don't fetch inside a
section component.

### Assets

- `public/marketing/` — homepage assets (icons, photos, logos).
- `public/about/` — about-page-only assets (team photos, value icons).
- Figma asset URLs (`figma.com/api/mcp/asset/...`) expire in ~7 days —
  always download and commit them, never leave a live Figma URL as a
  `src`.
- **Verify each downloaded icon's `viewBox` before wiring it up**
  (`grep viewBox file.svg`). Value/service icons are 44px or 56px;
  small bullet icons are 14px. A wrong-size result means you copied the
  wrong asset ID — this has bitten us once already (the about-page
  value-icon off-by-one, fixed in commit `a3e1d81`).
- Client logos, team photos, and value/service icons should be the real
  downloaded assets, never a placeholder path that doesn't exist in
  `public/` — check the browser console for 404s before calling a page
  done.

### Building a new page in this family

1. Get the Figma frame's `get_design_context` for the new page.
2. Map each section in the frame to an existing component in the
   catalog above. Only build a new component for a section that has no
   existing match.
3. If a new section is genuinely novel, follow the existing components'
   shape: hardcode today's copy as prop *defaults*, accept overrides,
   use the brand tokens above, `Eyebrow` for the label-above-heading
   pattern, and the same `max-w-[1300px]` / `px-6 lg:px-8` container
   convention.
4. Download and commit any new image/icon assets (see Assets above).
5. Compose the page in `src/app/(site)/<route>/page.tsx`, wrapping
   sections in `<div className="space-y-24 sm:space-y-32">`.
6. Verify with Playwright: navigate to the local route, take a
   `browser_snapshot` (check for console errors — 404s are the most
   common mistake), and screenshot-compare against the reference site
   if one exists.
7. Update this file if the new page introduces a new token, a new
   shared component, or a new deliberate deviation from Figma.

### Known deviations from Figma / the reference site

- **Font stayed Inter**, not Plus Jakarta Sans — avoids a global,
  site-wide font change as a side effect of one page's design.
- **No scroll-triggered fade-in animations.** The reference theme
  fades sections in via `opacity-0` + JS on scroll; our sections render
  immediately. Simpler, and doesn't hide content from users without JS.
- **Case studies use the pre-existing generic `case-studies.ts` data**
  (Northwind Analytics, Stacklane, etc.), not the Figma-specific ones
  (Lumora, Summit Systems, etc.) — avoided introducing a second parallel
  fake dataset.
- **`/case-studies` drops the Industry/Service sidebar filters** from
  the Figma design (`the7.io/fse-marketing-agency/success-stories/`).
  `case-studies.ts` has no industry/service taxonomy, and the reference
  filters aren't wired to real filtering logic — reproducing them here
  would just be decorative. Add real filtering (and the taxonomy fields
  it needs) as its own task if this data becomes CMS-backed.
- **`/case-studies/[slug]` extends `case-studies.ts`** (per the
  deviation above) with per-study `client`, `challenges[]`,
  `approach[]`, and `results[]` fields, modeled on
  `the7.io/fse-marketing-agency/case/case06/` but keeping the existing
  fictional companies (Northwind Analytics, Stacklane, etc.) rather than
  the Figma-specific ones (Lumora, etc.). Client "logos" are the
  existing `logo-*.svg` marquee assets (cycled), reused since no real
  per-company logos exist — never point a `src` at an asset that isn't
  committed to `public/`.
- **`IconFeatureGrid`'s services callers assume a 4-icon set.** The real Payload
  `services` collection currently has 5 entries that don't match the
  Figma taxonomy (Marketing strategy / Paid advertising / Content
  marketing / SEO & GEO) at all — icons wrap via `i % icons.length` and
  will visibly repeat. This needs either updated CMS content or an
  updated icon set; flag it rather than silently patching around it.
