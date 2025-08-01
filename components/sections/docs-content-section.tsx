"use client"

import { Button } from "@/components/ui/button"
import { Copy, ExternalLink } from "lucide-react"

export function DocsContentSection() {
  return (
    <main className="lg:col-span-3">
      <div className="glassmorphism rounded-2xl p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Quick Start Guide</h1>
          <p className="text-muted-foreground text-lg">
            Get up and running with TechFlow in under 5 minutes. This guide will walk you through creating your first
            AI-generated application.
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Installation</h2>
            <p className="text-muted-foreground mb-4">
              Install the TechFlow CLI to get started with local development.
            </p>
            <div className="bg-background/50 rounded-lg p-4 border border-border">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Terminal</span>
                <Button size="sm" variant="ghost">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <code className="text-sm font-mono">npm install -g @techflow/cli</code>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Authentication</h2>
            <p className="text-muted-foreground mb-4">Authenticate with your TechFlow account to access AI features.</p>
            <div className="bg-background/50 rounded-lg p-4 border border-border">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Terminal</span>
                <Button size="sm" variant="ghost">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <code className="text-sm font-mono">techflow auth login</code>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Create Your First Project</h2>
            <p className="text-muted-foreground mb-4">Initialize a new project with AI-powered scaffolding.</p>
            <div className="bg-background/50 rounded-lg p-4 border border-border">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Terminal</span>
                <Button size="sm" variant="ghost">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <code className="text-sm font-mono">techflow create my-app --template react</code>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Generate Code</h2>
            <p className="text-muted-foreground mb-4">Use natural language to generate components and features.</p>
            <div className="bg-background/50 rounded-lg p-4 border border-border">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Terminal</span>
                <Button size="sm" variant="ghost">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <code className="text-sm font-mono">techflow generate "Create a user login form with validation"</code>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-border rounded-lg p-4">
                <h3 className="font-semibold mb-2">API Reference</h3>
                <p className="text-sm text-muted-foreground mb-3">Explore the complete API documentation</p>
                <Button size="sm" variant="outline">
                  View API Docs
                  <ExternalLink className="ml-2 h-3 w-3" />
                </Button>
              </div>
              <div className="border border-border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Tutorials</h3>
                <p className="text-sm text-muted-foreground mb-3">Step-by-step guides for common use cases</p>
                <Button size="sm" variant="outline">
                  Browse Tutorials
                  <ExternalLink className="ml-2 h-3 w-3" />
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
