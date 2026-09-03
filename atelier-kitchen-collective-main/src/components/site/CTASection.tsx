import { Link } from "@tanstack/react-router";
import { whatsappLink } from "@/data/site";
import { Reveal } from "./Reveal";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function CTASection({
  title = "Let's design a kitchen that feels unmistakably yours.",
  body = "Share your floor plan, your habits and your timeline. We'll come back with a layout worth building.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-ink text-background">
      <div className="shell section">
        <Reveal className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="eyebrow text-background/45">Start here</p>
            <h2 className="text-h1 mt-6">{title}</h2>
          </div>
          <div className="md:col-span-5">
            <p className="max-w-sm text-sm leading-relaxed text-background/65">{body}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/consultation" className="btn-base bg-background text-ink hover:bg-accent hover:text-background">
                Book a Consultation
              </Link>
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn-base btn-ghost-light">
                <WhatsAppIcon size={16} /> WhatsApp Us
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
