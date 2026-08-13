"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { allProjects } from "@/lib/projects";

type WorkDropdownProps = {
  direction?: "down" | "up";
  size?: "base" | "sm";
};

export default function WorkDropdown({
  direction = "down",
  size = "base",
}: WorkDropdownProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const isActive = pathname.startsWith("/work");

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const handleClickOutside = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative inline-flex items-center gap-1.5">
      <Link
        href="/work"
        className={`transition-colors duration-200 ${
          size === "sm" ? "text-sm" : "text-base"
        } ${isActive ? "font-semibold text-ink" : "text-muted hover:text-ink"}`}
      >
        Work
      </Link>
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Toggle Work menu"
        onClick={() => setOpen((value) => !value)}
        className={`flex items-center transition-colors duration-200 ${
          isActive ? "text-ink" : "text-muted hover:text-ink"
        }`}
      >
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          aria-hidden="true"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
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

      {open && (
        <div
          role="menu"
          aria-label="Work"
          className={`absolute left-0 z-50 w-64 rounded-xl2 border border-border bg-surface p-2 shadow-lg ${
            direction === "down" ? "top-full mt-3" : "bottom-full mb-3"
          }`}
        >
          {allProjects.map((project) => (
            <Link
              key={project.href}
              href={project.href}
              role="menuitem"
              onClick={() => setOpen(false)}
              className="block rounded-lg px-4 py-2.5 text-sm text-muted transition-colors duration-200 hover:bg-bg hover:text-ink"
            >
              {project.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
