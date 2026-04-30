'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="sticky top-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 pb-2">
      {/* Floating pill navbar */}
      <nav className="max-w-7xl mx-auto bg-white rounded-full shadow-lg border border-border/40 px-4 sm:px-6">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">K</span>
            </div>
            <span className="font-bold text-lg text-foreground">KAPPLR</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <Link href="/">
              <Button variant="ghost" className="text-foreground hover:text-accent-foreground rounded-full cursor-pointer">
                Home
              </Button>
            </Link>
            <Link href="/features">
              <Button variant="ghost" className="text-foreground hover:text-accent-foreground rounded-full cursor-pointer">
                Features
              </Button>
            </Link>
            <Link href="/use-cases">
              <Button variant="ghost" className="text-foreground hover:text-accent-foreground rounded-full cursor-pointer">
                Use Cases
              </Button>
            </Link>
            <Link href="/how-it-works">
              <Button variant="ghost" className="text-foreground hover:text-accent-foreground rounded-full cursor-pointer">
                How It Works
              </Button>
            </Link>
            <Link href="/pricing">
              <Button variant="ghost" className="text-foreground hover:text-accent-foreground rounded-full cursor-pointer">
                Pricing
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="ghost" className="text-foreground hover:text-accent-foreground rounded-full cursor-pointer">
                Contact
              </Button>
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/pricing">
              <Button className="bg-primary hover:bg-secondary text-primary-foreground rounded-full px-5">
                Get Started Free
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full hover:bg-muted"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation — separate card below the pill */}
      {isOpen && (
        <div className="md:hidden max-w-7xl mx-auto mt-2 bg-white rounded-2xl shadow-lg border border-border/40 px-4 py-4 space-y-1">
          {[
            { label: 'Home', href: '/' },
            { label: 'Features', href: '/features' },
            { label: 'Use Cases', href: '/use-cases' },
            { label: 'How It Works', href: '/how-it-works' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'Contact', href: '/contact' },
          ].map(({ label, href }) => (
            <Link key={href} href={href} onClick={() => setIsOpen(false)}>
              <Button
                variant="ghost"
                className="w-full justify-start text-foreground hover:text-accent-foreground rounded-xl cursor-pointer"
              >
                {label}
              </Button>
            </Link>
          ))}
          <div className="pt-2 border-t border-border">
            <Link href="/pricing" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-primary hover:bg-secondary text-primary-foreground rounded-full">
                Get Started Free
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
