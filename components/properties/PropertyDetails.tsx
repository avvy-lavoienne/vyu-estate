"use client";

import { motion } from "framer-motion";
import { Home, Square, Bed, Bath, Car, MapPin, Users } from "lucide-react";
import type { Property } from "@/lib/properties";

interface PropertyDetailsProps {
  property: Property;
}

export default function PropertyDetails({ property }: PropertyDetailsProps) {
  const specifications = [
    {
      icon: Square,
      label: "Land Area",
      value: property.specifications.landArea,
    },
    {
      icon: Home,
      label: "Building Area",
      value: property.specifications.buildingArea,
    },
    {
      icon: Bed,
      label: "Bedrooms",
      value: `${property.specifications.bedrooms} Rooms`,
    },
    {
      icon: Bath,
      label: "Bathrooms",
      value: `${property.specifications.bathrooms} Rooms`,
    },
    {
      icon: Car,
      label: "Carport",
      value: `${property.specifications.carport} Space`,
    },
    { icon: Users, label: "Units", value: `${property.units} Available` },
  ];

  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Property Description
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {property.description}
              </p>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Key Features & Amenities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {property.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-card rounded-lg border border-border"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-2 h-2 bg-purple-600 rounded-full flex-shrink-0" />
                    <span className="text-foreground text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Community Facilities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Community Facilities
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.specifications.facilities.map((facility, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-4 bg-card rounded-lg border border-border hover:border-purple-500 transition-colors"
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Home className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <span className="text-foreground text-sm font-medium">
                      {facility}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Property Specifications */}
              <motion.div
                className="bg-card rounded-lg p-6 border border-border"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Property Specifications
                </h3>
                <div className="space-y-4">
                  {specifications.map((spec, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center justify-between py-2 border-b border-border last:border-b-0"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="flex items-center space-x-3">
                        <spec.icon className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                        <span className="text-muted-foreground text-sm">
                          {spec.label}
                        </span>
                      </div>
                      <span className="text-foreground font-medium text-sm">
                        {spec.value}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Location Info */}
              <motion.div
                className="bg-card rounded-lg p-6 border border-border"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Location
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-purple-600 dark:text-purple-400 mt-0.5" />
                    <div>
                      <p className="text-foreground font-medium">
                        {property.title}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {property.location}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                className="bg-card rounded-lg p-6 border border-border"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Quick Stats
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      {property.units}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      Total Units
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      {property.specifications.bedrooms}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      Bedrooms
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      {property.specifications.bathrooms}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      Bathrooms
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      {property.status === "Available" ? "✓" : "⏳"}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {property.status}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
