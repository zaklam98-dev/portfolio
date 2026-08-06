"use client";

import { useEffect, useRef, useState } from "react";

type RevealVariant =
  | "default"
  | "heading"
  | "paragraph"
  | "image"
  | "card"
  | "button";

type RevealProps = {
  children: React.ReactNode;
  variant?: RevealVariant;
  /** Explicit delay in ms. Overrides `index`-based stagger if set. */
  delay?: number;
  /** Position within a staggered group — delay is computed as index * staggerStep. */
  index?: number;
  /** Ms between staggered siblings when using `index`. */
  staggerStep?: number;
  className?: string;
};

/**
 * Per-content-type motion so the reveal feels crafted rather than one
 * repeated effect: headings get a longer, slightly bigger lift; paragraphs
 * are a quick fade; images/cards echo the default fade+lift+scale; buttons
 * only fade (no movement, so they don't feel like they're "landing").
 */
const VARIANTS: Record<RevealVariant, { y: number; scale: number; duration: number }> = {
  default: { y: 24, scale: 0.98, duration: 600 },
  heading: { y: 28, scale: 1, duration: 700 },
  paragraph: { y: 12, scale: 1, duration: 450 },
  image: { y: 16, scale: 0.98, duration: 600 },
  card: { y: 24, scale: 0.98, duration: 600 },
  button: { y: 0, scale: 1, duration: 450 },
};

const EASING = "cubic-bezier(0.22, 1, 0.36, 1)";
// Fire slightly before the element's bottom edge crosses into view, so the
// reveal feels timed to reading pace rather than lagging behind the scroll.
const ROOT_MARGIN = "0px 0px -10% 0px";
const THRESHOLD = 0.2;

// A single shared IntersectionObserver for every Reveal instance on the page,
// rather than one observer per element — cheaper for grids/galleries with
// many siblings, and keeps scroll performance smooth.
let sharedObserver: IntersectionObserver | null = null;
const revealCallbacks = new WeakMap<Element, () => void>();

function getSharedObserver(): IntersectionObserver | null {
  if (typeof window === "undefined") return null;
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          revealCallbacks.get(entry.target)?.();
          sharedObserver?.unobserve(entry.target);
          revealCallbacks.delete(entry.target);
        }
      },
      { threshold: THRESHOLD, rootMargin: ROOT_MARGIN }
    );
  }
  return sharedObserver;
}

export default function Reveal({
  children,
  variant = "default",
  delay,
  index,
  staggerStep = 100,
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const observer = getSharedObserver();
    if (!observer) {
      setIsVisible(true);
      return;
    }

    revealCallbacks.set(node, () => setIsVisible(true));
    observer.observe(node);

    return () => {
      observer.unobserve(node);
      revealCallbacks.delete(node);
    };
  }, []);

  const { y, scale, duration } = VARIANTS[variant];
  const computedDelay = delay ?? (index !== undefined ? index * staggerStep : 0);

  // Grid/flex rows stretch this wrapper to the row's height by default, but a
  // plain block child doesn't inherit that — so bordered card content ends up
  // sized to its own text instead of matching its siblings. Only card-grid
  // usage needs this passthrough; scoping it to `variant="card"` keeps every
  // other usage (images, headings, etc. that rely on their own intrinsic or
  // explicit sizing) untouched.
  const fillHeight = variant === "card" ? "h-full [&>*]:h-full" : "";

  return (
    <div
      ref={ref}
      className={`reveal ${fillHeight} ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translateY(0) scale(1)"
          : `translateY(${y}px) scale(${scale})`,
        transitionProperty: "opacity, transform",
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: EASING,
        transitionDelay: `${computedDelay}ms`,
      }}
    >
      {children}
    </div>
  );
}
