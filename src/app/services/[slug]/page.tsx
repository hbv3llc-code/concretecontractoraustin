import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
        <section className="bg-tx-blue text-white py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <Link href="/services" className="text-tx-red-100 text-sm hover:underline mb-4 inline-block">
              ← Back to Services
            </Link>
            <div className="text-5xl mb-4">{service.icon}</div>
            <h1 className="text-white mb-4">{service.title} in Austin, TX</h1>
            <p className="text-blue-200 max-w-2xl">{service.shortDesc}</p>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="mb-4">About Our {service.title} Service</h2>
              <p className="text-gray-600 leading-relaxed mb-8">{service.longDesc}</p>

              <h3 className="mb-4">What&apos;s Included</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 bg-tx-blue-50 rounded-lg p-3 text-sm">
                    <span className="text-tx-red font-bold mt-0.5">✓</span>
                    <span className="text-gray-700">{f}</span>
                  </li>
                ))}
              </ul>

              <h3 className="mb-4">Serving All of Austin &amp; Surrounding Areas</h3>
              <p className="text-gray-600 text-sm">
                We provide {service.title.toLowerCase()} services throughout Austin, Round Rock, Cedar Park,
                Pflugerville, Georgetown, Kyle, Buda, Leander, Manor, and beyond.
              </p>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-tx-blue-50 border border-tx-blue-100 rounded-xl p-6 sticky top-24">
                <h3 className="mb-2 text-tx-blue">Get a Free Estimate</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Contact us today — we&apos;ll visit your site and deliver a written quote within 24–48 hours.
                </p>
                <a href="tel:+15127890000" className="btn-primary w-full justify-center mb-3">
                  📞 (512) 789-0000
                </a>
                <Link href="/contact" className="btn-outline w-full justify-center">
                  Request Online
                </Link>
                <ul className="mt-6 text-xs text-gray-500 space-y-1">
                  <li>✅ Licensed &amp; Insured in Texas</li>
                  <li>✅ Free written estimates</li>
                  <li>✅ No-pressure quotes</li>
                  <li>✅ 5-star rated on Google</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Other services */}
        <section className="section-padding section-alt">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="mb-8">Other Services We Offer</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {others.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-tx-blue hover:shadow-md transition-all group"
                >
                  <div className="text-3xl mb-2">{s.icon}</div>
                  <h4 className="font-bold mb-1 group-hover:text-tx-blue transition-colors">{s.title}</h4>
                  <p className="text-sm text-gray-600">{s.shortDesc}</p>
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
