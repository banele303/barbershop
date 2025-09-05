"use client"
import {
  Calendar,
  CreditCard,
  Users,
  BarChart3,
  Smartphone,
  Shield,
  Zap,
  Globe,
  MessageSquare,
  Star,
  TrendingUp,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { Button } from "@/components/ui/button"
import { MagneticButton } from "@/components/animations/magnetic-button"

const features = [
  {
    icon: Calendar,
    title: "Smart Booking System",
    description:
      "Advanced appointment scheduling with real-time availability, automated reminders, and customer preferences.",
    benefits: ["24/7 online booking", "SMS & email reminders", "Recurring appointments", "Waitlist management"],
  },
  {
    icon: CreditCard,
    title: "Payment Processing",
    description:
      "Integrated South African payment gateways including Yoco, PayFast, and SnapScan for seamless transactions.",
    benefits: ["Multiple payment methods", "Secure transactions", "Instant receipts", "Refund management"],
  },
  {
    icon: Users,
    title: "Customer Management",
    description: "Complete CRM system to track customer history, preferences, and build lasting relationships.",
    benefits: ["Customer profiles", "Service history", "Loyalty programs", "Birthday reminders"],
  },
  {
    icon: BarChart3,
    title: "Business Analytics",
    description: "Comprehensive reporting and insights to help you make data-driven decisions for your barbershop.",
    benefits: ["Revenue tracking", "Popular services", "Peak hours analysis", "Staff performance"],
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description: "Fully responsive design that works perfectly on all devices, ensuring customers can book anywhere.",
    benefits: ["Mobile-first design", "Touch-friendly interface", "Fast loading", "Offline capabilities"],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Bank-level security with POPIA compliance to protect your business and customer data.",
    benefits: ["SSL encryption", "POPIA compliant", "Regular backups", "Fraud protection"],
  },
  {
    icon: MessageSquare,
    title: "Communication Tools",
    description: "Automated messaging system to keep customers informed and engaged with your barbershop.",
    benefits: ["SMS notifications", "Email marketing", "Review requests", "Promotional campaigns"],
  },
  {
    icon: Globe,
    title: "SEO Optimization",
    description: "Built-in SEO tools to help your barbershop rank higher on Google and attract more local customers.",
    benefits: ["Local SEO", "Google My Business", "Schema markup", "Site speed optimization"],
  },
]

const integrations = [
  { name: "Yoco", logo: "💳", description: "Payment processing" },
  { name: "PayFast", logo: "💰", description: "Online payments" },
  { name: "SnapScan", logo: "📱", description: "QR code payments" },
  { name: "Google Calendar", logo: "📅", description: "Calendar sync" },
  { name: "WhatsApp Business", logo: "💬", description: "Customer communication" },
  { name: "Google My Business", logo: "🏪", description: "Local listings" },
  { name: "Facebook", logo: "📘", description: "Social media" },
  { name: "Instagram", logo: "📸", description: "Photo sharing" },
]

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
        <div className="container mx-auto px-4 relative">
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                <Zap className="w-4 h-4 mr-2" />
                Powerful Features
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Everything Your Barbershop Needs
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                From online booking to payment processing, our comprehensive platform includes all the tools you need to
                run a successful barbershop business.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 0.1}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm">
                          <Star className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Seamless Integrations</h2>
              <p className="text-xl text-muted-foreground">Connect with the tools you already use and love</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {integrations.map((integration, index) => (
              <ScrollReveal key={integration.name} delay={index * 0.1}>
                <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="text-3xl mb-3">{integration.logo}</div>
                    <h3 className="font-semibold mb-1">{integration.name}</h3>
                    <p className="text-sm text-muted-foreground">{integration.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <TrendingUp className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Modernize Your Barbershop?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join the digital revolution and give your customers the experience they deserve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton>
                  <Button size="lg" className="px-8">
                    Start Free Trial
                  </Button>
                </MagneticButton>
                <MagneticButton>
                  <Button size="lg" variant="outline" className="px-8 bg-transparent">
                    View Demo
                  </Button>
                </MagneticButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
