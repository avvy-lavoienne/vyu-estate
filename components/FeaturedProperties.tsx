"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Home, MapPin, Users, ChevronLeft, ChevronRight, Camera } from "lucide-react"
import AnimatedSection from "@/components/AnimatedSection"
import FloatingCard from "@/components/FloatingCard"
import StaggeredGrid from "@/components/StaggeredGrid"
import MagneticButton from "@/components/MagneticButton"

const projects = [
  {
    id: "1",
    title: "Griya Mutiara Residence",
    location: "Kabupaten Garut, West Java",
    description:
      "A premium residential community featuring modern homes with traditional Indonesian architectural elements.",
    price: "Starting from IDR 850M",
    image: "/placeholder.svg?height=300&width=400",
    units: 120,
    type: "Residential Community",
    status: "Available",
    hasVirtualTour: true,
  },
  {
    id: "2",
    title: "Vyu Gardens Estate",
    location: "Kabupaten Tasikmalaya, West Java",
    description: "Sustainable housing development with eco-friendly features and integrated green spaces.",
    price: "Starting from IDR 650M",
    image: "/placeholder.svg?height=300&width=400",
    units: 80,
    type: "Eco-Friendly Housing",
    status: "Pre-Launch",
    hasVirtualTour: true,
  },
  {
    id: "3",
    title: "Heritage Hills",
    location: "Kabupaten Bandung, West Java",
    description: "Luxury hillside residences offering panoramic views and premium amenities for discerning families.",
    price: "Starting from IDR 1.2B",
    image: "/placeholder.svg?height=300&width=400",
    units: 45,
    type: "Luxury Villas",
    status: "Coming Soon",
    hasVirtualTour: true,
  },
]

export default function FeaturedProperties() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
              <p className="text-muted-foreground max-w-2xl">
                Explore our signature residential developments that showcase Vyu-Estate's commitment to quality,
                innovation, and community building across West Java.
              </p>
            </div>
            <MagneticButton>
              <Link
                href="/properties"
                className="text-purple-600 dark:text-purple-400 hover:text-purple-500 dark:hover:text-purple-300 font-medium"
              >
                View All Projects
              </Link>
            </MagneticButton>
          </div>
        </AnimatedSection>

        <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <FloatingCard
              key={project.id}
              className="bg-card rounded-lg overflow-hidden border border-border hover:border-purple-500 transition-colors group"
              hoverScale={1.03}
            >
              <div className="relative overflow-hidden">
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.4 }}>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                </motion.div>
                <motion.div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                  {project.status}
                </div>
                {project.hasVirtualTour && (
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    <Camera className="h-3 w-3" />
                    Virtual Tour
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-purple-600 dark:text-purple-400 mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  {project.location}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                  <motion.div className="flex items-center space-x-1" whileHover={{ scale: 1.05 }}>
                    <Home className="h-4 w-4" />
                    <span>{project.units} Units</span>
                  </motion.div>
                  <motion.div className="flex items-center space-x-1" whileHover={{ scale: 1.05 }}>
                    <Users className="h-4 w-4" />
                    <span>{project.type}</span>
                  </motion.div>
                </div>

                <div className="flex justify-between items-center mb-4">
                  <div className="text-lg font-bold text-foreground">{project.price}</div>
                </div>

                <div className="flex gap-2">
                  <MagneticButton>
                    <Button asChild className="flex-1 bg-purple-600 hover:bg-purple-700 text-white">
                      <Link href={`/properties/${project.id}`}>View Details</Link>
                    </Button>
                  </MagneticButton>
                  {project.hasVirtualTour && (
                    <MagneticButton>
                      <Button
                        asChild
                        variant="outline"
                        className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                      >
                        <Link href="/virtual-tours">
                          <Camera className="h-4 w-4" />
                        </Link>
                      </Button>
                    </MagneticButton>
                  )}
                </div>
              </div>
            </FloatingCard>
          ))}
        </StaggeredGrid>

        <AnimatedSection delay={0.6}>
          <div className="flex justify-center items-center mt-8 space-x-4">
            <span className="text-muted-foreground">01 of 12</span>
            <div className="flex space-x-2">
              <MagneticButton>
                <button className="p-2 border border-border rounded-lg text-muted-foreground hover:text-foreground hover:border-purple-500 transition-colors">
                  <ChevronLeft className="h-4 w-4" />
                </button>
              </MagneticButton>
              <MagneticButton>
                <button className="p-2 border border-border rounded-lg text-muted-foreground hover:text-foreground hover:border-purple-500 transition-colors">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </MagneticButton>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
