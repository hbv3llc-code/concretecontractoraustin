"use client";
import { useState } from "react";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-tx-blue text-white text-sm py-2 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="flex items-center gap-1.5"><MapPin size={13} className="opacity-70" /> Serving Austin &amp; Surrounding Areas</span>
          <a href="tel:+15127890000" className="font-semibold hover:text-tx-red-100 transition-colors flex items-center gap-1.5">
            <Phone size={13} className="opacity-70" /> (512) 789-0000
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold font-display text-tx-blue leading-none">
            Austin Premier<br />
            <span className="text-tx-red">Concrete</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-gray-700 font-medium hover:text-tx-red transition-colors text-sm uppercase tracking-wide"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+15127890000" className="btn-primary text-sm py-2 px-5">
            Free Estimate
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded text-tx-blue hover:bg-tx-blue-50"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-tx-blue-100 px-4 pb-4">
          <ul className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-gray-700 font-medium py-2 hover:text-tx-red transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a href="tel:+15127890000" className="btn-primary w-full mt-4 text-center">
            Free Estimate
          </a>
        </div>
      )}
    </header>
  );
}
