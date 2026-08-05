import ProjectCard from "@/components/work/ProjectCard";
import type { Project } from "@/lib/projects";

type ProjectGridProps = {
  projects: Project[];
  columns: 2 | 3;
  size?: "large" | "small";
};

export default function ProjectGrid({
  projects,
  columns,
  size = "large",
}: ProjectGridProps) {
  const colsClass = columns === 2 ? "md:grid-cols-2" : "md:grid-cols-3";
  const rowCount = Math.ceil(projects.length / columns);

  return (
    <div className="overflow-hidden rounded-xl2 border border-border bg-bg">
      <div className={`grid grid-cols-1 ${colsClass}`}>
        {projects.map((project, index) => {
          const isLastOverall = index === projects.length - 1;
          const currentRow = Math.floor(index / columns);
          const currentCol = index % columns;
          const isLastRowDesktop = currentRow === rowCount - 1;
          const isLastColDesktop = currentCol === columns - 1 || isLastOverall;

          const cellClasses = [
            !isLastOverall ? "border-b" : "",
            !isLastOverall && isLastRowDesktop ? "md:border-b-0" : "",
            !isLastColDesktop ? "md:border-r" : "",
            "border-border",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <div key={project.title} className={cellClasses}>
              <ProjectCard project={project} size={size} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
