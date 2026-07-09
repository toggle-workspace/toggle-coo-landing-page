---
name: toggle-copywriting
description: >
  Write, rewrite, or review any visible copy on the Toggle Solutions website.
  Use when the user asks to update headlines, body copy, CTAs, service descriptions,
  case study text, FAQ answers, section headings, meta titles, or any other text
  that appears on the site. This skill governs ALL copywriting for toggle-static.
  It synthesises Stop Slop, Ogilvy, and general copywriting principles into
  Toggle-specific rules. Always read WEBSITE_CONTENT.md before writing any copy.
license: MIT
metadata:
  project: toggle-static
  source-of-truth: WEBSITE_CONTENT.md
  updated: 2026-05-17
---

# Toggle Solutions — Copywriting Skill

You are writing copy for **Toggle Solutions**, a performance marketing and growth agency based in Kuala Lumpur working with brands worldwide.

---

## Step 0 — Read Before Writing

Before producing any copy:

1. Read `WEBSITE_CONTENT.md` in full. It is the single source of truth for all live copy, brand facts, metrics, client names, and page structure.
2. Identify which section the user wants to change.
3. Output only the affected copy, formatted to match the section structure in `WEBSITE_CONTENT.md`.

---

## Step 1 — The Hard Boundary (Read This First)

**Copy changes affect text only.**

You are authorised to change:
- Headlines, subheadings, labels (eyebrows)
- Body paragraphs and descriptions
- CTA button text
- Feature bullet points
- FAQ questions and answers
- Meta titles and meta descriptions
- Stat card labels and descriptions
- Case study excerpts, challenges, solutions, and results

You are NOT authorised to change without explicit user approval:
- Component names, file names, or folder structure
- CSS classes, Tailwind utilities, or inline styles
- Component props other than text content
- The order or presence of sections on a page
- The number of cards, steps, or list items in any section (adding or removing items changes layout)
- Any TypeScript, JSX, or logic code

If a copy request would require a structural change (e.g. adding a new stat card, changing from 3 steps to 4), stop and ask the user before proceeding.

---

## Step 2 — Brand Context

**Company:** Toggle Solutions  
**Founded:** 2021  
**Location:** Kuala Lumpur, Malaysia  
**Markets:** Global. Clients across Asia, the US, Europe, and the Middle East.  
**Positioning:** A full-service growth agency that runs paid media, creative, SEO, email, and lifecycle marketing under one integrated strategy — so every channel points at the same revenue goal.

**What makes Toggle different from a typical agency:**
- Strategy and execution stay in the same team. No handoffs between planners and buyers.
- Every channel runs under one strategy, not in silos.
- Every campaign is tied back to revenue, not vanity metrics.
- Multi-market expertise across Asia, the US, Europe, and the Middle East. Each market runs on different platforms, audiences, and creative norms. Toggle accounts for all of it.
- Long-term partnerships, not restrictive contracts.

**Primary audience:** Growing brands worldwide that are serious about revenue — not just impressions or clicks. They may be frustrated by past agencies that delivered reports but not results, or by siloed vendors who don't talk to each other.

**Tone:** Direct, confident, specific. Not corporate. Not hype. Not humble to the point of vague. Sounds like a senior strategist talking to a peer — informed, no nonsense, honest about what the work actually does.

---

## Step 3 — Writing Rules (Apply to Every Piece of Copy)

These rules combine Stop Slop, Ogilvy, and Toggle-specific standards. Apply all of them on every draft.

### 3a. Substance rules

- **Lead with the benefit, not the service.** Don't describe what Toggle does — describe what the client gets. "Profitable growth" beats "campaign management."
- **Be specific.** Use real numbers where they exist in `WEBSITE_CONTENT.md`. "47% CPL reduction" beats "significantly lower costs." Never invent numbers.
- **One promise per section.** Each section argues one point. Don't stack claims.
- **Active voice.** "We track every campaign to revenue" beats "Campaigns are tracked to revenue."
- **Name the actor.** Never write "the data shows" or "results improve." Someone did that. Name Toggle or the client.

### 3b. Style rules

- **No em dashes.** No exceptions. Use a comma or period instead.
- **No adverbs.** Kill all -ly words: really, truly, simply, genuinely, actually, significantly, incredibly, fundamentally.
- **No binary contrasts.** Don't write "not X, but Y." State Y directly.
- **No throat-clearing openers.** Cut "Here's the thing," "The truth is," "It turns out," and all variants.
- **No rhetorical questions as headings.** Headlines make claims. They don't ask questions.
- **No dramatic fragmentation.** Avoid stacking short punchy one-word sentences for effect.
- **No jargon.** Replace "navigate challenges" with "handle challenges." Replace "landscape" with "field" or "market." Replace "double down" with "increase" or "commit."
- **No passive voice.** Find the actor. Put them at the front.
- **No vague superlatives.** Avoid "best-in-class," "world-class," "cutting-edge," "innovative."
- **No adverb-adjective stacks.** "Highly effective campaigns" → "campaigns that generate revenue."

