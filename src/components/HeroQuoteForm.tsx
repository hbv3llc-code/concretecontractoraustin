"use client";
import { useState } from "react";
import { CheckCircle } from "lucide-react";

const serviceOptions = [
  "Concrete Driveway",
  "Concrete Patio",
  "Concrete Foundation",
  "Flatwork / Sidewalk",
  "Stamped & Decorative Concrete",
  "Concrete Repair & Resurfacing",
  "Concrete Removal & Demolition",
  "Retaining Wall",
  "Commercial Concrete",
  "Other / Not Sure",
];

const inputClass =
  "w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-tx-blue bg-gray-50";

export default function HeroQuoteForm({ id = "hero-quote-form" }: { id?: string }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        id={id}
        className="bg-white rounded-2xl p-8 shadow-2xl text-center flex flex-col items-center justify-center min-h-[380px]"
      >
        <CheckCircle size={52} className="text-green-500 mb-4" />
        <h3 className="text-tx-blue text-xl font-bold mb-2">Request Received!</h3>
        <p className="text-gray-500 text-sm max-w-xs">
          We&apos;ll call you within 24 hours to schedule your free on-site estimate.
        </p>
      </div>
    );
  }

  return (
    <div id={id} className="bg-white rounded-2xl p-7 shadow-2xl">
      <h3 className="text-tx-blue text-xl font-bold mb-0.5">Get Your Free Estimate</h3>
      <p className="text-gray-500 text-sm mb-5">We respond within 24 hours. No pressure.</p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name *"
          className={inputClass}
        />
        <input
          type="tel"
          name="phone"
          required
          placeholder="Phone Number *"
          className={inputClass}
        />
        <select name="service" required className={inputClass}>
          <option value="">Select a Service *</option>
          {serviceOptions.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <textarea
          name="message"
          rows={3}
          placeholder="Brief project description (optional)"
          className={`${inputClass} resize-none`}
        />
        <button
          type="submit"
          className="btn-primary w-full justify-center text-sm tracking-widest"
        >
          GET MY FREE ESTIMATE
        </button>
        <p className="text-xs text-gray-400 text-center">
          Licensed &amp; Insured · No Obligation
        </p>
      </form>
    </div>
  );
}
