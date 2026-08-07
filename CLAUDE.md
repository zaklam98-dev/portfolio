# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Next.js (App Router) / React 19 / TypeScript / Tailwind CSS rebuild of a Figma
design for An Ny Lam's product design portfolio. Home and About pages are built.
Of the 7 case-study pages under `/work/*` (see `lib/projects.ts`),
`work/woolworths-internal-products`, `work/bunch` and `work/realswipe` are
complete; the other 4 (Echo Archive, Diamond Roofing, How the Body Remembers,
HobbyLink) are linked to but not yet implemented (404 by design at this
stage). **Echo Archive is the natural next page to build** — no work has
started on it yet.

**Reference case studies:** `PROGRESS.md` at the repo root tracks the
Woolworths Internal Products page's pass-by-pass build history, the source
Figma/asset file mapping, and content research — useful as a worked example
of the case-study conventions (layout patterns, image-treatment decisions,
`CaseStudyHero`/`CaseStudyNav` usage) when building the remaining pages.
`app/work/bunch/page.tsx` is a second worked example, and is where several
of the shared case-study components below (`CaseStudyHero`'s flexible props,
`BeforeAfterPair`) were introduced or generalized — read it alongside
Woolworths when starting a new page, since between the two of them most
layout patterns a new case study needs already have precedent.

### Current status / next steps (as of this session)

Done this session: built `app/work/realswipe/page.tsx` end-to-end (Research
through Reflection/Next Projects), using `app/work/bunch/page.tsx` as the
structural reference. One deviation from precedent worth flagging: the
RealSwipe source assets (`~/Desktop/portfolio_images/RealSwipe/`) are
pre-annotated exports — each Before/After screenshot already has its own
baked-in "BEFORE"/"AFTER" label and hand-drawn callout arrows explaining the
UX change, unlike Woolworths/Bunch's clean crops. Using `BeforeAfterPair`
on these would have doubled up the label (component renders its own Eyebrow
label above the image). Rendered them as a plain `Reveal`+`Image` two-column
grid instead (no shared component) — this is now the precedent for any other
not-yet-built case study whose source exports turn out to be pre-annotated
the same way; check `BeforeAfterPair`'s doc comment against the actual asset
first rather than assuming it fits every Before/After pair.

Previous session, beyond the Bunch page build itself:
- Generalized `CaseStudyHero` (see Architecture below) so it fits pages whose
  hero doesn't match Woolworths' exact shape.
- Made `CaseStudyNav`'s pill-to-anchor scrolling JS-driven instead of relying
  on global CSS (see Motion conventions) — fixes route changes snapping
  instantly to the top instead of visibly scrolling up from wherever the
  previous page was scrolled to.
- Made `ProjectCard` tags always `variant="outline"` (transparent background)
  — this now applies to every project card sitewide (Home's Selected
  Work/Other Explorations grids and every case study's Next Projects grid).
- Built `BeforeAfterPair` (see Content/assets below) after finding two
  different before/after image-sizing bugs on the Bunch page, and used it to
  replace both of Bunch's hand-rolled before/after blocks.

Not done / still open:
- Echo Archive, Diamond Roofing, How the Body Remembers, HobbyLink case
  studies are unbuilt.
- Woolworths Internal Products doesn't use a labeled Before/After *pair*
  pattern anywhere (it only has standalone "Before" spreadsheet screenshots,
  each followed later by a separate "Final Experience" section rather than a
  directly adjacent "After") — so `BeforeAfterPair` doesn't apply there and
  there was nothing to retrofit. Keep this in mind if that page's structure
  changes later: only true side-by-side/stacked Before+After comparisons need
  the component and its scale-mismatch check, not every "Before" label.

## Commands

```bash
npm install      # install deps
npm run dev       # start dev server at http://localhost:3000
npm run build     # production build
npm run start     # run production build
npm run lint       # next lint (eslint-config-next / core-web-vitals)
```

There is no test suite configured in this repo.

## Architecture

- **`app/layout.tsx`** is the root layout and renders `SiteHeader`, `ContactBanner`,
  and `SiteFooter` on every route. New pages just need `app/<route>/page.tsx`; the
  header/footer chrome is automatic.
- **`lib/projects.ts`** is the single source of truth for case-study content: the
  `Project` type and the `selectedWork` / `otherExplorations` arrays consumed by
  `app/page.tsx`. Adding or editing a project card means editing this file, not JSX.
- **`components/work/ProjectCard.tsx` + `ProjectGrid.tsx`** are the reusable
  case-study card/grid, driven entirely by `Project` objects — intended to be reused
  by future `/work/*` pages as well as the home page's two grids (`columns`/`size`
  props control layout density: 2-col/large for Selected Work, 3-col/small for Other
  Explorations). Tags always render `variant="outline"` (transparent background) —
  `Tag`'s `solid` variant still exists but nothing currently uses it; don't
  reintroduce it without a specific reason, since transparent tags are now the
  sitewide convention, not a one-off.
