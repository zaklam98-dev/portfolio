# Woolworths Internal Products — case study progress

Status checkpoint for `app/work/woolworths-internal-products/page.tsx`, the first
of 6 case-study pages. **All 5 passes are now complete** — the page is fully
built end-to-end (Hero through Next Projects) and every `navItems`/
`PlatformCard` anchor (`#overview`, `#project-01/02/03`, `#outcomes`)
resolves to a real section. This file is kept as a historical record of the
content/asset research and layout decisions for this case study — useful
reference if similar patterns are needed for the other 5 not-yet-started
case-study pages (Bunch, RealSwipe, Echo Archive, Diamond Roofing, How the
Body Remembers, HobbyLink).

## Done (Pass 1)

Hero, Overview, Enterprise Products, and Design Philosophy are built, pixel-checked
against the Figma screenshot, and retrofitted with the `Reveal` viewport-animation
system (see CLAUDE.md → Motion conventions).

- **`components/work/CaseStudyHero.tsx`** — hero image, H1, `MetaTable`, intro
  paragraph, `CaseStudyNav`, disclaimer note. Props: `image/imageWidth/imageHeight/
  imageAlt`, `title`, `meta: {label, value: string[]}[]`, `intro`, `navItems:
  {label, href}[]`, `disclaimer`.
- **`components/work/MetaTable.tsx`** — label/value row list (`Role`, `Year`,
  `Deliverables`).
- **`components/work/CaseStudyNav.tsx`** — the sticky pill nav. `fixed` to the
  viewport bottom (not `sticky` — must **never** sit inside a `Reveal` wrapper or
  any other transformed ancestor, since `transform` creates a new containing
  block for `position: fixed` descendants and silently breaks it). Logo links
  home; the pill row scrolls independently of the pinned logo on narrow
  viewports.
- **`components/work/PhaseSectionHeader.tsx`** — teal eyebrow + H2 + optional
  bold subtitle. Used at the top of each Part.
- **`components/work/IconCard.tsx`** — bordered `rounded-xl2` block, optional
  `icon` (image src, rendered inline before the title — used for Design
  Philosophy's 4 principle icons) or no icon (used for "Key Design Decisions"
  cards in each Part). `variant="card"` `Reveal` handles equal-height rows
  automatically now (see Motion conventions in CLAUDE.md) — no manual `h-full`
  needed when wrapping it.
