"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scissors, Star, Grid3X3, List } from "lucide-react"
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
      staggerChildren: 0.05,
    },
  },
}

const portfolioItems = [
  {
    id: 1,
    title: "Executive Classic Cut",
    category: "haircuts",
    style: "Classic",
    client: "Business Professional",
    description:
      "A timeless executive cut that exudes confidence and sophistication. Perfect for the modern businessman.",
    image: "/placeholder.svg?key=exec1",
    beforeImage: "/placeholder.svg?key=exec1-before",
    barber: "Marcus Johnson",
    rating: 5,
    tags: ["Executive", "Classic", "Professional"],
    featured: true,
  },
  {
    id: 2,
    title: "Modern Fade Mastery",
    category: "haircuts",
    style: "Modern",
    client: "Creative Professional",
    description:
      "A precision fade that showcases technical skill and contemporary styling. Clean lines meet artistic flair.",
    image: "/placeholder.svg?key=fade1",
    beforeImage: "/placeholder.svg?key=fade1-before",
    barber: "David Rodriguez",
    rating: 5,
    tags: ["Fade", "Modern", "Precision"],
    featured: true,
  },
  {
    id: 3,
    title: "Distinguished Beard Sculpt",
    category: "beards",
    style: "Classic",
    client: "Gentleman",
    description: "Expert beard shaping that enhances facial structure and creates a distinguished, refined appearance.",
    image: "/placeholder.svg?key=beard-sculpt1",
    beforeImage: "/placeholder.svg?key=beard-sculpt1-before",
    barber: "Anthony Chen",
    rating: 5,
    tags: ["Beard", "Sculpting", "Distinguished"],
    featured: false,
  },
  {
    id: 4,
    title: "Textured Crop Innovation",
    category: "haircuts",
    style: "Modern",
    client: "Young Professional",
    description:
      "A contemporary textured crop that adds movement and personality while maintaining professional appeal.",
    image: "/placeholder.svg?key=crop1",
    beforeImage: "/placeholder.svg?key=crop1-before",
    barber: "James Wilson",
    rating: 5,
    tags: ["Textured", "Crop", "Contemporary"],
    featured: false,
  },
  {
    id: 5,
    title: "Vintage Pompadour Revival",
    category: "haircuts",
    style: "Vintage",
    client: "Style Enthusiast",
    description:
      "A masterfully crafted pompadour that pays homage to classic barbering while feeling fresh and modern.",
    image: "/placeholder.svg?key=pompadour1",
    beforeImage: "/placeholder.svg?key=pompadour1-before",
    barber: "Marcus Johnson",
    rating: 5,
    tags: ["Pompadour", "Vintage", "Classic"],
    featured: true,
  },
  {
    id: 6,
    title: "Precision Beard Trim",
    category: "beards",
    style: "Modern",
    client: "Tech Executive",
    description:
      "Clean, precise beard trimming that maintains natural growth patterns while creating sharp, defined lines.",
    image: "/placeholder.svg?key=beard-trim1",
    beforeImage: "/placeholder.svg?key=beard-trim1-before",
    barber: "Robert Garcia",
    rating: 5,
    tags: ["Precision", "Trim", "Executive"],
    featured: false,
  },
  {
    id: 7,
    title: "Artistic Undercut Design",
    category: "haircuts",
    style: "Modern",
    client: "Creative Director",
    description: "Bold undercut styling with artistic flair, perfect for those who want to make a statement.",
    image: "/placeholder.svg?key=undercut1",
    beforeImage: "/placeholder.svg?key=undercut1-before",
    barber: "Michael Thompson",
    rating: 5,
    tags: ["Undercut", "Artistic", "Bold"],
    featured: false,
  },
  {
    id: 8,
    title: "Gentleman's Full Service",
    category: "complete",
    style: "Classic",
    client: "Distinguished Gentleman",
    description:
      "Complete transformation including haircut, beard styling, and grooming. The full Elite Cuts experience.",
    image: "/placeholder.svg?key=complete1",
    beforeImage: "/placeholder.svg?key=complete1-before",
    barber: "Marcus Johnson",
    rating: 5,
    tags: ["Complete", "Transformation", "Luxury"],
    featured: true,
  },
  {
    id: 9,
    title: "Modern Quiff Perfection",
    category: "haircuts",
    style: "Modern",
    client: "Fashion Forward",
    description: "A perfectly styled quiff that balances volume and texture for a sophisticated yet edgy look.",
    image: "/placeholder.svg?key=quiff1",
    beforeImage: "/placeholder.svg?key=quiff1-before",
    barber: "David Rodriguez",
    rating: 5,
    tags: ["Quiff", "Volume", "Sophisticated"],
    featured: false,
  },
  {
    id: 10,
    title: "Classic Beard & Mustache",
    category: "beards",
    style: "Vintage",
    client: "Traditional Gentleman",
    description:
      "Traditional beard and mustache styling that honors classic grooming traditions with modern precision.",
    image: "/placeholder.svg?key=classic-beard1",
    beforeImage: "/placeholder.svg?key=classic-beard1-before",
    barber: "Anthony Chen",
    rating: 5,
    tags: ["Traditional", "Mustache", "Heritage"],
    featured: false,
  },
  {
    id: 11,
    title: "Slicked Back Elegance",
    category: "haircuts",
    style: "Classic",
    client: "Business Owner",
    description: "Timeless slicked-back styling that exudes confidence and sophistication for any formal occasion.",
    image: "/placeholder.svg?key=slicked1",
    beforeImage: "/placeholder.svg?key=slicked1-before",
    barber: "Robert Garcia",
    rating: 5,
    tags: ["Slicked", "Elegant", "Formal"],
    featured: false,
  },
  {
    id: 12,
    title: "Contemporary Buzz Cut",
    category: "haircuts",
    style: "Modern",
    client: "Minimalist",
    description: "Clean, precise buzz cut with subtle variations in length that create depth and character.",
    image: "/placeholder.svg?key=buzz1",
    beforeImage: "/placeholder.svg?key=buzz1-before",
    barber: "Michael Thompson",
    rating: 5,
    tags: ["Buzz Cut", "Clean", "Minimalist"],
    featured: false,
  },
]

