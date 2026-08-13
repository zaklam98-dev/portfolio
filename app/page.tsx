import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import ApproachSection from "@/components/home/ApproachSection";
import CreativitySection from "@/components/home/CreativitySection";
import SectionIntro from "@/components/work/SectionIntro";
import ProjectGrid from "@/components/work/ProjectGrid";
import ProjectCard from "@/components/work/ProjectCard";
import PillLink from "@/components/ui/PillLink";
import Reveal from "@/components/ui/Reveal";
import { selectedWork } from "@/lib/projects";

export const metadata: Metadata = {
  title: "An Ny Lam — Product Designer",
};

const [firstSelectedWork, ...otherSelectedWork] = selectedWork;

// The homepage featured card uses a wider banner crop of the Woolworths
// hero art than the 4:3 image used everywhere else this project is listed
// (the /work grid, the case study page) — override just the image here
// rather than in lib/projects.ts.
const featuredProject = {
  ...firstSelectedWork,
  image: "/images/home/woolworths-internal-products-featured.png",
  imageWidth: 2304,
  imageHeight: 880,
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

        <Reveal variant="card">
          <div className="overflow-hidden rounded-xl2 border border-border bg-bg">
            <ProjectCard
              project={featuredProject}
              size="large"
              imageAspectClass="aspect-[2304/880]"
            />
          </div>
        </Reveal>

        <div className="mt-8">
          <ProjectGrid projects={otherSelectedWork} columns={3} size="large" />
        </div>

        <div className="mt-10 flex justify-center">
          <PillLink href="/work" variant="teal">
            View all work
          </PillLink>
        </div>
      </section>

      <ApproachSection />

      <CreativitySection />
    </>
  );
}
