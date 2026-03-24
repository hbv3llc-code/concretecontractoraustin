import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteSection from "@/components/QuoteSection";
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
        <section className="bg-tx-blue text-white py-16 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-tx-blue-700 via-tx-blue to-tx-blue-600" aria-hidden="true" />
          <div
            className="absolute right-0 top-0 h-full w-1/2 opacity-[0.04] pointer-events-none"
            style={{ background: "repeating-linear-gradient(135deg, #fff 0, #fff 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }}
            aria-hidden="true"
          />
          <div className="relative max-w-6xl mx-auto">
            <p className="text-tx-red-100 font-semibold uppercase tracking-widest text-xs mb-5 border-l-2 border-tx-red pl-3">
              Got Questions?
            </p>
            <h1 className="text-white mb-4">Frequently Asked Questions</h1>
            <p className="text-blue-200 max-w-2xl text-lg">
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
                <div key={i} className="py-7">
                  <div className="flex items-start gap-4">
                    <span className="w-7 h-7 bg-tx-red text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-tx-blue mb-3">{faq.question}</h3>
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote form */}
        <QuoteSection
          heading="Still Have Questions? Let's Talk."
          subheading="We're happy to answer any question about your project — concrete type, timeline, pricing, or process. No obligation, ever."
          formId="faq-quote-form"
        />

      </main>
      <Footer />
    </>
  );
}
