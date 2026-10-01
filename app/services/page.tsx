import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ButtonLink } from "@/components/ui/button-link";
import { serviceCategories } from "@/config/services";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Services | ${siteConfig.name}`,
  description:
    "Explore Gareth Digital Solutions services for getting more leads and capturing more enquiries."
};

const processSteps = [
  "Get Found",
  "Generate Interest",
  "Capture the Enquiry",
  "Convert the Lead"
];

const linkedServiceSlugs = new Set(["google-ads", "missed-call-recovery"]);

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-white py-20">
          <div className="section-shell">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.16em] text-royal">
              Services
            </p>
            <h1 className="max-w-3xl text-5xl font-black leading-tight text-navy">
              Practical Digital Services to Help Local Businesses Get and Capture More Leads
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-steel">
              Gareth Digital Solutions helps local service businesses attract new customers,
              capture more enquiries and turn more opportunities into business.
            </p>
            <p className="mt-3 max-w-2xl text-sm font-bold text-royal">
              Built for plumbers, electricians, contractors, repair businesses and other local
              service providers.
            </p>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white py-8">
          <div className="section-shell">
            <div className="grid gap-3 rounded-lg bg-mist p-4 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <div
                  key={step}
                  className="flex items-center justify-between rounded-md bg-white px-4 py-3 text-sm font-black text-navy"
                >
                  <span>{step}</span>
                  {index < processSteps.length - 1 ? (
                    <span className="hidden text-royal lg:inline">→</span>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-mist py-16">
          <div className="section-shell grid gap-8 lg:grid-cols-2">
            {serviceCategories.map((category) => (
              <div
                key={category.title}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-[0_20px_55px_rgba(7,20,51,0.08)]"
              >
                <h2 className="text-3xl font-black text-navy">{category.title}</h2>
                <div className="mt-6 grid gap-4">
                  {category.services.map((service) =>
                    linkedServiceSlugs.has(service.slug) ? (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="rounded-md border border-royal/15 bg-white p-5 transition hover:border-royal hover:shadow-[0_16px_34px_rgba(0,92,255,0.12)]"
                      >
                        <h3 className="text-xl font-black text-navy">{service.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-steel">{service.intro}</p>
                      </Link>
                    ) : (
                      <div
                        key={service.href}
                        className="rounded-md border border-royal/15 bg-white p-5"
                      >
                        <h3 className="text-xl font-black text-navy">{service.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-steel">{service.intro}</p>
                      </div>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="section-shell rounded-lg bg-[#001633] p-8 text-white">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-3xl font-black">Not sure which service fits yet?</h2>
                <p className="mt-3 max-w-2xl text-blue-100">
                  Tell us what you&apos;re trying to achieve and we&apos;ll help identify where
                  your business may be missing opportunities.
                </p>
              </div>
              <ButtonLink href={siteConfig.calendarUrl} target="_blank" variant="light">
                Book a Free Consultation
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
