"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { serviceCategories } from "@/config/services";
import { ButtonLink } from "@/components/ui/button-link";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "Free Tools", href: "/free-tools" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" }
];

export function Header() {
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/#home") {
      return pathname === "/";
    }

    if (href === "/#contact") {
      return false;
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  function navLinkClass(href: string) {
    return isActive(href) ? "text-royal" : "hover:text-royal";
  }

  function mobileNavLinkClass(href: string) {
    return `rounded-md px-3 py-2 hover:bg-mist hover:text-royal ${
      isActive(href) ? "bg-mist text-royal" : ""
    }`;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/75 bg-white/92 backdrop-blur">
      <div className="section-shell flex min-h-20 items-center justify-between gap-5 py-3">
        <Link href="/#home" className="flex items-center" aria-label={siteConfig.name}>
          <Image
            src="/images/gareth-digital-logo.png"
            alt="Gareth Digital Solutions"
            width={190}
            height={105}
            priority
            className="h-14 w-auto object-contain"
          />
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-navy lg:flex">
          <Link href="/#home" className={navLinkClass("/#home")}>
            Home
          </Link>
          <div className="group relative">
            <Link
              href="/services"
              className={`inline-flex items-center gap-1 ${navLinkClass("/services")}`}
            >
              Services
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                className="h-3.5 w-3.5"
                fill="currentColor"
              >
                <path d="M5.5 7.5 10 12l4.5-4.5H5.5Z" />
              </svg>
            </Link>
            <div className="invisible absolute left-1/2 top-full w-[520px] -translate-x-1/2 pt-4 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="grid gap-5 rounded-lg border border-slate-200 bg-white p-5 shadow-[0_22px_55px_rgba(7,20,51,0.14)] md:grid-cols-2">
                {serviceCategories.map((category) => (
                  <div key={category.title}>
                    <p className="mb-3 text-xs font-black uppercase tracking-[0.14em] text-royal">
                      {category.title}
                    </p>
                    <div className="grid gap-2">
                      {category.services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="rounded-md px-3 py-2 text-sm font-bold text-navy transition hover:bg-mist hover:text-royal"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {navItems.slice(1).map((item) => (
            <Link key={item.href} href={item.href} className={navLinkClass(item.href)}>
              {item.label}
            </Link>
          ))}
        </nav>
        <ButtonLink
          href={siteConfig.calendarUrl}
          target="_blank"
          className="hidden sm:inline-flex"
        >
          Book a Free Consultation
        </ButtonLink>
        <details className="group relative lg:hidden">
          <summary className="flex min-h-11 cursor-pointer list-none items-center rounded-md border border-slate-200 px-3 text-sm font-black text-navy transition hover:border-royal hover:text-royal">
            Menu
          </summary>
          <div className="absolute right-0 top-full mt-3 max-h-[calc(100vh-96px)] w-[min(86vw,360px)] overflow-y-auto rounded-lg border border-slate-200 bg-white p-4 shadow-[0_22px_55px_rgba(7,20,51,0.18)]">
            <div className="grid gap-2 text-sm font-bold text-navy">
              <Link href="/#home" className={mobileNavLinkClass("/#home")}>
                Home
              </Link>
              <Link href="/services" className={mobileNavLinkClass("/services")}>
                Services
              </Link>
              <div className="grid gap-4 border-y border-slate-200 py-4">
                {serviceCategories.map((category) => (
                  <div key={category.title}>
                    <p className="px-3 text-xs font-black uppercase tracking-[0.14em] text-royal">
                      {category.title}
                    </p>
                    <div className="mt-2 grid gap-1">
                      {category.services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="rounded-md px-3 py-2 hover:bg-mist hover:text-royal"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/free-tools" className={mobileNavLinkClass("/free-tools")}>
                Free Tools
              </Link>
              <Link href="/about" className={mobileNavLinkClass("/about")}>
                About
              </Link>
              <Link href="/#contact" className={mobileNavLinkClass("/#contact")}>
                Contact
              </Link>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
