import EmailLink from "@/components/ui/EmailLink";

export default function ContactHero() {
  return (
    <section className="container-content flex flex-col items-center py-24 text-center md:py-36">
      <span
        className="hero-anim-rise inline-flex items-center rounded-full border border-border bg-bg px-5 py-2 text-base text-ink"
        style={{ animationDelay: "0ms" }}
      >
        Let&apos;s talk
      </span>

      <p
        className="hero-anim-rise mt-6 text-lg text-muted md:text-xl"
        style={{ animationDelay: "140ms" }}
      >
        Have an idea, a project, or just want to chat?
      </p>

      <div
        className="hero-anim-rise relative mt-6"
        style={{ animationDelay: "280ms" }}
      >
        <svg
          width="84"
          height="88"
          viewBox="0 0 84 88"
          fill="none"
          aria-hidden="true"
          className="absolute right-full top-1/2 mr-3 h-10 w-10 -translate-y-[calc(50%+12px)] md:mr-5 md:h-14 md:w-14"
        >
          <path
            d="M60.5473 74.6749C52.8884 76.3624 35.8832 72.0787 14.5942 84.8003M65.2637 53.5589C52.1888 44.84 21.3312 27.9041 2.49997 29.9119M81.4467 41.9624C79.9466 35.1546 72.3598 17.7311 54.0132 2.5"
            stroke="#88D6D9"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="hero-anim-draw-lg"
            style={{ animationDelay: "280ms" }}
          />
        </svg>
        <EmailLink className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl md:text-6xl" />
      </div>
    </section>
  );
}
