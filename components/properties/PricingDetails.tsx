"use client";

import { motion } from "framer-motion";
import {
  Calculator,
  CreditCard,
  TrendingUp,
  Info,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Property } from "@/lib/properties";

interface PricingDetailsProps {
  property: Property;
}

export default function PricingDetails({ property }: PricingDetailsProps) {
  const formatCurrency = (amount: string) => {
    return amount.replace(/IDR\s?/, "IDR ");
  };

  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pricing & Payment Details
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing with flexible payment options to make your dream
            home affordable and accessible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Base Pricing */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Main Pricing Card */}
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-foreground">
                  Base Price
                </h3>
                <Badge
                  variant="secondary"
                  className="bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400"
                >
                  {property.status}
                </Badge>
              </div>

              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  {formatCurrency(property.pricing.basePrice)}
                </div>
                <p className="text-muted-foreground">
                  Starting price for {property.title}
                </p>
              </div>

              <div className="bg-muted/30 rounded-lg p-4 mb-6">
                <div className="flex items-start space-x-3">
                  <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground text-sm">
                    {property.pricing.note}
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Costs */}
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Additional Costs
              </h3>
              <div className="space-y-4">
                {property.pricing.additionalCosts.map((cost, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between p-4 bg-muted/30 rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div>
                      <h4 className="font-medium text-foreground">
                        {cost.name}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {cost.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-foreground">
                        {formatCurrency(cost.amount)}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Monthly Fees */}
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Monthly Fees
              </h3>
              <div className="space-y-4">
                {property.pricing.monthlyFees.map((fee, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between p-4 bg-muted/30 rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div>
                      <h4 className="font-medium text-foreground">
                        {fee.name}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {fee.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-foreground">
                        {formatCurrency(fee.amount)}
                      </div>
                      <div className="text-muted-foreground text-xs">
                        per month
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Pricing Summary Sidebar */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="sticky top-24 space-y-6">
              {/* Total Cost Summary */}
              <div className="bg-card rounded-lg p-6 border border-border">
                <div className="flex items-center space-x-2 mb-4">
                  <Calculator className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  <h3 className="text-xl font-bold text-foreground">
                    Cost Summary
                  </h3>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">
                      Base Price
                    </span>
                    <span className="font-medium text-foreground">
                      {formatCurrency(property.pricing.basePrice)}
                    </span>
                  </div>

                  {property.pricing.additionalCosts.map((cost, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <span className="text-muted-foreground text-sm">
                        {cost.name}
                      </span>
                      <span className="font-medium text-foreground">
                        +{formatCurrency(cost.amount)}
                      </span>
                    </div>
                  ))}

                  <div className="border-t border-border pt-3 mt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-foreground">
                        Total Estimate
                      </span>
                      <span className="text-xl font-bold text-purple-600 dark:text-purple-400">
                        {formatCurrency(property.pricing.totalEstimate)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/30 rounded-lg p-4 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">
                      Monthly Fees
                    </span>
                    <span className="font-bold text-foreground">
                      {formatCurrency(property.pricing.monthlyTotal)}
                    </span>
                  </div>
                </div>

                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  Request Detailed Quote
                </Button>
              </div>

              {/* Payment Options */}
              <div className="bg-card rounded-lg p-6 border border-border">
                <div className="flex items-center space-x-2 mb-4">
                  <CreditCard className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  <h3 className="text-lg font-bold text-foreground">
                    Payment Options
                  </h3>
                </div>

                <div className="space-y-3">
                  <motion.div
                    className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <span className="text-foreground text-sm">
                      Cash Payment
                    </span>
                  </motion.div>

                  <motion.div
                    className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <span className="text-foreground text-sm">
                      Bank Financing
                    </span>
                  </motion.div>

                  <motion.div
                    className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <span className="text-foreground text-sm">
                      Installment Plans
                    </span>
                  </motion.div>

                  <motion.div
                    className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <span className="text-foreground text-sm">
                      Government Subsidy
                    </span>
                  </motion.div>
                </div>
              </div>

              {/* Investment Potential */}
              <div className="bg-card rounded-lg p-6 border border-border">
                <div className="flex items-center space-x-2 mb-4">
                  <TrendingUp className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  <h3 className="text-lg font-bold text-foreground">
                    Investment Potential
                  </h3>
                </div>

                <div className="space-y-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                      8-12%
                    </div>
                    <div className="text-muted-foreground text-xs">
                      Annual Appreciation
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      5-7%
                    </div>
                    <div className="text-muted-foreground text-xs">
                      Rental Yield
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
