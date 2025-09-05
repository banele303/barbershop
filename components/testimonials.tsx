"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useState, useEffect } from "react"

const testimonials = [
  {
    name: "Marcus Johnson",
    role: "Business Executive",
    content: "Elite Cuts transformed my look completely. The attention to detail and luxury experience is unmatched.",
    rating: 5,
    image: "professional+businessman+headshot",
  },
  {
    name: "David Chen",
    role: "Creative Director",
    content: "Best barbershop in the city. The atmosphere is incredible and the barbers are true artists.",
    rating: 5,
    image: "creative+professional+portrait",
  },
  {
    name: "James Rodriguez",
    role: "Entrepreneur",
    content: "I've been coming here for years. Consistent quality and exceptional service every single time.",
    rating: 5,
    image: "entrepreneur+professional+headshot",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty">Trusted by professionals who demand excellence</p>
        </motion.div>

        <div className="relative h-80 overflow-hidden">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="absolute inset-0"
              initial={{ opacity: 0, x: 100 }}
              animate={{
                opacity: index === currentIndex ? 1 : 0,
                x: index === currentIndex ? 0 : index < currentIndex ? -100 : 100,
              }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full bg-card border-border">
                <CardContent className="p-8 h-full flex flex-col justify-center text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-xl md:text-2xl text-foreground mb-6 text-pretty">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex items-center justify-center space-x-4">
                    <img
                      src={`/abstract-geometric-shapes.png?height=60&width=60&query=${testimonial.image}`}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? "bg-primary" : "bg-muted"}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
