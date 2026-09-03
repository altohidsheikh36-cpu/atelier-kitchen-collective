// Floating click-to-chat WhatsApp button — fixed to the viewport, opens a
// direct wa.me chat to the brand number. Sits above the mobile CTA bar on
// small screens and floats at bottom-right on desktop.

import { useState } from "react";
import { whatsappLink, site } from "@/data/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function FloatingWhatsApp() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label={`Chat with ${site.name} on WhatsApp`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group fixed bottom-20 right-4 z-50 flex items-center gap-3 rounded-full bg-[#25D366] py-3.5 pl-3.5 pr-3.5 shadow-lg shadow-black/25 transition-all duration-300 ease-out hover:pr-5 lg:bottom-6 lg:right-6"
    >
      <span className="flex h-7 w-7 shrink-0 items-center justify-center text-white">
        <WhatsAppIcon size={28} title={`Message ${site.name} on WhatsApp`} />
      </span>
      <span
        className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium text-white opacity-0 transition-all duration-300 ease-out group-hover:max-w-[12rem] group-hover:opacity-100"
        aria-hidden={!hovered}
      >
        Chat on WhatsApp
      </span>
    </a>
  );
}
