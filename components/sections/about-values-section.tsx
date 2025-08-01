"use client"

import { Heart, Users, Zap, Shield } from "lucide-react"

export function AboutValuesSection() {
  const values = [
    {
      icon: Heart,
      title: "Developer-First",
      description: "Every decision we make is guided by what's best for developers and their workflow.",
    },
    {
      icon: Users,
      title: "Inclusive Innovation",
      description: "We believe great ideas come from diverse perspectives and inclusive collaboration.",
    },
    {
      icon: Zap,
      title: "Continuous Learning",
      description: "We're always learning, iterating, and improving based on user feedback and new technologies.",
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "We prioritize the security and privacy of our users' code and intellectual property.",
    },
  ]

  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Our <span className="gradient-text">Values</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The principles that guide everything we do at TechFlow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="glassmorphism rounded-2xl p-6 text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 w-fit mx-auto mb-4">
                <value.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
