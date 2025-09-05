"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scissors, Radar as Razor, Sparkles, Crown, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const services = [
  {
    icon: Scissors,
    title: "Premium Haircut",
    description: "Precision cuts tailored to your style and face shape",
    price: "R850",
    duration: "45 min",
    features: ["Consultation", "Wash & Style", "Hot Towel"],
    image: "/herobaber.jpg",
  },
  {
    icon: Razor,
    title: "Beard Trim & Shape",
    description: "Expert beard grooming and styling services",
    price: "R650",
    duration: "30 min",
    features: ["Trim & Shape", "Hot Towel", "Beard Oil"],
    image: "/black-guy.jpg",
  },
  {
    icon: Sparkles,
    title: "The Full Experience",
    description: "Complete grooming package for the discerning gentleman",
    price: "R1,350",
    duration: "90 min",
    features: ["Haircut", "Beard Trim", "Hot Towel", "Styling"],
    image: "/white3.jpg",
  },
  {
    icon: Crown,
    title: "VIP Treatment",
    description: "Ultimate luxury experience with premium products",
    price: "R2,200",
    duration: "120 min",
    features: ["Everything", "Face Mask", "Scalp Massage", "Premium Products"],
    image: "/white4.jpg",
  },
]

export function Services() {
  return (
    <section id="services" className="pt-12 pb-24 px-4 relative">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(var(--primary-rgb),0.15),transparent_60%)]" />
      <div className="container mx-auto max-w-7xl relative">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Crafted experiences blending classic technique with contemporary luxury grooming.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <Card className="relative overflow-hidden border-border/60 hover:border-primary/50 bg-gradient-to-b from-card/80 to-card/60 backdrop-blur-sm transition-all h-full flex flex-col group/card rounded-3xl">
                {/* Image container unified curvature */}
                <div className="relative h-64 mb-4 px-4 pt-0 pb-3">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_30%_30%,rgba(var(--primary-rgb),0.35),transparent_60%)] opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 25vw"
                    className="object-cover transition-all duration-1000 group-hover/card:scale-110 group-hover/card:rotate-[1deg]"
                    priority={index < 2}
                  />
                  {/* Overlays respecting curvature */}
                  <div className="absolute inset-0 mix-blend-overlay bg-gradient-to-tr from-black/60 via-black/10 to-transparent" />
                  <div className="absolute inset-0 ring-1 ring-white/10 rounded-2xl pointer-events-none" />
                  <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-primary/25 blur-3xl opacity-0 group-hover/card:opacity-60 transition-opacity duration-700" />
                  <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
                    <div className="p-2 rounded-xl bg-black/40 backdrop-blur-md ring-1 ring-white/15 shadow-sm">
                      <service.icon className="h-5 w-5 text-primary" />
                    </div>
                    <Badge variant="secondary" className="bg-white/15 backdrop-blur text-[10px] tracking-wide">
                      {service.duration}
                    </Badge>
                  </div>
                  {/* Subtle bottom gradient for text readability if caption added later */}
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5 pt-1">
                  <h3 className="text-xl font-semibold tracking-tight mb-1.5 flex items-center gap-2 group-hover/card:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <ul className="space-y-1.5 mb-4 text-sm">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-muted-foreground/90">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" /> {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex items-center justify-between pt-3">
                    <span className="text-2xl font-bold text-primary drop-shadow-sm tracking-tight">{service.price}</span>
                    <Link href="/services" className="relative">
                      <Button
                        size="sm"
                        variant="outline"
                        className="group/btn border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-colors rounded-full px-5"
                      >
                        <span className="flex items-center text-sm">
                          Book
                          <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                        </span>
                      </Button>
                    </Link>
                  </div>
                </div>
                {/* Glow & frame accents */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_50%_10%,rgba(var(--primary-rgb),0.25),transparent_70%)]" />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10 rounded-3xl" />
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link href="/services">
            <Button size="lg" className="relative overflow-hidden group">
              <span className="relative z-10 flex items-center gap-2">
                View Full Service Menu
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
