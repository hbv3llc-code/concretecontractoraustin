import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteSection from "@/components/QuoteSection";
import type { Metadata } from "next";
import { ClipboardList, Users, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Austin Premier Concrete",
  description:
    "Austin Premier Concrete — 15+ years serving Austin, TX homeowners and businesses with expert concrete work. Licensed, insured, family-owned.",
};

export default function AboutPage() {
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
            <p className="text-tx-red-100 font-semibold uppercase tracking-widest text-xs mb-5 border-l-2 border-tx-red pl-3">
              Our Story
            </p>
            <h1 className="text-white mb-4">About Austin Premier Concrete</h1>
            <p className="text-blue-200 max-w-2xl text-lg">
              Family-owned and operated out of Austin, TX since 2009. We&apos;ve built our
              reputation one pour at a time — with honest pricing, quality work, and a crew
              that treats your property like their own.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-blue-200">
              {["Family-Owned Since 2009", "Licensed & Insured", "2,500+ Projects", "5-Star Rated"].map((b) => (
                <span key={b} className="flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-tx-red inline-block shrink-0" />
                  {b}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Story section */}
        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-tx-red font-semibold uppercase tracking-widest text-xs mb-2">Our History</p>
              <h2 className="mb-4">Built on Austin Dirt</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Austin Premier Concrete was founded in 2009 by brothers Marco and Danny Reyes, who
                grew up in South Austin and learned the trade working summers with their uncle&apos;s
                crew. What started as a two-man driveway operation has grown into a full-service
                concrete contractor trusted by thousands of Austin-area homeowners and builders.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We specialize in residential and light commercial concrete — driveways, patios,
                foundations, flatwork, retaining walls, and repair. Every project gets the same
                attention whether it&apos;s a 200 sq ft sidewalk or a 3,000 sq ft foundation slab.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Austin&apos;s clay soils and extreme heat are tough on concrete. That&apos;s why we take
                sub-base prep, reinforcement, and curing seriously — so your concrete lasts 20, 30,
                even 40 years without major repairs.
              </p>
            </div>
            <div className="bg-tx-blue-50 rounded-2xl p-10 border border-tx-blue-100">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { stat: "15+", label: "Years in Austin" },
                  { stat: "2,500+", label: "Projects Completed" },
                  { stat: "5★", label: "Average Rating" },
                  { stat: "100%", label: "Licensed & Insured" },
                ].map((item) => (
                  <div key={item.label} className="bg-white rounded-xl p-6 shadow-sm border border-tx-blue-100 text-center">
                    <div className="text-4xl font-bold font-display text-tx-red mb-1">{item.stat}</div>
                    <div className="text-gray-600 text-sm">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding section-alt">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-tx-red font-semibold uppercase tracking-widest text-xs mb-2">Our Approach</p>
            <h2 className="mb-10">How We Work</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  Icon: ClipboardList,
                  title: "Honest Estimates",
                  desc: "We visit every site before quoting. No guessing, no ballparks — you get a detailed written estimate with line items.",
                },
                {
                  Icon: Users,
                  title: "Our Own Crew",
                  desc: "We don't subcontract your job out to strangers. The team you meet at the estimate is the team that pours your concrete.",
                },
                {
                  Icon: ShieldCheck,
                  title: "Guaranteed Work",
                  desc: "We stand behind every project. If something isn't right, we make it right — no hassle, no excuses.",
                },
              ].map(({ Icon, title, desc }) => (
                <div key={title} className="bg-white rounded-xl p-8 shadow-sm border border-tx-blue-100">
                  <div className="w-10 h-10 bg-tx-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={20} className="text-tx-blue" />
                  </div>
                  <h3 className="mb-2 text-tx-blue">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service area */}
        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-tx-red font-semibold uppercase tracking-widest text-xs mb-2">Where We Work</p>
            <h2 className="mb-4">Serving Greater Austin</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              We work throughout Austin and the surrounding metro — from Round Rock in the north
              to Kyle and Buda in the south, Cedar Park to the northwest, and Pflugerville to the east.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Austin", "Round Rock", "Cedar Park", "Pflugerville",
                "Georgetown", "Kyle", "Buda", "Leander", "Manor", "Hutto",
              ].map((city) => (
                <span key={city} className="bg-tx-blue-50 border border-tx-blue-100 text-tx-blue px-4 py-2 rounded-full text-sm font-medium">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Quote form */}
        <QuoteSection
          heading="Let's Talk About Your Project"
          subheading="Free estimates. No pressure. Just honest concrete work from a crew that's been serving Austin for over 15 years."
          formId="about-quote-form"
        />

      </main>
      <Footer />
    </>
  );
}
