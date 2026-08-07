import type { Metadata } from "next";
import Image from "next/image";
import CaseStudyHero from "@/components/work/CaseStudyHero";
import ProjectGrid from "@/components/work/ProjectGrid";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import { selectedWork } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Diamond Roofing — An Ny Lam",
};

const metaRows = [
  {
    label: "My role",
    value: ["Brand identity", "Logo design", "Website UI", "Marketing collateral"],
  },
];

const colourPalette = [
  { name: "White", hex: ["#FFFFFF"], swatchClassName: "border border-border bg-white" },
  {
    name: "Gradient",
    hex: ["#E94C10", "#EF8317"],
    swatchClassName: "bg-[linear-gradient(180deg,#E94C10,#EF8317)] text-white",
  },
  { name: "Midnight", hex: ["#0E2136"], swatchClassName: "bg-[#0E2136] text-white" },
];

const typefaces = [
  {
    role: "Primary Typeface",
    name: "Sora",
    description: "Modern, geometric, confident.",
    usedFor: ["headings", "signage", "branding", "marketing materials"],
  },
  {
    role: "Secondary Typeface",
    name: "Inter",
    description: "Clean, highly readable.",
    usedFor: ["body copy", "documents", "proposals", "website content"],
  },
];

const brandApplicationsTop = [
  {
    src: "/images/work/diamond-roofing/brand-card.png",
    alt: "Diamond Roofing business cards in navy and white, featuring the logo, contact details and licence number",
  },
  {
    src: "/images/work/diamond-roofing/brand-banner.png",
    alt: "Diamond Roofing site banner on a construction fence, reading 'Built to Protect' with contact details",
  },
  {
    src: "/images/work/diamond-roofing/brand-apparel.png",
    alt: "Diamond Roofing branded cap, polo shirt and t-shirt in navy with the logo embroidered on the chest",
  },
];

const brandApplicationsBottom = [
  {
    src: "/images/work/diamond-roofing/brand-truck.png",
    alt: "Diamond Roofing work truck and workshop signage in navy with the logo and service list",
  },
  {
    src: "/images/work/diamond-roofing/brand-signage.png",
    alt: "Diamond Roofing 3D wall-mounted signage in brushed metal on a dark building exterior",
  },
];

const nextProjects = selectedWork
  .filter((project) =>
    [
      "/work/woolworths-internal-products",
      "/work/bunch",
      "/work/echo-archive",
    ].includes(project.href)
  )
  .map((project) => ({ ...project, number: undefined }));

