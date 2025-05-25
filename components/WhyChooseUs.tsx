"use client"

import { motion } from "framer-motion"
import { Award, Clock, Shield, Users, TrendingUp, Heart } from "lucide-react"
import AnimatedSection from "@/components/AnimatedSection"
import StaggeredGrid from "@/components/StaggeredGrid"
import CountUpAnimation from "@/components/CountUpAnimation"

const advantages = [
  {
    icon: Award,
    title: "Proven Track Record",
    description:
      "A portfolio of successful projects showcasing our ability to deliver exceptional communities on time and within budget.",
    stat: "50+",
    statLabel: "Completed Projects",
  },
  {
    icon: Users,
    title: "Customer-Centric Approach",
    description:
      "We prioritize the needs and preferences of our clients, ensuring a seamless and personalized development experience.",
    stat: "500+",
    statLabel: "Happy Families",
  },
  {
    icon: TrendingUp,
    title: "Industry Leadership",
    description:
      "Our team comprises experienced professionals with deep expertise in architecture, engineering, and real estate development.",
    stat: "5+",
    statLabel: "Years of Excellence",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description:
      "Every Vyu-Estate project reflects our dedication to superior craftsmanship, innovation, and community-building excellence.",
    stat: "100%",
    statLabel: "Quality Guarantee",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description:
      "We understand the importance of meeting deadlines and consistently deliver projects according to agreed timelines.",
    stat: "95%",
    statLabel: "On-Time Delivery",
  },
  {
    icon: Heart,
    title: "Community Focus",
    description:
      "We build not just homes, but thriving communities that foster connection, growth, and long-term sustainability.",
    stat: "∞",
    statLabel: "Community Impact",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Vyu-Estate?</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Our commitment to excellence, innovation, and community building sets us apart as Indonesia's premier
              housing development company. Here's what makes us different.
            </p>
          </div>
        </AnimatedSection>

        <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-lg p-6 border border-border hover:border-purple-500 transition-colors group text-center"
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500 transition-colors"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <advantage.icon className="h-8 w-8 text-white" />
              </motion.div>

              <div className="mb-4">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                  {advantage.stat === "∞" ? (
                    "∞"
                  ) : advantage.stat.includes("%") ? (
                    <CountUpAnimation value={Number.parseInt(advantage.stat)} suffix="%" />
                  ) : (
                    <CountUpAnimation value={Number.parseInt(advantage.stat)} suffix="+" />
                  )}
                </div>
                <div className="text-sm text-muted-foreground">{advantage.statLabel}</div>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-purple-600 transition-colors">
                {advantage.title}
              </h3>
              <p className="text-muted-foreground text-sm">{advantage.description}</p>
            </motion.div>
          ))}
        </StaggeredGrid>
      </div>
    </section>
  )
}
