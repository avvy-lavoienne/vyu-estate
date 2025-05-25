import type { Metadata } from "next"
import PropertyConfigurator from "@/components/configurator/PropertyConfigurator"

export const metadata: Metadata = {
  title: "Property Configurator - Vyu-Estate",
  description:
    "Design your dream home with Vyu-Estate's interactive property configurator. Customize features, see real-time pricing, and create the perfect home for your family.",
  keywords: "property configurator, custom home design, house builder, Indonesia real estate, home customization",
}

export default function ConfiguratorPage() {
  return (
    <div className="bg-background pt-20">
      <PropertyConfigurator />
    </div>
  )
}
