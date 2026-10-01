import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ButtonLink } from "@/components/ui/button-link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Free Tools | ${siteConfig.name}`,
  description:
    "Free tools from Gareth Digital Solutions to help local businesses understand and improve lead generation."
};

export default function FreeToolsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-white py-20">
          <div className="section-shell">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.16em] text-royal">
              Free Tools
            </p>
            <h1 className="max-w-3xl text-5xl font-black leading-tight text-navy">
              Free Tools to Help You Find More Lead Opportunities
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-steel">
              Use our free business tools to understand where potential leads may be getting lost
              and where there could be opportunities to generate more business.
            </p>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-mist py-16">
          <div className="section-shell grid gap-6 lg:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-[0_20px_55px_rgba(7,20,51,0.08)]">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.14em] text-royal">
                Missed Calls
              </p>
              <h2 className="text-3xl font-black text-navy">Missed Call Revenue Calculator</h2>
              <p className="mt-4 max-w-2xl leading-7 text-steel">
                Estimate the potential value of the opportunities behind your missed business
                calls.
              </p>
              <ButtonLink href="/missed-calls" className="mt-6">
                Open Free Calculator
              </ButtonLink>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-[0_20px_55px_rgba(7,20,51,0.08)]">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.14em] text-royal">
                Google Ads
              </p>
              <h2 className="text-3xl font-black text-navy">
                Google Ads Opportunity Calculator
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-steel">
                See how many additional jobs Google Ads would need to generate based on your
                budget and average job value.
              </p>
              <ButtonLink href="/free-tools/google-ads-calculator" className="mt-6">
                Open Free Calculator
              </ButtonLink>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="section-shell rounded-lg bg-[#001633] p-8 text-white">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-3xl font-black">
                  Not Sure Where Your Business Could Be Missing Leads?
                </h2>
                <p className="mt-3 max-w-2xl text-blue-100">
                  Tell us how your business currently generates and handles enquiries and we&apos;ll
                  help identify potential opportunities.
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
