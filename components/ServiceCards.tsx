"use client"

import { Home, Leaf, Building2, Users } from "lucide-react"
import { motion } from "framer-motion"
import FloatingCard from "@/components/FloatingCard"
import StaggeredGrid from "@/components/StaggeredGrid"

const services = [
  {
    icon: Building2,
    title: "Master-Planned Communities",
    description:
      "Designing cohesive neighborhoods with integrated amenities such as parks, recreational facilities, and commercial spaces.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Home,
    title: "Luxury Residences",
    description: "Creating bespoke homes that combine elegance, functionality, and state-of-the-art features.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Affordable Housing",
    description: "Providing accessible, well-designed homes to support diverse communities.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Leaf,
    title: "Sustainable Development",
    description:
      "Incorporating green building techniques, energy-efficient systems, and environmentally responsible materials.",
    color: "from-orange-500 to-red-500",
  },
]

export default function ServiceCards() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <FloatingCard
              key={index}
              className="bg-card rounded-lg p-6 border border-border hover:border-purple-500 transition-colors group cursor-pointer"
              hoverScale={1.05}
              hoverRotate={index % 2 === 0 ? 2 : -2}
            >
              <motion.div
                className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <service.icon className="h-6 w-6 text-white" />
              </motion.div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-purple-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </FloatingCard>
          ))}
        </StaggeredGrid>
      </div>
    </section>
  )
}
