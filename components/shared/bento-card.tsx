"use client"

import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface BentoCardProps {
  title: string
  description: string
  icon: LucideIcon
  gradient: string
  className?: string
  delay?: number
}

export function BentoCard({ title, description, icon: Icon, gradient, className, delay = 0 }: BentoCardProps) {
  return (
    <div
      className={cn(
        "group relative glassmorphism rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 animate-fade-in",
        className,
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Background gradient */}
      <div
        className={cn(
          "absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300",
          gradient,
        )}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{title}</h3>

        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>

      {/* Hover effect border */}
      <div className="absolute inset-0 rounded-2xl border border-primary/0 group-hover:border-primary/20 transition-colors duration-300" />
    </div>
  )
}
