import type { Metadata } from "next";
import { Fragment } from "react";
import Image from "next/image";
import CaseStudyHero from "@/components/work/CaseStudyHero";
import IconCard from "@/components/work/IconCard";
import ProjectGrid from "@/components/work/ProjectGrid";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import { selectedWork } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Echo Archive — An Ny Lam",
};

const navItems = [
  { label: "Research", href: "#research" },
  { label: "Solution", href: "#solution" },
  { label: "Experience Walkthrough", href: "#experience-walkthrough" },
  { label: "Reflection", href: "#reflection" },
];

const metaRows = [
  { label: "Project", value: ["Digital Experience Design Studio • UTS"] },
  { label: "Duration", value: ["8 Weeks"] },
  { label: "Team", value: ["5 Designers"] },
  { label: "Deliverables", value: ["Research", "Synthesis", "Concept Development"] },
];

const learningCards = [
  {
    title: "Music As Emotional Regulation",
    description:
      "Participants intentionally used music to reduce anxiety, regain calm and navigate overwhelming emotions throughout pregnancy.",
  },
  {
    title: "Music As A Cultural Connection",
    description:
      "For migrant mothers, familiar songs and native languages created a powerful sense of home, preserving cultural identity while connecting with their unborn child.",
  },
  {
    title: "Pregnancy Can Feel Emotionally Isolating",
    description:
      "While physical milestones were well supported, participants often lacked a safe space to process the emotional aspects of pregnancy, turning to music as a private form of comfort.",
  },
  {
    title: "Sound Strengthens Maternal Bonding",
    description:
      "Singing and sharing music helped transform pregnancy from an abstract experience into a tangible relationship with their baby.",
  },
  {
    title: "Current Products Overlook Emotional Needs",
    description:
      "Existing pregnancy apps focused on tracking symptoms and milestones, leaving little support for emotional wellbeing, reflection or meaningful memory-making.",
  },
];

const designOpportunities = [
  {
    heard: "Mothers intentionally used music to regulate emotions.",
    designed: "Emotional voice journals instead of symptom tracking.",
  },
  {
    heard: "Traditional songs connected mothers to home.",
    designed: "Voice recordings, lullabies and cultural memory collections.",
  },
  {
    heard: "Existing pregnancy apps prioritised milestones and checklists.",
    designed: "Reflection-first interactions centred around emotional wellbeing.",
  },
  {
    heard: "Pregnancy often felt emotionally isolating.",
    designed: "A private, supportive space for recording thoughts and memories.",
  },
];

const companionCards = [
  {
    src: "/images/work/echo-archive/card-capture.png",
    width: 792,
    height: 396,
    alt: "Capture: record a voice note or save a meaningful song in the moment, shown as two tap targets — archive a song, record a voice note",
  },
  {
    src: "/images/work/echo-archive/card-reflect.png",
    width: 792,
    height: 396,
    alt: "Reflect: attach emotions rather than statistics, shown as a voice note waveform with feeling tags like calm, hopeful and relentless",
  },
  {
    src: "/images/work/echo-archive/card-revisit.png",
    width: 792,
    height: 396,
    alt: "Revisit: explore memories across pregnancy through an evolving archive, shown as a Week 22 list of saved voice notes",
  },
  {
    src: "/images/work/echo-archive/card-preserve.png",
    width: 792,
    height: 396,
    alt: "Preserve: create a keepsake that documents the emotional journey into motherhood, shown alongside the Worry Stone device",
  },
];

const walkthroughPairs = [
  [
    {
      src: "/images/work/echo-archive/step-2-preserve-context.png",
      width: 499,
      height: 416,
      alt: "Step 2, Preserve the context: every memory is captured together with the music, mood and pregnancy stage that gave it meaning",
    },
    {
      src: "/images/work/echo-archive/step-3-journey-unfold.png",
      width: 499,
      height: 465,
      alt: "Step 3, See the journey unfold: emotional moments accumulate into a living timeline that evolves throughout pregnancy",
    },
  ],
  [
    {
      src: "/images/work/echo-archive/step-4-revisit-memories.png",
      width: 499,
      height: 465,
      alt: "Step 4, Revisit memories: songs and voice notes are organised into a personal archive mothers can return to any time",
    },
    {
      src: "/images/work/echo-archive/step-5-reflect-growth.png",
      width: 499,
      height: 416,
      alt: "Step 5, Reflect on emotional growth: Echo Archive surfaces patterns across pregnancy, helping mothers recognise how they have changed over time",
    },
  ],
];

