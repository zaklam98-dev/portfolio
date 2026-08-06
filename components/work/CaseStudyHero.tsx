import Image from "next/image";
import MetaTable from "@/components/work/MetaTable";
import CaseStudyNav from "@/components/work/CaseStudyNav";
import Reveal from "@/components/ui/Reveal";

type MetaRow = {
  label: string;
  value: string[];
};

type NavItem = {
  label: string;
  href: string;
};

type CaseStudyHeroProps = {
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
  title: string;
  meta: MetaRow[];
  intro: string;
  navItems: NavItem[];
  disclaimer: string;
};

export default function CaseStudyHero({
  image,
  imageWidth,
  imageHeight,
  imageAlt,
  title,
  meta,
  intro,
  navItems,
  disclaimer,
}: CaseStudyHeroProps) {
  return (
    <section className="container-work pb-16 pt-10 md:pb-20 md:pt-14">
      <Reveal variant="image">
        <div className="overflow-hidden rounded-2xl">
          <Image
            src={image}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            className="w-full object-cover"
            priority
          />
        </div>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
        <Reveal variant="heading">
          <h1 className="font-heading text-4xl font-extrabold leading-[1.1] text-ink md:text-5xl">
            {title}
          </h1>
        </Reveal>

        <Reveal variant="paragraph" delay={120}>
          <div>
            <MetaTable rows={meta} />
            <p className="mt-6 text-lg leading-relaxed text-body">{intro}</p>
          </div>
        </Reveal>
      </div>

      {/* CaseStudyNav is `fixed` — must stay outside any Reveal wrapper.
          A `transform` on an ancestor creates a new containing block for
          `position: fixed` descendants, which would break the sticky nav. */}
      <CaseStudyNav items={navItems} />

      <Reveal variant="default" delay={200} className="mt-10 md:mt-14">
        <div className="flex gap-3 rounded-xl2 bg-black/[0.04] p-6 md:p-8">
          <svg
            width="18"
            height="18"
            viewBox="0 0 20 20"
            fill="none"
            className="mt-0.5 shrink-0 text-coral"
            aria-hidden="true"
          >
            <path
              d="M10 2L18.5 17H1.5L10 2Z"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
            <path
              d="M10 8V11.5"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            <circle cx="10" cy="14" r="0.9" fill="currentColor" />
          </svg>
          <p className="text-body">{disclaimer}</p>
        </div>
      </Reveal>
    </section>
  );
}
