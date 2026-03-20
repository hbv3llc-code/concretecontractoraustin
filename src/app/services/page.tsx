import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
        <section className="bg-gray-900 text-white py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <p className="text-orange-400 font-semibold uppercase tracking-widest text-sm mb-2">Our Work</p>
            <h1 className="text-white mb-4">Concrete Services in Austin, TX</h1>
            <p className="text-gray-300 max-w-2xl">
              From driveways to full slab foundations, we handle all concrete work for Austin
              homeowners and businesses. Licensed, insured, and satisfaction guaranteed.
            </p>
          </div>
        </section>

        {/* Services list */}
        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s) => (
              <div key={s.slug} className="border border-gray-200 rounded-xl p-8 flex flex-col gap-4 hover:shadow-lg transition-shadow">
                <div className="text-5xl">{s.icon}</div>
                <h2 className="text-2xl font-bold">{s.title}</h2>
                <p className="text-gray-600 leading-relaxed">{s.longDesc}</p>
                <ul className="grid grid-cols-2 gap-2 mt-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-orange-500 font-bold">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link href={`/services/${s.slug}`} className="btn-primary self-start mt-2">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-orange-600 text-white py-14 px-4 text-center">
          <h2 className="text-white mb-4">Get a Free Estimate Today</h2>
          <p className="text-orange-100 mb-6">No obligation. We come to you, measure up, and give you a written quote.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+15127890000" className="bg-white text-orange-600 font-bold px-8 py-4 rounded-md hover:bg-orange-50 transition-colors">
              📞 (512) 789-0000
            </a>
            <Link href="/contact" className="btn-outline-white">Request Online</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
