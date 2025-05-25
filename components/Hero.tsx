"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import AnimatedSection from "@/components/AnimatedSection"
import CountUpAnimation from "@/components/CountUpAnimation"
import MagneticButton from "@/components/MagneticButton"
import ParallaxSection from "@/components/ParallaxSection"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-background pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <AnimatedSection direction="up" delay={0.2}>
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Building Homes, Shaping Futures with{" "}
                <motion.span
                  className="text-purple-600 dark:text-purple-400"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Vyu-Estate
                </motion.span>
              </motion.h1>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.4}>
              <p className="text-lg text-muted-foreground max-w-lg">
                Premier housing development company creating exceptional residential communities that blend innovation,
                sustainability, and timeless design in Indonesia.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4">
                <MagneticButton>
                  <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white group">
                    <Link href="/properties">
                      <motion.span whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                        Explore Projects
                      </motion.span>
                    </Link>
                  </Button>
                </MagneticButton>
                <MagneticButton>
                  <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-accent">
                    <Link href="/about">Learn More</Link>
                  </Button>
                </MagneticButton>
                <MagneticButton>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20"
                  >
                    <Link href="/configurator">🏗️ Design Home</Link>
                  </Button>
                </MagneticButton>
              </div>
            </AnimatedSection>

            {/* Animated Stats */}
            <AnimatedSection direction="up" delay={0.8}>
              <div className="grid grid-cols-3 gap-8 pt-8">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                  <div className="text-2xl md:text-3xl font-bold text-foreground">
                    <CountUpAnimation value={50} suffix="+" />
                  </div>
                  <div className="text-muted-foreground text-sm">Completed Projects</div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                  <div className="text-2xl md:text-3xl font-bold text-foreground">
                    <CountUpAnimation value={500} suffix="+" />
                  </div>
                  <div className="text-muted-foreground text-sm">Happy Families</div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                  <div className="text-2xl md:text-3xl font-bold text-foreground">
                    <div className="text-2xl md:text-3xl font-bold text-foreground">5+</div>
                  </div>
                  <div className="text-muted-foreground text-sm">Years of Excellence</div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection direction="right" delay={0.4}>
            <div className="relative">
              <ParallaxSection speed={0.2}>
                <motion.div
                  className="relative z-10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src="/placeholder.svg?height=600&width=500"
                    alt="Modern residential development"
                    width={500}
                    height={600}
                    className="rounded-lg shadow-2xl"
                    priority
                  />
                </motion.div>
              </ParallaxSection>

              {/* Floating Badge */}
              <motion.div
                className="absolute top-4 right-4 w-24 h-24 border border-border rounded-full flex items-center justify-center bg-background/80 backdrop-blur-sm shadow-lg"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-center">
                  <div className="text-xs text-muted-foreground">YEARS</div>
                  <div className="text-lg font-bold text-foreground">5+</div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
