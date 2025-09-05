"use client"
import { Check, Star, Zap, Crown, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { MagneticButton } from "@/components/animations/magnetic-button"
import { AnimatedCounter } from "@/components/animations/animated-counter"

const pricingTiers = [
  {
    name: "Essential",
    price: "R299",
    period: "/month",
    description: "Perfect for new barbershops getting started",
    icon: Zap,
    features: [
      "Online booking system",
      "Customer management",
      "Basic analytics",
      "Email notifications",
      "Mobile responsive design",
      "Social media integration",
      "24/7 support",
    ],
    popular: false,
    color: "from-slate-500 to-slate-600",
  },
  {
    name: "Professional",
    price: "R599",
    period: "/month",
    description: "Most popular choice for growing businesses",
    icon: Star,
    features: [
      "Everything in Essential",
      "Payment processing (Yoco, PayFast)",
      "Staff scheduling",
      "Inventory management",
      "Advanced analytics & reports",
      "SMS notifications",
      "Custom branding",
      "Multi-location support",
      "Loyalty program",
    ],
    popular: true,
    color: "from-primary to-cyan-600",
  },
  {
    name: "Enterprise",
    price: "R999",
    period: "/month",
    description: "Complete solution for established barbershops",
    icon: Crown,
    features: [
      "Everything in Professional",
      "AI-powered insights",
      "Custom integrations",
      "White-label solution",
      "Priority support",
      "Marketing automation",
      "Advanced POS system",
      "Franchise management",
      "Custom development",
    ],
    popular: false,
    color: "from-amber-500 to-orange-600",
  },
]

const addOns = [
  { name: "Professional Photography", price: "R2,500", description: "High-quality photos of your shop and team" },
  { name: "SEO Optimization", price: "R1,200", description: "Get found on Google with local SEO" },
  { name: "Social Media Setup", price: "R800", description: "Complete social media presence setup" },
  { name: "Custom Logo Design", price: "R1,500", description: "Professional logo and branding package" },
]

const stats = [
  { number: 500, label: "Happy Barbershops", suffix: "+" },
  { number: 98, label: "Customer Satisfaction", suffix: "%" },
  { number: 24, label: "Support Available", suffix: "/7" },
  { number: 15, label: "Years Experience", suffix: "+" },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
        <div className="container mx-auto px-4 relative">
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                <Sparkles className="w-4 h-4 mr-2" />
                Premium Barbershop Solutions
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Transform Your Barbershop Business
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Professional website templates designed specifically for South African barbers. Get everything you need
                to attract customers and grow your business.
              </p>
            </div>
          </ScrollReveal>

          {/* Stats */}
          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                  </div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Plan</h2>
              <p className="text-xl text-muted-foreground">
                All plans include a 14-day free trial. No setup fees. Cancel anytime.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <ScrollReveal key={tier.name} delay={index * 0.1}>
                <Card
                  className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                    tier.popular ? "ring-2 ring-primary scale-105" : "hover:scale-105"
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-secondary text-white text-center py-2 text-sm font-semibold">
                      Most Popular
                    </div>
                  )}

                  <CardHeader className={tier.popular ? "pt-12" : "pt-6"}>
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${tier.color} flex items-center justify-center mb-4`}
                    >
                      <tier.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{tier.name}</CardTitle>
                    <CardDescription>{tier.description}</CardDescription>
                    <div className="flex items-baseline mt-4">
                      <span className="text-4xl font-bold">{tier.price}</span>
                      <span className="text-muted-foreground ml-1">{tier.period}</span>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter>
                    <MagneticButton className="w-full">
                      <Button
                        className={`w-full ${tier.popular ? "bg-primary hover:bg-primary/90" : ""}`}
                        variant={tier.popular ? "default" : "outline"}
                      >
                        Start Free Trial
                      </Button>
                    </MagneticButton>
                  </CardFooter>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Add-ons</h2>
              <p className="text-xl text-muted-foreground">
                Take your barbershop to the next level with our professional services
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {addOns.map((addon, index) => (
              <ScrollReveal key={addon.name} delay={index * 0.1}>
                <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="text-lg">{addon.name}</CardTitle>
                    <div className="text-2xl font-bold text-primary">{addon.price}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{addon.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full bg-transparent">
                      Add to Plan
                    </Button>
                  </CardFooter>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Grow Your Barbershop?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join hundreds of successful barbershops across South Africa. Start your free trial today and see the
                difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton>
                  <Button size="lg" className="px-8">
                    Start Free Trial
                  </Button>
                </MagneticButton>
                <MagneticButton>
                  <Button size="lg" variant="outline" className="px-8 bg-transparent">
                    Schedule Demo
                  </Button>
                </MagneticButton>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                No credit card required • 14-day free trial • Cancel anytime
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