export default function DiamondRoofingPage() {
  return (
    <>
      <CaseStudyHero
        image="/images/work/diamond-roofing/hero.png"
        imageWidth={2304}
        imageHeight={1037}
        imageAlt="A laptop and phone displaying the Diamond Roofing website homepage, 'Built to Protect. Designed to Last.', beside a navy mug printed with the Diamond Roofing logo"
        title="Diamond Roofing"
        subtitle="Building a premium identity for a modern roofing company."
        meta={metaRows}
      />

      <section id="logo-concept" className="container-work py-16 md:py-20">
        <Reveal variant="paragraph">
          <Eyebrow variant="muted">Logo Concept</Eyebrow>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <Reveal variant="image">
            <Image
              src="/images/work/diamond-roofing/logo.png"
              width={861}
              height={861}
              alt="Diamond Roofing logo: a diamond-shaped mark combining a roof peak and a house silhouette, above the wordmark 'Diamond Roofing' with an orange underline"
              className="mx-auto h-auto w-full max-w-sm"
            />
          </Reveal>
          <Reveal variant="image" delay={100}>
            <Image
              src="/images/work/diamond-roofing/logo-elements.png"
              width={1497}
              height={428}
              alt="Logo concept breakdown: Roof Peak represents protection and shelter, Diamond Shape represents strength and durability, House represents a sense of home"
              className="h-auto w-full"
            />
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 md:mt-20 md:grid-cols-2 md:gap-16">
          <Reveal variant="paragraph">
            <Eyebrow variant="muted">Colour Palette</Eyebrow>
            <div className="mt-6 grid grid-cols-3 gap-4">
              {colourPalette.map((colour) => (
                <div
                  key={colour.name}
                  className={`flex h-40 flex-col justify-between rounded-xl2 p-5 ${colour.swatchClassName}`}
                >
                  <p className="font-bold">{colour.name}</p>
                  <div className="text-sm">
                    <p className="opacity-80">HEX</p>
                    {colour.hex.map((value) => (
                      <p key={value} className="font-semibold">
                        {value}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal variant="paragraph" delay={100}>
            <Eyebrow variant="muted">Typography</Eyebrow>
            <div className="mt-6 grid grid-cols-2 gap-6">
              {typefaces.map((typeface) => (
                <div key={typeface.name}>
                  <p className="text-xs font-bold uppercase tracking-wide text-teal">
                    {typeface.role}
                  </p>
                  <p className="mt-2 font-heading text-3xl font-bold text-ink">
                    {typeface.name}
                  </p>
                  <p className="mt-1 text-body">{typeface.description}</p>
                  <p className="mt-4 text-sm font-bold text-ink">Used for:</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-body">
                    {typeface.usedFor.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-16 md:mt-20">
          <Reveal variant="paragraph">
            <Eyebrow variant="muted">Brand Applications</Eyebrow>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {brandApplicationsTop.map((image, index) => (
              <Reveal key={image.src} variant="image" index={index}>
                <div className="relative h-64 overflow-hidden rounded-xl sm:h-72">
                  <Image
                    src={image.src}
                    fill
                    alt={image.alt}
                    className="object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {brandApplicationsBottom.map((image, index) => (
              <Reveal key={image.src} variant="image" index={index}>
                <div className="relative h-64 overflow-hidden rounded-xl sm:h-80">
                  <Image
                    src={image.src}
                    fill
                    alt={image.alt}
                    className="object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="website-design" className="container-work py-16 md:py-20">
        <Reveal variant="paragraph">
          <Eyebrow variant="muted">Website Design</Eyebrow>
        </Reveal>

        <Reveal variant="image" delay={100} className="mt-8">
          <Image
            src="/images/work/diamond-roofing/web-home.png"
            width={1752}
            height={1266}
            alt="Diamond Roofing website homepage: hero reading 'Built to Protect. Designed to Last.' over a house with a dark roof, with a Skilled Tradespeople / Premium Materials / End-to-End Care strip below"
            className="h-auto w-full rounded-2xl"
          />
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <Reveal variant="image">
            <Image
              src="/images/work/diamond-roofing/web-tile-repairs.png"
              width={870}
              height={1937}
              alt="Diamond Roofing 'Precision Tile Roof Repairs' service page, covering restoration services, capabilities and a recent-works portfolio strip"
              className="h-auto w-full rounded-2xl"
            />
          </Reveal>
          <Reveal variant="image" delay={100}>
            <Image
              src="/images/work/diamond-roofing/web-decking.png"
              width={870}
              height={1937}
              alt="Diamond Roofing 'Timber & Composite Decking' service page, covering material excellence and a recent-works portfolio strip"
              className="h-auto w-full rounded-2xl"
            />
          </Reveal>
        </div>
      </section>

      <section id="mobile-experience" className="container-work py-16 md:py-20">
        <Reveal variant="paragraph">
          <Eyebrow variant="muted">Mobile Experience</Eyebrow>
        </Reveal>
        <Reveal variant="image" delay={100} className="mt-8">
          <Image
            src="/images/work/diamond-roofing/mobile.png"
            width={1824}
            height={969}
            alt="Five mobile screens of the Diamond Roofing website: home, our legacy, services overview, portfolio, and a request-a-quote contact form"
            className="h-auto w-full"
          />
        </Reveal>
      </section>

      <section id="next-projects" className="container-work py-16 md:py-20">
        <Reveal variant="paragraph">
          <Eyebrow variant="muted">Next Projects</Eyebrow>
        </Reveal>
        <div className="mt-8">
          <ProjectGrid projects={nextProjects} columns={3} size="small" />
        </div>
      </section>
    </>
  );
}
