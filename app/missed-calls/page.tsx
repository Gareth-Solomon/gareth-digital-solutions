import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { DemoRequestForm } from "@/features/missed-call-demo/demo-request-form";
import { siteConfig } from "@/config/site";
import { getLeadRevivaSelection, type LeadRevivaSelection } from "@/features/leadreviva/pricing";

export const metadata: Metadata = {
  title: `Missed Call Recovery Demo | ${siteConfig.name}`,
  description:
    "Request a free missed-call recovery demo and see how an automatic SMS can help your business reconnect with missed callers before they call someone else.",
  openGraph: {
    title: `Missed Call Recovery Demo | ${siteConfig.name}`,
    description:
      "See how missed-call recovery can automatically text missed callers and help your business capture more enquiries.",
    type: "website"
  }
};

const reassuranceItems = ["Simple setup", "No long-term contracts", "Existing number"];

const steps = [
  {
    title: "You Miss a Call",
    copy: "You're busy working and can't answer your phone.",
    icon: "phone"
  },
  {
    title: "We Automatically Send an SMS",
    copy: "The caller receives an automatic text message letting them know you couldn't answer.",
    icon: "message"
  },
  {
    title: "You Get a Chance to Win the Job",
    copy: "The caller can respond, allowing you to follow up when you're available.",
    icon: "chat"
  }
];

const benefits = [
  "Automatically respond to missed callers.",
  "Keep using your existing business phone number.",
  "Give potential customers a way to respond when you're unavailable.",
  "Simple setup.",
  "No long-term contracts."
];

export default async function MissedCallsPage({
  searchParams
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const selection = getLeadRevivaSelection(params.plan, params.sms);
  return (
    <>
      <Header />
      <main className="bg-white">
        <HeroSection />
        <StepsSection />
        <BenefitsSection />
        <DemoSection selection={selection} />
      </main>
      <Footer />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#001633] py-14 text-white sm:py-18 lg:py-20">
      <div className="absolute inset-0 blue-grid opacity-25" />
      <div className="absolute right-0 top-12 h-80 w-80 rounded-full bg-royal/25 blur-3xl" />
      <div className="section-shell relative grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="max-w-2xl">
          <p className="inline-flex rounded-full border border-skybrand/35 bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-skybrand">
            Missed Call Recovery Demo
          </p>
          <h1 className="mt-6 text-5xl font-black leading-[1.06] sm:text-6xl lg:text-7xl">
            Never Let Another Missed Call Go Unanswered.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
            Busy working and can&apos;t answer your phone? Our missed-call recovery system
            automatically texts missed callers, giving you a chance to reconnect before they call
            someone else.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
            {reassuranceItems.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-100"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-skybrand/50 text-skybrand">
                  <LineIcon type="check" className="h-3.5 w-3.5" />
                </span>
                {item}
              </span>
            ))}
          </div>
        </div>

        <MissedCallSmsVisual />
      </div>
    </section>
  );
}

function MissedCallSmsVisual() {
  return (
    <div className="mx-auto w-full max-w-[560px] rounded-lg border border-skybrand/20 bg-white/5 p-4 shadow-[0_35px_90px_rgba(0,0,0,0.28)] sm:p-6">
      <div className="grid gap-4 sm:grid-cols-[0.9fr_auto_1fr] sm:items-center">
        <div className="rounded-lg border border-white/10 bg-[#061225] p-5 shadow-xl">
          <div className="mx-auto mb-5 h-4 w-20 rounded-b-2xl bg-black" />
          <p className="text-center text-xs font-black uppercase tracking-[0.16em] text-blue-200">
            Missed Call
          </p>
          <p className="mt-3 text-center text-2xl font-black">Potential Customer</p>
          <p className="mt-2 text-center text-sm text-blue-200">087 123 4567</p>
          <div className="mt-8 flex justify-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-red-500 text-2xl font-black text-white">
              x
            </span>
          </div>
        </div>

        <div className="flex justify-center text-skybrand">
          <LineIcon type="arrow" className="h-10 w-10 rotate-90 sm:rotate-0" />
        </div>

        <div className="rounded-lg bg-white p-5 text-navy shadow-xl">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-mist text-royal">
            <LineIcon type="message" />
          </div>
          <p className="text-sm font-black uppercase tracking-[0.14em] text-royal">
            Automatic SMS
          </p>
          <p className="mt-3 text-lg font-black leading-tight">
            Sorry we missed your call. Reply here and we&apos;ll get back to you shortly.
          </p>
          <p className="mt-4 text-sm leading-6 text-steel">
            A simple message gives the caller a reason to stay connected.
          </p>
        </div>
      </div>
    </div>
  );
}

function StepsSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.16em] text-royal">
            Simple Flow
          </p>
          <h2 className="text-4xl font-black leading-tight text-navy sm:text-5xl">
            How Missed-Call Recovery Works
          </h2>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(7,20,51,0.08)]"
            >
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-royal/15 bg-mist text-royal">
                <LineIcon type={step.icon} />
              </div>
              <p className="text-sm font-black text-royal">Step {index + 1}</p>
              <h3 className="mt-2 text-2xl font-black leading-tight text-navy">{step.title}</h3>
              <p className="mt-3 leading-7 text-steel">{step.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="border-y border-slate-200 bg-mist py-16">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="mb-3 text-sm font-black uppercase tracking-[0.16em] text-royal">
            Why It Helps
          </p>
          <h2 className="text-4xl font-black leading-tight text-navy">
            Give Missed Callers a Reason to Stay Connected
          </h2>
          <p className="mt-5 leading-7 text-steel">
            The system does not answer calls for you. It simply helps you respond quickly when you
            are unavailable.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="flex gap-3 rounded-md border border-royal/15 bg-white p-5 text-sm font-bold leading-6 text-navy shadow-[0_14px_34px_rgba(7,20,51,0.06)]"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mist text-royal">
                <LineIcon type="check" className="h-3.5 w-3.5" />
              </span>
              {benefit}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DemoSection({ selection }: { selection?: LeadRevivaSelection }) {
  return (
    <section id="demo-form" className="scroll-mt-24 bg-white py-16 sm:scroll-mt-28 sm:py-20">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.16em] text-royal">
              Free Demo
            </p>
            <h2 className="text-4xl font-black leading-tight text-navy sm:text-5xl">
              See How Missed-Call Recovery Could Work for Your Business
            </h2>
            <p className="mt-5 text-lg leading-8 text-steel">
              Request a free demo and we&apos;ll show you how the system could help you respond to
              missed calls and capture more enquiries. It takes approximately 15 minutes and
              there&apos;s no obligation.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-[0_20px_55px_rgba(7,20,51,0.1)] sm:p-8">
            <DemoRequestForm selection={selection} />
          </div>
        </div>
      </div>
    </section>
  );
}

function LineIcon({ type, className = "h-6 w-6" }: { type: string; className?: string }) {
  const sharedProps = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 2
  };

  if (type === "phone") {
    return (
      <svg {...sharedProps} viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.6 3.8 9 3.2l2.1 4.4-1.7 1.5a12.4 12.4 0 0 0 5.5 5.5l1.5-1.7 4.4 2.1-.6 2.4c-.3 1.2-1.4 2-2.6 1.8C10.4 18.2 5.8 13.6 4.8 6.4 4.6 5.2 5.4 4.1 6.6 3.8Z" />
      </svg>
    );
  }

  if (type === "message") {
    return (
      <svg {...sharedProps} viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 6.8A2.8 2.8 0 0 1 6.8 4h10.4A2.8 2.8 0 0 1 20 6.8v6.4a2.8 2.8 0 0 1-2.8 2.8H9l-5 4V6.8Z" />
        <path d="M8 9h8" />
        <path d="M8 12h5" />
      </svg>
    );
  }

  if (type === "chat") {
    return (
      <svg {...sharedProps} viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 6.8A2.8 2.8 0 0 1 6.8 4h6.4A2.8 2.8 0 0 1 16 6.8v3.4a2.8 2.8 0 0 1-2.8 2.8H9l-5 3.5V6.8Z" />
        <path d="M11 16h4l5 3.5V9.8A2.8 2.8 0 0 0 17.2 7H17" />
      </svg>
    );
  }

  if (type === "check") {
    return (
      <svg {...sharedProps} viewBox="0 0 24 24" aria-hidden="true">
        <path d="m5 12 4 4L19 6" />
      </svg>
    );
  }

  return (
    <svg {...sharedProps} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}