- **`components/work/CaseStudyHero.tsx`** props are more flexible than they
  look at first read, to fit hero layouts that don't match Woolworths' exact
  shape: `subtitle` renders under the title in the left column (for case
  studies like Bunch whose title has a one-line subtitle attached, rather
  than a separate `intro` paragraph next to the meta table); `intro` and
  `disclaimer` are both optional and simply don't render their block when
  omitted (Bunch has neither). Check a new case study's Figma hero against
  both patterns before assuming the Woolworths layout is the only shape.
- **`components/work/BeforeAfterPair.tsx`** renders a labeled Before/After
  image comparison, in `layout="side-by-side"` (two columns, e.g. two phone
  mockups — the default) or `layout="stacked"` (full-width sections one
  after another, e.g. two desktop screenshots, or an "after" side with
  multiple images). **Before using it for a new pair, visually compare each
  side's source screenshot: does the actual UI card/screen fill the whole
  canvas, or does the canvas also bake in annotation arrows/labels (or extra
  margin) alongside it?** If only one side has that extra baked-in padding,
  rendering both sides at the same container width makes the padded side's
  real content look smaller than its counterpart — set that side's
  `contentScale` (a fraction of its column width, e.g. `0.71`) to compensate.
  Estimate the value by measuring where the actual UI content ends within the
  padded canvas (e.g. via a quick Python/PIL alpha-scan) rather than
  guessing, then verify with a side-by-side screenshot that the two cards
  now match in size. Default (`contentScale: 1`, both sides) means neither
  canvas needs adjustment — most pairs won't need this prop at all.
- **`components/layout/`** holds the shared chrome: `SiteHeader`, `SiteFooter`,
  `ContactBanner`.
- **`components/home/`** holds home-page-only sections (`Hero`,
  `CreativitySection` — the hover-swap illustration section).
- **`components/ui/`** holds small shared primitives (`Tag`, `PillLink`, `Logo`,
  `Eyebrow`, `Reveal`).
- Path alias `@/*` maps to the repo root (see `tsconfig.json`).

## Styling conventions

- Design tokens live in `tailwind.config.ts`: colors (`bg`, `ink`, `body`, `muted`,
  `border`, `teal`/`teal-light`, `coral`), `font-heading`/`font-body` (mapped to CSS
  vars set in `app/layout.tsx`), `max-w-content` (1200px page width), and the
  `fadeUp` keyframe/animation.
- Fonts are loaded via `next/font/google` in `app/layout.tsx`: **Urbanist** for
  headings, **Inter** for body — exposed as `--font-heading` / `--font-body` and
  consumed through the `font-heading` / `font-body` Tailwind utilities. (Note:
  README.md mentions "Plus Jakarta Sans" as an earlier assumption; the actual
  implemented heading font is Urbanist — trust `app/layout.tsx` over the README.)
- Colors/fonts are best-effort matches pixel-sampled from a flattened Figma
  screenshot, not exact design tokens — see README.md "Assumptions made" for the
  full list (logo mark recreated as styled text, LinkedIn URL is a placeholder,
  `/about` and `/contact` nav links have no pages yet).
