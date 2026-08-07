# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Next.js (App Router) / React 19 / TypeScript / Tailwind CSS rebuild of a Figma
design for An Ny Lam's product design portfolio. Home, About and Contact
pages are built, and **all 7 case-study pages under `/work/*`** (see
`lib/projects.ts`) are built — every route in site nav now resolves, there is
no unbuilt/404ing page left. `work/hobbylink` is itself a "coming soon"
placeholder *by design* (its own Figma source is just a hero + challenge/
concept blurb + a disclaimer note saying the full case study is in
progress) — that's not a gap to fill, it's the actual current source design.
`/contact` (below) is the one exception to "every page has a Figma source" —
it was designed originally within the existing system, not traced from a
screenshot, and its copy is a first draft pending the user's review.

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

**Status: no known outstanding work.** All 7 case studies plus Home, About
and Contact are built, and the Home/About hero entrance animation (below) is
finished and tuned to the user's taste through several rounds of feedback.
There is no queued next step — the next session should ask the user what
they want to work on rather than assume there's a backlog. One caveat:
Contact's hero copy (see below) is a first-pass draft the user hasn't
reviewed/edited yet — don't treat its wording as locked the way every other
page's copy is.

Done this session (most recent first): built `app/contact/page.tsx` +
`components/contact/ContactHero.tsx` — the last unresolved route, so the
site's full nav (Home, About, Contact, all 7 case studies) now works
end-to-end with no 404s. Unlike every other page, Contact has **no Figma
source** — the user asked for it to be designed originally but strictly
within the existing system (same tokens/spacing/radii/motion, no new
component styles). Two things worth flagging:
- `ContactBanner` already renders globally on every page via
  `app/layout.tsx`, directly under `{children}` — so Contact's own content
  is deliberately just a short calm hero (pill badge "Let's talk" → heading
  "Let's build something together" → one-line paragraph → Email me/LinkedIn
  CTAs) that leads into the global banner as its closing CTA, rather than
  duplicating "get in touch" messaging a second time. Checked visually: the
  hero's copy and the banner's "Have an idea, a project, or just want to
  chat?" line don't overlap in wording.