const meaningPrinciples = [
  {
    title: "Preserve, Don't Interrupt",
    description: "Interactions remain lightweight to avoid disrupting emotional moments.",
  },
  {
    title: "Emotion Before Information",
    description: "The experience captures feelings rather than clinical data.",
  },
  {
    title: "Memory Through Multiple Senses",
    description: "Voice, music and touch work together to create stronger emotional recall.",
  },
];

const nextProjects = selectedWork
  .filter((project) => project.href !== "/work/echo-archive")
  .map((project) => ({ ...project, number: undefined }));

export default function EchoArchivePage() {
  return (
    <>
      <CaseStudyHero
        image="/images/work/echo-archive/hero.png"
        imageWidth={1728}
        imageHeight={780}
        imageAlt="A phone showing the Echo Archive playlist screen and another showing Sarah's mood check-in, staged beside the cream ceramic Worry Stone on linen with dried flowers"
        title="Echo Archive"
        subtitle="Designing a product that preserves the emotional soundtrack of pregnancy."
        meta={metaRows}
        intro="A university research project exploring how technology can support emotional wellbeing, identity and memory during one of life's biggest transitions."
        navItems={navItems}
      />

      <section id="research" className="container-work py-16 md:py-20">
        <Reveal variant="paragraph">
          <Eyebrow variant="muted">Overview</Eyebrow>
        </Reveal>
        <Reveal variant="paragraph" delay={100} className="mt-6">
          <div className="space-y-5 text-lg leading-relaxed text-body">
            <p>
              Most pregnancy apps help mothers track physical milestones,
              appointments and fetal development.
            </p>
            <p>Our research suggested that something equally important was missing.</p>
            <p>
              Pregnancy is not only a medical journey, it is an emotional
              transformation. Yet while existing products focus on what is
              happening to the body, few support the lived emotional
              experience of becoming a mother.
            </p>
            <p>
              Using Experience-Centred Design, we explored{" "}
              <span className="font-bold text-ink">
                how music could become more than a tool for relaxation,
                becoming a medium for emotional regulation, cultural
                connection and preserving meaningful memories.
              </span>
            </p>
          </div>
        </Reveal>

        <div className="mt-16 md:mt-20">
          <Reveal variant="paragraph">
            <Eyebrow variant="muted">Research Journey</Eyebrow>
          </Reveal>
          <Reveal variant="image" delay={100} className="mt-10">
            <Image
              src="/images/work/echo-archive/timeline.png"
              width={1730}
              height={432}
              alt="Research journey: Desk Research, Literature Review, 10 Semi-Structured Interviews, Affinity Mapping, Personas, Experience Opportunities, Concept Design, High-fidelity Prototype"
              className="h-auto w-full"
            />
          </Reveal>
        </div>

        <div className="mt-16 md:mt-20">
          <Reveal variant="paragraph">
            <Eyebrow variant="muted">What We Learned</Eyebrow>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-body">
              <p>
                We focused on understanding the everyday emotional experiences
                of expectant mothers.
              </p>
              <p>Through interviews and synthesis, five themes consistently emerged.</p>
            </div>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {learningCards.map((card, index) => (
              <Reveal key={card.title} variant="card" index={index}>
                <IconCard title={card.title}>
                  <p>{card.description}</p>
                </IconCard>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16 md:mt-20">
          <Reveal variant="paragraph">
            <Eyebrow variant="muted">From Patterns To Insight</Eyebrow>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-body">
              <p>
                As interviews accumulated, we organised hundreds of
                observations through affinity mapping.
              </p>
              <p>We looked for recurring emotional experiences shared across participants.</p>
              <p>One pattern appeared repeatedly:</p>
              <blockquote className="border-l-2 border-ink/30 pl-6 text-2xl leading-snug text-ink md:text-3xl">
                Music wasn&apos;t simply helping mothers feel calmer. It
                became a bridge between identity, culture, family and
                motherhood.
              </blockquote>
              <p>
                This shifted Echo Archive from a pregnancy companion into a
                platform for preserving meaningful moments through sound.
              </p>
            </div>
          </Reveal>

          <Reveal variant="image" delay={100} className="mt-10">
            <Image
              src="/images/work/echo-archive/mapping.png"
              width={1350}
              height={1112}
              alt="Affinity map grouping interview observations under Role of Music (Functional Use & Daily Ritual, Emotional Regulation, Bonding With Baby, Identity & Spiritual/Cultural) and Future Outlook & Design Gaps (Unmet Needs & Design Gaps, Goals & Desires)"
              className="h-auto w-full"
            />
          </Reveal>
        </div>

        <div className="mt-16 md:mt-20">
          <Reveal variant="paragraph">
            <Eyebrow variant="muted">Translating Research Into Design Opportunities</Eyebrow>
          </Reveal>
          <Reveal variant="paragraph" delay={100} className="mt-8 overflow-x-auto">
            <div className="grid min-w-[640px] grid-cols-2 gap-x-8 border-t border-border">
              <p className="pt-4 pb-2 text-lg font-bold text-ink">We heard</p>
              <p className="pt-4 pb-2 text-lg font-bold text-ink">So we designed</p>
              {designOpportunities.map((row) => (
                <Fragment key={row.heard}>
                  <p className="border-t border-border py-4 text-body">{row.heard}</p>
                  <p className="border-t border-border py-4 text-body">{row.designed}</p>
                </Fragment>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="solution" className="container-work py-16 md:py-20">
        <Reveal variant="heading">
          <h2 className="font-heading text-4xl font-extrabold text-ink md:text-5xl">
            Introducing Echo Archive
          </h2>
        </Reveal>

        <Reveal variant="image" delay={100} className="mt-10">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/images/work/echo-archive/hero.png"
              width={1728}
              height={780}
              alt="A phone showing the Echo Archive home screen with mood check-in and now-playing bar, staged beside the Worry Stone on linen with dried flowers"
              className="h-auto w-full"
            />
          </div>
        </Reveal>

        <Reveal variant="paragraph" delay={150} className="mt-8">
          <div className="space-y-4 text-lg leading-relaxed text-body">
            <p>
              Echo Archive is a mobile experience paired with a tactile
              companion device called the Worry Stone.
            </p>
            <p>
              Together, they help mothers{" "}
              <span className="font-bold text-ink">
                capture voice notes, meaningful songs and emotional
                reflections throughout pregnancy, gradually creating a
                personal archive that can later be shared with their child.
              </span>
            </p>
          </div>
        </Reveal>

        <div className="mt-16 md:mt-20">
          <Reveal variant="heading">
            <h3 className="font-heading text-2xl font-extrabold text-ink md:text-3xl">
              Designing An Emotional Companion
            </h3>
          </Reveal>
          <Reveal variant="paragraph" delay={100} className="mt-6">
            <p className="text-lg leading-relaxed text-body">
              The experience was designed around four simple moments.
            </p>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {companionCards.map((card, index) => (
              <Reveal key={card.src} variant="image" index={index}>
                <Image
                  src={card.src}
                  width={card.width}
                  height={card.height}
                  alt={card.alt}
                  className="h-auto w-full"
                />
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16 md:mt-20">
          <Reveal variant="heading">
            <h3 className="font-heading text-2xl font-extrabold text-ink md:text-3xl">
              The Worry Stone
            </h3>
          </Reveal>
          <Reveal variant="paragraph" delay={100} className="mt-6">
            <div className="space-y-4 text-lg leading-relaxed text-body">
              <p>
                At the heart of Echo Archive is the Worry Stone,{" "}
                <span className="font-bold text-ink">
                  a tactile companion that transforms fleeting moments into
                  lasting memories.
                </span>
              </p>
              <p>
                Inspired by traditional worry stones, it offers mothers a
                familiar object to hold during emotionally significant
                moments. A single tap wakes the app through Bluetooth,
                allowing voice notes to be captured instantly without
                unlocking a phone, reducing friction when emotions are most
                immediate.
              </p>
            </div>
          </Reveal>

          <Reveal variant="image" delay={150} className="mt-8">
            <Image
              src="/images/work/echo-archive/worry-stone.png"
              width={960}
              height={552}
              alt="Annotated Worry Stone: integrated cord loop, BLE chip, thumb groove and gold LED ring on the left; single tap to archive a song, double tap to open a voice note, built-in mic and NFC chip for keepsake handoff on the right. 40 x 32mm, ~14g, matte cream ceramic, no display — designed to age with the mother, developing a personal patina over nine months"
              className="h-auto w-full"
            />
          </Reveal>

          <Reveal variant="paragraph" delay={200} className="mt-8">
            <div className="space-y-4 text-lg leading-relaxed text-body">
              <p>
                As memories accumulate, the stone evolves from a simple
                recording trigger into a physical keepsake. Once the
                pregnancy archive is complete, it is paired with the
                mother&apos;s digital collection through an embedded NFC
                chip. Years later, her child can simply tap the stone against
                a phone to revisit the songs, voice notes and reflections
                recorded throughout the pregnancy.
              </p>
              <p>
                Rather than replacing the app, the Worry Stone gives the
                experience a tangible form, one that supports emotional
                wellbeing in the present while preserving a deeply personal
                story for the future.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="experience-walkthrough" className="container-work py-16 md:py-20">
        <Reveal variant="heading">
          <h2 className="font-heading text-4xl font-extrabold text-ink md:text-5xl">
            Experience Walkthrough
          </h2>
        </Reveal>

        <Reveal variant="image" delay={100} className="mt-10">
          <Image
            src="/images/work/echo-archive/step-1-capture.png"
            width={1030}
            height={416}
            alt="Step 1, Capture a moment: tap the Worry Stone to instantly begin recording, removing friction during emotionally significant moments"
            className="h-auto w-full"
          />
        </Reveal>

        {walkthroughPairs.map((pair, pairIndex) => (
          <div
            key={pair[0].src}
            className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            {pair.map((step, stepIndex) => (
              <Reveal key={step.src} variant="image" index={pairIndex * 2 + stepIndex}>
                <Image
                  src={step.src}
                  width={step.width}
                  height={step.height}
                  alt={step.alt}
                  className="h-auto w-full"
                />
              </Reveal>
            ))}
          </div>
        ))}

        <Reveal variant="image" delay={150} className="mt-6">
          <Image
            src="/images/work/echo-archive/keepsake-banner.png"
            width={1030}
            height={293}
            alt="A keepsake for the future: once the journey is complete, the Worry Stone becomes a keepsake that reconnects future generations with the mother's voice, music and memories"
            className="h-auto w-full"
          />
        </Reveal>

        <div className="mt-16 md:mt-20">
          <Reveal variant="heading">
            <h3 className="font-heading text-2xl font-extrabold text-ink md:text-3xl">
              Designing For Meaning
            </h3>
          </Reveal>
          <Reveal variant="paragraph" delay={100} className="mt-6">
            <p className="text-lg leading-relaxed text-body">
              This project explored how interaction design can create
              emotional value. Three principles guided every design decision.
            </p>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {meaningPrinciples.map((card, index) => (
              <Reveal key={card.title} variant="card" index={index}>
                <IconCard title={card.title}>
                  <p>{card.description}</p>
                </IconCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="reflection" className="container-work py-16 md:py-20">
        <Reveal variant="heading">
          <h2 className="font-heading text-4xl font-extrabold text-ink md:text-5xl">
            Reflection
          </h2>
        </Reveal>
        <Reveal variant="paragraph" delay={100} className="mt-6">
          <div className="space-y-4 text-lg leading-relaxed text-body">
            <p>
              Before this studio, I approached design primarily as a process
              of solving problems efficiently. Through Experience-Centred
              Design, I learned that not every design challenge is about
              reducing friction. Sometimes the goal is to{" "}
              <span className="font-bold text-ink">
                create space for emotion, reflection and meaning.
              </span>
            </p>
            <p>
              It also strengthened my research practice:{" "}
              <span className="font-bold text-ink">
                conducting interviews, synthesising qualitative data and
                translating human experiences into product opportunities.
              </span>
            </p>
            <p>
              Those skills continue to shape how I approach product design
              today, from enterprise platforms at Woolworths to
              consumer-facing experiences.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 md:mt-20">
          <Reveal variant="paragraph">
            <Eyebrow variant="muted">Next Projects</Eyebrow>
          </Reveal>
          <div className="mt-8">
            <ProjectGrid projects={nextProjects} columns={3} size="small" />
          </div>
        </div>
      </section>
    </>
  );
}
