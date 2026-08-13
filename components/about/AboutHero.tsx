import Image from "next/image";

const processIcons = [
  {
    src: "/images/about/process/research.png",
    alt: "Magnifying glass icon representing research",
  },
  {
    src: "/images/about/process/ideation.png",
    alt: "Lightbulb icon representing ideation",
  },
  {
    src: "/images/about/process/documentation.png",
    alt: "Stack of documents icon representing documentation",
  },
  {
    src: "/images/about/process/problem-solving.png",
    alt: "Two interlocking puzzle pieces icon representing problem-solving",
  },
  {
    src: "/images/about/process/implementation.png",
    alt: "Computer monitor icon representing implementation",
  },
];

export default function AboutHero() {
  return (
    <section className="container-content pb-16 pt-16 md:pb-24 md:pt-20">
      <div className="max-w-4xl">
        <h1 className="font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl">
          <span className="hero-anim-rise inline-block" style={{ animationDelay: "0ms" }}>
            Hi, I&apos;m
          </span>{" "}
          <span className="relative inline-block">
            <span
              className="hero-anim-group-settle inline-block text-teal"
              style={{ animationDelay: "780ms" }}
            >
              <span className="hero-anim-letter inline-block" style={{ animationDelay: "120ms" }}>
                A
              </span>
              <span className="hero-anim-letter inline-block" style={{ animationDelay: "150ms" }}>
                n
              </span>{" "}
              <span className="hero-anim-letter inline-block" style={{ animationDelay: "180ms" }}>
                N
              </span>
              <span className="hero-anim-letter inline-block" style={{ animationDelay: "210ms" }}>
                y
              </span>
              <span className="hero-anim-letter inline-block" style={{ animationDelay: "210ms" }}>
                .
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
                style={{ animationDelay: "780ms" }}
              />
            </svg>
          </span>
        </h1>

        <p
          className="hero-anim-rise mt-6 font-heading text-2xl font-bold text-ink md:text-3xl"
          style={{ animationDelay: "420ms" }}
        >
          A product designer with an unconventional path into design.
        </p>

        <p
          className="hero-anim-rise mt-6 text-lg leading-relaxed text-body md:text-xl"
          style={{ animationDelay: "500ms" }}
        >
          My career began in finance and accounting, where I learned to
          navigate complexity with structure and precision.
        </p>

        <p
          className="hero-anim-rise mt-4 text-lg leading-relaxed text-body md:text-xl"
          style={{ animationDelay: "580ms" }}
        >
          Today, I bring that same analytical mindset to designing digital
          products, transforming complex systems into experiences that feel
          simple, intuitive and genuinely enjoyable to use.
        </p>

        <p
          className="hero-anim-rise mt-6 text-sm text-muted md:text-base"
          style={{ animationDelay: "660ms" }}
        >
          Creative Designer @ Woolworths • Master of Interaction Design, UTS •
          Based in Sydney
        </p>
      </div>

      {/* Gap shrinks on its own responsive curve (independent of icon size) so
          narrower viewports free up space for the icons instead of the icons
          shrinking to fill leftover space — the icon width below is the
          exact remainder after 4 gaps, so the row always fills 100% and
          never overflows or wraps, at any viewport. Gap is intentionally
          kept tight (small cap) so the icons themselves stay as large as
          possible at every breakpoint. */}
      <div className="mt-10 flex flex-nowrap items-center gap-x-[clamp(4px,5vw,72px)] md:mt-12">
        {processIcons.map((icon, index) => (
          <span
            key={icon.src}
            className="hero-anim-rise relative aspect-square w-[calc((100%-4*clamp(4px,5vw,72px))/5)] shrink-0"
            style={{ animationDelay: `${760 + index * 90}ms` }}
          >
            <div className="relative h-full w-full transition-transform duration-200 ease-out hover:scale-[1.08]">
              <Image
                src={icon.src}
                alt={icon.alt}
                fill
                sizes="136px"
                className="object-contain"
              />
            </div>
          </span>
        ))}
      </div>
    </section>
  );
}