### 3c. Structure rules

- **Headlines:** 6–12 words. Include a specific benefit or outcome. No cleverness over clarity.
- **Subheadings / body openers:** 1–2 sentences. Expand the headline. Add one concrete fact.
- **Feature bullets:** Start with the deliverable, not the process. "Weekly reporting tied to real business metrics" beats "We report on metrics weekly."
- **CTAs:** Action verb + what they get. "Book a Consultation" beats "Get Started." "See Our Work" beats "Learn More."
- **Stat cards:** Stat on top, plain-language description below. The description explains what the number means for the client.
- **Case study metrics:** Use the exact figures from `WEBSITE_CONTENT.md`. Don't paraphrase numbers.

---

## Step 4 — Toggle Voice in Practice

Use these approved examples from live copy as your benchmark. Match this register.

**Headlines that work:**
- "The Agency Behind 50+ Growing Brands" — specific, factual, credible
- "Spend Smarter. Scale Faster." — two short claims, each a benefit, no filler
- "Reporting That Tells You What to Do Next." — benefit-led, speaks directly to the reader's frustration
- "Own the Search Results Your Competitors Are Chasing." — competitive framing with a clear win

**Body copy that works:**
- "We run paid media, creative, and lifecycle marketing as one system. Every channel points at the same goal: more revenue, less wasted spend."
- "Every dollar is tracked to revenue. Every decision is backed by data. The longer we run, the sharper the spend gets."
- "Most marketing reports tell you what the numbers were. Ours tell you what they mean and what to do about it."

**What these have in common:** Short sentences. One idea at a time. Specific and honest. No setup before the claim.

**Copy that does NOT fit the Toggle voice:**
- "In today's dynamic digital landscape, we help ambitious brands unlock their full potential." (jargon, vague, no claim)
- "We're not just an agency — we're your growth partner." (binary contrast, cliché)
- "Our holistic approach ensures synergistic outcomes across all touchpoints." (empty, corporate)
- "Results speak for themselves!" (says nothing, exclamation mark)

---

## Step 5 — Page-by-Page Rules

### Homepage

The homepage serves multiple intents: brand awareness, service discovery, and lead capture. The primary CTA is always "Book a Consultation."

- Hero: Lead with the biggest, most specific proof point (50+ brands, global reach). Follow with the integrated-system promise. Never start with a question.
- Partners section: One factual tagline. Client logos speak for themselves — don't editorialize.
- Features / How We Work: Explain the integration model. One section, one argument: channels under one strategy outperform channels in silos.
- Stats cards: Four cards maximum. Each must have a specific number and a one-sentence explanation of what it means for the client.
- Process steps: Three steps only. Each step name is a verb (Audit, Launch, Scale). Each description is 2–3 sentences.

### Services Page

Each service has: a headline (benefit-led), a card description (2–3 sentences), a full description (4–6 sentences), a target audience line, and a feature list.

- Card descriptions surface the single most compelling benefit first.
- Full descriptions expand with proof — how Toggle does it, what makes it different.
- Target audience is one sentence naming who this service is for and what they need.
- Feature bullets are deliverables, not processes. "Paid social campaign management" not "Managing paid social campaigns."

### Case Studies (Our Work)

Case studies follow: Challenge → Solution → Result. All three must be present.

- Challenge: 2–3 sentences. Be specific about the problem metric (CPL, position, conversion rate, revenue).
- Solution: 2–3 sentences. Name the specific approach Toggle used.
- Result: Lead with the number. Then explain what it means. Use exact figures from `WEBSITE_CONTENT.md`.
- Carousel excerpt: 3–4 sentences. The whole story compressed. Ends with the key result metric.

### About Page

- Headline: States the positioning, not the aspiration. "Performance marketing built to last" works. "We're passionate about helping brands grow" does not.
- Mission paragraphs: Two paragraphs. First names the problem. Second states Toggle's role in solving it.
- Core values: Four values. Each has a name and 1–2 sentences that explain what it means in practice — not platitudes.

### FAQ

- Questions are direct. Written as a visitor would actually ask them, not as a company would frame them.
- Answers start with the direct answer, then the detail. Not the other way around.
- No marketing copy inside FAQ answers. Informational, honest, specific.

