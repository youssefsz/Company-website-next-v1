"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Send } from "lucide-react"

export function ContactFormSection() {
  return (
    <div className="glassmorphism rounded-2xl p-8">
      <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
      <form className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" placeholder="John" />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" placeholder="Doe" />
          </div>
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="john@example.com" />
        </div>

        <div>
          <Label htmlFor="company">Company</Label>
          <Input id="company" placeholder="Acme Inc." />
        </div>

        <div>
          <Label htmlFor="subject">Subject</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="general">General Inquiry</SelectItem>
              <SelectItem value="support">Technical Support</SelectItem>
              <SelectItem value="sales">Sales Question</SelectItem>
              <SelectItem value="partnership">Partnership</SelectItem>
              <SelectItem value="press">Press Inquiry</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" placeholder="Tell us how we can help you..." rows={5} />
        </div>

        <Button type="submit" className="w-full">
          Send Message
          <Send className="ml-2 h-4 w-4" />
        </Button>
      </form>
      
      {/* Google Maps iframe */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Find us on the map</h3>
        <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2sus!4v1640995200000!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="TechFlow Solutions Office Location"
            className="w-full"
          />
        </div>
      </div>
    </div>
  )
}
