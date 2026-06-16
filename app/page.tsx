import { MarketingShell } from "@/components/layout/marketing-shell";
import { Hero } from "@/components/landing/hero";
import { HowItWorks, Features } from "@/components/landing/how-it-works";
import { DoshaExplainer } from "@/components/landing/doshas";
import { Testimonials } from "@/components/landing/testimonials";
import { CTA } from "@/components/landing/cta";

export default function Home() {
  return (
    <MarketingShell>
      <Hero />
      <HowItWorks />
      <DoshaExplainer />
      <Features />
      <Testimonials />
      <CTA />
    </MarketingShell>
  );
}
