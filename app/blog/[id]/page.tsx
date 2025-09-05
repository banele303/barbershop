"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Calendar, Clock, User, Share2, Heart, Bookmark, ArrowLeft, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

// Sample blog post data (in a real app, this would come from a CMS or API)
const blogPost = {
  id: 1,
  title: "The Art of the Perfect Fade: Mastering Modern Barbering Techniques",
  excerpt:
    "Discover the secrets behind creating flawless fades that have made Elite Cuts the premier destination for discerning gentlemen.",
  content: `
    <p>The fade haircut has become the cornerstone of modern barbering, representing both technical skill and artistic vision. At Elite Cuts, we've perfected this craft over years of dedicated practice and continuous learning.</p>
    
    <h2>Understanding the Fundamentals</h2>
    <p>A perfect fade requires more than just technical skill—it demands an understanding of head shape, hair texture, and personal style. Each client presents a unique canvas, and our master barbers approach every fade with this individualized perspective.</p>
    
    <h3>The Tools of Excellence</h3>
    <p>Professional-grade clippers are essential, but they're only as good as the hands that wield them. We use precision-engineered tools that allow for the subtle gradations that distinguish a good fade from a masterpiece.</p>
    
    <h2>Technique Breakdown</h2>
    <p>The fade process involves several critical stages:</p>
    <ul>
      <li><strong>Assessment:</strong> Understanding the client's hair type and desired outcome</li>
      <li><strong>Foundation:</strong> Creating the initial length guidelines</li>
      <li><strong>Blending:</strong> The artistry of seamless transitions</li>
      <li><strong>Refinement:</strong> Perfecting every detail</li>
    </ul>
    
    <h2>The Elite Cuts Difference</h2>
    <p>What sets our fades apart is our commitment to perfection. We don't rush the process—each fade receives the time and attention it deserves. Our barbers understand that a great fade isn't just about the technique; it's about creating a look that enhances the client's natural features and personal style.</p>
    
    <p>The result is more than just a haircut—it's a confidence boost that lasts long after you leave our chair.</p>
  `,
  author: "Marcus Johnson",
  authorRole: "Master Barber",
  authorBio:
    "With over 15 years of experience, Marcus has trained under some of the world's most renowned barbers and brings European techniques to Elite Cuts.",
  date: "2024-01-15",
  readTime: "8 min read",
  category: "Techniques",
  tags: ["Fade", "Barbering", "Techniques", "Professional"],
  image: "/placeholder.svg?height=600&width=1200&text=Perfect+Fade+Technique",
  views: 2847,
  likes: 156,
  shares: 43,
}

const relatedPosts = [
  {
    id: 2,
    title: "Seasonal Style Guide: Winter Grooming Essentials",
    image: "/placeholder.svg?height=200&width=300&text=Winter+Grooming",
    readTime: "6 min read",
  },
  {
    id: 5,
    title: "Beard Care Mastery: From Stubble to Statement Piece",
    image: "/placeholder.svg?height=200&width=300&text=Beard+Care",
    readTime: "9 min read",
  },
  {
    id: 6,
    title: "Classic Cuts Making a Comeback",
    image: "/placeholder.svg?height=200&width=300&text=Classic+Cuts",
    readTime: "6 min read",
  },
]

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const [isLiked, setIsLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Article Header */}
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/blog">
              <Button variant="ghost" className="mb-6 text-primary hover:bg-primary/10">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Button>
            </Link>

            <Badge className="bg-primary text-primary-foreground mb-4">{blogPost.category}</Badge>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance leading-tight">{blogPost.title}</h1>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>{blogPost.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>{new Date(blogPost.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>{blogPost.readTime}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye className="h-5 w-5" />
                <span>{blogPost.views} views</span>
              </div>
            </div>

            <div className="flex items-center justify-between mb-8">
              <div className="flex flex-wrap gap-2">
                {blogPost.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsLiked(!isLiked)}
                  className={isLiked ? "text-red-500 border-red-500" : ""}
                >
                  <Heart className={`h-4 w-4 mr-1 ${isLiked ? "fill-current" : ""}`} />
                  {blogPost.likes + (isLiked ? 1 : 0)}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={isBookmarked ? "text-primary border-primary" : ""}
                >
                  <Bookmark className={`h-4 w-4 ${isBookmarked ? "fill-current" : ""}`} />
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-1" />
                  Share
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <Image
                src={blogPost.image || "/placeholder.svg"}
                alt={blogPost.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
            {/* Main Content */}
            <motion.div className="lg:col-span-3" variants={fadeInUp} initial="initial" animate="animate">
              <div
                className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />

              <Separator className="my-12" />

              {/* Author Bio */}
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">{blogPost.author}</h3>
                      <p className="text-primary text-sm mb-3">{blogPost.authorRole}</p>
                      <p className="text-muted-foreground text-sm">{blogPost.authorBio}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              className="lg:col-span-1"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.3 }}
            >
              <div className="sticky top-32 space-y-8">
                {/* Related Posts */}
                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Related Articles</h3>
                    <div className="space-y-4">
                      {relatedPosts.map((post) => (
                        <Link key={post.id} href={`/blog/${post.id}`}>
                          <div className="group cursor-pointer">
                            <div className="relative aspect-video rounded-lg overflow-hidden mb-2">
                              <Image
                                src={post.image || "/placeholder.svg"}
                                alt={post.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <h4 className="text-sm font-medium group-hover:text-primary transition-colors duration-300 line-clamp-2">
                              {post.title}
                            </h4>
                            <p className="text-xs text-muted-foreground mt-1">{post.readTime}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* CTA */}
                <Card className="border-primary/20 bg-primary/5">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold mb-2">Ready to Experience Elite Cuts?</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Book your appointment and discover the difference our expertise makes.
                    </p>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Book Now</Button>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
