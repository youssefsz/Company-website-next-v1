"use client"

export function AboutHeroSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-dark/5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Building the future of <span className="gradient-text">software development</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            We believe that every developer should have access to AI-powered tools that make building software as
            intuitive as having a conversation.
          </p>
        </div>
      </div>
    </section>
  )
}
