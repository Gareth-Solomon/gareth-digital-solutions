import Image from "next/image";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer id="contact" className="bg-[#001633] text-white">
      <div className="section-shell grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Image
            src="/images/gareth-digital-logo.png"
            alt="Gareth Digital Solutions"
            width={190}
            height={105}
            className="mb-4 h-16 w-auto rounded bg-white object-contain p-1"
          />
          <p className="max-w-sm text-sm leading-6 text-blue-100">
            Helping local businesses recover missed enquiries with smart automation and clear
            follow-up systems.
          </p>
          <p className="mt-5 text-sm font-bold text-skybrand">{siteConfig.tagline}</p>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-skybrand">
            Quick Links
          </h3>
          <div className="grid gap-2 text-sm text-blue-100">
            <a href="#home">Home</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#estimator">Estimator</a>
            <a href="#report-form">Personalised Report</a>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-skybrand">
            Contact
          </h3>
          <div className="grid gap-2 text-sm text-blue-100">
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
            <span>{siteConfig.location}</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-blue-200">
        © 2026 {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
