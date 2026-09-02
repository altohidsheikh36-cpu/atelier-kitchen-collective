import { createFileRoute } from "@tanstack/react-router";
import craft from "@/assets/craft.jpg";
import showroom from "@/assets/showroom.jpg";
import materialDetail from "@/assets/material-detail.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dream Maker Kitchen Gallery — Our Approach to Kitchens" },
      {
        name: "description",
        content:
          "How Dream Maker Kitchen Gallery designs and builds modular kitchens: layout-led planning, honest materials, in-house installation.",
      },
      { property: "og:title", content: "About — Dream Maker Kitchen Gallery" },
      { property: "og:description", content: "Layout-led planning, honest materials and in-house installation." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { t: "Plan before finish", b: "A beautiful finish on a bad layout is still a bad kitchen. The plan is settled first." },
  { t: "Say what's true", b: "We quote what the kitchen needs and explain what each choice changes." },
  { t: "Build to the drawing", b: "The approved drawing set is the contract, on site and in the workshop." },
  { t: "Stay after handover", b: "Alignment, service and support continue once the kitchen is in use." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="We build kitchens the way we'd want ours built."
        intro="Dream Maker Kitchen Gallery is a modular kitchen studio. We design, manufacture and install — the same team from the first measurement to the final handover."
      />

      <section className="shell">
        <Reveal className="media aspect-[16/9]">
          <img src={showroom} alt="Kitchen showroom interior with display bays" loading="lazy" width={1600} height={1000} />
        </Reveal>
      </section>

      <section className="section shell">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-5">
            <p className="eyebrow">Philosophy</p>
            <h2 className="text-h2 mt-6">Storage is design.</h2>
          </Reveal>
          <Reveal delay={100} className="md:col-span-7">
            <p className="text-lg leading-relaxed">
              Most kitchens fail quietly: the bin is in the wrong place, the tall unit blocks the light,
              the drawer beside the hob holds the wrong things. We start by counting what a household
              actually stores and how it moves between sink, hob and fridge.
            </p>
            <p className="body-lg mt-6">
              Once that is resolved, finishes are a pleasure rather than a rescue. It is why our
              kitchens look calm — the decisions were made in the right order.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-ink text-background">
        <div className="shell grid gap-12 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-5">
            <div className="media aspect-[4/5]">
              <img src={craft} alt="Craftsman fitting drawer hardware in a kitchen cabinet" loading="lazy" width={1400} height={1750} />
            </div>
          </Reveal>
          <div className="md:col-span-7">
            <Reveal>
              <p className="eyebrow text-background/45">What we hold to</p>
              <h2 className="text-h2 mt-6">Four working rules.</h2>
            </Reveal>
            <ul className="mt-10">
              {values.map((v, i) => (
                <Reveal as="li" key={v.t} delay={i * 70} className="border-b border-background/15 py-7">
                  <h3 className="font-display text-2xl">{v.t}</h3>
                  <p className="mt-2 max-w-lg text-sm text-background/60">{v.b}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section shell grid gap-12 md:grid-cols-12 md:items-center md:gap-16">
        <Reveal className="md:col-span-6">
          <div className="media aspect-[7/5]">
            <img src={materialDetail} alt="Detail of stone worktop, timber veneer and brass profile" loading="lazy" width={1400} height={1000} />
          </div>
        </Reveal>
        <Reveal delay={100} className="md:col-span-6">
          <p className="eyebrow">The team</p>
          <h2 className="text-h2 mt-6">Designers, makers, installers.</h2>
          <p className="body-lg mt-6">
            Design, production and installation sit under one roof. Team profiles and studio credentials
            will be published here once confirmed.
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Placeholder — to be replaced with verified team details
          </p>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
