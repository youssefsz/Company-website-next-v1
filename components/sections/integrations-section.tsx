"use client"

import { Github, GitBranch, MessageSquare, Trello, Slack, Chrome } from "lucide-react"

export function IntegrationsSection() {
  const integrations = [
    { name: "GitHub", icon: Github, category: "Version Control" },
    { name: "GitLab", icon: GitBranch, category: "Version Control" },
    { name: "VS Code", icon: Chrome, category: "IDE" },
    { name: "Slack", icon: Slack, category: "Communication" },
    { name: "Jira", icon: Trello, category: "Project Management" },
    { name: "Discord", icon: MessageSquare, category: "Communication" },
  ]

  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Integrates with your <span className="gradient-text">favorite tools</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            TechFlow seamlessly connects with the tools you already use, making adoption effortless.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {integrations.map((integration, index) => (
            <div
              key={integration.name}
              className="glassmorphism rounded-xl p-6 text-center hover:scale-105 transition-transform duration-200 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <integration.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
              <h3 className="font-medium mb-1">{integration.name}</h3>
              <p className="text-xs text-muted-foreground">{integration.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
