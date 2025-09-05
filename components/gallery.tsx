"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

// Using existing files from /public for portfolio showcase
const galleryImages = [
  { id: 1, src: "/herobaber.jpg", alt: "Signature precision fade in progress" },
  { id: 2, src: "/black-guy.jpg", alt: "Fresh modern cut with clean beard line" },
  { id: 3, src: "/white3.jpg", alt: "Textured crop with matte finish" },
  { id: 4, src: "/white4.jpg", alt: "Sharp executive side-part style" },
  { id: 5, src: "/white-guy.jpg", alt: "Natural flow medium-length styling" },
  { id: 6, src: "/blehd.jpg", alt: "Detailed scissor work close-up" },
  { id: 7, src: "/blackgiu2.jpg", alt: "Defined beard sculpt and taper" },
  { id: 8, src: "/white.jpg", alt: "Classic refined gentleman finish" },
]

export function Gallery() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Our <span className="text-primary">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            A showcase of our craftsmanship and attention to detail
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="relative aspect-square overflow-hidden rounded-xl bg-muted cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredId(image.id)}
              onHoverEnd={() => setHoveredId(null)}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading={index > 3 ? "lazy" : "eager"}
                className="w-full h-full object-cover transition-transform duration-500"
              />
              <motion.div
                className="absolute inset-0 bg-black/60 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredId === image.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-white font-semibold text-lg">{image.alt}</span>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link href="/portfolio">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              View Full Portfolio
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
