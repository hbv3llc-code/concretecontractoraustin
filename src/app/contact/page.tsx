import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Austin Premier Concrete",
  description:
    "Get a free estimate from Austin Premier Concrete. Call, email, or fill out our form. Serving Austin, TX and surrounding areas.",
};

export default function ContactPage() {
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
              Get In Touch
            </p>
            <h1 className="text-white mb-4">Request a Free Estimate</h1>
            <p className="text-blue-200 max-w-2xl text-lg">
              Fill out the form below or call us directly. We&apos;ll schedule a site visit and deliver a
              free written estimate within 24–48 hours.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-blue-200">
              {["No Obligation", "Free Written Estimate", "Site Visit Included", "24–48 Hr Response"].map((b) => (
                <span key={b} className="flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-tx-red inline-block shrink-0" />
                  {b}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Contact section */}
        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Form */}
            <div className="lg:col-span-2">
              <p className="text-tx-red font-semibold uppercase tracking-widest text-xs mb-2">Estimate Request</p>
              <h2 className="mb-6">Tell Us About Your Project</h2>
              <form className="space-y-5" action="#" method="POST">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="firstName">
                      First Name *
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-tx-blue focus:bg-white transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="lastName">
                      Last Name *
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-tx-blue focus:bg-white transition-colors"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="phone">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-tx-blue focus:bg-white transition-colors"
                      placeholder="(512) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-tx-blue focus:bg-white transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="service">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-tx-blue focus:bg-white transition-colors"
                  >
                    <option value="">Select a service...</option>
                    <option>Concrete Driveway</option>
                    <option>Concrete Patio</option>
                    <option>Concrete Foundation</option>
                    <option>Flatwork / Sidewalk</option>
                    <option>Stamped & Decorative Concrete</option>
                    <option>Concrete Repair & Resurfacing</option>
                    <option>Retaining Wall</option>
                    <option>Concrete Removal & Demolition</option>
                    <option>Commercial Concrete</option>
                    <option>Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="address">
                    Project Address / City
                  </label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-tx-blue focus:bg-white transition-colors"
                    placeholder="Austin, TX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="message">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-tx-blue focus:bg-white transition-colors resize-none"
                    placeholder="Tell us about your project — size, current conditions, timeline, etc."
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center text-base py-4">
                  Submit Estimate Request
                </button>
                <p className="text-xs text-gray-400 text-center">
                  We typically respond within 24 hours. For urgent requests, please call us directly.
                </p>
              </form>
            </div>

            {/* Sidebar info */}
            <div className="space-y-5">
              <div className="bg-tx-blue rounded-xl p-6 text-white">
                <h3 className="text-white mb-4">Contact Info</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <Phone size={15} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-blue-100 text-xs uppercase tracking-wider mb-0.5">Phone</p>
                      <a href="tel:+15127890000" className="text-white font-bold hover:text-tx-red-100 transition-colors">(512) 789-0000</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <Mail size={15} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-blue-100 text-xs uppercase tracking-wider mb-0.5">Email</p>
                      <a href="mailto:info@austinpremierconcrete.com" className="text-white hover:text-tx-red-100 transition-colors break-all text-sm">
                        info@austinpremierconcrete.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin size={15} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-blue-100 text-xs uppercase tracking-wider mb-0.5">Service Area</p>
                      <p className="text-white">Austin, TX &amp; Surrounding Metro</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <Clock size={15} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-blue-100 text-xs uppercase tracking-wider mb-0.5">Hours</p>
                      <p className="text-white">Mon–Sat: 7:00am – 6:00pm</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-tx-red rounded-xl p-6 text-white">
                <h4 className="font-bold text-white mb-2 text-lg">Free Written Estimates</h4>
                <p className="text-red-100 text-sm leading-relaxed">
                  All estimates are free, written, and itemized. We visit your site to measure —
                  no ballpark numbers over the phone.
                </p>
              </div>

              <div className="bg-tx-blue-50 rounded-xl p-6 border border-tx-blue-100">
                <h4 className="font-bold mb-3 text-tx-blue">Cities We Serve</h4>
                <div className="flex flex-wrap gap-2">
                  {["Austin", "Round Rock", "Cedar Park", "Pflugerville", "Georgetown", "Kyle", "Buda", "Leander"].map((city) => (
                    <span key={city} className="bg-white border border-tx-blue-100 px-3 py-1 rounded-full text-xs text-tx-blue font-medium">
                      {city}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <ul className="space-y-2 text-sm text-gray-700">
                  {[
                    "✅ Licensed & Insured in Texas",
                    "✅ Free written estimates",
                    "✅ No-pressure quotes",
                    "✅ 5-star rated on Google",
                    "✅ 15+ years experience",
                  ].map((item) => (
                    <li key={item} className="font-medium">{item}</li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
