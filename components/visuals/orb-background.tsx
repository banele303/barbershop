"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface OrbBackgroundProps {
  className?: string
}

// Simple performant animated radial gradient orbs using canvas
export function OrbBackground({ className = "" }: OrbBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const orbsRef = useRef(
    Array.from({ length: 7 }).map(() => ({
      x: Math.random(),
      y: Math.random(),
      r: 120 + Math.random() * 200,
      hue: 35 + Math.random() * 40,
      dx: (Math.random() - 0.5) * 0.0006,
      dy: (Math.random() - 0.5) * 0.0006,
    }))
  )

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let frame = 0
    let raf: number

    const resize = () => {
      canvas.width = window.innerWidth * 2
      canvas.height = window.innerHeight * 2
    }
    resize()
    window.addEventListener("resize", resize)

    const render = () => {
      frame++
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.globalCompositeOperation = "lighter"

      for (const orb of orbsRef.current) {
        orb.x += orb.dx
        orb.y += orb.dy
        if (orb.x < 0 || orb.x > 1) orb.dx *= -1
        if (orb.y < 0 || orb.y > 1) orb.dy *= -1

        const cx = orb.x * canvas.width
        const cy = orb.y * canvas.height
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, orb.r)
        grad.addColorStop(0, `hsla(${orb.hue}, 85%, 60%, 0.55)`)
        grad.addColorStop(0.5, `hsla(${(orb.hue + 20) % 360}, 80%, 50%, 0.25)`)
        grad.addColorStop(1, "hsla(0,0%,0%,0)")

        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(cx, cy, orb.r, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.globalCompositeOperation = "source-over"
      raf = requestAnimationFrame(render)
    }
    raf = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <canvas ref={canvasRef} className="w-full h-full opacity-[0.6] mix-blend-screen" />
      {/* Soft overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.06),transparent_70%)]" />
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />
    </div>
  )
}
