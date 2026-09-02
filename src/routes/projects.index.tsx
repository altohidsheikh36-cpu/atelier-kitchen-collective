import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { ProjectCard } from "@/components/site/ProjectCard";
import { CTASection } from "@/components/site/CTASection";
import { projectFilters, projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Kitchen Projects & Portfolio — Dream Maker Kitchen Gallery" },
      {
        name: "description",
        content:
          "A portfolio of completed modular kitchens by Dream Maker Kitchen Gallery — apartments and villas in modern, contemporary and classic styles.",
      },
      { property: "og:title", content: "Kitchen Projects — Dream Maker Kitchen Gallery" },
      { property: "og:description", content: "Completed modular kitchen projects across apartments and villas." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [filter, setFilter] = useState<string>("All");

  const filtered = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.style === filter || p.propertyType === filter),
    [filter],
  );

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Kitchens in use, not in renders."
        intro="Each project below records the layout, the materials and the reasoning behind them."
      />

      <section className="shell">
        <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-x-7 gap-y-3 border-y border-border py-5">
          {projectFilters.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
              className={cn(
                "text-xs uppercase tracking-[0.2em] transition-colors",
                filter === f ? "text-accent" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      <section className="section shell pt-14">
        {filtered.length === 0 ? (
          <p className="body-lg">No projects in this category yet — more work is being photographed.</p>
        ) : (
          <div className="grid gap-12 md:grid-cols-2">
            {filtered.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        )}
      </section>

      <CTASection title="Want a kitchen like one of these?" body="Bring the reference and your floor plan — we'll adapt it to your home rather than repeat it." />
    </>
  );
}
