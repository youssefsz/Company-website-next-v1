"use client"

import { Github, Chrome, CreditCard, Play } from "lucide-react"

export function SocialProofSection() {
  const companies = [
    { name: "GitHub", icon: Github },
    { name: "Microsoft", icon: Chrome },
    { name: "Google", icon: Chrome },
    { name: "Stripe", icon: CreditCard },
    { name: "Netflix", icon: Play },
  ]

  return (
    <section className="py-16 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-muted-foreground text-lg">Trusted by 10,000+ developers worldwide</p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
          {companies.map((company) => (
            <div key={company.name} className="flex items-center space-x-2 hover:opacity-100 transition-opacity">
              <company.icon className="h-6 w-6" />
              <span className="font-medium text-lg">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
