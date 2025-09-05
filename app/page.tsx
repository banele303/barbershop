"use client"
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Gallery } from "@/components/gallery"
import { Testimonials } from "@/components/testimonials"
import { BookingForm } from "@/components/booking-form"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { OrbBackground } from "@/components/visuals/orb-background"
import { ScrollProgressBar } from "@/components/visuals/scroll-progress"
import { WhyChoose } from "@/components/why-choose"
import { FutureShowcase } from "@/components/future-showcase"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-clip">
      <ScrollProgressBar />
      <OrbBackground />
      <Navigation />
      <Hero />
      <WhyChoose />
      <Services />
      <FutureShowcase />
      <Gallery />
      <Testimonials />
      <BookingForm />
      <Contact />
      <Footer />
    </div>
  )
}
