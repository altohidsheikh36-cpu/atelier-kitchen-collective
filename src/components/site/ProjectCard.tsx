import { Link } from "@tanstack/react-router";
import type { Project } from "@/data/projects";
import { Reveal } from "./Reveal";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <Reveal delay={(index % 3) * 90}>
      <Link
        to="/projects/$slug"
        params={{ slug: project.slug }}
        className="group block"
        aria-label={`View project: ${project.title}`}
      >
        <div className="media media-zoom aspect-[4/3]">
          <img src={project.hero} alt={project.alt} loading="lazy" width={1600} height={1100} />
        </div>
        <div className="mt-5 flex items-baseline justify-between gap-6">
          <h3 className="text-h3">{project.title}</h3>
          <span className="eyebrow shrink-0">{project.style}</span>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          {project.propertyType} · {project.layout}
        </p>
      </Link>
    </Reveal>
  );
}
