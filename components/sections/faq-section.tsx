"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "How does the AI code generation work?",
      answer:
        "Our AI analyzes your natural language prompts and generates production-ready code using advanced language models trained on millions of code repositories. It understands context, follows best practices, and includes proper documentation and tests.",
    },
    {
      question: "What programming languages are supported?",
      answer:
        "We support all major programming languages including Python, JavaScript, TypeScript, Go, Rust, Java, C#, PHP, and more. Our AI can also work with popular frameworks like React, Next.js, Django, Flask, Express, and many others.",
    },
    {
      question: "Is my code secure and private?",
      answer:
        "Absolutely. We use enterprise-grade security measures including end-to-end encryption, SOC 2 compliance, and never store or train on your proprietary code. Your intellectual property remains completely private and secure.",
    },
    {
      question: "Can I integrate TechFlow with my existing tools?",
      answer:
        "Yes! TechFlow integrates seamlessly with popular development tools including GitHub, GitLab, VS Code, IntelliJ, Slack, Jira, and many CI/CD platforms. We also provide comprehensive APIs for custom integrations.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "We offer 24/7 support for all paid plans, including live chat, email support, and comprehensive documentation. Enterprise customers get dedicated support managers and custom onboarding assistance.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. You'll continue to have access to your plan features until the end of your billing period.",
    },
  ]

  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Frequently asked <span className="gradient-text">questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about TechFlow. Can't find the answer you're looking for?
            <a href="/contact" className="text-primary hover:underline ml-1">
              Contact our support team
            </a>
            .
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="glassmorphism rounded-lg px-6 border-0">
                <AccordionTrigger className="text-left hover:no-underline hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
