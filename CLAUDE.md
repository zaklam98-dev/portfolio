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
screenshot. Its copy is locked (the user dictated it verbatim, see below),
unlike the placeholder-style draft copy other new sections sometimes start
with.

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
Header/footer nav now include a "Work" dropdown (all 7 projects, click-
triggered) next to Home/About/LinkedIn, every case study's sticky pill nav
scroll-spies as you scroll, and the Contact-page/`ContactBanner` email is
click-to-copy (not a `mailto:` link) with its own hover color-swap and a
small copy-confirmation tooltip + pulse. There is no queued next step — the
next session should ask the user what they want to work on rather than
assume there's a backlog.

Done this session (most recent first):

**Home hero tags shortened from 4 to 3, wording iterated live.** `heroTags`
in `components/home/Hero.tsx` is now `["Systems Thinking", "AI-Enhanced
Workflow", "Craft-Driven"]` — replaced the old 4-tag set ("Product Design",
"UX/UI", "Interaction Design", "Visual Design"), and the middle tag's
wording itself changed twice more right after ("AI-Assisted Design" →
"AI-Assisted Workflow" → "AI-Enhanced Workflow") — if this tag comes up
again, don't assume "AI-Assisted" is the settled wording, check the current
file. Before making the count change, confirmed the per-tag
`animationDelay` (`590 + index * 85`) is computed purely from the array's
`index`, not hardcoded per tag, so dropping from 4 to 3 needed zero
`hero-anim-*` changes — and `justify-center` on the tag row already centers
correctly at any tag count. Also removed a line from
`components/about/AboutMeSection.tsx`'s `facts` list ("🇻🇳 Originally from
Vietnam, now based in Sydney.") — plain content deletion, four facts
remain, no structural change.

**Found and fixed a real CSS bug behind the email tooltip's persistent
off-center position — not a caching issue, despite two rounds of it looking
like one.** The "Copied!" tooltip (see below) kept centering on the email
*button's* width instead of the full squiggle+email row's width, even after
an earlier fix that moved the row's `relative` positioning context up from
the button (which should have been enough). The user tested in a second
browser to rule out a stale tab — the right call, since it forced a real
diagnosis instead of another "hard refresh and see" round. Root cause,
found by pixel-measuring a screenshot precisely (not eyeballing) and
confirming the server-rendered HTML via `curl` matched the source first
(ruling out a stale bundle before looking for a CSS bug): **the tooltip was
nested *inside* the `<button>`, and the button simultaneously receives a
`transform`-animating class (`.email-copied-pulse`, the copy-confirmation
scale pulse) whenever the tooltip is visible. Per the CSS spec, any element
with an active `transform` becomes a new containing block for its
absolutely-positioned descendants — so the pulsing button was silently
overriding the row div as the tooltip's positioning context**, undoing the
earlier `relative`-on-the-row fix the instant `copied` became true. Fixed
by having `EmailLink` return a Fragment with the tooltip as a **sibling**
of the button rather than a child — both are direct children of the row
div, so the button's own transform can no longer intervene. **General
lesson, not specific to this component: never nest an absolutely-positioned
tooltip/overlay inside an element that will get a `transform`-animating
class while the tooltip is visible — render them as siblings under the same
positioned ancestor instead, or the animated element can silently hijack
the positioning context out from under a `position: relative` ancestor
further up.** Also, per a follow-up request: moved the tooltip from above
the email (`bottom-full`) to below it (`top-full`), flipping the
`emailCopiedTooltip` keyframe's vertical drift direction to match, and
widened the gap `mt-2` → `mt-4` (+8px).

**Removed the Contact page's "Copy email" / "Go to LinkedIn" buttons after
the email itself became click-to-copy (see below) — they were now
redundant.** Deleted `components/contact/CopyEmailButton.tsx` entirely (its
only usage). `PillLink`'s `outline` variant and `external` prop — re-added
for these buttons earlier in the same session — were reverted *again*; this
is now the **second** time this exact add-then-revert cycle has happened
for this component (see the matching note further down for the first time).
If a third real need for an outlined/external `PillLink` comes up, it's
worth just keeping the variant permanently rather than re-adding and
re-reverting a third time.

