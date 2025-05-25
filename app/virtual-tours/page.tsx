import type { Metadata } from "next"
import VirtualTourGallery from "@/components/virtual-tour/VirtualTourGallery"

export const metadata: Metadata = {
  title: "Virtual Tours - Vyu-Estate",
  description:
    "Experience Vyu-Estate properties with immersive 360° virtual tours, interactive walkthroughs, and stunning drone footage. Explore every detail from home.",
  keywords: "virtual tours, 360 tours, property walkthrough, drone footage, Indonesia real estate, virtual reality",
}

export default function VirtualToursPage() {
  return (
    <div className="bg-background pt-20">
      <VirtualTourGallery />
    </div>
  )
}