const categories = [
  { id: "all", label: "All Work", count: portfolioItems.length },
  { id: "featured", label: "Featured", count: portfolioItems.filter((item) => item.featured).length },
  { id: "haircuts", label: "Haircuts", count: portfolioItems.filter((item) => item.category === "haircuts").length },
  { id: "beards", label: "Beard Work", count: portfolioItems.filter((item) => item.category === "beards").length },
  {
    id: "complete",
    label: "Complete Transformations",
    count: portfolioItems.filter((item) => item.category === "complete").length,
  },
]

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedItem, setSelectedItem] = useState<number | null>(null)

  const filteredItems = portfolioItems.filter((item) => {
    if (selectedCategory === "all") return true
    if (selectedCategory === "featured") return item.featured
    return item.category === selectedCategory
  })

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
        <Image
          src="/placeholder.svg?key=portfolio-hero"
          alt="Elite Cuts Portfolio"
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
            <span className="text-primary font-medium">Master Craftsmanship</span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Our <span className="text-primary">Portfolio</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Discover the artistry and precision that defines Elite Cuts. Each transformation tells a story of
            craftsmanship, style, and attention to detail.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Book Your Transformation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 bg-transparent"
            >
              View Our Services
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Portfolio Filter & Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Filter Controls */}
          <motion.div
            className="flex flex-col lg:flex-row items-center justify-between mb-12 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={
                    selectedCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "border-primary text-primary hover:bg-primary/10"
                  }
                >
                  {category.label}
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className={
                  viewMode === "grid"
                    ? "bg-primary text-primary-foreground"
                    : "border-primary text-primary hover:bg-primary/10"
                }
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
                className={
                  viewMode === "list"
                    ? "bg-primary text-primary-foreground"
                    : "border-primary text-primary hover:bg-primary/10"
                }
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          {/* Portfolio Grid */}
          {viewMode === "grid" ? (
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {filteredItems.map((item, index) => (
                <motion.div key={item.id} variants={fadeInUp}>
                  <Card className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer">
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {item.featured && (
                        <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">Featured</Badge>
                      )}

                      <div className="absolute bottom-3 left-3 right-3 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                            <p className="text-xs text-muted-foreground">by {item.barber}</p>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3 text-primary fill-current" />
                            <span className="text-xs text-primary">{item.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* List View */
            <motion.div
              className="space-y-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {filteredItems.map((item, index) => (
                <motion.div key={item.id} variants={fadeInUp}>
                  <Card className="border-border/50 hover:border-primary/50 transition-colors duration-300">
                    <CardContent className="p-6">
                      <div className="grid lg:grid-cols-4 gap-6 items-center">
                        <div className="relative aspect-square lg:aspect-video overflow-hidden rounded-lg">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="lg:col-span-2 space-y-3">
                          <div className="flex items-center space-x-2">
                            <h3 className="text-xl font-semibold">{item.title}</h3>
                            {item.featured && <Badge className="bg-primary text-primary-foreground">Featured</Badge>}
                          </div>
                          <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="text-center lg:text-right space-y-2">
                          <div className="flex items-center justify-center lg:justify-end space-x-1">
                            <Star className="h-4 w-4 text-primary fill-current" />
                            <span className="font-semibold text-primary">{item.rating}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">by {item.barber}</p>
                          <p className="text-xs text-muted-foreground">{item.client}</p>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-primary text-primary hover:bg-primary/10 bg-transparent"
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Featured Transformations */}
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
              Before & After
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Amazing <span className="text-primary">Transformations</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              See the incredible transformations our master barbers create every day.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {filteredItems
              .filter((item) => item.featured)
              .slice(0, 4)
              .map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden border-border/50 hover:border-primary/50 transition-colors duration-300">
                    <CardContent className="p-0">
                      <div className="grid grid-cols-2">
                        <div className="relative aspect-square">
                          <Image
                            src={item.beforeImage || "/placeholder.svg"}
                            alt={`${item.title} - Before`}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute bottom-2 left-2">
                            <Badge variant="secondary" className="text-xs">
                              Before
                            </Badge>
                          </div>
                        </div>
                        <div className="relative aspect-square">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={`${item.title} - After`}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute bottom-2 right-2">
                            <Badge className="bg-primary text-primary-foreground text-xs">After</Badge>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                        <div className="flex items-center justify-between">
                          <p className="text-xs text-muted-foreground">by {item.barber}</p>
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3 text-primary fill-current" />
                            <span className="text-xs text-primary">{item.rating}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>
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
              Ready for Your <span className="text-primary">Transformation?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              Join the hundreds of satisfied clients who trust Elite Cuts for their grooming needs. Book your
              appointment today and become part of our portfolio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Book Your Appointment
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 bg-transparent"
              >
                View Our Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
