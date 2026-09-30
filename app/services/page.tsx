import type { Metadata } from "next";
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
              Practical digital services to help you get and capture more leads.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-steel">
              Gareth Digital Solutions helps local businesses improve lead generation, follow-up,
              and conversion systems. Full service page copy will be added next.
            </p>
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
                  {category.services.map((service) => (
                    <a
                      key={service.href}
                      href={service.href}
                      className="rounded-md border border-royal/15 bg-white p-5 transition hover:border-royal hover:shadow-[0_16px_34px_rgba(0,92,255,0.12)]"
                    >
                      <h3 className="text-xl font-black text-navy">{service.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-steel">{service.intro}</p>
                    </a>
                  ))}
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
                  Book a short consultation and we can look at where your business is losing or
                  missing opportunities.
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
