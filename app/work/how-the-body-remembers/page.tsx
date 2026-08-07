import type { Metadata } from "next";
import Image from "next/image";
import CaseStudyNav from "@/components/work/CaseStudyNav";
import MetaTable from "@/components/work/MetaTable";
import PhaseSectionHeader from "@/components/work/PhaseSectionHeader";
import IconCard from "@/components/work/IconCard";
import ProjectGrid from "@/components/work/ProjectGrid";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import { selectedWork } from "@/lib/projects";

export const metadata: Metadata = {
  title: "How the Body Remembers — An Ny Lam",
};

const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "Phase 1", href: "#phase-1" },
  { label: "Phase 2", href: "#phase-2" },
  { label: "Phase 3", href: "#phase-3" },
  { label: "Opportunity", href: "#opportunity" },
];

const metaRows = [
  { label: "Subject", value: ["Human-Centred Design Research Methods"] },
  { label: "Duration", value: ["8 Weeks"] },
  {
    label: "Team",
    value: ["Group research (5 researchers, 15 interviews), Individual probe study"],
  },
  {
    label: "Methods",
    value: ["Semi-Structured Interviews", "Affinity Mapping", "Thematic Analysis", "Cultural Probes"],
  },
];

const findingsCards = [
  {
    icon: "/images/work/how-the-body-remembers/icons/sensory.svg",
    title: "Sensory feedback is key to learning",
    description:
      "Participants rely on sensory feedback to guide their actions. These physical cues become their primary indicator of success.",
    quote:
      "The tamp has a certain resistance, the grinder has a hum that changes when it's working too hard,… those are cues my body relies on to repeat the process consistently.",
  },
  {
    icon: "/images/work/how-the-body-remembers/icons/repetition.svg",
    title: "Repetition creates automaticity",
    description:
      "By repeating the process over and over, participants turn a series of conscious steps into an automatic routine. This frees up their minds to do other things.",
    quote:
      "It was a very conscious, step-by-step process. But now, it's just my hands doing it. It's like my hands have their own little brain just for coffee.",
  },
  {
    icon: "/images/work/how-the-body-remembers/icons/the-body.svg",
    title: "The body stores the 'aha' moments",
    description:
      "Breakthroughs were not cognitive but physical. These experiences are stored as physical memories, giving them a benchmark for what feels right.",
    quote:
      "That combination of hearing the right sound and feeling the right temperature made it click for me… My body finally understood what my mind was trying to tell it.",
  },
  {
    icon: "/images/work/how-the-body-remembers/icons/challenges.svg",
    title: "Challenges in mastering coffee making",
    description:
      "Baristas face challenges in steaming milk and latte art, managing speed and precision under pressure, and maintaining consistency across staff.",
    quote:
      "There are lots of customers and you just need to be very quick, but also not make any mistakes.",
  },
  {
    icon: "/images/work/how-the-body-remembers/icons/environment.svg",
    title: "Environment and setup shape embodied skill",
    description:
      "The surroundings influence how the body moves. Small changes in setup or conditions require the body to adjust an create a new rhythm.",
    quote: "Felt clumsy like a beginner… hands didn't know where to go.",
  },
  {
    icon: "/images/work/how-the-body-remembers/icons/from-home.svg",
    title: "From home to café – a shift in process",
    description:
      "Professional baristas rely on specialised, automated machines that guide the process, creating different workflows, skills and muscle memory.",
    quote:
      "At Starbucks, you just put the coffee bean in, select cappuccino, and the machine does the rest. At home, I have to grind the beans, measure, and adjust settings myself. It feels completely different.",
  },
];

