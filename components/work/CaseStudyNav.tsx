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
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  const reducedMotion = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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
    target.scrollIntoView({
      behavior: reducedMotion() ? "auto" : "smooth",
      block: "start",
    });
    window.history.pushState(null, "", href);
    setActiveHref(href);
  };

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-6 md:pb-8">
      <nav className="pointer-events-auto flex max-w-full items-center gap-2 rounded-full border border-ink bg-ink p-2 shadow-lg">
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
