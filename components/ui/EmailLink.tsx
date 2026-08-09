"use client";

import { useEffect, useRef, useState } from "react";
import { EMAIL } from "@/lib/constants";

type EmailLinkProps = {
  className?: string;
};

/**
 * Renders its own "Copied!" tooltip via `position: absolute`, centered with
 * `left-1/2` — but doesn't set `position: relative` on itself. Both current
 * usages (ContactBanner, ContactHero) rely on a `relative` *ancestor* — the
 * wrapper div around EmailLink — as the tooltip's positioning context, so a
 * future usage of EmailLink needs its own `relative` wrapper for the
 * tooltip to position correctly. That wrapper also carries the decorative
 * squiggle, positioned `absolute` so it sits outside normal flow — the
 * wrapper's layout width (and therefore what "centered" and the tooltip's
 * `left-1/2` mean) is driven by the email text alone, deliberately: the
 * squiggle is an accent pointing at the email, not part of what should be
 * optically centered in the section. Don't put the squiggle back in normal
 * flow (e.g. a flex row) next to the button — that was tried and made the
 * email visibly off-center, shifted right by the squiggle's own width.
 *
 * The tooltip is a *sibling* of the button (this component returns a
 * Fragment), not nested inside it — that's load-bearing, not a style
 * choice. The button gets `.email-copied-pulse` (a `transform: scale(...)`
 * animation) at the same time the tooltip is visible, and per the CSS spec
 * any element with an active transform becomes a new containing block for
 * its absolutely-positioned descendants. If the tooltip were a child of the
 * button, the pulsing button itself — not the row div — would silently
 * become its positioning context the moment it copies, undoing the
 * `relative`-on-the-row fix above and re-centering the tooltip on the
 * button again. Keeping them siblings sidesteps this entirely.
 */

export default function EmailLink({ className = "" }: EmailLinkProps) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [name, domain] = EMAIL.split("@");

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleClick = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        aria-label="Copy email address to clipboard"
        className={`group cursor-pointer appearance-none border-0 bg-transparent p-0 text-left text-ink transition-colors duration-200 hover:text-teal ${
          copied ? "email-copied-pulse" : ""
        } ${className}`}
      >
        {name}
        <span className="text-teal transition-colors duration-200 group-hover:text-ink">
          @
        </span>
        {domain}
        <span className="sr-only" aria-live="polite">
          {copied ? "Email copied to clipboard" : ""}
        </span>
      </button>
      {copied && (
        <span
          aria-hidden="true"
          className="email-copied-tooltip pointer-events-none absolute left-1/2 top-full mt-4 whitespace-nowrap rounded-full bg-ink px-3 py-1.5 font-body text-xs font-medium normal-case tracking-normal text-white"
        >
          Copied!
        </span>
      )}
    </>
  );
}
