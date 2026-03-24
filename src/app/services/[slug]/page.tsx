import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroQuoteForm from "@/components/HeroQuoteForm";
import ServiceIcon from "@/components/ServiceIcon";
import { services } from "@/data/services";
import type { Metadata } from "next";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} Austin TX | Austin Premier Concrete`,
    description: service.shortDesc,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== slug).slice(0, 3);

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
              <Link href="/services" className="inline-flex items-center gap-1 text-tx-red-100 text-sm hover:text-white transition-colors mb-5">
                ← All Services
              </Link>
              <p className="text-tx-red-100 font-semibold uppercase tracking-widest text-xs mb-4 border-l-2 border-tx-red pl-3">
                Austin, TX
              </p>
              <h1 className="text-white mb-5">{service.title} in Austin, TX</h1>
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
            <HeroQuoteForm id={`${slug}-quote-form`} />
          </div>
        </section>

        {/* Service content */}
        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-tx-red font-semibold uppercase tracking-widest text-xs mb-2">Overview</p>
              <h2 className="mb-4">About Our {service.title} Service</h2>
              <p className="text-gray-600 leading-relaxed text-lg">{service.longDesc}</p>
            </div>
          </div>
        </section>

        {/* What's included */}
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

        {/* Service area */}
        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-tx-red font-semibold uppercase tracking-widest text-xs mb-2">Coverage</p>
            <h2 className="mb-4">Serving All of Austin &amp; Surrounding Areas</h2>
            <p className="text-gray-600 mb-6 max-w-2xl">
              We provide {service.title.toLowerCase()} services throughout the greater Austin metro.
              Our crew travels to every job — no area is too far.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Austin", "Round Rock", "Cedar Park", "Pflugerville", "Georgetown", "Kyle", "Buda", "Leander", "Manor", "Hutto"].map((city) => (
                <span key={city} className="bg-tx-blue-50 border border-tx-blue-100 text-tx-blue px-4 py-2 rounded-full text-sm font-medium">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Other services */}
        <section className="section-padding bg-tx-blue text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-tx-blue-700 via-tx-blue to-tx-blue-600" aria-hidden="true" />
          <div className="relative max-w-6xl mx-auto px-4">
            <p className="text-tx-red-100 font-semibold uppercase tracking-widest text-xs mb-2">More Services</p>
            <h2 className="text-white mb-8">Other Services We Offer</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {others.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white hover:border-white transition-all group"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-tx-blue-50 transition-colors">
                    <ServiceIcon slug={s.slug} size={20} className="text-white group-hover:text-tx-blue transition-colors" />
                  </div>
                  <h4 className="font-bold mb-1 text-white group-hover:text-tx-blue transition-colors">{s.title}</h4>
                  <p className="text-sm text-blue-200 group-hover:text-gray-600 transition-colors">{s.shortDesc}</p>
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