const probeKit = [
  {
    src: "/images/work/how-the-body-remembers/artefact-bingo.png",
    width: 456,
    height: 642,
    alt: "Sensory Bingo card with a 5x5 grid of sensory cues to notice while making coffee, such as 'tamper firm resistance' and 'crema stays intact'",
    title: "Sensory Bingo",
    description: "Encouraged participants to actively notice sounds, smells, textures and visual cues throughout each shift.",
    // Portrait card, text left / image right in the source — image is the
    // dominant element, text column measured to ~36% of the card width.
    layout: "text-left",
    textBasis: "sm:basis-[36%]",
  },
  {
    src: "/images/work/how-the-body-remembers/artefact-coffee-quest.png",
    width: 741,
    height: 490,
    alt: "Coffee Quest cards with small repetition challenges, such as steaming 5 jugs of latte or pouring 5 identical hearts in a row, with a rep tracker",
    title: "Coffee Quests",
    description: "Small repetition challenges that highlighted how consistency developed across repeated attempts.",
    // Landscape image, stacked full-width below the text in the source.
    layout: "stacked",
  },
  {
    src: "/images/work/how-the-body-remembers/artefact-sound-palette.png",
    width: 399,
    height: 642,
    alt: "Sound Palette Cards for circling the sound noticed most during grinding, tamping, steaming and pouring",
    title: "Sound Palette Cards",
    description: "Helped participants describe subtle auditory feedback using descriptive language.",
    // Portrait card, text left / image right in the source (two stacked
    // cards) — text column measured to ~42% of the card width, slightly
    // wider than Bingo/Dice since the image itself is narrower.
    layout: "text-left",
    textBasis: "sm:basis-[42%]",
  },
  {
    src: "/images/work/how-the-body-remembers/artefact-dice.png",
    width: 491,
    height: 642,
    alt: "Switch-It-Up Dice net with faces reading 'Steam with eyes closed', 'Pour a heart as tiny as possible', 'Pour left-handed' and 'Tamp with eyes closed'",
    title: "Switch-It-Up Dice",
    description: "Introduced playful disruptions such as pouring with the non-dominant hand to reveal hidden habits.",
    // Portrait card, text left / image right in the source — the dice net
    // is the widest image of the four, text column measured to ~34%.
    layout: "text-left",
    textBasis: "sm:basis-[34%]",
  },
];

const whatChangedCards = [
  {
    title: "Routine Had Hidden Awareness",
    description:
      "The participant realised many actions had become automatic. Simple prompts encouraged her to slow down and notice sensations she normally overlooked.",
    quote: "I realised how much of my job I do on autopilot.",
  },
  {
    title: "Repetition Built Trust",
    description:
      "Repeated practice created internal reference points rather than conscious instructions. Instead of remembering procedures, the participant trusted how actions felt.",
    quote: "By the end, my hands just knew.",
  },
  {
    title: "Expertise Was Multisensory",
    description:
      "Rather than relying on a single cue, touch, hearing and vision worked together as one coordinated feedback system.",
    quote:
      "At the start, definitely hearing, but then touch started creeping in… By the end, I was using all of them together.",
  },
  {
    title: "Small Disruptions Revealed Hidden Habits",
    description:
      "Unexpected challenges exposed deeply ingrained movement patterns and encouraged renewed curiosity.",
    quote: "The muscle memory is so strong it almost resists change.",
  },
  {
    title: "Reflection Amplified Learning",
    description:
      "Writing about bodily experiences transformed vague sensations into meaningful insights. Reflection became part of the learning process itself.",
    quote: "Writing helped me slow down and notice patterns.",
  },
];

const designOpportunities = [
  {
    label: "Design for sensory attention",
    value: ["Help learners recognise subtle sensory feedback rather than simply presenting instructions."],
  },
  {
    label: "Encourage playful disruption",
    value: ["Introduce small challenges that interrupt routine and reveal hidden habits."],
  },
  {
    label: "Support lightweight reflection",
    value: ["Capture fleeting bodily experiences before they disappear."],
  },
  {
    label: "Make tacit knowledge visible",
    value: ["Visualise patterns that are normally felt rather than seen."],
  },
];

const nextProjects = selectedWork
  .filter((project) =>
    [
      "/work/woolworths-internal-products",
      "/work/bunch",
      "/work/realswipe",
    ].includes(project.href)
  )
  .map((project) => ({ ...project, number: undefined }));

