"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import AnimatedSection from "@/components/AnimatedSection"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    inquiryType: "",
    howDidYouHear: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Let's Make it Happen</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ready to take the first step toward your dream housing project? Fill out the form below, and our real
              estate experts will work with you to find the perfect solution. Don't wait; let's embark on this exciting
              journey together.
            </p>
          </div>
        </AnimatedSection>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6 bg-card p-8 rounded-lg border border-border"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
              <label className="block text-foreground font-medium mb-2">First Name</label>
              <Input
                type="text"
                placeholder="Enter First Name"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="bg-background border-border text-foreground"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
              <label className="block text-foreground font-medium mb-2">Last Name</label>
              <Input
                type="text"
                placeholder="Enter Last Name"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="bg-background border-border text-foreground"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
              <label className="block text-foreground font-medium mb-2">Email</label>
              <Input
                type="email"
                placeholder="Enter your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-background border-border text-foreground"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
              <label className="block text-foreground font-medium mb-2">Phone</label>
              <Input
                type="tel"
                placeholder="Enter Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-background border-border text-foreground"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
              <label className="block text-foreground font-medium mb-2">Inquiry Type</label>
              <Select onValueChange={(value) => setFormData({ ...formData, inquiryType: value })}>
                <SelectTrigger className="bg-background border-border text-foreground">
                  <SelectValue placeholder="Select Inquiry Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="buying">Property Purchase</SelectItem>
                  <SelectItem value="investment">Investment Opportunity</SelectItem>
                  <SelectItem value="development">Development Partnership</SelectItem>
                  <SelectItem value="consultation">Consultation</SelectItem>
                </SelectContent>
              </Select>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
              <label className="block text-foreground font-medium mb-2">How Did You Hear About Us?</label>
              <Select onValueChange={(value) => setFormData({ ...formData, howDidYouHear: value })}>
                <SelectTrigger className="bg-background border-border text-foreground">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="social-media">Social Media</SelectItem>
                  <SelectItem value="google">Google Search</SelectItem>
                  <SelectItem value="referral">Referral</SelectItem>
                  <SelectItem value="advertisement">Advertisement</SelectItem>
                  <SelectItem value="website">Website</SelectItem>
                </SelectContent>
              </Select>
            </motion.div>
          </div>

          <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
            <label className="block text-foreground font-medium mb-2">Message</label>
            <Textarea
              placeholder="Enter your Message here..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-background border-border text-foreground min-h-[120px]"
            />
          </motion.div>

          <div className="flex items-center space-x-2">
            <input type="checkbox" id="terms" className="rounded" />
            <label htmlFor="terms" className="text-muted-foreground text-sm">
              I agree with Terms of Use and Privacy Policy
            </label>
          </div>

          <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
              Send Your Message
            </Button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  )
}
