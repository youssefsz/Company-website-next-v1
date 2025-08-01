"use client"

import { Button } from "@/components/ui/button"
import { Check, X, ArrowRight, Star } from "lucide-react"
import Link from "next/link"

export function PricingPlansSection() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for getting started and small projects",
      features: [
        { name: "5 projects", included: true },
        { name: "100 AI code generations/month", included: true },
        { name: "Basic testing features", included: true },
        { name: "Community support", included: true },
        { name: "GitHub integration", included: true },
        { name: "Advanced testing suite", included: false },
        { name: "Priority support", included: false },
        { name: "Team collaboration", included: false },
        { name: "Custom integrations", included: false },
      ],
      cta: "Start Free",
      popular: false,
    },
    {
      name: "Pro",
      price: "$29",
      description: "For professional developers and small teams",
      features: [
        { name: "Unlimited projects", included: true },
        { name: "1,000 AI code generations/month", included: true },
        { name: "Advanced testing suite", included: true },
        { name: "Priority support", included: true },
        { name: "Team collaboration (up to 5 members)", included: true },
        { name: "All integrations", included: true },
        { name: "Performance monitoring", included: true },
        { name: "Custom AI model training", included: false },
        { name: "On-premise deployment", included: false },
      ],
      cta: "Start Pro Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large teams and organizations",
      features: [
        { name: "Unlimited everything", included: true },
        { name: "Custom AI model training", included: true },
        { name: "Dedicated support manager", included: true },
        { name: "On-premise deployment", included: true },
        { name: "Custom integrations", included: true },
        { name: "Advanced security features", included: true },
        { name: "SLA guarantees", included: true },
        { name: "Training and onboarding", included: true },
        { name: "Custom billing", included: true },
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative glassmorphism rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300 animate-fade-in ${
                plan.popular ? "border-2 border-primary scale-105" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-2">
                  {plan.price}
                  {plan.price !== "Custom" && <span className="text-lg text-muted-foreground">/month</span>}
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    {feature.included ? (
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    ) : (
                      <X className="h-5 w-5 text-muted-foreground mr-3 flex-shrink-0" />
                    )}
                    <span className={feature.included ? "" : "text-muted-foreground"}>{feature.name}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full" variant={plan.popular ? "default" : "outline"} size="lg" asChild>
                <Link href={plan.name === "Enterprise" ? "/contact" : "#signup"}>
                  {plan.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">All plans include a 14-day free trial. No credit card required.</p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <span>✓ Cancel anytime</span>
            <span>✓ No setup fees</span>
            <span>✓ 99.9% uptime SLA</span>
            <span>✓ SOC 2 compliant</span>
          </div>
        </div>
      </div>
    </section>
  )
}
