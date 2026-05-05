'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="sticky top-0 z-50 px-4 sm:px-6 lg:px-10 pt-4 pb-2 bg-[#0a0518]">
      {/* Floating card navbar */}
      <nav className="max-w-7xl mx-auto bg-white/8 backdrop-blur-xl rounded-2xl border border-white/12 px-5 sm:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/logo-removebg.png" alt="KAPPLR" width={300} height={100} className="h-24 w-auto object-contain brightness-0 invert" priority />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-0.5">
            <Link href="/features">
              <Button variant="ghost" className="text-white/60 hover:text-white hover:bg-white/8 rounded-xl text-sm cursor-pointer">
                Features
              </Button>
            </Link>
            <Link href="/use-cases">
              <Button variant="ghost" className="text-white/60 hover:text-white hover:bg-white/8 rounded-xl text-sm cursor-pointer">
                Use Cases
              </Button>
            </Link>
            <Link href="/pricing">
              <Button variant="ghost" className="text-white/60 hover:text-white hover:bg-white/8 rounded-xl text-sm cursor-pointer">
                Pricing
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="ghost" className="text-white/60 hover:text-white hover:bg-white/8 rounded-xl text-sm cursor-pointer">
                Contact
              </Button>
            </Link>
            <Link href="/blog">
              <Button variant="ghost" className="text-white/60 hover:text-white hover:bg-white/8 rounded-xl text-sm cursor-pointer">
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
            className="md:hidden p-2 rounded-xl hover:bg-white/10"
          >
            {isOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden max-w-7xl mx-auto mt-2 bg-white/8 backdrop-blur-xl rounded-2xl border border-white/12 px-4 py-4 space-y-1">
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
                className="w-full justify-start text-white/70 hover:text-white hover:bg-white/10 rounded-xl cursor-pointer"
              >
                {label}
              </Button>
            </Link>
          ))}
          <div className="pt-2 border-t border-white/10 space-y-2">
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

