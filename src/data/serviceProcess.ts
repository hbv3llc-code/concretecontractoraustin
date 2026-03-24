export interface ProcessStep {
  title: string;
  desc: string;
}

export interface ServiceProcessData {
  slug: string;
  steps: ProcessStep[];
}

export const serviceProcesses: ServiceProcessData[] = [
  {
    slug: "concrete-driveways",
    steps: [
      {
        title: "Free On-Site Estimate",
        desc: "We visit your property, measure the driveway area, assess the existing base and grade, and discuss finish options. You receive a detailed written quote within 24–48 hours — no vague ballpark figures.",
      },
      {
        title: "Permits & Scheduling",
        desc: "Where required, we pull the necessary permits with your city's building department. We coordinate the pour date around weather windows — concrete should not be poured in extreme heat or when rain is imminent.",
      },
      {
        title: "Demolition & Sub-Base Prep",
        desc: "Existing concrete is removed and hauled away. We excavate to the correct depth, compact the sub-base, and add gravel if needed. A properly prepared sub-base is what separates a 30-year driveway from one that cracks in five.",
      },
      {
        title: "Forms, Rebar & Pour",
        desc: "We set wood forms to shape, install rebar or fiber reinforcement, and pour the concrete in one continuous operation. Control joints are cut at the correct intervals before the concrete sets.",
      },
      {
        title: "Finishing, Curing & Sealing",
        desc: "The slab is finished to your chosen texture — broom, stamped, exposed aggregate, or smooth — then cured properly for 7–28 days. A penetrating or film sealer is applied to protect against staining and moisture.",
      },
    ],
  },
  {
    slug: "concrete-patios",
    steps: [
      {
        title: "Design & Estimate",
        desc: "We walk your outdoor space with you, discuss shape, size, finish options, and how the patio will integrate with your home's exterior. We provide a written estimate covering all materials, labor, and finish work.",
      },
      {
        title: "Layout & Excavation",
        desc: "The patio perimeter is staked and excavated to the correct depth. We ensure proper drainage slope — typically 1/8 inch per foot away from the house — before any concrete is poured.",
      },
      {
        title: "Base Preparation",
        desc: "A compacted gravel base is installed to provide drainage and a stable substrate. In Central Texas, clay soils make this step critical — skipping base prep leads to cracking and settling.",
      },
      {
        title: "Forming & Pouring",
        desc: "Forms are set to the final shape, reinforcement is placed, and the slab is poured. Control joints are positioned to manage cracking. Steps, borders, and curves are formed to spec.",
      },
      {
        title: "Decorative Finishing & Sealing",
        desc: "After the pour, we apply your chosen decorative treatment — stamping, color hardeners, broom texture, or acid stain — and finish with a UV-stable sealer rated for Texas sun and heat.",
      },
    ],
  },
  {
    slug: "concrete-foundations",
    steps: [
      {
        title: "Engineering & Plan Review",
        desc: "Every foundation starts with engineer-stamped plans that specify slab thickness, beam depth, pier layout, and reinforcement. We review the plans before bidding to ensure our quote reflects the actual scope.",
      },
      {
        title: "Permit Application",
        desc: "We submit the permit application to your city's building department and coordinate the pre-pour inspection schedule. This step typically takes 5–15 business days depending on your city's backlog.",
      },
      {
        title: "Site Preparation & Forming",
        desc: "The site is graded, the moisture barrier is laid, and forms are set to the exact dimensions on the plans. Pier holes are drilled to the required depth and filled before the slab pour.",
      },
      {
        title: "Rebar or Cable Layout",
        desc: "Rebar grids or post-tension cables are laid per the engineer's specifications. This step is inspected by the city inspector before any concrete is poured — nothing is covered until it passes.",
      },
      {
        title: "Pour, Finish & Stress",
        desc: "The slab is poured, screeded, and finished in a single operation. Post-tension cables are stressed 10–14 days after the pour reaches design strength. Final city inspection closes the permit.",
      },
    ],
  },
  {
    slug: "concrete-flatwork",
    steps: [
      {
        title: "Scope & Estimate",
        desc: "We measure the flatwork area, note any ADA requirements or right-of-way restrictions, and confirm finish and thickness specifications. Free written estimate within 24–48 hours.",
      },
      {
        title: "Permit Coordination",
        desc: "Sidewalks in the public right-of-way require city permits. We handle the application and scheduling with your city's public works or building department — you don't need to manage this.",
      },
      {
        title: "Demo & Grade",
        desc: "Existing concrete is broken out and hauled away. The subgrade is excavated to the correct depth, compacted, and leveled. Pool deck areas require careful slope work to direct water away from the pool and structure.",
      },
      {
        title: "Form & Pour",
        desc: "Forms are set, reinforcement is installed, and the concrete is poured. We maintain tight tolerances — especially for commercial floors and ADA-compliant walkways where grade variation limits are strict.",
      },
      {
        title: "Finish & Cure",
        desc: "The surface is finished to spec — broom, smooth, exposed aggregate, or stamped — and protected during curing. Right-of-way sections are barricaded until the concrete reaches adequate strength.",
      },
    ],
  },
  {
    slug: "concrete-repair",
    steps: [
      {
        title: "Damage Assessment",
        desc: "We inspect the concrete in person — not just photos — to identify the root cause (soil settlement, root intrusion, moisture, overload) and recommend the most cost-effective repair method.",
      },
      {
        title: "Written Repair Recommendation",
        desc: "You receive a written scope that explains what we found, what we recommend, why, and what it will cost. We won't push replacement if repair is the right answer — and vice versa.",
      },
      {
        title: "Preparation",
        desc: "For crack repairs, we cut a clean edge and clean the joint. For mudjacking, we drill access ports at the low points. For resurfacing, we grind and profile the surface for maximum overlay adhesion.",
      },
      {
        title: "Repair Execution",
        desc: "Cracks are filled with polyurethane or epoxy injection. Mudjacking pumps a slurry beneath the slab to lift it back to grade. Resurfacing overlays are applied at the specified thickness and finished to match.",
      },
      {
        title: "Seal & Protect",
        desc: "Repaired surfaces are sealed to prevent water infiltration and extend the repair's life. We note any conditions that could cause reoccurrence so you can address the root cause before it becomes a larger problem.",
      },
    ],
  },
  {
    slug: "retaining-walls",
    steps: [
      {
        title: "Site Evaluation & Design",
        desc: "We assess the slope, soil type, drainage patterns, and load requirements. For walls over 4 feet, we coordinate with a licensed engineer to produce stamped drawings before any permits are pulled.",
      },
      {
        title: "Permit Submission",
        desc: "We submit permit applications including engineer drawings where required. Retaining wall permits typically require a structural review — we manage this with the city building department.",
      },
      {
        title: "Excavation & Footing",
        desc: "The wall footprint is excavated to the required depth. For poured concrete walls, forms are set and footings are poured first. Block walls require a level compacted gravel base course.",
      },
      {
        title: "Wall Construction & Drainage",
        desc: "The wall is built to the specified height and thickness. Drainage aggregate and a perforated pipe are installed behind the wall on every project — water pressure behind a wall is the number-one cause of wall failure.",
      },
      {
        title: "Backfill & Final Grade",
        desc: "Backfill is placed in compacted lifts to avoid wall overloading. The grade is restored, and the site is cleaned. Decorative face finishes or cap stones are installed as the final step.",
      },
    ],
  },
  {
    slug: "stamped-decorative-concrete",
    steps: [
      {
        title: "Design Consultation",
        desc: "We bring pattern samples and color boards to the estimate visit. You choose the stamp pattern, base color, accent color, and sealer finish. We help you visualize how each combination will look with your home's exterior.",
      },
      {
        title: "Base Slab Preparation",
        desc: "All decorative work starts with a properly prepared slab. Existing concrete is removed or the subgrade is excavated, compacted, and formed — the same process as a standard slab, but with additional care for level tolerance.",
      },
      {
        title: "Color Application",
        desc: "Color hardener or integral color is added to the concrete mix. A release agent is applied to prevent the stamps from sticking — this also adds a secondary color layer that gives stamped concrete its realistic depth.",
      },
      {
        title: "Stamping",
        desc: "Stamps are pressed into the concrete at the right consistency — too early and the impression collapses; too late and it won't take. Our crew times this precisely so every section matches.",
      },
      {
        title: "Staining, Detailing & Sealing",
        desc: "Once cured, we wash away the release agent, add any accent stain or saw-cut details, and apply a UV-stable sealer. The sealer is critical in Central Texas — it protects color from UV bleaching and makes the surface easy to clean.",
      },
    ],
  },
  {
    slug: "concrete-removal",
    steps: [
      {
        title: "Pre-Demo Walkthrough",
        desc: "We identify utility lines, irrigation, and any sections to preserve before any demo begins. We confirm access for equipment and agree on a haul route to protect your landscaping and driveway edges.",
      },
      {
        title: "Sawcutting",
        desc: "Clean saw cuts are made at the removal boundary to protect adjacent concrete you're keeping. This prevents random cracking from radiating into areas you don't want disturbed.",
      },
      {
        title: "Breaking & Removal",
        desc: "Concrete is broken with jackhammers or a hydraulic breaker. Where access allows, a skid steer speeds up loading significantly. Large rebar is cut and separated for recycling.",
      },
      {
        title: "Debris Hauling",
        desc: "All broken concrete is loaded and hauled to an authorized recycling or disposal facility. Concrete is typically recycled as road base — we don't send it to a landfill.",
      },
      {
        title: "Site Grading & Handoff",
        desc: "The site is graded and leveled so it's ready for the next phase — whether that's a new concrete pour, pavers, or landscaping. The area is clean and accessible when we leave.",
      },
    ],
  },
  {
    slug: "commercial-concrete",
    steps: [
      {
        title: "Plan Review & Bid",
        desc: "We review your construction documents, site plans, and specs to produce an accurate, itemized bid. We flag potential scope gaps or constructability issues before you're committed to a schedule.",
      },
      {
        title: "Permit Coordination",
        desc: "Commercial pours require building permits, inspections, and often third-party special inspection reports. We manage permit submittals and coordinate inspection scheduling with your project manager.",
      },
      {
        title: "Site Setup & Forming",
        desc: "Forms, shoring, and reinforcement are installed per structural drawings. Pre-pour inspections are scheduled and passed before concrete is ordered — no shortcuts that create rework.",
      },
      {
        title: "Concrete Pour & Placement",
        desc: "We coordinate the concrete delivery schedule with the plant, place via pump or chute as required by site conditions, and finish to the specified tolerance — especially critical for warehouse floors with rack loading.",
      },
      {
        title: "Testing, Curing & Close-Out",
        desc: "Concrete cylinders are cast for strength testing. The slab is cured per spec, saw-cut joints are completed, and close-out documentation including pour tickets and test reports is delivered to the GC.",
      },
    ],
  },
];

export function getServiceProcess(slug: string): ServiceProcessData | undefined {
  return serviceProcesses.find((p) => p.slug === slug);
}
