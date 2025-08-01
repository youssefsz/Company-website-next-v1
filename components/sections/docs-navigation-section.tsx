"use client"

import { Book, Code, Zap, Users, Settings, HelpCircle } from "lucide-react"

export function DocsNavigationSection() {
  const sections = [
    {
      title: "Getting Started",
      icon: Book,
      items: ["Quick Start Guide", "Installation", "First Project", "Basic Concepts"],
    },
    {
      title: "API Reference",
      icon: Code,
      items: ["Authentication", "Code Generation", "Testing API", "Deployment API"],
    },
    {
      title: "Features",
      icon: Zap,
      items: ["AI Code Generation", "Smart Testing", "Deployment", "Monitoring"],
    },
    {
      title: "Collaboration",
      icon: Users,
      items: ["Team Management", "Permissions", "Sharing Projects", "Code Reviews"],
    },
    {
      title: "Configuration",
      icon: Settings,
      items: ["Project Settings", "Integrations", "Custom Rules", "Environment Variables"],
    },
    {
      title: "Support",
      icon: HelpCircle,
      items: ["Troubleshooting", "FAQ", "Contact Support", "Community"],
    },
  ]

  return (
    <nav className="lg:col-span-1">
      <div className="glassmorphism rounded-2xl p-6 sticky top-24">
        <h2 className="font-semibold mb-6">Documentation</h2>
        <div className="space-y-6">
          {sections.map((section) => (
            <div key={section.title}>
              <div className="flex items-center mb-3">
                <section.icon className="h-4 w-4 text-primary mr-2" />
                <h3 className="font-medium text-sm">{section.title}</h3>
              </div>
              <ul className="space-y-2 ml-6">
                {section.items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}
