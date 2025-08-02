"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Code2 } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [liquidPosition, setLiquidPosition] = useState({ x: 0, width: 0 })
  const pathname = usePathname()
  const navRefs = useRef<(HTMLAnchorElement | null)[]>([])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      // Initialize liquid position after mount
      setTimeout(() => {
        updateLiquidPosition(activeIndex)
      }, 100)
    }
  }, [mounted, activeIndex])

  useEffect(() => {
    const currentIndex = navigation.findIndex(item => item.href === pathname)
    if (currentIndex !== -1) {
      setActiveIndex(currentIndex)
      updateLiquidPosition(currentIndex)
    }
  }, [pathname])

  const updateLiquidPosition = (index: number) => {
    const element = navRefs.current[index]
    if (element) {
      const rect = element.getBoundingClientRect()
      const container = element.closest('nav')
      if (container) {
        const containerRect = container.getBoundingClientRect()
        setLiquidPosition({
          x: rect.left - containerRect.left,
          width: rect.width
        })
      }
    }
  }

  const navigation = [
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Docs", href: "/docs" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
  ]

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-4 mt-4 mb-2 rounded-2xl glassmorphism shadow-2xl border border-white/10">
          <div className="flex justify-between items-center py-4 px-6">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold gradient-text">TechFlow</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 relative">
              {/* Liquid Background */}
              <div 
                className="absolute inset-0 rounded-xl liquid-bg transition-all duration-500 ease-out"
                style={{
                  left: `${liquidPosition.x}px`,
                  width: `${liquidPosition.width}px`,
                  height: '100%'
                }}
              />
              
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  ref={(el) => {
                    navRefs.current[index] = el
                  }}
                  className={`relative z-10 px-3 py-2 rounded-lg transition-all duration-300 ${
                    pathname === item.href 
                      ? 'text-primary font-medium' 
                      : 'text-muted-foreground hover:text-primary hover:bg-white/5 hover:backdrop-blur-sm hover:scale-105 hover:shadow-lg hover:shadow-primary/10'
                  }`}

                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" asChild>
                <Link href="/contact">Contact</Link>
              </Button>
              <Button asChild>
                <Link href="#signup">Start Building Free</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            {mounted && (
              <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            )}
          </div>

          {/* Mobile Navigation */}
          {mounted && isMenuOpen && (
            <div className="md:hidden py-4 px-6 border-t border-border/20">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-3 py-2 rounded-lg transition-all duration-300 ${
                      pathname === item.href 
                        ? 'text-primary font-medium bg-primary/10' 
                        : 'text-muted-foreground hover:text-primary hover:bg-white/5 hover:backdrop-blur-sm hover:scale-105'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col space-y-2 pt-4">
                  <Button variant="ghost" asChild>
                    <Link href="/contact">Contact</Link>
                  </Button>
                  <Button asChild>
                    <Link href="#signup">Start Building Free</Link>
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
