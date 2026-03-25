import type { City } from "./cities";

function cityType(city: City): "growth" | "affluent" | "historic" {
  if (city.slug === "west-lake-hills" || city.slug === "lakeway") return "affluent";
  if (city.slug === "georgetown" || city.slug === "bastrop") return "historic";
  return "growth";
}

/**
 * Returns 3 SEO-rich paragraphs for the city hub page intro section.
 * Content varies by city type (growth / affluent / historic) with city-specific variables.
 */
export function getCityBody(city: City): string[] {
  const type = cityType(city);
  const n1 = city.neighborhoods[0];
  const n2 = city.neighborhoods[1];
  const n3 = city.neighborhoods[2];

  const bodies: Record<"growth" | "affluent" | "historic", string[]> = {
    growth: [
      `${city.name} is one of the fastest-growing communities in Central Texas, and that growth drives consistent demand for every category of concrete work — new driveways on new construction, patio slabs as homeowners settle in and start improving their outdoor spaces, foundation pours for additions and ADUs, and flatwork throughout neighborhoods like ${n1}, ${n2}, and ${n3}. We keep a crew working in ${city.name} regularly, which means faster scheduling, no travel surcharge, and competitive pricing that reflects a contractor who knows this market.`,
      `Austin's expansive clay soil doesn't stop at the city limits — it runs throughout ${city.county} County, including every subdivision in ${city.name}. Clay soil swells when wet and contracts in drought, a seasonal cycle that puts stress on every concrete slab it sits beneath. Properly built concrete in ${city.name} accounts for this: thorough subgrade compaction, correctly spaced control joints, rebar or fiber mesh reinforcement, and a quality sealer on the finished surface. These aren't optional upgrades — they're the difference between a driveway that looks sharp at 20 years and one that's crumbling at 8.`,
      `We're a licensed Texas concrete contractor serving all of ${city.name} and ${city.county} County with no subcontractors on any job. The crew that shows up to your project is our crew — the same people who formed, poured, finished, and sealed the last hundred jobs we completed in the area. We provide free written estimates with line-item pricing, coordinate permits with ${city.name}'s building department where required, and stand behind our work. If you're in ${n1}, ${n2}, or anywhere else in ${city.name}, call (512) 789-0000 to schedule a site visit.`,
    ],
    affluent: [
      `${city.name} holds one of the highest standards for residential construction quality in the greater Austin area, and concrete work is no exception. Homeowners in ${n1}, ${n2}, and throughout ${city.name} expect craftsmanship that matches the rest of the property — premium stamped and decorative finishes on driveways and patios, precise flatwork on motor courts and pool decks, and retaining walls that function as landscape design elements rather than afterthoughts. We've completed dozens of projects in ${city.name} and understand what that level of execution requires.`,
      `Decorative concrete has become the standard for ${city.name}'s most refined properties. Stamped patterns — flagstone, cobblestone, slate, large-format ashlar — combined with UV-stable color treatments and commercial-grade sealers deliver the look of natural materials at a lower long-term maintenance burden. Exposed aggregate pool decks, saw-cut inlay driveways, and acid-stained patios are all work we complete regularly in ${n1} and across ${city.name}. We bring a full sample board to every estimate visit so you can evaluate pattern and color options in your own outdoor light before committing.`,
      `Every project we complete in ${city.name} is executed with our own crew — no subcontractors, no quality variability between the crew you meet at estimate and the crew that shows up to pour. We're fully licensed in Texas, carry general liability and workers' compensation insurance, and provide free written estimates with detailed line-item pricing. For complex decorative work in ${n1}, ${n2}, or anywhere in ${city.name}, we also offer design consultations to walk through pattern, color, and finish options before any decisions are made. Call (512) 789-0000 to get started.`,
    ],
    historic: [
      `${city.name} has a character that sets it apart from the newer suburban growth corridors around Austin — established neighborhoods, mature landscaping, and a mix of historic homes and newer infill construction that creates a specific set of concrete needs. In ${n1} and ${n2}, that often means replacement work on aging driveways and patios alongside new pours for additions, ADUs, and landscaping upgrades. We understand how to work carefully in established environments — clean saw cuts at removal boundaries, careful equipment operation around root systems and irrigation, and new concrete that ties into existing grades without disturbing adjacent hardscaping.`,
      `${city.county} County's soil conditions, like most of Central Texas, include expansive clay that moves seasonally — the primary cause of cracking and settling in residential concrete across the region. This is as true in ${city.name}'s established neighborhoods as it is anywhere else. Proper subgrade preparation, correctly placed control joints, and reinforcement tailored to the load are the fundamentals that determine longevity. We bring the same preparation standards to every ${city.name} job regardless of scope — a small sidewalk replacement gets the same attention to sub-base and jointing as a full driveway pour.`,
      `We're a licensed Texas concrete contractor with our own crew serving all of ${city.name} and ${city.county} County. No subcontractors on any job — the same team handles forming, pouring, finishing, and sealing. We provide free written estimates, manage permits with ${city.name}'s building department where required, and coordinate right-of-way work with the city for public sidewalk projects. Whether you're in ${n1}, ${n2}, ${n3}, or anywhere else in ${city.name}, call (512) 789-0000 to schedule a site visit and get a detailed written quote within 48 hours.`,
    ],
  };

  return bodies[type];
}
