import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { LeadForm } from "@/components/site/LeadForm";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import showroom from "@/assets/showroom.jpg";
import { site, telLink, whatsappLink } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Showroom — Dream Maker Kitchen Gallery" },
      {
        name: "description",
        content:
          "Call, WhatsApp or email Dream Maker Kitchen Gallery, or visit the showroom to see kitchen finishes and hardware in person.",
      },
      { property: "og:title", content: "Contact — Dream Maker Kitchen Gallery" },
      { property: "og:description", content: "Call, WhatsApp, email or visit our kitchen showroom." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to a kitchen designer."
        intro="The quickest route is WhatsApp — send your floor plan and we'll respond with the first questions."
      />

      <section className="shell grid gap-14 pb-8 md:grid-cols-12 md:gap-16">
        <Reveal className="md:col-span-5">
          <dl className="divide-y divide-border border-y border-border">
            <div className="py-6">
              <dt className="eyebrow">Phone</dt>
              <dd className="mt-2">
                <a href={telLink} className="link-underline font-display text-2xl">
                  {site.phoneDisplay}
                </a>
              </dd>
            </div>
            <div className="py-6">
              <dt className="eyebrow">WhatsApp</dt>
              <dd className="mt-2">
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="link-underline font-display text-2xl inline-flex items-center gap-3">
                  <WhatsAppIcon size={22} /> Message us
                </a>
              </dd>
            </div>
            <div className="py-6">
              <dt className="eyebrow">Email</dt>
              <dd className="mt-2 text-sm text-muted-foreground">
                <a href={`mailto:${site.email}`} className="link-underline">
                  {site.email}
                </a>
              </dd>
            </div>
            <div className="py-6">
              <dt className="eyebrow">Showroom</dt>
              <dd className="mt-2 text-sm text-muted-foreground">
                {site.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </dd>
            </div>
            <div className="py-6">
              <dt className="eyebrow">Hours</dt>
              <dd className="mt-2 text-sm text-muted-foreground">{site.hours}</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={100} className="md:col-span-7">
          <h2 className="text-h3">Send an enquiry</h2>
          <div className="mt-8">
            <LeadForm variant="compact" />
          </div>
        </Reveal>
      </section>

      <section className="section shell">
        <Reveal className="media aspect-[16/9]">
          <img src={showroom} alt="Dream Maker Kitchen Gallery showroom interior" loading="lazy" width={1600} height={1000} />
        </Reveal>
        <Reveal delay={80} className="mt-6 text-sm text-muted-foreground">
          Showroom photography and map location will be updated once the address is confirmed.
        </Reveal>
      </section>
    </>
  );
}
