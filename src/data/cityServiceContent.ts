import type { City } from "./cities";

/**
 * City "type" used to vary intro paragraph tone.
 * growth    = fast-expanding suburb (most cities)
 * affluent  = high-income enclave (West Lake Hills, Lakeway)
 * historic  = established / slower-growth (Georgetown, Bastrop)
 */
function cityType(city: City): "growth" | "affluent" | "historic" {
  if (city.slug === "west-lake-hills" || city.slug === "lakeway") return "affluent";
  if (city.slug === "georgetown" || city.slug === "bastrop") return "historic";
  return "growth";
}

/**
 * Returns a 2–3 sentence, city+service-specific intro paragraph.
 * Each combination is unique due to city data variables and service type branching.
 */
export function getCityServiceIntro(city: City, serviceSlug: string): string {
  const type = cityType(city);
  const n1 = city.neighborhoods[0];
  const n2 = city.neighborhoods[1];

  const intros: Record<string, Record<"growth" | "affluent" | "historic", string>> = {
    "concrete-driveways": {
      growth: `${city.name} is adding residents faster than almost anywhere in Texas, and every new home — and every aging driveway in established neighborhoods like ${n1} and ${n2} — is a concrete job waiting to happen. We keep a crew working in ${city.name} consistently, which means faster scheduling, competitive pricing, and no travel markup. Whether you need a new pour on a new build or a full replacement on a 15-year-old driveway that's starting to crack, we handle both ends of the market in ${city.name}.`,
      affluent: `In ${city.name}, a concrete driveway is part of the overall curb presentation — and homeowners in ${n1} and ${n2} expect craftsmanship that matches the rest of the property. We specialize in the higher-end finishes this market demands: stamped patterns, exposed aggregate borders, saw-cut designs, and premium UV sealers that hold their color and sheen through Central Texas summers. Our crew has completed dozens of premium driveway projects in ${city.name} and understands the aesthetic standard here.`,
      historic: `${city.name} has a mix of historic character and steady new construction, and both sides of the market need quality concrete work. Homeowners in ${n1} and ${n2} replacing aging driveways want a contractor who knows how to tie new concrete into existing grades without disturbing landscaping or neighboring hardscaping. We've worked in established neighborhoods like these throughout the greater Austin area and know what that kind of careful, detail-oriented work requires.`,
    },
    "concrete-patios": {
      growth: `Outdoor living space is one of the top home improvement investments in ${city.name} right now — and a concrete patio is typically the most durable, low-maintenance way to create it. In communities like ${n1} and ${n2}, we see homeowners expanding their outdoor footprints with connected patio and walkway systems that complement new landscaping. We bring those same capabilities to every ${city.name} project, with no out-of-town markup and scheduling that fits your backyard project timeline.`,
      affluent: `In ${city.name}, a concrete patio needs to look the part. We design and pour patios in ${n1} and across ${city.name} that feature stamped patterns, integrated fire pit pads, multi-level transitions, and the kind of sealer finish that still looks sharp after years of Texas sun. High-end outdoor living is the standard in this market, and we've completed enough of them here to know what quality control that requires from start to finish.`,
      historic: `${city.name}'s shaded lots and mature tree canopies create some of the most pleasant outdoor living spaces in the greater Austin area — and a well-built concrete patio ties everything together. In neighborhoods like ${n1} and ${n2}, we often work around existing trees, irrigation systems, and neighboring structures. That requires experienced formwork, careful drainage design, and concrete that's placed without damaging root systems. We've done this kind of careful patio work throughout ${city.county} County.`,
    },
    "concrete-foundations": {
      growth: `${city.name}'s construction market has been running hot, and the demand for slab foundations — both new pours and additions — shows no signs of slowing. We work directly with custom home builders, general contractors, and individual homeowners on foundation pours in ${n1}, ${n2}, and throughout ${city.name}. We coordinate with engineers and city inspectors as a matter of course, which keeps your project moving without surprises at the permit office.`,
      affluent: `Building or adding onto a home in ${city.name} starts with a foundation that's poured correctly the first time. In ${n1} and across ${city.name}, we work with engineers, architects, and general contractors on foundations for custom homes, additions, and ADUs — managing permits, inspections, and the post-tension stressing process on schedule. Every foundation we pour is executed to the engineer's specifications, inspected before pour, and documented for your records.`,
      historic: `${city.name}'s ${city.county} County market includes both new construction subdivisions and older lots with renovation or addition potential. We pour foundations for new homes, ADUs, and additions throughout ${city.name}, managing ${city.county} County permits and coordinating with engineers who understand the local soil conditions. Whether you're building from scratch or adding square footage to an existing home, we provide the same level of permit management and inspection coordination on every job.`,
    },
    "concrete-flatwork": {
      growth: `${city.name}'s rapid growth means walkways, pool decks, and garage approach slabs are being poured at scale throughout the area. We serve flatwork clients in ${n1}, ${n2}, and throughout ${city.name} — whether that's a simple sidewalk replacement, a pool deck pour, or a commercial warehouse floor. We handle permits with ${city.name}'s building department and coordinate inspections so you don't have to.`,
      affluent: `In ${city.name}, flatwork is often the connective tissue between a great home and a great outdoor space. Walkways, motor court aprons, pool decks, and covered patio slabs in ${n1} and across ${city.name} need to be level, durable, and finished to the aesthetic standard of the surrounding property. We deliver tight tolerances, clean saw-cut lines, and decorative finishes — including exposed aggregate pool decks and broom-finish walks with stamped borders — to match the quality standard of every home we work on here.`,
      historic: `Flatwork in ${city.name} often involves tying into existing concrete, navigating mature landscaping, and working around historic or distinctive architecture. In ${n1} and throughout ${city.name}, we handle sidewalk replacements, pool decks, and walkway pours with the care that established neighborhoods require — clean saw cuts at the removal boundary, grades that drain properly, and finishes that complement the surrounding environment.`,
    },
    "concrete-repair": {
      growth: `${city.name}'s Central Texas clay soils move with the seasons, and driveways, patios, and walkways across ${n1}, ${n2}, and other neighborhoods are starting to show it — cracking, heaving, and settling are all part of the local concrete reality. We assess and repair concrete throughout ${city.name}, recommending the right approach (crack sealing, mudjacking, or resurfacing) rather than defaulting to expensive full replacement when it isn't necessary.`,
      affluent: `${city.name}'s premium homes deserve concrete that looks and performs like new — but replacement isn't always the right answer. We inspect and repair concrete in ${n1} and throughout ${city.name} and provide honest assessments of what can be repaired versus what needs replacement. When repair is the right call — mudjacking a settled section, resurfacing a weathered patio, or sealing cracks before they grow — we do it right and stand behind the work.`,
      historic: `${city.name}'s older homes and established neighborhoods often have concrete that's 20–30 years old — well past the age where minor issues become major ones without intervention. We assess and repair driveways, patios, and walkways throughout ${city.name}, including in ${n1} and ${n2}, where aging concrete is common. Mudjacking, crack injection, and resurfacing can extend the life of a slab another 10–20 years for a fraction of replacement cost.`,
    },
    "retaining-walls": {
      growth: `${city.name}'s sloped terrain in areas like ${n1} and ${n2} frequently requires retaining walls as part of a home's grading and drainage plan. We design and build concrete and block retaining walls throughout ${city.name} — handling ${city.county} County permits, coordinating engineering for taller walls, and building in proper drainage that protects the wall for decades.`,
      affluent: `Retaining walls in ${city.name} need to do double duty — structural performance and curb appeal. Properties in ${n1} and across ${city.name} often feature decorative retaining walls that double as landscape design elements, using stamped faces, natural stone veneer, or contrasting cap styles. We build walls that hold soil, manage drainage, and look deliberate — not like an afterthought.`,
      historic: `${city.name}'s rolling terrain and mature landscapes often require retaining walls that work with the environment rather than against it. In ${n1} and throughout ${city.name}, we build concrete and block retaining walls sized correctly for their load, with proper drainage behind them — which is the most important factor in wall longevity. We manage the permit process in ${city.county} County and require engineer-stamped drawings for any wall over 4 feet.`,
    },
    "stamped-decorative-concrete": {
      growth: `Decorative concrete is one of the fastest ways for ${city.name} homeowners to increase outdoor living appeal and property value. In neighborhoods like ${n1} and ${n2}, stamped driveways and patios are increasingly common as the area matures and homeowners invest in curb appeal. We bring sample boards to every estimate visit so you can see pattern and color options in your own natural light before committing.`,
      affluent: `${city.name} homeowners in ${n1} and across the area consistently choose stamped and decorative concrete over pavers for its seamless joints, lower long-term maintenance, and ability to be customized to virtually any aesthetic. We've completed stamped driveways, pool decks, and custom patios throughout ${city.name} — and we understand the level of finish detail and color precision this market demands. We use only UV-stable sealers rated for Central Texas climate.`,
      historic: `${city.name}'s classic architecture and established landscaping pair beautifully with natural-pattern stamped concrete — cobblestone, slate, and flagstone patterns that complement historic character far better than plain broom-finish. In ${n1} and throughout ${city.name}, we've poured stamped patios and walkways that fit the neighborhood's character while delivering the durability of modern concrete. We bring full pattern and color samples to every estimate.`,
    },
    "concrete-removal": {
      growth: `Growing ${city.name} means old pours come out regularly to make way for additions, landscaping upgrades, and new driveway configurations. In ${n1}, ${n2}, and throughout ${city.name}, we handle complete concrete demolition and removal — our own crew, our own equipment, no subcontractors — and haul everything away so the site is clean and ready for the next phase.`,
      affluent: `In ${city.name}, concrete removal needs to be executed with care — protecting irrigation systems, pavers, landscaping, and adjacent structures that aren't part of the scope. We work in ${n1} and across ${city.name} with that level of attention: clean saw cuts at the boundaries, careful equipment operation in tight spaces, and a site left ready for a quality new installation.`,
      historic: `Removing concrete in established ${city.name} neighborhoods like ${n1} and ${n2} requires awareness of root systems, utility lines, and adjacent structures that wouldn't be a concern on a raw lot. We assess access, set up equipment carefully, and make clean cuts at removal boundaries so adjacent concrete you're keeping doesn't get disturbed. Everything is hauled away and the site is graded for the next trade.`,
    },
    "commercial-concrete": {
      growth: `${city.name}'s rapid commercial growth — retail centers, industrial parks, and mixed-use developments in areas like ${n1} and ${n2} — creates consistent demand for commercial concrete work. We serve builders, developers, and business owners throughout ${city.name} with the crew size, equipment, and experience to handle commercial-scale pours on schedule and to spec.`,
      affluent: `${city.name}'s commercial and mixed-use developments demand the same quality standard as its residential market. We work with general contractors and developers throughout ${city.name} on commercial slabs, parking areas, and flatwork — meeting structural specs, coordinating with special inspection firms, and delivering close-out documentation that satisfies lender and inspector requirements.`,
      historic: `${city.name}'s commercial market includes both historic downtown development and new construction on the city's expanding edges. We serve commercial clients throughout ${city.name} and ${city.county} County — from small business concrete work to larger GC-partnered slab pours — with the same permit coordination, inspection management, and quality control we bring to every project.`,
    },
  };

  const serviceIntros = intros[serviceSlug];
  if (!serviceIntros) {
    return `We have been providing ${serviceSlug.replace(/-/g, " ")} services in ${city.name} for years, serving neighborhoods like ${n1}, ${n2}, and the surrounding area. ${city.blurb} Our crew operates from Austin and travels to ${city.name} with no travel surcharge and no reduction in service scope.`;
  }
  return serviceIntros[type];
}

