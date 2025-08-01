"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, TestTube, Rocket, Users } from "lucide-react"
import Link from "next/link"

export function FeaturesHeroSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-dark/5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Powerful Features for <span className="gradient-text">Modern Development</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Everything you need to build, test, and deploy software faster than ever before. Our AI-powered platform
            handles the complexity so you can focus on innovation.
          </p>
          <Button size="lg" asChild>
            <Link href="#signup">
              Start Building Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        {/* Feature Icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-2xl mx-auto">
          {[
            { icon: Code2, label: "AI Code Generation" },
            { icon: TestTube, label: "Smart Testing" },
            { icon: Rocket, label: "One-Click Deploy" },
            { icon: Users, label: "Team Collaboration" },
          ].map((item, index) => (
            <div key={item.label} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="glassmorphism rounded-2xl p-6 mb-4">
                <item.icon className="h-8 w-8 text-primary mx-auto" />
              </div>
              <p className="text-sm text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
