"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    details: ["43 Voster Avenue", "City Center", "(Easy access downtown)"] ,
  },
  {
    icon: Phone,
    title: "Phone",
  details: ["+27 21 555 0123", "+27 82 345 6789"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@elitecuts.com", "bookings@elitecuts.com"],
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Mon-Fri: 9AM-8PM", "Sat: 8AM-6PM", "Sun: 10AM-5PM"],
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Visit <span className="text-primary">Our Shop</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Located at <span className="font-semibold text-foreground">43 Voster Avenue</span> in the heart of the city—premium cuts, modern grooming, walk-ins welcome.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-card border-border overflow-hidden">
              <div className="relative h-full min-h-96">
                {/* Keyless embed using generic Google Maps embed (no API key required). */}
                <iframe
                  title="Map - 43 Voster Avenue"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=43+Voster+Avenue&output=embed"
                  allowFullScreen
                />
                <noscript>
                  <a
                    href="https://www.google.com/maps?q=43+Voster+Avenue"
                    className="absolute bottom-2 left-2 bg-background/80 px-2 py-1 text-xs rounded"
                  >
                    View map: 43 Voster Avenue
                  </a>
                </noscript>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/30 via-transparent" />
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg backdrop-blur bg-background/60 border border-border/50 shadow-sm">
                  <p className="text-sm font-medium">43 Voster Avenue</p>
                  <p className="text-xs text-muted-foreground">Find us easily &mdash; parking nearby, public transit friendly.</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
