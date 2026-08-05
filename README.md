# An Ny Lam — Portfolio (Home page)

Next.js 15 / React / TypeScript / Tailwind CSS rebuild of the Figma design.

## Setup

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## What's built so far

- Root layout (`app/layout.tsx`) with shared `SiteHeader`, `ContactBanner`, and
  `SiteFooter` — these render on every route, so future pages just plug into
  `app/<route>/page.tsx`.
- Home page (`app/page.tsx`): Hero, Selected Work grid (4 case studies),
  "Outside of product design" section with hover-swap illustration, and
  Other Explorations grid (3 items).

## Assumptions made (flagging for review)

- **Fonts**: the exact Figma type families aren't recoverable from a flattened
  screenshot. Used **Plus Jakarta Sans** for headings and **Inter** for body
  text as the closest visual match to the rounded geometric sans in the
  design. Swap in `app/layout.tsx` if the real names are different.
- **Colours**: extracted by pixel-sampling the screenshot (not exact Figma
  tokens): `bg #F9F9F9`, `ink #161616`, `muted #5E5E5E`, `border #DEDEDC`,
  `teal #1DB1A3`, `teal-light #88D6D9` (confirmed from the SVG source),
  `coral #E35F3D` (from the illustration). Adjust in `tailwind.config.ts`.
- **Logo mark**: the "A." roundel in the nav isn't an available asset, so it's
  recreated as styled text in the heading font. Swap in `SiteHeader.tsx` /
  `SiteFooter.tsx` for a real logo file if you have one.
- **LinkedIn URL**: placeholder (`https://www.linkedin.com/`) in
  `SiteHeader.tsx` and `SiteFooter.tsx` — replace with the real profile URL.
- **Nav links**: `/about` and `/contact` don't have pages yet (built next),
  so those links will 404 for now — expected at this stage.

## Structure

```
app/
  layout.tsx        Root layout: fonts, header, contact banner, footer
  page.tsx           Home page
  globals.css
components/
  layout/            SiteHeader, SiteFooter, ContactBanner
  home/               Hero, CreativitySection
  work/               SectionIntro, ProjectGrid, ProjectCard (reused for all
                      case-study grids across future pages)
  ui/                 Tag, PillLink
lib/
  projects.ts        Case study content/data
public/images/       Image assets from the Figma export
```
