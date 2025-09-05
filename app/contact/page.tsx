"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { MagneticButton } from "@/components/animations/magnetic-button"
import { FloatingElement } from "@/components/animations/floating-elements"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  MessageSquare,
  NavigationIcon,
  Car,
  Train,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Send,
  CheckCircle,
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"

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

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    primary: "(555) 123-CUTS",
    secondary: "(555) 123-2887",
    description: "Speak directly with our booking specialists",
    action: "Call Now",
    color: "text-green-500",
  },
  {
    icon: Mail,
    title: "Email Us",
    primary: "info@elitecuts.com",
    secondary: "bookings@elitecuts.com",
    description: "Send us your questions or booking requests",
    action: "Send Email",
    color: "text-blue-500",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    primary: "Available 9AM-8PM",
    secondary: "Instant responses",
    description: "Chat with our team for immediate assistance",
    action: "Start Chat",
    color: "text-purple-500",
  },
  {
    icon: Calendar,
    title: "Online Booking",
    primary: "24/7 Available",
    secondary: "Instant confirmation",
    description: "Book your appointment anytime, anywhere",
    action: "Book Now",
    color: "text-primary",
  },
]

const businessHours = [
  { day: "Monday", hours: "9:00 AM - 8:00 PM", isToday: false },
  { day: "Tuesday", hours: "9:00 AM - 8:00 PM", isToday: false },
  { day: "Wednesday", hours: "9:00 AM - 8:00 PM", isToday: true },
  { day: "Thursday", hours: "9:00 AM - 8:00 PM", isToday: false },
  { day: "Friday", hours: "9:00 AM - 8:00 PM", isToday: false },
  { day: "Saturday", hours: "8:00 AM - 6:00 PM", isToday: false },
  { day: "Sunday", hours: "10:00 AM - 5:00 PM", isToday: false },
]

const transportOptions = [
  {
    icon: Car,
    title: "By Car",
    description: "Valet parking available",
    details: ["Free valet service", "Street parking nearby", "Garage parking 2 blocks away"],
  },
  {
    icon: Train,
    title: "Public Transit",
    description: "Multiple transit options",
    details: ["Metro Station: 3 blocks", "Bus stops: 1 block", "Bike share station nearby"],
  },
  {
    icon: NavigationIcon,
    title: "Directions",
    description: "Easy to find location",
    details: ["Downtown District", "Near City Hall", "Landmark: Grand Hotel"],
  },
]

