import Eyebrow from "@/components/ui/Eyebrow";

const craftGroups = [
  {
    title: "UX / UI",
    items: ["Website Design", "App Design", "Design Systems", "Experience Design"],
  },
  {
    title: "Brand",
    items: ["Logo Design", "Visual Identity", "Brand Guidelines", "Collateral Material"],
  },
  {
    title: "Graphic",
    items: ["Print Design", "Social Media", "Illustration"],
  },
];

export default function CraftSection() {
  return (
    <section className="container-content py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <Eyebrow>What I Craft</Eyebrow>
        <div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-3">
          {craftGroups.map((group) => (
            <div key={group.title} className="rounded-xl border border-border p-8">
              <h3 className="font-heading text-xl font-bold text-ink">
                {group.title}
              </h3>
              <ul className="mt-5 space-y-3 text-lg text-body md:text-xl">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
