import Image from "next/image"
import { MessageCircle } from "lucide-react"

const teamMembers = [
  {
    name: "Max Mitchell",
    role: "Founder",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Sarah Johnson",
    role: "Chief Real Estate Officer",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "David Brown",
    role: "Head of Property Management",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Michael Turner",
    role: "Legal Counsel",
    image: "/placeholder.svg?height=200&width=200",
  },
]

export default function TeamSection() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet the Estatein Team</h2>
          <p className="text-gray-400 max-w-3xl">
            At Estatein, our success is driven by the dedication and expertise of our team, and we\'re proud to
            introduce you to the people behind our mission to make your real estate dreams a reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={200}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{member.role}</p>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400 text-sm">Say Hello 👋</span>
                  <button className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                    <MessageCircle className="h-4 w-4 text-white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
