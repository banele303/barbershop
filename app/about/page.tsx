"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scissors, Award, Users, Clock, Star, Trophy, Heart, Target } from "lucide-react"
import Image from "next/image"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const stats = [
  { icon: Users, number: "10,000+", label: "Happy Clients" },
  { icon: Award, number: "15+", label: "Years Experience" },
  { icon: Trophy, number: "50+", label: "Awards Won" },
  { icon: Star, number: "4.9", label: "Average Rating" },
]

const values = [
  {
    icon: Scissors,
    title: "Craftsmanship",
    description: "Every cut is a work of art, executed with precision and passion by our master barbers.",
  },
  {
    icon: Heart,
    title: "Community",
    description: "We're more than a barbershop - we're a gathering place where relationships are built.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We never settle for good enough. Every service exceeds expectations.",
  },
  {
    icon: Clock,
    title: "Tradition",
    description: "Honoring classic barbering traditions while embracing modern techniques.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
        <Image
          src="/luxury-barbershop-interior-with-vintage-chairs-and.jpg"
          alt="Elite Cuts Interior"
          fill
          className="object-cover opacity-20"
          priority
        />

        <motion.div
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Scissors className="h-5 w-5 text-primary" />
            <span className="text-primary font-medium">Est. 2009</span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Our <span className="text-primary">Story</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            From a small neighborhood shop to the city's premier destination for luxury grooming, Elite Cuts has been
            redefining the barbershop experience for over a decade.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Meet Our Team
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 bg-transparent"
            >
              Our Services
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div key={index} className="text-center" variants={fadeInUp}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Badge variant="outline" className="border-primary text-primary mb-4">
                Our Journey
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Crafting Excellence Since <span className="text-primary">2009</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  What started as a passion project by master barber Marcus Johnson has evolved into the city's most
                  prestigious grooming destination. Our commitment to excellence and attention to detail has earned us a
                  loyal clientele of discerning gentlemen.
                </p>
                <p>
                  We believe that a great haircut is more than just a service—it's an experience that boosts confidence
                  and makes you feel your absolute best. Every chair in our shop tells a story of transformation and
                  craftsmanship.
                </p>
                <p>
                  Today, Elite Cuts stands as a testament to what happens when traditional barbering meets modern
                  luxury, creating an atmosphere where every client feels like royalty.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image src="/vintage-barbershop-tools-and-classic-barber-chair-.jpg" alt="Elite Cuts Heritage" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm opacity-90">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge variant="outline" className="border-primary text-primary mb-4">
              Our Values
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              What Drives <span className="text-primary">Us</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Our core values shape every interaction, every cut, and every moment you spend with us.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full border-border/50 hover:border-primary/50 transition-colors duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
