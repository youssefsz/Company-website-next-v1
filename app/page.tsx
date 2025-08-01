import { HeroSection } from "@/components/sections/hero-section"
import { SocialProofSection } from "@/components/sections/social-proof-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { SuccessStoriesSection } from "@/components/sections/success-stories-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { PricingPreviewSection } from "@/components/sections/pricing-preview-section"
import { FAQSection } from "@/components/sections/faq-section"

export default function HomePage() {
  return (
    <div className="pt-20">
      <HeroSection />
      <SocialProofSection />
      <FeaturesSection />
      <SuccessStoriesSection />
      <TestimonialsSection />
      <PricingPreviewSection />
      <FAQSection />
    </div>
  )
}
