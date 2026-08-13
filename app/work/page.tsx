import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";
import SectionIntro from "@/components/work/SectionIntro";
import ProjectGrid from "@/components/work/ProjectGrid";
import { selectedWork, otherExplorations } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work — An Ny Lam",
};

export default function WorkPage() {
  return (
    <>
      <section className="container-content pb-16 pt-16 md:pb-20 md:pt-20">
        <Reveal variant="heading">
          <h1 className="font-heading text-5xl font-extrabold tracking-tight text-ink md:text-6xl">
            Work
          </h1>
        </Reveal>
        <Reveal variant="paragraph" delay={120} className="mt-6">
          <p className="max-w-2xl text-lg text-body md:text-xl">
            A broader look at the work - from enterprise systems to
            speculative concepts, spanning research, strategy and interaction
            design.
          </p>
        </Reveal>
      </section>

      <section className="container-content pb-16 md:pb-20">
        <ProjectGrid projects={selectedWork} columns={2} size="large" />
      </section>

      <section className="container-content pb-24 pt-4 md:pb-32">
        <SectionIntro eyebrow="Other Explorations" />
        <ProjectGrid projects={otherExplorations} columns={3} size="small" />
      </section>
    </>
  );
}
