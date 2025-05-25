import type { Metadata } from "next"
import PropertySearch from "@/components/properties/PropertySearch"
import PropertyGrid from "@/components/properties/PropertyGrid"
import ContactForm from "@/components/ContactForm"
import CTA from "@/components/CTA"

export const metadata: Metadata = {
  title: "Properties - Estatein",
  description: "Browse our curated selection of properties and find your dream home.",
}

export default function PropertiesPage() {
  return (
    <div className="bg-gray-900 pt-20">
      <PropertySearch />
      <PropertyGrid />
      <ContactForm />
      <CTA />
    </div>
  )
}
