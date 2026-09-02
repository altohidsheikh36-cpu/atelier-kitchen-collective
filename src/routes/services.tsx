import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { process, services } from "@/data/kitchens";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Kitchen Design, Manufacturing & Installation — Dream Maker Kitchen Gallery" },
      {
        name: "description",
        content:
          "Kitchen design, modular manufacturing, custom units, renovation, storage solutions, installation and after-sales support.",
      },
      { property: "og:title", content: "Services — Dream Maker Kitchen Gallery" },
      {
        property: "og:description",
        content: "Design, manufacturing, custom units, renovation, storage, installation and after-sales support.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything between the first sketch and the last alignment."
        intro="We take responsibility for the whole kitchen — design, manufacturing and installation — so there is one team accountable for the result."
      />

      <section className="shell pb-8">
        <ol>
          {services.map((s, i) => (
            <Reveal as="li" key={s.title} delay={(i % 3) * 60} className="border-t border-border py-9 md:py-12">
              <div className="grid gap-4 md:grid-cols-12 md:gap-10">
                <span className="eyebrow md:col-span-2">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="text-h3 md:col-span-4">{s.title}</h2>
                <p className="body-lg md:col-span-6">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="section bg-surface">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">How we work</p>
            <h2 className="text-h2 mt-6 max-w-2xl">The process, step by step.</h2>
          </Reveal>
          <ol className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal as="li" key={p.step} delay={(i % 4) * 60} className="bg-surface p-7">
                <span className="font-display text-4xl text-stone">{p.step}</span>
                <h3 className="mt-4 font-display text-xl">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CTASection title="Tell us what stage you're at." body="Whether it's a bare shell or a kitchen you want replaced, the first conversation is the same." />
    </>
  );
}
