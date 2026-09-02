import { createFileRoute, Link } from "@tanstack/react-router";
import heroKitchen from "@/assets/hero-kitchen.jpg";
import craft from "@/assets/craft.jpg";
import materialDetail from "@/assets/material-detail.jpg";
import showroom from "@/assets/showroom.jpg";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTASection } from "@/components/site/CTASection";
import { ProjectCard } from "@/components/site/ProjectCard";
import { kitchenStyles, materials, process } from "@/data/kitchens";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dream Maker Kitchen Gallery — Premium Modular Kitchens" },
      {
        name: "description",
        content:
          "Premium modular kitchens designed, manufactured and installed by Dream Maker Kitchen Gallery. Explore kitchen styles, projects and book a consultation.",
      },
      { property: "og:title", content: "Dream Maker Kitchen Gallery — Premium Modular Kitchens" },
      {
        property: "og:description",
        content: "Considered layouts, honest materials and precise detailing for modular kitchens.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* 01 — HERO */}
      <section className="relative min-h-[92svh] w-full">
        <div className="media absolute inset-0">
          <img
            src={heroKitchen}
            alt="Premium modular kitchen with ivory cabinetry, walnut tall units and a stone island"
            width={1920}
            height={1200}
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/25 to-ink/45" />
        </div>

        <div className="shell relative flex min-h-[92svh] flex-col justify-end pt-32 pb-16 md:pb-24">
          <div className="max-w-4xl text-background">
            <p className="eyebrow text-background/65">Modular kitchens · Design, manufacture, install</p>
            <h1 className="text-display mt-7">
              A kitchen drawn
              <br />
              around your day.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-background/80">
              Dream Maker Kitchen Gallery plans every kitchen from the way it will actually be used —
              then builds it to the millimetre.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/consultation" className="btn-base bg-background text-ink hover:bg-accent hover:text-background">
                Book a Consultation
              </Link>
              <Link to="/kitchens" className="btn-base btn-ghost-light">
                Explore Our Kitchens
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — BRAND INTRODUCTION */}
      <section className="section shell">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-5">
            <p className="eyebrow">Who we are</p>
            <h2 className="text-h2 mt-6">
              A kitchen studio, not a catalogue.
            </h2>
          </Reveal>
          <Reveal delay={120} className="md:col-span-7 md:pt-3">
            <p className="text-lg leading-relaxed">
              We design and build modular kitchens for homes where the kitchen is the centre of the
              day. Every project begins with the layout — how you move, where you store, what you cook —
              and only then moves to finishes.
            </p>
            <p className="body-lg mt-6">
              Units are manufactured to approved drawings and installed by our own team, so what is
              agreed on paper is what arrives in your home. Nothing is left to be adjusted on site.
            </p>
            <Link to="/about" className="link-underline mt-8 inline-block text-xs uppercase tracking-[0.2em]">
              Our approach
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 03 — SIGNATURE KITCHENS */}
      <section className="section rule">
        <div className="shell">
          <SectionHeading
            eyebrow="Signature kitchens"
            title="Three languages, one standard of build."
            intro="Choose the register that suits your home. The engineering underneath — cores, hardware, tolerances — stays the same."
          />
          <div className="mt-14 grid gap-8 md:mt-20 md:grid-cols-3">
            {kitchenStyles.map((style, i) => (
              <Reveal key={style.slug} delay={i * 100}>
                <Link to="/kitchens" hash={style.slug} className="group block">
                  <div className="media media-zoom aspect-[4/5]">
                    <img src={style.image} alt={style.alt} loading="lazy" width={1200} height={1500} />
                  </div>
                  <div className="mt-5 flex items-baseline gap-4">
                    <span className="eyebrow">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="text-h3">{style.name}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{style.summary}</p>
                  <span className="link-underline mt-5 inline-block text-xs uppercase tracking-[0.2em]">
                    Explore
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — FEATURED PROJECTS */}
      <section className="section bg-surface">
        <div className="shell">
          <SectionHeading
            eyebrow="Selected work"
            title="Kitchens we have delivered."
            aside={
              <Link to="/projects" className="link-underline text-xs uppercase tracking-[0.2em]">
                View all projects
              </Link>
            }
          />
        </div>

        <div className="mt-14 md:mt-20">
          <Reveal className="shell">
            <Link
              to="/projects/$slug"
              params={{ slug: projects[0].slug }}
              className="group grid gap-8 md:grid-cols-12 md:items-end"
            >
              <div className="media media-zoom aspect-[16/10] md:col-span-9">
                <img src={projects[0].hero} alt={projects[0].alt} loading="lazy" width={1600} height={1100} />
              </div>
              <div className="md:col-span-3">
                <p className="eyebrow">{projects[0].propertyType} · {projects[0].year}</p>
                <h3 className="text-h3 mt-4">{projects[0].title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{projects[0].intro}</p>
              </div>
            </Link>
          </Reveal>

          <div className="shell mt-14 grid gap-10 md:mt-20 md:grid-cols-2 md:gap-12">
            {projects.slice(1, 3).map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 05 — CRAFTSMANSHIP */}
      <section className="section shell">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-5">
            <div className="media aspect-[4/5]">
              <img src={craft} alt="Craftsman fitting a soft-close drawer inside a kitchen cabinet" loading="lazy" width={1400} height={1750} />
            </div>
          </Reveal>
          <div className="md:col-span-7 md:pl-6">
            <Reveal>
              <p className="eyebrow">Craft</p>
              <h2 className="text-h2 mt-6">The detail you only notice after a year.</h2>
            </Reveal>
            <div className="mt-12 grid gap-px bg-border sm:grid-cols-2">
              {[
                { t: "Drawings first", b: "Elevations and sections approved before a single panel is cut." },
                { t: "Moisture-resistant cores", b: "Selected for Indian kitchens and specified per zone." },
                { t: "Hardware that lasts", b: "Soft-close hinges and tandem runners on every unit." },
                { t: "Storage by count", b: "Planned around your utensils, not a standard module list." },
                { t: "Edge and joint control", b: "Sealed edges, aligned reveals, consistent shadow gaps." },
                { t: "Installed by us", b: "One team from drawing to handover — no handoff gaps." },
              ].map((item, i) => (
                <Reveal key={item.t} delay={i * 60} className="bg-background p-7">
                  <h3 className="font-display text-xl">{item.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.b}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 06 — MATERIALS */}
      <section className="section bg-ink text-background">
        <div className="shell grid gap-12 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-6">
            <p className="eyebrow text-background/45">Materials & finishes</p>
            <h2 className="text-h2 mt-6">Chosen in the hand, not from a screen.</h2>
            <p className="mt-7 max-w-md text-sm leading-relaxed text-background/65">
              Samples are reviewed together against your light, your flooring and your daily wear —
              before anything is confirmed.
            </p>
            <div className="media mt-10 aspect-[7/5]">
              <img src={materialDetail} alt="Close-up of stone worktop meeting timber veneer and a brass profile" loading="lazy" width={1400} height={1000} />
            </div>
          </Reveal>
          <div className="md:col-span-6 md:pt-16">
            <ul>
              {materials.map((m, i) => (
                <Reveal as="li" key={m.name} delay={i * 50} className="border-b border-background/15 py-6">
                  <div className="flex items-baseline justify-between gap-6">
                    <h3 className="font-display text-2xl">{m.name}</h3>
                    <span className="eyebrow text-background/35">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <p className="mt-2 max-w-md text-sm text-background/60">{m.note}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 07 — PROCESS */}
      <section className="section shell">
        <SectionHeading
          eyebrow="Our process"
          title="Eight steps, no surprises."
          intro="From the first conversation to handover, you always know what happens next and who is responsible for it."
        />
        <ol className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <Reveal as="li" key={p.step} delay={(i % 4) * 70} className="bg-background p-7">
              <span className="font-display text-4xl text-stone">{p.step}</span>
              <h3 className="mt-4 font-display text-xl">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* 08 — SHOWROOM */}
      <section className="section rule">
        <div className="shell grid gap-10 md:grid-cols-12 md:items-center md:gap-16">
          <Reveal className="md:col-span-7">
            <div className="media aspect-[8/5]">
              <img src={showroom} alt="Kitchen showroom with display bays and a material sample wall" loading="lazy" width={1600} height={1000} />
            </div>
          </Reveal>
          <Reveal delay={120} className="md:col-span-5">
            <p className="eyebrow">Visit us</p>
            <h2 className="text-h2 mt-6">See the finishes in person.</h2>
            <p className="body-lg mt-6">
              Open drawers, feel the shutter finishes, compare worktops side by side. Appointments are
              recommended so a designer can sit with you.
            </p>
            <dl className="mt-8 space-y-3 text-sm">
              <div>
                <dt className="eyebrow">Address</dt>
                <dd className="mt-1 text-muted-foreground">{site.addressLines.join(", ")}</dd>
              </div>
              <div>
                <dt className="eyebrow">Hours</dt>
                <dd className="mt-1 text-muted-foreground">{site.hours}</dd>
              </div>
            </dl>
            <Link to="/contact" className="btn-base btn-solid mt-9">
              Visit Our Showroom
            </Link>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
