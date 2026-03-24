import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroQuoteForm from "@/components/HeroQuoteForm";
import ServiceIcon from "@/components/ServiceIcon";
import { cities, getCityBySlug } from "@/data/cities";
import { services } from "@/data/services";
import { getCityServiceFaqs } from "@/data/cityServiceFaqs";
import type { Metadata } from "next";

export function generateStaticParams() {
  const params: { city: string; service: string }[] = [];
  for (const city of cities) {
    for (const service of services) {
      params.push({ city: city.slug, service: service.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string; service: string }>;
}): Promise<Metadata> {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = getCityBySlug(citySlug);
  const service = services.find((s) => s.slug === serviceSlug);
  if (!city || !service) return {};
  return {
    title: `${service.title} in ${city.name}, TX | Austin Premier Concrete`,
    description: `Expert ${service.title.toLowerCase()} in ${city.name}, TX. Licensed, insured, free written estimates. Austin Premier Concrete — serving ${city.name} and surrounding areas.`,
  };
}

export default async function CityServicePage({
  params,
}: {
  params: Promise<{ city: string; service: string }>;
}) {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = getCityBySlug(citySlug);
  const service = services.find((s) => s.slug === serviceSlug);
  if (!city || !service) notFound();

  const otherServices = services.filter((s) => s.slug !== serviceSlug).slice(0, 4);
  const faqs = getCityServiceFaqs(city.name, service.title, service.slug, city.neighborhoods);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        name: "Austin Premier Concrete",
        description: `${service.title} contractor serving ${city.name}, TX and surrounding areas.`,
        telephone: "+15127890000",
        email: "info@austinpremierconcrete.com",
        url: "https://www.austinpremierconcrete.com",
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
          containedInPlace: { "@type": "State", name: "Texas" },
        },
        openingHours: "Mo-Sa 07:00-18:00",
        priceRange: "$$",
      },
      {
        "@type": "Service",
        name: `${service.title} in ${city.name}, TX`,
        description: service.longDesc,
        provider: {
          "@type": "LocalBusiness",
          name: "Austin Premier Concrete",
          telephone: "+15127890000",
        },
        areaServed: { "@type": "City", name: city.name },
        serviceOutput: service.title,
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
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
              <div className="flex items-center gap-2 mb-5 text-tx-red-100 text-sm">
                <Link href="/service-areas" className="hover:text-white transition-colors">Service Areas</Link>
                <span className="opacity-40">›</span>
                <Link href={`/service-areas/${city.slug}`} className="hover:text-white transition-colors">{city.name}</Link>
                <span className="opacity-40">›</span>
                <span>{service.title}</span>
              </div>
              <p className="text-tx-red-100 font-semibold uppercase tracking-widest text-xs mb-4 border-l-2 border-tx-red pl-3">
                {city.county} County, TX
              </p>
              <h1 className="text-white mb-5">
                {service.title} in {city.name}, TX
              </h1>
              <p className="text-blue-200 text-lg mb-8 leading-relaxed">{service.shortDesc}</p>
              <div className="flex flex-wrap gap-3 text-sm text-blue-200">
                {["Licensed & Insured", "Free Written Estimate", "Own Crew — No Subs", "5-Star Rated"].map((b) => (
                  <span key={b} className="flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-tx-red inline-block shrink-0" />
                    {b}
                  </span>
                ))}
              </div>
            </div>
            <HeroQuoteForm id={`${city.slug}-${serviceSlug}-form`} />
          </div>
        </section>

        {/* About the service */}
        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-tx-red font-semibold uppercase tracking-widest text-xs mb-2">Overview</p>
              <h2 className="mb-4">{service.title} in {city.name}</h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">{service.longDesc}</p>
              <p className="text-gray-600 leading-relaxed">
                We have been serving {city.name} homeowners and businesses for years.{" "}
                {city.blurb} Our crew travels to every neighborhood in {city.name} — no travel
                surcharge, no reduced service scope.
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section-padding section-alt">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-tx-red font-semibold uppercase tracking-widest text-xs mb-2">Scope of Work</p>
            <h2 className="mb-8">What&apos;s Included</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {service.features.map((f) => (
                <li key={f} className="bg-white rounded-xl p-5 border border-tx-blue-100 shadow-sm">
                  <span className="block w-6 h-0.5 bg-tx-red mb-3" />
                  <span className="text-gray-800 font-medium text-sm">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Neighborhoods */}
        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-tx-red font-semibold uppercase tracking-widest text-xs mb-2">Local Coverage</p>
            <h2 className="mb-4">{service.title} Across All of {city.name}</h2>
            <p className="text-gray-600 mb-6 max-w-2xl">
              We serve every neighborhood in {city.name} for {service.title.toLowerCase()} work —
              including {city.neighborhoods.slice(0, 3).join(", ")}, and more.
            </p>
            <div className="flex flex-wrap gap-3">
              {city.neighborhoods.map((n) => (
                <span key={n} className="bg-tx-blue-50 border border-tx-blue-100 text-tx-blue px-4 py-2 rounded-full text-sm font-medium">
                  {n}
                </span>
              ))}
              <span className="bg-tx-blue-50 border border-tx-blue-100 text-tx-blue px-4 py-2 rounded-full text-sm font-medium">
                + All {city.name} area
              </span>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding section-alt">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-tx-red font-semibold uppercase tracking-widest text-xs mb-2">Common Questions</p>
            <h2 className="mb-8">{service.title} in {city.name} — FAQ</h2>
            <div className="divide-y divide-gray-200 bg-white rounded-2xl border border-gray-200 overflow-hidden">
              {faqs.map((faq, i) => (
                <div key={i} className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <span className="w-7 h-7 bg-tx-red text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-tx-blue mb-3">{faq.question}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other services in this city */}
        <section className="section-padding bg-tx-blue text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-tx-blue-700 via-tx-blue to-tx-blue-600" aria-hidden="true" />
          <div className="relative max-w-6xl mx-auto px-4">
            <p className="text-tx-red-100 font-semibold uppercase tracking-widest text-xs mb-2">More in {city.name}</p>
            <h2 className="text-white mb-2">More Concrete Services in {city.name}</h2>
            <p className="text-blue-200 mb-8">
              We handle all types of concrete work in {city.name}.{" "}
              <Link href={`/service-areas/${city.slug}`} className="underline hover:text-white transition-colors">
                View all {city.name} services →
              </Link>
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {otherServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/service-areas/${city.slug}/${s.slug}`}
                  className="bg-white/10 border border-white/20 rounded-xl p-5 hover:bg-white hover:border-white transition-all group"
                >
                  <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-tx-blue-50 transition-colors">
                    <ServiceIcon slug={s.slug} size={17} className="text-white group-hover:text-tx-blue transition-colors" />
                  </div>
                  <p className="font-semibold text-sm text-white group-hover:text-tx-blue transition-colors leading-tight">{s.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
