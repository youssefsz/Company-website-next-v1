"use client"

export function OfficeLocationsSection() {
  const offices = [
    {
      city: "San Francisco",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      address: "123 Market Street, Suite 100",
      description: "Our headquarters in the heart of Silicon Valley",
    },
    {
      city: "New York",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&h=400&fit=crop",
      address: "456 Broadway, Floor 20",
      description: "East coast operations and business development",
    },
  ]

  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Our <span className="gradient-text">locations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're building the future of development from coast to coast.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {offices.map((office, index) => (
            <div
              key={office.city}
              className="glassmorphism rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={office.image || "/placeholder.svg"}
                alt={`${office.city} office`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{office.city}</h3>
                <p className="text-muted-foreground mb-2">{office.address}</p>
                <p className="text-sm text-muted-foreground">{office.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