**Polished the email copy-confirmation into a small floating tooltip +
button pulse, and made clicking the email itself copy to clipboard instead
of opening a mail client.** Two related changes to
`components/ui/EmailLink.tsx`:
- It's now a client component rendering a `<button>` (not
  `<a href="mailto:...">`) — `onClick` calls `navigator.clipboard.writeText`,
  with a screen-reader-only `aria-live="polite"` announcement (kept separate
  from the visual tooltip, which is `aria-hidden` — the two shouldn't
  double-announce the same thing). `appearance-none`/`border-0`/
  `bg-transparent`/`p-0`/`cursor-pointer` reset the button back to looking
  exactly like the anchor it replaced.
- On copy, a small "Copied!" pill fades+rises in below the email
  (`.email-copied-tooltip`/`emailCopiedTooltip` keyframe, 1800ms, timed just
  under the 2000ms reset so it finishes before unmount) and the button gets
  a tiny spring scale pulse (`.email-copied-pulse`/`emailCopiedPulse`,
  `scale(1) → 1.02 → 1`, 380ms). Both keyframes live in `app/globals.css`
  right after the `.hero-anim-*` block and deliberately reuse that system's
  exact spring easing (`cubic-bezier(0.22, 1, 0.36, 1)`) for a consistent
  feel — see the updated Motion conventions entry below. No
  `prefers-reduced-motion` handling needed; the existing global `*`
  animation-duration override already covers it.
