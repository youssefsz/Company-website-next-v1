"use client"

import { Code2, TestTube, Rocket, Users, Eye, BarChart3 } from "lucide-react"

export function DetailedFeaturesSection() {
  const features = [
    {
      icon: Code2,
      title: "AI Code Generation",
      description: "Transform natural language into production-ready code",
      details: [
        "Multi-language support (Python, JavaScript, TypeScript, Go, Rust)",
        "Context-aware suggestions and completions",
        "Automatic documentation generation",
        "Code explanation and optimization",
        "Framework-specific templates and patterns",
      ],
      demo: "Generate a React component with authentication logic in seconds",
    },
    {
      icon: TestTube,
      title: "Smart Testing",
      description: "Automated test generation that ensures code quality",
      details: [
        "Automatic test case generation",
        "Coverage analysis and reporting",
        "Performance and load testing",
        "Security vulnerability detection",
        "Integration with popular testing frameworks",
      ],
      demo: "AI generates comprehensive test suites for your entire codebase",
    },
    {
      icon: Rocket,
      title: "One-Click Deployment",
      description: "Deploy to any cloud platform with intelligent automation",
      details: [
        "Multi-cloud deployment (AWS, GCP, Azure)",
        "Infrastructure as Code generation",
        "Blue-green and canary deployments",
        "Automatic rollback capabilities",
        "Environment management and scaling",
      ],
      demo: "Deploy your application to production in under 60 seconds",
    },
    {
      icon: Users,
      title: "Real-time Collaboration",
      description: "Code together with AI agents and team members",
      details: [
        "Live pair programming sessions",
        "AI-powered code reviews",
        "Team analytics and insights",
        "Knowledge sharing and documentation",
        "Integrated chat and video calls",
      ],
      demo: "Collaborate with your team and AI in real-time",
    },
    {
      icon: Eye,
      title: "Code Review AI",
      description: "Get instant feedback and improvement suggestions",
      details: [
        "Automated code quality analysis",
        "Security vulnerability scanning",
        "Performance optimization suggestions",
        "Best practices enforcement",
        "Custom rule configuration",
      ],
      demo: "AI reviews your code and suggests improvements instantly",
    },
    {
      icon: BarChart3,
      title: "Performance Monitoring",
      description: "Track application performance with AI insights",
      details: [
        "Real-time performance metrics",
        "Predictive analytics and alerts",
        "Resource usage optimization",
        "Error tracking and debugging",
        "Custom dashboard creation",
      ],
      demo: "Monitor your application's health with intelligent insights",
    },
  ]

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 mr-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="glassmorphism rounded-lg p-4 border border-primary/20">
                  <p className="text-sm text-primary font-medium">Demo: {feature.demo}</p>
                </div>
              </div>

              <div className={`glassmorphism rounded-2xl p-8 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <div className="bg-background/50 rounded-lg p-6 border border-border">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-medium">{feature.title} Demo</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-xs text-muted-foreground">Live</span>
                    </div>
                  </div>
                  <div className="h-32 bg-muted/30 rounded flex items-center justify-center">
                    <feature.icon className="h-12 w-12 text-primary/50" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
