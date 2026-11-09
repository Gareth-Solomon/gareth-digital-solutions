import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ButtonLink } from "@/components/ui/button-link";
import { PackageEnquiryForm } from "@/features/packages/package-enquiry-form";
import { siteConfig } from "@/config/site";

const title = `Digital Service Packages | ${siteConfig.name}`;
const description = "Explore Bronze — Get Found: a professional website and local online foundations for R3,999 once-off. See package details and enquire about your business.";
export const metadata: Metadata = {
  title, description,
  alternates: { canonical: "https://garethdigitalsolutions.com/packages" },
  openGraph: { title, description, url: "https://garethdigitalsolutions.com/packages", type: "website" }
};
const included = [
  "Professional website: 1–3 page mobile-friendly website using a professional template.",
  "Google Business Profile: Setup or optimisation of an existing eligible profile.",
  "Local SEO foundations: Page titles, descriptions, relevant local keywords, sitemap, speed optimisation and Google Search Console setup.",
  "Click-to-call button.", "WhatsApp contact button.", "Contact or quote request form.",
  "Two rounds of revisions to the agreed design and content before launch."
];
const steps = [
  { title: "Tell Us About Your Business", copy: "Share what your business does, the services you offer and what you need help with." },
  { title: "We Build Your Online Presence", copy: "We confirm the project scope and get to work on your website and online foundations." },
  { title: "Review and Launch", copy: "Review your website, request any agreed revisions and approve it before launch." }
];
const details = [
  { title: "What We Need From You", items: ["Business logo, if available.", "Photos of your work.", "List of services offered.", "Areas your business serves.", "Feedback within three working days of each review request."], paragraphs: ["Delays in supplying information or feedback may affect the launch date."] },
  { title: "Payment Terms", items: ["50% deposit: R1,999.50, payable before work begins.", "50% balance: R1,999.50, payable before the website goes live."], paragraphs: ["Payment is arranged after we have reviewed the enquiry and confirmed the agreed project scope."] },
  { title: "Optional Website Care Plan — R299/month", items: ["Website hosting.", "Security maintenance and backups.", "Up to 30 minutes of minor content edits per month, such as updating business hours, prices or photos.", "Support for website faults covered by the plan."], paragraphs: ["Unused editing time does not carry over to the following month.", "Major redesigns, additional pages and new functionality are quoted separately."] },
  { title: "Prefer to Manage Your Own Website?", items: [], paragraphs: ["After full payment, the customer receives the agreed website files and handover information so they can arrange their own hosting and maintenance.", "Ongoing support is not included after handover."] },
  { title: "Additional Costs", items: [], paragraphs: ["Domain registration and renewal, as well as professional business email mailboxes, are billed separately.", "Costs will be confirmed before work begins."] },
  { title: "Important Information", items: ["The website uses a professional template and includes a maximum of three pages.", "Additional pages, complex integrations, e-commerce and custom functionality are not included unless separately quoted.", "Customers own the agreed website deliverables after full payment, subject to third-party licensing.", "Google Business Profile eligibility and verification are controlled by Google.", "The business owner should retain ownership of their Google Business Profile.", "Foundational SEO is included, but ongoing SEO is not.", "Search rankings, customer enquiries and sales are not guaranteed.", "Monthly SEO reporting and ongoing optimisation are not included in Bronze."], paragraphs: [] }
];

