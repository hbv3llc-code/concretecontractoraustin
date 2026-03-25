import type { City } from "@/data/cities";

interface Props {
  city: City;
}

export default function CityPhoto({ city }: Props) {
  const n1 = city.neighborhoods[0];
  const n2 = city.neighborhoods[1];
  const n3 = city.neighborhoods[2];

  return (
    <div className="rounded-2xl overflow-hidden shadow-lg h-full">
      <div
        className="relative h-full flex flex-col"
        style={{
          background: "linear-gradient(145deg, #1a2332 0%, #243044 50%, #1e2a38 100%)",
          minHeight: "360px",
        }}
      >
        {/* Dot-grid texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />

        {/* Red left accent */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-tx-red" />

        <div className="relative flex flex-col h-full p-7 gap-5">

          {/* Location badge */}
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-tx-red border border-tx-red/30 bg-tx-red/10 rounded-full px-3 py-1">
              {city.county} County, TX
            </span>
          </div>

          {/* City name */}
          <p className="text-white font-display font-bold text-2xl leading-snug">
            Concrete Services in {city.name}
          </p>

          {/* Stats */}
          <div className="flex gap-3">
            <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-3 text-center">
              <p className="text-white font-black text-2xl leading-none mb-1">9</p>
              <p className="text-gray-400 text-xs leading-tight">services offered</p>
            </div>
            <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-3 text-center">
              <p className="text-white font-black text-2xl leading-none mb-1">{city.distanceMiles}</p>
              <p className="text-gray-400 text-xs leading-tight">mi from Austin</p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/10" />

          {/* Neighborhoods served */}
          <div>
            <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">Neighborhoods Served</p>
            <div className="flex flex-wrap gap-2">
              {[n1, n2, n3].map((n) => (
                <span
                  key={n}
                  className="text-xs bg-white/8 border border-white/12 text-gray-300 px-3 py-1 rounded-full"
                >
                  {n}
                </span>
              ))}
              <span className="text-xs bg-white/8 border border-white/12 text-gray-300 px-3 py-1 rounded-full">
                + all {city.name} area
              </span>
            </div>
          </div>

          {/* Trust marks */}
          <div className="mt-auto space-y-2 pt-2">
            {[
              "No travel surcharge to " + city.name,
              "Licensed Texas Contractor",
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
