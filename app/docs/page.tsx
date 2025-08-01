import { DocsHeroSection } from "@/components/sections/docs-hero-section"
import { DocsNavigationSection } from "@/components/sections/docs-navigation-section"
import { DocsContentSection } from "@/components/sections/docs-content-section"

export const metadata = {
  title: "Documentation - TechFlow Solutions",
  description: "Complete documentation, tutorials, and API reference for TechFlow AI development platform.",
}

export default function DocsPage() {
  return (
    <div className="pt-20">
      <DocsHeroSection />
      <div className="grid lg:grid-cols-4 gap-8 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <DocsNavigationSection />
        <DocsContentSection />
      </div>
    </div>
  )
}
