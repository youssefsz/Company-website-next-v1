"use client"

import { BentoCard } from "@/components/shared/bento-card"
import { Code2, TestTube, Rocket, Users, BarChart3, Sparkles, Eye } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      title: "AI Code Generation",
      description:
        "Write production-ready code with natural language prompts. Support for Python, JavaScript, TypeScript, Go, and Rust.",
      icon: Code2,
      gradient: "from-blue-500/20 to-cyan-500/20",
      size: "large",
    },
    {
      title: "Smart Testing",
      description: "Automated test generation that catches bugs before they reach production.",
      icon: TestTube,
      gradient: "from-green-500/20 to-emerald-500/20",
      size: "medium",
    },
    {
      title: "One-Click Deploy",
      description: "Deploy to any cloud platform with intelligent infrastructure management.",
      icon: Rocket,
      gradient: "from-purple-500/20 to-pink-500/20",
      size: "medium",
    },
    {
      title: "Real-time Collaboration",
      description: "Code together with AI agents and team members in real-time.",
      icon: Users,
      gradient: "from-orange-500/20 to-red-500/20",
      size: "large",
    },
    {
      title: "Code Review AI",
      description: "Get instant feedback and suggestions for code improvements.",
      icon: Eye,
      gradient: "from-teal-500/20 to-cyan-500/20",
      size: "medium",
    },
    {
      title: "Performance Monitoring",
      description: "Track application performance with AI-powered insights.",
      icon: BarChart3,
      gradient: "from-indigo-500/20 to-purple-500/20",
      size: "medium",
    },
  ]

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Powerful Features
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Everything you need to <span className="gradient-text">build faster</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI-powered platform provides all the tools you need to transform ideas into production-ready
            applications.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <BentoCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              gradient={feature.gradient}
              className={feature.size === "large" ? "md:col-span-2" : feature.size === "medium" ? "md:col-span-1" : ""}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
