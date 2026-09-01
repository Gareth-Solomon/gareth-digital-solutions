import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { MissedCallsLandingEstimator } from "@/features/missed-call-estimator/missed-call-estimator";

export const metadata: Metadata = {
  title: `Missed Call Revenue Calculator | ${siteConfig.name}`,
  description:
    "Find out what missed calls could be costing your service business and see how LeadReviva can help you follow up with missed callers automatically.",
  openGraph: {
    title: `Missed Call Revenue Calculator | ${siteConfig.name}`,
    description:
      "Find out what missed calls could be costing your service business and see how LeadReviva can help you follow up with missed callers automatically.",
    type: "website"
  }
};

const reassuranceItems = ["Easy setup", "No contracts", "Works with your existing number"];

const painPoints = [
  {
    title: "Can't always answer your phone",
    copy: "You're on a job, driving, in a meeting or with a customer.",
    icon: "phone"
  },
  {
    title: "Don't know how many calls I've missed",
    copy: "You have no idea how many potential customers you're missing.",
    icon: "list"
  },
  {
    title: "Don't know how many jobs went to my competitors",
    copy: "Those missed calls could be turning into someone else's revenue.",
    icon: "route"
  },
  {
    title: "Don't know the amount of lost revenue",
    copy: "You don't know what those missed opportunities are worth each month.",
    icon: "chart"
  },
  {
    title: "Don't know how many don't leave a message",
    copy: "Many callers don't leave a voicemail, so you'll never even know.",
    icon: "message"
  }
];

const processSteps = [
  {
    title: "Missed Call",
    copy: "We detect the missed call.",
    icon: "phone"
  },
  {
    title: "Automatic SMS",
    copy: "A follow-up SMS is sent to the caller within seconds.",
    icon: "message"
  },
  {
    title: "Customer Engaged",
    copy: "The customer can reply straight away, keeping the conversation and opportunity alive.",
    icon: "chat"
  },
  {
    title: "Opportunity Won",
    copy: "You can continue the conversation and turn the enquiry into a booked job.",
    icon: "target"
  }
];

export default function MissedCallsPage() {
  return (
    <main className="bg-white">
      <LandingHeader />
      <HeroSection />
      <PainSection />
      <MissedCallsLandingEstimator>
        <SolutionSection />
      </MissedCallsLandingEstimator>
      <LandingFooter />
    </main>
  );
}

function LandingHeader() {
  return (
    <header className="bg-[#001633] text-white">
      <div className="section-shell flex min-h-20 items-center justify-between gap-5 py-4">
        <a href="/missed-calls" className="flex items-center" aria-label={siteConfig.name}>
          <Image
            src="/images/gareth-digital-logo.png"
            alt="Gareth Digital Solutions"
            width={190}
            height={105}
            priority
            className="h-14 w-auto rounded bg-white object-contain p-1"
          />
        </a>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#001633] py-14 text-white sm:py-18 lg:py-20">
      <div className="absolute inset-0 blue-grid opacity-25" />
      <div className="absolute left-1/2 top-16 h-96 w-96 rounded-full bg-royal/25 blur-3xl" />
      <div className="section-shell relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center xl:gap-16">
        <div className="max-w-2xl">
          <p className="inline-flex rounded-full border border-skybrand/35 bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-skybrand">
            For local service businesses
          </p>
          <h1 className="mt-6 text-5xl font-black leading-[1.08] sm:text-6xl lg:text-7xl">
            Every Missed Call Could Be a <span className="text-royal">Job Lost.</span>
          </h1>
          <div className="mt-7 max-w-xl space-y-3 text-lg leading-8 text-blue-100">
            <p>You&apos;re busy doing the work.</p>
            <p>You can&apos;t always answer the phone.</p>
            <p>While you&apos;re working, your next customer might be calling someone else.</p>
          </div>
          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
            {reassuranceItems.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-100"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-skybrand/50 text-skybrand">
                  <LineIcon type="check" />
                </span>
                {item}
              </span>
            ))}
          </div>
        </div>

        <PhoneGraphic />
      </div>
    </section>
  );
}

