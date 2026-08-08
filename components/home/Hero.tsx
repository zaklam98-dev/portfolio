const heroTags = ["Systems Thinking", "AI-Assisted Workflow", "Craft-Driven"];

export default function Hero() {
  return (
    <section className="container-content pb-16 pt-16 md:pb-24 md:pt-20">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <span className="hero-anim-rise inline-flex items-center rounded-full border border-border bg-bg px-5 py-2 text-base text-ink">
          Hello!
        </span>

        <h1 className="mt-6 font-heading text-5xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-[80px]">
          <span className="relative inline-block">
            <span className="hero-anim-rise inline-block" style={{ animationDelay: "60ms" }}>
              I&apos;m
            </span>{" "}
            <span
              className="hero-anim-group-settle inline-block text-teal"
              style={{ animationDelay: "880ms" }}
            >
              <span className="hero-anim-letter inline-block" style={{ animationDelay: "130ms" }}>
                A
              </span>
              <span className="hero-anim-letter inline-block" style={{ animationDelay: "160ms" }}>
                N
              </span>{" "}
              <span className="hero-anim-letter inline-block" style={{ animationDelay: "190ms" }}>
                N
              </span>
              <span className="hero-anim-letter inline-block" style={{ animationDelay: "220ms" }}>
                Y
              </span>
              <span
                className="hero-anim-letter inline-block text-ink"
                style={{ animationDelay: "220ms" }}
              >
                ,
              </span>
            </span>
            <svg
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              aria-hidden="true"
              className="absolute -right-8 -top-3 h-6 w-6 md:h-8 md:w-8"
            >
              <path
                d="M2.00098 20.0005C2.00098 17.0005 5.00098 11.0005 2.00098 2.00055M9.50098 23.5005C13.8343 19.3339 22.701 9.20055 23.501 2.00055M12.501 30.5005C15.1676 30.5005 22.301 29.1005 29.501 23.5005"
                stroke="#88D6D9"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="hero-anim-draw"
                style={{ animationDelay: "880ms" }}
              />
            </svg>
          </span>
          <br />
          <span className="-mb-[0.3em] block overflow-hidden">
            <span
              className="hero-anim-mask inline-block pb-[0.3em]"
              style={{ animationDelay: "340ms" }}
            >
              Product Designer
            </span>
          </span>
        </h1>

        <p
          className="hero-anim-rise mt-8 max-w-3xl text-lg leading-relaxed text-ink md:text-xl"
          style={{ animationDelay: "420ms" }}
        >
          I create thoughtful digital experiences by transforming complexity
          into intuitive products that help people understand, navigate and
          make confident decisions.
        </p>

        <p
          className="hero-anim-rise mt-5 text-sm text-muted md:text-base"
          style={{ animationDelay: "520ms" }}
        >
          Creative Designer @ Woolworths • Master of Interaction Design, UTS
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          {heroTags.map((tag, index) => (
            <span
              key={tag}
              className="hero-anim-rise inline-flex items-center rounded-md border border-border bg-bg px-3.5 py-2 text-[11px] font-semibold uppercase tracking-wider text-ink"
              style={{ animationDelay: `${590 + index * 85}ms` }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
