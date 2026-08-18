import type { Metadata } from "next";
import Image from "next/image";
import CaseStudyHero from "@/components/work/CaseStudyHero";
import PhaseSectionHeader from "@/components/work/PhaseSectionHeader";
import ProjectGrid from "@/components/work/ProjectGrid";
import BeforeAfterPair from "@/components/work/BeforeAfterPair";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import { selectedWork } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Woolworths • Bunch — An Ny Lam",
};

const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "Impact", href: "#impact" },
  { label: "Part 01", href: "#part-01" },
  { label: "Part 02", href: "#part-02" },
  { label: "Reflection", href: "#reflection" },
];

const metaRows = [
  { label: "Role", value: ["Creative Designer | UX/UI"] },
  { label: "Year", value: ["2024 - Present"] },
  { label: "Deliverables", value: ["UX/UI", "Visual design", "Developer Handoff"] },
];

const impactRows = [
  {
    icon: "📈",
    label: "Increased engagement",
    description: (
      <>
        <span className="font-bold text-ink">
          Increased average session duration from ~1 minute to ~3 minutes
        </span>{" "}
        by redesigning the sample claim journey into a content discovery
        experience.
      </>
    ),
  },
  {
    icon: "⏱️",
    label: "Improved operational efficiency",
    description: (
      <>
        <span className="font-bold text-ink">
          Saved moderators an estimated 2–3 hours per week
        </span>{" "}
        by reducing repetitive questions, while helping members find
        important information immediately at the top of each discussion.
      </>
    ),
  },
  {
    icon: "🚀",
    label: "Continuous product evolution",
    description:
      "Contributed numerous shipped improvements, seasonal campaigns and community initiatives across a live product over two years.",
  },
  {
    icon: "🔭",
    label: "Long-term product vision",
    description:
      "Developed future concepts that reposition Bunch from a community website into a personalised cooking companion integrated with the Woolworths ecosystem.",
  },
];

const nextProjects = selectedWork
  .filter((project) => project.href !== "/work/bunch")
  .map((project) => ({ ...project, number: undefined }));

