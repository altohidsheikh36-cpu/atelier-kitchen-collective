import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { kitchenStyles, materials } from "@/data/kitchens";

export const Route = createFileRoute("/kitchens")({
  head: () => ({
    meta: [
      { title: "Modular Kitchen Designs & Styles — Dream Maker Kitchen Gallery" },
      {
        name: "description",
        content:
          "Explore modern, contemporary and classic modular kitchen designs, layouts, finishes and customisation options from Dream Maker Kitchen Gallery.",
      },
      { property: "og:title", content: "Modular Kitchen Designs & Styles — Dream Maker Kitchen Gallery" },
      {
        property: "og:description",
        content: "Modern, contemporary and classic modular kitchens with layouts, finishes and customisation.",
      },
      { property: "og:url", content: "/kitchens" },
    ],
    links: [{ rel: "canonical", href: "/kitchens" }],
  }),
  component: KitchensPage,
});

const layouts = [
  { name: "Straight", note: "One wall. Efficient for compact apartments." },
  { name: "L-shape", note: "Two walls, a natural work triangle." },
  { name: "Parallel", note: "Two runs facing each other for serious cooking." },
  { name: "U-shape", note: "Maximum worktop and storage in one room." },
  { name: "Island", note: "Adds prep, seating and separation in open plans." },
  { name: "Peninsula", note: "Island benefits where floor space is tight." },
];

function KitchensPage() {
  return (
    <>
      <PageHero
        eyebrow="Kitchens"
        title="Kitchen designs built around layout first."
        intro="Style is the last decision, not the first. We resolve the plan, the storage and the appliance positions — then dress it in the language you prefer."
      />

      {kitchenStyles.map((style, i) => (
        <section key={style.slug} id={style.slug} className="section rule scroll-mt-28">
          <div className="shell grid gap-10 md:grid-cols-12 md:items-center md:gap-16">
            <Reveal className={i % 2 === 0 ? "md:col-span-6" : "md:col-span-6 md:order-2"}>
              <div className="media aspect-[4/5]">
                <img src={style.image} alt={style.alt} loading="lazy" width={1200} height={1500} />
              </div>
            </Reveal>
            <Reveal delay={100} className={i % 2 === 0 ? "md:col-span-6" : "md:col-span-6 md:order-1"}>
              <p className="eyebrow">{String(i + 1).padStart(2, "0")} — Style</p>
              <h2 className="text-h2 mt-5">{style.name} kitchens</h2>
              <p className="body-lg mt-6">{style.detail}</p>
              <Link to="/projects" className="link-underline mt-8 inline-block text-xs uppercase tracking-[0.2em]">
                See projects
              </Link>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="section bg-surface">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">Layouts</p>
            <h2 className="text-h2 mt-6 max-w-2xl">Six plans that cover most homes.</h2>
          </Reveal>
          <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {layouts.map((l, i) => (
              <Reveal key={l.name} delay={(i % 3) * 70} className="bg-surface p-7">
                <h3 className="font-display text-2xl">{l.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{l.note}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell">
        <Reveal>
          <p className="eyebrow">Finishes</p>
          <h2 className="text-h2 mt-6 max-w-2xl">What your kitchen can be made of.</h2>
        </Reveal>
        <ul className="mt-12 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {materials.map((m, i) => (
            <Reveal as="li" key={m.name} delay={(i % 3) * 60} className="border-t border-border pt-5">
              <h3 className="font-display text-xl">{m.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.note}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      <CTASection title="Not sure which layout your home allows?" body="Send us the floor plan. We'll tell you what fits and what it will cost to build properly." />
    </>
  );
}
