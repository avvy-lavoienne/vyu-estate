import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-card rounded-lg p-8 md:p-12 text-center border border-border">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Start Your Home Journey with Vyu-Estate Today
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
            Your dream home awaits in our thoughtfully planned communities. Whether you're looking for a luxury
            residence, affordable housing, or sustainable living solutions, Vyu-Estate is here to turn your vision into
            reality. Experience the difference of quality craftsmanship and innovative design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
              <Link href="/properties">Explore Our Projects</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-accent">
              <Link href="/contact">Schedule a Visit</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
