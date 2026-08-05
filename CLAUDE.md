# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Next.js 15 (App Router) / React 19 / TypeScript / Tailwind CSS rebuild of a Figma
design for An Ny Lam's product design portfolio. Currently only the home page is
built; case-study pages under `/work/*` are linked to but not yet implemented (they
404 by design at this stage).

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
- **`components/ui/`** holds small shared primitives (`Tag`, `PillLink`, `Logo`).
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
