"use client"

export function FeaturesShowcaseSection() {
  const showcaseImages = [
    {
      title: "AI Code Generation in Action",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
      description: "Watch AI generate production-ready code from natural language",
    },
    {
      title: "Smart Testing Dashboard",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      description: "Comprehensive testing suite with intelligent insights",
    },
    {
      title: "Deployment Pipeline",
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=600&fit=crop",
      description: "One-click deployment to any cloud platform",
    },
  ]

  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            See TechFlow in <span className="gradient-text">action</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {showcaseImages.map((item, index) => (
            <div
              key={item.title}
              className="glassmorphism rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
