import Image from "next/image"

const clients = [
  {
    name: "ABC Corporation",
    testimonial:
      "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand business needs.",
    author: "John Doe",
    role: "CEO",
    logo: "/placeholder.svg?height=60&width=120",
  },
  {
    name: "GreenTech Enterprises",
    testimonial:
      "Estatein's ability to identify and secure sustainable locations helped us expand our brand presence. They are a trusted partner in our growth.",
    author: "Jane Doe",
    role: "Founder",
    logo: "/placeholder.svg?height=60&width=120",
  },
]

export default function ValuedClients() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Valued Clients</h2>
          <p className="text-muted-foreground max-w-3xl">
            At Estatein, we have had the privilege of working with a diverse range of clients across various industries.
            Here are some of the clients we\'ve had the pleasure of serving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clients.map((client, index) => (
            <div key={index} className="bg-card rounded-lg p-8 border border-border">
              <div className="mb-6">
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  width={120}
                  height={60}
                  className="h-12 w-auto"
                />
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Domain</h3>
                <p className="text-muted-foreground text-sm">Commercial Real Estate</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-foreground mb-2">Category</h4>
                <p className="text-muted-foreground text-sm">Luxury Home Development</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-foreground mb-2">What They Said 🤗</h4>
                <p className="text-muted-foreground text-sm italic">"{client.testimonial}"</p>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-foreground font-medium">{client.author}</div>
                  <div className="text-muted-foreground text-sm">{client.role}</div>
                </div>
                <button className="text-purple-600 dark:text-purple-400 hover:text-purple-500 dark:hover:text-purple-300 text-sm">
                  Visit Website
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
