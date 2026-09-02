import project01 from "@/assets/project-01.jpg";
import project02 from "@/assets/project-02.jpg";
import project03 from "@/assets/project-03.jpg";
import materialDetail from "@/assets/material-detail.jpg";
import heroKitchen from "@/assets/hero-kitchen.jpg";

export type Project = {
  slug: string;
  title: string;
  location: string; // PLACEHOLDER until confirmed
  propertyType: "Apartment" | "Villa" | "Residence";
  style: "Modern" | "Contemporary" | "Classic";
  layout: string;
  year: string;
  intro: string;
  concept: string;
  materials: string[];
  hardware: string;
  features: string[];
  hero: string;
  alt: string;
  gallery: { src: string; alt: string }[];
};

export const projects: Project[] = [
  {
    slug: "graphite-island-residence",
    title: "Graphite Island Residence",
    location: "Location to be confirmed",
    propertyType: "Apartment",
    style: "Modern",
    layout: "Island with parallel run",
    year: "2025",
    intro:
      "A dark, quiet kitchen for an open-plan apartment, where the island doubles as the household's everyday table.",
    concept:
      "The brief asked for a kitchen that would recede when the living room was in use. We kept the tall run in a single graphite tone, pushed all appliances behind flush fronts, and let a fluted timber island carry the warmth.",
    materials: ["Matte graphite laminate", "Fluted oak island", "Veined quartz worktop"],
    hardware: "Soft-close tandem drawers, push-to-open tall units",
    features: [
      "Waterfall island with seating overhang",
      "Concealed tall appliance bank",
      "Under-cabinet task lighting",
      "Full-height stone backsplash",
    ],
    hero: project01,
    alt: "Modern apartment kitchen with graphite cabinetry and fluted oak island",
    gallery: [
      { src: project01, alt: "Island and tall run seen from the living area" },
      { src: materialDetail, alt: "Close-up of stone edge meeting timber and brass profile" },
      { src: heroKitchen, alt: "Evening light across the kitchen worktop" },
    ],
  },
  {
    slug: "ivory-galley-villa",
    title: "Ivory Galley Villa",
    location: "Location to be confirmed",
    propertyType: "Villa",
    style: "Contemporary",
    layout: "Parallel galley with central island",
    year: "2025",
    intro:
      "A large villa kitchen organised around open walnut shelving and a working island that keeps preparation off the perimeter.",
    concept:
      "Storage was the driver. We built a full wall of open and closed walnut units for daily crockery, then kept the perimeter fronts in ivory so the room stays bright through the day.",
    materials: ["Ivory PU-finish shutters", "Walnut veneer shelving", "Engineered quartz worktop"],
    hardware: "Leather-wrapped pulls, soft-close hinges throughout",
    features: [
      "Full-height display and pantry wall",
      "Dedicated baking and serving zones",
      "Twin built-in ovens",
      "Concealed service corridor",
    ],
    hero: project02,
    alt: "Villa kitchen with ivory cabinetry and walnut open shelving",
    gallery: [
      { src: project02, alt: "Ivory kitchen with walnut shelving wall" },
      { src: heroKitchen, alt: "Island worktop detail in warm daylight" },
      { src: materialDetail, alt: "Material junction detail" },
    ],
  },
  {
    slug: "warm-oak-compact-kitchen",
    title: "Warm Oak Compact Kitchen",
    location: "Location to be confirmed",
    propertyType: "Apartment",
    style: "Classic",
    layout: "L-shape with tall storage",
    year: "2024",
    intro:
      "A compact kitchen that carries the storage of a much larger one, using full-height units and a shallow peninsula.",
    concept:
      "Every millimetre was planned. Tall units run floor to ceiling, the worktop turns at the window to catch daylight, and the framed oak fronts keep the room feeling like part of the home rather than a service space.",
    materials: ["Oak-framed shutters", "Granite worktop", "Textured backsplash tile"],
    hardware: "Bar pulls, soft-close drawers, corner pull-out",
    features: [
      "Floor-to-ceiling storage",
      "Built-in oven column",
      "Window-side sink run",
      "Integrated under-shelf lighting",
    ],
    hero: project03,
    alt: "Compact classic kitchen in warm oak with granite worktop",
    gallery: [
      { src: project03, alt: "Oak kitchen with tall storage column" },
      { src: materialDetail, alt: "Close-up of worktop and cabinet junction" },
      { src: project02, alt: "Adjacent storage wall" },
    ],
  },
];

export const projectFilters = ["All", "Modern", "Contemporary", "Classic", "Apartment", "Villa"] as const;

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
