import Image from "next/image";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";

type BeforeAfterImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

type BeforeAfterSide = {
  images: BeforeAfterImage[];
  description?: string;
  /**
   * Source screenshots don't always crop tightly to the actual UI card —
   * some canvases include baked-in annotation arrows/labels (or extra
   * margin) alongside the card. When one side's canvas has more of that
   * padding than the other, rendering both sides at the same container
   * width makes the padded side's real content look smaller.
   *
   * Set this to compensate: e.g. if the before canvas is 549px wide but
   * the actual card content in the after canvas only occupies ~71% of its
   * width (the rest being annotation whitespace), set the before side's
   * `contentScale` so its card renders at a matching visual size. 1 (the
   * default) means the canvas is already tightly cropped — no adjustment.
   */
  contentScale?: number;
};

type BeforeAfterPairProps = {
  /** `side-by-side` for a two-column comparison (e.g. two phone mockups);
   * `stacked` for full-width sections one after another (e.g. two desktop
   * screenshots, or an "after" side with multiple images). */
  layout?: "side-by-side" | "stacked";
  before: BeforeAfterSide;
  after: BeforeAfterSide;
  beforeLabel?: string;
  afterLabel?: string;
  /** Applied to the outermost wrapper — use for the gap above this block
   * (e.g. `mt-8` under a heading), since the component itself only owns
   * spacing between/within its before and after sides. */
  className?: string;
};

function SideImages({
  images,
  contentScale = 1,
  startIndex = 0,
}: {
  images: BeforeAfterImage[];
  contentScale?: number;
  startIndex?: number;
}) {
  return (
    <>
      {images.map((image, i) => (
        <Reveal
          key={image.src}
          variant="image"
          index={startIndex + i}
          className={i > 0 ? "mt-6" : undefined}
        >
          <Image
            src={image.src}
            width={image.width}
            height={image.height}
            alt={image.alt}
            className="mx-auto block h-auto"
            style={{ width: `${contentScale * 100}%` }}
          />
        </Reveal>
      ))}
    </>
  );
}

export default function BeforeAfterPair({
  layout = "side-by-side",
  before,
  after,
  beforeLabel = "Before",
  afterLabel = "After",
  className,
}: BeforeAfterPairProps) {
  if (layout === "side-by-side") {
    return (
      <div
        className={`grid grid-cols-1 gap-8 sm:grid-cols-2 ${className ?? ""}`}
      >
        <div>
          <Eyebrow variant="muted">{beforeLabel}</Eyebrow>
          {before.description && (
            <p className="mt-4 text-lg text-ink">{before.description}</p>
          )}
          <div className="mt-4">
            <SideImages images={before.images} contentScale={before.contentScale} />
          </div>
        </div>
        <div>
          <Eyebrow variant="muted">{afterLabel}</Eyebrow>
          {after.description && (
            <p className="mt-4 text-lg text-ink">{after.description}</p>
          )}
          <div className="mt-4">
            <SideImages
              images={after.images}
              contentScale={after.contentScale}
              startIndex={1}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <div>
        <Reveal variant="paragraph">
          <Eyebrow variant="muted">{beforeLabel}</Eyebrow>
          {before.description && (
            <p className="mt-4 text-lg text-ink">{before.description}</p>
          )}
        </Reveal>
        <div className="mt-6">
          <SideImages images={before.images} contentScale={before.contentScale} />
        </div>
      </div>
      <div className="mt-10">
        <Reveal variant="paragraph">
          <Eyebrow variant="muted">{afterLabel}</Eyebrow>
          {after.description && (
            <p className="mt-4 text-lg text-ink">{after.description}</p>
          )}
        </Reveal>
        <div className="mt-6">
          <SideImages
            images={after.images}
            contentScale={after.contentScale}
            startIndex={1}
          />
        </div>
      </div>
    </div>
  );
}
