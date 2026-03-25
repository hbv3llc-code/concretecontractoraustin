import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroQuoteForm from "@/components/HeroQuoteForm";
import ServiceIcon from "@/components/ServiceIcon";
import { cities, getCityBySlug } from "@/data/cities";
import { services } from "@/data/services";
import { getCityBody } from "@/data/cityBodyContent";
import CityPhoto from "@/components/CityPhoto";
import { MapPin } from "lucide-react";
import type { Metadata } from "next";

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};
  return {
    title: `Concrete Contractor ${city.name} TX | Austin Premier Concrete`,
    description: `Licensed concrete contractor serving ${city.name}, TX. Driveways, patios, foundations, flatwork, retaining walls & more. Free written estimates.`,
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Austin Premier Concrete",
    description: `Licensed concrete contractor serving ${city.name}, TX and surrounding areas.`,
    telephone: "+15127890000",
    email: "info@austinconcretecontractors.co",
    url: "https://austinconcretecontractors.co",
    address: {
      "@type": "PostalAddress",
      streetAddress: "",
      addressLocality: "Austin",
      addressRegion: "TX",
      postalCode: "78703",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: city.lat,
      longitude: city.lng,
    },
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: {
        "@type": "State",
        name: "Texas",
      },
    },
    openingHours: "Mo-Sa 07:00-18:00",
    priceRange: "$$",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Concrete Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: `${s.title} in ${city.name}, TX`,
          url: `https://austinconcretecontractors.co/service-areas/${city.slug}/${s.slug}`,
        },
      })),
    },
  };

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
              <Link
                href="/service-areas"
                className="inline-flex items-center gap-1 text-tx-red-100 text-sm hover:text-white transition-colors mb-5"
              >
                ← All Service Areas
              </Link>
              <p className="text-tx-red-100 font-semibold uppercase tracking-widest text-xs mb-4 border-l-2 border-tx-red pl-3">
                {city.county} County, TX
              </p>
              <h1 className="text-white mb-5">
                Concrete Contractor in {city.name}, TX
              </h1>
              <p className="text-blue-200 text-lg mb-8 leading-relaxed">{city.blurb}</p>
              <div className="flex flex-wrap gap-3 text-sm text-blue-200">
                {["Licensed & Insured", "Free Written Estimate", "Own Crew — No Subs", "5-Star Rated"].map((b) => (
                  <span key={b} className="flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-tx-red inline-block shrink-0" />
                    {b}
                  </span>
                ))}
              </div>
            </div>
            <HeroQuoteForm id={`${city.slug}-quote-form`} />
          </div>
        </section>

        {/* City intro — 2/3 text + 1/3 visual */}
        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mb-20">

              {/* Text — 2/3 */}
              <div className="lg:col-span-2">
                <p className="text-tx-red font-semibold uppercase tracking-widest text-xs mb-2">About This Area</p>
                <h2 className="mb-6">Concrete Contractor in {city.name}, TX</h2>
                <div className="space-y-5">
                  {getCityBody(city).map((para, i) => (
                    <p key={i} className={`leading-relaxed ${i === 0 ? "text-gray-700 text-lg" : "text-gray-600"}`}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* Visual — 1/3 */}
              <div className="lg:col-span-1">
                <CityPhoto city={city} />
              </div>

            </div>

            {/* Services grid */}
            <p className="text-tx-red font-semibold uppercase tracking-widest text-xs mb-2">Services</p>
            <h2 className="mb-4">Concrete Services in {city.name}</h2>
            <p className="text-gray-600 mb-10 max-w-2xl">
              We offer the full range of concrete services in {city.name} — the same quality
              and scope you&apos;d expect anywhere in Austin.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/service-areas/${city.slug}/${s.slug}`}
                  className="group border border-gray-200 border-t-4 border-t-tx-blue-100 rounded-xl p-6 hover:border-t-tx-red hover:shadow-lg transition-all"
                >
                  <div className="w-10 h-10 bg-tx-blue-50 rounded-lg flex items-center justify-center mb-4 border border-tx-blue-100 group-hover:bg-tx-red group-hover:border-tx-red transition-all">
                    <ServiceIcon slug={s.slug} size={18} className="text-tx-blue group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-base font-bold mb-1 group-hover:text-tx-red transition-colors">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{s.shortDesc}</p>
                  <p className="text-tx-red font-semibold text-sm">Learn more →</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Neighborhoods */}
        <section className="section-padding section-alt">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-tx-red font-semibold uppercase tracking-widest text-xs mb-2">Local Coverage</p>
            <h2 className="mb-4">Neighborhoods We Serve in {city.name}</h2>
            <p className="text-gray-600 mb-6 max-w-2xl">
              We work throughout {city.name} and all surrounding neighborhoods. If you&apos;re
              unsure whether we cover your area, just call — we&apos;re likely closer than you think.
            </p>
            <div className="flex flex-wrap gap-3">
              {city.neighborhoods.map((n) => (
                <span key={n} className="bg-white border border-tx-blue-100 text-tx-blue px-4 py-2 rounded-full text-sm font-medium">
                  <MapPin size={12} className="inline mr-1 opacity-60" />
                  {n}
                </span>
              ))}
              <span className="bg-white border border-tx-blue-100 text-tx-blue px-4 py-2 rounded-full text-sm font-medium">
                + All {city.name} area
              </span>
            </div>
          </div>
        </section>

        {/* Why choose us */}
        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-tx-red font-semibold uppercase tracking-widest text-xs mb-2">Why Us</p>
            <h2 className="mb-8">Why {city.name} Homeowners Choose Us</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { title: "No Travel Surcharge", desc: `${city.name} jobs are priced the same as Austin — no mileage fees.` },
                { title: "Our Own Crew", desc: "We never subcontract. The team you meet is the team that pours your concrete." },
                { title: "Free Written Estimate", desc: "We visit your site, measure up, and deliver a detailed written quote within 48 hours." },
                { title: "Licensed & Insured", desc: "Fully licensed in Texas with liability and workers&apos; comp coverage on every job." },
              ].map(({ title, desc }) => (
                <div key={title} className="border border-gray-200 rounded-xl p-6">
                  <span className="block w-6 h-0.5 bg-tx-red mb-3" />
                  <h4 className="font-bold mb-2">{title}</h4>
                  <p className="text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: desc }} />
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
