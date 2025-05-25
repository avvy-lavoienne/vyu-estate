import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Wade Warren",
    role: "USA, California",
    content:
      "Exceptional Service! Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    name: "Emelie Thomson",
    role: "USA, Florida",
    content:
      "Efficient and Reliable. Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    name: "John Mans",
    role: "USA, Nevada",
    content:
      "Trusted Advisors. The Estatein team guided us through the entire buying process. Their knowledge and commitment to our satisfaction were evident at every step.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl">
              Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose
              Estatein for their real estate needs.
            </p>
          </div>
          <span className="text-purple-600 dark:text-purple-400 hover:text-purple-500 dark:hover:text-purple-300 cursor-pointer">
            View All Testimonials
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">
                {testimonial.id === 1 && "Exceptional Service!"}
                {testimonial.id === 2 && "Efficient and Reliable"}
                {testimonial.id === 3 && "Trusted Advisors"}
              </h3>

              <p className="text-muted-foreground mb-6">{testimonial.content}</p>

              <div className="flex items-center space-x-3">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <div className="text-foreground font-medium">{testimonial.name}</div>
                  <div className="text-muted-foreground text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-8 space-x-4">
          <span className="text-muted-foreground">01 of 10</span>
          <div className="flex space-x-2">
            <button className="p-2 border border-border rounded-lg text-muted-foreground hover:text-foreground hover:border-purple-500">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button className="p-2 border border-border rounded-lg text-muted-foreground hover:text-foreground hover:border-purple-500">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
