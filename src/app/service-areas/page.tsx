import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroQuoteForm from "@/components/HeroQuoteForm";
import { cities } from "@/data/cities";
import { services } from "@/data/services";
import { MapPin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concrete Contractor Service Areas | Austin Premier Concrete",
  description:
    "Austin Premier Concrete serves Round Rock, Cedar Park, Georgetown, Pflugerville, Kyle, Buda, West Lake Hills, Leander, Hutto, Liberty Hill, Lakeway, and Bastrop. Free estimates.",
};

export default function ServiceAreasPage() {
  return (
    <>
      <Header />
      <main className="flex-1">

        {/* Hero */}
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
                Where We Work
              </p>
              <h1 className="text-white mb-5">Concrete Contractor Serving Greater Austin</h1>
              <p className="text-blue-200 text-lg mb-8 leading-relaxed">
                We serve Austin and 12 surrounding cities across Travis, Williamson, Hays, and
                Bastrop counties. One crew, one standard of quality — no matter where your project is.
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-blue-200">
                {["12 Cities Served", "Licensed & Insured", "Free Written Estimates", "Own Crew — No Subs"].map((b) => (
                  <span key={b} className="flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-tx-red inline-block shrink-0" />
                    {b}
                  </span>
                ))}
              </div>
            </div>
            <HeroQuoteForm id="service-areas-quote-form" />
          </div>
        </section>

        {/* City grid */}
        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-tx-red font-semibold uppercase tracking-widest text-xs mb-2">Coverage Area</p>
            <h2 className="mb-4">Cities We Serve</h2>
            <p className="text-gray-600 mb-10 max-w-2xl">
              Click any city to see all available services in your area, pricing information,
              and the specific neighborhoods we cover.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/service-areas/${city.slug}`}
                  className="group border border-gray-200 border-l-4 border-l-tx-blue-100 rounded-xl p-6 hover:border-l-tx-red hover:shadow-lg transition-all bg-white"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-tx-red shrink-0" />
                      <h3 className="text-lg font-bold group-hover:text-tx-red transition-colors">
                        {city.name}
                      </h3>
                    </div>
                    <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded-full">
                      {city.distanceMiles} mi
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mb-3">{city.county} County</p>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">{city.blurb}</p>
                  <p className="text-tx-red font-semibold text-sm mt-4">View services →</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Services we offer everywhere */}
        <section className="section-padding section-alt">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-tx-red font-semibold uppercase tracking-widest text-xs mb-2">What We Do</p>
            <h2 className="mb-4">Services Available in Every City</h2>
            <p className="text-gray-600 mb-10 max-w-2xl">
              Every service we offer in Austin is available throughout our entire service area.
              No reduced scope, no extra travel fees.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="bg-white border border-gray-200 rounded-lg p-4 text-sm font-medium text-gray-700 hover:text-tx-red hover:border-tx-red-100 hover:shadow-sm transition-all text-center"
                >
                  {s.title}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why travel */}
        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-tx-red font-semibold uppercase tracking-widest text-xs mb-2">Our Commitment</p>
              <h2 className="mb-5">Same Crew, Same Quality — Everywhere</h2>
              <p className="text-gray-600 mb-5 leading-relaxed">
                We don&apos;t subcontract work in outlying areas to whoever happens to be nearby.
                The crew that shows up to your job in Bastrop or Liberty Hill is the same crew
                that works jobs in central Austin — our employees, our equipment, our quality standards.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We never add a travel surcharge for jobs within our service area. If we serve
                your city, your estimate is the same as any Austin job.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "12", label: "Cities Served" },
                { stat: "4", label: "Counties Covered" },
                { stat: "50+", label: "Miles of Range" },
                { stat: "$0", label: "Travel Surcharge" },
              ].map((item) => (
                <div key={item.label} className="bg-tx-blue-50 rounded-xl p-6 border border-tx-blue-100 text-center">
                  <div className="text-4xl font-bold font-display text-tx-red mb-1">{item.stat}</div>
                  <div className="text-gray-600 text-sm">{item.label}</div>
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
