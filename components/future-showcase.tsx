"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

export function FutureShowcase() {
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6])

  return (
    <section ref={ref} className="relative py-40 overflow-hidden" id="future">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
      <motion.div style={{ y, scale, opacity }} className="absolute inset-0">
        <Image
          src="/herobaber.jpg"
          alt="Craft Detail"
          fill
          priority
          className="object-cover object-center opacity-30 mix-blend-luminosity"
        />
      </motion.div>

      <div className="relative max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 ring-1 ring-primary/30 backdrop-blur">
            <span className="text-[10px] font-medium tracking-widest text-primary/80">INNOVATION</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs text-primary/70">NEXT ERA GROOMING</span>
          </div>
          <h2 className="mt-8 text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
            The Fusion of Craft & <span className="text-primary">Technology</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg md:text-xl leading-relaxed">
            We blend heritage barbering discipline with forward-thinking digital tooling, environment design & data-driven
            personalization—building a grooming journey that adapts with you.
          </p>
        </motion.div>

        <div className="mt-24 grid gap-10 md:grid-cols-3">
          {[{
            title: "Adaptive Profiles",
            text: "Preference memory, product sensitivity, fade gradient history & seasonal adjustments.",
          }, {
            title: "Visual Consult XR",
            text: "In-chair augmented style previewing & angle calibration for perfect silhouettes.",
          }, {
            title: "Sustainable Systems",
            text: "Water & energy optimization + recyclable product ecosystem integration.",
          }].map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative group"
            >
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/40 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition" />
              <div className="relative h-full rounded-2xl border border-white/10 bg-white/5 dark:bg-black/40 backdrop-blur-xl p-8 flex flex-col">
                <h3 className="text-xl font-semibold tracking-tight mb-4">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{b.text}</p>
                <div className="mt-6 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                <span className="mt-4 inline-block text-[11px] tracking-widest text-primary/70">FUTURE READY</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