- Use the `container-content` utility class (defined in `app/globals.css`) for
  page-width containers rather than re-deriving max-width/padding per section.
  Case-study (`/work/*`) pages use `container-work` instead (same pattern, capped
  at `max-w-6xl` to match that content column's measured width).
- Respects `prefers-reduced-motion` globally (see `app/globals.css`).
- **Border radius is a standing design-system rule, not a per-Figma-frame
  choice.** Every card/block-style container (bordered content blocks, note/
  disclaimer boxes, grid wrappers) gets rounded corners — `rounded-xl2` (20px)
  for these bordered block containers, matching `ProjectGrid`'s wrapper. Image
  treatments follow their own established radii (`rounded-2xl` for hero
  banners, `rounded-xl`/`rounded-lg` for card thumbnails). If a Figma frame
  shows a sharp-cornered block, round it anyway to match this system — this
  applies to the not-yet-built case-study pages (Echo Archive, Diamond
  Roofing, How the Body Remembers, HobbyLink) as much as to what's already
  built.

## Motion conventions

- **`components/ui/Reveal.tsx`** is the standing viewport-reveal system —
  every page (built or not-yet-built) should use it for content entering the
  viewport, rather than a one-off animation. It's a client component backed
  by a single shared `IntersectionObserver` (cheap even with many siblings on
  one page, e.g. a card grid), animates each element once, and reads
  `prefers-reduced-motion` to skip straight to the visible end state — a
  `<noscript>` rule in `app/layout.tsx` also forces `.reveal` elements
  visible with JS disabled, so content never gets stuck invisible.
- Usage: `<Reveal variant="..." index={i}><YourElement /></Reveal>`. Variants
  (`heading`, `paragraph`, `image`, `card`, `button`, `default`) set
  duration/lift/scale per content type — see the `VARIANTS` map in the
  component before inventing new values. For staggered siblings (card grids,
  photo stacks, feature lists), pass `index={i}` from the `.map()` call
  (≈100ms per step); use `delay` directly for hand-tuned one-off sequences
  (e.g. cascading hero content on load).
- **Wrap from the outside in, never rebuild a component's own root.** Reveal
  renders a plain `div` and only ever touches `opacity`/`transform` via
  inline style, so nest it around an element rather than merging it into a
  component that already manages its own hover transform (`ProjectCard`,
  `PlatformCard`'s `group-hover:scale-*`, the About photo stack's
  `rotate-*`/hover-lift) — nested transforms compose fine, but nothing should
  ever be *replaced*.
  - Exception: when the element Reveal wraps carries load-bearing layout
    classes itself (negative margins, `z-index`, explicit sizing — e.g. the
    About page photo stack), fold those classes into Reveal's own
    `className` instead of adding another wrapper `div`, so Reveal's root
    *is* the flex/grid item rather than an extra ancestor around it.
  - **Never wrap `CaseStudyNav` (or any ancestor of it).** It's
    `position: fixed`; a `transform` on any ancestor — including Reveal's
    pre-reveal inline transform — creates a new containing block for fixed
    descendants and silently breaks the sticky nav's viewport positioning.
    Wrap `CaseStudyHero`'s other children individually instead.
- **Smooth scrolling is JS-driven per-click, not global CSS.** `app/globals.css`
  does *not* set `html { scroll-behavior: smooth }` — it was tried early on but
  made route changes (e.g. Home → a case study) visibly scroll up from
  wherever the previous page had been scrolled to, instead of snapping
  instantly to the top of the new page. Instead, `CaseStudyNav`'s pill links
  call `element.scrollIntoView({ behavior: 'smooth' | 'auto', block: 'start' })`
  directly in an `onClick` handler (falling back to `'auto'` under
  `prefers-reduced-motion`, matching `Reveal`'s convention) and update the URL
  via `history.pushState` rather than a native hash navigation. If a future
  page needs another in-page anchor-jump control, follow this same
  JS-per-click pattern rather than reaching for global `scroll-behavior`.

## Content/assets

- `public/images/home/` — project card images (referenced by `lib/projects.ts`).
- `public/images/illustrations/` — hover-swap and decorative SVGs used in
  `CreativitySection`.
- Image dimensions in `Project` objects (`imageWidth`/`imageHeight`) must match the
  actual asset dimensions — they're passed directly to `next/image`.
- **A visible border around a screenshot/mockup asset may be baked into the
  PNG's pixels, not a CSS border you added.** Before assuming a border needs
  a CSS fix, zoom into a corner of the source asset — if the stroke is part
  of the raster image (common on Figma card exports), removing it means
  editing the asset, not the component. The approach used for Bunch's
  `part01-3-initiatives.png`: erode the image's alpha-opaque mask inward by a
  few px (`scipy.ndimage.binary_erosion`), then for every pixel in that outer
  ring, replace its RGB with the nearest pixel *inside* the eroded mask
  (`scipy.ndimage.distance_transform_edt(..., return_indices=True)`) — this
  recolors just the border ring to blend into the card's interior fill
  without touching alpha (so the card's rounded shape is unchanged) or any
  interior illustration content (which sits well inside the erosion margin).
  Re-export and replace the asset in `public/images/work/<slug>/`.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
