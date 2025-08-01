"use client"

export function AboutStorySection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                TechFlow was born from a simple observation: developers spend too much time on repetitive tasks and not
                enough time on creative problem-solving. Our founders, experienced engineers from top tech companies,
                saw an opportunity to change this.
              </p>
              <p>
                In 2023, we set out to build an AI-powered development platform that would democratize access to
                advanced development tools. We wanted to create a world where building software is as intuitive as
                having a conversation.
              </p>
              <p>
                Today, TechFlow is trusted by over 10,000 developers worldwide, from solo entrepreneurs to Fortune 500
                companies. We're just getting started on our mission to transform how software is built.
              </p>
            </div>
          </div>
          <div className="glassmorphism rounded-2xl p-8">
            <div className="bg-background/50 rounded-lg p-6 border border-border">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">10k+</div>
                  <div className="text-sm text-muted-foreground">Developers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">50M+</div>
                  <div className="text-sm text-muted-foreground">Lines of Code</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
