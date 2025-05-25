"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const propertyFAQs = [
  {
    question: "What is included in the base price?",
    answer:
      "The base price includes the land, building construction, basic electrical and plumbing installations, standard finishes, and access to community facilities. Additional upgrades and premium finishes are available at extra cost.",
  },
  {
    question: "What are the payment terms and financing options?",
    answer:
      "We offer flexible payment terms including cash payments with discounts, bank financing partnerships with competitive rates, installment plans, and assistance with government subsidy programs for eligible buyers.",
  },
  {
    question: "When will the property be ready for occupancy?",
    answer:
      "Construction timelines vary by project phase and unit type. Typically, properties are ready for occupancy within 12-18 months from the signing of the purchase agreement. We provide regular construction updates to all buyers.",
  },
  {
    question: "What community facilities are included?",
    answer:
      "Our developments include comprehensive community facilities such as security posts, community centers, children's playgrounds, jogging tracks, places of worship, and commercial areas. Specific facilities may vary by project.",
  },
  {
    question: "Are there any ongoing monthly fees?",
    answer:
      "Yes, there are monthly community fees that cover security services, maintenance of common areas, waste management, and upkeep of community facilities. These fees are clearly outlined in the pricing details.",
  },
  {
    question: "Can I customize or upgrade my property?",
    answer:
      "Yes, we offer various customization options and upgrade packages including premium finishes, smart home features, additional rooms, and landscape enhancements. Our design team can work with you to create your ideal home.",
  },
  {
    question: "What is the process for purchasing a property?",
    answer:
      "The process includes: 1) Property selection and site visit, 2) Booking fee payment, 3) Purchase agreement signing, 4) Down payment, 5) Construction monitoring, 6) Final payment and handover. Our sales team guides you through each step.",
  },
  {
    question: "Is there a warranty on the property?",
    answer:
      "Yes, all our properties come with comprehensive warranties covering structural elements, electrical systems, plumbing, and finishes. We also provide after-sales service and maintenance support for the first year.",
  },
];

export default function PropertyFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <HelpCircle className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about this property, pricing,
            payment options, and the purchase process.
          </p>
        </motion.div>

        <div className="space-y-4">
          {propertyFAQs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-lg border border-border overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-accent transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-foreground font-medium pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <motion.p
                        className="text-muted-foreground leading-relaxed"
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        {faq.answer}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <motion.button
            className="text-purple-600 dark:text-purple-400 hover:text-purple-500 dark:hover:text-purple-300 font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact our property experts for personalized assistance
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
