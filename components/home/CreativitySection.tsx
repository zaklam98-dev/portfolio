import Image from "next/image";
import PillLink from "@/components/ui/PillLink";
import Reveal from "@/components/ui/Reveal";

export default function CreativitySection() {
  return (
    <section className="container-content py-24 md:py-32">
      <div className="flex flex-col items-center gap-14 md:flex-row md:justify-between md:gap-10">
        <Reveal
          variant="image"
          className="w-full max-w-[246px] shrink-0 md:w-auto md:max-w-none"
        >
          <div className="group relative aspect-square w-full md:h-[440px] md:w-[440px]">
            <Image
              src="/images/illustrations/outside-default.png"
              alt="Line illustration of a sun, cloud, leaf, glue stick, paintbrush and a smiling face with glasses, representing creative hobbies outside of product design"
              fill
              sizes="(min-width: 768px) 440px, 246px"
              className="object-contain group-hover:opacity-0"
            />
            <Image
              src="/images/illustrations/outside-hover.png"
              alt=""
              fill
              sizes="(min-width: 768px) 440px, 246px"
              aria-hidden="true"
              className="absolute inset-0 object-contain opacity-0 group-hover:opacity-100"
            />
          </div>
        </Reveal>

        <div className="max-w-xl text-center md:text-left">
          <Reveal variant="paragraph">
            <p className="text-xl leading-relaxed text-muted md:text-2xl">
              Outside of product design, you&apos;ll usually find me painting
              tiny worlds, crocheting colourful characters or exploring new
              creative ideas.
            </p>
          </Reveal>
          <Reveal variant="paragraph" delay={100} className="mt-6">
            <p className="text-xl leading-relaxed text-muted md:text-2xl">
              I believe{" "}
              <span className="font-semibold text-ink">
                creativity grows through curiosity,
              </span>{" "}
              and every new medium teaches me a different way to see, think
              and design.
            </p>
          </Reveal>

          <Reveal variant="button" delay={200} className="mt-8 inline-block">
            <PillLink href="/about" variant="teal">
              Read more about me
            </PillLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
