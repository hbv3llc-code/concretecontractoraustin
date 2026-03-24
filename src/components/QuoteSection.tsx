import HeroQuoteForm from "./HeroQuoteForm";

interface QuoteSectionProps {
  heading?: string;
  subheading?: string;
  formId?: string;
}

export default function QuoteSection({
  heading = "Ready to Start Your Project?",
  subheading = "Get a free on-site estimate from Austin's most trusted concrete contractor. We visit your site, measure up, and deliver a written quote within 24–48 hours.",
  formId = "quote-form",
}: QuoteSectionProps) {
  return (
    <section className="bg-tx-blue text-white py-20 px-4 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-tx-blue-700 via-tx-blue to-tx-blue-600"
        aria-hidden="true"
      />
      <div
        className="absolute right-0 top-0 h-full w-1/2 opacity-[0.04] pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(135deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
        aria-hidden="true"
      />
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left — copy */}
        <div>
          <p className="text-tx-red-100 font-semibold uppercase tracking-widest text-xs mb-5 border-l-2 border-tx-red pl-3">
            Free Estimates
          </p>
          <h2 className="text-white mb-5">{heading}</h2>
          <p className="text-blue-200 text-lg mb-8 leading-relaxed">{subheading}</p>
          <div className="flex flex-wrap gap-3 text-sm text-blue-200">
            {[
              "Licensed & Insured",
              "No Obligation",
              "Written Estimate",
              "24-Hour Response",
            ].map((b) => (
              <span
                key={b}
                className="flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-tx-red inline-block shrink-0" />
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* Right — quote form */}
        <HeroQuoteForm id={formId} />
      </div>
    </section>
  );
}
