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
import { ArrowRight, Users, TrendingUp, Award, Zap, CheckCircle2, Star, MessageSquare, Mail, Smartphone, BarChart3, Shield, Handshake, Settings, Heart } from 'lucide-react'
import Image from 'next/image'
import { Animate, Stagger } from '@/components/animate'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0518]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0a0518]" style={{ minHeight: 'calc(95vh - 80px)' }}>
        {/* Glow orbs */}
        <div className="absolute top-[-10%] left-[20%] w-[700px] h-[700px] rounded-full bg-purple-700/40 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[15%] w-[550px] h-[550px] rounded-full bg-teal-500/30 blur-[110px] pointer-events-none" />
        <div className="absolute top-[40%] left-[5%] w-[300px] h-[300px] rounded-full bg-violet-600/20 blur-[80px] pointer-events-none" />
        {/* Dot-grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        <div
          className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 py-20 md:py-28"
          style={{ minHeight: 'calc(95vh - 80px)' }}
        >
          {/* ── Left: Text ── */}
          <div className="flex-1 space-y-7 text-center lg:text-left">
            {/* Badge */}
            <Animate variant="fadeUp" delay={0}>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 text-sm text-white/75 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                India&apos;s #1 Alumni Engagement Platform
                <span className="ml-1 bg-brand-gradient text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full leading-none">
                  NEW
                </span>
              </div>
            </Animate>

            {/* Headline */}
            <Animate variant="fadeUp" delay={0.1}>
              <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold leading-[1.06] tracking-tight text-white">
                Turn Alumni Into<br />
                <span className="text-brand-gradient">Your Greatest</span><br />
                Asset
              </h1>
            </Animate>

            {/* Tagline */}
            <Animate variant="fadeUp" delay={0.18}>
              <p className="text-sm font-semibold text-brand-gradient tracking-wide">
                Turn your alumni into contributors, mentors, and brand ambassadors
              </p>
            </Animate>

            {/* Sub-headline */}
            <Animate variant="fadeUp" delay={0.2}>
              <p className="text-lg text-white/55 max-w-lg leading-relaxed mx-auto lg:mx-0">
                KAPPLR helps schools and colleges build engaged alumni communities,
                unlock mentorship opportunities, and drive institutional growth —{' '}
                <span className="text-white/80 font-medium">all in one platform.</span>
              </p>
            </Animate>

            {/* CTAs */}
            <Animate variant="fadeUp" delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link href="/pricing">
                  <Button
                    size="lg"
                    className="bg-brand-gradient hover:opacity-90 text-white rounded-full px-8 font-semibold text-base"
                    style={{ boxShadow: '0 0 40px rgba(139,92,246,0.45)' }}
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/how-it-works">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8 bg-white/10 hover:bg-white/20 border-white/20 text-white backdrop-blur-sm text-base"
                  >
                    See How It Works
                  </Button>
                </Link>
              </div>
            </Animate>

            {/* Trust strip */}
            <Animate variant="fadeUp" delay={0.4}>
              <div className="space-y-4">
                <p className="text-xs text-white/35">
                  30-day free trial · No credit card required · Cancel anytime
                </p>
                <div className="flex items-center gap-4 justify-center lg:justify-start">
                  <div className="flex -space-x-2">
                    {['BK', 'SR', 'AP', 'MK', 'RJ'].map((initials, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-brand-gradient border-2 border-[#0a0518] flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0"
                      >
                        {initials}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-white/50">
                    <span className="text-white font-semibold">50+ institutions</span> already on KAPPLR
                  </p>
                </div>
              </div>
            </Animate>
          </div>

          {/* ── Right: Dashboard mockup card ── */}
          <Animate variant="slideRight" delay={0.25} className="flex-1 w-full max-w-md lg:max-w-none">
            <div className="relative">
              {/* Glow behind */}
              <div className="absolute inset-0 bg-brand-gradient opacity-20 blur-3xl rounded-3xl scale-110 pointer-events-none" />

              {/* Main card */}
              <div className="relative bg-white/10 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 shadow-2xl space-y-5">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[11px] text-white/40 font-semibold uppercase tracking-widest">Alumni Dashboard</p>
                    <h3 className="text-white font-bold text-lg mt-0.5">St. Xavier&apos;s College</h3>
                  </div>
                  <div className="w-10 h-10 bg-brand-gradient rounded-xl flex items-center justify-center shadow-lg">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-white/6 rounded-2xl p-3 space-y-1.5 border border-white/8">
                    <p className="text-[11px] text-white/40 leading-none">Total Alumni</p>
                    <p className="text-base font-bold text-white leading-none">12,400</p>
                    <p className="text-[11px] font-semibold text-green-400">+8% this mo.</p>
                  </div>
                  <div className="bg-white/6 rounded-2xl p-3 space-y-1.5 border border-white/8">
                    <p className="text-[11px] text-white/40 leading-none">Engaged</p>
                    <p className="text-base font-bold text-white leading-none">3,891</p>
                    <p className="text-[11px] font-semibold text-green-400">+24% this mo.</p>
                  </div>
                  <div className="bg-white/6 rounded-2xl p-3 space-y-1.5 border border-white/8">
                    <p className="text-[11px] text-white/40 leading-none">Donations</p>
                    <p className="text-base font-bold text-white leading-none">₹42L</p>
                    <p className="text-[11px] font-semibold text-green-400">+15% this mo.</p>
                  </div>
                </div>

                {/* Engagement progress bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-white/45">Monthly Engagement Rate</span>
                    <span className="text-white font-bold">78%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[78%] bg-brand-gradient rounded-full" />
                  </div>
                </div>

                {/* Activity feed */}
                <div className="space-y-2.5">
                  <p className="text-[11px] text-white/35 font-semibold uppercase tracking-widest">Recent Activity</p>
                  <div className="flex items-center gap-3">
                    <span className="text-sm">🎓</span>
                    <span className="text-white/65 text-sm flex-1 truncate">Batch 2020 reunion registered</span>
                    <span className="text-white/30 text-xs flex-shrink-0">2m ago</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm">💰</span>
                    <span className="text-white/65 text-sm flex-1 truncate">New donation ₹25,000 received</span>
                    <span className="text-white/30 text-xs flex-shrink-0">1h ago</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm">🤝</span>
                    <span className="text-white/65 text-sm flex-1 truncate">5 new mentorship matches made</span>
                    <span className="text-white/30 text-xs flex-shrink-0">3h ago</span>
                  </div>
                </div>

                {/* Channel pills */}
                <div className="flex gap-2 pt-1 border-t border-white/10">
                  <div className="flex items-center gap-1.5 bg-white/6 border border-white/10 rounded-full px-3 py-1.5 text-xs text-white/55">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                    WhatsApp
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/6 border border-white/10 rounded-full px-3 py-1.5 text-xs text-white/55">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400 flex-shrink-0" />
                    Email
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/6 border border-white/10 rounded-full px-3 py-1.5 text-xs text-white/55">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />
                    SMS
                  </div>
                </div>
              </div>

              {/* Floating badge — top right */}
              <div className="absolute -top-3 -right-3 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                LIVE · +24% growth
              </div>

              {/* Floating badge — bottom left */}
              <div className="absolute -bottom-4 -left-3 bg-white/10 backdrop-blur-xl border border-white/20 text-white text-xs font-medium px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2">
                <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400 flex-shrink-0" />
                95% satisfaction rate
              </div>
            </div>
          </Animate>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-[#0a0518] border-y border-white/8">
        <div className="max-w-7xl mx-auto space-y-8">
          <Animate variant="fadeUp" className="text-center">
            <p className="text-xs font-semibold text-white/35 uppercase tracking-[0.2em]">
              From the house of <span className="text-white/60">MyLeading Campus</span> — Trusted by academic leaders across India
            </p>
          </Animate>
          <Stagger className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6" childVariant="fadeUp">
            {[
              { icon: Users,     value: '1000+',  label: 'Alumni Reconnected Monthly', dot: 'bg-violet-400' },
              { icon: Award,     value: '50+',    label: 'Institutions Using KAPPLR',  dot: 'bg-teal-400' },
              { icon: TrendingUp,value: '₹10Cr+', label: 'Fundraising Facilitated',    dot: 'bg-amber-400' },
              { icon: Star,      value: '95%',    label: 'User Satisfaction Rating',   dot: 'bg-green-400' },
            ].map(({ icon: Icon, value, label, dot }, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/8 hover:bg-white/8 transition-colors">
                <div className={`w-2.5 h-2.5 rounded-full ${dot}`} />
                <div className="text-3xl font-bold text-white">{value}</div>
                <p className="text-sm text-white/45">{label}</p>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Why KAPPLR */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#0a0518] relative overflow-hidden">
        {/* Background glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-violet-700/20 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-cyan-700/10 blur-[100px] pointer-events-none" />
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <Animate variant="fadeUp" className="text-center mb-16 space-y-5">
            <div className="inline-flex items-center gap-2 bg-white/8 border border-violet-500/30 text-violet-300 rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              Why KAPPLR
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Why Institutes Choose{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400">
                KAPPLR
              </span>
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
              Purpose-built for Indian educational institutions — everything your alumni team needs, nothing you don&apos;t.
            </p>
          </Animate>

          {/* MLC Trust Banner */}
          <Animate variant="fadeUp" className="mb-14">
            <div className="relative rounded-3xl p-[1px] bg-gradient-to-r from-violet-500/50 via-purple-500/30 to-cyan-500/40 overflow-hidden">
              <div className="relative bg-[#0f0a2a] rounded-3xl px-8 py-7 overflow-hidden">
                <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-violet-600/15 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-cyan-600/10 blur-2xl pointer-events-none" />
                <div className="relative flex flex-col lg:flex-row items-center gap-8">
                  {/* Left: MLC info */}
                  <div className="flex-1 space-y-2 text-center lg:text-left">
                    <p className="text-[11px] font-bold text-violet-400 uppercase tracking-[0.3em]">From the house of</p>
                    <h3 className="text-2xl font-extrabold text-white">MyLeading Campus</h3>
                    <p className="text-sm text-white/50 leading-relaxed max-w-sm">
                      Trusted by thousands of schools across India — now bringing that expertise to alumni engagement.
                    </p>
                  </div>
                  {/* Divider */}
                  <div className="hidden lg:block w-px h-20 bg-white/10 flex-shrink-0" />
                  {/* Stats */}
                  <div className="flex flex-wrap justify-center lg:justify-start gap-6 flex-1">
                    {[
                      { stat: '50+',    label: 'Institutions',       color: 'text-violet-400' },
                      { stat: '1000+',  label: 'Alumni / Month',     color: 'text-cyan-400' },
                      { stat: '₹10Cr+', label: 'Funds Facilitated',  color: 'text-emerald-400' },
                      { stat: '95%',    label: 'Satisfaction Rate',  color: 'text-pink-400' },
                    ].map(({ stat, label, color }) => (
                      <div key={label} className="text-center">
                        <div className={`text-2xl font-black ${color}`}>{stat}</div>
                        <div className="text-[11px] text-white/40 font-medium mt-0.5">{label}</div>
                      </div>
                    ))}
                  </div>
                  {/* Divider */}
                  <div className="hidden lg:block w-px h-20 bg-white/10 flex-shrink-0" />
                  {/* CTA */}
                  <div className="flex-shrink-0">
                    <Link href="/pricing">
                      <Button className="bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white rounded-xl px-6 font-semibold shadow-lg shadow-violet-900/40 group">
                        Start Free Trial
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Animate>

          {/* 6 feature cards — 3-column grid */}
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Zap,           title: 'Easy to Use Platform',      desc: 'Intuitive dashboard designed for non-technical staff. Go live in minutes — no training needed.',      color: 'from-yellow-500 to-orange-500' },
              { icon: Settings,      title: 'Fully Customizable Portal', desc: 'Brand it as your own — custom fields, logo, colours, and workflows tailored to your institution.',     color: 'from-violet-500 to-purple-600' },
              { icon: MessageSquare, title: 'WhatsApp, Email & SMS',      desc: 'Reach alumni on every channel they already use. Bulk messaging and automated campaigns built-in.',     color: 'from-green-500 to-emerald-600' },
              { icon: Smartphone,    title: 'Alumni Mobile App',          desc: 'Dedicated mobile app for alumni to stay connected, access jobs, and join events on the go.',           color: 'from-blue-500 to-cyan-500' },
              { icon: Shield,        title: 'Secure Cloud-Based System', desc: 'Enterprise-grade security, daily backups, and GDPR-compliant data storage you can always trust.',      color: 'from-red-500 to-rose-600' },
              { icon: Star,          title: 'Best-in-Class Support',      desc: 'Dedicated onboarding, live chat support, and a team that truly understands Indian education.',          color: 'from-pink-500 to-fuchsia-600' },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="group relative flex flex-col gap-4 p-6 bg-white/4 border border-white/8 rounded-2xl hover:bg-white/7 hover:border-white/15 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                  <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-white/45 leading-relaxed">{item.desc}</p>
                  </div>
                  {/* bottom accent line on hover */}
                  <div className={`absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${item.color} transition-all duration-500`} />
                </div>
              )
            })}
          </Stagger>
        </div>
      </section>

      {/* Alumni Community Section */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#0d0720] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-teal-600/12 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-violet-700/12 blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Animate variant="slideLeft" className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/8 border border-teal-500/30 text-teal-300 rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                Community
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Build a{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-300 to-violet-400">
                  Connected
                </span>
                {" "}Alumni Community
              </h2>
              <p className="text-lg text-white/50 leading-relaxed">
                Your alumni are your institution&apos;s greatest advocates. KAPPLR makes it easy to keep them engaged, connected, and invested in your success.
              </p>
              <ul className="space-y-4">
                {[
                  { text: 'Strengthen institutional bonds',  color: 'from-teal-500 to-cyan-500' },
                  { text: 'Create lasting relationships',    color: 'from-violet-500 to-purple-500' },
                  { text: 'Unlock career opportunities',     color: 'from-blue-500 to-cyan-500' },
                  { text: 'Drive fundraising success',       color: 'from-emerald-500 to-teal-500' },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 group">
                    <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                      <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-white/70 group-hover:text-white transition-colors font-medium">{item.text}</span>
                  </li>
                ))}
              </ul>
              <Link href="/use-cases">
                <Button size="lg" className="rounded-full bg-gradient-to-r from-teal-600 to-cyan-500 hover:from-teal-500 hover:to-cyan-400 text-white font-semibold shadow-lg shadow-teal-900/40 group">
                  Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </Animate>

            <Animate variant="slideRight">
              <div className="relative">
                {/* Gradient border frame */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-teal-500/40 via-violet-500/20 to-cyan-500/30 rounded-3xl blur-sm" />
                <div className="relative rounded-3xl overflow-hidden border border-white/10">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/alumni-header-1-nDRXimGOHF9MC0fpDacvoGpjXSrNFL.jpg"
                    alt="Alumni community"
                    width={600}
                    height={500}
                    className="w-full h-[420px] object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0720]/80 via-transparent to-transparent" />
                  {/* Floating stat chips */}
                  <div className="absolute bottom-5 left-5 right-5 flex gap-3">
                    {[
                      { val: '10K+', label: 'Alumni Connected', color: 'text-teal-400' },
                      { val: '200+', label: 'Events Hosted',    color: 'text-violet-400' },
                      { val: '98%',  label: 'Engagement Rate',  color: 'text-cyan-400' },
                    ].map(({ val, label, color }) => (
                      <div key={label} className="flex-1 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-3 text-center">
                        <div className={`text-lg font-black ${color}`}>{val}</div>
                        <div className="text-[10px] text-white/50 font-medium mt-0.5">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Animate>
          </div>
        </div>
      </section>

      {/* How It Works — Teaser */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#0a0518] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-violet-700/15 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-cyan-700/10 blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <Animate variant="fadeUp" className="text-center mb-16 space-y-5">
            <div className="inline-flex items-center gap-2 bg-white/8 border border-violet-500/30 text-violet-300 rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              Simple Process
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Up &amp; Running in{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400">4 Steps</span>
            </h2>
            <p className="text-lg text-white/50 max-w-xl mx-auto">
              Launch your alumni platform in minutes — no technical expertise required.
            </p>
          </Animate>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Settings,  title: 'Create Your Portal',  desc: "Set up a branded portal with your institution's logo, colours, and custom fields in minutes.", tag: '~5 minutes',          num: '01', colors: 'from-violet-500 to-purple-600', glow: 'bg-violet-600/20' },
              { icon: Users,     title: 'Import Alumni',        desc: 'Upload your existing alumni list via Excel or CSV, or invite alumni directly by email.',         tag: 'CSV & Excel',         num: '02', colors: 'from-blue-500 to-cyan-500',    glow: 'bg-blue-600/20' },
              { icon: Zap,       title: 'Launch Engagement',    desc: 'Send campaigns via WhatsApp, Email, and SMS. Host events and kick off fundraising drives.',      tag: 'All channels',        num: '03', colors: 'from-emerald-500 to-teal-500', glow: 'bg-emerald-600/20' },
              { icon: BarChart3, title: 'Track Impact',         desc: 'Monitor engagement metrics and generate NAAC / NBA-ready accreditation reports instantly.',      tag: 'NAAC & NBA ready',    num: '04', colors: 'from-pink-500 to-fuchsia-600', glow: 'bg-pink-600/20' },
            ].map((step, idx) => {
              const Icon = step.icon
              return (
                <Animate key={idx} variant="fadeUp">
                  <div className="group relative flex flex-col gap-5 p-6 bg-white/4 border border-white/8 rounded-2xl hover:bg-white/7 hover:border-white/15 hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full">
                    {/* Big number watermark */}
                    <span className="absolute -top-2 -right-1 text-8xl font-black text-white/3 select-none leading-none group-hover:text-white/5 transition-colors">{step.num}</span>
                    {/* Icon */}
                    <div className={`w-13 h-13 bg-gradient-to-br ${step.colors} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg w-12 h-12`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="text-base font-bold text-white">{step.title}</h3>
                      <p className="text-sm text-white/45 leading-relaxed">{step.desc}</p>
                    </div>
                    {/* Tag */}
                    <div className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1 rounded-full bg-white/6 border border-white/10 text-white/50 self-start`}>
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${step.colors}`} />
                      {step.tag}
                    </div>
                    {/* Bottom accent */}
                    <div className={`absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${step.colors} transition-all duration-500`} />
                  </div>
                </Animate>
              )
            })}
          </div>

          <div className="text-center">
            <Link href="/how-it-works">
              <Button size="lg" className="rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white font-semibold shadow-lg shadow-violet-900/40 group">
                See Detailed Walkthrough <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#0d0720] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] rounded-full bg-purple-600/15 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-cyan-700/8 blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <Animate variant="fadeUp" className="text-center mb-16 space-y-5">
            <div className="inline-flex items-center gap-2 bg-white/8 border border-purple-500/30 text-purple-300 rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              Platform Features
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Everything You Need to{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-violet-300 to-cyan-400">
                Manage Alumni
              </span>
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
              A complete alumni management system for India — from registration to NAAC accreditation reports.
            </p>
          </Animate>

          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 [grid-auto-rows:1fr]">
            {[
              { icon: Users,         title: 'Alumni Database',         desc: 'Auto-updating, searchable database to locate alumni by batch, location, or career.',                     color: 'from-violet-500 to-purple-600',  accent: 'violet-500' },
              { icon: Settings,      title: 'Registration Portal',     desc: 'Branded self-registration portal for alumni to update their profiles and stay connected in seconds.',   color: 'from-blue-500 to-cyan-500',      accent: 'blue-500' },
              { icon: MessageSquare, title: 'Communication Tools',     desc: 'Email, WhatsApp & SMS from one unified dashboard with personalisation and merge tags.',                 color: 'from-green-500 to-emerald-600',  accent: 'green-500' },
              { icon: Zap,           title: 'Event Management',        desc: 'Manage reunions, webinars, and networking events with automated RSVP and attendance tracking.',         color: 'from-yellow-500 to-orange-500',  accent: 'yellow-500' },
              { icon: Award,         title: 'Fundraising & Donations', desc: 'Run targeted fundraising campaigns, track donors, and recognise contributors transparently.',          color: 'from-pink-500 to-rose-600',      accent: 'pink-500' },
              { icon: Handshake,     title: 'Job & Placement Support', desc: 'Connect alumni with opportunities and help them mentor current students into their careers.',           color: 'from-teal-500 to-cyan-600',      accent: 'teal-500' },
              { icon: TrendingUp,    title: 'Alumni Directory',        desc: 'Advanced, filterable directory searchable by year, department, industry, and location.',               color: 'from-indigo-500 to-violet-600',  accent: 'indigo-500' },
              { icon: BarChart3,     title: 'Analytics Dashboard',     desc: 'Real-time engagement metrics, fundraising KPIs, and NAAC / NBA-ready accreditation reports.',         color: 'from-fuchsia-500 to-pink-600',   accent: 'fuchsia-500' },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="group relative overflow-hidden rounded-2xl bg-white/4 border border-white/8 hover:border-white/20 transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full min-h-[240px]">
                  {/* Top gradient bar */}
                  <div className={`h-1 w-full bg-gradient-to-r ${item.color} flex-shrink-0`} />
                  {/* Corner glow */}
                  <div className={`absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-8 blur-3xl transition-opacity duration-500 pointer-events-none`} />
                  <div className="p-6 flex flex-col gap-4 flex-1">
                    {/* Icon row */}
                    <div className="flex items-center justify-between">
                      <div className={`w-11 h-11 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <ArrowRight className="w-4 h-4 text-white/15 group-hover:text-white/50 group-hover:translate-x-0.5 transition-all duration-300" />
                    </div>
                    {/* Text */}
                    <div className="flex-1 space-y-1.5">
                      <h3 className="text-sm font-bold text-white">{item.title}</h3>
                      <p className="text-xs text-white/45 leading-relaxed">{item.desc}</p>
                    </div>
                    {/* Learn more — pinned to bottom */}
                    <Link href="/features" className={`text-xs font-semibold bg-clip-text text-transparent bg-gradient-to-r ${item.color} inline-flex items-center gap-1 w-fit mt-auto`}>
                      Learn more →
                    </Link>
                  </div>
                </div>
              )
            })}
          </Stagger>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#0a0518] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-violet-700/15 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-teal-600/10 blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <Animate variant="fadeUp" className="text-center mb-16 space-y-5">
            <div className="inline-flex items-center gap-2 bg-white/8 border border-teal-500/30 text-teal-300 rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
              Why It Matters
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Benefits of{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-300 to-violet-400">
                Alumni Management
              </span>
              <br className="hidden sm:block" />Software in India
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
              NAAC alumni data management, accreditation reports, and year-round engagement — all automated.
            </p>
          </Animate>

          {/* 5 pillar cards */}
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6 [grid-auto-rows:1fr]">
            {[
              { icon: Users,      num: '01', title: 'Improve Alumni Engagement',         desc: 'Personalised outreach, events, and digital community spaces to keep alumni active year-round.',           tag: 'Engagement',  color: 'from-violet-500 to-purple-600',  text: 'text-violet-400',  border: 'border-violet-500/25', glow: 'bg-violet-600/20' },
              { icon: TrendingUp, num: '02', title: 'Increase Institutional Reputation', desc: 'Active alumni networks signal quality to ranking bodies and accreditors, elevating your prestige.',        tag: 'Reputation',  color: 'from-blue-500 to-cyan-500',      text: 'text-cyan-400',    border: 'border-cyan-500/25',   glow: 'bg-cyan-600/20' },
              { icon: Award,      num: '03', title: 'Enable Fundraising',                desc: 'Convert alumni into donors with streamlined campaigns, recognition tools, and transparent tracking.',      tag: 'Fundraising', color: 'from-emerald-500 to-teal-600',   text: 'text-emerald-400', border: 'border-emerald-500/25',glow: 'bg-emerald-600/20' },
              { icon: Handshake,  num: '04', title: 'Boost Student Placements',          desc: 'Open job, internship, and mentorship doors for current students via alumni industry connections.',         tag: 'Placements',  color: 'from-amber-500 to-orange-500',   text: 'text-amber-400',   border: 'border-amber-500/25',  glow: 'bg-amber-600/20' },
              { icon: Heart,      num: '05', title: 'Build Lifelong Relationships',      desc: 'Turn graduates into lifelong brand ambassadors who champion your institution nationwide.',                 tag: 'Retention',   color: 'from-pink-500 to-fuchsia-600',   text: 'text-pink-400',    border: 'border-pink-500/25',   glow: 'bg-pink-600/20' },
            ].map((b, idx) => {
              const Icon = b.icon
              return (
                <div key={idx} className={`group relative overflow-hidden rounded-2xl bg-white/4 border ${b.border} hover:bg-white/7 hover:-translate-y-1.5 transition-all duration-300 p-6 flex flex-col gap-4 h-full`}>
                  {/* top glow */}
                  <div className={`absolute -top-8 -right-8 w-32 h-32 rounded-full ${b.glow} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                  {/* gradient top line */}
                  <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${b.color} opacity-60 group-hover:opacity-100 transition-opacity`} />
                  {/* number */}
                  <span className={`text-3xl font-black ${b.text} leading-none`}>{b.num}</span>
                  {/* icon */}
                  <div className={`w-11 h-11 bg-gradient-to-br ${b.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  {/* text */}
                  <div className="flex-1 space-y-2">
                    <h3 className="text-sm font-bold text-white leading-snug">{b.title}</h3>
                    <p className="text-xs text-white/45 leading-relaxed">{b.desc}</p>
                  </div>
                  {/* tag */}
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/5 border ${b.border} ${b.text} self-start`}>{b.tag}</span>
                </div>
              )
            })}
          </Stagger>

          {/* Full-width proof banner */}
          <Animate variant="fadeUp">
            <div className="relative rounded-3xl p-[1px] bg-gradient-to-r from-violet-500/30 via-teal-500/20 to-amber-500/20 overflow-hidden">
              <div className="bg-[#0f0a2a] rounded-3xl px-8 py-7 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600/5 via-transparent to-teal-600/5 pointer-events-none" />
                <div className="relative flex flex-col lg:flex-row items-center gap-8">
                  {/* hero stat */}
                  <div className="text-center lg:text-left flex-shrink-0">
                    <div className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-300">1000+</div>
                    <p className="text-sm text-white/40 mt-1 max-w-[180px]">Alumni reconnected in first month</p>
                  </div>
                  <div className="hidden lg:block w-px h-16 bg-white/10 flex-shrink-0" />
                  {/* metrics */}
                  <div className="flex flex-col sm:flex-row flex-1 gap-6">
                    {[
                      { label: 'Avg. engagement rate lift',  value: '+47%', color: 'text-violet-400', bar: 'from-violet-500 to-purple-600', pct: 47 },
                      { label: 'Placement rate improvement', value: '+32%', color: 'text-teal-400',   bar: 'from-teal-500 to-cyan-500',    pct: 32 },
                      { label: 'Fundraising in first year',  value: '₹5L+', color: 'text-amber-400',  bar: 'from-amber-500 to-orange-500', pct: 65 },
                    ].map((m) => (
                      <div key={m.label} className="flex-1 space-y-2 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-white/40 text-xs truncate">{m.label}</span>
                          <span className={`font-black text-base flex-shrink-0 ${m.color}`}>{m.value}</span>
                        </div>
                        <div className="h-1.5 bg-white/6 rounded-full overflow-hidden">
                          <div className={`h-full bg-gradient-to-r ${m.bar} rounded-full`} style={{ width: `${m.pct}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="hidden lg:block w-px h-16 bg-white/10 flex-shrink-0" />
                  <Link href="/pricing" className="flex-shrink-0">
                    <Button className="bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white rounded-xl font-semibold shadow-lg shadow-violet-900/40 group">
                      See Results <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Animate>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#0a0518] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-teal-600/12 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-violet-700/12 blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <Animate variant="fadeUp" className="text-center mb-16 space-y-5">
            <div className="inline-flex items-center gap-2 bg-white/8 border border-teal-500/30 text-teal-300 rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
              Multi-Channel
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Reach Alumni{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-300 to-violet-400">
                Where They Are
              </span>
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
              KAPPLR connects with every channel your alumni already use — no new downloads or accounts needed.
            </p>
          </Animate>

          {/* 3 main channel cards */}
          <Animate variant="fadeUp" className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {[
              {
                icon: MessageSquare,
                label: 'WhatsApp',
                sub: '2B+ active users worldwide',
                color: 'from-green-500 to-emerald-600',
                border: 'border-green-500/25',
                glow: 'bg-green-600/15',
                text: 'text-green-400',
                stat: '98%', statLabel: 'open rate',
              },
              {
                icon: Mail,
                label: 'Email',
                sub: 'Automated campaigns & sequences',
                color: 'from-violet-500 to-purple-600',
                border: 'border-violet-500/25',
                glow: 'bg-violet-600/15',
                text: 'text-violet-400',
                stat: '10×', statLabel: 'faster outreach',
              },
              {
                icon: Smartphone,
                label: 'SMS',
                sub: 'Instant OTP & transactional alerts',
                color: 'from-teal-500 to-cyan-600',
                border: 'border-teal-500/25',
                glow: 'bg-teal-600/15',
                text: 'text-teal-400',
                stat: '< 5s', statLabel: 'delivery time',
              },
            ].map((ch) => {
              const Icon = ch.icon
              return (
                <div key={ch.label} className={`group relative overflow-hidden rounded-2xl bg-white/4 border ${ch.border} p-6 flex flex-col gap-5 hover:-translate-y-1 transition-all duration-300`}>
                  <div className={`absolute -top-8 -right-8 w-32 h-32 rounded-full ${ch.glow} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                  <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${ch.color}`} />
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 bg-gradient-to-br ${ch.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className={`text-xl font-black ${ch.text}`}>{ch.stat}</div>
                      <div className="text-[10px] text-white/30 font-medium">{ch.statLabel}</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1">{ch.label}</h3>
                    <p className="text-sm text-white/45">{ch.sub}</p>
                  </div>
                </div>
              )
            })}
          </Animate>

          {/* Integration logos grid + capabilities */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Capabilities list */}
            <Animate variant="slideLeft">
              <div className="bg-white/4 border border-white/8 rounded-2xl p-7 space-y-5 h-full">
                <h3 className="text-base font-bold text-white mb-2">What You Can Do</h3>
                {[
                  { icon: Zap,         text: 'Send bulk WhatsApp blasts in one click',     color: 'from-green-500 to-emerald-600' },
                  { icon: Mail,        text: 'Automated email drip sequences for events',   color: 'from-violet-500 to-purple-600' },
                  { icon: Smartphone,  text: 'SMS OTP & transactional notifications',       color: 'from-teal-500 to-cyan-600' },
                  { icon: Users,       text: 'Personalised messaging via merge tags',       color: 'from-blue-500 to-cyan-500' },
                  { icon: BarChart3,   text: 'Unified dashboard — all channels, one view', color: 'from-fuchsia-500 to-pink-600' },
                ].map((item, idx) => {
                  const Icon = item.icon
                  return (
                    <div key={idx} className="flex items-center gap-4 group">
                      <div className={`w-9 h-9 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm text-white/60 group-hover:text-white/90 transition-colors">{item.text}</span>
                    </div>
                  )
                })}
              </div>
            </Animate>

            {/* Integration tiles */}
            <Animate variant="slideRight">
              <div className="bg-white/4 border border-white/8 rounded-2xl p-7 h-full">
                <p className="text-[11px] font-bold text-white/30 uppercase tracking-[0.25em] mb-6">Works with your tools</p>
                <div className="grid grid-cols-4 gap-4">
                  {[
                    { label: 'WhatsApp', color: 'bg-gradient-to-br from-green-500 to-emerald-600',   letter: 'W' },
                    { label: 'Gmail',    color: 'bg-gradient-to-br from-red-500 to-rose-600',         letter: 'G' },
                    { label: 'LinkedIn', color: 'bg-gradient-to-br from-sky-500 to-blue-600',         letter: 'in' },
                    { label: 'Zoom',     color: 'bg-gradient-to-br from-blue-600 to-indigo-600',      letter: 'Z' },
                    { label: 'Razorpay', color: 'bg-gradient-to-br from-indigo-500 to-violet-600',    letter: 'R' },
                    { label: 'Google',   color: 'bg-gradient-to-br from-yellow-400 to-orange-500',    letter: 'G' },
                    { label: 'SMS',      color: 'bg-gradient-to-br from-teal-500 to-cyan-600',        letter: 'S' },
                    { label: 'UPI',      color: 'bg-gradient-to-br from-orange-500 to-amber-500',     letter: 'U' },
                  ].map((app) => (
                    <div key={app.label} className="flex flex-col items-center gap-2 group">
                      <div className={`w-14 h-14 ${app.color} rounded-2xl flex items-center justify-center text-white font-extrabold text-sm shadow-lg group-hover:scale-110 group-hover:-translate-y-0.5 transition-all duration-200`}>
                        {app.letter}
                      </div>
                      <span className="text-[11px] text-white/35 group-hover:text-white/60 transition-colors font-medium">{app.label}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-white/8 text-center">
                  <span className="text-xs text-white/25 font-medium">+ More integrations coming soon</span>
                </div>
              </div>
            </Animate>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#0d0720] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-violet-700/15 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-teal-600/10 blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <Animate variant="fadeUp" className="text-center mb-16 space-y-5">
            <div className="inline-flex items-center gap-2 bg-white/8 border border-yellow-500/30 text-yellow-300 rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
              What They Say
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Trusted by{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-300 to-violet-400">
                Academic Leaders
              </span>
            </h2>
            <p className="text-lg text-white/50 max-w-xl mx-auto">
              Institutions across India rely on KAPPLR to power their alumni success.
            </p>
          </Animate>

          {/* Featured testimonial — large horizontal card */}
          <Animate variant="fadeUp" className="mb-10">
            <div className="relative rounded-3xl p-[1px] bg-gradient-to-r from-violet-500/50 via-purple-400/30 to-teal-500/40 overflow-hidden">
              <div className="relative bg-[#0f0a2a] rounded-3xl p-8 md:p-12 overflow-hidden">
                <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-violet-600/15 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-teal-600/10 blur-2xl pointer-events-none" />
                <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12">
                  {/* Quote mark */}
                  <div className="hidden md:flex w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-500 to-teal-500 items-center justify-center flex-shrink-0 text-4xl font-serif text-white/80 shadow-xl">&ldquo;</div>
                  <div className="flex-1 space-y-4 text-center md:text-left">
                    <p className="text-xl md:text-2xl font-bold text-white leading-snug">
                      "We reconnected with 1000+ alumni in weeks using KAPPLR"
                    </p>
                    <div className="flex items-center justify-center md:justify-start gap-3">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                      </div>
                      <span className="text-white/40 text-sm">— Alumni Coordinator, Leading College, Kolkata</span>
                    </div>
                  </div>
                  {/* Impact badge */}
                  <div className="flex-shrink-0 bg-white/5 border border-white/10 rounded-2xl p-5 text-center min-w-[120px]">
                    <div className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-b from-teal-400 to-cyan-300">1000+</div>
                    <div className="text-[11px] text-white/40 font-medium mt-1">Alumni reconnected</div>
                  </div>
                </div>
              </div>
            </div>
          </Animate>

          {/* 3 cards */}
          <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                quote: "KAPPLR transformed how we manage alumni. Our reunion attendance doubled and fundraising hit a record high in the very first year.",
                name: "Dr. Priya Sharma", role: "Dean, Alumni Affairs", institution: "St. Xavier's College, Mumbai",
                initials: "PS", color: 'from-violet-500 to-purple-600', border: 'border-violet-500/25',
              },
              {
                quote: "The WhatsApp integration alone saved our team 20 hours a week. Alumni respond so much faster now and engagement is at an all-time high.",
                name: "Rajesh Kumar", role: "Alumni Coordinator", institution: "IIT Bombay Alumni Cell",
                initials: "RK", color: 'from-blue-500 to-cyan-500', border: 'border-blue-500/25',
              },
              {
                quote: "We were struggling with data scattered in spreadsheets. KAPPLR centralised everything and helped with our NAAC accreditation reports.",
                name: "Prof. Anita Desai", role: "Principal", institution: "Fergusson College, Pune",
                initials: "AD", color: 'from-teal-500 to-emerald-600', border: 'border-teal-500/25',
              },
            ].map((t, idx) => (
              <div key={idx} className={`group relative overflow-hidden bg-white/4 border ${t.border} rounded-2xl p-6 flex flex-col gap-5 hover:bg-white/7 hover:-translate-y-1 transition-all duration-300`}>
                {/* top gradient line */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${t.color}`} />
                {/* stars */}
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />)}
                </div>
                {/* quote */}
                <p className="text-sm text-white/60 leading-relaxed flex-1 italic">&ldquo;{t.quote}&rdquo;</p>
                {/* author */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/8">
                  <div className={`w-10 h-10 bg-gradient-to-br ${t.color} rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{t.name}</div>
                    <div className="text-[11px] text-white/35">{t.role} · {t.institution}</div>
                  </div>
                </div>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#0a0518] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-violet-700/20 blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <Animate variant="scaleIn">
            <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-violet-500/50 via-purple-400/25 to-cyan-500/40">
              <div className="relative bg-[#0f0a2a] rounded-3xl overflow-hidden">
                {/* inner glow blobs */}
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-violet-600/15 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-cyan-600/10 blur-2xl pointer-events-none" />

                <div className="relative p-10 md:p-14">
                  {/* top row */}
                  <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
                    <div className="flex-1 text-center md:text-left space-y-3">
                      <div className="inline-flex items-center gap-2 bg-white/8 border border-violet-500/30 text-violet-300 rounded-full px-4 py-1.5 text-sm font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                        Zero Risk · 30-Day Free Trial
                      </div>
                      <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                        Start Free for{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400">30 Days</span>
                      </h2>
                      <p className="text-white/50 text-base leading-relaxed max-w-md">
                        Full access to every feature. No credit card. No commitment. Cancel anytime.
                      </p>
                    </div>
                    {/* CTA */}
                    <div className="flex-shrink-0 flex flex-col items-center gap-3">
                      <Link href="/pricing">
                        <Button size="lg" className="bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white rounded-xl px-10 font-semibold shadow-xl shadow-violet-900/50 group">
                          Start Your Free Trial
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                      <p className="text-xs text-white/25">After trial, pricing is tailored to your needs</p>
                    </div>
                  </div>

                  {/* feature chips */}
                  <div className="border-t border-white/8 pt-8">
                    <p className="text-[11px] text-white/30 uppercase tracking-widest font-semibold mb-5 text-center">Everything included in your trial</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {[
                        { icon: Users,         label: 'Alumni Directory' },
                        { icon: Zap,           label: 'Event Management' },
                        { icon: MessageSquare, label: 'WhatsApp Integration' },
                        { icon: Award,         label: 'Fundraising Campaigns' },
                        { icon: BarChart3,     label: 'Analytics Dashboard' },
                        { icon: Smartphone,    label: 'Mobile App' },
                      ].map(({ icon: Icon, label }) => (
                        <div key={label} className="flex items-center gap-3 bg-white/4 border border-white/8 rounded-xl px-4 py-3 hover:bg-white/7 transition-colors">
                          <CheckCircle2 className="w-4 h-4 text-violet-400 flex-shrink-0" />
                          <span className="text-sm text-white/60 font-medium">{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Animate>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Full-bleed gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900 via-purple-900 to-teal-900" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-violet-600/25 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-teal-500/20 blur-[100px] pointer-events-none" />

        <Animate variant="fadeIn">
          <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
            {/* badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 rounded-full px-5 py-2 text-sm font-semibold backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
              Join 50+ institutions across India
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Ready to Unlock the Power of<br className="hidden sm:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-cyan-200 to-violet-300"> Your Alumni Network?</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Join forward-thinking institutes transforming their graduate networks into active, engaged communities.
            </p>
            {/* trust microcopy */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/50">
              {['No credit card required', 'Setup in under 10 minutes', 'Dedicated onboarding support'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Link href="/pricing">
                <Button size="lg" className="bg-white text-[#0a0518] hover:bg-white/95 rounded-xl px-10 font-bold shadow-2xl shadow-white/20 group">
                  Claim Your Free Trial
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/features">
                <Button size="lg" className="border border-white/30 bg-white/10 text-white hover:bg-white/20 rounded-xl px-8 backdrop-blur-sm font-semibold">
                  Explore Features
                </Button>
              </Link>
            </div>
          </div>
        </Animate>
      </section>

      <Footer />
    </div>
  )
}
