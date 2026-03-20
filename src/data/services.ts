export interface Service {
  slug: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    slug: "concrete-driveways",
    title: "Concrete Driveways",
    shortDesc: "Durable, custom concrete driveways that boost curb appeal and last decades.",
    longDesc:
      "We design and pour concrete driveways built to withstand Austin's heat and heavy traffic. From standard broom-finish to stamped and exposed-aggregate finishes, we match your style and budget. Proper sub-base prep, rebar reinforcement, and expansion joints ensure zero premature cracking.",
    icon: "🚗",
    features: [
      "4–6 inch reinforced slab",
      "Custom decorative finishes",
      "Control joint placement",
      "Sealed for longevity",
    ],
  },
  {
    slug: "concrete-patios",
    title: "Concrete Patios",
    shortDesc: "Stunning outdoor living spaces — stamped, stained, or brushed concrete.",
    longDesc:
      "Transform your backyard into an outdoor retreat. Our patios are built for Austin's climate with proper drainage, reinforcement, and UV-stable sealers. Choose from stamped patterns, exposed aggregate, broom finish, or acid stain.",
    icon: "🏡",
    features: [
      "Stamped & decorative options",
      "Integrated drainage slopes",
      "Acid stain & color hardeners",
      "Sealed & protected finish",
    ],
  },
  {
    slug: "concrete-foundations",
    title: "Concrete Foundations",
    shortDesc: "Slab foundations poured to code for new construction and additions.",
    longDesc:
      "A proper foundation is everything. We work with engineers and inspectors to pour post-tension and conventional slab foundations for residential and light commercial builds in Austin and surrounding areas.",
    icon: "🏗️",
    features: [
      "Post-tension & conventional slabs",
      "Engineer-stamped plans",
      "City permit coordination",
      "Inspected & code-compliant",
    ],
  },
  {
    slug: "concrete-flatwork",
    title: "Flatwork & Sidewalks",
    shortDesc: "Smooth, level concrete flatwork for walkways, pool decks, and more.",
    longDesc:
      "Whether it's a public sidewalk replacement, pool deck, or interior warehouse floor, we deliver laser-level flatwork with tight tolerances. We handle residential and light commercial flatwork of any size.",
    icon: "📐",
    features: [
      "Pool decks & walkways",
      "ADA-compliant slopes",
      "Commercial warehouse floors",
      "Right-of-way permits handled",
    ],
  },
  {
    slug: "concrete-repair",
    title: "Concrete Repair",
    shortDesc: "Expert crack repair, resurfacing, and mudjacking for existing concrete.",
    longDesc:
      "Cracked driveway? Sunken patio? We repair, resurface, and stabilize existing concrete slabs. Mudjacking lifts sunken sections back to grade without full replacement — saving you money.",
    icon: "🔧",
    features: [
      "Crack injection & sealing",
      "Mudjacking / slab lifting",
      "Concrete resurfacing",
      "Spall & pop-out repair",
    ],
  },
  {
    slug: "retaining-walls",
    title: "Concrete Retaining Walls",
    shortDesc: "Engineered retaining walls that hold soil, prevent erosion, and look great.",
    longDesc:
      "Austin's hill country terrain demands solid retaining walls. We build poured concrete and block retaining walls with proper drainage and geogrid reinforcement for long-term stability.",
    icon: "🧱",
    features: [
      "Poured & block wall options",
      "French drain integration",
      "Geogrid reinforcement",
      "Decorative face finishes",
    ],
  },
];
