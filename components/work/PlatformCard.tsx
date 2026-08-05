import Image from "next/image";
import Link from "next/link";
import Tag from "@/components/ui/Tag";

type PlatformCardProps = {
  number: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  title: string;
  description: string;
  tags: string[];
  href: string;
  showImageBorder?: boolean;
};

export default function PlatformCard({
  number,
  image,
  imageWidth,
  imageHeight,
  title,
  description,
  tags,
  href,
  showImageBorder = true,
}: PlatformCardProps) {
  return (
    <Link href={href} className="group block p-8">
      <div
        className={`overflow-hidden rounded-lg ${showImageBorder ? "border border-border" : ""}`}
      >
        <Image
          src={image}
          alt={title}
          width={imageWidth}
          height={imageHeight}
          className="w-full object-cover"
        />
      </div>

      <p className="mt-6 text-sm text-muted">{number}</p>
      <h3 className="mt-2 text-lg font-bold uppercase tracking-tight text-ink">
        {title}
      </h3>
      <p className="mt-3 text-body">{description}</p>

      <div className="mt-5 flex flex-wrap gap-2.5">
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      <span className="mt-6 block text-center font-semibold text-teal transition-opacity duration-200 group-hover:opacity-80">
        View product
      </span>
    </Link>
  );
}
