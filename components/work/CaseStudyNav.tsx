"use client";

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
  const handleAnchorClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    const target = document.querySelector(href);
    if (!target) return;

    event.preventDefault();
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    target.scrollIntoView({
      behavior: reducedMotion ? "auto" : "smooth",
      block: "start",
    });
    window.history.pushState(null, "", href);
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

        <div className="no-scrollbar flex min-w-0 shrink snap-x snap-mandatory items-center gap-2 overflow-x-auto">
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={(event) => handleAnchorClick(event, item.href)}
              className="shrink-0 snap-start rounded-full border border-white/25 px-4 py-2 text-sm text-white transition-colors duration-200 hover:bg-white/10"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
