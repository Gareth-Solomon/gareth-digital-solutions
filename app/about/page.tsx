import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ButtonLink } from "@/components/ui/button-link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `About | ${siteConfig.name}`,
  description:
    "Learn about Gareth Digital Solutions and how Gareth Solomon uses practical digital solutions to help local service businesses generate, capture and convert more leads."
};

const opportunityGaps = [
  "A missed phone call can become a missed job.",
  "A website visitor can leave without making contact.",
  "Advertising can generate clicks without generating useful enquiries.",
  "A lead can be forgotten because nobody follows up."
];

const approachCards = [
  {
    title: "Find the Opportunity",
    copy: "Identify where potential customers are being lost or where there is an opportunity to generate more enquiries."
  },
  {
    title: "Build the Right Solution",
    copy: "Use the appropriate combination of websites, advertising, lead capture and automation rather than adding unnecessary complexity."
  },
  {
    title: "Measure What Matters",
    copy: "Focus on meaningful business outcomes such as enquiries, leads and customer opportunities, not vanity metrics alone."
  }
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-white py-20">
          <div className="section-shell">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.16em] text-royal">
              About Gareth Digital Solutions
            </p>
            <h1 className="max-w-4xl text-5xl font-black leading-tight text-navy sm:text-6xl">
              Helping Local Businesses Capture More Opportunities
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-steel">
              Gareth Digital Solutions helps local service businesses generate, capture and
              convert more leads using practical digital solutions.
            </p>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-steel">
              The business was founded by Gareth Solomon, a software developer and entrepreneur
              with a focus on using technology to solve real business problems.
            </p>
            <p className="mt-5 max-w-2xl rounded-md bg-mist px-4 py-3 text-sm font-black text-royal">
              Built for businesses that want practical solutions, clearer results and fewer missed
              opportunities.
            </p>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-mist py-16">
          <div className="section-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.16em] text-royal">
                Why GDS Exists
              </p>
              <h2 className="text-4xl font-black leading-tight text-navy">
                Why Gareth Digital Solutions Exists
              </h2>
              <p className="mt-5 leading-7 text-steel">
                Local businesses work hard to generate new opportunities, but potential customers
                can easily be lost along the way.
              </p>
            </div>
            <div className="grid gap-4">
              {opportunityGaps.map((gap) => (
                <div
                  key={gap}
                  className="rounded-md border border-royal/15 bg-white p-5 text-base font-bold leading-7 text-navy shadow-[0_14px_34px_rgba(7,20,51,0.06)]"
                >
                  {gap}
                </div>
              ))}
              <p className="rounded-md bg-white p-5 leading-7 text-steel shadow-[0_14px_34px_rgba(7,20,51,0.06)]">
                Gareth Digital Solutions focuses on finding these gaps and using practical digital
                tools and systems to help businesses capture more of the opportunities they already
                have, while also helping them generate new ones.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="section-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="rounded-lg border border-slate-200 bg-mist p-6 shadow-[0_20px_55px_rgba(7,20,51,0.08)]">
              <div className="flex aspect-[4/3] items-center justify-center rounded-md border border-dashed border-royal/30 bg-white p-8 text-center">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.14em] text-royal">
                    Founder-led
                  </p>
                  <p className="mt-3 text-2xl font-black text-navy">Gareth Solomon</p>
                  <p className="mt-3 text-sm leading-6 text-steel">
                    Practical digital solutions for local service businesses.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.16em] text-royal">
                Founder
              </p>
              <h2 className="text-4xl font-black leading-tight text-navy">Meet Gareth</h2>
              <div className="mt-5 grid gap-4 text-lg leading-8 text-steel">
                <p>I&apos;m Gareth Solomon, the founder of Gareth Digital Solutions.</p>
                <p>
                  My background is in software development, and I&apos;ve always enjoyed building
                  systems and solving problems with technology.
                </p>
                <p>
                  Gareth Digital Solutions brings that experience into the world of local business.
                  The goal isn&apos;t to add technology for the sake of technology. It&apos;s to
                  understand where a business may be losing opportunities and build practical
                  solutions that can help.
                </p>
                <p>
                  That can mean helping a business get found through advertising, improving how
                  enquiries are captured, recovering missed calls, or using automation to make
                  follow-up more effective.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-mist py-16">
          <div className="section-shell">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.16em] text-royal">
                Approach
              </p>
              <h2 className="text-4xl font-black leading-tight text-navy">
                A Practical Approach to Digital Growth
              </h2>
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {approachCards.map((card, index) => (
                <div
                  key={card.title}
                  className="rounded-lg border border-slate-200 bg-white p-6 shadow-[0_20px_55px_rgba(7,20,51,0.08)]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-mist text-sm font-black text-royal">
                    {index + 1}
                  </span>
                  <h3 className="mt-5 text-2xl font-black leading-tight text-navy">
                    {card.title}
                  </h3>
                  <p className="mt-3 leading-7 text-steel">{card.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Genuine Stephen testimonial not found in existing project content, so the trust section is intentionally omitted until exact review text is supplied. */}

        <section className="bg-white py-16">
          <div className="section-shell rounded-lg bg-[#001633] p-8 text-white">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-3xl font-black">
                  Let&apos;s Find Where Your Business Could Be Missing Opportunities
                </h2>
                <p className="mt-3 max-w-2xl text-blue-100">
                  Tell us how your business currently generates and handles enquiries and we&apos;ll
                  help identify where there may be opportunities to improve.
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
