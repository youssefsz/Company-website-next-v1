"use client"

import { Button } from "@/components/ui/button"
import { Play, ArrowRight, Sparkles, Code, Zap } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-dark/5" />

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary-dark rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-primary/50 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Trusted by 10,000+ developers worldwide
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Build Software at the <span className="gradient-text">Speed of Thought</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              AI-powered development platform that writes, tests, and deploys your code automatically. Transform ideas
              into production-ready applications in minutes, not months.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link href="#signup">
                  Start Building Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent" asChild>
                <Link href="#demo">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Link>
              </Button>
            </div>
          </div>

          {/* Floating Dashboard Preview */}
          <div className="relative">
            <div className="glassmorphism rounded-2xl p-6 animate-float">
              <div className="bg-background/50 rounded-lg p-4 border border-border">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Code className="h-5 w-5 text-primary" />
                    <span className="font-medium">AI Code Generator</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-xs text-muted-foreground">Online</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="bg-muted/30 rounded p-3">
                    <p className="text-sm text-muted-foreground mb-2">Prompt:</p>
                    <p className="text-sm">"Create a React component for user authentication"</p>
                  </div>

                  <div className="bg-primary/10 rounded p-3 border border-primary/20">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-medium text-primary">Generated Code</p>
                      <Zap className="h-4 w-4 text-primary" />
                    </div>
                    <div className="font-mono text-xs text-muted-foreground">
                      <div>{"const AuthForm = () => {"}</div>
                      <div className="ml-2">{"const [email, setEmail] = ..."}</div>
                      <div className="ml-2">{"return ("}</div>
                      <div className="ml-4">{"<form onSubmit={...}>"}</div>
                      <div className="ml-6">{"// Generated form fields"}</div>
                      <div className="ml-4">{"</form>"}</div>
                      <div className="ml-2">{")"}</div>
                      <div>{"}"}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Generated in 2.3s</span>
                    <span>✓ Tests included</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stats */}
            <div
              className="absolute -top-4 -right-4 glassmorphism rounded-lg p-3 animate-float"
              style={{ animationDelay: "1s" }}
            >
              <div className="text-center">
                <div className="text-lg font-bold text-primary">99.9%</div>
                <div className="text-xs text-muted-foreground">Uptime</div>
              </div>
            </div>

            <div
              className="absolute -bottom-4 -left-4 glassmorphism rounded-lg p-3 animate-float"
              style={{ animationDelay: "2s" }}
            >
              <div className="text-center">
                <div className="text-lg font-bold text-primary">10k+</div>
                <div className="text-xs text-muted-foreground">Developers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
