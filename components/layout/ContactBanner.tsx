import Image from "next/image";
import EmailLink from "@/components/ui/EmailLink";

export default function ContactBanner() {
  return (
    <section className="border-t border-border py-28 md:py-36">
      <div className="container-content flex flex-col items-center text-center">
        <p className="text-lg text-muted md:text-xl">
          Have an idea, a project, or just want to chat?
        </p>
        <div className="relative mt-6">
          <Image
            src="/images/illustrations/squiggle-large.svg"
            alt=""
            width={84}
            height={88}
            className="absolute right-full top-1/2 mr-3 h-10 w-10 -translate-y-[calc(50%+12px)] md:mr-5 md:h-14 md:w-14"
            aria-hidden="true"
          />
          <EmailLink className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl md:text-6xl" />
        </div>
      </div>
    </section>
  );
}
