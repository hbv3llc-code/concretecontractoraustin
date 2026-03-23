import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-tx-blue text-blue-100 pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <h3 className="text-white text-xl font-bold font-display mb-3">
            Austin Premier <span className="text-tx-red-100">Concrete</span>
          </h3>
          <p className="text-sm leading-relaxed text-blue-200">
            Austin&apos;s trusted concrete contractor. Driveways, patios, foundations &amp; more — done right the first time.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-3 uppercase tracking-wider text-xs">Services</h4>
          <ul className="space-y-2 text-sm">
            {[
              ["Concrete Driveways", "/services/concrete-driveways"],
              ["Concrete Patios", "/services/concrete-patios"],
              ["Foundations", "/services/concrete-foundations"],
              ["Flatwork & Sidewalks", "/services/concrete-flatwork"],
              ["Concrete Repair", "/services/concrete-repair"],
              ["Retaining Walls", "/services/retaining-walls"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="text-blue-200 hover:text-white transition-colors">
                  {label}
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
              <a href="tel:+15127890000" className="text-blue-200 hover:text-white transition-colors">
                📞 (512) 789-0000
              </a>
            </li>
            <li>
              <a href="mailto:info@austinpremierconcrete.com" className="text-blue-200 hover:text-white transition-colors">
                ✉️ info@austinpremierconcrete.com
              </a>
            </li>
            <li className="text-blue-200">📍 Austin, TX &amp; Surrounding Areas</li>
            <li className="text-blue-200">🕐 Mon–Sat: 7am – 6pm</li>
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
