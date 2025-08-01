"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export function DocsHeroSection() {
  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            <span className="gradient-text">Documentation</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Everything you need to get started with TechFlow. From quick start guides to advanced API references.
          </p>

          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search documentation..." className="pl-10 bg-background/50 border-border" />
          </div>
        </div>
      </div>
    </section>
  )
}
