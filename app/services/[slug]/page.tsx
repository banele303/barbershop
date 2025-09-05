"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Scissors, Radar as Razor, Sparkles, Crown, Star, Check, ArrowLeft, Calendar, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

const services = {
  "premium-haircut": {
    id: "premium-haircut",
    icon: Scissors,
    title: "Premium Haircut",
    shortDescription: "Precision cuts tailored to your style and face shape",
    fullDescription:
      "Our signature haircut service combines traditional barbering techniques with modern styling. Each cut begins with a detailed consultation to understand your lifestyle, face shape, and personal style preferences. Our master barbers use premium tools and techniques to create a look that's uniquely yours.",
    detailedDescription:
      "Experience the art of precision cutting with our Premium Haircut service. This isn't just a haircut – it's a transformation. Our master barbers begin each session with an in-depth consultation, analyzing your face shape, hair texture, lifestyle, and personal style to create a cut that's perfectly tailored to you. Using traditional techniques refined over decades, combined with modern styling methods, we ensure every cut enhances your natural features and fits seamlessly into your daily routine.",
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
      "Personal consultation and hair analysis",
      "Wash with premium sulfate-free products",
      "Precision cutting using traditional techniques",
      "Relaxing hot towel treatment",
      "Professional styling and finishing touches",
      "Product recommendations and styling tips",
    ],
    benefits: [
      "Enhances your natural features",
      "Complements your face shape",
      "Easy to maintain at home",
      "Professional styling guidance",
      "Premium product treatment",
    ],
    images: [
      "/placeholder.svg?key=haircut-detail1",
      "/placeholder.svg?key=haircut-detail2",
      "/placeholder.svg?key=haircut-detail3",
    ],
    popular: true,
    testimonials: [
      {
        name: "Michael Chen",
        rating: 5,
        comment: "Best haircut I've ever had. The consultation was thorough and the result was exactly what I wanted.",
      },
      {
        name: "David Rodriguez",
        rating: 5,
        comment: "Marcus really knows his craft. The attention to detail is incredible.",
      },
    ],
  },
  "beard-trim": {
    id: "beard-trim",
    icon: Razor,
    title: "Beard Trim & Shape",
    shortDescription: "Expert beard grooming and styling services",
    fullDescription:
      "Transform your facial hair with our expert beard trimming and shaping service. Whether you're maintaining your current style or trying something new, our barbers will craft the perfect beard to complement your face shape and personal aesthetic.",
    detailedDescription:
      "Master the art of facial hair with our expert Beard Trim & Shape service. Our skilled barbers understand that a well-groomed beard is more than just facial hair – it's a statement of style and sophistication. We begin with a thorough assessment of your facial structure and hair growth patterns to determine the optimal beard shape and length. Using precision trimming techniques and premium tools, we sculpt your beard to enhance your masculine features while maintaining a natural, refined appearance.",
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
      "Beard assessment and style consultation",
      "Steam treatment to soften facial hair",
      "Precision trimming and detailed shaping",
      "Soothing hot towel application",
      "Premium beard oil application and styling",
      "Maintenance tips and product recommendations",
    ],
    benefits: [
      "Enhances facial structure",
      "Professional beard shaping",
      "Healthy beard maintenance",
      "Premium product treatment",
      "Expert styling guidance",
    ],
    images: [
      "/placeholder.svg?key=beard-detail1",
      "/placeholder.svg?key=beard-detail2",
      "/placeholder.svg?key=beard-detail3",
    ],
    testimonials: [
      {
        name: "James Wilson",
        rating: 5,
        comment: "Finally found someone who knows how to properly shape a beard. The hot towel treatment was amazing.",
      },
      {
        name: "Robert Garcia",
        rating: 5,
        comment: "Professional service and great attention to detail. My beard has never looked better.",
      },
    ],
  },
  "full-experience": {
    id: "full-experience",
    icon: Sparkles,
    title: "The Full Experience",
    shortDescription: "Complete grooming package for the discerning gentleman",
    fullDescription:
      "Our most popular service combines the best of both worlds - a premium haircut and expert beard grooming in one comprehensive session. Perfect for the modern gentleman who values both style and convenience.",
    detailedDescription:
      "Indulge in our signature Full Experience – the perfect combination of our Premium Haircut and Beard Trim services. This comprehensive grooming session is designed for the discerning gentleman who appreciates quality and convenience. Over 90 minutes, you'll receive the complete Elite Cuts treatment, from consultation to final styling, ensuring you leave looking and feeling your absolute best. This service represents the pinnacle of modern barbering, combining traditional techniques with luxury amenities.",
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
      "Comprehensive style consultation and planning",
      "Luxurious hair wash and conditioning treatment",
      "Precision haircut tailored to your features",
      "Expert beard trimming and detailed shaping",
      "Dual hot towel treatments for ultimate relaxation",
      "Premium product application and final styling",
      "Complete grooming guidance and maintenance tips",
    ],
    benefits: [
      "Complete transformation in one session",
      "Maximum convenience and value",
      "Comprehensive grooming consultation",
      "Dual hot towel relaxation",
      "Complete styling guidance",
    ],
    images: [
      "/placeholder.svg?key=full-detail1",
      "/placeholder.svg?key=full-detail2",
      "/placeholder.svg?key=full-detail3",
    ],
    recommended: true,
    testimonials: [
      {
        name: "Anthony Chen",
        rating: 5,
        comment: "The full experience is worth every penny. Came out looking like a new man.",
      },
      {
        name: "Michael Thompson",
        rating: 5,
        comment: "This is my go-to service. Perfect combination of haircut and beard work.",
      },
    ],
  },
  "vip-treatment": {
    id: "vip-treatment",
    icon: Crown,
    title: "VIP Treatment",
    shortDescription: "Ultimate luxury experience with premium products",
    fullDescription:
      "Experience the ultimate in luxury grooming with our VIP Treatment. This premium service elevates the barbershop experience to new heights, combining our complete grooming services with spa-like amenities and personalized attention. Over two hours, you'll enjoy a comprehensive transformation that includes not just exceptional hair and beard services, but also rejuvenating treatments designed to refresh and revitalize. This is more than a grooming session – it's a luxury experience crafted for those who demand the very best.",
    detailedDescription:
      "Experience the ultimate in luxury grooming with our exclusive VIP Treatment. This premium service elevates the barbershop experience to new heights, combining our complete grooming services with spa-like amenities and personalized attention. Over two hours, you'll enjoy a comprehensive transformation that includes not just exceptional hair and beard services, but also rejuvenating treatments designed to refresh and revitalize. This is more than a grooming session – it's a luxury experience crafted for those who demand the very best.",
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
      "Executive consultation and personalized planning",
      "Therapeutic scalp massage and relaxation",
      "Premium hair service with luxury products",
      "Expert beard grooming and styling",
      "Rejuvenating face mask treatment",
      "Multiple hot towel applications",
      "Final styling with premium product suite",
      "Complimentary beverage and relaxation time",
    ],
    benefits: [
      "Ultimate luxury experience",
      "Complete relaxation and pampering",
      "Premium product treatments",
      "Personalized executive service",
      "Comprehensive transformation",
    ],
    images: [
      "/placeholder.svg?key=vip-detail1",
      "/placeholder.svg?key=vip-detail2",
      "/placeholder.svg?key=vip-detail3",
    ],
    luxury: true,
    testimonials: [
      {
        name: "Marcus Johnson",
        rating: 5,
        comment: "The VIP treatment is pure luxury. The scalp massage and face mask were incredible.",
      },
      {
        name: "David Rodriguez",
        rating: 5,
        comment: "Worth every rand. This is how grooming should be done.",
      },
    ],
  },
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services[params.slug as keyof typeof services]

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
        <Image
          src={service.images[0] || "/placeholder.svg"}
          alt={service.title}
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
            className="flex items-center justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mr-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Services
            </Link>
            <div className="flex items-center space-x-2">
              {service.popular && <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>}
              {service.recommended && <Badge variant="secondary">Recommended</Badge>}
              {service.luxury && (
                <Badge className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">Luxury</Badge>
              )}
            </div>
          </motion.div>

          <motion.div
            className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <service.icon className="h-5 w-5 text-primary" />
            <span className="text-primary font-medium">Premium Service</span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {service.title}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {service.shortDescription}
          </motion.p>

          <motion.div
            className="flex items-center justify-center space-x-8 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">{service.price}</div>
              <div className="text-sm text-muted-foreground">Starting Price</div>
            </div>
            <Separator orientation="vertical" className="h-12" />
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">{service.duration}</div>
              <div className="text-sm text-muted-foreground">Duration</div>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Calendar className="h-5 w-5 mr-2" />
              Book This Service
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 bg-transparent"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (555) 123-4567
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Service Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Badge variant="outline" className="border-primary text-primary mb-4">
                Service Details
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                What to <span className="text-primary">Expect</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">{service.detailedDescription}</p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Service Benefits:</h3>
                  <div className="grid gap-3">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center">
                        <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-4">
                {service.images.slice(1).map((image, idx) => (
                  <div key={idx} className="relative h-48 rounded-xl overflow-hidden">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${service.title} ${idx + 2}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">What's Included:</h3>
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Process */}
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
              Our Process
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Step by <span className="text-primary">Step</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Here's exactly what happens during your {service.title} service.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {service.process.map((step, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                    <span className="text-primary font-bold">{idx + 1}</span>
                  </div>
                  <div className="flex-1 pt-2">
                    <p className="text-lg text-muted-foreground">{step}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              Client Reviews
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              What Clients <span className="text-primary">Say</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {service.testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-primary fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">"{testimonial.comment}"</p>
                    <p className="font-semibold text-foreground">— {testimonial.name}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Ready to Book Your <span className="text-primary">{service.title}?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              Experience the Elite Cuts difference with our {service.title} service. Book your appointment today and
              discover why we're the city's premier barbershop.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Calendar className="h-5 w-5 mr-2" />
                Book {service.title}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 bg-transparent"
              >
                <Phone className="h-5 w-5 mr-2" />
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
