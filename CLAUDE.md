# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Next.js (App Router) / React 19 / TypeScript / Tailwind CSS rebuild of a Figma
design for An Ny Lam's product design portfolio. Home and About pages are built.
Of the 6 case-study pages under `/work/*`, `work/woolworths-internal-products`
and `work/bunch` are complete; the other 4 (RealSwipe, Echo Archive, Diamond
Roofing, How the Body Remembers, HobbyLink) are linked to but not yet
implemented (404 by design at this stage).

**Reference case studies:** `PROGRESS.md` at the repo root tracks the
Woolworths Internal Products page's pass-by-pass build history, the source
Figma/asset file mapping, and content research — useful as a worked example
of the case-study conventions (layout patterns, image-treatment decisions,
`CaseStudyHero`/`CaseStudyNav` usage) when building the remaining pages,
including Bunch, which reused and extended this pattern (see
`app/work/bunch/page.tsx` and the `CaseStudyHero` `subtitle`/optional-`intro`/
optional-`disclaimer` props it added for a differently-shaped hero).

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
  Explorations).
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
  applies to the not-yet-built case-study pages (Bunch, RealSwipe, Echo
  Archive, Diamond Roofing, How the Body Remembers, HobbyLink) as much as to
  what's already built.

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

## Content/assets

- `public/images/home/` — project card images (referenced by `lib/projects.ts`).
- `public/images/illustrations/` — hover-swap and decorative SVGs used in
  `CreativitySection`.
- Image dimensions in `Project` objects (`imageWidth`/`imageHeight`) must match the
  actual asset dimensions — they're passed directly to `next/image`.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
