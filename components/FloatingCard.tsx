"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"

interface FloatingCardProps {
  children: React.ReactNode
  className?: string
  hoverScale?: number
  hoverRotate?: number
}

export default function FloatingCard({
  children,
  className = "",
  hoverScale = 1.02,
  hoverRotate = 1,
}: FloatingCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={className}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        scale: hoverScale,
        rotate: hoverRotate,
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ y: 0 }}
      animate={{
        y: isHovered ? -8 : 0,
        boxShadow: isHovered ? "0 20px 40px rgba(0,0,0,0.1)" : "0 4px 6px rgba(0,0,0,0.05)",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}
