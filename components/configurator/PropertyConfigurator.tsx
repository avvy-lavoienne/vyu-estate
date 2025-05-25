"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Home, Palette, Wrench, Leaf, Calculator, Check, Plus, Download, Share } from "lucide-react"
import AnimatedSection from "@/components/AnimatedSection"
import MagneticButton from "@/components/MagneticButton"

interface ConfigOption {
  id: string
  name: string
  price: number
  description: string
  image?: string
  category: string
}

interface Configuration {
  houseType: string
  bedrooms: number
  bathrooms: number
  floorPlan: string
  exterior: string
  interior: string
  upgrades: string[]
  sustainability: string[]
}

const houseTypes = [
  { id: "type-36", name: "Type 36", basePrice: 650000000, area: "36 sqm", bedrooms: 2, bathrooms: 1 },
  { id: "type-45", name: "Type 45", basePrice: 750000000, area: "45 sqm", bedrooms: 2, bathrooms: 1 },
  { id: "type-60", name: "Type 60", basePrice: 850000000, area: "60 sqm", bedrooms: 3, bathrooms: 2 },
  { id: "type-72", name: "Type 72", basePrice: 950000000, area: "72 sqm", bedrooms: 3, bathrooms: 2 },
]

const configOptions: ConfigOption[] = [
  // Floor Plans
  {
    id: "open-concept",
    name: "Open Concept",
    price: 15000000,
    description: "Spacious open living area",
    category: "floorPlan",
  },
  {
    id: "traditional",
    name: "Traditional Layout",
    price: 0,
    description: "Classic room separation",
    category: "floorPlan",
  },
  {
    id: "modern-split",
    name: "Modern Split Level",
    price: 25000000,
    description: "Contemporary multi-level design",
    category: "floorPlan",
  },

  // Exterior Options
  {
    id: "minimalist",
    name: "Minimalist Modern",
    price: 0,
    description: "Clean lines and simple elegance",
    category: "exterior",
  },
  {
    id: "tropical",
    name: "Tropical Contemporary",
    price: 20000000,
    description: "Indonesian-inspired design",
    category: "exterior",
  },
  {
    id: "classic",
    name: "Classic Colonial",
    price: 30000000,
    description: "Timeless colonial architecture",
    category: "exterior",
  },

  // Interior Packages
  { id: "basic", name: "Essential Package", price: 0, description: "Quality basic finishes", category: "interior" },
  {
    id: "premium",
    name: "Premium Package",
    price: 50000000,
    description: "High-end materials and finishes",
    category: "interior",
  },
  {
    id: "luxury",
    name: "Luxury Package",
    price: 100000000,
    description: "Top-tier luxury finishes",
    category: "interior",
  },

  // Upgrades
  {
    id: "smart-home",
    name: "Smart Home System",
    price: 35000000,
    description: "Automated lighting, security, and climate control",
    category: "upgrades",
  },
  {
    id: "premium-kitchen",
    name: "Premium Kitchen",
    price: 45000000,
    description: "High-end appliances and custom cabinetry",
    category: "upgrades",
  },
  {
    id: "master-suite",
    name: "Master Suite Upgrade",
    price: 25000000,
    description: "Walk-in closet and luxury bathroom",
    category: "upgrades",
  },
  {
    id: "carport-upgrade",
    name: "Double Carport",
    price: 20000000,
    description: "Covered parking for two vehicles",
    category: "upgrades",
  },

  // Sustainability
  {
    id: "solar-panels",
    name: "Solar Panel System",
    price: 40000000,
    description: "Renewable energy generation",
    category: "sustainability",
  },
  {
    id: "rainwater",
    name: "Rainwater Harvesting",
    price: 15000000,
    description: "Water conservation system",
    category: "sustainability",
  },
  {
    id: "energy-efficient",
    name: "Energy Efficient Windows",
    price: 18000000,
    description: "Double-glazed energy saving windows",
    category: "sustainability",
  },
]

