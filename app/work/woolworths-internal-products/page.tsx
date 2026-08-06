import type { Metadata } from "next";
import CaseStudyHero from "@/components/work/CaseStudyHero";
import PhaseSectionHeader from "@/components/work/PhaseSectionHeader";
import PlatformCard from "@/components/work/PlatformCard";
import IconCard from "@/components/work/IconCard";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Woolworths Internal Products — An Ny Lam",
};

const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "Project 01", href: "#project-01" },
  { label: "Project 02", href: "#project-02" },
  { label: "Project 03", href: "#project-03" },
  { label: "Outcomes", href: "#outcomes" },
];

const metaRows = [
  { label: "Role", value: ["UX/UI Designer"] },
  { label: "Year", value: ["2025, 2026"] },
  { label: "Deliverables", value: ["Website", "Visual design", "Developer Handoff"] },
];

const platforms = [
  {
    number: "01",
    image: "/images/work/woolworths-internal-products/product-01.png",
    imageWidth: 475,
    imageHeight: 354,
    title: "Industry Events Platform",
    description: "Helping teams discover, filter and manage industry events.",
    tags: ["Information Architecture"],
    href: "#project-01",
  },
  {
    number: "02",
    image: "/images/work/woolworths-internal-products/product-02.png",
    imageWidth: 475,
    imageHeight: 360,
    title: "New Releases Platform",
    description:
      "Transforming launch spreadsheets into an engaging product discovery experience.",
    tags: ["Visual Design", "Motion"],
    href: "#project-02",
  },
  {
    number: "03",
    image: "/images/work/woolworths-internal-products/product-03.png",
    imageWidth: 470,
    imageHeight: 354,
    title: "Compliance Review Platform",
    description: "Making AI-generated compliance reports understandable.",
    tags: ["Information Architecture"],
    href: "#project-03",
  },
];

const philosophyCards = [
  {
    title: "Design For Decision Making",
    icon: "/images/work/woolworths-internal-products/icons/decision.svg",
    paragraphs: [
      "Users weren't looking for data. They were trying to answer questions.",
      "Every interface was designed around helping users reach decisions quickly rather than simply displaying information.",
    ],
  },
  {
    title: "Reduce Cognitive Load",
    icon: "/images/work/woolworths-internal-products/icons/cognitive.svg",
    paragraphs: [
      "Enterprise systems naturally contain large amounts of information.",
      "I organised information into clear visual hierarchies that surfaced the most important content first while allowing users to progressively explore additional detail.",
    ],
  },
  {
    title: "Prioritise Scanning",
    icon: "/images/work/woolworths-internal-products/icons/scanning.svg",
    paragraphs: [
      "Internal users often spend only seconds finding what they need.",
      "Large headings, visual grouping, colour, spacing and typography were used to create interfaces that could be scanned rather than read.",
    ],
  },
  {
    title: "Create Consistent Experiences",
    icon: "/images/work/woolworths-internal-products/icons/consistent.svg",
    paragraphs: [
      "Although each platform addressed different workflows, consistent navigation, filtering behaviour, layouts and interaction patterns reduced the learning curve across products.",
    ],
  },
];

export default function WoolworthsInternalProductsPage() {
  return (
    <>
      <CaseStudyHero
        image="/images/work/woolworths-internal-products/hero.png"
        imageWidth={1152}
        imageHeight={440}
        imageAlt="Isometric collage of Woolworths internal product screens: Product Spec Review, Industry Events editorial calendar, Upcoming events calendar, and New Releases grocery launch screen"
        title="Internal Products for Operational Teams at Woolworths"
        meta={metaRows}
        intro="Transforming complex operational data into intuitive internal products that help teams find information faster, make better decisions, and reduce reliance on spreadsheets."
        navItems={navItems}
        disclaimer="This case study showcases real products designed at Woolworths. To protect confidential business information, selected screenshots, datasets and content have been anonymised or recreated. The workflows, design challenges, decisions and user experiences accurately reflect my contributions to these projects."
      />

      <section id="overview" className="container-work py-16 md:py-20">
        <Reveal variant="paragraph">
          <Eyebrow variant="muted">Overview</Eyebrow>
        </Reveal>
        <Reveal variant="paragraph" delay={100} className="mt-6">
          <div className="space-y-5 text-lg leading-relaxed text-body">
            <p>
              During my time at Woolworths, I designed a suite of internal web
              applications used across multiple business teams to manage
              product launches, industry events, and compliance reviews.
            </p>
            <p>Although each product served a different purpose, they all shared the same challenge:</p>
            <blockquote className="border-l-2 border-ink/30 pl-6 text-2xl leading-snug text-ink md:text-3xl">
              Operational information was scattered across spreadsheets,
              disconnected systems and structured datasets.
            </blockquote>
            <p>
              My role was to transform this complexity into digital products
              that were{" "}
              <span className="font-bold text-ink">
                intuitive, searchable and easy to navigate.
              </span>
            </p>
            <p>
              Together, these platforms replaced spreadsheet-driven workflows
              with purpose-built digital experiences that supported teams
              throughout the product lifecycle - from planning industry
              events, to monitoring product launches, to reviewing AI-assisted
              compliance reports.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 md:mt-20">
          <Reveal variant="paragraph">
            <Eyebrow variant="muted">Enterprise Products</Eyebrow>
          </Reveal>
          <div className="mt-8 overflow-hidden rounded-xl2 border border-border">
            <div className="grid grid-cols-1 divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
              {platforms.map((platform, index) => (
                <Reveal key={platform.title} variant="card" index={index}>
                  <PlatformCard {...platform} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-20">
          <Reveal variant="paragraph">
            <Eyebrow variant="muted">Design Philosophy</Eyebrow>
          </Reveal>
          <Reveal variant="paragraph" delay={100} className="mt-6">
            <p className="text-lg text-ink">
              Although each platform solved a different business problem, I
              approached every project using the same principles.
            </p>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {philosophyCards.map((card, index) => (
              <Reveal key={card.title} variant="card" index={index}>
                <IconCard title={card.title} icon={card.icon}>
                  {card.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </IconCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
