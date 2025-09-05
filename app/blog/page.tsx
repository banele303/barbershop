"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, User, Search, TrendingUp, Scissors, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
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

const blogPosts = [
  {
    id: 1,
    title: "The Art of the Perfect Fade: Mastering Modern Barbering Techniques",
    excerpt:
      "Discover the secrets behind creating flawless fades that have made Elite Cuts the premier destination for discerning gentlemen.",
    content:
      "A comprehensive guide to understanding the nuances of fade techniques, from skin fades to high fades, and everything in between...",
    author: "Marcus Johnson",
    authorRole: "Master Barber",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Techniques",
    tags: ["Fade", "Barbering", "Techniques", "Professional"],
    image: "/placeholder.svg?height=400&width=600&text=Perfect+Fade+Technique",
    featured: true,
    views: 2847,
    likes: 156,
  },
  {
    id: 2,
    title: "Seasonal Style Guide: Winter Grooming Essentials for the Modern Gentleman",
    excerpt:
      "As temperatures drop, your grooming routine should adapt. Learn how to maintain impeccable style throughout the winter months.",
    content:
      "Winter brings unique challenges for maintaining your appearance. From combating dry skin to choosing the right products...",
    author: "David Rodriguez",
    authorRole: "Style Consultant",
    date: "2024-01-12",
    readTime: "6 min read",
    category: "Style Guide",
    tags: ["Winter", "Grooming", "Style", "Skincare"],
    image: "/placeholder.svg?height=400&width=600&text=Winter+Grooming+Guide",
    featured: true,
    views: 1923,
    likes: 89,
  },
  {
    id: 3,
    title: "Behind the Chair: A Day in the Life at Elite Cuts",
    excerpt:
      "Step into our world and discover what makes Elite Cuts more than just a barbershop – it's a sanctuary of style and sophistication.",
    content:
      "From the moment we unlock our doors at 8 AM to the final client of the evening, every day at Elite Cuts is a testament to our commitment...",
    author: "Anthony Chen",
    authorRole: "Senior Barber",
    date: "2024-01-10",
    readTime: "5 min read",
    category: "Shop News",
    tags: ["Behind the Scenes", "Elite Cuts", "Culture", "Team"],
    image: "/placeholder.svg?height=400&width=600&text=Behind+the+Chair",
    featured: false,
    views: 1456,
    likes: 67,
  },
  {
    id: 4,
    title: "The Psychology of a Great Haircut: How Your Style Affects Your Confidence",
    excerpt:
      "Explore the profound connection between personal grooming and self-confidence, backed by psychology and our years of experience.",
    content:
      "There's something transformative about a great haircut. It's not just about looking good – it's about feeling unstoppable...",
    author: "Dr. Sarah Mitchell",
    authorRole: "Guest Writer",
    date: "2024-01-08",
    readTime: "7 min read",
    category: "Lifestyle",
    tags: ["Psychology", "Confidence", "Self-Care", "Wellness"],
    image: "/placeholder.svg?height=400&width=600&text=Psychology+of+Style",
    featured: false,
    views: 2134,
    likes: 98,
  },
  {
    id: 5,
    title: "Beard Care Mastery: From Stubble to Statement Piece",
    excerpt:
      "Whether you're growing your first beard or maintaining a masterpiece, our comprehensive guide covers everything you need to know.",
    content:
      "A well-maintained beard is a work of art. It requires patience, the right tools, and expert knowledge to achieve perfection...",
    author: "Robert Garcia",
    authorRole: "Beard Specialist",
    date: "2024-01-05",
    readTime: "9 min read",
    category: "Grooming",
    tags: ["Beard Care", "Grooming", "Maintenance", "Products"],
    image: "/placeholder.svg?height=400&width=600&text=Beard+Care+Mastery",
    featured: true,
    views: 3201,
    likes: 187,
  },
  {
    id: 6,
    title: "Classic Cuts Making a Comeback: Timeless Styles for Modern Men",
    excerpt:
      "Discover how traditional barbering techniques are being reimagined for today's style-conscious gentleman.",
    content:
      "Fashion is cyclical, and nowhere is this more evident than in men's grooming. Classic cuts from decades past are experiencing...",
    author: "James Wilson",
    authorRole: "Style Director",
    date: "2024-01-03",
    readTime: "6 min read",
    category: "Trends",
    tags: ["Classic Cuts", "Trends", "Vintage", "Modern"],
    image: "/placeholder.svg?height=400&width=600&text=Classic+Cuts+Comeback",
    featured: false,
    views: 1789,
    likes: 76,
  },
  {
    id: 7,
    title: "The Elite Cuts Experience: What Sets Us Apart",
    excerpt:
      "From our premium products to our master craftsmen, discover the elements that make Elite Cuts the pinnacle of barbering excellence.",
    content:
      "At Elite Cuts, we believe that every client deserves an experience that transcends the ordinary. Our commitment to excellence...",
    author: "Michael Thompson",
    authorRole: "Founder & Master Barber",
    date: "2024-01-01",
    readTime: "4 min read",
    category: "Shop News",
    tags: ["Elite Cuts", "Experience", "Quality", "Service"],
    image: "/placeholder.svg?height=400&width=600&text=Elite+Cuts+Experience",
    featured: false,
    views: 987,
    likes: 45,
  },
  {
    id: 8,
    title: "Product Spotlight: The Tools of the Trade",
    excerpt:
      "Get an inside look at the premium tools and products that our master barbers use to create their signature looks.",
    content:
      "The difference between a good haircut and a great one often lies in the tools. At Elite Cuts, we invest in only the finest...",
    author: "Marcus Johnson",
    authorRole: "Master Barber",
    date: "2023-12-28",
    readTime: "5 min read",
    category: "Products",
    tags: ["Tools", "Products", "Professional", "Quality"],
    image: "/placeholder.svg?height=400&width=600&text=Professional+Tools",
    featured: false,
    views: 1234,
    likes: 58,
  },
]

