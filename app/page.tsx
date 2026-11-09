import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ButtonLink } from "@/components/ui/button-link";
import { siteConfig } from "@/config/site";
import { BronzeShowcase } from "@/features/home/bronze-showcase";

const pageTitle = `Websites, Local SEO & Advertising | ${siteConfig.name}`;
const pageDescription = "Websites, local SEO, advertising and smart automation to help local service businesses attract customers and turn more enquiries into business.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "https://garethdigitalsolutions.com/" },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://garethdigitalsolutions.com/",
    type: "website"
  }
};

const customerJourney = [
  { title: "Get Found", copy: "Help local customers discover your business online." },
  { title: "Attract Customers", copy: "Reach people looking for the services you offer." },
  { title: "Capture Enquiries", copy: "Make it easy for customers to call, message or request a quote." },
  { title: "Win More Business", copy: "Follow up on enquiries so fewer opportunities are missed." }
];

const bronzeHighlights = [
  "Professional 1–3 page mobile-friendly website",
  "Google Business Profile setup or optimisation",
  "Local SEO foundations",
  "Click-to-call and WhatsApp buttons",
  "Contact or quote request form",
  "Two rounds of revisions"
];

const reasons = [
  { title: "Built around local businesses", copy: "Solutions designed for plumbers, electricians, contractors, repair businesses and other local service providers." },
  { title: "A personal approach", copy: "Speak directly with Gareth about your business and the opportunities you want to pursue." },
  { title: "Make contact easier", copy: "Websites and marketing designed to help interested customers take the next step and get in touch." },
  { title: "Practical technical expertise", copy: "A background in software development and automation to help connect the right tools for your business." },
  { title: "Clear communication", copy: "Straightforward explanations and a clear next step, without unnecessary technical jargon." }
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <BusinessHero />
        <CustomerJourney />
        <BronzeShowcase />
        <BronzePackage />
        <WhyChooseGds />
      </main>
      <Footer />
    </>
  );
}

function BusinessHero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white py-16 lg:py-20">
      <div className="section-shell">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-black uppercase tracking-[0.16em] text-royal">Gareth Digital Solutions</p>
          <h1 className="max-w-3xl text-4xl font-black leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-6xl">
            Get Found. Get More Enquiries. <span className="text-royal">Grow Your Business.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-steel">We help local service businesses get found online, attract more customers and make it easier for people to get in touch.</p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-steel">From professional websites and Google visibility to advertising and automated follow-ups, we provide practical solutions to help your business grow.</p>
          <p className="mt-6 max-w-xl text-sm leading-6 text-steel">For plumbers, electricians, contractors, repair businesses and other local service providers.</p>
        </div>
      </div>
    </section>
  );
}

function CustomerJourney() {
  return (
    <section id="how-it-works" className="scroll-mt-24 border-y border-slate-200 bg-mist py-16">
      <div className="section-shell">
        <p className="mb-3 text-sm font-black uppercase tracking-[0.14em] text-royal">From discovery to enquiry</p>
        <h2 className="text-3xl font-black text-navy sm:text-4xl">From Being Found to Winning Customers</h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-steel">Different businesses need help at different stages. We offer practical solutions to help you get discovered, attract enquiries and turn opportunities into customers.</p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {customerJourney.map((step, index) => (
            <article key={step.title} className="rounded-lg border border-slate-200 bg-white p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-mist text-sm font-black text-royal">{index + 1}</span>
              <h3 className="mt-5 text-xl font-black text-navy">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-steel">{step.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BronzePackage() {
  return (
    <section id="bronze-package" className="scroll-mt-24 bg-white py-16">
      <div className="section-shell">
        <p className="mb-3 text-sm font-black uppercase tracking-[0.14em] text-royal">BRONZE PACKAGE</p>
        <h2 className="text-3xl font-black text-navy sm:text-4xl">Get Found</h2>
        <div className="mt-8 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_20px_55px_rgba(7,20,51,0.08)] lg:grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-[#001633] p-6 text-white sm:p-8">
            <span className="inline-flex rounded-full border border-skybrand/35 bg-white/5 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-skybrand">Launch Price</span>
            <p className="mt-5 text-5xl font-black tracking-tight">R3,999</p>
            <p className="mt-2 text-sm text-blue-100">once-off</p>
            <p className="mt-6 max-w-md text-lg leading-8 text-blue-100">Get your business online and make it easy for customers to find and contact you.</p>
            <ButtonLink href="/packages#bronze" variant="light" className="mt-7 py-3 text-center">View Package Details</ButtonLink>
            <p className="mt-3 text-xs leading-5 text-blue-100">Discuss the package with Gareth in a free consultation.</p>
          </div>
          <div className="p-6 sm:p-8">
            <h3 className="text-xl font-black text-navy">A practical foundation for your business</h3>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-navy">
              {bronzeHighlights.map((item) => <li key={item} className="flex gap-3"><span aria-hidden="true" className="font-black text-royal">✓</span>{item}</li>)}
            </ul>
            <p className="mt-6 rounded-md bg-mist p-4 text-sm leading-6 text-navy"><strong>Optional Website Care Plan:</strong> R299/month.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseGds() {
  return (
    <section className="border-y border-slate-200 bg-mist py-16">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="mb-3 text-sm font-black uppercase tracking-[0.14em] text-royal">PRACTICAL SOLUTIONS. PERSONAL SUPPORT.</p>
          <h2 className="text-3xl font-black leading-tight text-navy sm:text-4xl">Why Choose Gareth Digital Solutions?</h2>
          <p className="mt-5 leading-7 text-steel">We start with your business and what you need to achieve, then help you choose a practical next step.</p>
        </div>
        <ul className="grid gap-5">
          {reasons.map((reason) => <li key={reason.title} className="border-l-2 border-royal/25 pl-5"><h3 className="text-lg font-black text-navy">{reason.title}</h3><p className="mt-2 text-sm leading-6 text-steel">{reason.copy}</p></li>)}
        </ul>
      </div>
    </section>
  );
}
