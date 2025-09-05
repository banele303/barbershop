"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Sparkles, Cpu, Timer, Award, Users } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Precision Craft",
    desc: "Every cut engineered with geometry, texture mapping & modern technique.",
  },
  {
    icon: Cpu,
    title: "Tech-Forward",
    desc: "AI style references & digital look history to keep evolving your look.",
  },
  {
    icon: Timer,
    title: "Time Optimized",
    desc: "Smart booking flow + prep staging reduces wait & turnaround times.",
  },
  {
    icon: Users,
    title: "Client Memory",
    desc: "Preference profiles: product sensitivity, fade level, styling finish.",
  },
  {
    icon: ShieldCheck,
    title: "Hygiene Protocol",
    desc: "Sterile edge system, UV tool cycling & premium skin-safe formulas.",
  },
  {
    icon: Award,
    title: "Awarded Team",
    desc: "National competition finalists & educator-level barbers on staff.",
  },
]

export function WhyChoose() {
  return (
    <section className="relative py-28 px-4" id="why">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(var(--primary-rgb),0.15),transparent_60%)]" />
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Why <span className="text-primary">Choose</span> Us
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            A fusion of craft, technology, atmosphere & service consistency engineered for modern grooming.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="relative group"
            >
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/40 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition" />
              <div className="relative h-full rounded-2xl border border-white/10 bg-white/5 dark:bg-black/40 backdrop-blur-xl p-8 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-6 ring-1 ring-primary/40">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 tracking-tight">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{f.desc}</p>
                <div className="mt-6 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                <motion.span
                  whileHover={{ x: 4 }}
                  className="mt-4 inline-block text-xs tracking-wide text-primary/80"
                >
                  CORE VALUE
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
