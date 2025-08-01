import { BlogHeroSection } from "@/components/sections/blog-hero-section"
import { BlogPostsSection } from "@/components/sections/blog-posts-section"

export const metadata = {
  title: "Blog - TechFlow Solutions",
  description: "Latest insights, tutorials, and updates from the TechFlow team about AI-powered development.",
}

export default function BlogPage() {
  return (
    <div className="pt-20">
      <BlogHeroSection />
      <BlogPostsSection />
    </div>
  )
}
