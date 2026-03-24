/**
 * Returns 7 city+service specific FAQ items.
 * Questions cover: cost, location, longevity, permits, timeline,
 * concrete-vs-alternative comparisons, and contractor selection.
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
      {
        question: `How long does it take to pour a concrete driveway in ${cityName}?`,
        answer: `Most residential concrete driveways in ${cityName} take 1–2 days of active work: one day for prep and forming, one day for the pour. Then you'll need 7 days of cure time before driving on it and 28 days for full strength. We'll give you a specific schedule at your free estimate.`,
      },
      {
        question: `Concrete driveway vs asphalt in ${cityName} — which is better?`,
        answer: `Concrete typically outlasts asphalt 2:1 in Central Texas (30–50 years vs 15–20 years) and performs better in ${cityName}'s summer heat — asphalt softens and ruts in extreme temperatures. Concrete costs more upfront but requires less maintenance and no periodic re-sealing. For most ${cityName} homeowners, concrete is the better long-term value.`,
      },
      {
        question: `How do I choose the best concrete driveway contractor in ${cityName}?`,
        answer: `Look for a contractor who is licensed, insured, and can show you completed driveways in ${cityName}. Get at least two written estimates that detail thickness, reinforcement, finish, and warranty. We're happy to provide references from past jobs in ${cityName} and surrounding areas — just ask when you request your free estimate.`,
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
      {
        question: `How do I maintain a concrete patio in ${cityName}'s heat and sun?`,
        answer: `${cityName}'s intense UV and summer heat can fade and dry out concrete surfaces. We recommend resealing your patio every 2–3 years with a UV-stable penetrating sealer, promptly cleaning oil or organic stains, and keeping adjacent sprinkler heads pointed away from the slab to reduce erosion at the edges.`,
      },
      {
        question: `Concrete patio vs pavers in ${cityName} — which should I choose?`,
        answer: `Concrete patios typically cost 30–50% less than pavers for the same square footage and have no joints for weeds to grow through. Pavers offer easier individual replacement if one cracks. In ${cityName}'s clay-soil conditions, a properly reinforced concrete slab with expansion joints performs very well. We can walk you through both options at your free estimate.`,
      },
      {
        question: `Is a concrete patio a good investment in ${cityName}?`,
        answer: `Yes. Outdoor living space is highly valued in ${cityName}'s climate, and a quality concrete patio can return significant value at resale. Concrete is durable, low-maintenance, and lasts 25+ years when properly installed — making it one of the highest-ROI outdoor projects for ${cityName} homeowners.`,
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
      {
        question: `How long does it take to pour a slab foundation in ${cityName}?`,
        answer: `A typical residential slab in ${cityName} takes 1–3 days to form and pour, but the full process — from excavation to final inspection — usually runs 2–4 weeks including engineer reviews, pre-pour inspection, and cure time. We'll provide a project-specific schedule at your estimate.`,
      },
      {
        question: `What's the difference between a post-tension and conventional slab in ${cityName}?`,
        answer: `Post-tension slabs use high-strength steel cables tensioned after the pour to resist the movement caused by ${cityName}'s expansive clay soils. Conventional slabs use rebar grids. Post-tension is increasingly required by engineers in Central Texas because it better handles soil shrink-swell cycles. We pour both and will follow whatever your engineer specifies.`,
      },
      {
        question: `What inspections are required for a foundation pour in ${cityName}?`,
        answer: `${cityName} typically requires a pre-pour inspection (verifying forms, rebar, and vapor barrier) and a final structural inspection. For post-tension slabs, a PT inspection may also be required. We schedule and coordinate all inspections — you don't need to track this separately.`,
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
      {
        question: `How long does concrete flatwork take in ${cityName}?`,
        answer: `Most residential flatwork projects in ${cityName} — sidewalks, walkways, garage floors — are poured in a single day. Larger commercial slabs may take 2–3 days. Add 7 days of cure time before foot traffic and 28 days for vehicle traffic. We'll give you a timeline at your free estimate.`,
      },
      {
        question: `Can you match existing concrete color when replacing sections in ${cityName}?`,
        answer: `We can get close, but a perfect color match is difficult because existing concrete weathers and fades over time while new concrete is bright. We'll discuss expectations at your estimate and can use color hardeners or integral pigments to minimize the contrast if that's a priority for your ${cityName} project.`,
      },
      {
        question: `What's the difference between residential and commercial flatwork in ${cityName}?`,
        answer: `Commercial flatwork in ${cityName} typically requires thicker slabs (5–8 inches vs 4 inches), heavier reinforcement (rebar or fiber), higher PSI mixes, and may require special inspections and documented quality control. We handle both and will spec the right design for your project's load requirements.`,
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
      {
        question: `Is it worth repairing concrete or should I replace it in ${cityName}?`,
        answer: `Repair is worth it when the damage is limited to the surface or isolated sections and the underlying base is sound. Replacement makes more sense when concrete is severely cracked throughout, has significant structural movement, or is too deteriorated to resurface effectively. We'll give you an honest assessment at your free estimate — including when replacement is actually the better value.`,
      },
      {
        question: `How long does a concrete repair last in ${cityName}?`,
        answer: `A properly done repair in ${cityName} can last 10–20+ years. The key factors are addressing the root cause (poor drainage, soil movement, tree roots), using the right repair materials, and proper surface prep. Band-aid repairs that don't address the cause will fail faster — we always diagnose why the damage occurred.`,
      },
      {
        question: `What causes concrete to crack in ${cityName}?`,
        answer: `The most common causes in ${cityName} are expansive clay soils that swell in rain and shrink in drought, tree root pressure, inadequate base preparation during original installation, freeze-thaw cycles (less common but they do occur in Central Texas), and heavy vehicle loads on slabs not designed for them. We identify the cause before recommending a repair method.`,
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
      {
        question: `How long does a concrete retaining wall last in ${cityName}?`,
        answer: `A properly built concrete retaining wall in ${cityName} typically lasts 50+ years. The most common causes of early failure are inadequate drainage behind the wall (hydrostatic pressure buildup) and undersized footings. We engineer drainage into every wall we build and size footings for your specific soil conditions.`,
      },
      {
        question: `Concrete vs block retaining wall in ${cityName} — which is better?`,
        answer: `Poured concrete walls are stronger and better suited for taller or heavily loaded walls. Segmental block (Allan Block, Versa-Lok) is more flexible for curved layouts and DIY-friendly aesthetics. In ${cityName}'s clay soils, both need proper drainage — the right choice depends on wall height, loading, and aesthetic preference. We'll recommend the best option at your free on-site estimate.`,
      },
      {
        question: `What happens if a retaining wall isn't drained properly in ${cityName}?`,
        answer: `Poor drainage is the leading cause of retaining wall failure in Central Texas. When water saturates the soil behind a wall, hydrostatic pressure builds until the wall tilts, cracks, or collapses. We install drainage aggregate, weep holes or perforated pipe behind every wall we build in ${cityName} — this is non-negotiable on our jobs.`,
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
      {
        question: `How do I maintain stamped concrete in ${cityName}'s heat and UV?`,
        answer: `Stamped concrete in ${cityName} needs resealing every 2–3 years to protect color and texture from UV fading and sun damage. Use a pH-neutral cleaner for routine cleaning, avoid harsh chemicals, and promptly clean oil or grease stains. Keep sprinkler heads pointed away from the slab. We can reseal existing stamped concrete in addition to installing new work.`,
      },
      {
        question: `Stamped concrete vs pavers in ${cityName} — which is better?`,
        answer: `Stamped concrete typically costs 20–40% less than comparable pavers and has no joints for weeds or fire ants to move through — a real benefit in Central Texas. Pavers allow individual piece replacement if one cracks. Stamped concrete, if cracked, requires resurfacing or section replacement. For most ${cityName} homeowners prioritizing budget and low maintenance, stamped concrete is the better value. We can show you examples of both at your estimate.`,
      },
      {
        question: `Can stamped concrete be repaired if it chips or cracks in ${cityName}?`,
        answer: `Yes, though repairs are more visible on decorative concrete than on plain broom-finish. Small chips can be patched and resealed with good results. Large cracks or sections can be cut out and replaced, then restamped and stained to match. The key is using the right repair materials and resealing the entire surface after — we handle stamped concrete repair throughout ${cityName}.`,
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
      {
        question: `How long does concrete removal take in ${cityName}?`,
        answer: `A standard residential driveway or patio removal in ${cityName} typically takes half a day to a full day. Larger commercial slabs or jobs with heavy rebar may take 2–3 days. We'll give you a timeline at your free on-site estimate.`,
      },
      {
        question: `Is it cheaper to remove and replace or resurface old concrete in ${cityName}?`,
        answer: `Resurfacing ($3–$6/sq ft) is cheaper upfront than full removal and replacement ($8–$15+ total), but only makes sense when the existing slab is structurally sound with no major cracking or settlement. If the base or slab is compromised, resurfacing will fail quickly and you'll pay twice. We'll give you an honest recommendation after evaluating your concrete — not just what costs more.`,
      },
      {
        question: `What happens to old concrete after removal in ${cityName}?`,
        answer: `Broken concrete is either recycled as road base aggregate (the most common and environmentally responsible disposal) or taken to a licensed concrete recycling facility. We handle all disposal — you don't need to arrange a dumpster or haul anything yourself. The site will be broom-clean when we're done.`,
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
      {
        question: `Are you licensed and insured for commercial concrete work in ${cityName}?`,
        answer: `Yes — we are fully licensed, bonded, and carry general liability and workers' compensation insurance. We can provide certificates of insurance naming your company or project as additional insured, which most commercial clients in ${cityName} require. Ask for our COI when you request your estimate.`,
      },
      {
        question: `How far in advance should I schedule commercial concrete in ${cityName}?`,
        answer: `For large commercial pours in ${cityName}, we recommend scheduling 2–4 weeks in advance to ensure crew availability and concrete delivery windows. Smaller commercial jobs (under 5,000 sq ft) can often be scheduled within 1–2 weeks. Contact us early — commercial pours have to coordinate with ready-mix plants and weather windows.`,
      },
      {
        question: `Do you provide special inspection documentation for commercial pours in ${cityName}?`,
        answer: `Yes. Many commercial projects in ${cityName} require third-party special inspections for concrete placement. We coordinate with special inspectors, maintain pour logs, and ensure concrete delivery tickets and cylinder test records are preserved. We can work with your structural engineer's inspection requirements from the start.`,
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
