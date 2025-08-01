"use client"

import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function BlogPostsSection() {
  const posts = [
    {
      title: "The Future of AI-Powered Development",
      excerpt:
        "Exploring how artificial intelligence is transforming the way we build software and what it means for developers.",
      author: "Alex Chen",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "AI Development",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop",
      featured: true,
    },
    {
      title: "Building Scalable Applications with TechFlow",
      excerpt:
        "A comprehensive guide to architecting and deploying scalable applications using our AI-powered platform.",
      author: "Sarah Rodriguez",
      date: "2024-01-12",
      readTime: "8 min read",
      category: "Tutorial",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop",
      featured: false,
    },
    {
      title: "Best Practices for AI Code Generation",
      excerpt: "Learn how to write effective prompts and get the most out of AI-generated code in your projects.",
      author: "Marcus Johnson",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Best Practices",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=200&fit=crop",
      featured: false,
    },
    {
      title: "Case Study: Reducing Development Time by 70%",
      excerpt: "How StartupCo used TechFlow to accelerate their product development and reach market faster.",
      author: "Emily Watson",
      date: "2024-01-08",
      readTime: "4 min read",
      category: "Case Study",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop",
      featured: false,
    },
    {
      title: "Security in AI-Generated Code",
      excerpt: "Understanding security considerations and best practices when working with AI-generated code.",
      author: "Alex Chen",
      date: "2024-01-05",
      readTime: "7 min read",
      category: "Security",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=200&fit=crop",
      featured: false,
    },
    {
      title: "Integrating TechFlow with Your CI/CD Pipeline",
      excerpt: "Step-by-step guide to incorporating AI-powered development tools into your existing workflows.",
      author: "Sarah Rodriguez",
      date: "2024-01-03",
      readTime: "9 min read",
      category: "DevOps",
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400&h=200&fit=crop",
      featured: false,
    },
  ]

  const categories = ["All", "AI Development", "Tutorial", "Best Practices", "Case Study", "Security", "DevOps"]

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
                      {new Date(post.date).toLocaleDateString()}
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
                      <span>{new Date(post.date).toLocaleDateString()}</span>
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
