"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Scissors, Radar as Razor, Sparkles, Crown, Clock, Check, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

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

const services = [
  {
    id: "premium-haircut",
    icon: Scissors,
    title: "Premium Haircut",
    shortDescription: "Precision cuts tailored to your style and face shape",
    fullDescription:
      "Our signature haircut service combines traditional barbering techniques with modern styling. Each cut begins with a detailed consultation to understand your lifestyle, face shape, and personal style preferences. Our master barbers use premium tools and techniques to create a look that's uniquely yours.",
    price: "R850",
    duration: "45 min",
    features: [
      "Personal Style Consultation",
      "Precision Cut & Styling",
      "Hot Towel Treatment",
      "Premium Hair Products",
      "Styling Tips & Advice",
    ],
    process: [
      "Consultation & hair analysis",
      "Wash with premium products",
      "Precision cutting technique",
      "Hot towel treatment",
      "Styling & finishing touches",
    ],
    image: "/placeholder.svg?key=haircut1",
    popular: true,
  },
  {
    id: "beard-trim",
    icon: Razor,
    title: "Beard Trim & Shape",
    shortDescription: "Expert beard grooming and styling services",
    fullDescription:
      "Transform your facial hair with our expert beard trimming and shaping service. Whether you're maintaining your current style or trying something new, our barbers will craft the perfect beard to complement your face shape and personal aesthetic.",
    price: "R650",
    duration: "30 min",
    features: [
      "Beard Shape Consultation",
      "Precision Trimming",
      "Hot Towel Treatment",
      "Premium Beard Oil",
      "Mustache Styling",
    ],
    process: [
      "Beard assessment & consultation",
      "Steam treatment preparation",
      "Precision trimming & shaping",
      "Hot towel application",
      "Beard oil & styling",
    ],
    image: "/placeholder.svg?key=beard1",
  },
  {
    id: "full-experience",
    icon: Sparkles,
    title: "The Full Experience",
    shortDescription: "Complete grooming package for the discerning gentleman",
    fullDescription:
      "Our most popular service combines the best of both worlds - a premium haircut and expert beard grooming in one comprehensive session. Perfect for the modern gentleman who values both style and convenience.",
    price: "R1,350",
    duration: "90 min",
    features: [
      "Complete Style Consultation",
      "Premium Haircut",
      "Beard Trim & Shape",
      "Double Hot Towel Treatment",
      "Premium Product Application",
      "Styling & Grooming Tips",
    ],
    process: [
      "Comprehensive consultation",
      "Hair wash & conditioning",
      "Precision haircut",
      "Beard trimming & shaping",
      "Hot towel treatments",
      "Final styling & products",
    ],
    image: "/placeholder.svg?key=full1",
    recommended: true,
  },
  {
    id: "vip-treatment",
    icon: Crown,
    title: "VIP Treatment",
    shortDescription: "Ultimate luxury experience with premium products",
    fullDescription:
      "Indulge in the ultimate grooming experience with our VIP treatment. This luxury service includes everything from our Full Experience plus additional pampering treatments designed to leave you feeling refreshed and looking your absolute best.",
    price: "R2,200",
    duration: "120 min",
    features: [
      "Executive Consultation",
      "Premium Haircut & Styling",
      "Beard Trim & Shape",
      "Relaxing Face Mask",
      "Therapeutic Scalp Massage",
      "Hot Towel Treatments",
      "Premium Product Suite",
      "Complimentary Beverage",
    ],
    process: [
      "VIP consultation & planning",
      "Relaxing scalp massage",
      "Premium hair service",
      "Luxury beard grooming",
      "Rejuvenating face mask",
      "Multiple hot towel treatments",
      "Final styling & premium products",
    ],
    image: "/placeholder.svg?key=vip1",
    luxury: true,
  },
]

const addOns = [
  { name: "Hot Towel Treatment", price: "R180", duration: "10 min" },
  { name: "Scalp Massage", price: "R270", duration: "15 min" },
  { name: "Face Mask", price: "R360", duration: "20 min" },
  { name: "Eyebrow Trim", price: "R220", duration: "10 min" },
  { name: "Nose/Ear Hair Trim", price: "R150", duration: "5 min" },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
        <Image
          src="/placeholder.svg?key=services-hero"
          alt="Elite Cuts Services"
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
            <span className="text-primary font-medium">Premium Services</span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Our <span className="text-primary">Services</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            From classic cuts to luxury treatments, discover our comprehensive range of premium grooming services
            designed for the modern gentleman.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Book Your Service
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge variant="outline" className="border-primary text-primary mb-4">
              Premium Grooming
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Choose Your <span className="text-primary">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Each service is crafted to deliver exceptional results and an unforgettable experience.
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div key={service.id} variants={fadeInUp}>
                <Card className="group h-full border-border/50 hover:border-primary/50 transition-all duration-300 overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

                    {/* Service Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {service.popular && <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>}
                      {service.recommended && <Badge variant="secondary">Recommended</Badge>}
                      {service.luxury && (
                        <Badge className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
                          Luxury
                        </Badge>
                      )}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <service.icon className="h-6 w-6 text-primary" />
                          <span className="text-lg font-bold text-foreground">{service.title}</span>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">{service.price}</div>
                          <div className="text-sm text-muted-foreground flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {service.duration}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4 leading-relaxed">{service.fullDescription}</p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">What's Included:</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm text-muted-foreground">
                              <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Service Process:</h4>
                        <div className="space-y-2">
                          {service.process.map((step, idx) => (
                            <div key={idx} className="flex items-center text-sm text-muted-foreground">
                              <div className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center mr-3 flex-shrink-0">
                                {idx + 1}
                              </div>
                              {step}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3 mt-6">
                      <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                        Book Now
                      </Button>
                      <Link href={`/services/${service.id}`}>
                        <Button
                          variant="outline"
                          className="border-primary text-primary hover:bg-primary/10 bg-transparent"
                        >
                          Learn More
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Add-Ons Section */}
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
              Enhance Your Experience
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Premium <span className="text-primary">Add-Ons</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Customize your service with our luxury add-ons for the ultimate grooming experience.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {addOns.map((addon, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center border-border/50 hover:border-primary/50 transition-colors duration-300">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">{addon.name}</h3>
                    <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {addon.duration}
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-primary mb-4">{addon.price}</div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary text-primary hover:bg-primary/10 bg-transparent"
                    >
                      Add to Service
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Ready to Look Your <span className="text-primary">Best?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              Book your appointment today and experience the Elite Cuts difference. Our master barbers are ready to
              transform your look.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Book Appointment
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 bg-transparent"
              >
                Call (555) 123-4567
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
