"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import AnimatedSection from "@/components/AnimatedSection"
import StaggeredGrid from "@/components/StaggeredGrid"

const galleryImages = [
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Vyu-Estate office interior",
    title: "Modern Office Space",
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Team meeting",
    title: "Collaborative Environment",
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Project planning",
    title: "Strategic Planning",
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Site visit",
    title: "On-Site Consultation",
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Client presentation",
    title: "Client Presentations",
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Team collaboration",
    title: "Expert Team",
  },
]

export default function ExploreWorld() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Explore Vyu-Estate's World</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Step inside the world of Vyu-Estate, where innovation meets execution. From our modern offices to
              collaborative project meetings, and from strategic planning sessions to on-site consultations, experience
              the environment where your housing dreams come to life.
            </p>
          </div>
        </AnimatedSection>

        <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-semibold">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </StaggeredGrid>
      </div>
    </section>
  )
}
