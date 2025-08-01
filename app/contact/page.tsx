import { ContactHeroSection } from "@/components/sections/contact-hero-section"
import { ContactFormSection } from "@/components/sections/contact-form-section"
import { ContactInfoSection } from "@/components/sections/contact-info-section"
import { OfficeLocationsSection } from "@/components/sections/office-locations-section"

export const metadata = {
  title: "Contact - TechFlow Solutions",
  description: "Get in touch with TechFlow. We're here to help with questions, support, and partnership opportunities.",
}

export default function ContactPage() {
  return (
    <div className="pt-20">
      <ContactHeroSection />
      <div className="grid lg:grid-cols-2 gap-12 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ContactFormSection />
        <ContactInfoSection />
      </div>
      <OfficeLocationsSection />
    </div>
  )
}
