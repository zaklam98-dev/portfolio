"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";

type NavItem = {
  label: string;
  href: string;
};

type CaseStudyNavProps = {
  items: NavItem[];
};

export default function CaseStudyNav({ items }: CaseStudyNavProps) {
  const [activeHref, setActiveHref] = useState(items[0]?.href ?? "");
  const [nearFooter, setNearFooter] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  // While true, the scroll-spy observer ignores intersection updates — set
  // for the duration of a click-triggered smooth scroll so every section
  // scrolled past on the way to the destination doesn't briefly flash
  // active. A ref, not state: flipping it must never itself trigger a
  // re-render, it's only read inside the observer callback.
  const suppressObserverRef = useRef(false);
  const cleanupSuppressionRef = useRef<(() => void) | null>(null);

  const reducedMotion = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Hide the nav once the page footer starts entering the viewport, so the
  // fixed pill never sits on top of it — footer content stays fully visible
  // and clickable instead of being covered. Fades/slides out rather than
  // disappearing instantly, and `pointer-events-none` while hidden so it
  // can't be clicked through when faded out but not yet fully gone.
  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setNearFooter(entry.isIntersecting),
      // Positive bottom margin triggers ~120px before the footer's top
      // edge actually reaches the viewport bottom — enough lead time for
      // the 300ms fade-out to finish before the pill and footer could
      // visually overlap, rather than reacting only once they already do.
      { rootMargin: "0px 0px 120px 0px", threshold: 0 }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  // Scroll-spy: mark a pill active once its section crosses a band near the
  // top of the viewport. IntersectionObserver-driven (not scroll-position
  // math) so it stays correct regardless of section height/spacing.
  useEffect(() => {
    const targets = items
      .map((item) => ({
        href: item.href,
        el: document.querySelector(item.href),
      }))
      .filter(
        (entry): entry is { href: string; el: Element } => entry.el !== null
      );

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (suppressObserverRef.current) return;
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const match = targets.find((target) => target.el === entry.target);
          if (match) setActiveHref(match.href);
        }
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    targets.forEach((target) => observer.observe(target.el));
    return () => observer.disconnect();
  }, [items]);

  // Cancel any in-flight suppression cleanup (scrollend listener + safety
  // timeout) if the component unmounts mid-scroll.
  useEffect(() => {
    return () => cleanupSuppressionRef.current?.();
  }, []);

  // Keep the active pill in view within its own horizontal scroll
  // container — scrollLeft only, never touches the page's own scroll.
  useEffect(() => {
    const container = scrollContainerRef.current;
    const activeEl = itemRefs.current[activeHref];
    if (!container || !activeEl) return;

    const targetLeft =
      activeEl.offsetLeft -
      container.clientWidth / 2 +
      activeEl.offsetWidth / 2;

    container.scrollTo({
      left: Math.max(0, targetLeft),
      behavior: reducedMotion() ? "auto" : "smooth",
    });
  }, [activeHref]);

  const handleAnchorClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    const target = document.querySelector(href);
    if (!target) return;

    event.preventDefault();

    // A previous click's scroll may not have settled yet — drop its
    // listener/timeout before starting a new suppression window so it
    // can't resolve early and let the observer resume mid-scroll.
    cleanupSuppressionRef.current?.();

    suppressObserverRef.current = true;
    setActiveHref(href);

    target.scrollIntoView({
      behavior: reducedMotion() ? "auto" : "smooth",
      block: "start",
    });
    window.history.pushState(null, "", href);

    const clearSuppression = () => {
      suppressObserverRef.current = false;
      window.removeEventListener("scrollend", clearSuppression);
      clearTimeout(safetyTimeout);
      cleanupSuppressionRef.current = null;
    };

    window.addEventListener("scrollend", clearSuppression, { once: true });
    // Safety net for browsers without `scrollend` support, or if the
    // scroll gets interrupted/never settles — long enough for a smooth
    // scroll across a full case-study page to finish naturally.
    const safetyTimeout = setTimeout(clearSuppression, 1500);
    cleanupSuppressionRef.current = clearSuppression;
  };

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-6 md:pb-8">
      <nav
        className={`flex max-w-full items-center gap-2 rounded-full border border-ink bg-ink p-2 shadow-lg transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          nearFooter
            ? "pointer-events-none translate-y-4 opacity-0"
            : "pointer-events-auto translate-y-0 opacity-100"
        }`}
      >
        <Link
          href="/"
          className="group flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-ink"
          aria-label="An Ny Lam — Home"
        >
          <Logo className="h-5 w-5" />
        </Link>

        <div
          ref={scrollContainerRef}
          className="no-scrollbar flex min-w-0 shrink snap-x snap-mandatory items-center gap-2 overflow-x-auto"
        >
          {items.map((item) => {
            const isActive = item.href === activeHref;
            return (
              <Link
                key={item.label}
                href={item.href}
                ref={(el) => {
                  itemRefs.current[item.href] = el;
                }}
                onClick={(event) => handleAnchorClick(event, item.href)}
                aria-current={isActive ? "true" : undefined}
                className={`shrink-0 snap-start rounded-full border px-4 py-2 text-sm transition-colors duration-200 ${
                  isActive
                    ? "border-white bg-white text-ink"
                    : "border-white/25 text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
