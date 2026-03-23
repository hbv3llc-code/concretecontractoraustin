import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { services } from "@/data/services";
import { reviews } from "@/data/reviews";
import { Award, ClipboardList, ShieldCheck, Star, Phone } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">

        {/* Hero */}
        <section className="bg-tx-blue text-white py-28 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-tx-blue-700 via-tx-blue to-tx-blue-600" />
          {/* Subtle geometric accent */}
          <div className="absolute right-0 top-0 h-full w-1/2 opacity-[0.04] pointer-events-none"
            style={{ background: "repeating-linear-gradient(135deg, #fff 0, #fff 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }} />
          <div className="relative max-w-6xl mx-auto">
            <p className="text-tx-red-100 font-semibold uppercase tracking-widest text-xs mb-5 border-l-2 border-tx-red pl-3">
              Austin&apos;s Premier Concrete Contractor
            </p>
            <h1 className="text-white text-5xl sm:text-6xl font-bold font-display leading-tight mb-6 max-w-3xl">
              Austin&apos;s Concrete Contractor — Built on Reputation
            </h1>
            <p className="text-blue-200 text-lg mb-10 max-w-2xl leading-relaxed">
              Precision concrete installation for driveways, patios, foundations, and flatwork.
              Serving the greater Austin metro since 2009 with licensed crews, transparent pricing,
              and a written satisfaction guarantee.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:+15127890000" className="btn-primary inline-flex items-center gap-2">
                <Phone size={16} />
                Call Now — Free Estimate
              </a>
              <Link href="/services" className="btn-outline-white">
                View Our Services
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap gap-4 text-sm text-blue-200">
              {[
                "Licensed & Insured",
                "5-Star Rated",
                "Free Written Estimates",
                "15+ Years Experience",
              ].map((b) => (
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
            <h2 className="mb-4">Concrete Services in Austin, TX</h2>
            <p className="text-gray-600 mb-10 max-w-2xl">
              From new driveways to full foundations, we handle all types of residential and commercial
              concrete work across the greater Austin metro.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group border border-gray-200 rounded-xl p-6 hover:border-tx-red hover:shadow-lg transition-all border-t-4 border-t-tx-blue-100 hover:border-t-tx-red"
                >
                  <h3 className="text-xl font-bold mb-2 group-hover:text-tx-red transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.shortDesc}</p>
                  <p className="mt-4 text-tx-red font-semibold text-sm">Learn more →</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="section-padding section-alt">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-tx-red font-semibold uppercase tracking-widest text-xs mb-2">Why Choose Us</p>
            <h2 className="mb-10">The Austin Premier Difference</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { Icon: Award, title: "15+ Years Experience", desc: "Deep roots in Austin's concrete industry with thousands of completed projects." },
                { Icon: ClipboardList, title: "Free Written Estimates", desc: "Detailed, itemized quotes — no vague ballparks, no surprise charges." },
                { Icon: ShieldCheck, title: "Licensed & Insured", desc: "Fully licensed in Texas and carrying full liability and workers' comp coverage." },
                { Icon: Star, title: "5-Star Reviews", desc: "Hundreds of happy customers across Austin and surrounding communities." },
              ].map(({ Icon, title, desc }) => (
                <div key={title} className="bg-white rounded-xl p-6 shadow-sm border border-tx-blue-100">
                  <div className="w-10 h-10 bg-tx-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={20} className="text-tx-blue" />
                  </div>
                  <h4 className="font-bold mb-2 text-tx-blue">{title}</h4>
                  <p className="text-gray-600 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-tx-red font-semibold uppercase tracking-widest text-xs mb-2">Reviews</p>
            <h2 className="mb-10">What Austin Homeowners Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((r) => (
                <div key={r.name} className="border border-gray-200 rounded-xl p-6 flex flex-col gap-3">
                  <div className="flex text-tx-red text-lg">{"★".repeat(r.rating)}</div>
                  <p className="text-gray-700 text-sm leading-relaxed">&quot;{r.text}&quot;</p>
                  <div className="mt-auto">
                    <p className="font-semibold text-gray-900">{r.name}</p>
                    <p className="text-xs text-gray-500">{r.location} · {r.service}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-tx-red text-white py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-4">Ready to Start Your Project?</h2>
            <p className="text-red-100 mb-8">
              Contact us today for a free, no-pressure estimate. We&apos;ll visit your site, measure up,
              and deliver a written quote within 24–48 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+15127890000" className="bg-white text-tx-red font-bold px-8 py-4 rounded-md hover:bg-red-50 transition-colors inline-flex items-center gap-2">
                <Phone size={16} />
                (512) 789-0000
              </a>
              <Link href="/contact" className="btn-outline-white">
                Request Estimate Online
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
