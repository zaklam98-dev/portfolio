"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import Logo from "@/components/ui/Logo";
import WorkDropdown from "@/components/layout/WorkDropdown";
import { LINKEDIN_URL } from "@/lib/constants";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "LinkedIn", href: LINKEDIN_URL, external: true },
];

export default function SiteFooter() {
  const pathname = usePathname();

  return (
    <footer className="border-t border-border">
      <div className="container-content flex flex-col items-center gap-6 py-8 md:grid md:grid-cols-3 md:items-center md:gap-4">
        <Link
          href="/"
          className="group text-ink md:justify-self-start"
          aria-label="An Ny Lam — Home"
        >
          <Logo className="h-7 w-7" />
        </Link>

        <nav aria-label="Footer" className="md:justify-self-center">
          <ul className="flex items-center gap-8">
            {footerLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Fragment key={link.label}>
                  <li>
                    <Link
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className={`text-sm transition-colors duration-200 ${
                        isActive
                          ? "font-semibold text-ink underline decoration-2 underline-offset-4"
                          : "text-muted hover:text-ink"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                  {link.label === "Home" && (
                    <li>
                      <WorkDropdown direction="up" size="sm" />
                    </li>
                  )}
                </Fragment>
              );
            })}
          </ul>
        </nav>

        <p className="text-[11px] uppercase tracking-wider text-muted md:justify-self-end">
          © 2026 An Ny Lam. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