export default function HowTheBodyRemembersPage() {
  return (
    <>
      <section className="container-work pb-16 pt-10 md:pb-20 md:pt-14">
        <Reveal variant="heading">
          <h1 className="font-heading text-4xl font-extrabold leading-[1.1] text-ink md:text-5xl">
            How the Body Remembers
          </h1>
          <p className="mt-4 text-lg font-semibold text-ink md:text-xl">
            Exploring how repetition and sensory feedback shape embodied memory through the everyday practice of making coffee.
          </p>
        </Reveal>

        <Reveal variant="image" delay={100} className="mt-10">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/images/work/how-the-body-remembers/hero.png"
              width={1752}
              height={639}
              alt="'Embodied Memory in Everyday Tasks: The Art of Making Coffee' illustrated poster with a green coffee pot and mug"
              className="w-full object-cover"
              priority
            />
          </div>
        </Reveal>

        <div id="overview" className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          <Reveal variant="paragraph">
            <div className="space-y-5 text-lg leading-relaxed text-body">
              <p>
                Many everyday skills happen without conscious thought. We often
                struggle to explain how we perform actions that have become
                second nature.
              </p>
              <p>
                This project explored{" "}
                <span className="font-bold text-ink">
                  embodied remembering, how repeated physical actions become
                  stored in the body through movement, sensory feedback and
                  experience.
                </span>
              </p>
              <p>
                Working from an initial interview study, I designed a two-week
                cultural probe to investigate how a professional barista&apos;s
                body learns, remembers and refines the craft of making coffee
                over time.
              </p>
            </div>
          </Reveal>

          <Reveal variant="paragraph" delay={120}>
            <MetaTable rows={metaRows} />
          </Reveal>
        </div>

        <CaseStudyNav items={navItems} />

        <div className="mt-10 md:mt-14">
          <Reveal variant="paragraph">
            <Eyebrow variant="muted">The Challenge</Eyebrow>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-body">
              <p>How do you study knowledge that people can&apos;t easily explain?</p>
              <p>
                Making coffee appears simple, yet experienced baristas
                constantly rely on tiny adjustments in pressure, sound,
                temperature and movement without consciously thinking about
                them.
              </p>
              <p>Traditional interviews capture what people can articulate.</p>
              <p>I wanted to understand the knowledge that exists beyond words.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="phase-1" className="container-work py-16 md:py-20">
        <Reveal variant="heading">
          <PhaseSectionHeader eyebrow="Phase 1" title="Understanding Embodied Memory" />
        </Reveal>
        <Reveal variant="paragraph" delay={100} className="mt-6 md:mt-8">
          <div className="space-y-4 text-lg leading-relaxed text-body">
            <p>
              Our team began by interviewing{" "}
              <span className="font-bold text-ink">15 coffee makers,</span>{" "}
              including professional baristas and experienced home brewers.
            </p>
            <p>
              I personally conducted{" "}
              <span className="font-bold text-ink">three semi-structured interviews,</span>{" "}
              exploring how participants learned coffee making, the role of
              repetition, sensory feedback and physical memory in developing
              expertise. Together we synthesised all interviews using affinity
              mapping to identify recurring behavioural patterns.
            </p>
          </div>
        </Reveal>

        <Reveal variant="image" className="mt-10">
          <div className="overflow-hidden rounded-xl">
            <Image
              src="/images/work/how-the-body-remembers/phase-1-poster.png"
              width={1122}
              height={312}
              alt="'Embodied Memory in Everyday Tasks: The Art of Making Coffee' poster: exploring how repeated movements, sensory cues and context shape embodied memory and lead to automatic performance"
              className="w-full object-cover"
            />
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 md:mt-20 md:grid-cols-2">
          <div>
            <p className="flex items-center gap-2 font-bold text-ink">
              <Image
                src="/images/work/how-the-body-remembers/icons/background.svg"
                width={36}
                height={36}
                alt=""
                aria-hidden="true"
              />
              Background
            </p>
            <div className="mt-3 space-y-3 text-body">
              <p>
                Everyday bodily movements can become automatic through
                repetition, sensory feedback and muscle memory - a concept
                described in the Embodied Remembering Experiences framework
                as &lsquo;Practice makes better&rsquo;.
              </p>
              <p>
                Research in embodied cognition shows that remembering is not
                only a mental process but deeply rooted in the body. Coffee
                making, with its repetitive actions and rich sensory cues,
                offers an ideal case to understand how skills are learned,
                refined and embodied over time.
              </p>
            </div>
          </div>
          <div>
            <p className="flex items-center gap-2 font-bold text-ink">
              <Image
                src="/images/work/how-the-body-remembers/icons/research-questions.svg"
                width={36}
                height={36}
                alt=""
                aria-hidden="true"
              />
              Research Questions
            </p>
            <div className="mt-3 space-y-3 text-body">
              <p className="font-bold text-ink">Primary</p>
              <p>
                How do the physical sensations and repetitive movements
                involved in coffee making become embodied memory, allowing
                expert users to perform the task automatically?
              </p>
              <p className="font-bold text-ink">Secondary</p>
              <p>
                To what extend does a user&apos;s personal style and the
                physical environment (e.g., equipments, workstation layout)
                influence the development and consistency of this embodied
                memory?
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-20">
          <p className="flex items-center gap-2 font-bold text-ink">
            <Image
              src="/images/work/how-the-body-remembers/icons/methodology.svg"
              width={36}
              height={36}
              alt=""
              aria-hidden="true"
            />
            Methodology
          </p>
          <Image
            src="/images/work/how-the-body-remembers/methodology-timeline.png"
            width={1656}
            height={312}
            alt="Methodology: Recruitment (15 participants, 40+ years old, regular coffee makers), Interviews (semi-structured interviews about habits, learning, challenges and setup), Transcription (audio recordings transcribed verbatim), Thematic Analysis (inductive coding and affinity mapping), Result (6 key themes identified)"
            className="mt-8 h-auto w-full"
          />
        </div>

        <div className="mt-16 md:mt-20">
          <Reveal variant="paragraph">
            <p className="flex items-center gap-2 font-bold text-ink">
              <Image
                src="/images/work/how-the-body-remembers/icons/findings.svg"
                width={36}
                height={36}
                alt=""
                aria-hidden="true"
              />
              Findings
            </p>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {findingsCards.map((card, index) => (
              <Reveal key={card.title} variant="card" index={index}>
                <IconCard
                  title={card.title}
                  icon={card.icon}
                  iconSize={40}
                  className="bg-[#FDFCF9]"
                >
                  <p>{card.description}</p>
                  <p className="italic text-ink">&ldquo;{card.quote}&rdquo;</p>
                </IconCard>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16 md:mt-20">
          <Reveal variant="paragraph">
            <Eyebrow variant="muted">Narrowing the Focus</Eyebrow>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-body">
              <p>From the 6 findings, I selected the two that appeared most closely connected:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Sensory feedback is key to learning.</li>
                <li>Repetition creates automaticity.</li>
              </ul>
              <p>
                Together, they suggested that expertise develops through a
                continuous loop of sensing, repeating and adapting.
              </p>
              <p>These findings became the foundation of my probe study.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="phase-2" className="container-work py-16 md:py-20">
        <Reveal variant="heading">
          <PhaseSectionHeader eyebrow="Phase 2" title="Designing the Probe Study" />
        </Reveal>
        <Reveal variant="paragraph" delay={100} className="mt-6 md:mt-8">
          <div className="space-y-4 text-lg leading-relaxed text-body">
            <p>Interviews revealed what participants could explain.</p>
            <p>
              To understand what they actually experienced during coffee
              making, I designed a two-week cultural probe.
            </p>
            <p>
              The probe introduced small reflective activities into a
              participant&apos;s everyday workflow without disrupting their
              normal routine.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 md:mt-20">
          <Reveal variant="paragraph">
            <Eyebrow variant="muted">Probe Kit</Eyebrow>
            <p className="mt-4 text-lg leading-relaxed text-body">
              I designed five physical artefacts that encouraged reflection through doing.
            </p>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {probeKit.map((artefact, index) => {
              const text = (
                <div className={artefact.textBasis ? `${artefact.textBasis} sm:shrink-0` : undefined}>
                  <p className="text-lg font-bold text-ink">{artefact.title}</p>
                  <p className="mt-2 text-body">{artefact.description}</p>
                </div>
              );
              const image = (
                <Image
                  src={artefact.src}
                  width={artefact.width}
                  height={artefact.height}
                  alt={artefact.alt}
                  className={
                    artefact.layout === "stacked"
                      ? "h-auto w-full rounded-lg"
                      : "h-auto w-full min-w-0 flex-1 rounded-lg"
                  }
                />
              );

              return (
                <Reveal key={artefact.title} variant="card" index={index} className="min-w-0">
                  <div className="h-full min-w-0 overflow-hidden rounded-xl2 border border-border p-8">
                    {artefact.layout === "stacked" ? (
                      <div className="flex h-full flex-col gap-6">
                        {text}
                        {image}
                      </div>
                    ) : (
                      <div className="flex h-full min-w-0 flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:text-left">
                        {text}
                        {image}
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal variant="card" index={4} className="mt-6">
            <div className="rounded-xl2 border border-border p-8">
              <p className="text-lg font-bold text-ink">Reflection Journal</p>
              <p className="mt-2 text-body">
                Captured daily observations and changing awareness across the two-week study.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Image
                  src="/images/work/how-the-body-remembers/journal-daily.png"
                  width={803}
                  height={569}
                  alt="Daily Journal spread with prompts for the easiest step today, most challenging step, an interesting thing that happened, overall feeling and optional sketch space"
                  className="h-auto w-full min-w-0 rounded-lg"
                />
                <Image
                  src="/images/work/how-the-body-remembers/journal-reflection.png"
                  width={804}
                  height={569}
                  alt="Final Reflection spread with prompts on which steps felt easiest or still challenging, which sensory cues stood out, aha moments, and overall feeling after two weeks"
                  className="h-auto w-full min-w-0 rounded-lg"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="phase-3" className="container-work py-16 md:py-20">
        <Reveal variant="heading">
          <PhaseSectionHeader eyebrow="Phase 3" title="Probe in the Wild" />
        </Reveal>
        <Reveal variant="paragraph" delay={100} className="mt-6 md:mt-8">
          <div className="space-y-4 text-lg leading-relaxed text-body">
            <p>
              The participant was an experienced Sydney barista with
              approximately four years of professional experience.
            </p>
            <p>
              Over twelve working days, she completed the probe activities
              during real café shifts, documenting moments of success,
              frustration and reflection.
            </p>
            <p>
              Rather than observing in a laboratory, the research unfolded
              within the participant&apos;s everyday environment.
            </p>
          </div>
        </Reveal>

        <Reveal variant="image" delay={150} className="mt-10">
          <Image
            src="/images/work/how-the-body-remembers/probe-in-the-wild.png"
            width={1728}
            height={780}
            alt="Flat lay of the probe kit in use: a printed quick guide, Sensory Bingo card, Sound Palette cards, Switch-It-Up Dice, Coffee Quest card and a recycled A5 notebook"
            className="h-auto w-full rounded-2xl"
          />
        </Reveal>

        <div className="mt-16 md:mt-20">
          <Reveal variant="paragraph">
            <Eyebrow variant="muted">What Changed?</Eyebrow>
            <p className="mt-4 text-lg leading-relaxed text-body">
              Across the study, several patterns became increasingly visible.
            </p>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whatChangedCards.map((card, index) => (
              <Reveal key={card.title} variant="card" index={index}>
                <IconCard title={card.title} className="bg-[#FDFCF9]">
                  <p>{card.description}</p>
                  <p className="italic text-ink">&ldquo;{card.quote}&rdquo;</p>
                </IconCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="opportunity" className="container-work py-16 md:py-20">
        <Reveal variant="paragraph">
          <Eyebrow variant="muted">Key Takeaway</Eyebrow>
          <div className="mt-4 space-y-4">
            <p className="text-lg leading-relaxed text-body">
              Embodied remembering was not a linear process.
            </p>
            <blockquote className="border-l-2 border-ink/30 pl-6 text-2xl leading-snug text-ink md:text-3xl">
              Learning evolved through a continuous cycle of noticing sensory
              feedback, repeating movements, reflecting on experience and
              gradually trusting the body&apos;s own intelligence.
            </blockquote>
          </div>
        </Reveal>

        <div className="mt-16 md:mt-20">
          <Reveal variant="heading">
            <h2 className="font-heading text-4xl font-extrabold text-ink md:text-5xl">
              Design Opportunities
            </h2>
          </Reveal>
          <Reveal variant="paragraph" delay={100} className="mt-6">
            <p className="text-lg leading-relaxed text-body">
              The research suggested opportunities extending beyond coffee making.
            </p>
          </Reveal>
          <Reveal variant="paragraph" delay={150} className="mt-8">
            <dl className="border-t border-border">
              {designOpportunities.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-3 gap-4 border-b border-border py-4"
                >
                  <dt className="font-semibold text-ink">{row.label}</dt>
                  <dd className="col-span-2 space-y-1 text-body">
                    {row.value.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section id="reflection" className="container-work py-16 md:py-20">
        <Reveal variant="paragraph">
          <Eyebrow variant="muted">Reflection</Eyebrow>
          <div className="mt-4 space-y-4 text-lg leading-relaxed text-body">
            <p>This project shaped how I think about UX research.</p>
            <p>
              Interviews are excellent at uncovering beliefs, motivations and
              stories, but they only capture experiences people can
              consciously describe.
            </p>
            <p>
              Designing a cultural probe taught me that carefully crafted
              artefacts can reveal an entirely different layer of behaviour,
              one that emerges through movement, routine and reflection. It
              showed me that research is not only about asking better
              questions, but also about creating experiences that help
              participants discover things they didn&apos;t know about
              themselves.
            </p>
            <p>
              More importantly, it reinforced my belief that thoughtful design
              can make invisible human experiences visible, providing richer
              insights than interviews alone.
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
