import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { ExistingNumberSection } from "@/components/sections/existing-number-section";
import { ExplanationSection } from "@/components/sections/explanation-section";
import { HeroSection } from "@/components/sections/hero-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { ButtonLink } from "@/components/ui/button-link";
import { MissedCallEstimator } from "@/features/missed-call-estimator/missed-call-estimator";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ExplanationSection />
        <HowItWorksSection />
        <ExistingNumberSection />
        <PreEstimatorCta />
        <MissedCallEstimator />
        <BenefitsSection />
      </main>
      <Footer />
    </>
  );
}

function PreEstimatorCta() {
  return (
    <section className="bg-white py-12">
      <div className="section-shell rounded-lg bg-[#001633] p-6 text-center text-white shadow-[0_20px_55px_rgba(7,20,51,0.12)] sm:p-8">
        <h2 className="text-3xl font-black leading-tight sm:text-4xl">
          Ready to Stop Missing Customer Opportunities?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
          See how missed-call recovery could work for your business, or explore what missed calls
          might be costing you.
        </p>
        <ButtonLink href="/missed-calls#demo-form" variant="light" className="mt-6">
          Get a Free Demo
        </ButtonLink>
        <p className="mt-4 text-sm font-bold text-skybrand">
          Or explore the free estimator below ↓
        </p>
      </div>
    </section>
  );
}
