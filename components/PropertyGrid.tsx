import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Bed, Bath, Square, ChevronLeft, ChevronRight } from "lucide-react"
import { getAllProperties } from "@/lib/properties"

export default function PropertyGrid() {
  const properties = getAllProperties()

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Discover a World of Possibilities</h2>
          <p className="text-gray-400 max-w-3xl">
            Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the
            perfect property that resonates with your vision of home
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-purple-500 transition-colors"
            >
              <div className="relative">
                <Image
                  src={property.image || "/placeholder.svg"}
                  alt={property.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              </div>

              <div className="p-6">
                <div className="text-sm text-purple-400 mb-2">{property.location}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{property.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{property.description}</p>

                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Bed className="h-4 w-4" />
                    <span>{property.specifications.bedrooms}-Bedroom</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Bath className="h-4 w-4" />
                    <span>{property.specifications.bathrooms}-Bathroom</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Square className="h-4 w-4" />
                    <span>{property.type}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-gray-400">Price</div>
                    <div className="text-2xl font-bold text-white">{property.price}</div>
                  </div>
                  <Button asChild className="bg-purple-600 hover:bg-purple-700">
                    <Link href={`/properties/${property.id}`}>View Property Details</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-8 space-x-4">
          <span className="text-gray-400">01 of 60</span>
          <div className="flex space-x-2">
            <button className="p-2 border border-gray-600 rounded-lg text-gray-400 hover:text-white hover:border-purple-500">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button className="p-2 border border-gray-600 rounded-lg text-gray-400 hover:text-white hover:border-purple-500">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
