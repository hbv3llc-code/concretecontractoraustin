import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroQuoteForm from "@/components/HeroQuoteForm";
import ServiceIcon from "@/components/ServiceIcon";
import { services } from "@/data/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concrete Services Austin TX | Austin Premier Concrete",
  description:
    "Full-service concrete contractor in Austin TX — driveways, patios, foundations, flatwork, repair, and retaining walls. Free estimates.",
};

export default function ServicesPage() {
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
                Austin&apos;s Premier Concrete Contractor
              </p>
              <h1 className="text-white mb-5">
                Concrete Services in Austin, TX
              </h1>
              <p className="text-blue-200 text-lg mb-8 leading-relaxed">
                From driveways to full slab foundations, we handle every type of concrete work
                for Austin homeowners and businesses. Licensed, insured, and satisfaction guaranteed.
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-blue-200">
                {["Licensed & Insured", "5-Star Rated", "Free Written Estimates", "15+ Years Experience"].map((b) => (
                  <span key={b} className="flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-tx-red inline-block shrink-0" />
                    {b}
                  </span>
                ))}
              </div>
            </div>
            <HeroQuoteForm id="services-quote-form" />
          </div>
        </section>

        {/* Services grid */}
        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-tx-red font-semibold uppercase tracking-widest text-xs mb-2">What We Do</p>
            <h2 className="mb-4">Every Type of Concrete Work</h2>
            <p className="text-gray-600 mb-10 max-w-2xl">
              Our own crew handles every job from estimate to final finish — no subcontractors,
              no surprises.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((s) => (
                <div
                  key={s.slug}
                  className="border border-gray-200 border-t-4 border-t-tx-blue-100 rounded-xl p-8 flex flex-col gap-4 hover:shadow-lg hover:border-t-tx-red transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-tx-blue-50 rounded-lg flex items-center justify-center shrink-0 border border-tx-blue-100 group-hover:bg-tx-red group-hover:border-tx-red transition-all">
                      <ServiceIcon slug={s.slug} size={20} className="text-tx-blue group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 group-hover:text-tx-red transition-colors">{s.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{s.longDesc}</p>
                    </div>
                  </div>
                  <ul className="grid grid-cols-2 gap-2 mt-1">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="w-1 h-1 rounded-full bg-tx-red inline-block shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/services/${s.slug}`} className="btn-primary self-start mt-2">
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
