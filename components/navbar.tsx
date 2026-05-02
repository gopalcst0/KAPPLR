'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="sticky top-0 z-50 px-4 sm:px-6 lg:px-10 pt-4 pb-2 bg-slate-50">
      {/* Floating card navbar */}
      <nav className="max-w-7xl mx-auto bg-white rounded-2xl shadow-md border border-white/80 px-5 sm:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="KAPPLR" width={220} height={72} className="h-16 w-auto object-contain" priority />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-0.5">
            <Link href="/features">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground rounded-xl text-sm cursor-pointer">
                Features
              </Button>
            </Link>
            <Link href="/use-cases">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground rounded-xl text-sm cursor-pointer">
                Use Cases
              </Button>
            </Link>
            <Link href="/pricing">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground rounded-xl text-sm cursor-pointer">
                Pricing
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground rounded-xl text-sm cursor-pointer">
                Contact
              </Button>
            </Link>
            <Link href="/blog">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground rounded-xl text-sm cursor-pointer">
                Blogs
              </Button>
            </Link>
          </div>

          {/* Right: CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/pricing">
              <Button className="bg-brand-gradient hover:opacity-90 text-white rounded-full px-5 text-sm font-semibold shadow-none">
                Get Started Free
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-muted"
          >
            {isOpen ? (
              <X className="w-5 h-5 text-foreground" />
            ) : (
              <Menu className="w-5 h-5 text-foreground" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden max-w-7xl mx-auto mt-2 bg-white rounded-2xl shadow-lg border border-border/40 px-4 py-4 space-y-1">
          {[
            { label: 'Features', href: '/features' },
            { label: 'Use Cases', href: '/use-cases' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'Contact', href: '/contact' },
            { label: 'Blogs', href: '/blog' },
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
          <div className="pt-2 border-t border-border space-y-2">
            <Link href="/pricing" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-brand-gradient hover:opacity-90 text-white rounded-full font-semibold">
                Get Started Free
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

