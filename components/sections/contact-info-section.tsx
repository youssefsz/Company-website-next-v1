"use client"

import { Mail, Phone, MapPin, Clock, MessageSquare, HelpCircle } from "lucide-react"

export function ContactInfoSection() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Send us an email anytime",
      value: "hello@techflow.dev",
      action: "mailto:hello@techflow.dev",
    },
    {
      icon: Phone,
      title: "Phone",
      description: "Call us during business hours",
      value: "+1 (555) 123-4567",
      action: "tel:+15551234567",
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with our support team",
      value: "Available 24/7",
      action: "#",
    },
    {
      icon: HelpCircle,
      title: "Help Center",
      description: "Browse our knowledge base",
      value: "Self-service support",
      action: "/help",
    },
  ]

  const offices = [
    {
      city: "San Francisco",
      address: "123 Market Street, Suite 100\nSan Francisco, CA 94105",
      timezone: "PST",
    },
    {
      city: "New York",
      address: "456 Broadway, Floor 20\nNew York, NY 10013",
      timezone: "EST",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="glassmorphism rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
        <div className="space-y-6">
          {contactMethods.map((method) => (
            <div key={method.title} className="flex items-start space-x-4">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                <method.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">{method.title}</h3>
                <p className="text-sm text-muted-foreground mb-1">{method.description}</p>
                <a href={method.action} className="text-primary hover:underline">
                  {method.value}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="glassmorphism rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-6">Our Offices</h2>
        <div className="space-y-6">
          {offices.map((office) => (
            <div key={office.city} className="flex items-start space-x-4">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">{office.city}</h3>
                <p className="text-sm text-muted-foreground whitespace-pre-line mb-1">{office.address}</p>
                <p className="text-xs text-muted-foreground">{office.timezone}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="glassmorphism rounded-2xl p-8">
        <div className="flex items-start space-x-4">
          <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
            <Clock className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold">Business Hours</h3>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
              <p>Saturday: 10:00 AM - 4:00 PM PST</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
