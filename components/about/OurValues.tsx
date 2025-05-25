import { Shield, Star, Users, Heart } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Trust",
    description: "Trust is the cornerstone of every successful real estate transaction.",
  },
  {
    icon: Star,
    title: "Excellence",
    description: "We set the bar high for ourselves. From the properties we list to the services we provide.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your dreams and needs are at the center of our universe. We listen, understand.",
  },
  {
    icon: Heart,
    title: "Our Commitment",
    description: "We are dedicated to providing you with the highest level of service, professionalism, and support.",
  },
]

export default function OurValues() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Values</h2>
          <p className="text-muted-foreground max-w-3xl">
            Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined
            to create a real estate platform that transcended the ordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-card rounded-lg p-6 border border-border">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <value.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
              <p className="text-muted-foreground text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