export default function PropertyConfigurator() {
  const [configuration, setConfiguration] = useState<Configuration>({
    houseType: "type-60",
    bedrooms: 3,
    bathrooms: 2,
    floorPlan: "traditional",
    exterior: "minimalist",
    interior: "basic",
    upgrades: [],
    sustainability: [],
  })

  const [activeTab, setActiveTab] = useState("house-type")

  const selectedHouseType = houseTypes.find((type) => type.id === configuration.houseType)

  const calculateTotalPrice = () => {
    let total = selectedHouseType?.basePrice || 0

    // Add floor plan cost
    const floorPlan = configOptions.find((opt) => opt.id === configuration.floorPlan)
    if (floorPlan) total += floorPlan.price

    // Add exterior cost
    const exterior = configOptions.find((opt) => opt.id === configuration.exterior)
    if (exterior) total += exterior.price

    // Add interior cost
    const interior = configOptions.find((opt) => opt.id === configuration.interior)
    if (interior) total += interior.price

    // Add upgrades cost
    configuration.upgrades.forEach((upgradeId) => {
      const upgrade = configOptions.find((opt) => opt.id === upgradeId)
      if (upgrade) total += upgrade.price
    })

    // Add sustainability cost
    configuration.sustainability.forEach((sustainabilityId) => {
      const sustainability = configOptions.find((opt) => opt.id === sustainabilityId)
      if (sustainability) total += sustainability.price
    })

    return total
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price)
  }

  const toggleUpgrade = (upgradeId: string, category: "upgrades" | "sustainability") => {
    setConfiguration((prev) => ({
      ...prev,
      [category]: prev[category].includes(upgradeId)
        ? prev[category].filter((id) => id !== upgradeId)
        : [...prev[category], upgradeId],
    }))
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Design Your Dream Home</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Customize every aspect of your future home with our interactive configurator. See real-time pricing and
              create the perfect home for your family.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Configuration Panel */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="house-type" className="flex items-center gap-2">
                    <Home className="h-4 w-4" />
                    <span className="hidden sm:inline">Type</span>
                  </TabsTrigger>
                  <TabsTrigger value="layout" className="flex items-center gap-2">
                    <Wrench className="h-4 w-4" />
                    <span className="hidden sm:inline">Layout</span>
                  </TabsTrigger>
                  <TabsTrigger value="design" className="flex items-center gap-2">
                    <Palette className="h-4 w-4" />
                    <span className="hidden sm:inline">Design</span>
                  </TabsTrigger>
                  <TabsTrigger value="upgrades" className="flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    <span className="hidden sm:inline">Upgrades</span>
                  </TabsTrigger>
                  <TabsTrigger value="sustainability" className="flex items-center gap-2">
                    <Leaf className="h-4 w-4" />
                    <span className="hidden sm:inline">Green</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="house-type" className="mt-6">
                  <h3 className="text-xl font-semibold mb-4">Choose Your House Type</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {houseTypes.map((type) => (
                      <motion.div
                        key={type.id}
                        className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                          configuration.houseType === type.id
                            ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20"
                            : "border-border hover:border-purple-300"
                        }`}
                        onClick={() =>
                          setConfiguration((prev) => ({
                            ...prev,
                            houseType: type.id,
                            bedrooms: type.bedrooms,
                            bathrooms: type.bathrooms,
                          }))
                        }
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold">{type.name}</h4>
                          {configuration.houseType === type.id && <Check className="h-5 w-5 text-purple-600" />}
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{type.area}</p>
                        <p className="text-sm text-muted-foreground mb-2">
                          {type.bedrooms} BR • {type.bathrooms} BA
                        </p>
                        <p className="font-semibold text-purple-600">{formatPrice(type.basePrice)}</p>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="layout" className="mt-6">
                  <h3 className="text-xl font-semibold mb-4">Floor Plan & Layout</h3>
                  <div className="space-y-4">
                    {configOptions
                      .filter((opt) => opt.category === "floorPlan")
                      .map((option) => (
                        <motion.div
                          key={option.id}
                          className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                            configuration.floorPlan === option.id
                              ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20"
                              : "border-border hover:border-purple-300"
                          }`}
                          onClick={() => setConfiguration((prev) => ({ ...prev, floorPlan: option.id }))}
                          whileHover={{ scale: 1.01 }}
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-semibold">{option.name}</h4>
                              <p className="text-sm text-muted-foreground">{option.description}</p>
                            </div>
                            <div className="text-right">
                              {configuration.floorPlan === option.id && (
                                <Check className="h-5 w-5 text-purple-600 mb-1" />
                              )}
                              <p className="font-semibold text-purple-600">
                                {option.price > 0 ? `+${formatPrice(option.price)}` : "Included"}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                  </div>
                </TabsContent>

                <TabsContent value="design" className="mt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Exterior Style</h3>
                      <div className="space-y-4">
                        {configOptions
                          .filter((opt) => opt.category === "exterior")
                          .map((option) => (
                            <motion.div
                              key={option.id}
                              className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                                configuration.exterior === option.id
                                  ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20"
                                  : "border-border hover:border-purple-300"
                              }`}
                              onClick={() => setConfiguration((prev) => ({ ...prev, exterior: option.id }))}
                              whileHover={{ scale: 1.01 }}
                            >
                              <div className="flex justify-between items-start">
                                <div>
                                  <h4 className="font-semibold">{option.name}</h4>
                                  <p className="text-sm text-muted-foreground">{option.description}</p>
                                </div>
                                <div className="text-right">
                                  {configuration.exterior === option.id && (
                                    <Check className="h-5 w-5 text-purple-600 mb-1" />
                                  )}
                                  <p className="font-semibold text-purple-600">
                                    {option.price > 0 ? `+${formatPrice(option.price)}` : "Included"}
                                  </p>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4">Interior Package</h3>
                      <div className="space-y-4">
                        {configOptions
                          .filter((opt) => opt.category === "interior")
                          .map((option) => (
                            <motion.div
                              key={option.id}
                              className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                                configuration.interior === option.id
                                  ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20"
                                  : "border-border hover:border-purple-300"
                              }`}
                              onClick={() => setConfiguration((prev) => ({ ...prev, interior: option.id }))}
                              whileHover={{ scale: 1.01 }}
                            >
                              <div className="flex justify-between items-start">
                                <div>
                                  <h4 className="font-semibold">{option.name}</h4>
                                  <p className="text-sm text-muted-foreground">{option.description}</p>
                                </div>
                                <div className="text-right">
                                  {configuration.interior === option.id && (
                                    <Check className="h-5 w-5 text-purple-600 mb-1" />
                                  )}
                                  <p className="font-semibold text-purple-600">
                                    {option.price > 0 ? `+${formatPrice(option.price)}` : "Included"}
                                  </p>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="upgrades" className="mt-6">
                  <h3 className="text-xl font-semibold mb-4">Premium Upgrades</h3>
                  <div className="space-y-4">
                    {configOptions
                      .filter((opt) => opt.category === "upgrades")
                      .map((option) => (
                        <motion.div
                          key={option.id}
                          className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                            configuration.upgrades.includes(option.id)
                              ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20"
                              : "border-border hover:border-purple-300"
                          }`}
                          onClick={() => toggleUpgrade(option.id, "upgrades")}
                          whileHover={{ scale: 1.01 }}
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-semibold">{option.name}</h4>
                              <p className="text-sm text-muted-foreground">{option.description}</p>
                            </div>
                            <div className="text-right">
                              {configuration.upgrades.includes(option.id) ? (
                                <Check className="h-5 w-5 text-purple-600 mb-1" />
                              ) : (
                                <Plus className="h-5 w-5 text-muted-foreground mb-1" />
                              )}
                              <p className="font-semibold text-purple-600">+{formatPrice(option.price)}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                  </div>
                </TabsContent>

                <TabsContent value="sustainability" className="mt-6">
                  <h3 className="text-xl font-semibold mb-4">Sustainable Features</h3>
                  <div className="space-y-4">
                    {configOptions
                      .filter((opt) => opt.category === "sustainability")
                      .map((option) => (
                        <motion.div
                          key={option.id}
                          className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                            configuration.sustainability.includes(option.id)
                              ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                              : "border-border hover:border-green-300"
                          }`}
                          onClick={() => toggleUpgrade(option.id, "sustainability")}
                          whileHover={{ scale: 1.01 }}
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-semibold">{option.name}</h4>
                              <p className="text-sm text-muted-foreground">{option.description}</p>
                            </div>
                            <div className="text-right">
                              {configuration.sustainability.includes(option.id) ? (
                                <Check className="h-5 w-5 text-green-600 mb-1" />
                              ) : (
                                <Plus className="h-5 w-5 text-muted-foreground mb-1" />
                              )}
                              <p className="font-semibold text-green-600">+{formatPrice(option.price)}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          </div>

          {/* Summary Panel */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              <div className="flex items-center gap-2 mb-4">
                <Calculator className="h-5 w-5 text-purple-600" />
                <h3 className="text-xl font-semibold">Configuration Summary</h3>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-medium text-sm text-muted-foreground">House Type</h4>
                  <p className="font-semibold">{selectedHouseType?.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {selectedHouseType?.area} • {configuration.bedrooms} BR • {configuration.bathrooms} BA
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-sm text-muted-foreground">Selected Features</h4>
                  <div className="space-y-1">
                    {configuration.upgrades.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {configuration.upgrades.map((upgradeId) => {
                          const upgrade = configOptions.find((opt) => opt.id === upgradeId)
                          return upgrade ? (
                            <Badge key={upgradeId} variant="secondary" className="text-xs">
                              {upgrade.name}
                            </Badge>
                          ) : null
                        })}
                      </div>
                    )}
                    {configuration.sustainability.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {configuration.sustainability.map((sustainabilityId) => {
                          const sustainability = configOptions.find((opt) => opt.id === sustainabilityId)
                          return sustainability ? (
                            <Badge
                              key={sustainabilityId}
                              variant="outline"
                              className="text-xs border-green-500 text-green-600"
                            >
                              {sustainability.name}
                            </Badge>
                          ) : null
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">Base Price</span>
                  <span className="font-medium">{formatPrice(selectedHouseType?.basePrice || 0)}</span>
                </div>

                {/* Show individual upgrade costs */}
                {[...configuration.upgrades, ...configuration.sustainability].map((upgradeId) => {
                  const upgrade = configOptions.find((opt) => opt.id === upgradeId)
                  return upgrade && upgrade.price > 0 ? (
                    <div key={upgradeId} className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">{upgrade.name}</span>
                      <span className="font-medium">+{formatPrice(upgrade.price)}</span>
                    </div>
                  ) : null
                })}

                <div className="border-t pt-2 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Total Price</span>
                    <span className="text-xl font-bold text-purple-600">{formatPrice(calculateTotalPrice())}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <MagneticButton>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Request Quote</Button>
                </MagneticButton>

                <div className="grid grid-cols-2 gap-2">
                  <MagneticButton>
                    <Button variant="outline" size="sm" className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </MagneticButton>
                  <MagneticButton>
                    <Button variant="outline" size="sm" className="w-full">
                      <Share className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </MagneticButton>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
