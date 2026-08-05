import Image from "next/image";
import MetaTable from "@/components/work/MetaTable";
import CaseStudyNav from "@/components/work/CaseStudyNav";

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

      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
        <h1 className="font-heading text-4xl font-extrabold leading-[1.1] text-ink md:text-5xl">
          {title}
        </h1>

        <div>
          <MetaTable rows={meta} />
          <p className="mt-6 text-lg leading-relaxed text-body">{intro}</p>
        </div>
      </div>

      <CaseStudyNav items={navItems} />

      <div className="mt-10 flex gap-3 rounded-xl2 bg-black/[0.04] p-6 md:mt-14 md:p-8">
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
    </section>
  );
}
