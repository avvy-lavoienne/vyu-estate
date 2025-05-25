"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Play,
  Pause,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Maximize,
  Info,
  MapPin,
  Eye,
  Camera,
  Navigation,
  Home,
  X,
} from "lucide-react"
import AnimatedSection from "@/components/AnimatedSection"
import StaggeredGrid from "@/components/StaggeredGrid"
import FloatingCard from "@/components/FloatingCard"

interface VirtualTour {
  id: string
  title: string
  property: string
  location: string
  thumbnail: string
  duration: string
  rooms: number
  type: "360" | "walkthrough" | "drone"
  featured: boolean
  scenes: VirtualScene[]
}

interface VirtualScene {
  id: string
  name: string
  image: string
  hotspots: Hotspot[]
  description: string
}

interface Hotspot {
  id: string
  x: number
  y: number
  type: "info" | "navigation" | "feature"
  title: string
  description: string
  targetScene?: string
}

const virtualTours: VirtualTour[] = [
  {
    id: "griya-mutiara-tour",
    title: "Griya Mutiara Residence - Type 60",
    property: "Griya Mutiara Residence",
    location: "Kabupaten Garut, West Java",
    thumbnail: "/placeholder.svg?height=300&width=400",
    duration: "8 min",
    rooms: 6,
    type: "360",
    featured: true,
    scenes: [
      {
        id: "living-room",
        name: "Living Room",
        image: "/placeholder.svg?height=600&width=800",
        description: "Spacious open-concept living area with modern Indonesian design elements",
        hotspots: [
          {
            id: "sofa-info",
            x: 30,
            y: 60,
            type: "info",
            title: "Premium Furniture Package",
            description: "High-quality Indonesian teak furniture with modern upholstery",
          },
          {
            id: "kitchen-nav",
            x: 80,
            y: 40,
            type: "navigation",
            title: "Go to Kitchen",
            description: "Explore the modern kitchen area",
            targetScene: "kitchen",
          },
          {
            id: "lighting-feature",
            x: 50,
            y: 20,
            type: "feature",
            title: "Smart Lighting System",
            description: "Voice-controlled LED lighting with mood settings",
          },
        ],
      },
      {
        id: "kitchen",
        name: "Kitchen",
        image: "/placeholder.svg?height=600&width=800",
        description: "Modern kitchen with premium appliances and custom cabinetry",
        hotspots: [
          {
            id: "appliances-info",
            x: 60,
            y: 50,
            type: "info",
            title: "Premium Appliances",
            description: "Energy-efficient appliances from leading brands",
          },
          {
            id: "living-nav",
            x: 20,
            y: 70,
            type: "navigation",
            title: "Back to Living Room",
            description: "Return to the living area",
            targetScene: "living-room",
          },
          {
            id: "master-nav",
            x: 90,
            y: 30,
            type: "navigation",
            title: "Master Bedroom",
            description: "Visit the master bedroom suite",
            targetScene: "master-bedroom",
          },
        ],
      },
      {
        id: "master-bedroom",
        name: "Master Bedroom",
        image: "/placeholder.svg?height=600&width=800",
        description: "Luxurious master bedroom with en-suite bathroom and walk-in closet",
        hotspots: [
          {
            id: "closet-feature",
            x: 25,
            y: 45,
            type: "feature",
            title: "Walk-in Closet",
            description: "Spacious walk-in closet with custom storage solutions",
          },
          {
            id: "bathroom-nav",
            x: 75,
            y: 60,
            type: "navigation",
            title: "En-suite Bathroom",
            description: "Explore the master bathroom",
            targetScene: "bathroom",
          },
        ],
      },
      {
        id: "bathroom",
        name: "Master Bathroom",
        image: "/placeholder.svg?height=600&width=800",
        description: "Elegant bathroom with premium fixtures and natural lighting",
        hotspots: [
          {
            id: "fixtures-info",
            x: 40,
            y: 55,
            type: "info",
            title: "Premium Fixtures",
            description: "High-end bathroom fixtures with water-saving technology",
          },
          {
            id: "bedroom-nav",
            x: 80,
            y: 80,
            type: "navigation",
            title: "Back to Bedroom",
            description: "Return to master bedroom",
            targetScene: "master-bedroom",
          },
        ],
      },
    ],
  },
  {
    id: "vyu-gardens-tour",
    title: "Vyu Gardens Estate - Eco Home",
    property: "Vyu Gardens Estate",
    location: "Kabupaten Tasikmalaya, West Java",
    thumbnail: "/placeholder.svg?height=300&width=400",
    duration: "6 min",
    rooms: 5,
    type: "walkthrough",
    featured: true,
    scenes: [
      {
        id: "entrance",
        name: "Main Entrance",
        image: "/placeholder.svg?height=600&width=800",
        description: "Welcoming entrance with sustainable design features",
        hotspots: [
          {
            id: "solar-feature",
            x: 50,
            y: 25,
            type: "feature",
            title: "Solar Panel System",
            description: "Integrated solar panels for renewable energy generation",
          },
          {
            id: "living-nav",
            x: 60,
            y: 70,
            type: "navigation",
            title: "Enter Living Area",
            description: "Step into the eco-friendly living space",
            targetScene: "eco-living",
          },
        ],
      },
      {
        id: "eco-living",
        name: "Eco Living Room",
        image: "/placeholder.svg?height=600&width=800",
        description: "Sustainable living space with natural materials and energy-efficient features",
        hotspots: [
          {
            id: "materials-info",
            x: 35,
            y: 65,
            type: "info",
            title: "Sustainable Materials",
            description: "Bamboo flooring and recycled wood furniture",
          },
          {
            id: "garden-nav",
            x: 80,
            y: 50,
            type: "navigation",
            title: "Organic Garden",
            description: "Visit the community organic garden",
            targetScene: "garden",
          },
        ],
      },
      {
        id: "garden",
        name: "Organic Garden",
        image: "/placeholder.svg?height=600&width=800",
        description: "Community organic garden with rainwater harvesting system",
        hotspots: [
          {
            id: "rainwater-feature",
            x: 70,
            y: 30,
            type: "feature",
            title: "Rainwater Harvesting",
            description: "Sustainable water collection and filtration system",
          },
          {
            id: "living-nav",
            x: 20,
            y: 80,
            type: "navigation",
            title: "Back to Living Room",
            description: "Return to the living area",
            targetScene: "eco-living",
          },
        ],
      },
    ],
  },
  {
    id: "heritage-hills-tour",
    title: "Heritage Hills - Luxury Villa",
    property: "Heritage Hills",
    location: "Kabupaten Bandung, West Java",
    thumbnail: "/placeholder.svg?height=300&width=400",
    duration: "12 min",
    rooms: 8,
    type: "drone",
    featured: false,
    scenes: [
      {
        id: "exterior",
        name: "Villa Exterior",
        image: "/placeholder.svg?height=600&width=800",
        description: "Stunning hillside villa with panoramic mountain views",
        hotspots: [
          {
            id: "pool-feature",
            x: 60,
            y: 75,
            type: "feature",
            title: "Infinity Pool",
            description: "Private infinity pool overlooking the valley",
          },
          {
            id: "interior-nav",
            x: 40,
            y: 50,
            type: "navigation",
            title: "Enter Villa",
            description: "Step inside the luxury villa",
            targetScene: "grand-living",
          },
        ],
      },
      {
        id: "grand-living",
        name: "Grand Living Room",
        image: "/placeholder.svg?height=600&width=800",
        description: "Expansive living area with floor-to-ceiling windows and mountain views",
        hotspots: [
          {
            id: "fireplace-feature",
            x: 30,
            y: 60,
            type: "feature",
            title: "Stone Fireplace",
            description: "Natural stone fireplace with smart controls",
          },
          {
            id: "terrace-nav",
            x: 80,
            y: 40,
            type: "navigation",
            title: "Outdoor Terrace",
            description: "Step onto the panoramic terrace",
            targetScene: "terrace",
          },
        ],
      },
      {
        id: "terrace",
        name: "Panoramic Terrace",
        image: "/placeholder.svg?height=600&width=800",
        description: "Outdoor terrace with breathtaking 360-degree mountain views",
        hotspots: [
          {
            id: "view-info",
            x: 50,
            y: 30,
            type: "info",
            title: "Mountain Views",
            description: "Unobstructed views of Garut's beautiful mountain ranges",
          },
          {
            id: "living-nav",
            x: 20,
            y: 70,
            type: "navigation",
            title: "Back Inside",
            description: "Return to the grand living room",
            targetScene: "grand-living",
          },
        ],
      },
    ],
  },
]

