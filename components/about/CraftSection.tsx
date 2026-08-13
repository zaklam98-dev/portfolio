import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";

const craftGroups = [
  {
    title: "UX / UI",
    items: ["Product Design", "Interaction Design", "Design Systems", "User Research"],
  },
  {
    title: "Brand",
    items: ["Visual Identity", "Logo Design", "Brand Guidelines", "Brand Assets"],
  },
  {
    title: "Graphic",
    items: ["Editorial Design", "Marketing Collateral", "Social Content", "Illustration"],
  },
];

export default function CraftSection() {
  return (
    <section className="container-content py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal variant="paragraph">
          <Eyebrow>What I Craft</Eyebrow>
        </Reveal>
        <div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-3">
          {craftGroups.map((group, index) => (
            <Reveal key={group.title} variant="card" index={index}>
              <div className="rounded-xl border border-border p-8">
                <h3 className="font-heading text-xl font-bold text-ink">
                  {group.title}
                </h3>
                <ul className="mt-5 space-y-3 text-lg text-body md:text-xl">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
