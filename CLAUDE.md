# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Next.js (App Router) / React 19 / TypeScript / Tailwind CSS rebuild of a Figma
design for An Ny Lam's product design portfolio. **The site is feature-complete**:
Home, About, Contact, and all 7 case studies under `/work/*` are built — every
nav link resolves, nothing 404s. `work/hobbylink` is a "coming soon" page *by
design* (its Figma source is intentionally just a short hero + disclaimer,
not an unfinished build).

## Status at a glance

- ✅ **Completed** — see below. No known outstanding work.
- 🚧 **In progress** — nothing.
- ⏭️ **Next steps** — none queued. Ask the user what they want to work on
  next rather than assuming a backlog.
- **Production/deployment**: no deployment config (e.g. `vercel.json`) is
  tracked in this repo. Git remote is `github.com/zaklam98-dev/portfolio`.
  If this site is deployed (Vercel or otherwise), that's configured outside
  this repo — check the hosting platform directly for live URL/status; it
  isn't recorded here.

## ✅ Completed

- **All pages built**: Home, About, Contact, and 7 case studies (Woolworths
  Internal Products, Woolworths • Bunch, RealSwipe, Echo Archive, Diamond
  Roofing, How the Body Remembers, HobbyLink).
- **Header/footer nav**: Home / Work (dropdown) / About / LinkedIn / CONTACT.
  The Work dropdown lists all 7 projects (sourced from `lib/projects.ts`,
  not hardcoded), click-triggered, opens downward in the header / upward in
  the footer. Mobile gets its own tap-to-expand accordion inside the
  hamburger menu.
- **Logo replaced sitewide** (`components/ui/Logo.tsx`) — new mark, tightened
  viewBox so it renders visually larger without touching any container size.
  Favicon (`app/icon.svg`) uses the same new mark.
- **Home/About hero entrance choreography** (the `.hero-anim-*` CSS system) —
  tuned over many rounds of feedback in an earlier session; stable, not
  something to casually re-tune.
- **Contact/`ContactBanner` email**: click-to-copy (not `mailto:`), hover
  color-swap, "Copied!" tooltip + button pulse feedback, and optically
  centered (the decorative squiggle no longer contributes to the centering
  box — see Conventions below).
- **`CaseStudyNav`** (the floating pill nav on case studies): scroll-spy
  active state, auto-scrolls its own pill row into view, suppresses
  scroll-spy flicker during a click-triggered smooth scroll, and fades out
  as the footer approaches so it can never overlap it.
- **Mobile hamburger menu**: is a floating overlay (expanding the Work
  accordion no longer shifts page content), and closes on outside click.
- **Mobile responsiveness**: fixed a real horizontal-overflow bug on the
  About page (root-caused to fixed-pixel-width elements, not just patched
  with `overflow-x: hidden`); the About "photo stack" now uses a
  viewport-relative `calc()` formula so it consistently spans ~90–95% of
  the viewport width across 320–430px.
- **Woolworths Internal Products** hero image swapped for a clearer 2x export.

## ⏭️ Next steps / optional polish

Nothing is blocking. If picking up loose ends:

- Mobile hamburger menu closes on outside click but not on `Escape`
  (`WorkDropdown` supports both) — minor inconsistency, low priority.
- **How the Body Remembers** and **Echo Archive** each have a small amount
  of copy reconstructed from a source screenshot where the sticky nav-pill
  overlay obscured the original text. Flagged as "reasonably confident" at
  the time but never independently re-verified against the source Figma.
- `README.md` is stale (Plus Jakarta Sans, logo-as-styled-text, placeholder
  LinkedIn URL, "/about and /contact not built yet" — all superseded by
  this file and the actual code). Low priority since this file is what
  Claude reads, but worth a pass if a human contributor might read it.

## 🐛 Known issues / technical debt

- No test suite configured in this repo.
- No CI/deployment config tracked here (see Status above).
- The two copy-reconstruction spots and the stale README above.

## 📝 Conventions & decisions

### Architecture

- **`app/layout.tsx`** renders `SiteHeader`, `ConditionalContactBanner`, and
  `SiteFooter` on every route.
  `ConditionalContactBanner` (`components/layout/ConditionalContactBanner.tsx`)
  hides the global `ContactBanner` only on `/contact` — that page's own hero
  already *is* the banner's content, promoted to primary content. Extend its
  pathname check if another page ever needs the same opt-out.
