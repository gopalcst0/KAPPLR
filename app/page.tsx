import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'KAPPLR – Turn Alumni Into Your Greatest Asset',
  description: 'KAPPLR helps schools and colleges build engaged alumni communities, unlock mentorship opportunities, and drive institutional growth. Start your 30-day free trial today.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'KAPPLR – Turn Alumni Into Your Greatest Asset',
    description: 'India\'s leading alumni engagement platform for schools, colleges, and universities. Free 30-day trial. No credit card required.',
    url: 'https://kapplr.com',
  },
}

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Users, TrendingUp, Award, Zap, CheckCircle2, Star, MessageSquare, Mail, Smartphone, BarChart3, Shield, Handshake, Settings } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50" style={{ minHeight: 'calc(90vh - 80px)' }}>
        {/* Hero image — fills right portion, bleeds to edge */}
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shutterstock_658847998-c9tVy9ZQZ6M78DFJQEVrj5IO9E4Vly.webp"
            alt="Alumni community celebrating"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Left-side gradient so text is readable over the image */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/85 via-30% to-slate-50/0" />
          {/* Bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50/60 via-transparent to-transparent" />
        </div>

        {/* Text content — bottom-left overlay */}
        <div className="relative z-10 flex flex-col justify-end h-full px-6 sm:px-10 lg:px-16 pb-16 pt-24 md:pt-32" style={{ minHeight: 'calc(90vh - 80px)' }}>
          <div className="max-w-2xl space-y-5">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-brand-gradient">
              Turn Alumni Into Your Greatest Asset
            </h1>
            <p className="text-lg text-slate-600 max-w-md leading-relaxed">
              KAPPLR helps schools and colleges build engaged alumni communities, unlock mentorship opportunities, and drive institutional growth. Just start — it&apos;s that easy.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link href="/pricing">
                <Button size="lg" className="bg-brand-gradient hover:opacity-90 text-white rounded-full px-8 font-semibold shadow-none">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/how-it-works">
                <Button size="lg" variant="outline" className="rounded-full px-8 bg-white/70 hover:bg-white border-slate-300 text-slate-700">
                  See How It Works
                </Button>
              </Link>
            </div>
            <p className="text-xs text-slate-500">30-day free trial · No credit card required · Cancel anytime</p>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-primary">1000+</div>
              <p className="text-muted-foreground">Alumni Reconnected Monthly</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-primary">50+</div>
              <p className="text-muted-foreground">Institutions Using KAPPLR</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-primary">₹10Cr+</div>
              <p className="text-muted-foreground">Fundraising Facilitated</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-primary">95%</div>
              <p className="text-muted-foreground">User Satisfaction Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Why Schools Choose KAPPLR</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built specifically for academic institutions to maximize alumni engagement and institutional impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                tag: 'Directory',
                tagColor: 'bg-violet-100 text-violet-600',
                iconBg: 'bg-violet-500',
                title: 'Dynamic Alumni Directory',
                description: 'Keep track of all alumni with their career details, interests, and engagement history in one unified platform.',
                stat: '10,000+ profiles',
                statLabel: 'managed on average',
              },
              {
                icon: TrendingUp,
                tag: 'Placement',
                tagColor: 'bg-teal-100 text-teal-600',
                iconBg: 'bg-teal-500',
                title: 'Placement Hub',
                description: 'Connect graduates with job opportunities and help employers find talented alumni for roles.',
                stat: '3x faster',
                statLabel: 'placement matching',
              },
              {
                icon: Award,
                tag: 'Fundraising',
                tagColor: 'bg-amber-100 text-amber-600',
                iconBg: 'bg-amber-500',
                title: 'Fundraising Module',
                description: 'Unlock giving potential with targeted campaigns, tracking, and recognition for alumni donors.',
                stat: '₹10Cr+',
                statLabel: 'raised across institutions',
              },
              {
                icon: Zap,
                tag: 'Events',
                tagColor: 'bg-purple-100 text-purple-600',
                iconBg: 'bg-purple-500',
                title: 'Event Management',
                description: 'Organize reunions, webinars, and networking events. Build community through meaningful connections.',
                stat: '2x attendance',
                statLabel: 'vs traditional methods',
              },
              {
                icon: Handshake,
                tag: 'Mentorship',
                tagColor: 'bg-cyan-100 text-cyan-600',
                iconBg: 'bg-cyan-500',
                title: 'Mentorship Program',
                description: 'Facilitate mentorship between students and alumni to support career growth and development.',
                stat: '500+ matches',
                statLabel: 'per institution/year',
              },
              {
                icon: Shield,
                tag: 'Compliance',
                tagColor: 'bg-green-100 text-green-600',
                iconBg: 'bg-green-500',
                title: 'Accreditation Support',
                description: 'Generate compliance reports and demonstrate institutional impact for accreditation bodies.',
                stat: 'NAAC & NBA',
                statLabel: 'ready reports',
              },
            ].map((benefit, idx) => {
              const Icon = benefit.icon
              return (
                <div key={idx} className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all group">
                  {/* Card top gradient bar */}
                  <div className="h-1.5 bg-brand-gradient" />
                  <div className="p-6 space-y-4">
                    {/* Tag + Icon row */}
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${benefit.tagColor}`}>
                        {benefit.tag}
                      </span>
                      <div className={`w-10 h-10 ${benefit.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    {/* Title & description */}
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-1.5">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </div>
                    {/* Stat row */}
                    <div className="pt-3 border-t border-border flex items-center justify-between">
                      <div>
                        <div className="text-base font-bold text-brand-gradient">{benefit.stat}</div>
                        <div className="text-xs text-muted-foreground">{benefit.statLabel}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Alumni Community Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Build a Connected Alumni Community</h2>
              <p className="text-lg text-muted-foreground">
                Your alumni are your institution&apos;s greatest advocates. KAPPLR makes it easy to keep them engaged, connected, and invested in your success.
              </p>
              <ul className="space-y-4">
                {['Strengthen institutional bonds', 'Create lasting relationships', 'Unlock career opportunities', 'Drive fundraising success'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/use-cases">
                <Button variant="outline" size="lg" className="rounded-full">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/alumni-header-1-nDRXimGOHF9MC0fpDacvoGpjXSrNFL.jpg"
              alt="Alumni community - diverse people from different generations"
              width={500}
              height={500}
              className="rounded-2xl w-full h-full object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* How It Works — Teaser */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium">Simple Process</div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Up &amp; Running in 4 Steps</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Launch your alumni platform in minutes — no technical expertise required.
            </p>
          </div>

          {(() => {
            const steps = [
              {
                icon: Settings,
                title: 'Create Your Portal',
                desc: 'Set up a branded, custom portal with your institution\'s logo, colours, and fields in minutes.',
                detail: 'Step 1 · Portal Setup',
                meta: 'Takes ~5 minutes',
                status: 'done',
              },
              {
                icon: Users,
                title: 'Import Alumni',
                desc: 'Upload your existing alumni list via Excel or CSV, or invite alumni directly by email.',
                detail: 'Step 2 · Data Import',
                meta: 'CSV & Excel supported',
                status: 'done',
              },
              {
                icon: Zap,
                title: 'Launch Engagement',
                desc: 'Send campaigns via WhatsApp, Email, and SMS. Host events and kick off fundraising drives.',
                detail: 'Step 3 · Go Live',
                meta: 'All channels ready',
                status: 'active',
              },
              {
                icon: BarChart3,
                title: 'Track Impact',
                desc: 'Monitor engagement metrics and generate NAAC / NBA-ready accreditation reports instantly.',
                detail: 'Step 4 · Analytics',
                meta: 'NAAC & NBA ready',
                status: 'upcoming',
              },
            ]
            return (
              <>
                {/* Stepper row */}
                <div className="flex items-center justify-between mb-8 px-4 md:px-16">
                  {steps.map((s, idx) => {
                    const Icon = s.icon
                    const isDone = s.status === 'done'
                    const isActive = s.status === 'active'
                    return (
                      <div key={idx} className="flex-1 flex items-center">
                        <div className="flex flex-col items-center gap-2 flex-shrink-0">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all
                            ${isDone ? 'bg-primary/10 border-primary' : ''}
                            ${isActive ? 'bg-brand-gradient border-transparent shadow-lg scale-110' : ''}
                            ${s.status === 'upcoming' ? 'bg-slate-100 border-slate-300' : ''}
                          `}>
                            {isDone
                              ? <CheckCircle2 className="w-6 h-6 text-primary" />
                              : <Icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                            }
                          </div>
                          <span className={`text-xs font-semibold text-center leading-tight hidden sm:block
                            ${isDone ? 'text-primary' : ''}
                            ${isActive ? 'text-foreground' : ''}
                            ${s.status === 'upcoming' ? 'text-slate-400' : ''}
                          `}>
                            {s.title}
                          </span>
                        </div>
                        {idx < steps.length - 1 && (
                          <div className={`flex-1 h-0.5 mx-2 rounded-full ${idx < 2 ? 'bg-primary' : 'bg-slate-200'}`} />
                        )}
                      </div>
                    )
                  })}
                </div>

                {/* Cards row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {steps.map((s, idx) => {
                    const Icon = s.icon
                    const isDone = s.status === 'done'
                    const isActive = s.status === 'active'
                    const isUpcoming = s.status === 'upcoming'
                    return (
                      <div key={idx} className={`rounded-2xl bg-white p-5 flex flex-col gap-4 transition-all
                        ${isActive ? 'border-2 border-primary shadow-lg' : 'border border-border'}
                        ${isUpcoming ? 'border-dashed border-slate-200' : ''}
                      `}>
                        {/* Top: detail label + icon */}
                        <div className="flex items-start justify-between gap-2">
                          <span className={`text-xs font-semibold ${isDone ? 'text-primary' : isActive ? 'text-primary' : 'text-slate-400'}`}>
                            {s.detail}
                          </span>
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0
                            ${isDone ? 'bg-primary/10' : isActive ? 'bg-brand-gradient' : 'bg-slate-100'}
                          `}>
                            <Icon className={`w-4 h-4 ${isDone ? 'text-primary' : isActive ? 'text-white' : 'text-slate-400'}`} />
                          </div>
                        </div>

                        {/* Description */}
                        <div className="flex-1 space-y-1">
                          <p className={`text-sm leading-relaxed ${isUpcoming ? 'text-slate-400' : 'text-foreground'}`}>{s.desc}</p>
                          <p className={`text-xs ${isUpcoming ? 'text-slate-300' : 'text-muted-foreground'}`}>{s.meta}</p>
                        </div>

                        {/* Bottom action */}
                        <div className="pt-2 border-t border-border">
                          {isDone && (
                            <span className="flex items-center gap-1.5 text-xs text-primary font-medium">
                              <CheckCircle2 className="w-3.5 h-3.5" /> Completed
                            </span>
                          )}
                          {isActive && (
                            <Link href="/pricing">
                              <button className="w-full text-sm text-white bg-brand-gradient rounded-xl py-2 font-semibold hover:opacity-90 transition-opacity">
                                Start Now →
                              </button>
                            </Link>
                          )}
                          {isUpcoming && (
                            <span className="text-xs text-slate-400 font-medium">Coming up next</span>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </>
            )
          })()}

          <div className="text-center mt-10">
            <Link href="/how-it-works">
              <Button variant="outline" size="lg" className="rounded-full">
                See Detailed Walkthrough <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Spotlight */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium">Platform Highlights</div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Everything Alumni Engagement Needs</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Handshake,
                title: 'Mentorship & Placement',
                desc: 'Match students with alumni mentors automatically. Post jobs, internships, and let alumni refer candidates directly.',
                href: '/features'
              },
              {
                icon: BarChart3,
                title: 'Real-Time Analytics',
                desc: 'Track engagement rates, donations, event attendance, and generate NAAC/NBA-ready accreditation reports instantly.',
                href: '/features'
              },
              {
                icon: Shield,
                title: 'Enterprise-Grade Security',
                desc: 'Data encrypted at rest and in transit. GDPR-compliant. Role-based access controls for admins and alumni.',
                href: '/features'
              },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="p-8 rounded-2xl border border-border bg-white hover:shadow-xl transition-shadow space-y-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                  <Link href={item.href} className="inline-flex items-center text-primary text-sm font-medium hover:underline">
                    Learn more <ArrowRight className="ml-1 w-3.5 h-3.5" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* Section header */}
          <div className="text-center mb-14 space-y-4">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Multi-Channel
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Reach Alumni Where They Already Are</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              KAPPLR connects with tools your alumni already use — no new downloads or accounts needed.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left — channel cards + features */}
            <div className="space-y-6">
              {/* 3 channel cards */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: MessageSquare, label: 'WhatsApp', sub: '2B+ users', iconColor: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200', dot: 'bg-green-500' },
                  { icon: Mail, label: 'Email', sub: 'Automated', iconColor: 'text-violet-600', bg: 'bg-violet-50', border: 'border-violet-200', dot: 'bg-violet-500' },
                  { icon: Smartphone, label: 'SMS', sub: 'Instant OTP', iconColor: 'text-teal-600', bg: 'bg-teal-50', border: 'border-teal-200', dot: 'bg-teal-500' },
                ].map((ch) => {
                  const Icon = ch.icon
                  return (
                    <div key={ch.label} className={`${ch.bg} border ${ch.border} rounded-2xl p-5 flex flex-col gap-3`}>
                      <div className="flex items-center justify-between">
                        <Icon className={`w-7 h-7 ${ch.iconColor}`} />
                        <span className={`w-2 h-2 rounded-full ${ch.dot}`} />
                      </div>
                      <div>
                        <div className={`font-bold text-sm ${ch.iconColor}`}>{ch.label}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">{ch.sub}</div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Feature list */}
              <div className="bg-slate-50 rounded-2xl p-6 space-y-4">
                {[
                  { icon: Zap, text: 'Send bulk WhatsApp messages with one click', color: 'text-green-600 bg-green-100' },
                  { icon: Mail, text: 'Automated email sequences for campaigns', color: 'text-violet-600 bg-violet-100' },
                  { icon: Smartphone, text: 'SMS OTP & transactional notifications', color: 'text-teal-600 bg-teal-100' },
                  { icon: Users, text: 'Personalised messaging via merge tags', color: 'text-primary bg-primary/10' },
                ].map((item, idx) => {
                  const Icon = item.icon
                  return (
                    <div key={idx} className="flex items-center gap-4">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${item.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm text-foreground">{item.text}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right — integration hub */}
            <div className="relative bg-gradient-to-br from-slate-50 to-primary/5 rounded-3xl p-8 border border-border/40 overflow-hidden">
              {/* Decorative rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-64 h-64 rounded-full border border-primary/10" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-44 h-44 rounded-full border border-primary/10" />
              </div>

              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest text-center mb-6 relative z-10">Connected Integrations</p>

              <div className="relative z-10 grid grid-cols-3 gap-5">
                {[
                  { label: 'WhatsApp', bg: 'bg-green-500', letter: 'W', shadow: 'shadow-green-200' },
                  { label: 'Gmail', bg: 'bg-red-500', letter: 'G', shadow: 'shadow-red-200' },
                  { label: 'SMS', bg: 'bg-teal-500', letter: 'S', shadow: 'shadow-teal-200' },
                  { label: 'Zoom', bg: 'bg-blue-600', letter: 'Z', shadow: 'shadow-blue-200' },
                  { label: 'KAPPLR', bg: 'bg-brand-gradient', letter: 'K', shadow: 'shadow-violet-300', center: true },
                  { label: 'LinkedIn', bg: 'bg-sky-600', letter: 'in', shadow: 'shadow-sky-200' },
                  { label: 'Razorpay', bg: 'bg-indigo-500', letter: 'R', shadow: 'shadow-indigo-200' },
                  { label: 'Google', bg: 'bg-yellow-500', letter: 'G', shadow: 'shadow-yellow-200' },
                  { label: 'UPI', bg: 'bg-orange-500', letter: 'U', shadow: 'shadow-orange-200' },
                ].map((app, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2">
                    <div className={`w-14 h-14 ${app.center ? '' : app.bg} rounded-2xl flex items-center justify-center text-white font-extrabold text-base shadow-lg ${app.shadow} ${app.center ? 'bg-brand-gradient scale-110 ring-4 ring-primary/20' : 'hover:scale-105 transition-transform'}`}>
                      {app.letter}
                    </div>
                    <span className={`text-xs font-medium ${app.center ? 'text-primary font-bold' : 'text-muted-foreground'}`}>{app.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-border/60 text-center relative z-10">
                <span className="text-xs text-muted-foreground">+ More integrations coming soon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium">What They Say</div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Trusted by Academic Leaders</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Institutions across India rely on KAPPLR to power their alumni success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "KAPPLR transformed how we manage alumni. Our reunion attendance doubled and fundraising hit a record high in the very first year.",
                name: "Dr. Priya Sharma",
                role: "Dean, Alumni Affairs",
                institution: "St. Xavier's College, Mumbai",
                initials: "PS",
                color: "bg-violet-500"
              },
              {
                quote: "The WhatsApp integration alone saved our team 20 hours a week. Alumni respond so much faster now and engagement is at an all-time high.",
                name: "Rajesh Kumar",
                role: "Alumni Coordinator",
                institution: "IIT Bombay Alumni Cell",
                initials: "RK",
                color: "bg-purple-500"
              },
              {
                quote: "We were struggling with data scattered in spreadsheets. KAPPLR centralised everything and also helped with our NAAC accreditation reports.",
                name: "Prof. Anita Desai",
                role: "Principal",
                institution: "Fergusson College, Pune",
                initials: "AD",
                color: "bg-teal-500"
              },
            ].map((t, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-border p-8 space-y-6 hover:shadow-xl transition-shadow flex flex-col">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
                </div>
                <p className="text-muted-foreground italic flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3 pt-2 border-t border-border">
                  <div className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role} · {t.institution}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl border border-border/60 p-10 md:p-16 text-center space-y-8">
            <div className="inline-block bg-primary/20 text-primary rounded-full px-4 py-1.5 text-sm font-semibold">Zero Risk</div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Start Free for 30 Days</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Full access to every feature. No credit card. No commitment. Cancel anytime.
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
              {['Alumni Directory', 'Event Management', 'WhatsApp Integration', 'Fundraising Campaigns', 'Analytics Dashboard', 'Mobile App'].map((f, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  {f}
                </div>
              ))}
            </div>
            <Link href="/pricing">
              <Button size="lg" className="bg-brand-gradient hover:opacity-90 text-primary-foreground rounded-full px-10">
                Start Your Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <p className="text-xs text-muted-foreground">After trial, pricing is tailored to your institution size &amp; needs.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-gradient text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Strengthen Your Alumni Ecosystem?</h2>
          <p className="text-lg opacity-90">
            Join 50+ institutions already using KAPPLR to build engaged, connected alumni communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing">
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-muted rounded-full px-8">
                Start Your Free Trial Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/features">
              <Button size="lg" className="border border-white/80 bg-transparent text-white hover:bg-white/10 rounded-full px-8">
                Explore Features
              </Button>
            </Link>
          </div>
          <p className="text-sm opacity-70">No credit card required · Setup in under 10 minutes · Dedicated onboarding support</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
