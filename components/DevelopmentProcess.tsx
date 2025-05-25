"use client"

import { motion } from "framer-motion"
import { Search, PenTool, Hammer, Key } from "lucide-react"
import AnimatedSection from "@/components/AnimatedSection"
import StaggeredGrid from "@/components/StaggeredGrid"
import FloatingCard from "@/components/FloatingCard"

const processSteps = [
  {
    icon: Search,
    title: "Site Analysis & Planning",
    description:
      "Comprehensive site evaluation and master planning to maximize potential and ensure optimal land utilization.",
    features: [
      "Topographical analysis",
      "Market research and feasibility studies",
      "Zoning and regulatory compliance",
      "Environmental impact assessment",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: PenTool,
    title: "Architectural Design",
    description:
      "Innovative design solutions that blend functionality, aesthetics, and cultural sensitivity for Indonesian communities.",
    features: [
      "Custom architectural concepts",
      "3D visualization and modeling",
      "Sustainable design integration",
      "Cultural and climate considerations",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Hammer,
    title: "Construction Management",
    description:
      "Expert project management ensuring quality construction, timely delivery, and cost-effective development processes.",
    features: [
      "Quality control and supervision",
      "Timeline and budget management",
      "Contractor coordination",
      "Safety and compliance monitoring",
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Key,
    title: "Community Delivery",
    description: "Seamless handover process with comprehensive community facilities and ongoing support for residents.",
    features: ["Infrastructure completion", "Community facility setup", "Resident onboarding", "After-sales support"],
    color: "from-green-500 to-emerald-500",
  },
]

export default function DevelopmentProcess() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Development Process Excellence</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              From initial concept to community delivery, our systematic approach ensures every project meets the
              highest standards of quality, sustainability, and livability.
            </p>
          </div>
        </AnimatedSection>

        <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <FloatingCard
              key={index}
              className="bg-card rounded-lg p-6 border border-border hover:border-purple-500 transition-colors group"
              hoverScale={1.05}
              hoverRotate={index % 2 === 0 ? 2 : -2}
            >
              <motion.div
                className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <step.icon className="h-8 w-8 text-white" />
              </motion.div>

              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-purple-600 transition-colors">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">{step.description}</p>

              <ul className="space-y-2">
                {step.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    className="text-sm text-muted-foreground flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </FloatingCard>
          ))}
        </StaggeredGrid>
      </div>
    </section>
  )
}
