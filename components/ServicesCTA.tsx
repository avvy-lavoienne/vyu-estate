"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Phone, Mail, Calendar } from "lucide-react"
import AnimatedSection from "@/components/AnimatedSection"
import MagneticButton from "@/components/MagneticButton"

export default function ServicesCTA() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="bg-card rounded-lg p-8 md:p-12 border border-border">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Start Your Development Journey?
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Partner with Vyu-Estate to transform your vision into reality. Our expert team is ready to guide you
                through every step of the development process, from initial planning to community delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <motion.div
                className="text-center p-6 bg-background rounded-lg border border-border"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Phone className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
                <p className="text-muted-foreground text-sm">+62 838-2137-3804</p>
              </motion.div>

              <motion.div
                className="text-center p-6 bg-background rounded-lg border border-border"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Mail className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
                <p className="text-muted-foreground text-sm">info@vyuapp.com</p>
              </motion.div>

              <motion.div
                className="text-center p-6 bg-background rounded-lg border border-border"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Calendar className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Schedule Meeting</h3>
                <p className="text-muted-foreground text-sm">Book a consultation</p>
              </motion.div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton>
                <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                  <Link href="/contact">Get Started Today</Link>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-accent">
                  <Link href="/properties">View Our Projects</Link>
                </Button>
              </MagneticButton>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
