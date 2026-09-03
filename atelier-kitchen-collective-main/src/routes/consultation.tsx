import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { LeadForm } from "@/components/site/LeadForm";

export const Route = createFileRoute("/consultation")({
  head: () => ({
    meta: [
      { title: "Book a Kitchen Consultation — Dream Maker Kitchen Gallery" },
      {
        name: "description",
        content:
          "Book a modular kitchen consultation with Dream Maker Kitchen Gallery. Share your floor plan, requirements and timeline to get started.",
      },
      { property: "og:title", content: "Book a Consultation — Dream Maker Kitchen Gallery" },
      { property: "og:description", content: "Share your floor plan, requirements and timeline to start your kitchen." },
      { property: "og:url", content: "/consultation" },
    ],
    links: [{ rel: "canonical", href: "/consultation" }],
  }),
  component: ConsultationPage,
});

const steps = [
  { t: "We call you back", b: "Within one working day, to understand the home and the brief." },
  { t: "We measure", b: "A site visit records exact dimensions, plumbing and electrical points." },
  { t: "We design", b: "Layout options, elevations and 3D views, with costs against each choice." },
];

function ConsultationPage() {
  return (
    <>
      <PageHero
        eyebrow="Consultation"
        title="Let's design your kitchen."
        intro="A short form, then a real conversation. No obligation and no pressure to decide finishes on day one."
      />

      <section className="shell grid gap-14 pb-8 md:grid-cols-12 md:gap-16">
        <Reveal className="md:col-span-4">
          <p className="eyebrow">What happens next</p>
          <ol className="mt-8">
            {steps.map((s, i) => (
              <li key={s.t} className="border-t border-border py-6">
                <span className="font-display text-3xl text-stone">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="mt-3 font-display text-xl">{s.t}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.b}</p>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={100} className="md:col-span-8">
          <div className="border border-border bg-card p-6 md:p-10">
            <h2 className="text-h3">Your details</h2>
            <p className="mt-3 text-sm text-muted-foreground">Fields marked required help us prepare before we call.</p>
            <div className="mt-10">
              <LeadForm />
            </div>
          </div>
        </Reveal>
      </section>

      <div className="section" />
    </>
  );
}
