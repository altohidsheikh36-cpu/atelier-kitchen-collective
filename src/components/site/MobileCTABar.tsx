import { Link } from "@tanstack/react-router";
import { Phone, CalendarRange } from "lucide-react";
import { telLink, whatsappLink } from "@/data/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function MobileCTABar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-border bg-background/95 backdrop-blur lg:hidden">
      <a
        href={telLink}
        className="flex items-center justify-center gap-2 py-4 text-[0.68rem] uppercase tracking-[0.16em]"
      >
        <Phone size={14} strokeWidth={1.5} /> Call
      </a>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center gap-2 border-x border-border py-4 text-[0.68rem] uppercase tracking-[0.16em]"
      >
        <WhatsAppIcon size={14} /> WhatsApp
      </a>
      <Link
        to="/consultation"
        className="flex items-center justify-center gap-2 bg-ink py-4 text-[0.68rem] uppercase tracking-[0.16em] text-background"
      >
        <CalendarRange size={14} strokeWidth={1.5} /> Consult
      </Link>
    </div>
  );
}
