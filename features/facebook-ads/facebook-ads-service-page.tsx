import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ConsultationRequestForm } from "./consultation-request-form";

const benefits = [
  { title: "Reach your local area", copy: "Show your ads to people in the areas your business serves." },
  { title: "Promote your services", copy: "Introduce what you offer to potential customers on Facebook and Instagram." },
  { title: "Encourage enquiries", copy: "Give people a way to contact you through your website, forms or messaging." },
  { title: "Build awareness", copy: "Help more people recognise your business when they need your services." },
  { title: "Learn and improve", copy: "Track advertising performance and use the results to refine your campaigns over time." }
];

const steps = [
  {
    title: "Understand Your Business",
    copy: "We learn about your services, ideal customers, service areas and advertising goals."
  },
  {
    title: "Create & Launch Your Ads",
    copy: "We develop your advertising campaign, including targeting, messaging and ad creative."
  },
  {
    title: "Monitor & Improve",
    copy: "We review campaign performance and make adjustments to improve the quality and cost of enquiries."
  }
];

const businessTypes = [
  "Plumbers",
  "Electricians",
  "Appliance repair businesses",
  "Cleaning services",
  "Garden and landscaping services",
  "Other local service businesses"
];

const services = [
  "Facebook and Instagram advertising campaigns",
  "Audience and geographic targeting",
  "Ad copy and creative guidance",
  "Lead generation campaigns",
  "Campaign monitoring and optimisation",
  "Conversion and lead tracking where appropriate"
];

export function FacebookAdsServicePage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-white py-20">
          <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.16em] text-royal">
                Facebook &amp; Instagram Ads
              </p>
              <h1 className="max-w-4xl text-4xl font-black leading-tight text-navy sm:text-5xl lg:text-6xl">
                Reach More Local Customers With Facebook &amp; Instagram Ads
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-steel">
                Get your business in front of potential customers on Facebook and Instagram.
                We help local businesses create targeted advertising campaigns designed to
                generate enquiries and new business opportunities.
              </p>
            </div>
            <div className="rounded-lg bg-[#001633] p-6 text-white shadow-[0_24px_60px_rgba(7,20,51,0.18)]">
              <p className="text-sm font-black uppercase tracking-[0.14em] text-skybrand">
                Campaign focus
              </p>
              <div className="mt-6 grid gap-4">
                {["Your Service Area", "Facebook & Instagram", "Your Services", "Customer Enquiries"].map((item) => (
                  <div key={item} className="rounded-md border border-white/12 bg-white/5 px-4 py-3 text-sm font-bold">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-mist py-16">
          <div className="section-shell">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.14em] text-royal">
                Why Facebook &amp; Instagram Ads?
              </p>
              <h2 className="text-3xl font-black leading-tight text-navy sm:text-4xl">
                Get Your Business Seen by More Potential Customers
              </h2>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit) => (
                <article key={benefit.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-[0_18px_45px_rgba(7,20,51,0.08)]">
                  <h3 className="text-xl font-black text-navy">{benefit.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-steel">{benefit.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="section-shell">
            <h2 className="text-center text-4xl font-black text-navy">How It Works</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {steps.map((step, index) => (
                <article key={step.title} className="rounded-lg border border-royal/15 p-5">
                  <p className="text-sm font-black text-royal">Step {index + 1}</p>
                  <h3 className="mt-2 text-xl font-black text-navy">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-steel">{step.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-mist py-16">
          <div className="section-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.14em] text-royal">
                Who can benefit?
              </p>
              <h2 className="text-3xl font-black leading-tight text-navy sm:text-4xl">
                Facebook Ads for Local Service Businesses
              </h2>
              <p className="mt-4 leading-7 text-steel">
                Facebook and Instagram Ads can help local service businesses reach potential
                customers in their service areas. Campaigns can introduce your services and
                make it easier for interested people to get in touch.
              </p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {businessTypes.map((business) => (
                <li key={business} className="rounded-lg border border-slate-200 bg-white p-5 text-sm font-bold text-navy shadow-[0_18px_45px_rgba(7,20,51,0.08)]">
                  {business}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="section-shell">
            <h2 className="text-3xl font-black text-navy sm:text-4xl">What We Can Help With</h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <li key={service} className="flex gap-3 rounded-lg border border-royal/15 p-5 text-sm font-bold leading-6 text-navy">
                  <span aria-hidden="true" className="text-royal">✓</span>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="facebook-ads-enquiry" aria-labelledby="facebook-ads-enquiry-heading" className="scroll-mt-24 border-y border-slate-200 bg-mist py-16 sm:scroll-mt-28">
          <div className="section-shell">
            <div className="mx-auto max-w-4xl rounded-lg border border-slate-200 bg-white p-6 shadow-[0_20px_55px_rgba(7,20,51,0.1)] sm:p-8">
              <h2 id="facebook-ads-enquiry-heading" className="mb-6 text-3xl font-black text-navy">
                Request a Free Consultation
              </h2>
              <ConsultationRequestForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