- **`lib/projects.ts`** — `Project` type + `selectedWork`/`otherExplorations`
  arrays, the single source of truth for every case-study card. Also exports
  `allProjects` (`[...selectedWork, ...otherExplorations]`), used anywhere
  that lists every project (the Work dropdown, mobile accordion).
- **`lib/constants.ts`** — `LINKEDIN_URL` and `EMAIL`, imported by
  `SiteHeader`, `SiteFooter`, and `EmailLink` instead of repeating literals.
- **`components/work/ProjectCard.tsx` + `ProjectGrid.tsx`** — shared
  card/grid for every project listing sitewide. Tags always render
  `variant="outline"`. `Project.comingSoon` (set on HobbyLink) renders a
  pill over the card image — use this flag rather than baking a status
  badge into a future image asset.
- **`components/work/CaseStudyHero.tsx`** — `subtitle`/`intro`/`disclaimer`/
  `navItems` are all optional and simply don't render when omitted. Check a
  new case study's actual Figma hero shape before assuming it matches
  Woolworths' (image → title/meta) layout; How the Body Remembers is hand-
  rolled instead because its hero order differs.
- **`components/work/CaseStudyNav.tsx`** — the fixed dark pill nav:
  - Scroll-spy via `IntersectionObserver` (`rootMargin: "-20% 0px -70% 0px"`),
    not scroll-position math.
  - A click on a pill immediately sets that pill active and sets a ref flag
    that makes the observer ignore updates until the resulting smooth scroll
    settles (`scrollend` event, or a 1500ms safety timeout) — prevents every
    intermediate section from flashing active while scrolling past it.
  - Keeps the active pill in view by setting the pill row's own `scrollLeft`
    directly — never `scrollIntoView`, which would risk scrolling the page.
  - Fades out (`opacity`/`translate`) as the page footer approaches
    (`IntersectionObserver` on the `<footer>`, `rootMargin` triggers ~120px
    early) so it can never sit on top of the footer.
- **`components/work/BeforeAfterPair.tsx`** — labeled before/after image
  comparison (`side-by-side` default or `stacked`). Before using it, check
  whether either side's source screenshot bakes in extra padding/annotation
  around the actual UI — if so, set that side's `contentScale` to compensate
  (measure where real content ends via a PIL alpha-scan, don't guess).
- **`components/layout/`** — `SiteHeader`, `SiteFooter`, `ContactBanner`,
  `ConditionalContactBanner`, `WorkDropdown`.
  - `WorkDropdown` is **click-triggered, not hover** (a deliberate reversal —
    don't reintroduce hover-to-open). `direction="down"|"up"` for header vs.
    footer; closes on outside-click or `Escape`.
  - `SiteHeader`'s mobile nav panel is `position: absolute` (floats over
    page content instead of pushing it down when the Work accordion
    expands) and closes on outside click via a `headerRef` + `mousedown`
    listener. It does **not** reuse `WorkDropdown` — it's a separate,
    hand-rolled accordion suited to a full-width mobile menu.
- **`components/ui/`** — `Tag`, `PillLink`, `Logo`, `Eyebrow`, `Reveal`,
  `EmailLink`.
  - `PillLink` only has `dark`/`teal` variants. An `outline` variant +
    `external` prop were added and reverted **twice** for CTAs that were
    later removed — don't re-add speculatively; a third genuine need is the
    signal to keep it permanently instead of cycling again.
  - `Logo.tsx`'s `viewBox` is deliberately cropped tight to the mark's real
    ink bounds (not the source asset's native `0 0 1000 1000` — the mark
    only filled ~70%×61% of that box). This is *why* the logo reads larger
    everywhere without any container size changing. `fill`/`stroke` are both
    `currentColor` so it themes correctly wherever it's used.
  - `EmailLink.tsx` (click-to-copy button, hover color-swap, "Copied!"
    tooltip + button pulse) has two load-bearing structural rules — both
    documented in the file itself, don't undo them:
    1. The tooltip is a **sibling** of the button, never nested inside it —
       the button's own copy-pulse `transform` would otherwise become a new
       containing block and hijack the tooltip's position.
    2. The decorative squiggle (in both `ContactBanner` and `ContactHero`)
       is `position: absolute`, outside the wrapper's normal flow — so the
       wrapper's width (what gets centered, and what the tooltip's
       `left-1/2` centers against) is driven by the email text alone, not
       email+squiggle combined. This is what keeps the email optically
       centered instead of shifted by the squiggle's width.
