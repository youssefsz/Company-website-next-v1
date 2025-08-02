"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"

// Client-side only date formatter to prevent hydration mismatches
function ClientDateFormatter({ date }: { date: string }) {
  const [formattedDate, setFormattedDate] = useState<string>("")

  useEffect(() => {
    setFormattedDate(new Date(date).toLocaleDateString())
  }, [date])

  return <span>{formattedDate}</span>
}

export function BlogPostsSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const categories = ["All", "Development", "AI", "Productivity", "Tutorials", "News"]

  const posts = [
    {
      title: "Building AI-Powered Applications with TechFlow",
      excerpt: "Learn how to leverage our AI platform to build intelligent applications that adapt to user needs and scale automatically.",
      author: "Sarah Chen",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "AI",
      featured: true,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop&auto=format",
    },
    {
      title: "The Future of Software Development",
      excerpt: "Explore how AI is transforming the way we write, test, and deploy code in modern development workflows.",
      author: "Michael Rodriguez",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "Development",
      featured: false,
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=400&fit=crop&auto=format",
    },
    {
      title: "10 Productivity Tips for Developers",
      excerpt: "Discover proven techniques to boost your coding productivity and ship features faster than ever before.",
      author: "Emily Watson",
      date: "2024-01-10",
      readTime: "5 min read",
      category: "Productivity",
      featured: false,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop&auto=format",
    },
    {
      title: "Getting Started with TechFlow API",
      excerpt: "A comprehensive guide to integrating our powerful API into your existing applications and workflows.",
      author: "David Kim",
      date: "2024-01-08",
      readTime: "12 min read",
      category: "Tutorials",
      featured: false,
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=400&fit=crop&auto=format",
    },
    {
      title: "Understanding AI Code Generation",
      excerpt: "Deep dive into how our AI models understand context and generate high-quality, production-ready code.",
      author: "Lisa Thompson",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "AI",
      featured: false,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop&auto=format",
    },
    {
      title: "TechFlow Platform Updates - January 2024",
      excerpt: "Stay up to date with the latest features, improvements, and bug fixes in our development platform.",
      author: "TechFlow Team",
      date: "2024-01-03",
      readTime: "4 min read",
      category: "News",
      featured: false,
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=400&fit=crop&auto=format",
    },
  ]

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              size="sm"
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        {posts
          .filter((post) => post.featured)
          .map((post) => (
            <div key={post.title} className="glassmorphism rounded-2xl p-8 mb-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4">
                    Featured
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
                  <p className="text-muted-foreground mb-6">{post.excerpt}</p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                    <span>{post.author}</span>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {mounted && <ClientDateFormatter date={post.date} />}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <Button asChild>
                    <Link href={`/blog/${post.title.toLowerCase().replace(/\s+/g, "-")}`}>
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div>
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          ))}

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts
            .filter((post) => !post.featured)
            .map((post, index) => (
              <article
                key={post.title}
                className="glassmorphism rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="inline-block px-2 py-1 bg-primary/10 border border-primary/20 rounded text-primary text-xs font-medium mb-3">
                    {post.category}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 hover:text-primary transition-colors">
                    <Link href={`/blog/${post.title.toLowerCase().replace(/\s+/g, "-")}`}>{post.title}</Link>
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{post.author}</span>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-3 w-3" />
                      {mounted && <ClientDateFormatter date={post.date} />}
                    </div>
                  </div>
                </div>
              </article>
            ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Posts
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
