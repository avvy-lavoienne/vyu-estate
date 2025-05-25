"use client"

import { motion } from "framer-motion"
import { Building2, Home, Users, Leaf, MapPin, Wrench } from "lucide-react"
import AnimatedSection from "@/components/AnimatedSection"
import StaggeredGrid from "@/components/StaggeredGrid"
import FloatingCard from "@/components/FloatingCard"

const services = [
  {
    icon: Building2,
    title: "Master-Planned Communities",
    description:
      "Comprehensive neighborhood development with integrated amenities, infrastructure, and community facilities.",
    features: [
      "Strategic land planning and zoning",
      "Infrastructure development (roads, utilities)",
      "Community amenities (parks, recreational facilities)",
      "Commercial area integration",
      "Transportation accessibility planning",
    ],
    benefits: ["Increased property values", "Enhanced quality of life", "Strong community bonds", "Sustainable growth"],
  },
  {
    icon: Home,
    title: "Luxury Residences",
    description:
      "Bespoke luxury homes that combine elegance, functionality, and state-of-the-art features for discerning clients.",
    features: [
      "Custom architectural design",
      "Premium materials and finishes",
      "Smart home technology integration",
      "Private amenities (pools, gardens)",
      "Concierge and maintenance services",
    ],
    benefits: [
      "Exclusive lifestyle experience",
      "Investment value appreciation",
      "Personalized living spaces",
      "Premium community status",
    ],
  },
  {
    icon: Users,
    title: "Affordable Housing Solutions",
    description:
      "Well-designed, accessible homes that provide quality living options for diverse income levels and family sizes.",
    features: [
      "Cost-effective design optimization",
      "Government subsidy program integration",
      "Flexible payment schemes",
      "Essential amenity provision",
      "Community development programs",
    ],
    benefits: [
      "Homeownership accessibility",
      "Community empowerment",
      "Economic development",
      "Social impact creation",
    ],
  },
  {
    icon: Leaf,
    title: "Sustainable Development",
    description:
      "Environmentally conscious construction practices that minimize impact while maximizing long-term sustainability.",
    features: [
      "Green building certification",
      "Energy-efficient systems",
      "Renewable energy integration",
      "Water conservation systems",
      "Sustainable material sourcing",
    ],
    benefits: [
      "Reduced environmental impact",
      "Lower operating costs",
      "Healthier living environments",
      "Future-proof investments",
    ],
  },
  {
    icon: MapPin,
    title: "Site Development & Infrastructure",
    description:
      "Complete site preparation and infrastructure development to create ready-to-build residential communities.",
    features: [
      "Land clearing and preparation",
      "Utility installation (water, electricity, sewage)",
      "Road construction and paving",
      "Drainage and flood management",
      "Landscaping and beautification",
    ],
    benefits: [
      "Reduced development timeline",
      "Cost-effective infrastructure",
      "Regulatory compliance",
      "Enhanced marketability",
    ],
  },
  {
    icon: Wrench,
    title: "Project Management & Consultation",
    description:
      "Expert guidance and comprehensive project management services for successful residential development projects.",
    features: [
      "Feasibility studies and market analysis",
      "Regulatory approval assistance",
      "Construction supervision",
      "Quality assurance programs",
      "Timeline and budget management",
    ],
    benefits: ["Risk mitigation", "Professional expertise", "Timely project completion", "Quality assurance"],
  },
]

export default function ServiceOfferings() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Comprehensive Services</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Vyu-Estate offers end-to-end housing development solutions, from initial planning to community delivery,
              ensuring every project exceeds expectations and creates lasting value.
            </p>
          </div>
        </AnimatedSection>

        <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FloatingCard
              key={index}
              className="bg-card rounded-lg p-8 border border-border hover:border-purple-500 transition-colors group h-full"
              hoverScale={1.03}
            >
              <motion.div
                className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-500 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <service.icon className="h-8 w-8 text-white" />
              </motion.div>

              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-purple-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-6">{service.description}</p>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-foreground mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="text-sm text-muted-foreground flex items-start"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2 mt-2 flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <motion.li
                        key={benefitIndex}
                        className="text-sm text-muted-foreground flex items-start"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 mt-2 flex-shrink-0" />
                        {benefit}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </FloatingCard>
          ))}
        </StaggeredGrid>
      </div>
    </section>
  )
}