export default function BunchPage() {
  return (
    <>
      <CaseStudyHero
        image="/images/work/bunch/hero.png"
        imageWidth={1728}
        imageHeight={780}
        imageAlt="Laptop on a sunlit desk displaying the Bunch homepage, with a 'Share your best recipe' banner, member greeting and popular topics"
        title="Woolworths • Bunch"
        subtitle="Helping shape the future of a food community through continuous product evolution."
        meta={metaRows}
        navItems={navItems}
      />

      <section id="overview" className="container-work py-16 md:py-20">
        <Reveal variant="paragraph">
          <Eyebrow variant="muted">Overview</Eyebrow>
        </Reveal>
        <Reveal variant="paragraph" delay={100} className="mt-6">
          <div className="space-y-5 text-lg leading-relaxed text-body">
            <p>
              Bunch is Woolworths&apos; members-only online food community,
              with approximately 100,000 members who discover recipes,
              review products, receive free samples and connect with fellow
              food lovers.
            </p>
            <p>
              Unlike designing a product from scratch, working on Bunch
              meant{" "}
              <span className="font-bold text-ink">
                designing for an evolving platform with an active community
                and an established user base.
              </span>{" "}
              Across two years, I contributed to dozens of product
              improvements, community initiatives and future concepts that
              helped make Bunch more engaging, easier to use and better
              connected to the wider Woolworths ecosystem.
            </p>
            <p>
              Rather than focusing on one large redesign, this project became
              an exercise in continuous product evolution:{" "}
              <span className="font-bold text-ink">
                using small, intentional improvements to create meaningful
                change over time.
              </span>
            </p>
          </div>
        </Reveal>

        <div id="impact" className="mt-16 md:mt-20">
          <Reveal variant="paragraph">
            <Eyebrow variant="muted">Impact At A Glance</Eyebrow>
          </Reveal>
          <div className="mt-8 divide-y divide-border border-t border-border">
            {impactRows.map((row, index) => (
              <Reveal key={row.label} variant="paragraph" index={index}>
                <div className="grid grid-cols-1 gap-2 py-6 md:grid-cols-3 md:gap-8">
                  <p className="text-lg text-ink">
                    <span aria-hidden="true">{row.icon}</span> {row.label}
                  </p>
                  <p className="text-lg leading-relaxed text-body md:col-span-2">
                    {row.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16 md:mt-20">
          <Reveal variant="paragraph">
            <Eyebrow variant="muted">The Opportunity</Eyebrow>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-body">
              <p>
                As the community continued to grow, new features and
                campaigns were added regularly.
              </p>
              <p>
                While this kept the platform active, it also introduced
                opportunities to improve engagement, simplify common tasks
                and better connect the different parts of the experience.
              </p>
              <p>My work fell into two broad streams:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Improving today&apos;s experience through shipped product improvements.</li>
                <li>Exploring tomorrow&apos;s experience through future concepts and product vision.</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="part-01" className="container-work py-16 md:py-20">
        <Reveal variant="heading">
          <PhaseSectionHeader eyebrow="Part 01" title="Improving Today's Experience" />
        </Reveal>
        <Reveal variant="paragraph" delay={100} className="mt-6 md:mt-8">
          <div className="space-y-4 text-lg text-ink">
            <p>Many of the most valuable improvements weren&apos;t large redesigns.</p>
            <p>
              They were carefully placed interventions at key moments of the
              user journey that encouraged engagement, reduced friction and
              made the platform easier to manage.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 md:mt-20">
          <Reveal variant="heading">
            <h3 className="font-heading text-2xl font-extrabold text-ink md:text-3xl">
              1. Increasing Engagement Beyond Sample Claims
            </h3>
          </Reveal>

          <div className="mt-[56px]">
            <Reveal variant="paragraph">
              <Eyebrow variant="muted">The Opportunity</Eyebrow>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-body">
                <p>
                  Many members visited Bunch with a single goal, to claim a
                  free product sample.
                </p>
                <blockquote className="border-l-2 border-ink/30 pl-6 text-2xl leading-snug text-ink md:text-3xl">
                  Once the sample had been claimed, there was little reason
                  to continue exploring the community, resulting in very
                  short sessions and limited exposure to recipes, articles
                  and discussions.
                </blockquote>
              </div>
            </Reveal>
          </div>

          <div className="mt-[64px]">
            <Reveal variant="paragraph">
              <Eyebrow variant="muted">The Solution</Eyebrow>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-body">
                <p>
                  After a successful claim, the confirmation experience was
                  redesigned into an{" "}
                  <span className="font-bold text-ink">
                    opportunity for discovery.
                  </span>
                </p>
                <p>
                  The new pop-up surfaced related recipes, articles and
                  community content while the member was already engaged,
                  encouraging them to continue exploring rather than
                  immediately leaving the platform.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal variant="image" className="mt-[64px]">
            <Image
              src="/images/work/bunch/part01-1.png"
              width={1841}
              height={1017}
              alt="Before/after: a plain sample-claim confirmation screen showing the item added to the member's Everyday Rewards card, versus a redesigned 'Claimed Successfully' confirmation that surfaces related recipe and article cards to encourage further exploration"
              className="h-auto w-full"
            />
          </Reveal>

          <div className="mt-[64px]">
            <Reveal variant="paragraph">
              <Eyebrow variant="muted">The Impact</Eyebrow>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-body">
                <p>
                  Average session duration increased from{" "}
                  <span className="font-bold text-ink">
                    approximately one minute to three minutes
                  </span>
                  , representing a significant improvement in post-claim
                  engagement.
                </p>
                <p>
                  More importantly, the redesign transformed the sample claim
                  from the end of a journey into the beginning of one,
                  encouraging members to discover more of what Bunch had to
                  offer.
                </p>
                <blockquote className="border-l-2 border-ink/30 pl-6 text-2xl leading-snug text-ink md:text-3xl">
                  A small UX intervention at a critical moment in the journey
                  created more opportunity for members to explore the wider
                  community.
                </blockquote>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 md:mt-20">
          <Reveal variant="heading">
            <h3 className="font-heading text-2xl font-extrabold text-ink md:text-3xl">
              2. Reducing Moderator Work Through Better Communication
            </h3>
          </Reveal>

          <div className="mt-[56px]">
            <Reveal variant="paragraph">
              <Eyebrow variant="muted">The Challenge</Eyebrow>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-body">
                <p>
                  Moderators regularly answered the same questions beneath
                  product posts and community discussions.
                </p>
                <blockquote className="border-l-2 border-ink/30 pl-6 text-2xl leading-snug text-ink md:text-3xl">
                  Important information quickly became buried within long
                  comment threads, making it difficult for members to find
                  answers and creating unnecessary repetitive work for the
                  moderation team.
                </blockquote>
              </div>
            </Reveal>
          </div>

          <div className="mt-[64px]">
            <Reveal variant="paragraph">
              <Eyebrow variant="muted">The Solution</Eyebrow>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-body">
                <p>
                  I designed pinned moderator comments, allowing key
                  announcements, instructions and FAQs to remain permanently
                  visible at the top of discussions.
                </p>
                <p>
                  This ensured members saw important information immediately
                  without searching through lengthy conversations. At the
                  same time, it reduced the need for moderators to repeat the
                  same information across active discussions.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal variant="image" delay={100} className="mt-[64px]">
            <Image
              src="/images/work/bunch/part01-2-comments.png"
              width={1407}
              height={959}
              alt="Comments panel with a pinned moderator comment explaining how to claim a sample, kept visible above regular member replies"
              className="mx-auto h-auto w-[65%]"
            />
          </Reveal>

          <div className="mt-[64px]">
            <Reveal variant="paragraph">
              <Eyebrow variant="muted">The Impact</Eyebrow>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-body">
                <p>
                  The feature improved both sides of the experience,{" "}
                  <span className="font-bold text-ink">
                    saving approximately 2–3 hours per week across community
                    teams
                  </span>{" "}
                  while creating a clearer experience for the community.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 md:mt-20">
          <Reveal variant="heading">
            <h3 className="font-heading text-2xl font-extrabold text-ink md:text-3xl">
              3. Keeping The Community Active
            </h3>
          </Reveal>
          <Reveal variant="paragraph" delay={100} className="mt-6">
            <div className="space-y-4 text-lg leading-relaxed text-body">
              <p>
                Alongside larger feature improvements, I designed a range of
                smaller experiences that supported different moments in the
                member journey, contributed to a product that{" "}
                <span className="font-bold text-ink">
                  felt more engaging, more current and more rewarding to
                  return to.
                </span>
              </p>
            </div>
          </Reveal>

          <Reveal variant="image" delay={150} className="mt-[64px]">
            <Image
              src="/images/work/bunch/part01-3-initiatives.png"
              width={1485}
              height={1877}
              alt="Grid of community initiatives: seasonal Olympics avatars, achievement badges, a gifting flow, an event entry form and a refreshed reward email"
              className="h-auto w-full"
            />
          </Reveal>

          <Reveal variant="paragraph" delay={100} className="mt-[64px]">
            <p className="text-lg leading-relaxed text-body">
              Together, these initiatives gave me experience designing
              across a range of touchpoints while maintaining a consistent
              experience within an evolving product.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="part-02" className="container-work py-16 md:py-20">
        <Reveal variant="heading">
          <PhaseSectionHeader eyebrow="Part 02" title="Designing the Future of Bunch" />
        </Reveal>
        <Reveal variant="paragraph" delay={100} className="mt-6 md:mt-8">
          <div className="space-y-4 text-lg leading-relaxed text-body">
            <p>
              As the platform continued growing, I began exploring a larger
              question:
            </p>
            <blockquote className="border-l-2 border-ink/30 pl-6 text-2xl leading-snug text-ink md:text-3xl">
              How could Bunch evolve beyond a traditional online community
              into a personalised cooking companion?
            </blockquote>
            <p>
              Rethinking the overall product experience, I explored how the
              entire member journey could become more connected, more
              personalised and more useful.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 md:mt-20">
          <Reveal variant="heading">
            <h3 className="font-heading text-2xl font-extrabold text-ink md:text-3xl">
              1. From Content Feed To Personal Dashboard
            </h3>
          </Reveal>

          <BeforeAfterPair
            layout="stacked"
            className="mt-[56px]"
            before={{
              description:
                "The existing homepage primarily functioned as a chronological content feed.",
              images: [
                {
                  src: "/images/work/bunch/part02-1-before.png",
                  width: 1509,
                  height: 1164,
                  alt: "Existing Bunch homepage showing a chronological feed of articles and recipes",
                },
              ],
              contentScale: 0.8,
            }}
            after={{
              description:
                "The redesigned dashboard instead adapts to each member's goals by surfacing personalised recommendations, pending reviews, popular discussions, community achievements, cooking inspiration, ect. The goal was to shift the homepage from simply displaying what was new to helping members understand what was relevant to them.",
              images: [
                {
                  src: "/images/work/bunch/part02-1-after-1.png",
                  width: 1509,
                  height: 1164,
                  alt: "Redesigned Bunch dashboard hero with a recipe-sharing banner, personalised greeting, bunch box status and popular topics",
                },
                {
                  src: "/images/work/bunch/part02-1-after-2.png",
                  width: 1509,
                  height: 1278,
                  alt: "Redesigned Bunch dashboard continued, showing trending community discussions, member progress badges and pending reviews",
                },
              ],
              contentScale: 0.8,
            }}
          />
        </div>

        <div className="mt-16 md:mt-20">
          <Reveal variant="heading">
            <h3 className="font-heading text-2xl font-extrabold text-ink md:text-3xl">
              2. Connecting Community And Shopping
            </h3>
          </Reveal>
          <Reveal variant="paragraph" delay={100} className="mt-6">
            <div className="space-y-4 text-lg leading-relaxed text-body">
              <p>
                One opportunity became increasingly clear throughout the
                redesign process:{" "}
                <span className="font-bold text-ink">
                  Members regularly discovered recipes on Bunch before
                  manually searching for ingredients on Woolworths.
                </span>
              </p>
              <p>
                The proposed shopping experience closes this gap, connecting
                inspiration to action: discover a recipe → see the relevant
                Woolworths products → add them to a cart.
              </p>
            </div>
          </Reveal>

          <Reveal variant="image" delay={150} className="mt-[56px]">
            <Image
              src="/images/work/bunch/part02-2-shopping.png"
              width={1632}
              height={694}
              alt="'Make this recipe with' shopping module showing four matched Woolworths products and a 'Shop recipe on Woolworths' button"
              className="mx-auto h-auto w-4/5"
            />
          </Reveal>
        </div>

        <div className="mt-16 md:mt-20">
          <Reveal variant="heading">
            <h3 className="font-heading text-2xl font-extrabold text-ink md:text-3xl">
              3. A Vision For The Future
            </h3>
          </Reveal>
          <Reveal variant="paragraph" delay={100} className="mt-6">
            <p className="text-lg leading-relaxed text-body">
              These concepts were organised into four strategic product
              pillars. Together these initiatives establish a long-term
              vision that extends Bunch beyond a traditional online
              community into a more connected ecosystem centred around food,
              cooking and shared experiences.
            </p>
          </Reveal>

          <Reveal variant="image" delay={150} className="mt-[64px]">
            <Image
              src="/images/work/bunch/timeline.png"
              width={1728}
              height={406}
              alt="Roadmap timeline of four pillars: Discover, Cook, Shop and Connect, each with a short description of its goal"
              className="mx-auto h-auto w-4/5"
            />
          </Reveal>
        </div>
      </section>

      <section id="reflection" className="container-work py-16 md:py-20">
        <Reveal variant="paragraph">
          <Eyebrow variant="muted">Reflection</Eyebrow>
          <div className="mt-4 space-y-4 text-lg leading-relaxed text-body">
            <p>
              Bunch taught me that product improvement doesn&apos;t always
              come from a major redesign. Working on a live community meant
              constantly balancing member needs, business goals and platform
              constraints, often through small changes at specific moments in
              the experience. It strengthened my interest in{" "}
              <span className="font-bold text-ink">
                taking on broader product ownership
              </span>{" "}
              - understanding not only how to improve an individual
              interaction, but{" "}
              <span className="font-bold text-ink">
                how individual decisions fit into a product&apos;s larger
                goals, ecosystem and direction.
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
