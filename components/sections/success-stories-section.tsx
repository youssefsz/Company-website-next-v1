"use client"

export function SuccessStoriesSection() {
  const stories = [
    {
      company: "TechStartup Inc.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      result: "70% faster development",
      description: "Reduced time-to-market from 6 months to 2 months using AI-powered code generation",
      industry: "FinTech",
    },
    {
      company: "Global Enterprise",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
      result: "50% fewer bugs",
      description: "Improved code quality and reduced production issues with automated testing",
      industry: "E-commerce",
    },
    {
      company: "Innovation Labs",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
      result: "3x team productivity",
      description: "Enabled small team to deliver enterprise-scale applications",
      industry: "Healthcare",
    },
  ]

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            <span className="gradient-text">Success stories</span> from our customers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how companies are transforming their development process with TechFlow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div
              key={story.company}
              className="glassmorphism rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img src={story.image || "/placeholder.svg"} alt={story.company} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="inline-block px-2 py-1 bg-primary/10 border border-primary/20 rounded text-primary text-xs font-medium mb-3">
                  {story.industry}
                </div>
                <h3 className="text-xl font-semibold mb-2">{story.company}</h3>
                <div className="text-2xl font-bold text-primary mb-3">{story.result}</div>
                <p className="text-muted-foreground">{story.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
