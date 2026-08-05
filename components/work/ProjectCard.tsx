import Image from "next/image";
import Link from "next/link";
import Tag from "@/components/ui/Tag";
import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
  size?: "large" | "small";
};

export default function ProjectCard({ project, size = "large" }: ProjectCardProps) {
  const titleSize =
    size === "large" ? "text-xl md:text-2xl" : "text-lg md:text-xl";

  return (
    <Link
      href={project.href}
      className="group block p-6 transition-colors duration-200 hover:bg-surface/60 md:p-10"
    >
      <div className="overflow-hidden rounded-xl bg-border/30">
        <Image
          src={project.image}
          alt={project.title}
          width={project.imageWidth}
          height={project.imageHeight}
          className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>

      <div className="mt-6">
        {project.number && (
          <p className="text-[13px] font-bold tracking-[0.1em] text-teal">
            {project.number}
          </p>
        )}
        <h3
          className={`mt-2 font-heading font-bold uppercase tracking-tight text-ink ${titleSize}`}
        >
          {project.title}
        </h3>
        <p className="mt-3 max-w-md text-base leading-relaxed text-body">
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2.5">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </Link>
  );
}
