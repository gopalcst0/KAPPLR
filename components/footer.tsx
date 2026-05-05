import Link from 'next/link'
import Image from 'next/image'
import { Mail, Linkedin, Twitter, ArrowRight, MapPin, Phone } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#06031a] border-t border-white/8 relative overflow-hidden">
      {/* background glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[300px] rounded-full bg-violet-800/12 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] rounded-full bg-teal-800/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top CTA strip */}
        <div className="border-b border-white/8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <p className="text-white font-bold text-lg">Ready to transform your alumni engagement?</p>
              <p className="text-white/40 text-sm">Join 50+ institutions already using KAPPLR.</p>
            </div>
            <Link href="/pricing" className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-lg shadow-violet-900/40 transition-all group flex-shrink-0">
              Get Started Free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Main grid */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand col — spans 2 */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <Image src="/logo-removebg.png" alt="KAPPLR" width={200} height={66} className="h-10 w-auto object-contain brightness-0 invert" />
            </Link>
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-violet-400 uppercase tracking-[0.25em]">From the house of</p>
              <p className="text-white font-bold text-base">MyLeading Campus</p>
            </div>
            <p className="text-sm text-white/45 leading-relaxed max-w-xs">
              Turn your alumni into contributors, mentors, and brand ambassadors. Trusted by academic leaders across India.
            </p>
            <p className="text-xs text-white/30 leading-relaxed max-w-xs">
              KAPPLR is built by the team behind MyLeading Campus — India&apos;s trusted school management platform.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3 pt-1">
              {[
                { href: '#', icon: Mail,     label: 'Email' },
                { href: '#', icon: Linkedin, label: 'LinkedIn' },
                { href: '#', icon: Twitter,  label: 'Twitter' },
              ].map(({ href, icon: Icon, label }) => (
                <a key={label} href={href} aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div className="space-y-5">
            <h4 className="text-xs font-bold text-white/30 uppercase tracking-[0.2em]">Product</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'Features',     href: '/features' },
                { label: 'Pricing',      href: '/pricing' },
                { label: 'How It Works', href: '/how-it-works' },
                { label: 'Use Cases',    href: '/use-cases' },
                { label: 'Blog',         href: '/blog' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-white/45 hover:text-white transition-colors font-medium">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-5">
            <h4 className="text-xs font-bold text-white/30 uppercase tracking-[0.2em]">Company</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'About Us',  href: '#' },
                { label: 'Careers',   href: '#' },
                { label: 'Contact',   href: '/contact' },
                { label: 'Partners',  href: '#' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-white/45 hover:text-white transition-colors font-medium">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Contact */}
          <div className="space-y-5">
            <h4 className="text-xs font-bold text-white/30 uppercase tracking-[0.2em]">Legal</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'Privacy Policy',   href: '#' },
                { label: 'Terms of Service', href: '#' },
                { label: 'Security',         href: '#' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-white/45 hover:text-white transition-colors font-medium">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="pt-4 space-y-3 border-t border-white/8">
              <a href="mailto:hello@kapplr.com" className="flex items-center gap-2 text-xs text-white/35 hover:text-white/70 transition-colors">
                <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                hello@kapplr.com
              </a>
              <div className="flex items-center gap-2 text-xs text-white/35">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                India
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30 text-center sm:text-left">
            © {currentYear} KAPPLR. All rights reserved. A product of{' '}
            <a href="https://myleadingcampus.com" className="text-violet-400 hover:text-violet-300 transition-colors font-semibold">
              MyLeading Campus
            </a>
            .
          </p>
          <div className="flex items-center gap-2 text-xs text-white/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  )
}
