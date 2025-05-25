import Image from "next/image"

export default function OurJourney() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Journey</h1>
            <p className="text-muted-foreground mb-8">
              Our story is one of continuous growth and evolution. We started as a small team with big dreams,
              determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded
              our reach, forged valuable partnerships, and gained the trust of countless clients.
            </p>

            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground mb-2">200+</div>
                <div className="text-muted-foreground text-sm">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground mb-2">10k+</div>
                <div className="text-muted-foreground text-sm">Properties For Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground mb-2">16+</div>
                <div className="text-muted-foreground text-sm">Years of Experience</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Modern house model"
              width={500}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
