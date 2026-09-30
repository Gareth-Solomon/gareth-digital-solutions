import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ButtonLink } from "@/components/ui/button-link";
import { getServiceBySlug, services } from "@/config/services";
import { siteConfig } from "@/config/site";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const googleAdsBenefits = [
  {
    title: "Target high-intent searches",
    copy: "Show up when people are actively looking for your services."
  },
  {
    title: "Track calls and enquiries",
    copy: "Measure the actions that can turn into real business."
  },
  {
    title: "Focus spend on higher-intent searches",
    copy: "Direct more of the budget toward searches, locations and services that matter most."
  },
  {
    title: "Ongoing campaign optimisation",
    copy: "Improve campaigns using real performance data."
  }
];

const googleAdsSteps = [
  {
    title: "Research",
    copy: "We review your services, area and search demand."
  },
  {
    title: "Campaign Setup",
    copy: "We structure campaigns around the enquiries you want."
  },
  {
    title: "Track Results",
    copy: "We track calls, forms and lead activity."
  },
  {
    title: "Optimise",
    copy: "We refine targeting, keywords and spend over time."
  }
];

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  return {
    title: `${service.title} | ${siteConfig.name}`,
    description: `${service.title} service page for Gareth Digital Solutions.`
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  if (service.slug === "google-ads") {
    return <GoogleAdsServicePage />;
  }

  return (
    <>
      <Header />
      <main>
        <section className="bg-white py-20">
          <div className="section-shell">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.16em] text-royal">
              Service
            </p>
            <h1 className="max-w-3xl text-5xl font-black leading-tight text-navy">
              {service.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-steel">{service.intro}</p>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-mist py-16">
          <div className="section-shell grid gap-8 lg:grid-cols-2">
            <div className="rounded-lg bg-white p-6 shadow-[0_20px_55px_rgba(7,20,51,0.08)]">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.14em] text-royal">
                Benefits
              </p>
              <h2 className="text-3xl font-black text-navy">Benefits placeholder</h2>
              <p className="mt-4 leading-7 text-steel">
                This section will explain the key benefits of this service once the detailed page
                copy is written.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-[0_20px_55px_rgba(7,20,51,0.08)]">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.14em] text-royal">
                How it works
              </p>
              <h2 className="text-3xl font-black text-navy">How it works placeholder</h2>
              <p className="mt-4 leading-7 text-steel">
                This section will outline the process, steps, and delivery approach for this
                service.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="section-shell rounded-lg bg-[#001633] p-8 text-white">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-3xl font-black">Ready to discuss {service.title}?</h2>
                <p className="mt-3 max-w-2xl text-blue-100">
                  Book a free consultation and we can talk through whether this is the right next
                  step for your business.
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

function GoogleAdsServicePage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-white py-20">
          <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.16em] text-royal">
                Google Ads
              </p>
              <h1 className="max-w-4xl text-5xl font-black leading-tight text-navy sm:text-6xl">
                Get More Qualified Leads From Google Search
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-steel">
                Reach local customers who are already searching for the services you provide.
                Gareth Digital Solutions sets up and manages Google Ads campaigns focused on
                generating real enquiries — not just clicks.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={siteConfig.calendarUrl} target="_blank">
                  Book a Free Google Ads Review
                </ButtonLink>
                <ButtonLink href="#what-we-track" variant="secondary">
                  Estimate Your Google Ads ROI
                </ButtonLink>
              </div>
            </div>
            <div className="rounded-lg bg-[#001633] p-6 text-white shadow-[0_24px_60px_rgba(7,20,51,0.18)]">
              <p className="text-sm font-black uppercase tracking-[0.14em] text-skybrand">
                Campaign focus
              </p>
              <div className="mt-6 grid gap-4">
                {["Google Search", "Your Ad", "Call / Enquiry", "Lead"].map((item) => (
                  <div
                    key={item}
                    className="rounded-md border border-white/12 bg-white/5 px-4 py-3 text-sm font-bold"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-mist py-16">
          <div className="section-shell grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {googleAdsBenefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-lg border border-slate-200 bg-white p-5 shadow-[0_18px_45px_rgba(7,20,51,0.08)]"
              >
                <h2 className="text-xl font-black leading-tight text-navy">{benefit.title}</h2>
                <p className="mt-3 text-sm leading-6 text-steel">{benefit.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="section-shell">
            <div className="text-center">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.14em] text-royal">
                How it works
              </p>
              <h2 className="text-4xl font-black text-navy">
                Research → Campaign Setup → Track Results → Optimise
              </h2>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {googleAdsSteps.map((step, index) => (
                <article key={step.title} className="rounded-lg border border-royal/15 p-5">
                  <p className="text-sm font-black text-royal">{index + 1}</p>
                  <h3 className="mt-2 text-xl font-black text-navy">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-steel">{step.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="what-we-track" className="border-y border-slate-200 bg-mist py-16">
          <div className="section-shell grid gap-8 lg:grid-cols-[0.7fr_1fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.14em] text-royal">
                What we track
              </p>
              <h2 className="text-4xl font-black leading-tight text-navy">
                Meaningful conversions, not vanity metrics.
              </h2>
              <p className="mt-4 leading-7 text-steel">
                We focus on the path from clicks to calls, forms and leads so campaigns are judged
                by useful enquiries.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {["Clicks", "Calls / Forms", "Leads"].map((item) => (
                <div
                  key={item}
                  className="rounded-lg bg-white p-6 text-center shadow-[0_18px_45px_rgba(7,20,51,0.08)]"
                >
                  <p className="text-2xl font-black text-royal">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="section-shell rounded-lg bg-[#001633] p-8 text-white">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-3xl font-black">
                  Find Out Whether Google Ads Could Work for Your Business
                </h2>
                <p className="mt-3 max-w-2xl text-blue-100">
                  We’ll look at what you sell, where you operate and what customers are searching
                  for, then discuss whether Google Ads is worth testing.
                </p>
                <p className="mt-3 max-w-2xl text-sm font-semibold text-skybrand">
                  No obligation — the goal is to first understand whether Google Ads makes sense
                  for your business.
                </p>
              </div>
              <ButtonLink href="/free-tools/google-ads-roi-calculator" variant="light">
                Estimate Your Google Ads ROI
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
