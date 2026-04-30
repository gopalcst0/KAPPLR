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
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        {/* Background blobs */}
        <div className="absolute top-10 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          {/* Trust pill */}
          <div className="flex justify-center lg:justify-start mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium border border-primary/20">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Trusted by 50+ Institutions Across India
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <div className="space-y-8 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Turn Alumni Into Your{' '}
                <span className="text-primary relative">
                  Greatest Asset
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
                KAPPLR helps schools and colleges build engaged alumni communities, unlock mentorship opportunities, and drive institutional growth — all in one platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link href="/pricing">
                  <Button size="lg" className="bg-primary hover:bg-secondary text-primary-foreground rounded-full px-8">
                    Start Free Trial
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/how-it-works">
                  <Button size="lg" variant="outline" className="rounded-full px-8">
                    See How It Works
                  </Button>
                </Link>
              </div>

              {/* Social proof row */}
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="flex -space-x-2">
                  {['bg-blue-400', 'bg-indigo-400', 'bg-violet-400', 'bg-purple-400', 'bg-fuchsia-400'].map((color, i) => (
                    <div
                      key={i}
                      className={`w-9 h-9 rounded-full ${color} border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow`}
                    >
                      {['A', 'B', 'C', 'D', 'E'][i]}
                    </div>
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">1,000+</span> alumni reconnected every month
                </div>
              </div>

              <p className="text-xs text-muted-foreground">30-day free trial · No credit card required · Cancel anytime</p>
            </div>

            {/* Right: Image with floating cards */}
            <div className="relative mt-8 lg:mt-0">
              {/* Glow behind image */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />

              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shutterstock_658847998-c9tVy9ZQZ6M78DFJQEVrj5IO9E4Vly.webp"
                  alt="Graduation celebration - Alumni holding caps"
                  width={600}
                  height={500}
                  className="rounded-2xl w-full object-cover"
                  priority
                />
              </div>

              {/* Floating card — bottom left */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-4 border border-border/60 flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-lg font-bold text-foreground leading-none">₹10Cr+</div>
                  <div className="text-xs text-muted-foreground mt-0.5">Fundraising Facilitated</div>
                </div>
              </div>

              {/* Floating card — top right */}
              <div className="absolute -top-5 -right-5 bg-white rounded-2xl shadow-xl p-4 border border-border/60 flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-lg font-bold text-foreground leading-none">95%</div>
                  <div className="text-xs text-muted-foreground mt-0.5">Satisfaction Rate</div>
                </div>
              </div>
            </div>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Why Schools Choose KAPPLR</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built specifically for academic institutions to maximize alumni engagement and institutional impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Dynamic Alumni Directory',
                description: 'Keep track of all alumni with their career details, interests, and engagement history in one unified platform.'
              },
              {
                icon: TrendingUp,
                title: 'Placement Hub',
                description: 'Connect graduates with job opportunities and help employers find talented alumni for roles.'
              },
              {
                icon: Award,
                title: 'Fundraising Module',
                description: 'Unlock giving potential with targeted campaigns, tracking, and recognition for alumni donors.'
              },
              {
                icon: Zap,
                title: 'Event Management',
                description: 'Organize reunions, webinars, and networking events. Build community through meaningful connections.'
              },
              {
                icon: TrendingUp,
                title: 'Mentorship Program',
                description: 'Facilitate mentorship between students and alumni to support career growth and development.'
              },
              {
                icon: Users,
                title: 'Accreditation Support',
                description: 'Generate compliance reports and demonstrate institutional impact for accreditation bodies.'
              },
            ].map((benefit, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
                <benefit.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
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
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium">Simple Process</div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Up &amp; Running in 4 Steps</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Launch your alumni platform in minutes — no technical expertise required.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { step: '01', icon: Settings,  title: 'Create Your Portal',  desc: "Set up a branded portal with your logo and custom fields.",       iconBg: 'bg-blue-500' },
              { step: '02', icon: Users,     title: 'Import Alumni',        desc: 'Bulk import via Excel/CSV or invite by email in one click.',      iconBg: 'bg-indigo-500' },
              { step: '03', icon: Zap,       title: 'Launch Engagement',    desc: 'Run campaigns, events, and fundraisers from one dashboard.',      iconBg: 'bg-violet-500' },
              { step: '04', icon: BarChart3, title: 'Track Impact',         desc: 'Monitor metrics and generate accreditation-ready reports.',       iconBg: 'bg-purple-500' },
            ].map((s, idx) => {
              const Icon = s.icon
              return (
                <div key={idx} className="relative flex flex-col gap-4 p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className={`w-11 h-11 ${s.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-4xl font-extrabold text-primary/10">{s.step}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{s.title}</h3>
                    <p className="text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                  {idx < 3 && (
                    <div className="hidden lg:flex absolute top-8 -right-3 z-10 w-6 h-6 bg-background border border-border rounded-full items-center justify-center">
                      <ArrowRight className="w-3 h-3 text-primary" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div className="text-center mt-8">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium">Multi-Channel</div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Reach Alumni Where They Already Are</h2>
              <p className="text-lg text-muted-foreground">
                KAPPLR integrates with the tools your alumni already use — no downloads or new accounts needed to get them engaged.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: MessageSquare, label: 'WhatsApp', color: 'bg-green-50 text-green-600 border-green-200' },
                  { icon: Mail, label: 'Email', color: 'bg-blue-50 text-blue-600 border-blue-200' },
                  { icon: Smartphone, label: 'SMS', color: 'bg-purple-50 text-purple-600 border-purple-200' },
                ].map((ch, idx) => {
                  const Icon = ch.icon
                  return (
                    <div key={idx} className={`flex items-center gap-3 p-4 rounded-xl border ${ch.color}`}>
                      <Icon className="w-6 h-6 flex-shrink-0" />
                      <span className="font-semibold">{ch.label}</span>
                    </div>
                  )
                })}
              </div>
              <ul className="space-y-3">
                {[
                  'Send bulk WhatsApp messages with one click',
                  'Automated email sequences for campaigns',
                  'SMS OTP & transactional notifications',
                  'Personalised messaging via merge tags',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-10 flex flex-col items-center justify-center gap-6 border border-border/40">
              <div className="grid grid-cols-3 gap-6">
                {[
                  { label: 'WhatsApp', bg: 'bg-green-500', letter: 'W' },
                  { label: 'Gmail', bg: 'bg-red-500', letter: 'G' },
                  { label: 'SMS', bg: 'bg-purple-500', letter: 'S' },
                  { label: 'Zoom', bg: 'bg-blue-600', letter: 'Z' },
                  { label: 'KAPPLR', bg: 'bg-primary', letter: 'K' },
                  { label: 'LinkedIn', bg: 'bg-sky-600', letter: 'in' },
                  { label: 'Razorpay', bg: 'bg-blue-500', letter: 'R' },
                  { label: 'Google', bg: 'bg-yellow-500', letter: 'G' },
                  { label: 'UPI', bg: 'bg-orange-500', letter: 'U' },
                ].map((app, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2">
                    <div className={`w-12 h-12 ${app.bg} rounded-2xl flex items-center justify-center text-white font-bold shadow-lg`}>
                      {app.letter}
                    </div>
                    <span className="text-xs text-muted-foreground">{app.label}</span>
                  </div>
                ))}
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
                color: "bg-blue-500"
              },
              {
                quote: "The WhatsApp integration alone saved our team 20 hours a week. Alumni respond so much faster now and engagement is at an all-time high.",
                name: "Rajesh Kumar",
                role: "Alumni Coordinator",
                institution: "IIT Bombay Alumni Cell",
                initials: "RK",
                color: "bg-indigo-500"
              },
              {
                quote: "We were struggling with data scattered in spreadsheets. KAPPLR centralised everything and also helped with our NAAC accreditation reports.",
                name: "Prof. Anita Desai",
                role: "Principal",
                institution: "Fergusson College, Pune",
                initials: "AD",
                color: "bg-violet-500"
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
              <Button size="lg" className="bg-primary hover:bg-secondary text-primary-foreground rounded-full px-10">
                Start Your Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <p className="text-xs text-muted-foreground">After trial, pricing is tailored to your institution size &amp; needs.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
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
