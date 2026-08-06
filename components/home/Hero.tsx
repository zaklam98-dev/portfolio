import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

const heroTags = ["Product Design", "UX/UI", "Interaction Design", "Visual Design"];

export default function Hero() {
  return (
    <section className="container-content pb-16 pt-16 md:pb-24 md:pt-20">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <Reveal variant="button">
          <span className="inline-flex items-center rounded-full border border-border bg-bg px-5 py-2 text-base text-ink">
            Hello!
          </span>
        </Reveal>

        <Reveal variant="heading" delay={80} className="mt-6">
          <h1 className="font-heading text-5xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-[80px]">
            <span className="relative inline-block">
              I&apos;m{" "}
              <span className="text-teal">
                AN NY<span className="text-ink">,</span>
              </span>
              <Image
                src="/images/illustrations/squiggle-small.svg"
                alt=""
                width={32}
                height={33}
                className="absolute -right-8 -top-3 h-6 w-6 md:h-8 md:w-8"
                aria-hidden="true"
              />
            </span>
            <br />
            Product Designer
          </h1>
        </Reveal>

        <Reveal variant="paragraph" delay={220} className="mt-8 max-w-3xl">
          <p className="text-lg leading-relaxed text-ink md:text-xl">
            I create thoughtful digital experiences by transforming complexity
            into intuitive products that help people understand, navigate and
            make confident decisions.
          </p>
        </Reveal>

        <Reveal variant="paragraph" delay={300} className="mt-5">
          <p className="text-sm text-muted md:text-base">
            Creative Designer @ Woolworths • Master of Interaction Design, UTS
          </p>
        </Reveal>

        <Reveal variant="default" delay={380} className="mt-7">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {heroTags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-md border border-border bg-bg px-3.5 py-2 text-[11px] font-semibold uppercase tracking-wider text-ink"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