- The tooltip's text (`text-xs font-medium normal-case tracking-normal
  font-body`) explicitly resets typography, since it inherits from whatever
  heading-sized className the caller passes to `EmailLink` (`text-3xl`/
  `font-extrabold`/`tracking-tight`/`font-heading` in both current usages)
  — without the reset, "Copied!" would render at the same giant heading
  size as the email itself.

**Extracted `components/ui/EmailLink.tsx` as a shared component and added a
hover color-swap.** `ContactBanner` and `ContactHero`'s email — large
heading-style text with a teal "@" — was duplicated markup in both places;
now both render `<EmailLink className="..." />` with just the text-size
classes varying (identical between the two so far in practice). Hover swaps
the colors (the "@" flips teal→ink, the rest flips ink→teal) via Tailwind's
`group`/`group-hover` rather than wrapping the plain text in extra spans —
the button itself just needs `hover:text-teal`, and the `@` span needs
`group-hover:text-ink`, both `transition-colors duration-200`.

**Added a "Work" dropdown to the header and footer nav, and made every case
study's sticky pill nav scroll-spy.** Two mostly-independent pieces of work:
- `components/layout/WorkDropdown.tsx` (new) lists all 7 projects — sourced
  from a new `lib/projects.ts` export, `allProjects = [...selectedWork,
  ...otherExplorations]`, not a hardcoded list — and is used in both
  `SiteHeader` (opens downward, inserted right after "Home") and
  `SiteFooter` (opens upward, `size="sm"` prop for the smaller footer type
  scale). **It's click-triggered, not hover-triggered** — hover was the
  original spec, but got explicitly replaced with click after the fact
  (toggle on click; close on outside-click via a `document` `mousedown`
  listener; Escape closes it and returns focus to the trigger button). Don't
  reintroduce hover-to-open; that was a deliberate reversal, not an
  oversight. Mobile gets a *separate*, hand-rolled tap-to-expand accordion
  inside `SiteHeader`'s existing hamburger menu (its own `workExpanded`
  state, not `WorkDropdown` reused) — `SiteFooter` has no hamburger/mobile-
  menu concept at all, so `WorkDropdown`'s click-to-toggle behavior doubles
  as its own mobile affordance there with no extra code needed.
- `components/work/CaseStudyNav.tsx` now tracks which section is currently
  in view via `IntersectionObserver` (a `rootMargin: "-20% 0px -70% 0px"`
  band near the top of the viewport — the standard scrollspy trick, not
  scroll-position math) and highlights the matching pill by reusing the
  nav's own existing white-fill treatment (the same style its "go home"
  logo button already uses) as the active state, since there was no other
  active-state precedent for this specific dark floating pill nav to match.
  A second effect keeps the active pill in view by computing and setting
  the horizontal scroll container's own `scrollLeft` directly — never
  `scrollIntoView`, which would risk scrolling the page itself. Applies
  automatically to all 5 case studies that render this component (via
  `CaseStudyHero`'s `navItems` prop, or directly on the hand-rolled
  `how-the-body-remembers` hero), no per-page changes needed.
- Also added `lib/constants.ts` (`LINKEDIN_URL`, `EMAIL`) as the single
  source for both values — `SiteHeader`/`SiteFooter`'s nav-link arrays and
  `EmailLink` all import from here now instead of repeating literals.

Earlier this session (most recent first):

**Fixed stale image cache after a direct `/public` file swap.** After
replacing project-card PNGs in place (same filename, new bytes — see below),
the user reported the site still showing the old images even though the
files on disk were byte-identical (verified via `md5`) to the new source
exports. Cause: Turbopack dev's image-optimizer cache
(`.next/dev/cache/images/`) had pre-existing cached `.webp` renditions from
before the swap and doesn't always invalidate on an in-place file
overwrite. Fix: `rm -rf .next/dev/cache/images` (safe — it's a regenerable
build artifact, not source) while the dev server keeps running; no restart
needed. **If a `/public` image is ever replaced in place again and the
running dev server still shows the old version after a hard refresh, clear
this directory before assuming the file copy failed.**

**Replaced all 7 project-card images + added a real "Coming soon" pill.**
The user re-exported clean, border-free versions of every image in
`public/images/home/` (Woolworths, Bunch, RealSwipe, Echo Archive, Diamond
Roofing, How the Body Remembers, HobbyLink) from
`~/Desktop/portfolio_images/Home/`. Copied over the old files 1:1 by
filename and updated `imageWidth`/`imageHeight` in `lib/projects.ts` to the
new assets' actual dimensions (761×599 for the 4 `selectedWork` cards,
632×480 for the 3 `otherExplorations` cards) — same "must match the actual
asset" rule as the Content/assets note below already states. Separately,
the old HobbyLink card image had a "Coming soon" badge baked into its
pixels; the clean replacement doesn't have one, so it's now a real UI
element instead: `Project` (`lib/projects.ts`) gained an optional
`comingSoon?: boolean` field (set on the HobbyLink entry), and `ProjectCard`
renders a pill (`absolute bottom-4 left-4`, `bg-bg`, `shadow-md`,
`rounded-full`) over the image's now-`relative` container when it's set.
Reach for this flag instead of baking a status badge into a future asset
again — it survives image swaps and matches the design system directly.

**Found and fixed a border baked into every project-card image (not CSS).**
The user first reported "a grey border around case-study card images" and
the first fix attempt — removing `bg-border/30` from `ProjectCard`'s image
container (a plausible CSS culprit: a translucent background peeking
through a rounded-corner/`object-cover` sub-pixel gap) — didn't fully
resolve it, because the real cause was different: **all 7 of the original
`public/images/home/*.png` files had an identical ~2–3px solid-color
(`RGB 196,207,206`) stroke baked into every edge**, confirmed by pixel-
sampling every image's edges before concluding it was systemic rather than
a one-off asset issue (same diagnostic instinct as the Content/assets note
below about baked-in borders, just applied at a larger, sitewide scale this
time — check *every* affected asset before assuming a single-image
fix is enough). Cropped the border off all 7 with PIL and updated
`imageWidth`/`imageHeight` accordingly — later superseded anyway by the
clean re-exports above, but the `bg-border/30` removal on `ProjectCard`
itself stayed (harmless simplification, no functional change either way).

**Added a hand-drawn draw-on animation to Contact's squiggle.** Extended
the `.hero-anim-*` system (see Motion conventions) with `.hero-anim-draw-lg`
/ `heroDrawLarge` — a second stroke-draw variant sized for
`squiggle-large.svg` (the Contact/`ContactBanner` squiggle), which is a
different, much longer asset than the small "AN NY" squiggle: three
separate comet-trail cubic-bezier strokes in one `<path>`, total length
~164.6 units (measured with the same small bezier arc-length script used
for the original squiggle, not eyeballed). `stroke-dasharray: 168`,
900ms duration (scaled up from the original's 550ms for the ~6x longer
path). Needed the SVG inlined as real JSX in `ContactHero.tsx` (not
`next/image`) for the same reason as the original squiggle — animating
`stroke-dashoffset` needs a real `<path>` in the DOM. Non-obvious detail
worth keeping if this pattern comes up again: **a single `<path>` with
multiple subpaths (multiple `M...C` segments) still works with one
`stroke-dasharray`/`dashoffset` animation** — `M` (moveto) jumps between
subpaths don't consume dash-pattern length, so animating one dashoffset
across the whole path draws each subpath's stroke in sequence rather than
needing a separate animation per subpath.

**Re-animated Contact's hero with the `.hero-anim-*` system, not `Reveal`.**
Initially built with `Reveal` (see the entry below); switched to
`hero-anim-rise` (badge → line → email row, staggered 0ms/140ms/280ms)
per direct request to match Home/About's entrance treatment — consistent
with Motion conventions' existing rule that above-the-fold, load-in-only
hero content should use the CSS `.hero-anim-*` system, not the
scroll-triggered `Reveal`. `ContactHero.tsx` is a plain server component
now (no `"use client"`) since the CSS animation needs no
`IntersectionObserver` — simpler than the `Reveal` version it replaced.

**Corrected Contact's content to reuse `ContactBanner`'s copy verbatim,
promoted to primary content — not new copy.** The initial build (see below)
invented its own hero copy and CTAs; the user's actual intent was narrower
and more literal: Contact's *entire* page is the pill badge "Let's talk" +
the line "Have an idea, a project, or just want to chat?" + the email as a
large `mailto:` link with the same visual treatment (squiggle + teal "@")
`ContactBanner` already uses globally — nothing else, no secondary CTAs, no
LinkedIn link (already in header/footer). This meant:
- **`ContactBanner` no longer renders on `/contact`.** It still renders
  globally on every other route. `app/layout.tsx` now renders
  `components/layout/ConditionalContactBanner.tsx` (a small client
  component, `"use client"` + `usePathname()`, returns `null` when
  `pathname === "/contact"`) in place of `ContactBanner` directly — the
  architecture note below is updated to reflect this. If a future page also
  needs to opt out of the global banner, extend this component's pathname
  check rather than adding another conditional wrapper.
- The `PillLink` `outline` variant and `external` prop added during the
  first build pass were **reverted** — they were introduced for CTAs
  (Email me / Connect on LinkedIn) that no longer exist on the page, so
  `PillLink` is back to just `dark`/`teal` variants, no `external` prop.
  Don't re-add these speculatively; if a future outline/external pill-link
  need actually arises, that's the reference point.
- The real LinkedIn URL (`https://www.linkedin.com/in/an-ny-lam/`) was
  provided and wired into `SiteHeader`/`SiteFooter`'s nav-link arrays,
  replacing the long-standing `https://www.linkedin.com/` placeholder — the
  README's "LinkedIn URL is a placeholder" assumption (referenced in
  Styling conventions below) is now stale; the real URL is live.

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

- **`app/layout.tsx`** is the root layout and renders `SiteHeader`,
  `ConditionalContactBanner`, and `SiteFooter` on every route. New pages just
  need `app/<route>/page.tsx`; the header/footer chrome is automatic.
  `ConditionalContactBanner` (`components/layout/ConditionalContactBanner.tsx`)
  renders the real `ContactBanner` on every route except `/contact` — that
  page's own hero *is* the banner's content promoted to primary content, so
  showing both would duplicate the same two lines back to back. Extend its
  pathname check if another page ever needs to opt out too.
- **`lib/projects.ts`** is the single source of truth for case-study content: the
  `Project` type and the `selectedWork` / `otherExplorations` arrays consumed by
  `app/page.tsx`. Adding or editing a project card means editing this file, not JSX.
  It also exports `allProjects` (`[...selectedWork, ...otherExplorations]`) —
  the source for anything that lists every project, e.g. the header/footer
  "Work" dropdown below. `lib/constants.ts` holds `LINKEDIN_URL` and `EMAIL`,
  the single source for both — `SiteHeader`, `SiteFooter`, and `EmailLink`
  all import from there rather than repeating the literals.
- **`components/work/ProjectCard.tsx` + `ProjectGrid.tsx`** are the reusable
  case-study card/grid, driven entirely by `Project` objects — intended to be reused
  by future `/work/*` pages as well as the home page's two grids (`columns`/`size`
  props control layout density: 2-col/large for Selected Work, 3-col/small for Other
  Explorations). Tags always render `variant="outline"` (transparent background) —
  `Tag`'s `solid` variant still exists but nothing currently uses it; don't
  reintroduce it without a specific reason, since transparent tags are now the
  sitewide convention, not a one-off. `Project` also has an optional
  `comingSoon?: boolean` (set on HobbyLink) — `ProjectCard` renders a
  "Coming soon" pill absolutely positioned over the bottom-left of the image
  when set. Use this flag rather than baking a status badge into a card image
  asset — it survives image swaps and stays a real, styleable UI element.
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
- **`components/work/CaseStudyNav.tsx`** (the fixed dark pill nav
  `CaseStudyHero` renders when `navItems` is set) scroll-spies: an
  `IntersectionObserver` tracks which section is in view and highlights the
  matching pill (reusing the nav's own white-fill "go home" button style as
  the active state — see Motion conventions), and a second effect keeps the
  active pill in view by setting the pill row's own `scrollLeft` directly,
  never `scrollIntoView` (which risks scrolling the page itself, not just
  the pill row). This is per-instance, not the shared observer `Reveal`
  uses — each case study page mounts its own `CaseStudyNav`, and the
  concern here (continuously tracking the *current* section) is different
  from `Reveal`'s one-time "has this appeared yet" trigger, so reusing
  `Reveal`'s shared-observer machinery wouldn't fit.
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
  `ContactBanner`, `ConditionalContactBanner`, and `WorkDropdown` (the "Work"
  nav item's dropdown menu — click-triggered, `direction="down"|"up"` prop
  for header vs. footer, used directly by both; `SiteHeader`'s mobile
  hamburger menu has its own separate hand-rolled accordion instead of
  reusing this component).
- **`components/home/`** holds home-page-only sections (`Hero`,
  `CreativitySection` — the hover-swap illustration section).
- **`components/ui/`** holds small shared primitives (`Tag`, `PillLink`, `Logo`,
  `Eyebrow`, `Reveal`, `EmailLink` — the click-to-copy email used by both
  `ContactBanner` and `ContactHero`; see Motion conventions before touching
  its copy-confirmation tooltip/pulse, there's a load-bearing DOM-structure
  gotcha).
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
  screenshot, not exact design tokens — see README.md "Assumptions made" for
  the full list (logo mark recreated as styled text). Two of that list's
  other items are now stale and superseded by this file: the LinkedIn URL is
  no longer a placeholder (`SiteHeader`/`SiteFooter` link to
  `https://www.linkedin.com/in/an-ny-lam/`), and `/about` and `/contact` are
  both built.
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
  system from `Reveal`, purpose-built for one-time choreographed hero load-ins
  (`components/home/Hero.tsx`, `components/about/AboutHero.tsx`, and
  `components/contact/ContactHero.tsx`). These heroes are always above the
  fold, so there's no scroll trigger to wait for — these are plain CSS
  `@keyframes` + `animation` (not `transition`), fired on mount via
  `animation-delay`, with zero JS (no `"use client"` needed just for this).
  Don't route new above-fold, load-in-only animations through `Reveal`
  (which exists to solve a different problem, scroll-into-view timing) —
  extend this system instead. Classes:
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
  - `.hero-anim-draw-lg` — the same hand-drawn stroke-reveal technique,
    sized for `ContactHero.tsx`'s squiggle (`squiggle-large.svg`, also
    inlined as JSX for the same reason as above). A different, much longer
    asset: three separate comet-trail cubic-bezier strokes in one `<path>`,
    total length ~164.6 units (measured the same way, not guessed) →
    `stroke-dasharray: 168`, 900ms duration (scaled up from `.hero-anim-draw`'s
    550ms for the ~6x longer path). Don't reuse `.hero-anim-draw`'s `28`/`550ms`
    for a different squiggle asset — every asset needs its own measured
    dasharray. Non-obvious mechanic this relies on: a single `<path>` with
    multiple subpaths (multiple `M...C` segments) still animates correctly
    with one `stroke-dasharray`/`dashoffset` pair — `M` (moveto) jumps
    between subpaths don't consume dash-pattern length, so one dashoffset
    animation draws each subpath's stroke in sequence rather than needing a
    separate animation per subpath.
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

- **`.email-copied-pulse` / `.email-copied-tooltip`** (also in
  `app/globals.css`, immediately after the `.hero-anim-*` block) are
  `components/ui/EmailLink.tsx`'s copy-confirmation animations — a separate
  small system, not part of `.hero-anim-*` (this isn't a page-load
  choreography), but deliberately reusing that system's exact spring easing
  (`cubic-bezier(0.22, 1, 0.36, 1)`) for a consistent feel. `.email-copied-
  pulse` is a one-shot `scale(1) → 1.02 → 1` on the button (380ms).
  `.email-copied-tooltip` is a fade+translateY "Copied!" pill (1800ms,
  timed just under `EmailLink`'s 2000ms state-reset `setTimeout` so the
  fade-out finishes before React unmounts it rather than getting cut off).
  **Load-bearing structural rule: the tooltip must be a sibling of the
  button, never a child of it.** `copied` being true applies
  `.email-copied-pulse` to the button at the same moment the tooltip is
  visible; per the CSS spec, an element with an active `transform` becomes
  a new containing block for its absolutely-positioned descendants, so a
  tooltip nested *inside* the pulsing button would silently position itself
  relative to the button instead of the intended `relative` ancestor (the
  row div wrapping the squiggle + `EmailLink` in both `ContactBanner` and
  `ContactHero`) — this exact bug shipped once and took a precise pixel-
  measurement + a `curl` of the server-rendered HTML to diagnose (it looked
  identical to a stale-cache issue at first, including after a fix that
  addressed a *different*, real part of the same symptom — see the session
  log for the full trail). `EmailLink` returns a Fragment for exactly this
  reason. Don't restructure it to nest the tooltip inside the button again.
  This pattern generalizes: never nest an absolutely-positioned tooltip/
  overlay inside an element that will receive a `transform`-animating class
  while the tooltip is showing.

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
  **This isn't always a single-asset problem** — all 7 of
  `public/images/home/*.png` once had an identical ~2–3px solid-color
  border baked in from the same Figma export step, only noticed after a
  CSS fix (removing a `bg-*` from the image container) didn't resolve what
  looked like a one-off visual bug. If a border shows up on one card image,
  pixel-sample the edges of *every* card image sharing that export pipeline
  before concluding it's isolated — it may be systemic. (These 7 assets
  were later replaced entirely with clean re-exports, but the lesson holds
  for any future batch-exported set.)
- **Directly overwriting a `/public` image file in place (same filename,
  new bytes) can leave the running dev server showing the old image even
  after a hard refresh.** Turbopack dev's image-optimizer cache
  (`.next/dev/cache/images/`) doesn't always invalidate on an in-place
  overwrite. Verify the file itself changed first (`md5`/`md5sum` the new
  source against the file in `public/`) before assuming a copy failed —
  then `rm -rf .next/dev/cache/images` (safe, regenerable) while the dev
  server keeps running; no restart needed.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