const socialLinks = [
  { icon: Instagram, name: "Instagram", handle: "@elitecuts", followers: "25K" },
  { icon: Facebook, name: "Facebook", handle: "Elite Cuts Barbershop", followers: "15K" },
  { icon: Twitter, name: "Twitter", handle: "@elitecuts", followers: "8K" },
  { icon: Youtube, name: "YouTube", handle: "Elite Cuts", followers: "12K" },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    preferredDate: "",
    preferredTime: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
        <Image
          src="/placeholder.svg?height=1080&width=1920&text=Elite+Cuts+Contact"
          alt="Elite Cuts Contact"
          fill
          className="object-cover opacity-20"
          priority
        />

        <FloatingElement duration={8} distance={40} delay={0} className="absolute top-20 left-10 opacity-10">
          <div className="w-32 h-32 rounded-full bg-primary/20 blur-xl" />
        </FloatingElement>
        <FloatingElement duration={6} distance={30} delay={3} className="absolute bottom-20 right-10 opacity-10">
          <div className="w-24 h-24 rounded-full bg-primary/30 blur-xl" />
        </FloatingElement>

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
            <MapPin className="h-5 w-5 text-primary" />
            <span className="text-primary font-medium">Visit Our Location</span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Get in <span className="text-primary">Touch</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Ready to experience the Elite Cuts difference? We're here to help you look and feel your absolute best.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <MagneticButton>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Calendar className="h-5 w-5 mr-2" />
                Book Appointment
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 bg-transparent"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </Button>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <Badge variant="outline" className="border-primary text-primary mb-4">
                Multiple Ways to Connect
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Choose Your <span className="text-primary">Preferred Method</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
                Whether you prefer to call, email, chat, or book online, we make it easy to connect with us.
              </p>
            </div>
          </ScrollReveal>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {contactMethods.map((method, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg h-full group">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`inline-flex p-3 rounded-full bg-primary/10 mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <method.icon className={`h-6 w-6 ${method.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                    <p className="text-primary font-medium mb-1">{method.primary}</p>
                    <p className="text-sm text-muted-foreground mb-3">{method.secondary}</p>
                    <p className="text-xs text-muted-foreground mb-4">{method.description}</p>
                    <MagneticButton>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-primary text-primary hover:bg-primary/10 bg-transparent"
                      >
                        {method.action}
                      </Button>
                    </MagneticButton>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Location Info */}
            <ScrollReveal>
              <Card className="border-border/50 overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <MapPin className="h-6 w-6 text-primary mr-2" />
                    Our Location
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Elite Cuts Barbershop</h3>
                    <p className="text-muted-foreground">
                      123 Luxury Lane
                      <br />
                      Downtown District
                      <br />
                      New York, NY 10001
                    </p>
                  </div>

                  <div className="space-y-4">
                    {transportOptions.map((option, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <option.icon className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">{option.title}</h4>
                          <p className="text-sm text-muted-foreground mb-1">{option.description}</p>
                          <ul className="text-xs text-muted-foreground space-y-1">
                            {option.details.map((detail, idx) => (
                              <li key={idx}>• {detail}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>

                  <MagneticButton className="w-full">
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      <NavigationIcon className="h-4 w-4 mr-2" />
                      Get Directions
                    </Button>
                  </MagneticButton>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Business Hours */}
            <ScrollReveal delay={0.2}>
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Clock className="h-6 w-6 text-primary mr-2" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {businessHours.map((schedule, index) => (
                    <div
                      key={index}
                      className={`flex justify-between items-center py-2 px-3 rounded-lg ${
                        schedule.isToday ? "bg-primary/10 border border-primary/20" : ""
                      }`}
                    >
                      <span className={`font-medium ${schedule.isToday ? "text-primary" : ""}`}>
                        {schedule.day}
                        {schedule.isToday && (
                          <Badge variant="secondary" className="ml-2 text-xs">
                            Today
                          </Badge>
                        )}
                      </span>
                      <span
                        className={`text-sm ${schedule.isToday ? "text-primary font-medium" : "text-muted-foreground"}`}
                      >
                        {schedule.hours}
                      </span>
                    </div>
                  ))}

                  <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <h4 className="font-semibold text-primary mb-2">Special Notes</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Last appointments 30 minutes before closing</li>
                      <li>• Extended hours available for special events</li>
                      <li>• Holiday hours may vary - please call ahead</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <ScrollReveal>
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Have questions or want to book an appointment? Fill out the form and we'll get back to you within 24
                    hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Interest</Label>
                        <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="essential">Essential Cut</SelectItem>
                            <SelectItem value="premium">Premium Experience</SelectItem>
                            <SelectItem value="signature">Signature Royal</SelectItem>
                            <SelectItem value="membership">Elite Membership</SelectItem>
                            <SelectItem value="other">Other/General Inquiry</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="date">Preferred Date</Label>
                        <Input
                          id="date"
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="time">Preferred Time</Label>
                        <Select
                          value={formData.preferredTime}
                          onValueChange={(value) => handleInputChange("preferredTime", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="9am">9:00 AM</SelectItem>
                            <SelectItem value="10am">10:00 AM</SelectItem>
                            <SelectItem value="11am">11:00 AM</SelectItem>
                            <SelectItem value="12pm">12:00 PM</SelectItem>
                            <SelectItem value="1pm">1:00 PM</SelectItem>
                            <SelectItem value="2pm">2:00 PM</SelectItem>
                            <SelectItem value="3pm">3:00 PM</SelectItem>
                            <SelectItem value="4pm">4:00 PM</SelectItem>
                            <SelectItem value="5pm">5:00 PM</SelectItem>
                            <SelectItem value="6pm">6:00 PM</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Tell us about your needs, preferences, or any questions you have..."
                        rows={4}
                      />
                    </div>

                    <MagneticButton className="w-full">
                      <Button
                        type="submit"
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                        disabled={isSubmitted}
                      >
                        {isSubmitted ? (
                          <>
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Message Sent!
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </MagneticButton>
                  </form>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Map & Social */}
            <div className="space-y-6">
              <ScrollReveal delay={0.2}>
                <Card className="border-border/50 overflow-hidden">
                  <div className="h-64 bg-muted flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                      <p className="text-muted-foreground font-medium">Interactive Map</p>
                      <p className="text-sm text-muted-foreground mt-2">123 Luxury Lane, Downtown District</p>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle className="text-xl">Follow Us</CardTitle>
                    <p className="text-muted-foreground text-sm">
                      Stay connected for the latest styles, tips, and exclusive offers.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {socialLinks.map((social, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 rounded-lg border border-border/50 hover:border-primary/50 transition-colors duration-300 group cursor-pointer"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                            <social.icon className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium text-sm">{social.name}</p>
                            <p className="text-xs text-muted-foreground">{social.handle}</p>
                          </div>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {social.followers}
                        </Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
