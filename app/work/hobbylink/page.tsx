import type { Metadata } from "next";
import CaseStudyHero from "@/components/work/CaseStudyHero";
import ProjectGrid from "@/components/work/ProjectGrid";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import { selectedWork } from "@/lib/projects";

export const metadata: Metadata = {
  title: "HobbyLink — An Ny Lam",
};

const metaRows = [
  { label: "Role", value: ["Sole Designer"] },
  { label: "Year", value: ["2026"] },
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

export default function HobbyLinkPage() {
  return (
    <>
      <CaseStudyHero
        image="/images/work/hobbylink/hero.png"
        imageWidth={1189}
        imageHeight={766}
        imageAlt="A green plush dinosaur mascot charm with a digital eyes screen clipped to a backpack, beside a phone showing the HobbyLink app notifying that someone with a shared interest in painting is nearby"
        title="HobbyLink"
        subtitle="Making new friendships feel a little more natural through a collectible smart companion."
        meta={metaRows}
        disclaimer="Full case study coming soon. Currently redesigning the concept into a polished high-fidelity experience."
      />

      <section className="container-work py-16 md:py-20">
        <Reveal variant="paragraph">
          <Eyebrow variant="muted">The Challenge</Eyebrow>
          <div className="mt-4 space-y-4">
            <blockquote className="border-l-2 border-ink/30 pl-6 text-2xl leading-snug text-ink md:text-3xl">
              International students often struggle to build meaningful
              friendships because of social anxiety, language barriers and
              the difficulty of finding people with shared interests.
            </blockquote>
            <p className="text-lg leading-relaxed text-body">
              The research asked how technology could make those first
              conversations easier.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 md:mt-20">
          <Reveal variant="paragraph">
            <Eyebrow variant="muted">The Concept</Eyebrow>
            <p className="mt-4 text-lg leading-relaxed text-body">
              HobbyLink pairs a mobile app with an interactive mascot charm
              that lives on your bag. When compatible people are nearby, the
              charm quietly lights up, turning everyday encounters into
              natural opportunities to connect.
            </p>
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