export default async function PackagesPage({ searchParams }: { searchParams: Promise<{ package?: string | string[] }> }) {
  const params = await searchParams;
  const topic = params.package === "silver" || params.package === "gold" ? params.package : "bronze";
  return (
    <>
      <Header />
      <main>
        <section className="bg-white py-16 lg:py-20">
          <div className="section-shell">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.16em] text-royal">Packages</p>
            <h1 className="max-w-4xl text-4xl font-black leading-tight text-navy sm:text-5xl lg:text-6xl">Simple Packages to Help Your Business Grow</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-steel">Whether you&apos;re getting online for the first time or improving your digital presence, we&apos;ll help you take the next step.</p>
          </div>
        </section>

        <section aria-labelledby="packages-heading" className="border-y border-slate-200 bg-mist py-16">
          <div className="section-shell">
            <h2 id="packages-heading" className="mb-8 text-3xl font-black text-navy sm:text-4xl">Choose Your Next Step</h2>
            <div className="grid items-start gap-6 lg:grid-cols-[1.3fr_1.7fr]">
              <article id="bronze" className="scroll-mt-28 overflow-hidden rounded-lg border-2 border-royal bg-white shadow-[0_20px_55px_rgba(7,20,51,0.1)]">
                <div className="bg-navy p-6 text-white sm:p-8">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-skybrand">Available Now</p>
                  <h3 className="mt-3 text-3xl font-black">Bronze — Get Found</h3>
                  <p className="mt-5 text-4xl font-black">R3,999 <span className="text-base font-bold">once-off</span></p>
                  <p className="mt-2 text-sm font-bold text-skybrand">Launch Price</p>
                  <p className="mt-5 leading-7 text-blue-100">Get your business online and make it easy for customers to find and contact you.</p>
                </div>
                <div className="p-6 sm:p-8">
                  <h4 className="text-lg font-black text-navy">What&apos;s Included</h4>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-steel">{included.map(item => <li key={item} className="flex gap-3"><span aria-hidden="true" className="font-bold text-royal">✓</span><span>{item}</span></li>)}</ul>
                  <p className="mt-6 rounded-md bg-mist p-4 text-sm font-bold leading-6 text-navy">Optional Website Care Plan — R299/month</p>
                  <ButtonLink href="/packages#package-enquiry" className="mt-6 w-full">Get Started with Bronze</ButtonLink>
                  <p className="mt-3 text-center text-xs leading-6 text-steel">No payment required to enquire.</p>
                </div>
              </article>
              <div className="grid gap-6 md:grid-cols-2">
              {[
                { slug: "silver", name: "Silver — Get Calls", copy: "For established local service businesses looking to attract more customer enquiries through ongoing local visibility improvements.", cta: "Enquire About Silver" },
                { slug: "gold", name: "Gold — Get Booked", copy: "For businesses wanting to capture, follow up and convert more enquiries through smart automation.", cta: "Enquire About Gold" }
              ].map(pkg => (
                <article key={pkg.slug} className="flex min-w-0 flex-col rounded-lg border border-slate-200 bg-white p-6 sm:p-8">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-steel">Coming Soon</p>
                  <h3 className="mt-3 text-2xl font-black text-navy">{pkg.name}</h3>
                  <p className="mt-5 leading-7 text-steel">{pkg.copy}</p>
                  <div className="mt-auto pt-6">
                  <p className="font-bold text-navy">Pricing to be confirmed</p>
                  <ButtonLink href={`/packages?package=${pkg.slug}#package-enquiry`} variant="secondary" className="mt-6 w-full">{pkg.cta}</ButtonLink>
                  </div>
                </article>
              ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="section-shell">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.14em] text-royal">The Bronze package process</p>
            <h2 className="text-3xl font-black text-navy sm:text-4xl">How It Works</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">{steps.map((step, index) => <article key={step.title} className="rounded-lg border border-royal/15 p-6"><p className="text-sm font-black text-royal">Step {index + 1}</p><h3 className="mt-3 text-xl font-black text-navy">{step.title}</h3><p className="mt-3 leading-7 text-steel">{step.copy}</p></article>)}</div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-mist py-16">
          <div className="section-shell">
            <h2 className="text-3xl font-black text-navy sm:text-4xl">Bronze Package — Full Details</h2>
            <div className="mt-8 grid items-start gap-6 lg:grid-cols-2">{details.map(detail => <article key={detail.title} className="rounded-lg border border-slate-200 bg-white p-6 sm:p-8"><h3 className="text-xl font-black text-navy">{detail.title}</h3>{detail.items.length > 0 && <ul className="mt-5 list-disc space-y-3 pl-5 text-base leading-7 text-steel">{detail.items.map(item => <li key={item}>{item}</li>)}</ul>}{detail.paragraphs.map(p => <p key={p} className="mt-5 text-base leading-7 text-steel">{p}</p>)}</article>)}</div>
          </div>
        </section>

        <section id="package-enquiry" aria-labelledby="package-enquiry-heading" className="scroll-mt-28 bg-white py-16">
          <div className="section-shell">
            <div className="mx-auto max-w-3xl rounded-lg border border-slate-200 bg-white p-6 shadow-[0_20px_55px_rgba(7,20,51,0.08)] sm:p-8">
              <h2 id="package-enquiry-heading" className="mb-6 text-3xl font-black text-navy">{topic === "bronze" ? "Get Started with Bronze" : `Enquire About ${topic === "silver" ? "Silver" : "Gold"}`}</h2>
              <PackageEnquiryForm key={topic} topic={topic} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
