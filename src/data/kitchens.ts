import styleModern from "@/assets/style-modern.jpg";
import styleContemporary from "@/assets/style-contemporary.jpg";
import styleClassic from "@/assets/style-classic.jpg";

export type KitchenStyle = {
  slug: string;
  name: string;
  summary: string;
  detail: string;
  image: string;
  alt: string;
};

export const kitchenStyles: KitchenStyle[] = [
  {
    slug: "modern",
    name: "Modern",
    summary: "Handleless fronts, quiet surfaces, nothing that interrupts the line.",
    detail:
      "Flat matte or grained fronts, integrated appliances and continuous worktops. Designed for open-plan homes where the kitchen has to sit calmly beside the living space.",
    image: styleModern,
    alt: "Modern handleless kitchen in charcoal with a stone worktop",
  },
  {
    slug: "contemporary",
    name: "Contemporary",
    summary: "Warm timber, stone and metal held together with restraint.",
    detail:
      "Fluted or veneered islands, honed stone tops and brushed metal detailing. A softer, more tactile language for homes that want warmth without ornament.",
    image: styleContemporary,
    alt: "Contemporary kitchen with fluted oak island and marble backsplash",
  },
  {
    slug: "classic",
    name: "Classic",
    summary: "Shaker proportions and painted finishes, built with modern hardware.",
    detail:
      "Framed doors, considered mouldings and painted finishes — engineered with the same soft-close hardware and moisture-resistant cores as our modern ranges.",
    image: styleClassic,
    alt: "Classic shaker kitchen in soft stone green with a cream worktop",
  },
];

export const materials = [
  {
    name: "Natural veneer",
    note: "Book-matched walnut, oak and teak on moisture-resistant cores.",
  },
  { name: "Acrylic & matte laminate", note: "High-durability fronts with anti-fingerprint finishes." },
  { name: "Quartz & natural stone", note: "Engineered quartz, granite and honed marble worktops." },
  { name: "Glass & metal", note: "Lacquered glass shutters, aluminium profiles and brushed metal trims." },
  { name: "PU paint", note: "Hand-finished polyurethane in matte, satin or gloss." },
  { name: "Hardware", note: "Soft-close hinges, tandem drawers and corner solutions." },
] as const;

export const services = [
  {
    title: "Kitchen design",
    body: "Layout planning around how you actually cook — work triangle, storage counts and appliance placement resolved before anything is manufactured.",
  },
  {
    title: "Modular manufacturing",
    body: "Carcasses and shutters produced to millimetre drawings, so the fit on site matches the design on paper.",
  },
  {
    title: "Custom & bespoke units",
    body: "Tall pantries, appliance garages, breakfast counters and islands built to the dimensions of your home.",
  },
  {
    title: "Renovation",
    body: "Replacing an existing kitchen with minimum disruption — dismantling, civil coordination and refit.",
  },
  {
    title: "Storage solutions",
    body: "Pull-outs, cutlery organisers, corner carousels and pantry systems specified to what you store.",
  },
  {
    title: "Installation & after-sales",
    body: "Installation by our own team, followed by handover, alignment checks and continued service support.",
  },
] as const;

export const process = [
  { step: "01", title: "Consultation", body: "We understand the home, the household and how you cook." },
  { step: "02", title: "Site measurement", body: "Exact dimensions, services and plumbing points recorded." },
  { step: "03", title: "Design concept", body: "Layout options, elevations and 3D views for review." },
  { step: "04", title: "Materials", body: "Finishes, worktops and hardware selected in person." },
  { step: "05", title: "Final design", body: "Drawings frozen, costs confirmed, production scheduled." },
  { step: "06", title: "Manufacturing", body: "Units produced to the approved drawing set." },
  { step: "07", title: "Installation", body: "Fitted, levelled and aligned by our installation team." },
  { step: "08", title: "Handover", body: "Walkthrough, care guidance and after-sales support." },
] as const;
