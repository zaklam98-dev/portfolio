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
}: PlatformCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col p-8 transition-colors duration-200 hover:bg-surface/60"
    >
      <div className="overflow-hidden rounded-lg border border-border">
        <Image
          src={image}
          alt={title}
          width={imageWidth}
          height={imageHeight}
          className="w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>

      <p className="mt-6 text-sm text-muted">{number}</p>
      <h3 className="mt-2 text-lg font-bold uppercase tracking-tight text-ink">
        {title}
      </h3>
      <p className="mt-3 text-body">{description}</p>

      <div className="mt-auto pt-5">
        <div className="flex flex-wrap gap-2.5">
          {tags.map((tag) => (
            <Tag key={tag} variant="outline">
              {tag}
            </Tag>
          ))}
        </div>

        <span className="mt-6 block text-center font-semibold text-teal transition-opacity duration-200 group-hover:opacity-80">
          View product
        </span>
      </div>
    </Link>
  );
}
