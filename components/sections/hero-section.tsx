import { siteConfig } from "@/config/site";
import { ButtonLink } from "@/components/ui/button-link";

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      <div className="absolute inset-y-0 right-0 hidden w-1/2 blue-grid opacity-80 lg:block" />
      <div className="section-shell relative grid min-h-[660px] items-center gap-12 py-16 lg:grid-cols-[1fr_0.95fr]">
        <div>
          <p className="mb-4 text-sm font-black uppercase tracking-[0.16em] text-royal">
            {siteConfig.offerName}
          </p>
          <h1 className="max-w-3xl text-5xl font-black leading-[1.04] text-navy sm:text-6xl">
            Stop Losing Customers From <span className="text-royal">Missed Calls</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-steel">
            Every missed call could be a customer ready to buy. Our system helps you respond
            quickly, capture enquiries, and follow up before they move on to the next business.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#estimator">Calculate Your Lost Revenue</ButtonLink>
            <ButtonLink href={siteConfig.calendarUrl} target="_blank" variant="secondary">
              Book a Free Consultation
            </ButtonLink>
          </div>
        </div>
        <div className="relative min-h-[420px]">
          <div className="absolute left-8 top-1/2 h-44 w-44 -translate-y-1/2 rounded-full border border-royal/20 bg-mist" />
          <div className="absolute right-2 top-16 h-64 w-64 rounded-full bg-skybrand/10 blur-3xl" />
          <div className="absolute inset-x-4 bottom-20 h-20 rotate-[-10deg] rounded-full border-y-4 border-skybrand/40" />
          <div className="relative mx-auto w-[245px] rotate-[7deg] rounded-[2.4rem] border-[10px] border-[#111827] bg-[#061225] p-4 shadow-[0_35px_70px_rgba(7,20,51,0.35)]">
            <div className="mx-auto mb-8 h-5 w-24 rounded-b-2xl bg-black" />
            <div className="text-center text-white">
              <p className="text-lg font-bold">Missed Call</p>
              <p className="mt-1 text-xl">087 123 4567</p>
              <p className="mt-1 text-sm text-blue-200">11:32 AM</p>
            </div>
            <div className="mt-20 flex justify-center gap-8">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-red-500 text-2xl text-white">
                ✕
              </span>
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-2xl text-white">
                ✓
              </span>
            </div>
          </div>
          <div className="absolute left-0 top-20 rounded-full bg-white px-4 py-3 text-sm font-bold text-navy shadow-xl">
            Missed Call
          </div>
          <div className="absolute right-0 top-24 rounded-full bg-white px-4 py-3 text-sm font-bold text-navy shadow-xl">
            Automatic SMS
          </div>
          <div className="absolute bottom-12 right-6 rounded-full bg-white px-4 py-3 text-sm font-bold text-navy shadow-xl">
            You Follow Up
          </div>
        </div>
      </div>
    </section>
  );
}
