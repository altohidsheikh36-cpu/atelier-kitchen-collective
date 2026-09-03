import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { ProjectCard } from "@/components/site/ProjectCard";
import { getProject, projects } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project unavailable — Dream Maker Kitchen Gallery" }, { name: "robots", content: "noindex" }],
      };
    }
    const { project } = loaderData;
    return {
      meta: [
        { title: `${project.title} — Kitchen Project | Dream Maker Kitchen Gallery` },
        { name: "description", content: project.intro },
        { property: "og:title", content: `${project.title} — Dream Maker Kitchen Gallery` },
        { property: "og:description", content: project.intro },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/projects/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/projects/${params.slug}` }],
    };
  },
  notFoundComponent: ProjectNotFound,
  component: ProjectDetail,
});

function ProjectNotFound() {
  return (
    <section className="shell section pt-40">
      <h1 className="text-h1">We couldn't find that project.</h1>
      <Link to="/projects" className="link-underline mt-8 inline-block text-xs uppercase tracking-[0.2em]">
        Back to all projects
      </Link>
    </section>
  );
}

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <>
      <section className="shell pt-32 md:pt-44">
        <Reveal>
          <p className="eyebrow">
            {project.style} · {project.propertyType} · {project.year}
          </p>
          <h1 className="text-h1 mt-6 max-w-4xl">{project.title}</h1>
          <p className="body-lg mt-8 max-w-2xl">{project.intro}</p>
        </Reveal>
      </section>

      <section className="shell mt-12 md:mt-16">
        <Reveal className="media aspect-[16/10]">
          <img src={project.hero} alt={project.alt} width={1600} height={1100} />
        </Reveal>
      </section>

      <section className="section shell grid gap-12 md:grid-cols-12 md:gap-16">
        <Reveal className="md:col-span-7">
          <p className="eyebrow">Design concept</p>
          <p className="mt-6 text-lg leading-relaxed">{project.concept}</p>
        </Reveal>
        <Reveal delay={100} className="md:col-span-5">
          <dl className="divide-y divide-border border-y border-border">
            {[
              ["Location", project.location],
              ["Property", project.propertyType],
              ["Layout", project.layout],
              ["Style", project.style],
              ["Hardware", project.hardware],
              ["Materials", project.materials.join(", ")],
            ].map(([label, value]) => (
              <div key={label} className="grid grid-cols-3 gap-4 py-4">
                <dt className="eyebrow">{label}</dt>
                <dd className="col-span-2 text-sm text-muted-foreground">{value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      <section className="shell grid gap-6 md:grid-cols-2">
        {project.gallery.map((image, i) => (
          <Reveal
            key={`${image.src}-${i}`}
            delay={(i % 2) * 90}
            className={i === 0 ? "md:col-span-2" : ""}
          >
            <div className={`media ${i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
              <img src={image.src} alt={image.alt} loading="lazy" width={1600} height={1100} />
            </div>
          </Reveal>
        ))}
      </section>

      <section className="section shell">
        <Reveal>
          <p className="eyebrow">Key features</p>
          <ul className="mt-8 grid gap-px bg-border sm:grid-cols-2">
            {project.features.map((f) => (
              <li key={f} className="bg-background p-6 font-display text-xl">
                {f}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="section bg-surface">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">More work</p>
            <h2 className="text-h2 mt-6">Related projects</h2>
          </Reveal>
          <div className="mt-12 grid gap-12 md:grid-cols-2">
            {related.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
