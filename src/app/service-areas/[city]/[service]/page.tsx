import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroQuoteForm from "@/components/HeroQuoteForm";
import ServiceIcon from "@/components/ServiceIcon";
import { cities, getCityBySlug } from "@/data/cities";
import { services } from "@/data/services";
import { getCityServiceFaqs } from "@/data/cityServiceFaqs";
import { getCityServiceIntro } from "@/data/cityServiceContent";
import { servicePricing } from "@/data/servicePricing";
import { serviceProcesses } from "@/data/serviceProcess";
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

  const pricing = servicePricing.find((p) => p.slug === serviceSlug);
  const priceHint = pricing ? ` ${pricing.baseRange}/sq ft.` : "";
  const n1 = city.neighborhoods[0];
  const n2 = city.neighborhoods[1];

  return {
    title: `${service.title} in ${city.name}, TX | Licensed Contractor | Free Estimate`,
    description: `Expert ${service.title.toLowerCase()} in ${city.name}, TX.${priceHint} Serving ${n1}, ${n2} & all ${city.name} neighborhoods. Licensed, insured. Free written estimate — call (512) 789-0000.`,
    alternates: {
      canonical: `/service-areas/${citySlug}/${serviceSlug}`,
    },
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
  const cityIntro = getCityServiceIntro(city, service.slug);
  const pricing = servicePricing.find((p) => p.slug === serviceSlug);
  const process = serviceProcesses.find((p) => p.slug === serviceSlug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://austinconcretecontractors.co" },
          { "@type": "ListItem", position: 2, name: "Service Areas", item: "https://austinconcretecontractors.co/service-areas" },
          { "@type": "ListItem", position: 3, name: city.name, item: `https://austinconcretecontractors.co/service-areas/${city.slug}` },
          { "@type": "ListItem", position: 4, name: service.title, item: `https://austinconcretecontractors.co/service-areas/${city.slug}/${service.slug}` },
        ],
      },
      {
        "@type": "LocalBusiness",
        name: "Austin Premier Concrete",
        description: `${service.title} contractor serving ${city.name}, TX and surrounding areas.`,
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

        {/* ─── Hero ─── */}
        <section className="bg-tx-blue text-white py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-tx-blue-700 via-tx-blue to-tx-blue-600" aria-hidden="true" />
          <div
            className="absolute right-0 top-0 h-full w-1/2 opacity-[0.04] pointer-events-none"
            style={{ background: "repeating-linear-gradient(135deg, #fff 0, #fff 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }}
            aria-hidden="true"
          />
          <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <nav className="flex items-center gap-2 mb-5 text-tx-red-100 text-sm flex-wrap" aria-label="Breadcrumb">
                <Link href="/service-areas" className="hover:text-white transition-colors">Service Areas</Link>
                <span className="opacity-40">›</span>
                <Link href={`/service-areas/${city.slug}`} className="hover:text-white transition-colors">{city.name}</Link>
                <span className="opacity-40">›</span>
                <span>{service.title}</span>
              </nav>
              <p className="text-tx-red-100 font-semibold uppercase tracking-widest text-xs mb-4 border-l-2 border-tx-red pl-3">
                {city.county} County, TX
              </p>
              <h1 className="text-white mb-5">
                {service.title} in {city.name}, TX
              </h1>
              <p className="text-blue-200 text-lg mb-6 leading-relaxed">{service.shortDesc}</p>
              {pricing && (
                <div className="bg-white/10 border border-white/20 rounded-xl px-5 py-4 mb-6 inline-block">
                  <p className="text-xs text-blue-200 uppercase tracking-widest mb-1">Typical Cost in {city.name}</p>
                  <p className="text-white font-bold text-xl">
                    {pricing.baseRange} <span className="text-blue-200 font-normal text-base">{pricing.baseUnit}</span>
                  </p>
                  <p className="text-blue-300 text-xs mt-1">Typical job: {pricing.typicalJob} ({pricing.typicalScope})</p>
                </div>
              )}
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

        {/* ─── City-specific intro ─── */}
        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              <div className="lg:col-span-2">
                <p className="text-tx-red font-semibold uppercase tracking-widest text-xs mb-2">About This Service</p>
                <h2 className="mb-4">{service.title} in {city.name}</h2>
                <p className="text-gray-600 leading-relaxed text-lg mb-5">{cityIntro}</p>
                <p className="text-gray-600 leading-relaxed">{service.longDesc}</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <p className="font-bold text-tx-blue text-sm mb-4 uppercase tracking-wide">Why Austin Premier Concrete</p>
                <ul className="space-y-3">
                  {[
                    "Licensed Texas contractor",
                    "General liability + workers' comp",
                    "Our own crew — no subcontractors",
                    "Free written estimates",
                    "Permit coordination included",
                    `Serving all ${city.name} neighborhoods`,
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="w-4 h-4 rounded-full bg-tx-red flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 10 8">
                          <path d="M1 4l2.5 2.5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="tel:+15127890000"
                  className="mt-6 block w-full text-center bg-tx-red text-white font-bold py-3 rounded-xl hover:bg-red-700 transition-colors text-sm"
                >
                  Call (512) 789-0000
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Cost Guide ─── */}
        {pricing && (
          <section className="section-padding section-alt">
            <div className="max-w-6xl mx-auto px-4">
              <p className="text-tx-red font-semibold uppercase tracking-widest text-xs mb-2">Pricing</p>
              <h2 className="mb-2">How Much Does {service.title} Cost in {city.name}?</h2>
              <p className="text-gray-500 mb-8 max-w-2xl text-sm">
                Prices below reflect Central Texas market rates as of 2025. Actual quotes depend on site conditions, finish, and project scope.
                We provide free written estimates — no vague ballpark figures.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Base Price</p>
                  <p className="text-3xl font-bold text-tx-blue mb-1">{pricing.baseRange}</p>
                  <p className="text-sm text-gray-500">{pricing.baseUnit}</p>
                </div>
                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Typical Job Total</p>
                  <p className="text-3xl font-bold text-tx-blue mb-1">{pricing.typicalJob}</p>
                  <p className="text-sm text-gray-500">{pricing.typicalScope}</p>
                </div>
                {pricing.premium && (
                  <div className="bg-white rounded-2xl border-2 border-tx-red/20 p-6">
                    <p className="text-xs text-tx-red uppercase tracking-widest mb-2">{pricing.premium.label}</p>
                    <p className="text-3xl font-bold text-tx-blue mb-1">{pricing.premium.range}</p>
                    <p className="text-sm text-gray-500">{pricing.premium.unit}</p>
                  </div>
                )}
              </div>
              <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
                <p className="font-semibold text-tx-blue mb-4 text-sm">What Affects Your Price</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {pricing.costDrivers.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-tx-red shrink-0 mt-2" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-tx-blue/5 border border-tx-blue/10 rounded-xl p-5">
                <p className="text-sm font-semibold text-tx-blue mb-1">Money-saving tip</p>
                <p className="text-sm text-gray-600">{pricing.savingTip}</p>
              </div>
            </div>
          </section>
        )}

        {/* ─── Our Process ─── */}
        {process && (
          <section className="section-padding bg-white">
            <div className="max-w-6xl mx-auto px-4">
              <p className="text-tx-red font-semibold uppercase tracking-widest text-xs mb-2">How It Works</p>
              <h2 className="mb-2">Our {service.title} Process in {city.name}</h2>
              <p className="text-gray-500 mb-10 max-w-2xl text-sm">
                We follow the same proven steps on every job — no shortcuts, no surprises.
              </p>
              <ol className="space-y-6">
                {process.steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-tx-blue text-white flex items-center justify-center font-bold text-sm">
                      {i + 1}
                    </div>
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 flex-1">
                      <p className="font-bold text-tx-blue mb-1">{step.title}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        )}

        {/* ─── What&apos;s Included ─── */}
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

        {/* ─── Mid-page CTA ─── */}
        <section className="bg-tx-red text-white py-10 px-4">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <p className="font-bold text-xl mb-1">Ready for a free estimate in {city.name}?</p>
              <p className="text-red-100 text-sm">Get a written quote within 24–48 hours — no obligation.</p>
            </div>
            <div className="flex gap-3 shrink-0">
              <a
                href="tel:+15127890000"
                className="bg-white text-tx-red font-bold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors text-sm whitespace-nowrap"
              >
                Call (512) 789-0000
              </a>
              <a
                href="#quote-form"
                className="bg-white/20 border border-white/30 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/30 transition-colors text-sm whitespace-nowrap"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </section>

        {/* ─── Neighborhoods ─── */}
        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-tx-red font-semibold uppercase tracking-widest text-xs mb-2">Local Coverage</p>
            <h2 className="mb-4">{service.title} Across All of {city.name}</h2>
            <p className="text-gray-600 mb-6 max-w-2xl">
              We serve every neighborhood in {city.name} for {service.title.toLowerCase()} work —
              including {city.neighborhoods.slice(0, 3).join(", ")}, and more. No travel surcharge,
              no reduced scope. Same crew, same quality across all of {city.county} County.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              {city.neighborhoods.map((n) => (
                <span key={n} className="bg-tx-blue-50 border border-tx-blue-100 text-tx-blue px-4 py-2 rounded-full text-sm font-medium">
                  {n}
                </span>
              ))}
              <span className="bg-tx-blue-50 border border-tx-blue-100 text-tx-blue px-4 py-2 rounded-full text-sm font-medium">
                + All {city.name} area
              </span>
            </div>
            <p className="text-gray-500 text-sm">
              Not sure if we cover your street?{" "}
              <a href="tel:+15127890000" className="text-tx-red font-semibold hover:underline">
                Call us at (512) 789-0000
              </a>{" "}
              — we&apos;ll confirm coverage instantly.
            </p>
          </div>
        </section>

        {/* ─── FAQ ─── */}
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

        {/* ─── Other services in this city ─── */}
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
