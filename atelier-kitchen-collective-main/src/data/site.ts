// Central brand + contact configuration.
// TODO: replace placeholder values (marked PLACEHOLDER) with verified business details.

export const site = {
  name: "Dream Maker Kitchen Gallery",
  shortName: "Dream Maker",
  tagline: "Modular kitchens, made to your life.",
  description:
    "Dream Maker Kitchen Gallery designs, manufactures and installs premium modular kitchens — considered layouts, honest materials and precise detailing.",
  phone: "7648907865",
  phoneDisplay: "+91 76489 07865",
  whatsapp: "917648907865",
  email: "hello@dreammakerkitchengallery.com", // PLACEHOLDER
  addressLines: ["19/3, Chandrabhaga Juni", "Palsikar Colony, Indore, MP 452007"],
  hours: "Mon – Sat, 10:00 – 19:00", // PLACEHOLDER
  instagram: "https://www.instagram.com/dream.maker_official/",
  mapLink: "https://www.google.com/maps/search/?api=1&query=19%2F3%2C+Chandrabhaga+Juni%2C+Palsikar+Colony%2C+Indore%2C+Madhya+Pradesh+452007",
} as const;

export const whatsappLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  "Hello Dream Maker Kitchen Gallery, I'd like to discuss a kitchen.",
)}`;

export const telLink = `tel:+91${site.phone}`;

export const nav = [
  { label: "Kitchens", to: "/kitchens" },
  { label: "Projects", to: "/projects" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;
