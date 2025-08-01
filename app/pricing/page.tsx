import { PricingHeroSection } from "@/components/sections/pricing-hero-section"
import { PricingPlansSection } from "@/components/sections/pricing-plans-section"
import { PricingFAQSection } from "@/components/sections/pricing-faq-section"
import { PricingCTASection } from "@/components/sections/pricing-cta-section"

export const metadata = {
  title: "Pricing - TechFlow Solutions",
  description: "Choose the perfect plan for your development needs. Start free and scale as you grow.",
}

export default function PricingPage() {
  return (
    <div className="pt-20">
      <PricingHeroSection />
      <PricingPlansSection />
      <PricingFAQSection />
      <PricingCTASection />
    </div>
  )
}
