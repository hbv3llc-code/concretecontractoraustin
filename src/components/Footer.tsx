import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { services } from "@/data/services";
import { cities } from "@/data/cities";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-tx-blue text-blue-100 pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <Image
            src="/logo.png"
            alt="Austin Premier Concrete"
            width={689}
            height={400}
            className="h-14 w-auto mb-4 brightness-90"
          />
          <p className="text-sm leading-relaxed text-blue-200">
            Austin&apos;s trusted concrete contractor. Driveways, patios, foundations &amp; more — done right the first time.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-3 uppercase tracking-wider text-xs">Services</h4>
          <ul className="space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-blue-200 hover:text-white transition-colors">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Service Areas */}
        <div>
          <h4 className="text-white font-semibold mb-3 uppercase tracking-wider text-xs">
            <Link href="/service-areas" className="hover:text-tx-red-100 transition-colors">Service Areas</Link>
          </h4>
          <ul className="space-y-2 text-sm">
            {cities.map((c) => (
              <li key={c.slug}>
                <Link href={`/service-areas/${c.slug}`} className="text-blue-200 hover:text-white transition-colors">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-semibold mb-3 uppercase tracking-wider text-xs">Company</h4>
          <ul className="space-y-2 text-sm">
            {[
              ["About Us", "/about"],
              ["Gallery", "/gallery"],
              ["FAQ", "/faq"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="text-blue-200 hover:text-white transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-3 uppercase tracking-wider text-xs">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="tel:+15127890000" className="text-blue-200 hover:text-white transition-colors flex items-center gap-2">
                <Phone size={14} className="opacity-60 shrink-0" /> (512) 789-0000
              </a>
            </li>
            <li>
              <a href="mailto:info@austinconcretecontractors.co" className="text-blue-200 hover:text-white transition-colors flex items-center gap-2">
                <Mail size={14} className="opacity-60 shrink-0" /> info@austinconcretecontractors.co
              </a>
            </li>
            <li className="text-blue-200 flex items-center gap-2">
              <MapPin size={14} className="opacity-60 shrink-0" /> Austin, TX &amp; Surrounding Areas
            </li>
            <li className="text-blue-200 flex items-center gap-2">
              <Clock size={14} className="opacity-60 shrink-0" /> Mon–Sat: 7am – 6pm
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-10 pt-6 border-t border-tx-blue-600 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-blue-300">
        <p>© {year} Austin Premier Concrete. All rights reserved.</p>
        <p>Licensed &amp; Insured in Texas</p>
      </div>
    </footer>
  );
}