### Contact Page

- Heading speaks to the visitor's intent: "Talk to a growth strategist." Not "Contact us."
- Trust indicators are specific: "Free, no-obligation consultation call" not "We value your time."
- Form heading is instructional: "Tell us about your business."

---

## Step 6 — Before Delivering Any Copy

Run this checklist. Fix every violation before output.

**Stop Slop checks:**
- [ ] Zero em dashes in visible copy
- [ ] No adverbs (-ly words, really, just, simply, actually, genuinely, truly)
- [ ] No binary contrasts ("not X, but Y" / "stop X and start Y")
- [ ] No rhetorical questions as headings
- [ ] No throat-clearing openers (Here's the thing, The truth is, It turns out)
- [ ] Active voice throughout — find the actor for every verb
- [ ] No dramatic three-item staccato fragments
- [ ] No vague superlatives (world-class, best-in-class, cutting-edge)
- [ ] Every claim is specific, backed by a fact or number

**Ogilvy checks:**
- [ ] Headline contains a specific promise or benefit
- [ ] Body copy tells more, not less — interested buyers read long copy
- [ ] Facts are loaded in. Count the specific facts. Add more if fewer than two per paragraph.
- [ ] CTA is action + outcome, not just a verb

**Toggle-specific checks:**
- [ ] Numbers match exactly what's in `WEBSITE_CONTENT.md`. No rounding, no inventing.
- [ ] Client names are spelled correctly (see Company Information in WEBSITE_CONTENT.md)
- [ ] Services are named consistently (e.g. "Search Engine Optimisation" not "SEO services")
- [ ] No structural changes proposed without user sign-off

---

## Step 7 — Output Format

Deliver copy in this format, matching the structure of `WEBSITE_CONTENT.md`:

```
## [Section Name]

**[Field label]:** [copy]

**[Field label]:** [copy]
```

For example:

```
## Hero Section

**Label (eyebrow):** Your Digital Growth Partner

**Headline:**
The Agency Behind 50+ Growing Brands

**Subheading:**
We run paid media, creative, and lifecycle marketing as one system. Every channel points at the same goal: more revenue, less wasted spend.
```

If writing alternatives, provide two options labelled **Option A** and **Option B** with a one-line rationale for each. Do not provide more than two alternatives — one argument wins or it doesn't.

After the copy, include a **Changes** section listing what was changed and why in plain language. This makes review fast for the team.

---

## Approved Facts and Figures

Use only these verified figures. Do not estimate or extrapolate.

| Fact | Value |
|---|---|
| Clients served | 50+ |
| Ad budget managed | RM60M+ |
| Client rating | 4.9/5 |
| Founded | 2021 |
| UNITAR leads generated | 32,000+ |
| UNITAR CPL reduction | 47% YoY |
| UNITAR impression share | 77% (Education & Training category, Malaysia) — client-specific, do not apply as a Toggle brand stat |
| CIMB organic impressions growth | 52.6% |
| CIMB organic clicks growth | 34.5% |
| Kith & Kin lead volume increase | 392% |
| Kith & Kin CPL | RM35 |
| Kith & Kin lead-to-deal conversion | 10% |
| Singlife organic clicks growth | 23% |
| Great Eastern clicks growth | 16% |
| Great Eastern search visibility | 75% increase |
| Mahbub online revenue | RM2.6M+ |
| Mahbub catering leads growth | +46% (Q3 to Q4 2024) |
| TPL Fresh Meats Meta revenue | RM172K+ |
| TPL Fresh Meats ROAS | 20x |
| Perf. marketing ROAS improvement | 3–5x within 90 days |
| Perf. marketing CAC reduction | 40% |
| Perf. marketing CVR lift | 2x from testing |
| Branding recall lift | 60% |
| Branding content production speed | 2x faster |
| Branding perceived value lift | 35% vs competitors |
| Web dev CVR uplift | 2.5x post-launch |
| Web dev Lighthouse score | 95+ |
| Web dev page load improvement | 60% faster |
| SEO traffic growth | 3x within 6 months |
| SEO paid dependency reduction | 50% over 12 months |

---

## Related Skills

These skills were used to build this one. Read them if you need deeper guidance on a specific dimension:

- `.agents/skills/stop-slop/SKILL.md` — Full pattern library for eliminating AI writing tells
- `.agents/skills/ogilvy/SKILL.md` — Positioning, promises, headline theory
- `.agents/skills/copywriting/SKILL.md` — Page structure, CTA formulas, section frameworks
