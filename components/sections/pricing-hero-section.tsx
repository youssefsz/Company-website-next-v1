"use client"

export function PricingHeroSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-dark/5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Simple, <span className="gradient-text">transparent pricing</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Start free and scale as you grow. No hidden fees, no surprises. Cancel or upgrade anytime.
          </p>

          <div className="inline-flex items-center bg-muted/50 rounded-full p-1 mb-8">
            <button className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium">Monthly</button>
            <button className="px-6 py-2 rounded-full text-muted-foreground font-medium">Annual (Save 20%)</button>
          </div>
        </div>
      </div>
    </section>
  )
}
