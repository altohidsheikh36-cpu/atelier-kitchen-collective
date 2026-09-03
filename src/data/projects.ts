import project01 from "@/assets/project-01.jpg";
import portfolio01 from "@/assets/portfolio-01.jpg";
import portfolio02 from "@/assets/portfolio-02.jpg";
import portfolio03 from "@/assets/portfolio-03.jpg";
import portfolio04 from "@/assets/portfolio-04.jpg";
import portfolio05 from "@/assets/portfolio-05.jpg";
import portfolio06 from "@/assets/portfolio-06.jpg";
import portfolio07 from "@/assets/portfolio-07.jpg";
import portfolio08 from "@/assets/portfolio-08.jpg";
import portfolio09 from "@/assets/portfolio-09.jpg";
import portfolio10 from "@/assets/portfolio-10.jpg";
import portfolio11 from "@/assets/portfolio-11.jpg";
import portfolio12 from "@/assets/portfolio-12.jpg";
import project02 from "@/assets/project-02.jpg";
import project03 from "@/assets/project-03.jpg";
import materialDetail from "@/assets/material-detail.jpg";
import heroKitchen from "@/assets/hero-kitchen.jpg";

export type Project = {
  slug: string;
  title: string;
  location: string; // PLACEHOLDER until confirmed
  propertyType: "Apartment" | "Villa" | "Residence";
  style: "Modern" | "Contemporary" | "Classic" | "Minimal" | "Luxury";
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
  {
    slug: "emerald-island-residence",
    title: "Emerald Island Residence",
    location: "Location to be confirmed",
    propertyType: "Villa",
    style: "Modern",
    layout: "Island with tall bank",
    year: "2025",
    intro:
      "A deep-green kitchen where a single marble island anchors cooking, serving and conversation.",
    concept:
      "The client wanted colour without noise. We took one saturated green across every front, then broke it with a book-matched marble backsplash and aged-brass fittings.",
    materials: ["Matte emerald lacquer", "Book-matched marble", "Aged brass hardware"],
    hardware: "Soft-close hinges, brass knurled knobs",
    features: [
      "Waterfall marble island",
      "Twin built-in ovens",
      "Full-height larder bank",
      "Warm brass pendant lighting",
    ],
    hero: portfolio01,
    alt: "Deep green modular kitchen with marble waterfall island and brass pendants",
    gallery: [
      { src: portfolio01, alt: "Deep green modular kitchen with marble waterfall island and brass pendants" },
      { src: portfolio05, alt: "Deep green modular kitchen with marble waterfall island and brass pendants" },
      { src: portfolio12, alt: "Deep green modular kitchen with marble waterfall island and brass pendants" },
    ],
  },
  {
    slug: "skyline-apartment-kitchen",
    title: "Skyline Apartment Kitchen",
    location: "Location to be confirmed",
    propertyType: "Apartment",
    style: "Contemporary",
    layout: "L-shape with tall fridge bay",
    year: "2025",
    intro:
      "A daily-use apartment kitchen built around real Indian cooking, storage and ventilation.",
    concept:
      "Working with a narrow footprint, we kept uppers in high-gloss ivory to bounce light and grounded the base units in oak. A framed open shelf holds everyday jars within reach.",
    materials: ["High-gloss acrylic uppers", "Oak-finish laminate base", "Quartz worktop"],
    hardware: "Tandem drawers, hydraulic lift-ups",
    features: [
      "Window-side sink run",
      "Open oak jar shelf",
      "Concealed hob chimney",
      "Tall fridge and appliance bay",
    ],
    hero: portfolio02,
    alt: "Compact apartment kitchen with white gloss uppers and oak base cabinets",
    gallery: [
      { src: portfolio02, alt: "Compact apartment kitchen with white gloss uppers and oak base cabinets" },
      { src: portfolio07, alt: "Compact apartment kitchen with white gloss uppers and oak base cabinets" },
      { src: portfolio10, alt: "Compact apartment kitchen with white gloss uppers and oak base cabinets" },
    ],
  },
  {
    slug: "charcoal-open-plan-kitchen",
    title: "Charcoal Open-Plan Kitchen",
    location: "Location to be confirmed",
    propertyType: "Residence",
    style: "Luxury",
    layout: "Long island with appliance wall",
    year: "2025",
    intro:
      "An open-plan kitchen that reads as furniture when the living room is in use.",
    concept:
      "All appliances sit inside a single charcoal wall so the room stays calm. The island runs long enough to seat four, with layered lighting for evenings.",
    materials: ["Matte charcoal fronts", "Light quartz worktop", "Engineered oak flooring"],
    hardware: "Push-to-open tall units, soft-close drawers",
    features: [
      "Four-seat island",
      "Integrated oven and coffee column",
      "Shelf-integrated LED lighting",
      "Seamless living-room transition",
    ],
    hero: portfolio03,
    alt: "Charcoal open-plan kitchen with long island and pendant lighting",
    gallery: [
      { src: portfolio03, alt: "Charcoal open-plan kitchen with long island and pendant lighting" },
      { src: portfolio08, alt: "Charcoal open-plan kitchen with long island and pendant lighting" },
      { src: portfolio11, alt: "Charcoal open-plan kitchen with long island and pendant lighting" },
    ],
  },
  {
    slug: "ivory-minimal-galley",
    title: "Ivory Minimal Galley",
    location: "Location to be confirmed",
    propertyType: "Apartment",
    style: "Minimal",
    layout: "Parallel galley",
    year: "2024",
    intro:
      "A quiet galley kitchen stripped back to surface, light and proportion.",
    concept:
      "No handles, no visible hardware, no contrast. The joinery lines align with the door opening so the whole run reads as one plane.",
    materials: ["Handleless matte ivory fronts", "Compact stone worktop", "Limestone-look floor tile"],
    hardware: "Groove-profile handleless system, soft-close drawers",
    features: [
      "Fully handleless fronts",
      "Concealed extraction",
      "Double stainless sink",
      "Floor-to-ceiling storage wall",
    ],
    hero: portfolio04,
    alt: "Minimal ivory galley kitchen with handleless cabinetry",
    gallery: [
      { src: portfolio04, alt: "Minimal ivory galley kitchen with handleless cabinetry" },
      { src: portfolio06, alt: "Minimal ivory galley kitchen with handleless cabinetry" },
      { src: portfolio09, alt: "Minimal ivory galley kitchen with handleless cabinetry" },
    ],
  },
  {
    slug: "walnut-fluted-glass-kitchen",
    title: "Walnut & Fluted Glass Kitchen",
    location: "Location to be confirmed",
    propertyType: "Residence",
    style: "Contemporary",
    layout: "Single wall with island",
    year: "2024",
    intro:
      "A warm walnut run backed by fluted glass, designed as much for display as for cooking.",
    concept:
      "The client collects ceramics, so the back wall became an open shelving system in solid walnut with a fluted glass panel that diffuses daylight behind it.",
    materials: ["Walnut veneer", "Black granite worktop", "Fluted glass backsplash"],
    hardware: "Brass bar pulls, soft-close runners",
    features: [
      "Two-tier open display shelving",
      "Undermount sink with brass tap",
      "Fluted glass light diffusion",
      "Matching walnut island",
    ],
    hero: portfolio05,
    alt: "Walnut kitchen with fluted glass backsplash and black granite worktop",
    gallery: [
      { src: portfolio05, alt: "Walnut kitchen with fluted glass backsplash and black granite worktop" },
      { src: portfolio12, alt: "Walnut kitchen with fluted glass backsplash and black granite worktop" },
      { src: portfolio01, alt: "Walnut kitchen with fluted glass backsplash and black granite worktop" },
    ],
  },
  {
    slug: "beige-villa-kitchen",
    title: "Beige Villa Kitchen",
    location: "Location to be confirmed",
    propertyType: "Villa",
    style: "Contemporary",
    layout: "U-shape with oven column",
    year: "2024",
    intro:
      "A generous U-shaped villa kitchen with three working sides and a full appliance column.",
    concept:
      "We wrapped three walls so nothing is more than two steps away, and used a soft beige to keep the volume warm under strong daylight.",
    materials: ["Matte beige shutters", "Marble-effect backsplash", "Quartz worktop"],
    hardware: "Soft-close drawers, corner carousel",
    features: [
      "Three-side work triangle",
      "Built-in oven and microwave column",
      "Marble slab backsplash",
      "Under-cabinet task lighting",
    ],
    hero: portfolio06,
    alt: "Beige U-shaped villa kitchen with marble backsplash and oven column",
    gallery: [
      { src: portfolio06, alt: "Beige U-shaped villa kitchen with marble backsplash and oven column" },
      { src: portfolio09, alt: "Beige U-shaped villa kitchen with marble backsplash and oven column" },
      { src: portfolio02, alt: "Beige U-shaped villa kitchen with marble backsplash and oven column" },
    ],
  },
  {
    slug: "sage-breakfast-kitchen",
    title: "Sage Breakfast Kitchen",
    location: "Location to be confirmed",
    propertyType: "Apartment",
    style: "Classic",
    layout: "L-shape with breakfast counter",
    year: "2024",
    intro:
      "A small kitchen given a breakfast counter, so it works for two people and morning coffee.",
    concept:
      "Sage base units and ivory uppers keep the room light. The counter overhang turned an unused corner into the most-used seat in the home.",
    materials: ["Sage matte finish", "Ivory framed uppers", "Glazed subway tile"],
    hardware: "Antique-black cup pulls, soft-close hinges",
    features: [
      "Two-seat breakfast counter",
      "Open display niche",
      "Subway tile backsplash",
      "Concealed laundry access",
    ],
    hero: portfolio07,
    alt: "Sage green and ivory kitchen with breakfast counter and bar stools",
    gallery: [
      { src: portfolio07, alt: "Sage green and ivory kitchen with breakfast counter and bar stools" },
      { src: portfolio11, alt: "Sage green and ivory kitchen with breakfast counter and bar stools" },
      { src: portfolio04, alt: "Sage green and ivory kitchen with breakfast counter and bar stools" },
    ],
  },
  {
    slug: "noir-entertainer-kitchen",
    title: "Noir Entertainer Kitchen",
    location: "Location to be confirmed",
    propertyType: "Residence",
    style: "Luxury",
    layout: "Island with bar and wine wall",
    year: "2025",
    intro:
      "A kitchen designed for hosting, with a lit glass bar wall and a stone island for serving.",
    concept:
      "Evening use drove every decision: dark stone, warm concealed lighting, and a glazed wine and glassware wall that becomes the room's light source after dark.",
    materials: ["Dark stone worktop", "Smoked glass bar cabinetry", "Walnut upper units"],
    hardware: "Push-to-open fronts, integrated LED profiles",
    features: [
      "Illuminated wine and glassware wall",
      "Serving island",
      "Integrated cooling column",
      "Layered evening lighting",
    ],
    hero: portfolio08,
    alt: "Dark luxury kitchen with illuminated wine wall and stone island",
    gallery: [
      { src: portfolio08, alt: "Dark luxury kitchen with illuminated wine wall and stone island" },
      { src: portfolio03, alt: "Dark luxury kitchen with illuminated wine wall and stone island" },
      { src: portfolio12, alt: "Dark luxury kitchen with illuminated wine wall and stone island" },
    ],
  },
  {
    slug: "greystone-shaker-kitchen",
    title: "Greystone Shaker Kitchen",
    location: "Location to be confirmed",
    propertyType: "Villa",
    style: "Classic",
    layout: "U-shape with island",
    year: "2024",
    intro:
      "A shaker kitchen with beaded fronts, a farmhouse sink and glazed display uppers.",
    concept:
      "The brief was a kitchen that would not date. Framed fronts, honest hardware and a stone-toned palette do the work; the island keeps circulation open.",
    materials: ["Beaded shaker fronts", "Composite stone worktop", "Ceramic farmhouse sink"],
    hardware: "Polished chrome knobs, soft-close hinges",
    features: [
      "Glazed display cabinets",
      "Range cooker bay",
      "Farmhouse apron sink",
      "Central prep island",
    ],
    hero: portfolio09,
    alt: "Grey shaker kitchen with farmhouse sink and glazed display cabinets",
    gallery: [
      { src: portfolio09, alt: "Grey shaker kitchen with farmhouse sink and glazed display cabinets" },
      { src: portfolio11, alt: "Grey shaker kitchen with farmhouse sink and glazed display cabinets" },
      { src: portfolio06, alt: "Grey shaker kitchen with farmhouse sink and glazed display cabinets" },
    ],
  },
  {
    slug: "engineered-storage-kitchen",
    title: "Engineered Storage Kitchen",
    location: "Location to be confirmed",
    propertyType: "Apartment",
    style: "Modern",
    layout: "Single wall with tall pantry",
    year: "2025",
    intro:
      "A storage-first kitchen: every drawer, pull-out and pantry unit planned around what the family actually keeps.",
    concept:
      "We inventoried the client's kitchen before drawing anything. The result is a compact run where a tall pull-out pantry replaces three cluttered cupboards.",
    materials: ["Matte white fronts", "Solid-surface worktop", "Stainless internal fittings"],
    hardware: "Full-extension tandem drawers, tall pull-out pantry",
    features: [
      "Cutlery and utensil organisers",
      "Six-tier pull-out pantry",
      "Deep pot-and-pan drawers",
      "Induction hob with flush trim",
    ],
    hero: portfolio10,
    alt: "Open kitchen drawers with cutlery organiser and tall pull-out pantry",
    gallery: [
      { src: portfolio10, alt: "Open kitchen drawers with cutlery organiser and tall pull-out pantry" },
      { src: portfolio04, alt: "Open kitchen drawers with cutlery organiser and tall pull-out pantry" },
      { src: portfolio02, alt: "Open kitchen drawers with cutlery organiser and tall pull-out pantry" },
    ],
  },
  {
    slug: "open-kitchen-dining-house",
    title: "Open Kitchen & Dining House",
    location: "Location to be confirmed",
    propertyType: "Residence",
    style: "Classic",
    layout: "Island with adjoining dining",
    year: "2024",
    intro:
      "Kitchen and dining designed as one room, with the island acting as the boundary between them.",
    concept:
      "Timber beams and white joinery set the tone. We kept worktop clutter to zero by adding a concealed prep pantry behind the cooking wall.",
    materials: ["White framed joinery", "Solid oak dining top", "Marble-look worktop"],
    hardware: "Soft-close hinges, integrated bin pull-outs",
    features: [
      "Island with three-seat overhang",
      "Concealed prep pantry",
      "Glazed upper cabinets",
      "Direct garden-facing daylight",
    ],
    hero: portfolio11,
    alt: "Open white kitchen with island, timber beams and dining table",
    gallery: [
      { src: portfolio11, alt: "Open white kitchen with island, timber beams and dining table" },
      { src: portfolio09, alt: "Open white kitchen with island, timber beams and dining table" },
      { src: portfolio07, alt: "Open white kitchen with island, timber beams and dining table" },
    ],
  },
  {
    slug: "indigo-terrazzo-kitchen",
    title: "Indigo Terrazzo Kitchen",
    location: "Location to be confirmed",
    propertyType: "Apartment",
    style: "Modern",
    layout: "Island with single wall run",
    year: "2025",
    intro:
      "An indigo kitchen with terrazzo surfaces, built for a client who wanted colour and texture in equal measure.",
    concept:
      "One tone covers cabinetry and wall so the joinery disappears; the terrazzo worktop then carries all the visual interest and hides everyday use.",
    materials: ["Matte indigo lacquer", "Terrazzo worktop", "Brass fittings"],
    hardware: "Brass bar pulls and knobs, soft-close drawers",
    features: [
      "Flush induction hob island",
      "Recessed open shelf",
      "Colour-matched wall and joinery",
      "Brass tap and hardware suite",
    ],
    hero: portfolio12,
    alt: "Deep blue matte kitchen with terrazzo worktop and brass hardware",
    gallery: [
      { src: portfolio12, alt: "Deep blue matte kitchen with terrazzo worktop and brass hardware" },
      { src: portfolio01, alt: "Deep blue matte kitchen with terrazzo worktop and brass hardware" },
      { src: portfolio05, alt: "Deep blue matte kitchen with terrazzo worktop and brass hardware" },
    ],
  },
];

export const projectFilters = ["All", "Modern", "Contemporary", "Minimal", "Luxury", "Classic", "Apartment", "Villa", "Residence"] as const;

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
