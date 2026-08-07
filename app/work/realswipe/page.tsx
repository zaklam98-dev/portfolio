import type { Metadata } from "next";
import Image from "next/image";
import CaseStudyHero from "@/components/work/CaseStudyHero";
import PhaseSectionHeader from "@/components/work/PhaseSectionHeader";
import IconCard from "@/components/work/IconCard";
import ProjectGrid from "@/components/work/ProjectGrid";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import { selectedWork } from "@/lib/projects";

export const metadata: Metadata = {
  title: "RealSwipe — An Ny Lam",
};

const navItems = [
  { label: "Research", href: "#research" },
  { label: "Solution 01", href: "#solution-01" },
  { label: "Solution 02", href: "#solution-02" },
  { label: "Solution 03", href: "#solution-03" },
  { label: "Reflection", href: "#reflection" },
];

const metaRows = [
  { label: "Role", value: ["UX/UI Designer"] },
  { label: "Client", value: ["RealSwipe Founder | ProjectUX x UTS"] },
  { label: "Duration", value: ["8 Weeks"] },
  { label: "Team", value: ["5 Designers"] },
  {
    label: "Deliverables",
    value: ["UX Research", "Usability Testing", "Prototyping"],
  },
];

const misconceptionCards = [
  {
    title: "Romantic First Impression",
    description:
      "The onboarding imagery and messaging resembled dating applications, immediately setting the wrong expectation.",
  },
  {
    title: "Passive Event Discovery",
    description:
      "Although RealSwipe centred around live events, the map failed to communicate activity. Users struggled to understand where people were gathering, what was happening nearby or how to participate.",
  },
  {
    title: "Swipe-First Interactions",
    description:
      "Profile cards prioritised appearance over shared experiences. Limited profile information, heart icons and swipe gestures encouraged users to judge people instead of discovering communities.",
  },
];

const principleCards = [
  {
    title: "Social Before Romantic",
    icon: "/images/work/realswipe/icons/social-before-romantic.svg",
    description: "Every interaction should reinforce community rather than dating.",
  },
  {
    title: "Context Before Connection",
    icon: "/images/work/realswipe/icons/context-before-connection.svg",
    description:
      "Users should understand who someone is through shared interests, activities and events before deciding to connect.",
  },
  {
    title: "Discovery Before Matching",
    icon: "/images/work/realswipe/icons/discovery-before-matching.svg",
    description:
      "Finding experiences should become the primary journey, with meeting people naturally following from participation.",
  },
];

const nextProjects = selectedWork
  .filter((project) => project.href !== "/work/realswipe")
  .map((project) => ({ ...project, number: undefined }));

