import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
        {/* Hero */}
        <section className="bg-tx-blue text-white py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <p className="text-tx-red-100 font-semibold uppercase tracking-widest text-sm mb-2">Our Work</p>
            <h1 className="text-white mb-4">Project Gallery</h1>
            <p className="text-blue-200 max-w-2xl">
              A sample of completed projects across Austin and surrounding areas.
              Every job is completed by our own crew — no subcontractors.
            </p>
          </div>
        </section>

        {/* Category filter (static for now) */}
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
                <div key={i} className="group rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg hover:border-tx-blue-100 transition-shadow">
                  {/* Placeholder image block */}
                  <div className={`h-52 ${p.bg} flex items-center justify-center`}>
                    <span className="text-gray-500 text-sm font-medium opacity-60">[ Photo Coming Soon ]</span>
                  </div>
                  <div className="p-4">
                    <span className="text-xs font-semibold text-tx-red uppercase tracking-wider">{p.category}</span>
                    <h4 className="font-bold mt-1 mb-0.5">{p.title}</h4>
                    <p className="text-gray-500 text-sm">📍 {p.location}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-500 text-sm mt-10">
              More photos available — call us or{" "}
              <Link href="/contact" className="text-tx-red font-medium hover:underline">
                send a message
              </Link>{" "}
              to see examples matching your project type.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-tx-red text-white py-14 px-4 text-center">
          <h2 className="text-white mb-4">Ready for Your Own Project?</h2>
          <p className="text-red-100 mb-6">Free estimates — we come to you.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+15127890000" className="bg-white text-tx-red font-bold px-8 py-4 rounded-md hover:bg-red-50 transition-colors">
              📞 (512) 789-0000
            </a>
            <Link href="/contact" className="btn-outline-white">Request Estimate</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
