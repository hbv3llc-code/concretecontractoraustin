/**
 * Returns 4 city+service specific FAQ items.
 * Kept in a data file so the combo page stays clean.
 */
export function getCityServiceFaqs(
  cityName: string,
  serviceTitle: string,
  serviceSlug: string,
  neighborhoods: string[]
): { question: string; answer: string }[] {
  const n1 = neighborhoods[0] ?? cityName;
  const n2 = neighborhoods[1] ?? cityName;

  const faqs: Record<string, { question: string; answer: string }[]> = {
    "concrete-driveways": [
      {
        question: `How much does a concrete driveway cost in ${cityName}, TX?`,
        answer: `Concrete driveway costs in ${cityName} typically range from $6 to $12 per square foot depending on thickness, finish, and site conditions. A standard two-car driveway (400–600 sq ft) usually runs $2,400–$7,200. We provide free written estimates so you know the exact price before any work begins.`,
      },
      {
        question: `Do you serve ${n1} and ${n2} for concrete driveways?`,
        answer: `Yes — we serve all neighborhoods in ${cityName} including ${n1}, ${n2}, and surrounding areas. There is no travel surcharge for ${cityName} jobs.`,
      },
      {
        question: `How long does a concrete driveway last in ${cityName}'s climate?`,
        answer: `A properly installed concrete driveway in ${cityName} can last 30–50 years. Central Texas heat and clay soils put stress on concrete, which is why we use proper sub-base prep, rebar reinforcement, and expansion joints on every pour.`,
      },
      {
        question: `Do I need a permit for a concrete driveway in ${cityName}?`,
        answer: `Permit requirements in ${cityName} vary by project scope and proximity to the right-of-way. We handle all permit coordination as part of our service — you won't need to navigate the city permit office yourself.`,
      },
    ],
    "concrete-patios": [
      {
        question: `How much does a concrete patio cost in ${cityName}?`,
        answer: `A standard broom-finish patio in ${cityName} runs $5–$10 per square foot. Stamped or decorative finishes range from $12–$20 per square foot. Most residential patios fall between $1,500–$8,000 depending on size and finish. Contact us for a free on-site estimate.`,
      },
      {
        question: `What patio finishes do you offer in ${cityName}?`,
        answer: `We offer broom finish, exposed aggregate, stamped patterns (brick, slate, cobblestone), acid stain, color hardeners, and UV-stable sealers. We can match nearly any aesthetic for ${cityName} homes — from modern to traditional Texas Hill Country styles.`,
      },
      {
        question: `Do you serve ${n1} for patio work?`,
        answer: `Yes — we serve ${n1}, ${n2}, and all ${cityName} neighborhoods. Same crew, same quality as Austin.`,
      },
      {
        question: `How long does it take to pour a concrete patio in ${cityName}?`,
        answer: `Most residential patio pours in ${cityName} take 1–2 days of work, plus 7 days of curing before light foot traffic and 28 days before full use. We'll give you a specific timeline at your free estimate.`,
      },
    ],
    "concrete-foundations": [
      {
        question: `Do you pour slab foundations in ${cityName}, TX?`,
        answer: `Yes — we pour both conventional and post-tension slab foundations in ${cityName} for new homes, additions, and accessory dwelling units. We work with engineers and coordinate city inspections throughout the process.`,
      },
      {
        question: `How much does a slab foundation cost in ${cityName}?`,
        answer: `Foundation costs in ${cityName} vary significantly based on square footage, soil conditions, and engineering requirements. Residential slabs typically run $5–$10 per square foot. We provide detailed written estimates after reviewing your plans and inspecting the site.`,
      },
      {
        question: `Does ${cityName}'s expansive clay soil affect concrete foundations?`,
        answer: `Yes. ${cityName} has the same Central Texas clay soils that cause slab movement throughout the region. We account for this with proper moisture barriers, pier depth, and post-tension cable layouts — following engineer-stamped plans on every foundation pour.`,
      },
      {
        question: `Do you handle ${cityName} city permits for foundation work?`,
        answer: `Yes. We coordinate all permit applications and inspections with ${cityName} building officials. You don't have to manage that process — we handle it from initial submittal through final inspection sign-off.`,
      },
    ],
    "concrete-flatwork": [
      {
        question: `What flatwork services do you offer in ${cityName}?`,
        answer: `We pour sidewalks, walkways, pool decks, garage floors, warehouse slabs, and ADA-compliant ramps throughout ${cityName}. Any horizontal concrete surface — residential or commercial — is within our scope.`,
      },
      {
        question: `How much does concrete flatwork cost in ${cityName}?`,
        answer: `Standard flatwork in ${cityName} runs $5–$9 per square foot for basic broom finish. Pool decks and decorative finishes run higher. We provide free written estimates after measuring your project.`,
      },
      {
        question: `Do you pour flatwork in ${n1}?`,
        answer: `Yes — we serve ${n1}, ${n2}, and all areas within ${cityName}. No travel fees apply within our service area.`,
      },
      {
        question: `Can you replace city sidewalk panels in ${cityName}?`,
        answer: `Yes. We handle right-of-way concrete replacement in ${cityName} and manage the required permits with the city. This includes matching existing sidewalk grades and ADA compliance where required.`,
      },
    ],
    "concrete-repair": [
      {
        question: `What concrete repair services do you offer in ${cityName}?`,
        answer: `We offer crack injection and sealing, mudjacking (slab lifting), concrete resurfacing, spall repair, and full section replacement throughout ${cityName}. We assess your concrete and recommend the most cost-effective solution.`,
      },
      {
        question: `How much does concrete repair cost in ${cityName}?`,
        answer: `Minor crack repairs in ${cityName} start around $200–$500. Mudjacking a sunken driveway section typically runs $500–$1,500. Full resurfacing runs $3–$6 per square foot. We provide free written estimates after evaluating the damage.`,
      },
      {
        question: `Can you fix cracked concrete caused by ${cityName}'s clay soils?`,
        answer: `Yes. Expansive clay soils throughout ${cityName} and the greater Austin area are a leading cause of cracked and settled concrete. We assess whether repair or replacement is the right call, and we stand behind our work.`,
      },
      {
        question: `Do you do mudjacking in ${cityName}?`,
        answer: `Yes — mudjacking (slab lifting) is one of our most cost-effective services in ${cityName}. We can lift sunken driveway sections, sidewalk panels, and patio slabs back to grade without full concrete removal.`,
      },
    ],
    "retaining-walls": [
      {
        question: `Do you build retaining walls in ${cityName}, TX?`,
        answer: `Yes — we design and build poured concrete and block retaining walls throughout ${cityName}. We account for soil pressure, drainage, and load requirements on every wall — and can provide engineer-stamped plans when required.`,
      },
      {
        question: `How much does a concrete retaining wall cost in ${cityName}?`,
        answer: `Retaining wall costs in ${cityName} depend on height, length, and engineering requirements. Typical residential walls run $30–$60 per linear foot. We provide free on-site estimates after assessing your slope and drainage conditions.`,
      },
      {
        question: `Does ${cityName}'s terrain require special retaining wall design?`,
        answer: `${cityName} has a mix of flat and rolling terrain. For walls over 4 feet, we require engineer-stamped plans and manage all permits with ${cityName} building officials. Proper drainage and geogrid reinforcement are standard on all our walls.`,
      },
      {
        question: `Do you serve ${n1} for retaining wall installation?`,
        answer: `Yes — we serve ${n1}, ${n2}, and all ${cityName} neighborhoods for retaining wall projects. No travel surcharge applies.`,
      },
    ],
    "stamped-decorative-concrete": [
      {
        question: `What stamped concrete patterns are available in ${cityName}?`,
        answer: `We offer dozens of stamped concrete patterns in ${cityName} including brick, slate, cobblestone, wood plank, flagstone, and more. We also provide acid staining, color hardeners, and exposed aggregate for custom decorative finishes.`,
      },
      {
        question: `How much does stamped concrete cost in ${cityName}?`,
        answer: `Stamped concrete in ${cityName} typically runs $12–$20 per square foot depending on pattern complexity, color, and sealer. Basic single-color stamped work starts around $12/sq ft; multi-color with custom patterns can reach $18–$22/sq ft.`,
      },
      {
        question: `How long does stamped concrete last in ${cityName}'s heat?`,
        answer: `Properly installed and sealed stamped concrete in ${cityName} lasts 25+ years. We use UV-stable sealers rated for Central Texas heat, and we recommend resealing every 2–3 years to maintain appearance and protect against sun damage.`,
      },
      {
        question: `Do you do stamped concrete driveways and patios in ${n1}?`,
        answer: `Yes — we serve ${n1} and all ${cityName} neighborhoods for stamped and decorative concrete work. We can provide photo examples of completed jobs in your area when we come out for your free estimate.`,
      },
    ],
    "concrete-removal": [
      {
        question: `Do you remove old concrete in ${cityName}?`,
        answer: `Yes — we provide full concrete demolition and removal services in ${cityName}. We use jackhammers, skid steers, and haul everything away so the site is clean and ready for a new pour. No subcontractors.`,
      },
      {
        question: `How much does concrete removal cost in ${cityName}?`,
        answer: `Concrete removal in ${cityName} typically runs $2–$6 per square foot depending on thickness, accessibility, and rebar content. We provide free on-site estimates before any work begins.`,
      },
      {
        question: `Do you handle disposal after concrete demolition in ${cityName}?`,
        answer: `Yes — we haul away all broken concrete and debris after demolition. Your site will be graded and ready for the next phase of work. We use proper disposal facilities in compliance with ${cityName} and county waste regulations.`,
      },
      {
        question: `Can you remove concrete in tight spaces in ${n1}?`,
        answer: `Yes. We have equipment sized for tight residential spaces in ${cityName} neighborhoods like ${n1}. We assess access during the estimate visit and choose the right equipment for your site.`,
      },
    ],
    "commercial-concrete": [
      {
        question: `Do you do commercial concrete work in ${cityName}?`,
        answer: `Yes — we serve commercial clients throughout ${cityName} including warehouse floors, loading docks, parking lots, retail entryways, and ADA-compliant flatwork. We have the crew size and equipment for commercial-scale pours.`,
      },
      {
        question: `Do you work with general contractors in ${cityName}?`,
        answer: `Yes — we regularly partner with general contractors, developers, and construction managers on projects in ${cityName}. We can work within tight schedules, meet inspection requirements, and coordinate with other trades.`,
      },
      {
        question: `What commercial concrete services do you offer in ${cityName}?`,
        answer: `In ${cityName} we provide commercial slab foundations, warehouse and industrial floors, parking lots, loading docks, curb and gutter, ADA flatwork, and concrete tilt-wall pads. Contact us for scope-specific questions.`,
      },
      {
        question: `How do I get a commercial concrete estimate in ${cityName}?`,
        answer: `Call us at (512) 789-0000 or fill out our estimate form. We review your plans or visit the site, and provide a detailed written quote within 24–48 hours. We work with PDF plans, CAD files, or just a site walkthrough.`,
      },
    ],
  };

  return (
    faqs[serviceSlug] ?? [
      {
        question: `Do you offer ${serviceTitle} in ${cityName}, TX?`,
        answer: `Yes — we provide ${serviceTitle.toLowerCase()} services throughout ${cityName} and surrounding areas. Call us at (512) 789-0000 or fill out our online form for a free written estimate.`,
      },
      {
        question: `How much does ${serviceTitle.toLowerCase()} cost in ${cityName}?`,
        answer: `Pricing depends on the specific scope of your project. We provide free on-site estimates for all ${serviceTitle.toLowerCase()} work in ${cityName}. Contact us and we'll schedule a site visit within 24–48 hours.`,
      },
      {
        question: `Do you serve ${n1} in ${cityName}?`,
        answer: `Yes — we serve ${n1}, ${n2}, and all neighborhoods throughout ${cityName}. No travel surcharge applies for ${cityName} jobs.`,
      },
    ]
  );
}
