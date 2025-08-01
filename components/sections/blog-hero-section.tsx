"use client"

export function BlogHeroSection() {
  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            TechFlow <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Insights, tutorials, and updates from the world of AI-powered development. Stay up to date with the latest
            trends and best practices.
          </p>
        </div>
      </div>
    </section>
  )
}