- `PillLink` (`components/ui/PillLink.tsx`) gained an `outline` variant
  (`border border-border text-ink hover:bg-surface/60 rounded-full px-6
  py-3` — same treatment as `Tag`'s outline variant, pill-shaped and sized
  to match `PillLink`'s existing `dark`/`teal` variants) for the secondary
  "Connect on LinkedIn" CTA, plus an `external` prop (sets
  `target="_blank" rel="noopener noreferrer"`, mirroring the `external`
  flag `SiteHeader`/`SiteFooter` already use on their nav-link arrays) since
  no prior `PillLink` usage pointed off-site. Reach for these before
  hand-rolling another outline/external link button. The LinkedIn href is
  the same `https://www.linkedin.com/` placeholder already used in
  `SiteHeader`/`SiteFooter` (see README's noted assumption that the real
  LinkedIn URL isn't wired up yet).
- Hero copy is intentionally short/calm per direct request ("shouldn't try
  to out-compete the global banner") — resist the urge to pad it out with
  more sections; if the user wants Contact to grow (a form, FAQ, etc.) treat
  that as new scope, not a gap in this build.

Earlier this session: built a choreographed load-in animation for the Home
(`components/home/Hero.tsx`) and About
(`components/about/AboutHero.tsx`) heroes, replacing their previous
scroll-triggered `Reveal`-based entrance. See the new **Motion conventions**
entry below for the reusable `.hero-anim-*` system this introduced — read
that before touching either hero again, since the final per-element timing
values came from several rounds of "still doesn't look right" iteration
with the user (spring timing moved 5 times before landing on "bounce +
squiggle fire together, right after the heading's last element finishes")
and shouldn't be re-derived from scratch. Also went through several rounds
of illustration updates on `public/images/illustrations/creativity-
{default,hover}.png` (originally 434×444, then re-exported at 900×851 for
clarity, then again at **1000×969 with darkened linework** — the current,
final files) — no code changes needed for any of these swaps since both
`CreativitySection.tsx` and `AboutHero.tsx` already render them via `fill` +
`object-contain`, so a future illustration swap should be similarly drop-in
as long as the new files keep a roughly similar aspect ratio (very different
ratios will letterbox more visibly). The display box itself *did* need a
code change, separate from the asset swaps: it was still sized for the old
380px source and looked soft even with the sharper 900×851 art, so both
components' box (and matching `sizes` attr) were widened from
`h-[280px]/w-[280px] md:h-[380px]/w-[380px]` to **`md:h-[500px]/w-[500px]`**
— the 1000×969 source now matches that box exactly at 2x retina scaling.
If either illustration is swapped again, re-check that the new asset's
native resolution still comfortably covers a 500px display box at 2x
(i.e. ≥1000px wide) or it'll go soft again.

Earlier this session: built `app/work/hobbylink/page.tsx` — the last unbuilt
case study, so **all 7 `/work/*` pages are now complete.** Its Figma source
is intentionally short: hero (image → title/subtitle+meta, the normal
`CaseStudyHero` order, no nav pills — same `navItems` omission as Diamond
Roofing) → a "Full case study coming soon" note → The Challenge → The
Concept → Next Projects. That disclaimer note rendered via
`CaseStudyHero`'s existing `disclaimer` prop with zero new markup — its
gray-box-plus-warning-triangle treatment is pixel-for-pixel what the Figma
showed. Next Projects excludes RealSwipe (same curated 3-item allowlist
pattern as Diamond Roofing, for the same reason: HobbyLink isn't in
`selectedWork` so the self-exclude filter doesn't apply).

Also earlier this session, two follow-up fixes to `how-the-body-remembers` after
the initial build (both from direct user feedback, not part of the initial
build pass — worth knowing if similar patterns come up elsewhere):
- A flexbox `min-width: auto` bug in the Probe Kit cards: an `<Image>` with
  `flex-1` still refuses to shrink below its own `width` attribute (its
  intrinsic content size) unless the flex item *and* the image both also
  get `min-w-0`. Without it, images rendered at full raw pixel width and
  overflowed their card. Any future text+image flex row sized with
  `flex-1`/percentage `basis` needs `min-w-0` on both the flex container
  and the image, not just a `w-full` on the image — `w-full` alone doesn't
  override the flex min-size floor.
- `IconCard` (`components/work/IconCard.tsx`) gained two optional props,
  `iconSize` (default 24, so Woolworths' existing philosophy-card usage is
  unaffected) and `className` (appended to the root card, for background
  overrides like HTBR's Findings/What-Changed cards at `bg-[#FDFCF9]`).
  Reach for these before hardcoding a one-off variant of `IconCard`
  elsewhere.

Previous session: built `app/work/how-the-body-remembers/page.tsx`
end-to-end (Overview → Phase 1/2/3 → Opportunity → Reflection/Next
Projects). Two things worth flagging:
- This is the first case study whose **hero doesn't put the image first**.
  Every other page's hero is `image → title/subtitle+meta grid` (that fixed
  order is `CaseStudyHero`'s whole structure); this one's Figma is
  `title/subtitle → image → paragraphs+meta grid`. Rather than adding an
  `imagePosition` prop to `CaseStudyHero` for a single one-off order swap,
  the hero was hand-rolled directly in the page using `MetaTable` +
  `CaseStudyNav` + `Reveal` (the same primitives `CaseStudyHero` composes
  internally) rather than the component itself. If a future page needs this
  same reordered shape too, *then* it's worth promoting into a
  `CaseStudyHero` prop — one occurrence isn't.
- Several sections needed icons this project doesn't have SVG assets for
  (a 5-step methodology timeline, 6 findings cards, a Background/Research
  Questions pair). Used emoji glyphs matching the source Figma's icon
  shapes (🔍💬🎙️📝✨ etc.), the same fallback `app/work/bunch/page.tsx`
  already established for its "Impact At A Glance" row — reach for emoji
  before inventing new SVGs when a case study's icons weren't exported.
- Two small pieces of hero/meta copy were obscured behind the nav-pill
  overlay in the source screenshot (same recurring issue as Echo Archive):
  the `Methods` meta row's last two items, and a sentence in the intro
  paragraph. Reconstructed both from visible line fragments plus matching
  phrases used elsewhere in the same case study's copy — reasonably
  confident, worth a quick check against the source Figma if available.

Earlier session: built `app/work/diamond-roofing/page.tsx` end-to-end.
This is an **Other Exploration**, not a Selected Work case study, and its
Figma source is visual-portfolio-shaped rather than UX-process-shaped (no
Research/Solution/Reflection narrative — just Logo Concept → Colour
Palette/Typography → Brand Applications → Website Design → Mobile
Experience → Next Projects). Two things worth flagging:
- Its hero has **no pill nav** at all (single-scroll page, no in-page
  anchors in the source). `CaseStudyHero`'s `navItems` prop is now optional
  — omitting it skips rendering `CaseStudyNav` entirely rather than showing
  an empty pill row. Check for this before assuming every case study needs
  nav pills.
- Its hero mockup (laptop + phone + mug on a desk) **wasn't exported as a
  separate asset** — unlike every other case study so far, there was no
  `Hero.png` equivalent in `~/Desktop/portfolio_images/Diamond Roofing/`.
  Recovered it by cropping the region directly out of the flattened
  `~/Desktop/portfolio_figma/Diamond Roofing.png` screenshot with PIL
  (saved to `public/images/work/diamond-roofing/hero.png`) — the same
  "recover from the flattened screenshot" fallback CLAUDE.md already
  documents for obscured/missing text, extended here to a missing image
  asset. Check the asset folder for a hero-shaped file first, but don't
  assume one always exists.
- Its "Next Projects" row (Woolworths Internal Products, Woolworths •
  Bunch, Echo Archive — RealSwipe excluded) doesn't match the
  `selectedWork.filter(href !== self)` pattern every other case study uses,
  because Diamond Roofing isn't *in* `selectedWork` (it's an Other
  Exploration) so nothing would auto-exclude. Filtered by an explicit href
  allowlist instead, matching the curated set shown in the source design.

Earlier session: built `app/work/echo-archive/page.tsx` end-to-end
(Research → Solution → Experience Walkthrough → Reflection/Next Projects).
Two things worth flagging:
- Echo Archive's Figma source uses a **different heading convention** than
  Woolworths/Bunch/RealSwipe: its Research subsections use the usual
  `Eyebrow variant="muted"` label pattern, but its Solution/Experience
  Walkthrough/Reflection section headers are plain large bold `h2`/`h3` text
  with **no** small eyebrow label above them (no `PhaseSectionHeader`, which
  requires an eyebrow). Rendered those as plain `<h2>`/`<h3>` matching
  `PhaseSectionHeader`'s title classes rather than forcing the eyebrow
  pattern — check each new case study's actual Figma heading treatment
  rather than assuming every page eyebrows every section.
- Several of Echo Archive's source assets
  (`~/Desktop/portfolio_images/Echo Archive/`) are **fully-composed card
  graphics** — icon, title, copy and mockup all flattened into one PNG
  (`Cards*.png` for the four "emotional companion" cards, `1.png`–`6.png`
  for the Experience Walkthrough steps, filenames not in visual order —
  matched by content, not number). Rendered these as plain `Image`s rather
  than rebuilding their text/icons in JSX; don't try to extract "real"
  copy out of a card image that's already a finished design artifact.

Previous session: built `app/work/realswipe/page.tsx` end-to-end, using
`app/work/bunch/page.tsx` as the structural reference. RealSwipe's source
assets (`~/Desktop/portfolio_images/RealSwipe/`) were pre-annotated exports —
each Before/After screenshot had its own baked-in "BEFORE"/"AFTER" label and
hand-drawn callout arrows, unlike Woolworths/Bunch's clean crops — so those
pairs were rendered as a plain `Reveal`+`Image` grid instead of
`BeforeAfterPair` (which would have doubled the label). Later in that same
session, the RealSwipe founder supplied newer **combined** before/after
images (one PNG per solution showing both states together) which replaced
the split before/after images entirely, and the "View solution 0X" links
were removed from the Key Insights cards (now plain description boxes) —
`app/work/realswipe/page.tsx` reflects this current state, not the
originally-built one. The same session also replaced Bunch's Part 01
sample-claim `BeforeAfterPair` with a single combined image
(`part01-1.png`) for the same reason, and resized/centered a few Bunch
images per direct request (`part01-2-comments.png` to 65% width,
`BeforeAfterPair`'s `contentScale`/centering used for Part 02's images at
80%) — `BeforeAfterPair` now only has one remaining usage sitewide (Bunch
Part 02's stacked pair) and its `SideImages` image is always centered
(`mx-auto block`) so a `contentScale < 1` doesn't render left-aligned.

Earlier session, beyond the Bunch page build itself:
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

Other notes:
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
  omitted (Bunch has neither). `navItems` is also optional — omit it for a
  case study whose Figma hero has no pill nav (Diamond Roofing) and
  `CaseStudyNav` doesn't render at all, rather than rendering an empty pill
  row. Check a new case study's Figma hero against all these patterns
  before assuming the Woolworths layout is the only shape.
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
  shows a sharp-cornered block, round it anyway to match this system.

## Motion conventions

- **The `.hero-anim-*` system in `app/globals.css`** is a *separate* motion
  system from `Reveal`, purpose-built for the Home/About hero's one-time
  choreographed load-in (`components/home/Hero.tsx` and
  `components/about/AboutHero.tsx`). Both heroes are always above the fold,
  so there's no scroll trigger to wait for — these are plain CSS
  `@keyframes` + `animation` (not `transition`), fired on mount via
  `animation-delay`, with zero JS. Don't route new above-fold, load-in-only
  animations through `Reveal` (which exists to solve a different problem,
  scroll-into-view timing) — extend this system instead. Classes:
  - `.hero-anim-rise` — fade + translateY, the default "appear" motion for
    plain text/pill elements (paragraphs, role line, tags, pills).
  - `.hero-anim-letter` — same motion, sized for a single split-out letter
    (see "AN NY" below).
  - `.hero-anim-group-settle` — a **transform-only** (no opacity) bounce/
    spring, meant to wrap a *group* of already-visible children and settle
    them together as one beat, rather than each child springing on its own.
    "AN NY," in both heroes is built this way: each letter is its own
    `hero-anim-letter` span (fade+rise, revealed left-to-right via
    staggered delays), all nested inside one `hero-anim-group-settle`
    wrapper that bounces the whole word once the letters have landed. This
    replaced an earlier version where only the last letter had its own
    spring — don't reintroduce a per-letter spring; the group wrapper is
    the deliberate, tuned design.
  - `.hero-anim-draw` — hand-drawn stroke reveal for the small teal squiggle
    beside "AN NY," via `stroke-dasharray`/`stroke-dashoffset`. **The
    squiggle SVG is inlined directly in each hero's JSX** (not
    `next/image`), because animating `stroke-dashoffset` requires the
    `<path>` to be real DOM you can target with CSS — an externally
    referenced `<img>`/`next/image` source can't be reached this way.
    `stroke-dasharray` is set to `28`, deliberately close to the path's
    actual longest subpath (~26 units, measured with a small bezier
    arc-length script, not eyeballed) rather than an arbitrary large
    number. **This matters**: an oversized dasharray (e.g. `150`, tried
    first) means most of the `stroke-dashoffset` animation range falls
    inside the pattern's invisible "gap" segment, so the stroke finishes
    drawing in the first ~15–20% of the animation and then does nothing
    visible for the rest — it reads as an instant flash-in, not a
    hand-drawn line. If this squiggle (or a similar one elsewhere) is ever
    resized or redrawn, re-measure the path length and update
    `stroke-dasharray` to match — don't reuse `28` or guess a bigger number
    "to be safe."
  - `.hero-anim-mask` — the "Product Designer" line's editorial reveal:
    text slides up from behind an `overflow-hidden` mask
    (`translateY(100%) → translateY(0)`) instead of just fading in. **The
    descender-safety buffer must live on the animated inner element, not
    the outer clip container.** The bug that shipped first: padding-bottom
    was added to the outer `overflow-hidden` wrapper to stop "g"/"p"
    descenders from clipping in the settled state — which worked for the
    settled state, but also enlarged the clip *window* itself, so during
    the pre-animation hidden state (`translateY(100%)`, which only offsets
    by the *inner* element's own un-padded height) the top sliver of the
    padded window let the text peek through before the reveal even
    started. Fix: put `pb-[0.3em]` on the inner animated span (so
    `translateY(100%)` — relative to that now-taller element — clears the
    buffer automatically) and put the compensating `-mb-[0.3em]` on the
    outer wrapper alone. If you touch this again, verify both states, not
    just the settled one: force `transform: translateY(100%)` via devtools
    (or a quick `element.style.transform` override) and confirm the inner
    element's top edge sits at or below the outer's clip boundary.
  - Per-element `animationDelay` values in both hero components were
    hand-tuned over several rounds of user feedback (the group-settle
    bounce alone moved: end of sequence → no-pause-after-last-tag →
    340ms → right after "Product Designer" finishes / the squiggle's
    equivalent point in About → squiggle retimed to match it exactly).
    Final state: in `Hero.tsx` the bounce and squiggle both fire at
    `880ms` (the instant "Product Designer"'s mask reveal finishes,
    `340ms` delay + `540ms` duration); in `AboutHero.tsx` they both fire
    at `980ms` (About has no second heading line, so this is anchored to
    when the squiggle *would* finish drawing on its own). Treat these as
    considered, tested values, not scaffolding — don't "clean up" the
    specific millisecond numbers without a reason.
  - Reduced motion needs no special handling here — the existing global
    `@media (prefers-reduced-motion: reduce)` rule in `globals.css` (which
    forces `animation-duration`/`transition-duration` to ~0 on `*`) already
    covers these too, same as everywhere else.

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
