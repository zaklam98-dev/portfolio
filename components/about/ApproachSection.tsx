import Eyebrow from "@/components/ui/Eyebrow";

export default function ApproachSection() {
  return (
    <section className="container-content py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <Eyebrow>My Approach</Eyebrow>
        <h2 className="mt-4 font-heading text-3xl font-bold text-ink md:text-4xl">
          Designing with curiosity
        </h2>
        <div className="mt-6 max-w-3xl space-y-5 text-lg leading-relaxed text-body md:text-xl">
          <p>
            Whether I&apos;m redesigning enterprise software, building
            community features or exploring speculative interaction design, I
            begin by understanding people before shaping interfaces.
          </p>
          <p>
            I enjoy translating research, business needs and technical
            constraints into experiences that are simple to use, visually
            engaging and built with intention.
          </p>
          <p>
            I believe thoughtful design shapes how people feel, behave and
            remember an experience.
          </p>
        </div>
      </div>
    </section>
  );
}
