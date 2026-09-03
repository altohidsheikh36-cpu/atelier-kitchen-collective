import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { nav, site, telLink, whatsappLink } from "@/data/site";
import { WhatsAppIcon } from "./WhatsAppIcon";
import logoImg from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-surface-deep text-background">
      <div className="shell grid gap-14 py-20 md:grid-cols-12 md:py-24">
        <div className="md:col-span-5">
          <div className="flex items-center gap-4">
            <img src={logoImg} alt="Dream Maker Kitchen Gallery Logo" className="h-14 w-14 rounded-full object-cover bg-background" />
            <p className="font-display text-3xl md:text-4xl">Dream Maker<br/><span className="text-xl">Kitchen Gallery</span></p>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-background/65">
            Designed, manufactured and installed modular kitchens — planned around how you cook and
            built to a drawing, not a guess.
          </p>
          <Link to="/consultation" className="btn-base btn-ghost-light mt-9">
            Book a Consultation
          </Link>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow text-background/45">Explore</p>
          <ul className="mt-6 space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="link-underline text-background/80">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/consultation" className="link-underline text-background/80">
                Book a Consultation
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="eyebrow text-background/45">Get in touch</p>
          <ul className="mt-6 space-y-3 text-sm text-background/80">
            <li>
              <a href={telLink} className="link-underline">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="link-underline inline-flex items-center gap-2">
                <WhatsAppIcon size={15} /> WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="link-underline">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.instagram} target="_blank" rel="noreferrer" className="link-underline inline-flex items-center gap-2">
                <Instagram size={15} /> Instagram
              </a>
            </li>
            <li className="pt-3 text-background/55">
              {site.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
              <a href={site.mapLink} target="_blank" rel="noreferrer" className="link-underline mt-2 inline-block text-background/80">
                Get Directions
              </a>
            </li>
            <li className="text-background/55">{site.hours}</li>
          </ul>
        </div>
      </div>

      <div className="shell flex flex-col gap-2 border-t border-background/15 py-7 text-xs text-background/45 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Dream Maker Kitchen Gallery. All rights reserved.</p>
        <p>Modular kitchen design, manufacturing and installation.</p>
      </div>
    </footer>
  );
}
