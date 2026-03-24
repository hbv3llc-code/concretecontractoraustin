import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroQuoteForm from "@/components/HeroQuoteForm";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concrete Project Gallery | Austin Premier Concrete",
  description:
    "Browse our portfolio of completed concrete driveways, patios, foundations, and flatwork projects across Austin, TX.",
};

const categories = ["All", "Driveways", "Patios", "Flatwork", "Retaining Walls", "Foundations"];

const projects = [
  { title: "Exposed Aggregate Driveway", location: "Round Rock, TX", category: "Driveways", bg: "bg-stone-300" },
  { title: "Stamped Patio — Ashlar Slate", location: "Cedar Park, TX", category: "Patios", bg: "bg-amber-200" },
  { title: "Broom Finish Driveway", location: "Pflugerville, TX", category: "Driveways", bg: "bg-gray-300" },
  { title: "Pool Deck Resurfacing", location: "Austin, TX", category: "Flatwork", bg: "bg-sky-200" },
  { title: "Residential Slab Foundation", location: "Kyle, TX", category: "Foundations", bg: "bg-zinc-300" },
  { title: "Stacked Stone Retaining Wall", location: "Austin, TX", category: "Retaining Walls", bg: "bg-stone-400" },
  { title: "Colored Patio — Terracotta", location: "Buda, TX", category: "Patios", bg: "bg-red-200" },
  { title: "Commercial Sidewalk Flatwork", location: "Austin, TX", category: "Flatwork", bg: "bg-gray-200" },
  { title: "Broomed Concrete Driveway", location: "Leander, TX", category: "Driveways", bg: "bg-neutral-300" },
];

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="flex-1">

        {/* Hero — 2-column with embedded quote form */}
        <section className="bg-tx-blue text-white py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-tx-blue-700 via-tx-blue to-tx-blue-600" aria-hidden="true" />
          <div
            className="absolute right-0 top-0 h-full w-1/2 opacity-[0.04] pointer-events-none"
            style={{ background: "repeating-linear-gradient(135deg, #fff 0, #fff 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }}
            aria-hidden="true"
          />
          <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-tx-red-100 font-semibold uppercase tracking-widest text-xs mb-5 border-l-2 border-tx-red pl-3">
                Our Work
              </p>
              <h1 className="text-white mb-5">Project Gallery</h1>
              <p className="text-blue-200 text-lg mb-8 leading-relaxed">
                A sample of completed projects across Austin and surrounding areas.
                Every job is completed by our own crew — no subcontractors.
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-blue-200">
                {["Driveways", "Patios & Decks", "Foundations", "Retaining Walls", "Flatwork"].map((b) => (
                  <span key={b} className="flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-tx-red inline-block shrink-0" />
                    {b}
                  </span>
                ))}
              </div>
            </div>
            <HeroQuoteForm id="gallery-quote-form" />
          </div>
        </section>

        {/* Category filter */}
        <section className="bg-white border-b border-gray-200 py-4 px-4 sticky top-[112px] z-40">
          <div className="max-w-6xl mx-auto flex gap-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap cursor-pointer transition-colors ${
                  cat === "All"
                    ? "bg-tx-blue text-white"
                    : "bg-tx-blue-50 text-tx-blue hover:bg-tx-blue hover:text-white"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </section>

        {/* Grid */}
        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((p, i) => (
                <div
                  key={i}
                  className="group rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all"
                >
                  <div className={`h-52 ${p.bg} relative`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-gray-500 text-sm font-medium opacity-50">Photo Coming Soon</span>
                    </div>
                    <span className="absolute top-3 left-3 bg-tx-blue text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                      {p.category}
                    </span>
                  </div>
                  <div className="p-5 border-t-4 border-t-tx-blue-100 group-hover:border-t-tx-red transition-all">
                    <h4 className="font-bold mb-1 group-hover:text-tx-red transition-colors">{p.title}</h4>
                    <p className="text-gray-500 text-sm">{p.location}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 border border-gray-200 rounded-xl p-8 text-center">
              <p className="text-gray-600 text-sm">
                More photos available — call us or{" "}
                <Link href="/contact" className="text-tx-red font-semibold hover:underline">
                  send a message
                </Link>{" "}
                to see examples matching your project type.
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
