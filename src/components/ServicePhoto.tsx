interface Props {
  serviceSlug: string;
  serviceTitle: string;
  city?: string;
}

const config: Record<string, {
  tagline: string;
  stats: { value: string; label: string }[];
  tags: string[];
}> = {
  "concrete-driveways": {
    tagline: "Built to Last 30+ Years in Austin's Heat",
    stats: [
      { value: "30+", label: "yr service life" },
      { value: "4–6″", label: "reinforced slab" },
    ],
    tags: ["Broom Finish", "Stamped", "Exposed Aggregate", "Rebar Reinforced", "UV Sealed"],
  },
  "concrete-patios": {
    tagline: "Outdoor Living Spaces Built for Texas Summers",
    stats: [
      { value: "100+", label: "patios poured" },
      { value: "1/8″", label: "drainage slope/ft" },
    ],
    tags: ["Stamped Patterns", "Acid Stain", "Exposed Aggregate", "Broom Finish", "UV Sealed"],
  },
  "concrete-foundations": {
    tagline: "Engineer-Stamped, Inspected, Built to Code",
    stats: [
      { value: "100%", label: "permitted & inspected" },
      { value: "PT", label: "post-tension capable" },
    ],
    tags: ["Post-Tension", "Conventional Slab", "ADU Foundations", "Permit Coordination"],
  },
  "concrete-flatwork": {
    tagline: "Laser-Level Flatwork for Any Surface",
    stats: [
      { value: "ADA", label: "compliant slopes" },
      { value: "6″", label: "commercial grade" },
    ],
    tags: ["Pool Decks", "Sidewalks", "Warehouse Floors", "ADA Compliant", "Right-of-Way Permits"],
  },
  "concrete-repair": {
    tagline: "Honest Assessment — Right Fix, Not the Expensive One",
    stats: [
      { value: "10–15", label: "yrs added life" },
      { value: "50%", label: "vs replacement cost" },
    ],
    tags: ["Mudjacking", "Crack Injection", "Resurfacing", "Slab Lifting", "Spall Repair"],
  },
  "retaining-walls": {
    tagline: "Engineered to Hold — Drained to Last",
    stats: [
      { value: "4+", label: "ft — permit required" },
      { value: "PE", label: "engineer-stamped" },
    ],
    tags: ["Poured Concrete", "Block Walls", "French Drain", "Geogrid", "Decorative Finishes"],
  },
  "stamped-decorative-concrete": {
    tagline: "Custom Patterns, Colors & Finishes",
    stats: [
      { value: "20+", label: "stamp patterns" },
      { value: "UV", label: "stable sealers" },
    ],
    tags: ["Flagstone", "Cobblestone", "Brick Pattern", "Acid Stain", "Exposed Aggregate"],
  },
  "concrete-removal": {
    tagline: "Clean Demo — Site Ready for the Next Pour",
    stats: [
      { value: "100%", label: "debris hauled out" },
      { value: "0", label: "subcontractors" },
    ],
    tags: ["Jackhammer Demo", "Skid Steer", "Debris Haul-Out", "Sub-Base Grading", "Saw Cutting"],
  },
  "commercial-concrete": {
    tagline: "Commercial Scale — On Schedule, On Spec",
    stats: [
      { value: "6–8″", label: "forklift-rated slabs" },
      { value: "FF/FL", label: "laser screed tolerance" },
    ],
    tags: ["Warehouse Floors", "Parking Lots", "ADA Flatwork", "GC Partnerships", "COI Ready"],
  },
};

const fallback = {
  tagline: "Licensed Concrete Contractor — Austin, TX",
  stats: [
    { value: "5★", label: "rated" },
    { value: "Free", label: "written estimate" },
  ],
  tags: ["Licensed & Insured", "Own Crew", "Free Estimate", "Permit Coordination"],
};

export default function ServicePhoto({ serviceSlug, serviceTitle, city }: Props) {
  const c = config[serviceSlug] ?? fallback;

  return (
    <div className="rounded-2xl overflow-hidden shadow-lg h-full">
      {/* Dark concrete-toned card */}
      <div
        className="relative h-full flex flex-col"
        style={{
          background: "linear-gradient(145deg, #1a2332 0%, #243044 50%, #1e2a38 100%)",
          minHeight: "360px",
        }}
      >
        {/* Subtle dot-grid texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />

        {/* Red left accent bar */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-tx-red" />

        {/* Content */}
        <div className="relative flex flex-col h-full p-7 gap-5">

          {/* Service label */}
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-tx-red border border-tx-red/30 bg-tx-red/10 rounded-full px-3 py-1">
              {serviceTitle}
            </span>
            {city && (
              <p className="text-gray-400 text-xs mt-2 pl-0.5">{city}, TX</p>
            )}
          </div>

          {/* Tagline */}
          <p className="text-white font-display font-bold text-xl leading-snug">
            {c.tagline}
          </p>

          {/* Stats */}
          <div className="flex gap-3">
            {c.stats.map((s) => (
              <div
                key={s.label}
                className="flex-1 bg-white/5 border border-white/10 rounded-xl p-3 text-center"
              >
                <p className="text-white font-black text-2xl leading-none mb-1">{s.value}</p>
                <p className="text-gray-400 text-xs leading-tight">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-white/10" />

          {/* Feature tags */}
          <div className="flex flex-wrap gap-2">
            {c.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-white/8 border border-white/12 text-gray-300 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Trust marks */}
          <div className="mt-auto space-y-2 pt-2">
            {[
              "Licensed Texas Contractor",
              "Own Crew — No Subcontractors",
              "Free Written Estimate",
            ].map((t) => (
              <div key={t} className="flex items-center gap-2.5 text-sm text-gray-300">
                <span className="w-4 h-4 rounded-full bg-tx-red/20 border border-tx-red/40 flex items-center justify-center shrink-0">
                  <svg className="w-2.5 h-2.5 text-tx-red" fill="none" viewBox="0 0 10 8">
                    <path
                      d="M1 4l2.5 2.5L9 1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
