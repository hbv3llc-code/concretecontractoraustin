import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteSection from "@/components/QuoteSection";
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

        {/* Page hero */}
        <section className="bg-tx-blue text-white py-16 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-tx-blue-700 via-tx-blue to-tx-blue-600" aria-hidden="true" />
          <div
            className="absolute right-0 top-0 h-full w-1/2 opacity-[0.04] pointer-events-none"
            style={{ background: "repeating-linear-gradient(135deg, #fff 0, #fff 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }}
            aria-hidden="true"
          />
          <div className="relative max-w-6xl mx-auto">
            <p className="text-tx-red-100 font-semibold uppercase tracking-widest text-xs mb-5 border-l-2 border-tx-red pl-3">
              Our Work
            </p>
            <h1 className="text-white mb-4">Concrete Services in Austin, TX</h1>
            <p className="text-blue-200 max-w-2xl text-lg">
              From driveways to full slab foundations, we handle all concrete work for Austin
              homeowners and businesses. Licensed, insured, and satisfaction guaranteed.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-blue-200">
              {["Licensed & Insured", "5-Star Rated", "Free Written Estimates", "15+ Years Experience"].map((b) => (
                <span key={b} className="flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-tx-red inline-block shrink-0" />
                  {b}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Services grid */}
        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-tx-red font-semibold uppercase tracking-widest text-xs mb-2">What We Do</p>
            <h2 className="mb-4">Every Type of Concrete Work</h2>
            <p className="text-gray-600 mb-10 max-w-2xl">
              Whether you need a new driveway, a stamped patio, or a commercial slab — our own crew
              handles it from estimate to final finish.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((s) => (
                <div
                  key={s.slug}
                  className="border border-gray-200 border-t-4 border-t-tx-blue-100 rounded-xl p-8 flex flex-col gap-4 hover:shadow-lg hover:border-t-tx-red transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-4xl shrink-0">{s.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold mb-1 group-hover:text-tx-red transition-colors">{s.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{s.longDesc}</p>
                    </div>
                  </div>
                  <ul className="grid grid-cols-2 gap-2 mt-1">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="text-tx-red font-bold shrink-0">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${s.slug}`}
                    className="btn-primary self-start mt-2"
                  >
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote form */}
        <QuoteSection
          heading="Get a Free Estimate on Any Service"
          subheading="No obligation, no ballpark numbers. We visit your site, measure up, and deliver a detailed written quote within 24–48 hours."
          formId="services-quote-form"
        />

      </main>
      <Footer />
    </>
  );
}
