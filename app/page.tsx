import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { ExistingNumberSection } from "@/components/sections/existing-number-section";
import { ExplanationSection } from "@/components/sections/explanation-section";
import { HeroSection } from "@/components/sections/hero-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
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
        <MissedCallEstimator />
        <BenefitsSection />
      </main>
      <Footer />
    </>
  );
}
