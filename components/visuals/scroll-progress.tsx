"use client"

import { useScroll, useSpring, motion } from "framer-motion"
import { useEffect, useState } from "react"

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    mass: 0.3,
  })

  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <div className="fixed top-0 left-0 right-0 z-[70] pointer-events-none">
      <motion.div
        style={{ scaleX }}
        className="origin-left h-1 bg-gradient-to-r from-primary via-primary/60 to-primary/30 shadow-[0_0_12px_rgba(var(--primary-rgb),0.6)]" 
        hidden={!mounted}
      />
    </div>
  )
}
