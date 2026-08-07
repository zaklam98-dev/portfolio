import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="container-content pb-[34px] pt-16 md:pb-[66px] md:pt-20">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-14 md:flex-row md:items-center md:justify-between md:gap-10">
        <div className="max-w-xl text-center md:text-left">
          <h1 className="font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl">
            <span className="hero-anim-rise inline-block" style={{ animationDelay: "0ms" }}>
              Hi, I&apos;m
            </span>{" "}
            <span className="relative inline-block">
              <span
                className="hero-anim-group-settle inline-block text-teal"
                style={{ animationDelay: "980ms" }}
              >
                <span className="hero-anim-letter inline-block" style={{ animationDelay: "120ms" }}>
                  A
                </span>
                <span className="hero-anim-letter inline-block" style={{ animationDelay: "155ms" }}>
                  N
                </span>{" "}
                <span className="hero-anim-letter inline-block" style={{ animationDelay: "190ms" }}>
                  N
                </span>
                <span className="hero-anim-letter inline-block" style={{ animationDelay: "225ms" }}>
                  Y
                </span>
                <span className="hero-anim-letter inline-block" style={{ animationDelay: "225ms" }}>
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
                  style={{ animationDelay: "980ms" }}
                />
              </svg>
            </span>
          </h1>

          <p
            className="hero-anim-rise mt-6 text-lg leading-relaxed text-ink md:text-xl"
            style={{ animationDelay: "560ms" }}
          >
            I design digital experiences that make complex systems feel
            intuitive, and meaningful moments feel memorable.
          </p>

          <span
            className="hero-anim-rise mt-7 inline-flex items-center rounded-full border border-border bg-bg px-5 py-2 text-base text-muted"
            style={{ animationDelay: "680ms" }}
          >
            Based in Sydney
          </span>
        </div>

        <div
          className="hero-anim-rise shrink-0"
          style={{ animationDelay: "160ms" }}
        >
          <div className="group relative h-[280px] w-[280px] shrink-0 md:h-[500px] md:w-[500px]">
            <Image
              src="/images/illustrations/creativity-default.png"
              alt="Line illustration of An Ny sitting at her laptop with glasses on, surrounded by app icons, sparkles and a small frog"
              fill
              sizes="(min-width: 768px) 500px, 280px"
              className="object-contain transition-opacity duration-200 group-hover:opacity-0"
              priority
            />
            <Image
              src="/images/illustrations/creativity-hover.png"
              alt=""
              fill
              sizes="(min-width: 768px) 500px, 280px"
              aria-hidden="true"
              className="absolute inset-0 object-contain opacity-0 transition-opacity duration-200 group-hover:opacity-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
