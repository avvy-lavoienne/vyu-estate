import type { Metadata } from "next"
import OurJourney from "@/components/about/OurJourney"
import OurValues from "@/components/about/OurValues"
import OurAchievements from "@/components/about/OurAchievements"
import NavigatingExperience from "@/components/about/NavigatingExperience"
import TeamSection from "@/components/about/TeamSection"
import ValuedClients from "@/components/about/ValuedClients"
import CTA from "@/components/CTA"

export const metadata: Metadata = {
  title: "About Us - Estatein",
  description: "Learn about Estatein's journey, values, and team dedicated to helping you find your dream property.",
}

export default function AboutPage() {
  return (
    <div className="bg-gray-900 pt-20">
      <OurJourney />
      <OurValues />
      <OurAchievements />
      <NavigatingExperience />
      <TeamSection />
      <ValuedClients />
      <CTA />
    </div>
  )
}
