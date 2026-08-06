import Image from "next/image";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";

const facts = [
  { emoji: "🇻🇳", text: "Originally from Vietnam, now based in Sydney." },
  { emoji: "🛒", text: "Designing digital products at Woolworths since 2023." },
  { emoji: "🎓", text: "Completing a Master of Interaction Design at UTS (2025 - 2027)." },
  { emoji: "🧶", text: "Usually crocheting or painting when I'm away from Figma." },
  { emoji: "☕", text: "Always curious about how thoughtful design shapes everyday experiences." },
];

const photos = [
  {
    src: "/images/about/painting.png",
    alt: "Acrylic painting of a frog reading a book beneath glowing lanterns and tropical leaves",
    width: 358,
    height: 435,
    rotate: "-rotate-[4deg]",
    offset: "",
    z: "z-10",
  },
  {
    src: "/images/about/sydney-park.png",
    alt: "An Ny standing on a path in a Sydney park at sunset, with palm trees and the harbour behind her",
    width: 333,
    height: 416,
    rotate: "",
    offset: "-mt-4 md:-mt-6",
    z: "z-20",
  },
  {
    src: "/images/about/crochet.png",
    alt: "Crocheted octopus, chick and frog toys sitting together on a couch",
    width: 358,
    height: 435,
    rotate: "rotate-[4deg]",
    offset: "",
    z: "z-10",
  },
];

export default function AboutMeSection() {
  return (
    <section className="container-content py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal variant="paragraph">
          <Eyebrow>A Few Things About Me</Eyebrow>
        </Reveal>
        <Reveal variant="default" delay={100} className="mt-8">
          <ul className="space-y-4 text-lg text-body md:text-xl">
            {facts.map((fact) => (
              <li key={fact.text} className="flex items-start gap-3">
                <span aria-hidden="true">{fact.emoji}</span>
                <span>{fact.text}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-16 flex items-center justify-center md:mt-20">
          {photos.map((photo, index) => (
            <Reveal
              key={photo.src}
              variant="image"
              index={index}
              className={`relative w-40 shrink-0 sm:w-52 md:w-64 ${photo.offset} ${photo.z} hover:z-30 ${
                index !== 0 ? "-ml-6 sm:-ml-8 md:-ml-10" : ""
              }`}
            >
              <div
                className={`transition duration-200 ease-out hover:-translate-y-2 ${photo.rotate}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  className="h-auto w-full"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
