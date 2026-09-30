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