/**
 * Returns a short sentence about why this service matters in this city specifically.
 * Used in the hero sub-headline or secondary description.
 */
export function getCityServiceSubtitle(city: City, serviceSlug: string): string {
  const type = cityType(city);
  const subtitles: Record<string, Record<"growth" | "affluent" | "historic", string>> = {
    "concrete-driveways": {
      growth: `Serving ${city.name}'s growing neighborhoods with durable concrete driveways — properly reinforced, correctly jointed, and built for Central Texas clay.`,
      affluent: `Premium concrete driveways for ${city.name} — stamped finishes, decorative borders, and UV sealers that match the standard of the neighborhood.`,
      historic: `Concrete driveway replacement and new pours in ${city.name} — matching grades, protecting landscaping, and delivering quality that lasts.`,
    },
    "concrete-patios": {
      growth: `Custom concrete patios for ${city.name} homeowners — stamped, broom-finish, or stained, designed to extend your outdoor living space and add lasting value.`,
      affluent: `Decorative concrete patios for ${city.name}'s discerning homeowners — stamped patterns, integrated steps, and premium sealers built for Texas sun.`,
      historic: `Concrete patios for ${city.name}'s established homes — built around mature trees, existing grades, and the architectural character of your neighborhood.`,
    },
    "concrete-foundations": {
      growth: `Slab foundations for new construction and additions in ${city.name} — poured to engineer specs, permitted, and inspected through every phase.`,
      affluent: `Precision foundation pours for ${city.name} custom homes and additions — coordinating engineers, inspections, and post-tension stressing on your schedule.`,
      historic: `New construction and addition foundations in ${city.name} — managing ${city.county} County permits and delivering engineer-compliant pours from start to sign-off.`,
    },
    "concrete-flatwork": {
      growth: `Flatwork throughout ${city.name} — sidewalks, pool decks, garage slabs, and ADA-compliant walks, poured level and finished to last.`,
      affluent: `Premium flatwork for ${city.name} properties — tight tolerances, decorative finishes, and the kind of clean execution that complements a well-built home.`,
      historic: `Concrete flatwork in ${city.name} — sidewalk replacements, pool decks, and walkways installed with care around existing landscaping and structures.`,
    },
    "concrete-repair": {
      growth: `Concrete repair throughout ${city.name} — crack sealing, mudjacking, and resurfacing that extends slab life without the cost of full replacement.`,
      affluent: `Expert concrete repair in ${city.name} — professional diagnosis, honest recommendations, and quality repairs that restore both function and appearance.`,
      historic: `Concrete repair for ${city.name}'s older slabs — mudjacking, crack injection, and resurfacing that breathe new life into aging driveways, patios, and walks.`,
    },
    "retaining-walls": {
      growth: `Concrete and block retaining walls throughout ${city.name} — engineered for load, built with drainage, and permitted through ${city.county} County.`,
      affluent: `Structural retaining walls for ${city.name} properties — engineered performance combined with decorative finishes that complement high-end landscaping.`,
      historic: `Retaining walls in ${city.name} — proper drainage, engineer-stamped plans where required, and construction that works with your site's natural grade.`,
    },
    "stamped-decorative-concrete": {
      growth: `Stamped and decorative concrete in ${city.name} — transform driveways, patios, and pool decks with custom patterns and UV-stable sealers.`,
      affluent: `Decorative concrete craftsmanship for ${city.name} — premium stamped patterns, acid staining, and sealer finishes for the area's most discerning homeowners.`,
      historic: `Decorative concrete for ${city.name} homes — natural-look stamped patterns and stains that complement historic character and established landscaping.`,
    },
    "concrete-removal": {
      growth: `Concrete demolition and removal throughout ${city.name} — our own crew, our own equipment, site left clean and ready for the next pour.`,
      affluent: `Careful concrete removal in ${city.name} — protecting irrigation, landscaping, and adjacent structures while clearing the site for a quality new installation.`,
      historic: `Concrete removal in established ${city.name} neighborhoods — clean cuts, careful equipment operation, and full debris haul-out to leave the site ready.`,
    },
    "commercial-concrete": {
      growth: `Commercial concrete services for ${city.name}'s growing business base — slabs, parking lots, flatwork, and GC partnerships throughout ${city.county} County.`,
      affluent: `Commercial concrete for ${city.name} developers and builders — meeting structural specs, managing inspections, and delivering full close-out documentation.`,
      historic: `Commercial concrete throughout ${city.name} — from downtown rehabilitation projects to new commercial construction on the city's expanding edge.`,
    },
  };

  return subtitles[serviceSlug]?.[type] ?? `Expert ${serviceSlug.replace(/-/g, " ")} in ${city.name}, TX — licensed, insured, and serving all ${city.name} neighborhoods.`;
}