function PhoneGraphic() {
  return (
    <div className="relative mx-auto min-h-[440px] w-full max-w-[600px] overflow-hidden pt-28 sm:min-h-[620px] sm:overflow-visible sm:pt-44 lg:min-h-[500px] lg:pt-0">
      <div
        data-hero-annotation
        className="absolute left-0 top-4 z-10 rotate-[-8deg] rounded-full bg-white px-4 py-2 text-sm font-black text-royal shadow-xl lg:-left-8 lg:top-12"
      >
        They called...
      </div>
      <div
        data-hero-annotation
        className="absolute right-0 top-20 z-10 rotate-[7deg] rounded-full bg-white px-4 py-2 text-sm font-black text-royal shadow-xl lg:-right-10 lg:top-40"
      >
        You missed it...
      </div>
      <div
        data-hero-annotation
        className="absolute right-8 top-28 z-10 rotate-[-6deg] rounded-full bg-white px-4 py-2 text-sm font-black text-royal shadow-xl lg:-right-4 lg:bottom-16 lg:top-auto"
      >
        Job Lost.
      </div>

      <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-skybrand/25 bg-skybrand/10" />
      <div className="absolute inset-x-8 bottom-28 h-24 rotate-[-10deg] rounded-full border-y-4 border-skybrand/35" />

      <div
        data-hero-phone
        className="relative z-20 mx-auto w-[200px] rotate-[7deg] rounded-[2rem] border-[8px] border-[#111827] bg-[#061225] p-3 shadow-[0_35px_80px_rgba(0,0,0,0.45)] sm:w-[280px] sm:rounded-[2.4rem] sm:border-[10px] sm:p-4"
      >
        <div className="mx-auto mb-5 h-4 w-20 rounded-b-2xl bg-black sm:mb-8 sm:h-5 sm:w-24" />
        <div className="text-center text-white">
          <p className="text-xs font-black uppercase tracking-[0.14em] text-blue-200 sm:text-sm">
            Incoming Call
          </p>
          <p className="mt-3 text-xl font-black leading-tight sm:mt-4 sm:text-2xl">
            Potential Customer
          </p>
          <p className="mt-2 text-sm text-blue-200">087 123 4567</p>
        </div>
        <div className="mt-8 rounded-md border border-red-400/30 bg-red-500/10 p-3 text-center sm:mt-14 sm:p-4">
          <p className="text-sm font-bold text-red-100">Missed opportunity</p>
          <p className="mt-1 text-2xl font-black text-white sm:text-3xl">Job Lost</p>
        </div>
        <div className="mt-7 flex justify-center gap-6 sm:mt-10 sm:gap-8">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-red-500 text-xl font-black text-white sm:h-14 sm:w-14 sm:text-2xl">
            x
          </span>
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-royal text-xl font-black text-white sm:h-14 sm:w-14 sm:text-2xl">
            +
          </span>
        </div>
      </div>
    </div>
  );
}

function PainSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-black leading-tight text-navy sm:text-5xl">
            Is This Happening to <span className="text-royal">Your Business?</span>
          </h2>
          <p className="mt-5 text-lg leading-8 text-steel">
            If you answered YES to any of these, missed calls could be costing you more than you
            realise.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {painPoints.map((point, index) => (
            <article
              key={point.title}
              className="relative min-h-[250px] rounded-lg border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(7,20,51,0.08)]"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-royal/15 bg-mist text-royal">
                <LineIcon type={point.icon} />
              </div>
              <span className="absolute right-5 top-5 flex h-7 w-7 items-center justify-center rounded-full bg-royal text-sm font-black text-white">
                {index + 1}
              </span>
              <h3 className="text-xl font-black leading-tight text-navy">{point.title}</h3>
              <p className="mt-3 text-sm leading-6 text-steel">{point.copy}</p>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-3xl rounded-md bg-mist px-6 py-5 text-center text-xl font-black text-navy shadow-sm">
          Missed calls could be costing your business more than you realise.
        </p>
      </div>
    </section>
  );
}

function SolutionSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="section-shell">
        <div>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-black leading-tight text-navy sm:text-5xl lg:text-6xl">
              Here&apos;s How We Help You <span className="text-royal">Stop Losing Jobs</span>
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-steel">
              LeadReviva makes sure every missed call gets a follow-up, so more enquiries have the
              opportunity to turn into booked jobs.
            </p>
          </div>

          <div className="relative mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="absolute left-8 right-8 top-8 hidden h-px bg-royal/25 xl:block" />
            {processSteps.map((step, index) => (
              <article key={step.title} className="relative">
                <div className="rounded-lg border border-royal/15 bg-white p-6 shadow-[0_18px_45px_rgba(7,20,51,0.08)]">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-royal/15 bg-mist text-royal">
                    <LineIcon type={step.icon} />
                  </div>
                  <p className="text-sm font-black text-royal">{index + 1}. {step.title}</p>
                  <p className="mt-3 text-sm leading-6 text-steel">{step.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LandingFooter() {
  return (
    <footer className="bg-[#001633] py-10 text-white">
      <div className="section-shell flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Image
            src="/images/gareth-digital-logo.png"
            alt="Gareth Digital Solutions"
            width={190}
            height={105}
            className="h-14 w-auto rounded bg-white object-contain p-1"
          />
          <p className="mt-4 max-w-xl text-sm leading-6 text-blue-100">
            Helping local service businesses capture more opportunities, win more jobs and grow
            with smart digital solutions.
          </p>
        </div>
        <p className="text-sm text-blue-200">
          &copy; 2026 {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function LineIcon({ type }: { type: string }) {
  const sharedProps = {
    className: "h-6 w-6",
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

  if (type === "check") {
    return (
      <svg {...sharedProps} viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5">
        <path d="m5 12 4 4L19 6" />
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

  if (type === "list") {
    return (
      <svg {...sharedProps} viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 6h12" />
        <path d="M8 12h12" />
        <path d="M8 18h12" />
        <path d="M4 6h.01" />
        <path d="M4 12h.01" />
        <path d="M4 18h.01" />
      </svg>
    );
  }

  if (type === "route") {
    return (
      <svg {...sharedProps} viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 6h7a4 4 0 0 1 0 8H9a4 4 0 0 0 0 8h10" />
        <path d="M5 3v6" />
        <path d="M19 19v3" />
      </svg>
    );
  }

  if (type === "chart") {
    return (
      <svg {...sharedProps} viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="m7 15 4-4 3 3 5-7" />
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

  return (
    <svg {...sharedProps} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3v18" />
      <path d="M3 12h18" />
      <path d="m12 3 3 3" />
      <path d="m12 3-3 3" />
      <path d="m21 12-3-3" />
      <path d="m21 12-3 3" />
    </svg>
  );
}
