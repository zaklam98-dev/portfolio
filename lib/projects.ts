export type Project = {
  number?: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  imageWidth: number;
  imageHeight: number;
  href: string;
  /** Renders a "Coming soon" pill over the card's image (e.g. HobbyLink). */
  comingSoon?: boolean;
  /** Optional wider banner crop used specifically for the Home page's
   * single featured card (whichever project is first in `selectedWork`).
   * Falls back to `image`/`imageWidth`/`imageHeight` when omitted, so
   * reordering `selectedWork` never requires a code change on the Home
   * page — only a project that should ever be featured needs this set. */
  featuredImage?: string;
  featuredImageWidth?: number;
  featuredImageHeight?: number;
  /** Tailwind aspect-ratio class matching featuredImage's dimensions.
   * Must be a literal string (not computed at runtime) so Tailwind's JIT
   * scanner can pick it up. Falls back to ProjectCard's own default
   * ("aspect-[4/3]") when omitted. */
  featuredImageAspectClass?: string;
};

export const selectedWork: Project[] = [
  {
    number: "001",
    title: "Woolworths • Bunch",
    description:
      "Evolving an online food community through feature design and user-centred improvements.",
    tags: ["Product Design", "Community Experience"],
    image: "/images/home/bunch.png",
    imageWidth: 761,
    imageHeight: 599,
    href: "/work/bunch",
    featuredImage: "/images/home/bunch-featured.png",
    featuredImageWidth: 2304,
    featuredImageHeight: 1000,
    featuredImageAspectClass: "aspect-[2304/1000]",
  },
  {
    number: "002",
    title: "Woolworths Internal Products",
    description:
      "Transforming complex enterprise data into intuitive products that help teams make faster decisions.",
    tags: ["Enterprise UX", "Information Architecture"],
    image: "/images/home/woolworths-internal-products.png",
    imageWidth: 761,
    imageHeight: 599,
    href: "/work/woolworths-internal-products",
    featuredImage: "/images/home/woolworths-internal-products-featured.png",
    featuredImageWidth: 2304,
    featuredImageHeight: 880,
    featuredImageAspectClass: "aspect-[2304/880]",
  },
  {
    number: "003",
    title: "RealSwipe",
    description:
      "Repositioning a dating-focused experience into a friendship-first social platform.",
    tags: ["UX Strategy", "Mobile Design"],
    image: "/images/home/realswipe.png",
    imageWidth: 761,
    imageHeight: 599,
    href: "/work/realswipe",
  },
  {
    number: "004",
    title: "Echo Archive",
    description:
      "Exploring how technology can support emotion, identity and memory during pregnancy.",
    tags: ["UX Research", "Experience Design"],
    image: "/images/home/echo-archive.png",
    imageWidth: 761,
    imageHeight: 599,
    href: "/work/echo-archive",
  },
];

export const otherExplorations: Project[] = [
  {
    title: "Diamond Roofing",
    description:
      "Building a cohesive brand identity spanning logo, website and marketing collateral.",
    tags: ["Branding", "Web Design"],
    image: "/images/home/diamond-roofing.png",
    imageWidth: 632,
    imageHeight: 480,
    href: "/work/diamond-roofing",
  },
  {
    title: "How the Body Remembers",
    description:
      "Exploring how repetition and sensory feedback shape embodied memory through the art of making coffee.",
    tags: ["Human-Centered Research", "Cultural Probes"],
    image: "/images/home/how-the-body-remembers.png",
    imageWidth: 632,
    imageHeight: 480,
    href: "/work/how-the-body-remembers",
  },
  {
    title: "HobbyLink",
    description:
      "Helping international students build friendships through a collectible smart companion and shared interests.",
    tags: ["UX Research", "Interaction Design"],
    image: "/images/home/hobbylink.png",
    imageWidth: 632,
    imageHeight: 480,
    href: "/work/hobbylink",
    comingSoon: true,
  },
];

/** All 7 case studies, selectedWork first — the single source for any nav
 * or menu that lists every project (e.g. the header/footer "Work" dropdown). */
export const allProjects: Project[] = [...selectedWork, ...otherExplorations];