export default function RealSwipePage() {
  return (
    <>
      <CaseStudyHero
        image="/images/work/realswipe/hero.png"
        imageWidth={1728}
        imageHeight={780}
        imageAlt="Two phones on a table scattered with paperclips: one showing the RealSwipe splash screen 'meet people, where you are at', the other showing An Lam's profile card with Connect and Skip actions"
        title="RealSwipe"
        subtitle="Repositioning a social discovery app that everyone mistook for a dating app."
        meta={metaRows}
        navItems={navItems}
      />

      <section id="research" className="container-work py-16 md:py-20">
        <Reveal variant="paragraph">
          <Eyebrow variant="muted">Overview</Eyebrow>
        </Reveal>
        <Reveal variant="paragraph" delay={100} className="mt-6">
          <div className="space-y-5 text-lg leading-relaxed text-body">
            <p>
              RealSwipe is a social discovery platform that helps people meet
              through shared experiences at live venues and events. The app
              encourages spontaneous, real-world interactions through nearby
              hotspots, events and communities.
            </p>
            <p>
              Over eight weeks, our team partnered directly with the founder
              to{" "}
              <span className="font-bold text-ink">
                evaluate the existing product, uncover usability issues and
                redesign key parts of the experience.
              </span>
            </p>
            <p>
              What initially appeared to be a visual redesign quickly became
              something much bigger.
            </p>
            <p>
              The core challenge wasn&apos;t usability. It was perception.
              Users fundamentally misunderstood what the product was trying
              to be.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 md:mt-20">
          <Reveal variant="paragraph">
            <Eyebrow variant="muted">The Challenge</Eyebrow>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-body">
              <p>
                During usability testing, every first-time participant
                reached the same conclusion:{" "}
                <span className="font-bold text-ink">
                  &quot;This is a dating app.&quot;
                </span>
              </p>
              <p>
                The app was designed for social discovery, but everything
                from the onboarding experience to the interaction patterns
                suggested romance instead of community. As a result,
                RealSwipe was attracting the wrong expectations while pushing
                away the audience it was built for.
              </p>
              <p>We framed the problem as:</p>
              <blockquote className="border-l-2 border-ink/30 pl-6 text-2xl leading-snug text-ink md:text-3xl">
                &quot;How can we redesign the product so people immediately
                understand it&apos;s for social discovery?&quot;
              </blockquote>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 md:mt-20">
          <Reveal variant="paragraph">
            <Eyebrow variant="muted">Research</Eyebrow>
            <p className="mt-4 text-lg leading-relaxed text-body">
              To understand why users were forming the wrong impression, we
              combined usability testing with competitive research and
              collaborative synthesis.
            </p>
          </Reveal>
          <Reveal variant="image" delay={100} className="mt-10">
            <Image
              src="/images/work/realswipe/research-timeline.png"
              width={1730}
              height={432}
              alt="Research timeline: Usability Testing (participants completed realistic tasks such as discovering nearby events and connecting with other users), Affinity Mapping (grouped observations into recurring themes), Competitive Benchmarking (analysed Meetup, Ripple, Bunchups and Nomad Table)"
              className="h-auto w-full"
            />
          </Reveal>
        </div>

        <div className="mt-16 md:mt-20">
          <Reveal variant="paragraph">
            <Eyebrow variant="muted">Key Insights</Eyebrow>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-body">
              <p>Our research uncovered one dominant insight.</p>
              <p className="font-bold text-ink">
                Users misunderstood the product before they even started
                using it.
              </p>
              <p>
                Several design decisions unintentionally reinforced the
                mental model of a dating app.
              </p>
            </div>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {misconceptionCards.map((card, index) => (
              <Reveal key={card.title} variant="card" index={index}>
                <IconCard title={card.title}>
                  <p>{card.description}</p>
                </IconCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="solution-01" className="container-work py-16 md:py-20">
        <Reveal variant="heading">
          <PhaseSectionHeader
            eyebrow="Solution 01"
            title="Creating the Right First Impression"
          />
        </Reveal>

        <div className="mt-8">
          <Reveal variant="paragraph">
            <Eyebrow variant="muted">Problem</Eyebrow>
            <div className="mt-4 space-y-4">
              <blockquote className="border-l-2 border-ink/30 pl-6 text-2xl leading-snug text-ink md:text-3xl">
                Users formed an incorrect impression within seconds of
                opening the app.
              </blockquote>
              <p className="text-lg leading-relaxed text-body">
                The onboarding sequence highlighted romantic imagery without
                explaining what RealSwipe actually offered.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-10">
          <Reveal variant="paragraph">
            <Eyebrow variant="muted">Design</Eyebrow>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-body">
              <p>
                We redesigned the onboarding experience to communicate social
                discovery from the very first screen.
              </p>
              <p>The new experience:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>replaced romantic cues with social energy.</li>
                <li>
                  showcased different social scenarios including
                  friendships, networking and events
                </li>
                <li>adopted a visual language that resonated with Gen Z</li>
                <li>
                  clearly communicated the platform&apos;s purpose before
                  users entered the app
                </li>
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal variant="image" className="mt-10">
          <Image
            src="/images/work/realswipe/solution-01.png"
            width={1830}
            height={1110}
            alt="Before/after: a romance-coded onboarding splash reading 'RealSwipe' with a heart accent over a couple photo, versus the redesigned onboarding sequence replacing romantic cues with social-scenario photos and copy reading 'meet people, where you are at — because the best connections happen in the moment'"
            className="h-auto w-full"
          />
        </Reveal>

        <Reveal variant="paragraph" delay={150} className="mt-10">
          <p className="text-lg leading-relaxed text-body">
            Users immediately understood it as a place to meet people through
            shared experiences.
          </p>
        </Reveal>
      </section>

      <section id="solution-02" className="container-work py-16 md:py-20">
        <Reveal variant="heading">
          <PhaseSectionHeader
            eyebrow="Solution 02"
            title="Turning the Map into a Discovery Engine"
          />
        </Reveal>

        <div className="mt-8">
          <Reveal variant="paragraph">
            <Eyebrow variant="muted">Problem</Eyebrow>
            <blockquote className="mt-4 border-l-2 border-ink/30 pl-6 text-2xl leading-snug text-ink md:text-3xl">
              Important content was hidden, navigation was unclear and users
              struggled to discover nearby activity.
            </blockquote>
          </Reveal>
        </div>

        <div className="mt-10">
          <Reveal variant="paragraph">
            <Eyebrow variant="muted">Design</Eyebrow>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-body">
              <p>
                Instead of treating the map as a background feature, we
                transformed it into the centre of the experience.
              </p>
              <p>Key improvements included:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>expanding nearby activities by default</li>
                <li>redesigning hotspot and event cards</li>
                <li>clearer Cheetah and Panda mode switching</li>
                <li>search, filtering and date selection</li>
                <li>improved event creation flow</li>
                <li>stronger navigation hierarchy</li>
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal variant="image" className="mt-10">
          <Image
            src="/images/work/realswipe/solution-02-1.png"
            width={1788}
            height={1200}
            alt="Before/after: the map screen with a confusing mode toggle and low-emphasis hotspot pins, versus the redesigned map with a 'What is happening around' module expanded by default, listing nearby hotspots with photos and connected-member counts"
            className="h-auto w-full"
          />
        </Reveal>

        <Reveal variant="image" className="mt-10">
          <Image
            src="/images/work/realswipe/solution-02-2.png"
            width={1804}
            height={1200}
            alt="Before/after: an empty 'ghost' map with an empty Events module, versus the redesigned Events tab with search and date filtering, a list of nearby events, and an event detail card showing attendee avatars and a Join Event button"
            className="h-auto w-full"
          />
        </Reveal>

        <Reveal variant="paragraph" delay={150} className="mt-10">
          <p className="text-lg leading-relaxed text-body">
            The experience shifted from browsing an empty map to actively
            discovering nearby venues, events and communities.
          </p>
        </Reveal>
      </section>

      <section id="solution-03" className="container-work py-16 md:py-20">
        <Reveal variant="heading">
          <PhaseSectionHeader
            eyebrow="Solution 03"
            title="Designing Profiles Around Shared Experiences"
          />
        </Reveal>

        <div className="mt-8">
          <Reveal variant="paragraph">
            <Eyebrow variant="muted">Problem</Eyebrow>
            <blockquote className="mt-4 space-y-2 border-l-2 border-ink/30 pl-6 text-2xl leading-snug text-ink md:text-3xl">
              <p>
                Existing profile cards encouraged quick appearance-based
                decisions.
              </p>
              <p>
                Users had very little context beyond a photo, making
                interactions feel transactional and dating-oriented.
              </p>
            </blockquote>
          </Reveal>
        </div>

        <div className="mt-10">
          <Reveal variant="paragraph">
            <Eyebrow variant="muted">Design</Eyebrow>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-body">
              <p>
                We redesigned profile cards around common interests instead
                of physical appearance.
              </p>
              <p>Profiles now highlighted:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>hobbies and interests</li>
                <li>shared events</li>
                <li>richer biographies</li>
                <li>expandable profile details</li>
                <li>clearer interaction hierarchy</li>
                <li>a dedicated Connect action replacing dating-inspired gestures</li>
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal variant="image" className="mt-10">
          <Image
            src="/images/work/realswipe/solution-03.png"
            width={1769}
            height={1200}
            alt="Before/after: a swipeable profile card showing only a name, age, height and photo, versus the redesigned profile card highlighting hobbies and events attended, with a bio and a dedicated Connect action alongside Skip"
            className="h-auto w-full"
          />
        </Reveal>

        <Reveal variant="paragraph" delay={150} className="mt-10">
          <p className="text-lg leading-relaxed text-body">
            Connections became grounded in shared experiences rather than
            first impressions.
          </p>
        </Reveal>

        <div className="mt-16 md:mt-20">
          <Reveal variant="paragraph">
            <Eyebrow variant="muted">Design Principles</Eyebrow>
            <p className="mt-4 text-lg leading-relaxed text-body">
              Throughout the project we established three principles that
              guided every design decision.
            </p>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {principleCards.map((card, index) => (
              <Reveal key={card.title} variant="card" index={index}>
                <IconCard title={card.title} icon={card.icon}>
                  <p>{card.description}</p>
                </IconCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="reflection" className="container-work py-16 md:py-20">
        <Reveal variant="paragraph">
          <Eyebrow variant="muted">Reflection</Eyebrow>
          <div className="mt-4 space-y-4 text-lg leading-relaxed text-body">
            <p>
              At first glance, the project appeared to be a visual refresh.
              However, user research revealed that the real challenge
              wasn&apos;t aesthetics, it was perception. The interface
              consistently communicated the wrong message, shaping
              expectations before users had a chance to experience the
              product&apos;s true value.
            </p>
            <p>
              This project reinforced that{" "}
              <span className="font-bold text-ink">
                successful product design starts with identifying the right
                problem.
              </span>{" "}
              By grounding every design decision in research and aligning
              each interaction with a clear product narrative, we were able
              to reposition the experience from a dating app to a platform
              centred on social discovery.
            </p>
            <p>
              More importantly, collaborating directly with the founder
              showed me how design can influence not only usability, but
              also product strategy and brand perception. It strengthened my
              belief that{" "}
              <span className="font-bold text-ink">
                great UX is about creating experiences that communicate
                purpose as clearly as they support interaction.
              </span>
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
