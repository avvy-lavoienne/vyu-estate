import Hero from "@/components/Hero"
import ServiceCards from "@/components/ServiceCards"
import FeaturedProperties from "@/components/FeaturedProperties"
import Testimonials from "@/components/Testimonials"
import FAQ from "@/components/FAQ"
import CTA from "@/components/CTA"

export default function HomePage() {
  return (
    <div className="bg-background">
      <Hero />
      <ServiceCards />
      <FeaturedProperties />
      <Testimonials />
      <FAQ />
      <CTA />
    </div>
  )
}
