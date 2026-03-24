export interface ServicePricingData {
  slug: string;
  baseRange: string;       // e.g. "$6 – $12"
  baseUnit: string;        // e.g. "per sq ft"
  typicalJob: string;      // e.g. "$2,400 – $7,200"
  typicalScope: string;    // e.g. "400–600 sq ft two-car driveway"
  premium?: {
    label: string;         // e.g. "Stamped / Decorative"
    range: string;         // e.g. "$12 – $20"
    unit: string;
  };
  costDrivers: string[];
  savingTip: string;
}

export const servicePricing: ServicePricingData[] = [
  {
    slug: "concrete-driveways",
    baseRange: "$6 – $12",
    baseUnit: "per sq ft",
    typicalJob: "$2,400 – $7,200",
    typicalScope: "standard 400–600 sq ft two-car driveway",
    premium: {
      label: "Stamped or decorative finish",
      range: "$14 – $22",
      unit: "per sq ft",
    },
    costDrivers: [
      "Slab thickness (4 in vs 6 in)",
      "Broom finish vs stamped or exposed aggregate",
      "Site access and grading required",
      "Existing concrete removal",
      "Rebar vs fiber reinforcement",
    ],
    savingTip:
      "Combining driveway and walkway pours in a single visit saves on mobilization and often reduces the per-square-foot cost by 10–15%.",
  },
  {
    slug: "concrete-patios",
    baseRange: "$5 – $10",
    baseUnit: "per sq ft",
    typicalJob: "$1,500 – $6,000",
    typicalScope: "200–400 sq ft backyard patio",
    premium: {
      label: "Stamped, stained, or exposed aggregate",
      range: "$12 – $20",
      unit: "per sq ft",
    },
    costDrivers: [
      "Surface finish (broom vs stamped vs stain)",
      "Shape complexity (straight edges vs curves)",
      "Sealer type and coverage",
      "Integrated steps or level changes",
      "Drainage slope requirements",
    ],
    savingTip:
      "A broom-finish patio with a single color hardener gives a clean, durable look at roughly half the cost of stamped concrete.",
  },
  {
    slug: "concrete-foundations",
    baseRange: "$5 – $10",
    baseUnit: "per sq ft",
    typicalJob: "$8,000 – $30,000+",
    typicalScope: "1,200–2,500 sq ft residential slab",
    costDrivers: [
      "Slab type (conventional vs post-tension)",
      "Pier depth and spacing required by engineer",
      "Soil conditions and moisture barriers",
      "City permit and inspection fees",
      "Square footage and beam layout complexity",
    ],
    savingTip:
      "Having a soil report and engineer-stamped plans ready before requesting estimates speeds up the process and avoids costly scope changes mid-project.",
  },
  {
    slug: "concrete-flatwork",
    baseRange: "$5 – $9",
    baseUnit: "per sq ft",
    typicalJob: "$800 – $5,000",
    typicalScope: "100–500 sq ft sidewalk, walkway, or pool deck section",
    premium: {
      label: "Exposed aggregate or stamped pool deck",
      range: "$10 – $18",
      unit: "per sq ft",
    },
    costDrivers: [
      "Surface finish type",
      "ADA compliance and slope requirements",
      "Right-of-way permit fees",
      "Site access for equipment",
      "Tie-in to existing concrete edges",
    ],
    savingTip:
      "Replacing multiple sidewalk panels at once costs significantly less per panel than replacing them individually due to shared mobilization costs.",
  },
  {
    slug: "concrete-repair",
    baseRange: "$200 – $1,500",
    baseUnit: "per project",
    typicalJob: "$400 – $2,500",
    typicalScope: "crack repair, mudjacking, or resurfacing on a typical driveway or patio",
    premium: {
      label: "Full resurfacing overlay",
      range: "$3 – $6",
      unit: "per sq ft",
    },
    costDrivers: [
      "Type of repair (crack seal vs mudjacking vs overlay)",
      "Extent of damage and square footage",
      "Cause of damage (root, soil settlement, or impact)",
      "Whether underlying subbase needs correction",
      "Finish matching existing concrete",
    ],
    savingTip:
      "Mudjacking a sunken driveway section typically costs 40–60% less than full slab removal and replacement — and delivers the same end result.",
  },
  {
    slug: "retaining-walls",
    baseRange: "$30 – $60",
    baseUnit: "per linear ft",
    typicalJob: "$2,500 – $12,000",
    typicalScope: "50–150 linear ft residential retaining wall",
    premium: {
      label: "Engineered walls over 4 ft with stamped face",
      range: "$60 – $100+",
      unit: "per linear ft",
    },
    costDrivers: [
      "Wall height and total linear footage",
      "Engineering requirements (walls over 4 ft need stamped plans)",
      "Drainage system integration",
      "Decorative face finish vs plain",
      "Geogrid reinforcement layers",
    ],
    savingTip:
      "Walls under 4 ft typically do not require engineer-stamped plans, which saves $800–$1,500 in engineering fees — design your wall to stay under that threshold if possible.",
  },
  {
    slug: "stamped-decorative-concrete",
    baseRange: "$12 – $18",
    baseUnit: "per sq ft",
    typicalJob: "$3,000 – $14,000",
    typicalScope: "200–600 sq ft stamped patio, driveway, or pool deck",
    premium: {
      label: "Multi-color with custom border and sealer",
      range: "$18 – $24",
      unit: "per sq ft",
    },
    costDrivers: [
      "Pattern complexity (single stamp vs multi-pattern border)",
      "Number of colors and color hardener volume",
      "Acid stain vs color hardener base",
      "Sealer type (matte vs gloss, standard vs UV-premium)",
      "Square footage — larger areas cost less per sq ft",
    ],
    savingTip:
      "A single-color stamped pattern with a contrasting border color gives a high-end look while keeping cost closer to the base range than a full multi-color design.",
  },
  {
    slug: "concrete-removal",
    baseRange: "$2 – $6",
    baseUnit: "per sq ft",
    typicalJob: "$800 – $4,500",
    typicalScope: "driveway, patio, or sidewalk removal",
    costDrivers: [
      "Slab thickness (4 in vs 6 in vs thicker commercial)",
      "Rebar density — more rebar = slower cutting and higher cost",
      "Site access for skid steer or excavator",
      "Haul distance and disposal fees",
      "Whether partial or full slab removal",
    ],
    savingTip:
      "Bundling removal with a new pour from the same contractor typically saves 15–25% on the removal portion versus hiring separate crews.",
  },
  {
    slug: "commercial-concrete",
    baseRange: "$5 – $15",
    baseUnit: "per sq ft",
    typicalJob: "$15,000 – $150,000+",
    typicalScope: "commercial slab, parking lot section, or warehouse floor",
    costDrivers: [
      "Slab thickness and PSI specification",
      "Post-tension vs conventional reinforcement",
      "Site conditions and subbase prep required",
      "Pour size and crew mobilization costs",
      "Inspection fees and schedule timeline",
    ],
    savingTip:
      "Providing complete, permit-ready plans from a licensed engineer before requesting bids allows contractors to price accurately and reduces costly change orders during the pour.",
  },
];

export function getServicePricing(slug: string): ServicePricingData | undefined {
  return servicePricing.find((p) => p.slug === slug);
}
