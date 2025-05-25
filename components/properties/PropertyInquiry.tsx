"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MessageCircle, Calendar, Home } from "lucide-react";
import type { Property } from "@/lib/properties";

interface PropertyInquiryProps {
  property: Property;
}

export default function PropertyInquiry({ property }: PropertyInquiryProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    inquiryType: "",
    preferredContact: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Inquiry submitted:", formData);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      value: "+62 838-2137-3804",
      description: "Speak directly with our property experts",
      color: "bg-green-500",
    },
    {
      icon: Mail,
      title: "Email Us",
      value: "info@vyuapp.com",
      description: "Send us your detailed inquiry",
      color: "bg-blue-500",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+62 838-2137-3804",
      description: "Quick messaging support",
      color: "bg-green-600",
    },
    {
      icon: Calendar,
      title: "Schedule Visit",
      value: "Book Appointment",
      description: "Visit the property in person",
      color: "bg-purple-500",
    },
  ];

  return (
    <section className="py-12 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Interested in This Property?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our property experts to learn more about{" "}
            {property.title} and schedule a visit. We're here to help you find
            your perfect home.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Get in Touch
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  className="bg-card rounded-lg p-4 border border-border hover:border-purple-500 transition-colors cursor-pointer group"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div
                    className={`w-12 h-12 ${method.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
                  >
                    <method.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">
                    {method.title}
                  </h4>
                  <p className="text-purple-600 dark:text-purple-400 font-medium mb-1">
                    {method.value}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {method.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Property Summary */}
            <motion.div
              className="bg-card rounded-lg p-6 border border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="font-semibold text-foreground mb-4">
                Property Summary
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Home className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  <div>
                    <p className="font-medium text-foreground">
                      {property.title}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {property.location}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-border">
                  <span className="text-muted-foreground text-sm">
                    Starting Price
                  </span>
                  <span className="font-bold text-purple-600 dark:text-purple-400">
                    {property.price}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Send an Inquiry
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label className="block text-foreground font-medium mb-2">
                      First Name
                    </label>
                    <Input
                      type="text"
                      placeholder="Enter First Name"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      className="bg-background border-border text-foreground"
                    />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label className="block text-foreground font-medium mb-2">
                      Last Name
                    </label>
                    <Input
                      type="text"
                      placeholder="Enter Last Name"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      className="bg-background border-border text-foreground"
                    />
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label className="block text-foreground font-medium mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="Enter your Email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="bg-background border-border text-foreground"
                    />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label className="block text-foreground font-medium mb-2">
                      Phone
                    </label>
                    <Input
                      type="tel"
                      placeholder="Enter Phone Number"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="bg-background border-border text-foreground"
                    />
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label className="block text-foreground font-medium mb-2">
                      Inquiry Type
                    </label>
                    <Select
                      onValueChange={(value) =>
                        setFormData({ ...formData, inquiryType: value })
                      }
                    >
                      <SelectTrigger className="bg-background border-border text-foreground">
                        <SelectValue placeholder="Select Inquiry Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="purchase">
                          Purchase Inquiry
                        </SelectItem>
                        <SelectItem value="visit">Schedule Visit</SelectItem>
                        <SelectItem value="financing">
                          Financing Options
                        </SelectItem>
                        <SelectItem value="general">
                          General Information
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label className="block text-foreground font-medium mb-2">
                      Preferred Contact
                    </label>
                    <Select
                      onValueChange={(value) =>
                        setFormData({ ...formData, preferredContact: value })
                      }
                    >
                      <SelectTrigger className="bg-background border-border text-foreground">
                        <SelectValue placeholder="Select Contact Method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="phone">Phone Call</SelectItem>
                        <SelectItem value="whatsapp">WhatsApp</SelectItem>
                        <SelectItem value="visit">In-Person Visit</SelectItem>
                      </SelectContent>
                    </Select>
                  </motion.div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <label className="block text-foreground font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell us more about your requirements..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="bg-background border-border text-foreground min-h-[100px]"
                  />
                </motion.div>

                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="terms" className="rounded" />
                  <label
                    htmlFor="terms"
                    className="text-muted-foreground text-sm"
                  >
                    I agree to be contacted about this property and accept the
                    Terms & Conditions
                  </label>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    Send Inquiry
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
