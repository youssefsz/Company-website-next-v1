"use client"

export function TechnologyStackSection() {
  const technologies = [
    {
      name: "Artificial Intelligence",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      description: "Advanced AI models for code generation",
    },
    {
      name: "Cloud Infrastructure",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
      description: "Scalable cloud-native architecture",
    },
    {
      name: "Developer Tools",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop",
      description: "Modern development environment",
    },
    {
      name: "Security & Compliance",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
      description: "Enterprise-grade security measures",
    },
  ]

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Built on <span className="gradient-text">cutting-edge technology</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform leverages the latest advances in AI, cloud computing, and developer tooling.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="glassmorphism rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img src={tech.image || "/placeholder.svg"} alt={tech.name} className="w-full h-40 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{tech.name}</h3>
                <p className="text-muted-foreground text-sm">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
