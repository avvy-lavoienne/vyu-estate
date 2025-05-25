"use client"

import { useState } from "react"
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"

const faqs = [
  {
    question: "How do I search for properties on Estatein?",
    answer: "Learn how to use our user-friendly search tools to find properties that match your criteria.",
  },
  {
    question: "What documents do I need to sell my property through Estatein?",
    answer: "Find out about the necessary documentation for listing your property with us.",
  },
  {
    question: "How can I contact an Estatein agent?",
    answer: "Discover the different ways you can get in touch with our experienced real estate agents.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl">
              Find answers to common questions about Estatein's services, property listings, and the real estate
              process. We're here to provide clarity and assist you every step of the way.
            </p>
          </div>
          <span className="text-purple-600 dark:text-purple-400 hover:text-purple-500 dark:hover:text-purple-300 cursor-pointer">
            View All FAQ's
          </span>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-card rounded-lg border border-border">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-accent transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-foreground font-medium">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-muted-foreground">{faq.answer}</p>
                  <button className="mt-3 text-purple-600 dark:text-purple-400 hover:text-purple-500 dark:hover:text-purple-300 text-sm">
                    Read More
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-8 space-x-4">
          <span className="text-muted-foreground">01 of 10</span>
          <div className="flex space-x-2">
            <button className="p-2 border border-border rounded-lg text-muted-foreground hover:text-foreground hover:border-purple-500">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button className="p-2 border border-border rounded-lg text-muted-foreground hover:text-foreground hover:border-purple-500">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
