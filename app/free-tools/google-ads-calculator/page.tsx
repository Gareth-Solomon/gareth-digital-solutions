import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ButtonLink } from "@/components/ui/button-link";
import { siteConfig } from "@/config/site";
import { GoogleAdsCalculator } from "@/features/google-ads-calculator/google-ads-calculator";

export const metadata: Metadata = {
  title: `Google Ads Opportunity Calculator | ${siteConfig.name}`,
  description:
    "A simple Google Ads opportunity calculator for local service businesses. No Google Ads knowledge required."
};

export default function GoogleAdsCalculatorPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-white py-20">
          <div className="section-shell">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.16em] text-royal">
              Free Tool
            </p>
            <h1 className="max-w-4xl text-5xl font-black leading-tight text-navy sm:text-6xl">
              How Many Jobs Would Google Ads Need to Generate to Be Worth It?
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-steel">
              Use this simple calculator to compare your advertising budget with the value of the
              jobs you want to generate. No Google Ads knowledge required.
            </p>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-mist py-16">
          <div className="section-shell">
            <GoogleAdsCalculator />
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="section-shell">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-[0_20px_55px_rgba(7,20,51,0.08)]">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.14em] text-royal">
                Interpretation
              </p>
              <h2 className="text-3xl font-black text-navy">
                Could Google Ads Realistically Generate Those Jobs?
              </h2>
              <p className="mt-4 max-w-3xl leading-7 text-steel">
                That depends on how many people are searching for your services, your location,
                competition and how well your campaign and website convert enquiries into
                customers.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white pb-16">
          <div className="section-shell rounded-lg bg-[#001633] p-8 text-white">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-3xl font-black">
                  Want to Know Whether There Is Enough Google Search Demand in Your Area?
                </h2>
                <p className="mt-3 max-w-2xl text-blue-100">
                  Gareth Digital Solutions can review your services, location and local search
                  opportunity before you decide whether Google Ads is worth testing.
                </p>
              </div>
              <ButtonLink href={siteConfig.calendarUrl} target="_blank" variant="light">
                Book a Free Google Ads Review
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
