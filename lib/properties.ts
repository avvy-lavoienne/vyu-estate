export interface Property {
  id: string
  title: string
  location: string
  description: string
  price: string
  image: string
  units: number
  type: string
  status: string
  features: string[]
  gallery: string[]
  specifications: {
    landArea: string
    buildingArea: string
    bedrooms: number
    bathrooms: number
    carport: number
    facilities: string[]
  }
  pricing: {
    note: string
    basePrice: string
    additionalCosts: Array<{
      name: string
      amount: string
      description: string
    }>
    monthlyFees: Array<{
      name: string
      amount: string
      description: string
    }>
    totalEstimate: string
    monthlyTotal: string
  }
}

const properties: Property[] = [
  {
    id: "1",
    title: "Griya Mutiara Residence",
    location: "Kabupaten Garut, West Java",
    description:
      "A premium residential community featuring modern homes with traditional Indonesian architectural elements, located in the heart of Garut Regency.",
    price: "Starting from IDR 850M",
    image: "/placeholder.svg?height=400&width=600",
    units: 120,
    type: "Residential Community",
    status: "Available",
    features: [
      "Strategic location in Garut area",
      "Modern Indonesian architectural design",
      "Integrated community facilities",
      "24/7 security system",
      "Green open spaces and parks",
      "Close to schools and shopping centers",
    ],
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    specifications: {
      landArea: "72-120 sqm",
      buildingArea: "45-80 sqm",
      bedrooms: 3,
      bathrooms: 2,
      carport: 1,
      facilities: [
        "Community Center",
        "Children's Playground",
        "Jogging Track",
        "Security Post",
        "Mosque",
        "Commercial Area",
      ],
    },
    pricing: {
      note: "Prices may vary based on unit type and location within the development. Contact us for the latest pricing information.",
      basePrice: "IDR 850,000,000",
      additionalCosts: [
        {
          name: "Booking Fee",
          amount: "IDR 5,000,000",
          description: "Initial booking fee to secure your unit",
        },
        {
          name: "Legal & Administrative",
          amount: "IDR 15,000,000",
          description: "Legal documentation and administrative costs",
        },
        {
          name: "Infrastructure Development",
          amount: "IDR 25,000,000",
          description: "Community infrastructure and utilities",
        },
      ],
      monthlyFees: [
        {
          name: "Security & Maintenance",
          amount: "IDR 150,000",
          description: "Monthly community security and maintenance fee",
        },
      ],
      totalEstimate: "IDR 895,000,000",
      monthlyTotal: "IDR 150,000",
    },
  },
  {
    id: "2",
    title: "Vyu Gardens Estate",
    location: "Kabupaten Tasikmalaya, West Java",
    description:
      "Sustainable housing development with eco-friendly features and integrated green spaces, designed for modern families who value environmental consciousness.",
    price: "Starting from IDR 650M",
    image: "/placeholder.svg?height=400&width=600",
    units: 80,
    type: "Eco-Friendly Housing",
    status: "Pre-Launch",
    features: [
      "Eco-friendly building materials",
      "Solar panel ready infrastructure",
      "Rainwater harvesting system",
      "Organic waste management",
      "Native plant landscaping",
      "Energy-efficient lighting",
    ],
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    specifications: {
      landArea: "60-100 sqm",
      buildingArea: "40-70 sqm",
      bedrooms: 2,
      bathrooms: 2,
      carport: 1,
      facilities: [
        "Eco-Learning Center",
        "Organic Garden",
        "Solar Charging Station",
        "Recycling Center",
        "Nature Trail",
        "Community Kitchen",
      ],
    },
    pricing: {
      note: "Pre-launch pricing with special early bird discounts available. Final pricing subject to change.",
      basePrice: "IDR 650,000,000",
      additionalCosts: [
        {
          name: "Booking Fee",
          amount: "IDR 3,000,000",
          description: "Early bird booking fee",
        },
        {
          name: "Green Technology Package",
          amount: "IDR 20,000,000",
          description: "Solar panels and eco-friendly systems",
        },
      ],
      monthlyFees: [
        {
          name: "Eco-Maintenance",
          amount: "IDR 100,000",
          description: "Sustainable community maintenance",
        },
      ],
      totalEstimate: "IDR 673,000,000",
      monthlyTotal: "IDR 100,000",
    },
  },
  {
    id: "3",
    title: "Heritage Hills",
    location: "Kabupaten Bandung, West Java",
    description:
      "Luxury hillside residences offering panoramic views and premium amenities for discerning families seeking an elevated lifestyle.",
    price: "Starting from IDR 1.2B",
    image: "/placeholder.svg?height=400&width=600",
    units: 45,
    type: "Luxury Villas",
    status: "Coming Soon",
    features: [
      "Panoramic mountain and valley views",
      "Premium architectural finishes",
      "Private swimming pools",
      "Smart home technology",
      "Concierge services",
      "Exclusive club facilities",
    ],
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    specifications: {
      landArea: "200-500 sqm",
      buildingArea: "150-300 sqm",
      bedrooms: 4,
      bathrooms: 3,
      carport: 2,
      facilities: [
        "Private Club House",
        "Infinity Pool",
        "Tennis Court",
        "Spa & Wellness Center",
        "Fine Dining Restaurant",
        "Helipad",
      ],
    },
    pricing: {
      note: "Luxury pricing with flexible payment terms available. Contact our sales team for detailed information.",
      basePrice: "IDR 1,200,000,000",
      additionalCosts: [
        {
          name: "Luxury Package",
          amount: "IDR 100,000,000",
          description: "Premium finishes and smart home features",
        },
        {
          name: "Club Membership",
          amount: "IDR 50,000,000",
          description: "Lifetime club membership and facilities access",
        },
      ],
      monthlyFees: [
        {
          name: "Premium Services",
          amount: "IDR 500,000",
          description: "Concierge, security, and premium maintenance",
        },
      ],
      totalEstimate: "IDR 1,350,000,000",
      monthlyTotal: "IDR 500,000",
    },
  },
]

export function getPropertyById(id: string): Property | undefined {
  return properties.find((property) => property.id === id)
}

export function getAllProperties(): Property[] {
  return properties
}
