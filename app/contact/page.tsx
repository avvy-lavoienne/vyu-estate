import type { Metadata } from "next"
import ContactHero from "@/components/contact/ContactHero"
import ContactInfo from "@/components/contact/ContactInfo"
import ContactForm from "@/components/ContactForm"
import OfficeLocations from "@/components/contact/OfficeLocations"
import ExploreWorld from "@/components/contact/ExploreWorld"
import CTA from "@/components/CTA"

export const metadata: Metadata = {
  title: "Contact Us - Estatein",
  description: "Get in touch with Estatein. We're here to assist you with any inquiries regarding our services.",
}

export default function ContactPage() {
  return (
    <div className="bg-gray-900 pt-20">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <OfficeLocations />
      <ExploreWorld />
      <CTA />
    </div>
  )
}
