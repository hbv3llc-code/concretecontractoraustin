import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

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
        <section className="bg-tx-blue text-white py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <p className="text-tx-red-100 font-semibold uppercase tracking-widest text-sm mb-2">Get In Touch</p>
            <h1 className="text-white mb-4">Request a Free Estimate</h1>
            <p className="text-blue-200 max-w-2xl">
              Fill out the form below or call us directly. We&apos;ll schedule a site visit and deliver a
              free written estimate within 24–48 hours.
            </p>
          </div>
        </section>

        {/* Contact section */}
        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Form */}
            <div className="lg:col-span-2">
              <form className="space-y-5" action="#" method="POST">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="firstName">
                      First Name *
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-tx-blue"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="lastName">
                      Last Name *
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-tx-blue"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="phone">
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-tx-blue"
                    placeholder="(512) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-tx-blue"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="service">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-tx-blue"
                  >
                    <option value="">Select a service...</option>
                    <option>Concrete Driveway</option>
                    <option>Concrete Patio</option>
                    <option>Concrete Foundation</option>
                    <option>Flatwork / Sidewalk</option>
                    <option>Concrete Repair</option>
                    <option>Retaining Wall</option>
                    <option>Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="address">
                    Project Address / City
                  </label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-tx-blue"
                    placeholder="Austin, TX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="message">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-tx-blue resize-none"
                    placeholder="Tell us about your project — size, current conditions, timeline, etc."
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center text-base py-4">
                  Submit Estimate Request
                </button>
                <p className="text-xs text-gray-500 text-center">
                  We typically respond within 24 hours. For urgent requests, please call us directly.
                </p>
              </form>
            </div>

            {/* Sidebar info */}
            <div className="space-y-6">
              <div className="bg-tx-blue-50 rounded-xl p-6 border border-tx-blue-100">
                <h3 className="mb-4 text-tx-blue">Contact Info</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-xl">📞</span>
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <a href="tel:+15127890000" className="text-tx-red hover:underline">(512) 789-0000</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl">✉️</span>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <a href="mailto:info@austinpremierconcrete.com" className="text-tx-red hover:underline break-all">
                        info@austinpremierconcrete.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl">📍</span>
                    <div>
                      <p className="font-semibold text-gray-900">Service Area</p>
                      <p className="text-gray-600">Austin, TX &amp; Surrounding Metro</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl">🕐</span>
                    <div>
                      <p className="font-semibold text-gray-900">Hours</p>
                      <p className="text-gray-600">Mon–Sat: 7:00am – 6:00pm</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-tx-red-50 border border-tx-red-100 rounded-xl p-6">
                <h4 className="font-bold mb-2 text-tx-red">Free Estimates</h4>
                <p className="text-sm text-gray-600">
                  All estimates are free, written, and itemized. We visit your site to measure —
                  no ballpark numbers over the phone.
                </p>
              </div>

              <div className="bg-tx-blue-50 rounded-xl p-6 border border-tx-blue-100">
                <h4 className="font-bold mb-3 text-tx-blue">Service Areas</h4>
                <div className="flex flex-wrap gap-2">
                  {["Austin", "Round Rock", "Cedar Park", "Pflugerville", "Georgetown", "Kyle", "Buda", "Leander"].map((city) => (
                    <span key={city} className="bg-white border border-tx-blue-100 px-3 py-1 rounded-full text-xs text-tx-blue">
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
