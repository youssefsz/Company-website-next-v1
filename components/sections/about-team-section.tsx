"use client"

import { Linkedin, Twitter } from "lucide-react"

export function AboutTeamSection() {
  const team = [
    {
      name: "Alex Chen",
      role: "CEO & Co-Founder",
      bio: "Former engineering lead at Google. Passionate about making development tools accessible to everyone.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Sarah Rodriguez",
      role: "CTO & Co-Founder",
      bio: "AI researcher with 10+ years experience. Previously at OpenAI and Microsoft Research.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Marcus Johnson",
      role: "Head of Product",
      bio: "Product leader focused on developer experience. Former PM at GitHub and Stripe.",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Emily Watson",
      role: "Head of Engineering",
      bio: "Full-stack engineer with expertise in distributed systems and AI infrastructure.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face",
      social: { linkedin: "#", twitter: "#" },
    },
  ]

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Meet our <span className="gradient-text">team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The passionate individuals building the future of software development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="glassmorphism rounded-2xl p-6 text-center hover:scale-[1.02] transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={member.avatar || "/placeholder.svg"}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-primary/20"
              />
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-primary text-sm mb-3">{member.role}</p>
              <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
              <div className="flex justify-center space-x-3">
                <a href={member.social.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href={member.social.twitter} className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