export default function VirtualTourGallery() {
  const [selectedTour, setSelectedTour] = useState<VirtualTour | null>(null)
  const [currentScene, setCurrentScene] = useState<VirtualScene | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null)
  const [filter, setFilter] = useState<"all" | "360" | "walkthrough" | "drone">("all")
  const [zoom, setZoom] = useState(1)
  const [rotation, setRotation] = useState(0)
  const imageRef = useRef<HTMLDivElement>(null)

  const filteredTours = virtualTours.filter((tour) => filter === "all" || tour.type === filter)
  const featuredTours = virtualTours.filter((tour) => tour.featured)

  const openTour = (tour: VirtualTour) => {
    setSelectedTour(tour)
    setCurrentScene(tour.scenes[0])
    setZoom(1)
    setRotation(0)
    setSelectedHotspot(null)
  }

  const closeTour = () => {
    setSelectedTour(null)
    setCurrentScene(null)
    setIsPlaying(false)
    setSelectedHotspot(null)
  }

  const navigateToScene = (sceneId: string) => {
    if (selectedTour) {
      const scene = selectedTour.scenes.find((s) => s.id === sceneId)
      if (scene) {
        setCurrentScene(scene)
        setSelectedHotspot(null)
      }
    }
  }

  const handleHotspotClick = (hotspot: Hotspot) => {
    if (hotspot.type === "navigation" && hotspot.targetScene) {
      navigateToScene(hotspot.targetScene)
    } else {
      setSelectedHotspot(hotspot)
    }
  }

  const resetView = () => {
    setZoom(1)
    setRotation(0)
  }

  const getTourTypeIcon = (type: string) => {
    switch (type) {
      case "360":
        return <Camera className="h-4 w-4" />
      case "walkthrough":
        return <Navigation className="h-4 w-4" />
      case "drone":
        return <Eye className="h-4 w-4" />
      default:
        return <Camera className="h-4 w-4" />
    }
  }

  const getTourTypeColor = (type: string) => {
    switch (type) {
      case "360":
        return "bg-blue-500"
      case "walkthrough":
        return "bg-green-500"
      case "drone":
        return "bg-purple-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Virtual Tour Gallery</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Experience our properties like never before with immersive 360° virtual tours, interactive walkthroughs,
              and stunning drone footage. Explore every detail from the comfort of your home.
            </p>
          </div>
        </AnimatedSection>

        {/* Featured Tours */}
        <AnimatedSection delay={0.2}>
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6">Featured Virtual Tours</h3>
            <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredTours.map((tour, index) => (
                <FloatingCard
                  key={tour.id}
                  className="bg-card rounded-lg overflow-hidden border border-border hover:border-purple-500 transition-colors group cursor-pointer"
                  hoverScale={1.03}
                  onClick={() => openTour(tour)}
                >
                  <div className="relative">
                    <img
                      src={tour.thumbnail || "/placeholder.svg"}
                      alt={tour.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Play className="h-12 w-12 text-white" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge className={`${getTourTypeColor(tour.type)} text-white`}>
                        <div className="flex items-center gap-1">
                          {getTourTypeIcon(tour.type)}
                          {tour.type.toUpperCase()}
                        </div>
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary">{tour.duration}</Badge>
                    </div>
                  </div>

                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-purple-600 transition-colors">
                      {tour.title}
                    </h4>
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      {tour.location}
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{tour.rooms} rooms</span>
                      <span className="text-purple-600 font-medium">Start Tour →</span>
                    </div>
                  </div>
                </FloatingCard>
              ))}
            </StaggeredGrid>
          </div>
        </AnimatedSection>

        {/* Filter Tabs */}
        <AnimatedSection delay={0.4}>
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {["all", "360", "walkthrough", "drone"].map((filterType) => (
                <Button
                  key={filterType}
                  variant={filter === filterType ? "default" : "outline"}
                  onClick={() => setFilter(filterType as any)}
                  className={filter === filterType ? "bg-purple-600 hover:bg-purple-700" : ""}
                >
                  {filterType === "all" ? "All Tours" : filterType.charAt(0).toUpperCase() + filterType.slice(1)}
                </Button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* All Tours Grid */}
        <AnimatedSection delay={0.6}>
          <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTours.map((tour) => (
              <FloatingCard
                key={tour.id}
                className="bg-card rounded-lg overflow-hidden border border-border hover:border-purple-500 transition-colors group cursor-pointer"
                hoverScale={1.02}
                onClick={() => openTour(tour)}
              >
                <div className="relative">
                  <img
                    src={tour.thumbnail || "/placeholder.svg"}
                    alt={tour.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute top-3 left-3">
                    <Badge className={`${getTourTypeColor(tour.type)} text-white text-xs`}>
                      <div className="flex items-center gap-1">
                        {getTourTypeIcon(tour.type)}
                        {tour.type.toUpperCase()}
                      </div>
                    </Badge>
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="text-xs">
                      {tour.duration}
                    </Badge>
                  </div>
                </div>

                <div className="p-4">
                  <h4 className="font-semibold text-foreground mb-1 group-hover:text-purple-600 transition-colors">
                    {tour.title}
                  </h4>
                  <div className="flex items-center text-xs text-muted-foreground mb-2">
                    <MapPin className="h-3 w-3 mr-1" />
                    {tour.location}
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{tour.rooms} rooms</span>
                    <span className="text-purple-600 font-medium">View Tour →</span>
                  </div>
                </div>
              </FloatingCard>
            ))}
          </StaggeredGrid>
        </AnimatedSection>

        {/* Virtual Tour Modal */}
        <AnimatePresence>
          {selectedTour && currentScene && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-background rounded-lg max-w-6xl w-full max-h-[90vh] overflow-hidden"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
              >
                {/* Tour Header */}
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{selectedTour.title}</h3>
                    <p className="text-sm text-muted-foreground">{currentScene.name}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={resetView}>
                      <RotateCcw className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => setZoom(Math.max(0.5, zoom - 0.1))}>
                      <ZoomOut className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => setZoom(Math.min(3, zoom + 0.1))}>
                      <ZoomIn className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" onClick={closeTour}>
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex">
                  {/* Main Tour View */}
                  <div className="flex-1 relative">
                    <div
                      ref={imageRef}
                      className="relative h-[60vh] overflow-hidden bg-gray-100 dark:bg-gray-800"
                      style={{
                        transform: `scale(${zoom}) rotate(${rotation}deg)`,
                        transition: "transform 0.3s ease",
                      }}
                    >
                      <img
                        src={currentScene.image || "/placeholder.svg"}
                        alt={currentScene.name}
                        className="w-full h-full object-cover"
                      />

                      {/* Interactive Hotspots */}
                      {currentScene.hotspots.map((hotspot) => (
                        <motion.button
                          key={hotspot.id}
                          className={`absolute w-8 h-8 rounded-full border-2 border-white shadow-lg flex items-center justify-center ${
                            hotspot.type === "info"
                              ? "bg-blue-500"
                              : hotspot.type === "navigation"
                                ? "bg-green-500"
                                : "bg-purple-500"
                          }`}
                          style={{
                            left: `${hotspot.x}%`,
                            top: `${hotspot.y}%`,
                            transform: "translate(-50%, -50%)",
                          }}
                          onClick={() => handleHotspotClick(hotspot)}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          animate={{
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }}
                        >
                          {hotspot.type === "info" && <Info className="h-4 w-4 text-white" />}
                          {hotspot.type === "navigation" && <Navigation className="h-4 w-4 text-white" />}
                          {hotspot.type === "feature" && <Home className="h-4 w-4 text-white" />}
                        </motion.button>
                      ))}
                    </div>

                    {/* Scene Description */}
                    <div className="p-4 bg-muted/30">
                      <p className="text-sm text-muted-foreground">{currentScene.description}</p>
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div className="w-80 border-l border-border bg-muted/30">
                    {/* Scene Navigation */}
                    <div className="p-4 border-b border-border">
                      <h4 className="font-semibold text-foreground mb-3">Tour Scenes</h4>
                      <div className="space-y-2">
                        {selectedTour.scenes.map((scene) => (
                          <button
                            key={scene.id}
                            className={`w-full text-left p-2 rounded-lg transition-colors ${
                              currentScene.id === scene.id
                                ? "bg-purple-600 text-white"
                                : "hover:bg-accent text-foreground"
                            }`}
                            onClick={() => setCurrentScene(scene)}
                          >
                            <div className="text-sm font-medium">{scene.name}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Hotspot Info */}
                    {selectedHotspot && (
                      <div className="p-4 border-b border-border">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-foreground">{selectedHotspot.title}</h4>
                          <Button variant="ghost" size="sm" onClick={() => setSelectedHotspot(null)}>
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                        <p className="text-sm text-muted-foreground">{selectedHotspot.description}</p>
                      </div>
                    )}

                    {/* Tour Controls */}
                    <div className="p-4">
                      <h4 className="font-semibold text-foreground mb-3">Tour Controls</h4>
                      <div className="space-y-2">
                        <Button
                          variant="outline"
                          className="w-full justify-start"
                          onClick={() => setIsPlaying(!isPlaying)}
                        >
                          {isPlaying ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                          {isPlaying ? "Pause Auto Tour" : "Start Auto Tour"}
                        </Button>
                        <Button variant="outline" className="w-full justify-start" onClick={resetView}>
                          <RotateCcw className="h-4 w-4 mr-2" />
                          Reset View
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <Maximize className="h-4 w-4 mr-2" />
                          Fullscreen
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
