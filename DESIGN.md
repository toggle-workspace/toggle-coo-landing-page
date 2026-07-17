# Design System

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

### Hero

```
height: h-[70svh] md:h-[80svh]  (max-h-450 min-h-140)
background: dark gradient zinc-900 → zinc-800
layout: flex flex-col items-center justify-center
gap: gap-7
CTA margin-top: mt-8
contains: LogoCloud infinite slider (bottom)
```

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

### Features Tabs

```
max-w-7xl mx-auto px-6 lg:px-8
container: rounded-4xl border p-4 lg:p-8
TabsList: h-12 inline-flex rounded-full
Tab indicator: absolute, animated underline
```

---

### Client Logos

```
max-w-7xl mx-auto px-6 lg:px-8
grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4
gap-x-8 gap-y-6 lg:gap-12
Logo aspect: aspect-3/1
dark:invert applied to images
```

---

### Projects

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

### Meet the Team

```
py-24
FaceSlider item size: size-40
rows gap: gap-2
overflow-hidden with mask-image gradient (progressive blur)
```

---

### Logo Cloud (infinite slider)

```
overflow-hidden
mask-image: linear-gradient fade on edges (progressive blur)
gap-[112px] between items
animation: infinite-scroll / infinite-scroll-reverse
```
