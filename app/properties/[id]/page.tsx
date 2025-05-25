import type { Metadata } from "next"
import { notFound } from "next/navigation"
import PropertyGallery from "@/components/properties/PropertyGallery"
import PropertyDetails from "@/components/properties/PropertyDetails"
import PropertyInquiry from "@/components/properties/PropertyInquiry"
import PricingDetails from "@/components/properties/PricingDetails"
import PropertyFAQ from "@/components/properties/PropertyFAQ"
import CTA from "@/components/CTA"
import { getPropertyById } from "@/lib/properties"

interface PropertyPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: PropertyPageProps): Promise<Metadata> {
  const property = getPropertyById(params.id)

  if (!property) {
    return {
      title: "Property Not Found - Estatein",
    }
  }

  return {
    title: `${property.title} - Estatein`,
    description: property.description,
  }
}

export default function PropertyPage({ params }: PropertyPageProps) {
  const property = getPropertyById(params.id)

  if (!property) {
    notFound()
  }

  return (
    <div className="bg-gray-900 pt-20">
      <PropertyGallery property={property} />
      <PropertyDetails property={property} />
      <PropertyInquiry property={property} />
      <PricingDetails property={property} />
      <PropertyFAQ />
      <CTA />
    </div>
  )
}
