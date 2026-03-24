import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroQuoteForm from "@/components/HeroQuoteForm";
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

        {/* Hero */}
        <section className="bg-tx-blue text-white py-16 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-tx-blue-700 via-tx-blue to-tx-blue-600" aria-hidden="true" />
          <div
            className="absolute right-0 top-0 h-full w-1/2 opacity-[0.04] pointer-events-none"
            style={{ background: "repeating-linear-gradient(135deg, #fff 0, #fff 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }}
            aria-hidden="true"
          />
          <div className="relative max-w-6xl mx-auto">
            <Link href="/services" className="inline-flex items-center gap-1 text-tx-red-100 text-sm hover:text-white transition-colors mb-5">
              ← Back to Services
            </Link>
            <p className="text-tx-red-100 font-semibold uppercase tracking-widest text-xs mb-4 border-l-2 border-tx-red pl-3">
              Austin, TX
            </p>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">{service.icon}</span>
              <h1 className="text-white">{service.title} in Austin, TX</h1>
            </div>
            <p className="text-blue-200 max-w-2xl text-lg">{service.shortDesc}</p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-blue-200">
              {["Licensed & Insured", "Free Written Estimate", "Own Crew — No Subs", "5-Star Rated"].map((b) => (
                <span key={b} className="flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-tx-red inline-block shrink-0" />
                  {b}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Content + Sidebar */}
        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Main content */}
            <div className="lg:col-span-2">
              <p className="text-tx-red font-semibold uppercase tracking-widest text-xs mb-2">Overview</p>
              <h2 className="mb-4">About Our {service.title} Service</h2>
              <p className="text-gray-600 leading-relaxed mb-10">{service.longDesc}</p>

              <p className="text-tx-red font-semibold uppercase tracking-widest text-xs mb-2">Scope of Work</p>
              <h3 className="mb-4">What&apos;s Included</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 bg-tx-blue-50 rounded-lg p-3 text-sm border border-tx-blue-100">
                    <span className="text-tx-red font-bold mt-0.5 shrink-0">✓</span>
                    <span className="text-gray-700">{f}</span>
                  </li>
                ))}
              </ul>

              <p className="text-tx-red font-semibold uppercase tracking-widest text-xs mb-2">Coverage</p>
              <h3 className="mb-3">Serving All of Austin &amp; Surrounding Areas</h3>
              <p className="text-gray-600 text-sm mb-4">
                We provide {service.title.toLowerCase()} services throughout the greater Austin metro.
                Our crew travels to every job — no area is too far.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Austin", "Round Rock", "Cedar Park", "Pflugerville", "Georgetown", "Kyle", "Buda", "Leander", "Manor", "Hutto"].map((city) => (
                  <span key={city} className="bg-tx-blue-50 border border-tx-blue-100 text-tx-blue px-3 py-1 rounded-full text-xs font-medium">
                    {city}
                  </span>
                ))}
              </div>
            </div>

            {/* Sidebar — embedded quote form */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <p className="text-tx-red font-semibold uppercase tracking-widest text-xs mb-3">Free Estimate</p>
                <HeroQuoteForm id={`${slug}-quote-form`} />
              </div>
            </div>

          </div>
        </section>

        {/* Other services */}
        <section className="section-padding section-alt">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-tx-red font-semibold uppercase tracking-widest text-xs mb-2">More Services</p>
            <h2 className="mb-8">Other Services We Offer</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {others.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="bg-white rounded-xl p-6 border border-gray-200 border-t-4 border-t-tx-blue-100 hover:border-t-tx-red hover:shadow-lg transition-all group"
                >
                  <div className="text-3xl mb-3">{s.icon}</div>
                  <h4 className="font-bold mb-1 group-hover:text-tx-red transition-colors">{s.title}</h4>
                  <p className="text-sm text-gray-600 mb-3">{s.shortDesc}</p>
                  <p className="text-tx-red font-semibold text-sm">Learn more →</p>
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
