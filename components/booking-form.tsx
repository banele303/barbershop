"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock, User, Phone } from "lucide-react"

export function BookingForm() {
  return (
    <section id="book-now" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Book Your <span className="text-primary">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty">Reserve your appointment and step into luxury</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-card border-border">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Schedule Your Appointment</CardTitle>
              <CardDescription>Fill out the form below and we'll confirm your booking within 24 hours</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div className="space-y-2" whileFocus={{ scale: 1.02 }}>
                  <Label htmlFor="name" className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-primary" />
                    <span>Full Name</span>
                  </Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    className="bg-input border-border focus:border-primary transition-colors"
                  />
                </motion.div>

                <motion.div className="space-y-2" whileFocus={{ scale: 1.02 }}>
                  <Label htmlFor="phone" className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <span>Phone Number</span>
                  </Label>
                  <Input
                    id="phone"
                    placeholder="(555) 123-4567"
                    className="bg-input border-border focus:border-primary transition-colors"
                  />
                </motion.div>

                <motion.div className="space-y-2" whileFocus={{ scale: 1.02 }}>
                  <Label className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>Preferred Date</span>
                  </Label>
                  <Input type="date" className="bg-input border-border focus:border-primary transition-colors" />
                </motion.div>

                <motion.div className="space-y-2" whileFocus={{ scale: 1.02 }}>
                  <Label className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>Preferred Time</span>
                  </Label>
                  <Select>
                    <SelectTrigger className="bg-input border-border focus:border-primary">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="9:00">9:00 AM</SelectItem>
                      <SelectItem value="10:00">10:00 AM</SelectItem>
                      <SelectItem value="11:00">11:00 AM</SelectItem>
                      <SelectItem value="12:00">12:00 PM</SelectItem>
                      <SelectItem value="13:00">1:00 PM</SelectItem>
                      <SelectItem value="14:00">2:00 PM</SelectItem>
                      <SelectItem value="15:00">3:00 PM</SelectItem>
                      <SelectItem value="16:00">4:00 PM</SelectItem>
                      <SelectItem value="17:00">5:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>
              </div>

              <motion.div className="space-y-2" whileFocus={{ scale: 1.02 }}>
                <Label>Service</Label>
                <Select>
                  <SelectTrigger className="bg-input border-border focus:border-primary">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="haircut">Premium Haircut - R850</SelectItem>
                    <SelectItem value="beard">Beard Trim & Shape - R650</SelectItem>
                    <SelectItem value="full">The Full Experience - R1,350</SelectItem>
                    <SelectItem value="vip">VIP Treatment - R2,200</SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>

              <motion.div className="space-y-2" whileFocus={{ scale: 1.02 }}>
                <Label htmlFor="notes">Special Requests</Label>
                <Textarea
                  id="notes"
                  placeholder="Any special requests or notes for your appointment..."
                  className="bg-input border-border focus:border-primary transition-colors min-h-20"
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6"
                  size="lg"
                >
                  Book Appointment
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
