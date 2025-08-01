import { AboutHeroSection } from "@/components/sections/about-hero-section"
import { AboutStorySection } from "@/components/sections/about-story-section"
import { AboutTeamSection } from "@/components/sections/about-team-section"
import { AboutValuesSection } from "@/components/sections/about-values-section"
import { TechnologyStackSection } from "@/components/sections/technology-stack-section"

export const metadata = {
  title: "About - TechFlow Solutions",
  description: "Learn about TechFlow's mission to democratize software development through AI-powered tools.",
}

export default function AboutPage() {
  return (
    <div className="pt-20">
      <AboutHeroSection />
      <AboutStorySection />
      <AboutValuesSection />
      <TechnologyStackSection />
      <AboutTeamSection />
    </div>
  )
}