const categories = [
  { id: "all", label: "All Posts", count: blogPosts.length },
  { id: "featured", label: "Featured", count: blogPosts.filter((post) => post.featured).length },
  { id: "techniques", label: "Techniques", count: blogPosts.filter((post) => post.category === "Techniques").length },
  {
    id: "style-guide",
    label: "Style Guide",
    count: blogPosts.filter((post) => post.category === "Style Guide").length,
  },
  { id: "grooming", label: "Grooming", count: blogPosts.filter((post) => post.category === "Grooming").length },
  { id: "trends", label: "Trends", count: blogPosts.filter((post) => post.category === "Trends").length },
  { id: "shop-news", label: "Shop News", count: blogPosts.filter((post) => post.category === "Shop News").length },
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "all" ||
      (selectedCategory === "featured" && post.featured) ||
      post.category.toLowerCase().replace(" ", "-") === selectedCategory

    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    return matchesCategory && matchesSearch
  })

  const featuredPosts = blogPosts.filter((post) => post.featured).slice(0, 3)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
        <Image
          src="/placeholder.svg?height=1080&width=1920&text=Elite+Cuts+Blog"
          alt="Elite Cuts Blog"
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
            <TrendingUp className="h-5 w-5 text-primary" />
            <span className="text-primary font-medium">Style & Insights</span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            The Elite <span className="text-primary">Journal</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Discover the latest trends, techniques, and insights from the world of premium barbering and men's grooming.
          </motion.p>

          <motion.div
            className="max-w-md mx-auto relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-background/50 backdrop-blur-sm border-primary/20 focus:border-primary"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Articles */}
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
              Featured Articles
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Editor's <span className="text-primary">Picks</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Our most popular and insightful articles, handpicked by our team of experts.
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {featuredPosts.map((post, index) => (
              <motion.div key={post.id} variants={fadeInUp}>
                <Card className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 h-full">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">Featured</Badge>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{post.author}</span>
                      </div>
                      <Link href={`/blog/${post.id}`}>
                        <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10">
                          Read More
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

      {/* Blog Categories & Posts */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap gap-2 justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
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
          </motion.div>

          {/* Blog Posts Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {filteredPosts.map((post, index) => (
              <motion.div key={post.id} variants={fadeInUp}>
                <Card className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 h-full">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <Badge variant="secondary" className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm">
                      {post.category}
                    </Badge>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 line-clamp-3 text-sm">{post.excerpt}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                        <span>{post.views} views</span>
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3" />
                          <span>{post.likes}</span>
                        </div>
                      </div>
                    </div>

                    <Link href={`/blog/${post.id}`} className="block mt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-primary text-primary hover:bg-primary/10 bg-transparent"
                      >
                        Read Full Article
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-2xl mx-auto text-center bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Scissors className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4 text-balance">
              Stay Sharp with <span className="text-primary">Elite Insights</span>
            </h2>
            <p className="text-muted-foreground mb-6 text-balance">
              Get the latest grooming tips, style trends, and exclusive content delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="flex-1 bg-background border-primary/20 focus:border-primary"
              />
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Subscribe</Button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
