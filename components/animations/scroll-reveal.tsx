"use client"

import { motion, useInView } from "framer-motion"
import { useRef, type ReactNode } from "react"
import type { Variants } from "framer-motion"

interface ScrollRevealProps {
  children: ReactNode
  variants?: Variants
  delay?: number
  duration?: number
  threshold?: number
  once?: boolean
  className?: string
}

export function ScrollReveal({
  children,
  variants,
  delay = 0,
  duration = 0.8,
  threshold = 0.1,
  once = true,
  className,
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: threshold })

  const defaultVariants: Variants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={variants || defaultVariants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      className={className}
    >
      {children}
    </motion.div>
  )
}