- **`components/work/PlatformCard.tsx`** — the 3 Enterprise Products summary
  cards linking to `#project-01/02/03`. Whole card is a `Link`, flex-column with
  `mt-auto` on the tags+CTA block so it stays flush to the bottom regardless of
  description length. Tags use `variant="outline"` (transparent bg). **Update
  (later session):** `ProjectCard` was changed to `variant="outline"` too, so
  every project card sitewide (Home's Selected Work/Other Explorations, this
  case study's Next Projects) now has transparent-bg tags — the `solid`
  variant still exists on `Tag` but nothing currently uses it.
- **`components/ui/Eyebrow.tsx`** — promoted from `components/about/` to
  `components/ui/` this session (`variant="teal"` default / `"muted"` for
  gray section labels like `OVERVIEW`, `ENTERPRISE PRODUCTS`).
- Assets copied to `public/images/work/woolworths-internal-products/`: `hero.png`,
  `product-01/02/03.png`, `icons/{decision,cognitive,scanning,consistent}.svg`.

### Known content gap

The disclaimer's copy was originally obscured in the source screenshot by the
overlapping sticky nav; the user has since supplied the real text and it's live.
No other flagged gaps remain in the built sections.

Source screenshot: `/Users/annylam/Desktop/portfolio_figma/Woolworths Internal
Products.png` (3413×32768 — has ~277px black letterboxing bars on both sides;
crop those out before measuring). Source assets:
`/Users/annylam/Desktop/portfolio_images/Woolworths Internal Products/`.

## Done (Pass 2)

Part 01 (Industry Events Platform, `id="project-01"`) is built, verified
against a full-resolution crop of the source screenshot (not just the
low-res overview), and checked live in-browser at
`/work/woolworths-internal-products#project-01` — text, layout and image
stacking all confirmed correct.

- `PhaseSectionHeader` eyebrow "Product 01", title "Industry Events
  Platform", subtitle "A searchable event management platform replacing
  spreadsheet-based event tracking."
- **Problem** (left, plain paragraphs with a bold lead sentence — *not* the
  blockquote treatment) / **Design Objectives** (right, 4 bullets),
  two-column.
- **Before** — label + one-line caption + `01 - Before.png` (1731×395,
  copied to `project-01-before.png`), wrapped in `rounded-xl2 border
  border-border overflow-hidden` since the asset is a flat rectangular
  spreadsheet screenshot with no baked-in shadow.
- **Key Design Decisions** — 4 `IconCard`s, no icon, 4-col grid: "Powerful
  Search & Filtering", "Smarter Event Organisation", "Calendar View",
  "Responsive Experience".
- **Final Experience** — 3-column bullet list (Search-first navigation /
  Calendar planning, Multi-filter system / Responsive layouts, Stacked event
  cards), confirmed order of images/text below it:
  1. `01 - Final 1.png` (1772×1369 → `project-01-final-1.png`) — annotated
     "INDUSTRY EVENTS" page (Search/Filtering/Quick View/Stacked cards
     callouts).
  2. `01 - Final 2.png` (1799×1163 → `project-01-final-2.png`) — Feb 2026
     calendar view, "calendar" callout.
  3. "Designing For Complex Filtering" (teal `Eyebrow`) two-column text +
     `01 - Final 3.png` (653×848 → `project-01-final-3.png`, AusFresh
     Produce Expo detail card) side by side.
  4. Pull-quote: *"Teams can now discover relevant events in seconds instead
     of navigating large spreadsheets."* — same `border-l-2 border-ink/30`
     blockquote treatment as Overview's quote.
  5. "Responsive Experience" (muted `Eyebrow`) + one-line paragraph.
  6. `01 - Mockups.png` (2160×890 → `project-01-mockups.png`) — full-bleed
     teal/green gradient banner, 5 floating mobile/panel mockups; the only
     Part 01 image with no source transparency, so it's the only one wrapped
     (`rounded-2xl overflow-hidden`, no border, matching the hero banner
     treatment) rather than rendered bare.
  - `Final 1`/`Final 2`/`Final 3`/`Mockups` are all rendered as bare
    `next/image`s with **no** added border/bg wrapper (aside from Mockups'
    corner-rounding above) — confirmed via pixel-sampling that each PNG is
    RGBA with transparent corners and already has its own drop-shadow/rounded
    device-chrome baked in from the Figma export; wrapping them in a solid
    bordered box would visibly clash with that baked-in shadow.
- Assets copied to `public/images/work/woolworths-internal-products/` as
  `project-01-before.png`, `project-01-final-1.png`, `project-01-final-2.png`,
  `project-01-final-3.png`, `project-01-mockups.png`.

## Done (Pass 3)

Part 02 (New Releases Platform, `id="project-02"`) is built, verified against
a full-resolution crop of the source screenshot, and checked live in-browser
at `/work/woolworths-internal-products#project-02`.

- `PhaseSectionHeader` eyebrow "Product 02", title "New Releases Platform",
  subtitle "A centralised platform helping teams discover upcoming product
  launches."
- **Challenge** (left, `border-l-2 border-ink/30` blockquote — same treatment
  as Overview's quote, *not* Part 01's plain-paragraph Problem style) /
  **Design Objectives** (right, 5 bullets), two-column.
- **Before** — label only, no caption line (unlike Part 01), + `02 -
  Before.png` (1731×395 → `project-02-before.png`), same `rounded-xl2 border
  border-border overflow-hidden` treatment as Part 01's Before.
- **Key Design Decisions** — only 2 `IconCard`s, no icon, 2-col grid:
  "Category-First Navigation", "From Spreadsheet Rows To Product Cards" —
  each has a horizontal inline bullet row (`flex flex-wrap list-disc gap-x-6
  pl-5`, not a stacked `<ul>`) matching the source's single-line bullet
  layout: Grocery/Fresh/Protein/Fruit & Vegetable, and Launch Type/Brand/
  Team/Launch Date respectively.
- **Final Experience** — confirmed order:
  1. `02 - Final.gif` (1438×806 → `project-02-final.gif`) rendered via
     `next/image` with `unoptimized` (required — Next's optimizer doesn't
     preserve GIF animation), wrapped `rounded-2xl overflow-hidden` (opaque
     full-bleed banner, same treatment as Part 01's Mockups.png).
  2. `02 - Card.png` (1561×508 → `project-02-card.png`) — annotated "Party Mix
     Share Bag" product card, rendered bare (RGBA, transparent corners,
     baked-in shadow, same as Part 01's floating-card images).
  3. One-line paragraph: "Each business area received a tailored visual
     identity while sharing the same underlying product experience."
  4. 2×2 grid of category illustrations. **Resolved** the "contact sheet or 4
     separate frames?" open question from Pass 2 planning: `02 -
     Screens.png` (1728×1380) is a single sprite sheet — **cropped into 4
     individual 846×624 RGBA PNGs** (`project-02-category-{fresh,protein,
     grocery,fruit-veg}.png`) via alpha-channel bounding-box detection (see
     `/private/tmp/.../scratchpad` python crop script if this needs redoing
     for another asset), each already has its own rounded corners baked in
     → rendered bare in a `sm:grid-cols-2` grid, no added wrapper.
  5. `02 - Errors.png` (1575×477 → `project-02-errors.png`) — single asset
     already containing all 3 empty-state illustrations (No Results/Internal
     Error/Session Expired) side by side on transparent bg; rendered as one
     bare full-width image, no cropping needed.
  6. "Bringing Delight To Enterprise Software" (teal `Eyebrow`) + paragraph +
     4-item bullet list (parallax scrolling / animated sparkles / layered
     illustrations / interactive transitions) + closing paragraph — this is
     the last content in Part 02, immediately followed by Part 03's header.
- Assets copied to `public/images/work/woolworths-internal-products/` as
  `project-02-before.png`, `project-02-final.gif`, `project-02-card.png`,
  `project-02-category-fresh.png`, `project-02-category-protein.png`,
  `project-02-category-grocery.png`, `project-02-category-fruit-veg.png`,
  `project-02-errors.png`.

## Done (Pass 4)

Part 03 (Compliance Review Platform, `id="project-03"`) is built, verified
against a full-resolution crop of the source screenshot, and checked live
in-browser at `/work/woolworths-internal-products#project-03`.

- `PhaseSectionHeader` eyebrow "Product 03", title "Compliance Review
  Platform", subtitle "A layered review experience that helps users quickly
  understand AI-generated compliance findings."
- **Context** — full-width (not two-column), muted `Eyebrow` + 3 plain
  paragraphs, no blockquote.
- **Problem** (left) / **Design Objectives** (right, 4 bullets), two-column
  — same pattern as Part 01/02's two-column sections.
- **Solution** — muted `Eyebrow` + one-line paragraph, then 3 stacked
  full-width images. Confirmed (unlike Part 01's Final 3) the hand-written
  callouts ("Overall Status First" / "Executive Summary" / "Progressive
  Disclosure") are **baked into each screenshot asset itself**, not a
  separate JSX-authored text pairing — so each renders as one bare
  `next/image`, stacked vertically, no wrapper (RGBA, transparent corners,
  same floating-shadow treatment as other Final/Solution screenshots):
  1. `03 - 1.png` (1790×880 → `project-03-solution-1.png`).
  2. `03 - 2.png` (1716×853 → `project-03-solution-2.png`).
  3. `03 - 3.png` (1783×875 → `project-03-solution-3.png`).
- **Designing For Trust** (teal `Eyebrow`) + paragraph + 4-item bullet list
  (critical failures / warnings / informational checks / supporting
  evidence) + closing paragraph — last content in Part 03, immediately
  followed by the Pass 5 Outcomes section below.
- Assets copied to `public/images/work/woolworths-internal-products/` as
  `project-03-solution-1.png`, `project-03-solution-2.png`,
  `project-03-solution-3.png`.

## Done (Pass 5) — final pass, case study now complete

Outcomes / Reflection / Next Projects (`id="outcomes"`) is built, verified
against a full-resolution crop of the source screenshot, and checked live
in-browser at `/work/woolworths-internal-products#outcomes`.

- **"Outcomes"** — a standalone large heading (plain `<h2>` with the same
  `font-heading text-4xl font-extrabold md:text-5xl` classes
  `PhaseSectionHeader`'s title uses, but no eyebrow/subtitle — confirmed
  this is *not* the teal-eyebrow-label pattern the rest of the page uses).
  Paragraph: "These enterprise products transformed fragmented operational
  workflows into intuitive digital experiences that support teams across
  Woolworths." / "The platforms now enable users to:" then 3 bullets —
  discover information faster / navigate large datasets more efficiently /
  review complex information with greater confidence.
- **Reflection** — muted `Eyebrow` + 3 paragraphs (confirmed exact copy for
  all 3, resolving the Pass 4 open item):
  1. "Designing enterprise products taught me that **the biggest challenge
     was never simply creating polished interfaces, it was understanding
     how people make decisions within complex systems.**" (bold starts
     mid-sentence).
  2. "Across every project, I found that the greatest improvements came
     from organising information thoughtfully, reducing cognitive load and
     presenting the right information at the right time." (plain, no bold).
  3. "That mindset continues to shape how I approach every product I
     design: **start with the decisions users need to make, then design
     experiences that make those decisions feel effortless.**" (bold
     starts mid-sentence).
- **Next Projects** — muted `Eyebrow` + `ProjectGrid` reused from
  `lib/projects.ts`'s `selectedWork`, filtered to exclude
  `woolworths-internal-products` → Bunch, RealSwipe, Echo Archive, `columns=3
  size="small"` (matches home page's "Other Explorations" grid treatment,
  not the 2-col "Selected Work" one). **Resolved an open question**: the
  Figma design does *not* show the `001`/`002`/`003` number badge that
  `ProjectCard` renders when `project.number` is set (confirmed by
  comparing against the live home page, where Selected Work *does* show
  numbers) — so the page maps the filtered array to `{ ...project, number:
  undefined }` before passing it to `ProjectGrid`, rather than modifying
  `ProjectCard`/`ProjectGrid` themselves (both stay untouched, reusable
  as-is for other case-study pages that may want numbers shown).

## Conventions established this session (also in CLAUDE.md)

Already documented in `CLAUDE.md` under **Styling conventions** (`container-work`,
the border-radius standing rule) and **Motion conventions** (`Reveal` usage,
the `variant="card"` equal-height fix, the `CaseStudyNav`/`position:fixed`
hazard). Nothing motion- or styling-related from this session is undocumented
there — this file is purely the content/asset research and pass-by-pass plan,
which is specific to this one case study rather than a sitewide convention.
