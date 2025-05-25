"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  X,
  ZoomIn,
  Share,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Property } from "@/lib/properties";

interface PropertyGalleryProps {
  property: Property;
}

export default function PropertyGallery({ property }: PropertyGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxImage(index);
    setIsLightboxOpen(true);
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % property.gallery.length);
  };

  const prevImage = () => {
    setSelectedImage(
      (prev) => (prev - 1 + property.gallery.length) % property.gallery.length
    );
  };

  const nextLightboxImage = () => {
    setLightboxImage((prev) => (prev + 1) % property.gallery.length);
  };

  const prevLightboxImage = () => {
    setLightboxImage(
      (prev) => (prev - 1 + property.gallery.length) % property.gallery.length
    );
  };

  return (
    <section className="py-8 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Property Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {property.title}
              </h1>
              <p className="text-muted-foreground">{property.location}</p>
            </div>
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <Button variant="outline" size="sm">
                <Heart className="h-4 w-4 mr-2" />
                Save
              </Button>
              <Button variant="outline" size="sm">
                <Share className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
            {property.price}
          </div>
        </div>

        {/* Main Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8">
          {/* Main Image */}
          <div className="lg:col-span-3">
            <motion.div
              className="relative aspect-[16/10] rounded-lg overflow-hidden cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onClick={() => openLightbox(selectedImage)}
            >
              <Image
                src={property.gallery[selectedImage] || "/placeholder.svg"}
                alt={`${property.title} - Image ${selectedImage + 1}`}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="h-8 w-8 text-white" />
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                {selectedImage + 1} / {property.gallery.length}
              </div>
            </motion.div>
          </div>

          {/* Thumbnail Grid */}
          <div className="lg:col-span-1">
            <div className="grid grid-cols-4 lg:grid-cols-1 gap-2">
              {property.gallery.slice(0, 4).map((image, index) => (
                <motion.div
                  key={index}
                  className={`relative aspect-square rounded-lg overflow-hidden cursor-pointer ${
                    selectedImage === index ? "ring-2 ring-purple-600" : ""
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${property.title} - Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                  {index === 3 && property.gallery.length > 4 && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <span className="text-white font-semibold">
                        +{property.gallery.length - 4}
                      </span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Property Status Badge */}
        <div className="flex items-center space-x-4 mb-6">
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              property.status === "Available"
                ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                : property.status === "Pre-Launch"
                ? "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
                : "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400"
            }`}
          >
            {property.status}
          </span>
          <span className="text-muted-foreground text-sm">{property.type}</span>
          <span className="text-muted-foreground text-sm">
            {property.units} Units Available
          </span>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {isLightboxOpen && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsLightboxOpen(false)}
            >
              <motion.div
                className="relative max-w-6xl max-h-[90vh] w-full h-full"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={property.gallery[lightboxImage] || "/placeholder.svg"}
                  alt={`${property.title} - Image ${lightboxImage + 1}`}
                  fill
                  className="object-contain"
                />

                {/* Close Button */}
                <button
                  onClick={() => setIsLightboxOpen(false)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Navigation */}
                <button
                  onClick={prevLightboxImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextLightboxImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                {/* Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full">
                  {lightboxImage + 1} / {property.gallery.length}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
