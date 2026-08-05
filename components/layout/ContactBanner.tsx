import Image from "next/image";

export default function ContactBanner() {
  return (
    <section className="border-t border-border py-28 md:py-36">
      <div className="container-content flex flex-col items-center text-center">
        <p className="text-lg text-muted md:text-xl">
          Have an idea, a project, or just want to chat?
        </p>
        <div className="mt-6 flex items-center gap-3 md:gap-5">
          <Image
            src="/images/illustrations/squiggle-large.svg"
            alt=""
            width={84}
            height={88}
            className="h-10 w-10 -translate-y-3 md:h-14 md:w-14"
            aria-hidden="true"
          />
          <a
            href="mailto:annylam.hi@gmail.com"
            className="font-heading text-3xl font-extrabold tracking-tight text-ink transition-opacity hover:opacity-80 sm:text-4xl md:text-6xl"
          >
            annylam.hi<span className="text-teal">@</span>gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
