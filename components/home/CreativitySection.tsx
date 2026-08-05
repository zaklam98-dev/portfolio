import Image from "next/image";
import PillLink from "@/components/ui/PillLink";

export default function CreativitySection() {
  return (
    <section className="container-content py-24 md:py-32">
      <div className="flex flex-col items-center gap-14 md:flex-row md:justify-between md:gap-10">
        <div className="max-w-xl text-center md:text-left">
          <p className="text-xl leading-relaxed text-muted md:text-2xl">
            Outside of product design, you&apos;ll usually find me painting
            tiny worlds, crocheting colourful characters or exploring new
            creative ideas.
          </p>
          <p className="mt-6 text-xl leading-relaxed text-muted md:text-2xl">
            I believe{" "}
            <span className="font-semibold text-ink">
              creativity grows through curiosity,
            </span>{" "}
            and every new medium teaches me a different way to see, think and
            design.
          </p>

          <PillLink href="/about" variant="teal" className="mt-8">
            Read more about me
          </PillLink>
        </div>

        <div className="group relative h-[280px] w-[280px] shrink-0 md:h-[380px] md:w-[380px]">
          <Image
            src="/images/illustrations/creativity-default.png"
            alt="Line illustration of An Ny working at her laptop, surrounded by icons and a small frog"
            fill
            sizes="(min-width: 768px) 380px, 280px"
            className="object-contain group-hover:opacity-0"
          />
          <Image
            src="/images/illustrations/creativity-hover.png"
            alt=""
            fill
            sizes="(min-width: 768px) 380px, 280px"
            aria-hidden="true"
            className="absolute inset-0 object-contain opacity-0 group-hover:opacity-100"
          />
        </div>
      </div>
    </section>
  );
}
