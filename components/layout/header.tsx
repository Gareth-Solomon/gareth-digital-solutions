import Image from "next/image";
import { siteConfig } from "@/config/site";
import { ButtonLink } from "@/components/ui/button-link";
import type { NavItem } from "@/types/navigation";

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Estimator", href: "#estimator" },
  { label: "Report", href: "#report-form" },
  { label: "Contact", href: "#contact" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/75 bg-white/92 backdrop-blur">
      <div className="section-shell flex min-h-20 items-center justify-between gap-5 py-3">
        <a href="#home" className="flex items-center" aria-label={siteConfig.name}>
          <Image
            src="/images/gareth-digital-logo.png"
            alt="Gareth Digital Solutions"
            width={190}
            height={105}
            priority
            className="h-14 w-auto object-contain"
          />
        </a>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-navy lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-royal">
              {item.label}
            </a>
          ))}
        </nav>
        <ButtonLink
          href={siteConfig.calendarUrl}
          target="_blank"
          className="hidden sm:inline-flex"
        >
          Book a Free Consultation
        </ButtonLink>
      </div>
    </header>
  );
}
