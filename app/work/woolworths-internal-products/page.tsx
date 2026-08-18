import type { Metadata } from "next";
import Image from "next/image";
import CaseStudyHero from "@/components/work/CaseStudyHero";
import PhaseSectionHeader from "@/components/work/PhaseSectionHeader";
import PlatformCard from "@/components/work/PlatformCard";
import IconCard from "@/components/work/IconCard";
import ProjectGrid from "@/components/work/ProjectGrid";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import { selectedWork } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Woolworths Internal Products — An Ny Lam",
};

const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "Product 01", href: "#project-01" },
  { label: "Product 02", href: "#project-02" },
  { label: "Product 03", href: "#project-03" },
  { label: "Outcomes", href: "#outcomes" },
];

const metaRows = [
  { label: "Role", value: ["Creative Designer | UX/UI"] },
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

const project01KeyDecisions = [
  {
    title: "Powerful Search & Filtering",
    paragraphs: [
      "Users could search instantly while filtering by director, team, location, event type, category and date.",
      "Multiple filters worked together seamlessly without overwhelming the interface.",
    ],
  },
  {
    title: "Smarter Event Organisation",
    paragraphs: [
      "Events occurring across multiple years were grouped into stacked cards, reducing duplication while preserving historical information.",
    ],
  },
  {
    title: "Calendar View",
    paragraphs: [
      "A secondary calendar experience supported planning workflows by providing a chronological overview of upcoming events.",
    ],
  },
  {
    title: "Responsive Experience",
    paragraphs: [
      "Desktop layouts prioritised information density while mobile layouts adapted interactions for touch-friendly navigation through full-screen dialogs and simplified controls.",
    ],
  },
];

const project02Categories = [
  {
    name: "Fresh",
    image: "/images/work/woolworths-internal-products/project-02-category-fresh.png",
  },
  {
    name: "Protein",
    image: "/images/work/woolworths-internal-products/project-02-category-protein.png",
  },
  {
    name: "Grocery",
    image: "/images/work/woolworths-internal-products/project-02-category-grocery.png",
  },
  {
    name: "Fruit & Vegetable",
    image: "/images/work/woolworths-internal-products/project-02-category-fruit-veg.png",
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

const nextProjects = selectedWork
  .filter((project) => project.href !== "/work/woolworths-internal-products")
  .map((project) => ({ ...project, number: undefined }));

export default function WoolworthsInternalProductsPage() {
  return (
    <>
      <CaseStudyHero
        image="/images/work/woolworths-internal-products/hero.png"
        imageWidth={2304}
        imageHeight={880}
        imageAlt="Isometric collage of Woolworths internal product screens: Product Spec Review, Industry Events editorial calendar, Upcoming events calendar, and New Releases grocery launch screen"
        title="Designing Enterprise Products at Woolworths"
        meta={metaRows}
        intro="Designing intuitive internal experiences that turn complex, spreadsheet-driven workflows into clearer ways to find and use information."
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
              During my time at Woolworths, I&apos;ve contributed UX/UI design
              across a range of internal web applications used by different
              business teams to manage product launches, industry events and
              compliance reviews.
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
              throughout the product lifecycle.
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
            <Eyebrow variant="muted">What I Focused On</Eyebrow>
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

      <section id="project-01" className="container-work py-16 md:py-20">
        <Reveal variant="heading">
          <PhaseSectionHeader
            eyebrow="Product 01"
            title="Industry Events Platform"
            subtitle="A searchable event management platform replacing spreadsheet-based event tracking."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 md:mt-16 md:grid-cols-2 md:gap-16">
          <Reveal variant="paragraph">
            <Eyebrow variant="muted">Problem</Eyebrow>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-body">
              <p className="font-bold text-ink">
                Industry events were previously managed through spreadsheets
                containing dozens of attributes for every event.
              </p>
              <p>
                As the database grew, users found it increasingly difficult
                to locate relevant events, compare upcoming opportunities and
                manage historical records.
              </p>
              <p>
                The challenge was to transform spreadsheet data into an
                experience that supported{" "}
                <span className="font-bold text-ink">rapid discovery</span>{" "}
                rather than manual searching.
              </p>
            </div>
          </Reveal>
          <Reveal variant="paragraph" delay={100}>
            <Eyebrow variant="muted">Design Objectives</Eyebrow>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-lg leading-relaxed text-body">
              <li>Improve discoverability through search and filtering</li>
              <li>Simplify navigation across a growing event library</li>
              <li>Support multiple browsing behaviours</li>
              <li>Create a responsive experience across desktop and mobile</li>
            </ul>
          </Reveal>
        </div>

        <div className="mt-16 md:mt-20">
          <Reveal variant="paragraph">
            <Eyebrow variant="muted">Before</Eyebrow>
          </Reveal>
          <Reveal variant="paragraph" delay={100} className="mt-4">
            <p className="text-lg text-ink">
              Previously managed across multiple spreadsheets and hundreds of
              event records.
            </p>
          </Reveal>
          <Reveal variant="image" delay={150} className="mt-8">
            <div className="overflow-hidden rounded-xl2 border border-border">
              <Image
                src="/images/work/woolworths-internal-products/project-01-before.png"
                width={1731}
                height={395}
                alt="Spreadsheet previously used to track industry events, with columns for event name, type, category, director, team and dates"
                className="h-auto w-full"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-16 md:mt-20">
          <Reveal variant="paragraph">
            <Eyebrow variant="muted">Key Design Decisions</Eyebrow>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {project01KeyDecisions.map((card, index) => (
              <Reveal key={card.title} variant="card" index={index}>
                <IconCard title={card.title}>
                  {card.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </IconCard>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16 md:mt-20">
          <Reveal variant="paragraph">
            <Eyebrow variant="muted">Final Experience</Eyebrow>
          </Reveal>
          <Reveal variant="paragraph" delay={100} className="mt-8">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-3">
              <ul className="list-disc space-y-3 pl-5 text-lg text-body">
                <li>Search-first navigation</li>
                <li>Calendar planning</li>
              </ul>
              <ul className="list-disc space-y-3 pl-5 text-lg text-body">
                <li>Multi-filter system</li>
                <li>Responsive layouts</li>
              </ul>
              <ul className="list-disc space-y-3 pl-5 text-lg text-body">
                <li>Stacked event cards</li>
              </ul>
            </div>
          </Reveal>

          <Reveal variant="image" delay={150} className="mt-10">
            <Image
              src="/images/work/woolworths-internal-products/project-01-final-1.png"
              width={1772}
              height={1369}
              alt="Industry Events editorial calendar page annotated with callouts for search, filtering, quick view and stacked event cards"
              className="h-auto w-full"
            />
          </Reveal>

          <Reveal variant="image" delay={150} className="mt-8">
            <Image
              src="/images/work/woolworths-internal-products/project-01-final-2.png"
              width={1799}
              height={1163}
              alt="Industry Events calendar view annotated with a callout pointing to the calendar navigation tab"
              className="h-auto w-full"
            />
          </Reveal>

          <div className="mt-16 grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
            <Reveal variant="paragraph">
              <Eyebrow variant="teal">Designing For Complex Filtering</Eyebrow>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-body">
                <p>
                  One of the biggest UX challenges was{" "}
                  <span className="font-bold text-ink">
                    handling the interaction between filtering, sorting and
                    grouped event cards.
                  </span>
                </p>
                <p>
                  Events with identical names often occurred across multiple
                  years.{" "}
                  <span className="font-bold text-ink">
                    Stacked event cards
                  </span>{" "}
                  were introduced to grouped related events together while
                  still allowing filters to behave predictably.
                </p>
                <p>This ensured users could:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>filter without losing relevant results</li>
                  <li>sort events logically</li>
                  <li>browse historical and future events efficiently</li>
                </ul>
              </div>
            </Reveal>
            <Reveal variant="image" delay={100} className="mx-auto w-4/5">
              <Image
                src="/images/work/woolworths-internal-products/project-01-final-3.png"
                width={653}
                height={848}
                alt="Event detail card for the AusFresh Produce Expo, showing an image carousel, tags, dates, location and contact"
                className="h-auto w-full"
              />
            </Reveal>
          </div>

          <Reveal variant="paragraph" className="mt-16">
            <blockquote className="border-l-2 border-ink/30 pl-6 text-2xl leading-snug text-ink md:text-3xl">
              Teams can discover relevant events without navigating large
              spreadsheets.
            </blockquote>
          </Reveal>

          <div className="mt-16">
            <Reveal variant="paragraph">
              <Eyebrow variant="muted">Responsive Experience</Eyebrow>
            </Reveal>
            <Reveal variant="paragraph" delay={100} className="mt-4">
              <p className="text-lg text-ink">
                Internal teams often accessed event information while
                travelling or attending events, making a responsive
                experience essential.
              </p>
            </Reveal>
          </div>

          <Reveal variant="image" delay={150} className="mt-8">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/work/woolworths-internal-products/project-01-mockups.png"
                width={2160}
                height={890}
                alt="Five floating mobile and panel mockups of the Industry Events platform on a teal-to-green gradient background"
                className="h-auto w-full"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section id="project-02" className="container-work py-16 md:py-20">
        <Reveal variant="heading">
          <PhaseSectionHeader
            eyebrow="Product 02"
            title="New Releases Platform"
            subtitle="A centralised platform helping teams discover upcoming product launches."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 md:mt-16 md:grid-cols-2 md:gap-16">
          <Reveal variant="paragraph">
            <Eyebrow variant="muted">Challenge</Eyebrow>
            <blockquote className="mt-4 border-l-2 border-ink/30 pl-6 text-lg leading-relaxed text-ink">
              Upcoming product launches were tracked in a shared spreadsheet
              containing operational and launch data. While comprehensive,
              the spreadsheet wasn&apos;t designed for exploration, making it
              difficult for teams to quickly discover products relevant to
              their category.
            </blockquote>
          </Reveal>
          <Reveal variant="paragraph" delay={100}>
            <Eyebrow variant="muted">Design Objectives</Eyebrow>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-lg leading-relaxed text-body">
              <li>Transform spreadsheet data into a product-first browsing experience</li>
              <li>Improve discoverability through search, filtering and category navigation</li>
              <li>Reduce cognitive load by surfacing only relevant information</li>
              <li>Create a scalable design that could support multiple business teams</li>
              <li>Introduce moments of delight without compromising usability</li>
            </ul>
          </Reveal>
        </div>

        <div className="mt-16 md:mt-20">
          <Reveal variant="paragraph">
            <Eyebrow variant="muted">Before</Eyebrow>
          </Reveal>
          <Reveal variant="image" delay={100} className="mt-8">
            <div className="overflow-hidden rounded-xl2 border border-border">
              <Image
                src="/images/work/woolworths-internal-products/project-02-before.png"
                width={1731}
                height={395}
                alt="Spreadsheet previously used to track upcoming product launches, with columns for article number, product description, project type, team, brand, launch date and sell price"
                className="h-auto w-full"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-16 md:mt-20">
          <Reveal variant="paragraph">
            <Eyebrow variant="muted">Key Design Decisions</Eyebrow>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal variant="card" index={0}>
              <IconCard title="Category-First Navigation">
                <p>
                  Although every launch existed within a single dataset, each
                  business team primarily focused on products within their
                  own portfolio.
                </p>
                <p>
                  Instead of asking users to repeatedly filter the same
                  spreadsheet, dedicated category experiences were created
                  for:
                </p>
                <ul className="flex list-disc flex-wrap gap-x-6 gap-y-1 pl-5">
                  <li>Grocery</li>
                  <li>Fresh</li>
                  <li>Protein</li>
                  <li>Fruit & Vegetable</li>
                </ul>
                <p>
                  This allowed each team to immediately enter a familiar,
                  relevant environment.
                </p>
              </IconCard>
            </Reveal>
            <Reveal variant="card" index={1}>
              <IconCard title="From Spreadsheet Rows To Product Cards">
                <p>
                  Each launch became a dedicated product card. Every card
                  surfaces the information users need most.
                </p>
                <p>
                  Search and filtering remained central to the experience,
                  allowing teams to quickly narrow hundreds of upcoming
                  launches by:
                </p>
                <ul className="flex list-disc flex-wrap gap-x-6 gap-y-1 pl-5">
                  <li>Launch Type</li>
                  <li>Brand</li>
                  <li>Team</li>
                  <li>Launch Date</li>
                </ul>
                <p>Sorting options further supported different planning workflows.</p>
              </IconCard>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 md:mt-20">
          <Reveal variant="paragraph">
            <Eyebrow variant="muted">Final Experience</Eyebrow>
          </Reveal>

          <Reveal variant="image" delay={100} className="mt-8">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/work/woolworths-internal-products/project-02-final.gif"
                width={1438}
                height={806}
                unoptimized
                alt="Animated New Releases hero card with floating grocery item illustrations circling the Woolworths New Releases logo"
                className="h-auto w-full"
              />
            </div>
          </Reveal>

          <Reveal variant="image" delay={150} className="mt-8">
            <Image
              src="/images/work/woolworths-internal-products/project-02-card.png"
              width={1561}
              height={508}
              alt="Annotated New Releases product card for Party Mix Share Bag, with callouts for product image, price, launch type, launch date, team and brand"
              className="h-auto w-full"
            />
          </Reveal>

          <Reveal variant="paragraph" delay={100} className="mt-10">
            <p className="text-lg text-ink">
              Each business area received a tailored visual identity while
              sharing the same underlying product experience.
            </p>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {project02Categories.map((category, index) => (
              <Reveal key={category.name} variant="image" index={index}>
                <Image
                  src={category.image}
                  width={846}
                  height={624}
                  alt={`New Releases category card for ${category.name}`}
                  className="h-auto w-full"
                />
              </Reveal>
            ))}
          </div>

          <Reveal variant="image" delay={150} className="mt-10">
            <Image
              src="/images/work/woolworths-internal-products/project-02-errors.png"
              width={1575}
              height={477}
              alt="Three empty-state illustrations: No Results, Internal Error and Session Expired"
              className="h-auto w-full"
            />
          </Reveal>

          <div className="mt-16">
            <Reveal variant="paragraph">
              <Eyebrow variant="teal">Bringing Delight To Enterprise Software</Eyebrow>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-body">
                <p>
                  Because the platform was an internal tool, there was an
                  opportunity to make the experience more engaging without
                  compromising clarity or speed.
                </p>
                <p>
                  I explored lightweight motion and illustration to give each
                  category a distinct identity while keeping the underlying
                  interaction patterns consistent.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="project-03" className="container-work py-16 md:py-20">
        <Reveal variant="heading">
          <PhaseSectionHeader
            eyebrow="Product 03"
            title="Compliance Review Platform"
            subtitle="A layered review experience that helps users quickly understand AI-generated compliance findings."
          />
        </Reveal>

        <div className="mt-12 md:mt-16">
          <Reveal variant="paragraph">
            <Eyebrow variant="muted">Context</Eyebrow>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-body">
              <p>
                As part of Woolworths&apos; broader AI transformation
                initiative, multiple enterprise systems - including Sphere,
                Opal and Plexus - were consolidated into a unified Google
                Cloud data platform.
              </p>
              <p>
                AI agents automatically reviewed product specifications
                against business rules.
              </p>
              <p>
                My role focused on designing the interface that transformed
                these complex outputs into experiences users could quickly
                understand and trust.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 md:mt-20 md:grid-cols-2 md:gap-16">
          <Reveal variant="paragraph">
            <Eyebrow variant="muted">Problem</Eyebrow>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-body">
              <p>
                Compliance reports contained hundreds of validation checks
                spread across multiple product attributes.
              </p>
              <p>Users needed to rapidly determine:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Has this specification passed?</li>
                <li>What are the highest priority issues?</li>
                <li>Which sections require attention?</li>
                <li>What evidence supports each finding?</li>
              </ul>
              <p>
                The challenge was to reduce information overload without
                hiding important detail.
              </p>
            </div>
          </Reveal>
          <Reveal variant="paragraph" delay={100}>
            <Eyebrow variant="muted">Design Objectives</Eyebrow>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-lg leading-relaxed text-body">
              <li>Surface critical information immediately</li>
              <li>Improve information hierarchy</li>
              <li>Support progressive exploration</li>
              <li>Increase trust in AI-generated findings</li>
            </ul>
          </Reveal>
        </div>

        <div className="mt-16 md:mt-20">
          <Reveal variant="paragraph">
            <Eyebrow variant="muted">Solution</Eyebrow>
          </Reveal>
          <Reveal variant="paragraph" delay={100} className="mt-4">
            <p className="text-lg text-ink">
              The experience was designed around a layered information
              hierarchy.
            </p>
          </Reveal>

          <Reveal variant="image" delay={150} className="mt-8">
            <Image
              src="/images/work/woolworths-internal-products/project-03-solution-1.png"
              width={1790}
              height={880}
              alt="Product Spec Review search and status Overview card, annotated with a callout explaining the overall status is shown first"
              className="h-auto w-full"
            />
          </Reveal>

          <Reveal variant="image" delay={150} className="mt-8">
            <Image
              src="/images/work/woolworths-internal-products/project-03-solution-2.png"
              width={1716}
              height={853}
              alt="Supplier Details, Overall Summary and Areas of Concern cards, annotated with an executive summary callout"
              className="h-auto w-full"
            />
          </Reveal>

          <Reveal variant="image" delay={150} className="mt-8">
            <Image
              src="/images/work/woolworths-internal-products/project-03-solution-3.png"
              width={1783}
              height={875}
              alt="Expandable Details accordion with main details check and allergens checks, annotated with a progressive disclosure callout"
              className="h-auto w-full"
            />
          </Reveal>

          <div className="mt-16">
            <Reveal variant="paragraph">
              <Eyebrow variant="teal">Designing For Trust</Eyebrow>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-body">
                <p>
                  Because the platform presented AI-generated findings,
                  clarity became just as important as accuracy.
                </p>
                <p>
                  Visual hierarchy, severity indicators and expandable
                  content clearly differentiate between:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>critical failures</li>
                  <li>warnings</li>
                  <li>informational checks</li>
                  <li>supporting evidence</li>
                </ul>
                <p>
                  The result was an interface that communicated confidence
                  without overwhelming users with technical detail.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="outcomes" className="container-work py-16 md:py-20">
        <Reveal variant="heading">
          <h2 className="font-heading text-4xl font-extrabold text-ink md:text-5xl">
            What I delivered
          </h2>
        </Reveal>
        <Reveal variant="paragraph" delay={100} className="mt-6">
          <div className="space-y-4 text-lg leading-relaxed text-body">
            <p>
              Across these projects, I delivered responsive web experiences
              that translated complex datasets and operational requirements
              into clearer ways to browse, filter and review information.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <span className="font-bold text-ink">Industry Events:</span>{" "}
                Search, filtering, calendar and responsive event browsing.
              </li>
              <li>
                <span className="font-bold text-ink">New Releases:</span>{" "}
                Category-first product discovery, filtering and
                product-focused layouts.
              </li>
              <li>
                <span className="font-bold text-ink">Compliance Review:</span>{" "}
                Layered information hierarchy for reviewing AI-generated
                findings.
              </li>
            </ul>
          </div>
        </Reveal>

        <div className="mt-16 md:mt-20">
          <Reveal variant="paragraph">
            <Eyebrow variant="muted">Reflection</Eyebrow>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-body">
              <p>
                Designing enterprise products taught me that the biggest
                challenge was never simply creating polished interfaces, it
                was understanding how people make decisions within complex
                systems.
              </p>
              <p>
                Across every project, I found that the greatest improvements
                came from organising information thoughtfully, reducing
                cognitive load and presenting the right information at the
                right time.
              </p>
              <p>
                These projects strengthened my interest in Product Design
                because they showed me that{" "}
                <span className="font-bold text-ink">
                  good design starts with understanding the decisions,
                  constraints and information behind the screen.
                </span>{" "}
                I&apos;m continuing to build on that foundation by developing
                stronger skills in problem framing, research and end-to-end
                product thinking.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 md:mt-20">
          <Reveal variant="paragraph">
            <Eyebrow variant="muted">Next Projects</Eyebrow>
          </Reveal>
          <div className="mt-8">
            <ProjectGrid projects={nextProjects} columns={3} size="small" />
          </div>
        </div>
      </section>
    </>
  );
}
