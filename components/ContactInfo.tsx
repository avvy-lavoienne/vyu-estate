"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react"
import AnimatedSection from "@/components/AnimatedSection"
import StaggeredGrid from "@/components/StaggeredGrid"
import FloatingCard from "@/components/FloatingCard"

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "info@vyuapp.com",
    description: "Send us an email for general inquiries",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+62 838-2137-3804",
    description: "Call us during business hours",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: MapPin,
    title: "Main Office",
    value: "Garut, West Java",
    description: "Visit our headquarters",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+62 838-2137-3804",
    description: "Quick messaging support",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon - Sat: 9AM - 6PM",
    description: "We're available to help",
    color: "from-indigo-500 to-purple-500",
  },
]

export default function ContactInfo() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Let's Connect</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We're excited to connect with you and learn more about your housing development needs. Choose your
              preferred method to get in touch with our team.
            </p>
          </div>
        </AnimatedSection>

        <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {contactMethods.map((method, index) => (
            <FloatingCard
              key={index}
              className="bg-card rounded-lg p-6 border border-border hover:border-purple-500 transition-colors group text-center"
              hoverScale={1.05}
            >
              <motion.div
                className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <method.icon className="h-8 w-8 text-white" />
              </motion.div>

              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-purple-600 transition-colors">
                {method.title}
              </h3>
              <p className="text-foreground font-medium mb-2">{method.value}</p>
              <p className="text-muted-foreground text-sm">{method.description}</p>
            </FloatingCard>
          ))}
        </StaggeredGrid>
      </div>
    </section>
  )
}
