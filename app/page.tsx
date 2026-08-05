import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import CreativitySection from "@/components/home/CreativitySection";
import SectionIntro from "@/components/work/SectionIntro";
import ProjectGrid from "@/components/work/ProjectGrid";
import { selectedWork, otherExplorations } from "@/lib/projects";

export const metadata: Metadata = {
  title: "An Ny Lam — Product Designer",
};

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="container-content py-16 md:py-20">
        <SectionIntro
          eyebrow="Selected Work"
          description="A collection of enterprise products, research-driven concepts and interaction design explorations."
        />
        <ProjectGrid projects={selectedWork} columns={2} size="large" />
      </section>

      <CreativitySection />

      <section className="container-content pb-24 pt-4 md:pb-32">
        <SectionIntro eyebrow="Other Explorations" />
        <ProjectGrid projects={otherExplorations} columns={3} size="small" />
      </section>
    </>
  );
}
