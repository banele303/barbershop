"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { TextReveal } from "@/components/animations/text-reveal"
import { FloatingElement } from "@/components/animations/floating-elements"
import { MagneticButton } from "@/components/animations/magnetic-button"
import { AnimatedCounter } from "@/components/animations/animated-counter"

// Provided images actually present in /public
// Rotates daily among these for visual freshness
const HERO_IMAGES = [
  "/herobaber.jpg",
  "/black-guy.jpg",
  "/white4.jpg",
  "/white3.jpg",
  "/white-guy.jpg",
]

// Deterministic daily pick (changes each day without client storage)
const dayIndex = new Date().getUTCDate() % HERO_IMAGES.length
const HERO_BG = HERO_IMAGES[dayIndex]

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background image */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      {/* Dark + color gradient overlays */}
      <div className="absolute inset-0 -z-10 bg-black/60 backdrop-blur-[2px]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(var(--primary-rgb),0.25),transparent_60%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgba(0,0,0,0.7),transparent_40%)]" />

      {/* Floating accent glows */}
      <FloatingElement duration={7} distance={40} delay={0} className="absolute top-24 left-10 opacity-30">
        <div className="w-40 h-40 rounded-full bg-primary/30 blur-3xl" />
      </FloatingElement>
      <FloatingElement duration={10} distance={60} delay={2} className="absolute bottom-20 right-20 opacity-25">
        <div className="w-56 h-56 rounded-full bg-primary/20 blur-3xl" />
      </FloatingElement>

      <div className="relative z-10 w-full px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_420px] items-center">
          {/* Left: Headline + CTAs (hidden on mobile) */}
          <div className="hidden md:block text-center md:text-left">
            <ScrollReveal delay={0.1}>
              <TextReveal delay={0.25}>
                <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-balance">
                  Precision Grooming
                  <br />
                  <span className="relative inline-block">
                    <span className="pr-2">For the</span>
                    <span className="text-primary inline-flex items-center gap-2">
                      Modern Gent
                      <Sparkles className="h-6 w-6 text-primary/70" />
                    </span>
                  </span>
                </h1>
              </TextReveal>
              <motion.p
                className="mt-6 text-lg md:text-xl text-muted-foreground/90 max-w-xl mx-auto md:mx-0 text-pretty"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.7 }}
              >
                Step into a sanctuary of craftsmanship. Sophisticated cuts, tailored grooming, and effortless style—
                all elevated by a premium barbershop experience.
              </motion.p>
              <motion.div
                className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.7 }}
              >
                <MagneticButton strength={0.25}>
                  <Button size="lg" className="relative overflow-hidden group px-10 py-7 text-lg font-medium">
                    <span className="relative z-10 flex items-center gap-2">
                      Reserve Your Chair
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/70"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.35 }}
                    />
                  </Button>
                </MagneticButton>
                <MagneticButton strength={0.18}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="relative overflow-hidden group px-10 py-7 text-lg font-medium border-primary/40 hover:border-primary"
                  >
                    <span className="relative z-10">Explore Services</span>
                    <motion.div
                      className="absolute inset-0 bg-primary/90"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.35 }}
                      style={{ originX: 0.5, originY: 0.5 }}
                    />
                  </Button>
                </MagneticButton>
              </motion.div>
            </ScrollReveal>

            {/* Stats */}
            <motion.div
              className="mt-14 grid grid-cols-3 gap-6 max-w-lg mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.7 }}
            >
              {[
                { value: 12, suffix: "+", label: "Years" },
                { value: 4800, suffix: "+", label: "Happy Clients" },
                { value: 25, suffix: "+", label: "Style Awards" },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <AnimatedCounter
                    value={s.value}
                    suffix={s.suffix}
                    className="text-3xl md:text-4xl font-bold text-primary drop-shadow"
                  />
                  <p className="mt-1 text-xs md:text-sm tracking-wide text-muted-foreground uppercase">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Stylized floating card / showcase (becomes primary content on mobile) */}
          <div className="relative md:block">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative mx-auto w-full max-w-sm md:mt-0 mt-10"
            >
              <div className="relative rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-black/40 backdrop-blur-sm bg-white/5">
                <div
                  className="aspect-[3/4] w-full"
                  style={{
                    backgroundImage: "url('/blehd.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 p-6 flex flex-col gap-2">
                  <h3 className="text-xl font-semibold">Signature Craft</h3>
                  <p className="text-sm text-muted-foreground/90 max-w-[28ch] md:max-w-[22ch]">
                    Tailored fades & precision beard design for a timeless, elevated look.
                  </p>
                  {/* Mobile-only quick actions */}
                  <div className="flex md:hidden gap-3 mt-4">
                    <Button size="sm" className="flex-1 font-medium">Book Now</Button>
                    <Button size="sm" variant="outline" className="flex-1 font-medium border-primary/40">Services</Button>
                  </div>
                </div>
              </div>
              {/* Floating mini cards */}
              <motion.div
                className="hidden md:block absolute -left-8 top-12 w-32 rounded-xl p-3 bg-white/10 backdrop-blur-sm ring-1 ring-white/15 shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-xs tracking-wide text-muted-foreground/80">Express Trim</p>
                <p className="text-lg font-bold">15m</p>
              </motion.div>
              <motion.div
                className="hidden md:block absolute -right-10 bottom-16 w-36 rounded-xl p-3 bg-white/10 backdrop-blur-sm ring-1 ring-white/15 shadow-lg"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-xs tracking-wide text-muted-foreground/80">Hot Towel Shave</p>
                <p className="text-lg font-bold">30m</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="relative"
        >
          <div className="w-6 h-10 border-2 border-primary/80 rounded-full flex justify-center relative overflow-hidden">
            <motion.div
              className="w-1 h-3 bg-primary rounded-full mt-2"
              animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
