import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site, telLink, whatsappLink } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled || open ? "bg-background/95 backdrop-blur border-b border-border" : "bg-transparent",
      )}
    >
      <div className="shell flex h-[72px] items-center justify-between md:h-[88px]">
        <Link to="/" className="group flex flex-col leading-none" onClick={() => setOpen(false)}>
          <span className="font-display text-lg tracking-tight md:text-xl">Dream Maker</span>
          <span className="eyebrow mt-1 text-[0.58rem] md:text-[0.62rem]">Kitchen Gallery</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-10 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="link-underline text-xs uppercase tracking-[0.2em]"
              activeProps={{ className: "text-accent" }}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/consultation" className="btn-base btn-solid">
            Book a Consultation
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center border border-border lg:hidden"
        >
          {open ? <X size={18} strokeWidth={1.4} /> : <Menu size={18} strokeWidth={1.4} />}
        </button>
      </div>

      {open ? (
        <div className="fixed inset-x-0 top-[72px] bottom-0 z-40 overflow-y-auto bg-background lg:hidden">
          <nav aria-label="Mobile" className="shell flex flex-col pt-8 pb-16">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-border py-5 font-display text-3xl"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/consultation"
              onClick={() => setOpen(false)}
              className="btn-base btn-solid mt-10 w-full"
            >
              Book a Consultation
            </Link>
            <div className="mt-10 grid gap-2 text-sm text-muted-foreground">
              <a href={telLink} className="link-underline">
                {site.phoneDisplay}
              </a>
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="link-underline">
                WhatsApp us
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