- Path alias `@/*` maps to the repo root (see `tsconfig.json`).

### Styling

- Design tokens in `tailwind.config.ts`: colors (`bg`/`ink`/`body`/`muted`/
  `border`/`teal`+`teal-light`/`coral`), `font-heading` (Urbanist) /
  `font-body` (Inter), `max-w-content` (1200px).
- `container-content` utility for page-width sections; `container-work` for
  case-study pages (`max-w-6xl`).
- **Border radius is a standing system rule, not per-Figma-frame**:
  `rounded-xl2` (20px) for bordered block containers, `rounded-2xl` for hero
  banners, `rounded-xl`/`rounded-lg` for card thumbnails — round a
  sharp-cornered Figma frame anyway to match.
- `README.md`'s "Assumptions made" section is stale — trust this file
  instead (real heading font is Urbanist not Plus Jakarta Sans; logo is a
  real SVG asset, not styled text; LinkedIn URL is real, not a placeholder).

### Motion

- **`.hero-anim-*`** (`app/globals.css`) — one-time, CSS-only load-in
  choreography for above-the-fold hero content only (Home/About/Contact
  heroes). Not for scroll-triggered content — that's `Reveal`'s job.
  - `.hero-anim-rise` / `-letter` / `-group-settle` (transform-only bounce
    wrapping an already-visible group, e.g. "AN NY,") / `-draw` & `-draw-lg`
    (stroke-dasharray reveal — **the dasharray value must be measured per
    asset** via a bezier arc-length script, never guessed or reused across
    different squiggle assets) / `-mask` (the descender-safety buffer must
    live on the inner animated element, not the outer clip wrapper).
  - Per-element `animationDelay` values in `Hero.tsx`/`AboutHero.tsx` are
    hand-tuned from several rounds of feedback — don't "clean up" the
    specific millisecond numbers without a reason.
- **`.email-copied-pulse` / `.email-copied-tooltip`** (`app/globals.css`,
  right after `.hero-anim-*`) — `EmailLink`'s copy-confirmation animations,
  reusing `.hero-anim-*`'s spring easing for a consistent feel. See the
  sibling-not-child structural rule under Architecture above.
- **`components/ui/Reveal.tsx`** — the standing scroll-into-view system,
  one shared `IntersectionObserver`, variants `heading`/`paragraph`/`image`/
  `card`/`button`/`default`. Wrap from the outside in — never replace a
  component's own root/transform. **Never wrap `CaseStudyNav` or its
  ancestors** (a `transform` breaks its `position: fixed`).
- Smooth scrolling is JS-driven per-click (`CaseStudyNav`'s pill `onClick` +
  `scrollIntoView`), not global CSS `scroll-behavior` (tried once — broke
  scroll position across route changes).

### Content/assets

- `public/images/home/` — project card images; `public/images/illustrations/`
  — `CreativitySection`/`AboutHero` hover-swap art.
- `Project.imageWidth`/`imageHeight` must match the actual asset — passed
  directly to `next/image`.
- **A visible border on a screenshot/mockup asset may be baked into the
  PNG's pixels, not CSS.** Check every asset in a batch-exported set, not
  just the one that visibly shows it — all 7 home card images once shared
  an identical baked-in border from the same export step.
- **Overwriting a `/public` image file in place (same filename) can leave
  the dev server showing the old version even after a hard refresh.** Clear
  `.next/dev/cache/images` (safe, regenerable) before assuming the copy
  failed.

## Commands

```bash
npm install      # install deps
npm run dev       # start dev server at http://localhost:3000
npm run build     # production build
npm run start     # run production build
npm run lint       # next lint (eslint-config-next / core-web-vitals)
```

No test suite, no env vars/secrets — fully static content, no backend/API calls.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
