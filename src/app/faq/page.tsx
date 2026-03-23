import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { faqs } from "@/data/faqs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concrete FAQ Austin TX | Austin Premier Concrete",
  description:
    "Common questions about concrete driveways, patios, foundations and repair in Austin, TX. Answered by Austin Premier Concrete.",
};

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-tx-blue text-white py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <p className="text-tx-red-100 font-semibold uppercase tracking-widest text-sm mb-2">Got Questions?</p>
            <h1 className="text-white mb-4">Frequently Asked Questions</h1>
            <p className="text-blue-200 max-w-2xl">
              Everything you need to know about our concrete services, process, pricing, and more.
              Don&apos;t see your question? Give us a call.
            </p>
          </div>
        </section>

        {/* FAQ list */}
        <section className="section-padding bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="divide-y divide-gray-200">
              {faqs.map((faq, i) => (
                <div key={i} className="py-6">
                  <h3 className="text-lg font-bold text-tx-blue mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-tx-blue-50 border border-tx-blue-100 rounded-xl p-8 text-center">
              <h3 className="mb-2 text-tx-blue">Still Have Questions?</h3>
              <p className="text-gray-600 mb-4 text-sm">
                We&apos;re happy to answer any question about your project — no obligation.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a href="tel:+15127890000" className="btn-primary">📞 (512) 789-0000</a>
                <Link href="/contact" className="btn-outline">Send a Message</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
