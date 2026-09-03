import { useState, type FormEvent } from "react";
import { site, whatsappLink } from "@/data/site";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "./WhatsAppIcon";

const fieldClass =
  "w-full border-b border-border bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent";

const labelClass = "eyebrow block text-[0.62rem]";

export function LeadForm({ variant = "full" }: { variant?: "full" | "compact" }) {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  // No backend connected yet: the enquiry is handed off to WhatsApp so no lead is lost.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [...data.entries()]
      .filter(([, value]) => String(value).trim().length > 0)
      .map(([key, value]) => `${key}: ${value}`);
    const message = encodeURIComponent(
      `New kitchen enquiry\n\n${lines.join("\n")}`,
    );
    setStatus("sent");
    window.open(`https://wa.me/${site.whatsapp}?text=${message}`, "_blank", "noopener");
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-8 sm:grid-cols-2">
      <div className="sm:col-span-1">
        <label className={labelClass} htmlFor="name">
          Name
        </label>
        <input id="name" name="Name" required autoComplete="name" className={fieldClass} placeholder="Your full name" />
      </div>
      <div className="sm:col-span-1">
        <label className={labelClass} htmlFor="phone">
          Phone
        </label>
        <input
          id="phone"
          name="Phone"
          required
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          className={fieldClass}
          placeholder="10-digit mobile number"
        />
      </div>
      <div className="sm:col-span-1">
        <label className={labelClass} htmlFor="email">
          Email
        </label>
        <input id="email" name="Email" type="email" autoComplete="email" className={fieldClass} placeholder="you@email.com" />
      </div>
      <div className="sm:col-span-1">
        <label className={labelClass} htmlFor="city">
          City / Location
        </label>
        <input id="city" name="City" className={fieldClass} placeholder="Where is the kitchen?" />
      </div>

      {variant === "full" ? (
        <>
          <div className="sm:col-span-1">
            <label className={labelClass} htmlFor="property">
              Property type
            </label>
            <select id="property" name="Property type" className={cn(fieldClass, "appearance-none")} defaultValue="">
              <option value="" disabled>
                Select
              </option>
              <option>Apartment</option>
              <option>Villa / Independent house</option>
              <option>New construction</option>
              <option>Renovation</option>
            </select>
          </div>
          <div className="sm:col-span-1">
            <label className={labelClass} htmlFor="timeline">
              Approximate timeline
            </label>
            <select id="timeline" name="Timeline" className={cn(fieldClass, "appearance-none")} defaultValue="">
              <option value="" disabled>
                Select
              </option>
              <option>Within 1 month</option>
              <option>1 – 3 months</option>
              <option>3 – 6 months</option>
              <option>Still exploring</option>
            </select>
          </div>
          <div className="sm:col-span-1">
            <label className={labelClass} htmlFor="mode">
              Preferred consultation
            </label>
            <select id="mode" name="Consultation mode" className={cn(fieldClass, "appearance-none")} defaultValue="">
              <option value="" disabled>
                Select
              </option>
              <option>Showroom visit</option>
              <option>Site visit</option>
              <option>Phone / WhatsApp</option>
              <option>Video call</option>
            </select>
          </div>
        </>
      ) : null}

      <div className="sm:col-span-1">
        <label className={labelClass} htmlFor="requirement">
          Kitchen requirement
        </label>
        <input
          id="requirement"
          name="Requirement"
          className={fieldClass}
          placeholder="e.g. L-shape modular kitchen with island"
        />
      </div>

      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="message">
          Message
        </label>
        <textarea id="message" name="Message" rows={3} className={fieldClass} placeholder="Anything else we should know?" />
      </div>

      <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
        <button type="submit" className="btn-base btn-solid">
          Book My Consultation
        </button>
        <a href={whatsappLink} target="_blank" rel="noreferrer" className="link-underline inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em]">
          <WhatsAppIcon size={15} /> Or message us on WhatsApp
        </a>
      </div>

      <p aria-live="polite" className="sm:col-span-2 text-sm text-muted-foreground">
        {status === "sent"
          ? "Thank you — your enquiry has been prepared in WhatsApp. Send it and we'll respond within one working day."
          : "We reply within one working day with next steps and a suggested consultation slot."}
      </p>
    </form>
  );
}
