import type { Metadata } from "next"
import ServicesHero from "@/components/services/ServicesHero"
import DevelopmentProcess from "@/components/services/DevelopmentProcess"
import ServiceOfferings from "@/components/services/ServiceOfferings"
import WhyChooseUs from "@/components/services/WhyChooseUs"
import ServicesCTA from "@/components/services/ServicesCTA"

export const metadata: Metadata = {
  title: "Our Services - Vyu-Estate",
  description:
    "Comprehensive housing development services including master-planned communities, luxury residences, affordable housing, and sustainable development solutions in Indonesia.",
  keywords:
    "housing development services, master planning, luxury residences, affordable housing, sustainable development, Indonesia real estate",
}

export default function ServicesPage() {
  return (
    <div className="bg-background pt-20">
      <ServicesHero />
      <DevelopmentProcess />
      <ServiceOfferings />
      <WhyChooseUs />
      <ServicesCTA />
    </div>
  )
}
