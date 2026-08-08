"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useState } from "react";
import Logo from "@/components/ui/Logo";
import WorkDropdown from "@/components/layout/WorkDropdown";
import { allProjects } from "@/lib/projects";
import { LINKEDIN_URL } from "@/lib/constants";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "LinkedIn", href: LINKEDIN_URL, external: true },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [workExpanded, setWorkExpanded] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/95 backdrop-blur">
      <div className="container-content flex h-20 items-center justify-between md:h-24">
        <Link href="/" className="group text-ink" aria-label="An Ny Lam — Home">
          <Logo className="h-9 w-9" />
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Fragment key={link.label}>
                <Link
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className={`text-base transition-colors duration-200 ${
                    isActive
                      ? "font-semibold text-ink underline decoration-2 underline-offset-8"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
                {link.label === "Home" && <WorkDropdown direction="down" />}
              </Fragment>
            );
          })}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-ink px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-black"
          >
            CONTACT
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md text-ink md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden="true">
            <path
              d="M1 1H21M1 8H21M1 15H21"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border bg-bg px-6 pb-6 pt-2 md:hidden"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Fragment key={link.label}>
                  <li>
                    <Link
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className={`text-base ${
                        isActive ? "font-semibold text-ink" : "text-muted"
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                  {link.label === "Home" && (
                    <li>
                      <button
                        type="button"
                        aria-expanded={workExpanded}
                        onClick={() => setWorkExpanded((value) => !value)}
                        className={`flex w-full items-center justify-between text-base ${
                          pathname.startsWith("/work/")
                            ? "font-semibold text-ink"
                            : "text-muted"
                        }`}
                      >
                        Work
                        <svg
                          width="10"
                          height="6"
                          viewBox="0 0 10 6"
                          fill="none"
                          aria-hidden="true"
                          className={`transition-transform duration-200 ${
                            workExpanded ? "rotate-180" : ""
                          }`}
                        >
                          <path
                            d="M1 1L5 5L9 1"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      {workExpanded && (
                        <ul className="mt-3 flex flex-col gap-3 pl-4">
                          {allProjects.map((project) => (
                            <li key={project.href}>
                              <Link
                                href={project.href}
                                className="text-sm text-muted"
                                onClick={() => {
                                  setMenuOpen(false);
                                  setWorkExpanded(false);
                                }}
                              >
                                {project.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  )}
                </Fragment>
              );
            })}
            <li>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-ink px-6 py-3 text-sm font-medium text-white"
                onClick={() => setMenuOpen(false)}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
