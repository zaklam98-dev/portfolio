import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export default function AboutHero() {
  return (
    <section className="container-content pb-[34px] pt-16 md:pb-[66px] md:pt-20">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-14 md:flex-row md:items-center md:justify-between md:gap-10">
        <div className="max-w-xl text-center md:text-left">
          <Reveal variant="heading">
            <h1 className="font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl">
              Hi, I&apos;m{" "}
              <span className="relative inline-block text-teal">
                An Ny,
                <Image
                  src="/images/illustrations/squiggle-small.svg"
                  alt=""
                  width={32}
                  height={33}
                  className="absolute -right-8 -top-3 h-6 w-6 md:h-8 md:w-8"
                  aria-hidden="true"
                />
              </span>
            </h1>
          </Reveal>

          <Reveal variant="paragraph" delay={120} className="mt-6">
            <p className="text-lg leading-relaxed text-ink md:text-xl">
              I design digital experiences that make complex systems feel
              intuitive, and meaningful moments feel memorable.
            </p>
          </Reveal>

          <Reveal variant="button" delay={220} className="mt-7 inline-block">
            <span className="inline-flex items-center rounded-full border border-border bg-bg px-5 py-2 text-base text-muted">
              Based in Sydney
            </span>
          </Reveal>
        </div>

        <Reveal variant="image" className="shrink-0">
          <div className="group relative h-[280px] w-[280px] shrink-0 md:h-[380px] md:w-[380px]">
            <Image
              src="/images/illustrations/creativity-default.png"
              alt="Line illustration of An Ny sitting at her laptop with glasses on, surrounded by app icons, sparkles and a small frog"
              fill
              sizes="(min-width: 768px) 380px, 280px"
              className="object-contain transition-opacity duration-200 group-hover:opacity-0"
              priority
            />
            <Image
              src="/images/illustrations/creativity-hover.png"
              alt=""
              fill
              sizes="(min-width: 768px) 380px, 280px"
              aria-hidden="true"
              className="absolute inset-0 object-contain opacity-0 transition-opacity duration-200 group-hover:opacity-100"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
