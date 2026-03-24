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
  {
    slug: "stamped-decorative-concrete",
    title: "Stamped & Decorative Concrete",
    shortDesc: "Custom stamped patterns, staining, and decorative finishes for driveways, patios, and walkways.",
    longDesc:
      "Decorative concrete transforms ordinary slabs into stunning surfaces. We offer stamped concrete in dozens of patterns — brick, slate, cobblestone, wood plank — along with acid staining, color hardeners, and exposed aggregate finishes. Perfect for driveways, patios, pool decks, and entryways that need to make an impression.",
    icon: "✨",
    features: [
      "Stamped patterns & textures",
      "Acid stain & color hardeners",
      "Exposed aggregate finishes",
      "UV-stable sealers applied",
    ],
  },
  {
    slug: "concrete-removal",
    title: "Concrete Removal & Demolition",
    shortDesc: "Professional concrete removal and demolition — no subcontractors, no mess left behind.",
    longDesc:
      "Old concrete must come out before a new pour can go in. Our crews handle full concrete removal and demolition using the proper equipment — jackhammers, skid steers, and debris hauling — so the site is clean and ready for the next phase. We never subcontract removal work, so quality stays consistent from demo to pour.",
    icon: "🏗️",
    features: [
      "Full slab & partial removal",
      "Jackhammer & mechanical demo",
      "Debris hauling & disposal",
      "Site graded & prepped for new pour",
    ],
  },
  {
    slug: "commercial-concrete",
    title: "Commercial Concrete",
    shortDesc: "Reliable commercial concrete services for businesses, builders, and developers across Austin.",
    longDesc:
      "From warehouse floors and loading docks to commercial parking lots and retail entryways, Austin Premier Concrete has the crew size, equipment, and experience to handle commercial-scale pours on schedule. We work with general contractors, developers, and business owners throughout the Austin metro — meeting inspections, deadlines, and budget requirements.",
    icon: "🏢",
    features: [
      "Warehouse & industrial floors",
      "Parking lots & loading docks",
      "ADA-compliant flatwork",
      "General contractor partnerships",
    ],
  },
];
