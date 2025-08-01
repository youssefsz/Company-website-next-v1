"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare } from "lucide-react"
import Link from "next/link"

export function PricingCTASection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glassmorphism rounded-3xl p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to <span className="gradient-text">get started?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of developers who are already building faster with TechFlow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="#signup">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">
                <MessageSquare className="mr-2 h-5 w-5" />
                Talk to Sales
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
