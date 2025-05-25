"use client"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedSection from "@/components/AnimatedSection"
import StaggeredGrid from "@/components/StaggeredGrid"
import FloatingCard from "@/components/FloatingCard"
import MagneticButton from "@/components/MagneticButton"

const offices = [
  {
    name: "Main Headquarters",
    address: "Perum Griya Mutiara Rancabango Blok C.40",
    city: "Desa Rancabango, Kec. Tarogong Kaler",
    region: "Kab. Garut, Jawa Barat 44151",
    phone: "+62 838-2137-3804",
    email: "info@vyuapp.com",
    hours: "Monday - Saturday: 9:00 AM - 6:00 PM",
    description:
      "Our main headquarters serve as the heart of Vyu-Estate operations, housing our executive team and project management offices.",
  },
  {
    name: "Project Sales Office",
    address: "Griya Mutiara Sales Gallery",
    city: "Rancabango, Tarogong Kaler",
    region: "Garut, West Java",
    phone: "+62 838-2137-3804",
    email: "sales@vyuapp.com",
    hours: "Daily: 9:00 AM - 5:00 PM",
    description:
      "Visit our on-site sales office to explore our flagship Griya Mutiara project and get detailed information about available units.",
  },
]

export default function OfficeLocations() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Discover Our Office Locations</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Vyu-Estate has strategically located offices to better serve our clients across West Java. Visit us to
              discuss your housing development needs and explore our current projects.
            </p>
          </div>
        </AnimatedSection>

        <div className="mb-12">
          <div className="flex justify-center space-x-4 mb-8">
            <button className="px-6 py-2 bg-purple-600 text-white rounded-lg font-medium">All</button>
            <button className="px-6 py-2 bg-muted text-muted-foreground rounded-lg font-medium hover:bg-accent transition-colors">
              Regional
            </button>
            <button className="px-6 py-2 bg-muted text-muted-foreground rounded-lg font-medium hover:bg-accent transition-colors">
              International
            </button>
          </div>
        </div>

        <StaggeredGrid className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {offices.map((office, index) => (
            <FloatingCard
              key={index}
              className="bg-card rounded-lg overflow-hidden border border-border hover:border-purple-500 transition-colors group"
              hoverScale={1.02}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-purple-600 transition-colors">
                      {office.name}
                    </h3>
                    <div className="space-y-1 text-muted-foreground">
                      <div className="flex items-start space-x-2">
                        <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <div>
                          <p>{office.address}</p>
                          <p>{office.city}</p>
                          <p>{office.region}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-6">{office.description}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3 text-sm">
                    <Phone className="h-4 w-4 text-purple-600" />
                    <span className="text-foreground">{office.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <Mail className="h-4 w-4 text-purple-600" />
                    <span className="text-foreground">{office.email}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <Clock className="h-4 w-4 text-purple-600" />
                    <span className="text-foreground">{office.hours}</span>
                  </div>
                </div>

                <MagneticButton>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Get Directions</Button>
                </MagneticButton>
              </div>
            </FloatingCard>
          ))}
        </StaggeredGrid>
      </div>
    </section>
  )
}
