import { FeaturesHeroSection } from "@/components/sections/features-hero-section"
import { DetailedFeaturesSection } from "@/components/sections/detailed-features-section"
import { FeaturesShowcaseSection } from "@/components/sections/features-showcase-section"
import { IntegrationsSection } from "@/components/sections/integrations-section"
import { DemoSection } from "@/components/sections/demo-section"

export const metadata = {
  title: "Features - TechFlow Solutions",
  description: "Discover all the powerful features that make TechFlow the ultimate AI-powered development platform.",
}

export default function FeaturesPage() {
  return (
    <div className="pt-20">
      <FeaturesHeroSection />
      <DetailedFeaturesSection />
      <FeaturesShowcaseSection />
      <IntegrationsSection />
      <DemoSection />
    </div>
  )
}
