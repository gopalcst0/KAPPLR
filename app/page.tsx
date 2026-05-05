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
        <div className="max-w-7xl mx-auto">
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

      {/* Key Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0518] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-violet-700/15 blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <Animate variant="fadeUp" className="text-center mb-16 space-y-4">
            <div className="inline-block bg-white/8 border border-white/12 text-white/70 rounded-full px-4 py-1.5 text-sm font-medium">Why KAPPLR</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Why Schools Choose KAPPLR</h2>
            <p className="text-lg text-white/45 max-w-2xl mx-auto">
              Built specifically for academic institutions to maximize alumni engagement and institutional impact.
            </p>
          </Animate>

          <Animate variant="fadeUp" delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Users,     tag: 'Directory',  tagColor: 'bg-violet-500/20 text-violet-300',  iconBg: 'bg-violet-500', title: 'Dynamic Alumni Directory',  description: 'Keep track of all alumni with their career details, interests, and engagement history in one unified platform.',    stat: '10,000+ profiles', statLabel: 'managed on average' },
              { icon: TrendingUp,tag: 'Placement',  tagColor: 'bg-teal-500/20 text-teal-300',     iconBg: 'bg-teal-500',   title: 'Placement Hub',              description: 'Connect graduates with job opportunities and help employers find talented alumni for roles.',                      stat: '3x faster',        statLabel: 'placement matching' },
              { icon: Award,     tag: 'Fundraising',tagColor: 'bg-amber-500/20 text-amber-300',   iconBg: 'bg-amber-500',  title: 'Fundraising Module',         description: 'Unlock giving potential with targeted campaigns, tracking, and recognition for alumni donors.',                   stat: '₹10Cr+',           statLabel: 'raised across institutions' },
              { icon: Zap,       tag: 'Events',     tagColor: 'bg-purple-500/20 text-purple-300', iconBg: 'bg-purple-500', title: 'Event Management',           description: 'Organize reunions, webinars, and networking events. Build community through meaningful connections.',             stat: '2x attendance',    statLabel: 'vs traditional methods' },
              { icon: Handshake, tag: 'Mentorship', tagColor: 'bg-cyan-500/20 text-cyan-300',     iconBg: 'bg-cyan-500',   title: 'Mentorship Program',         description: 'Facilitate mentorship between students and alumni to support career growth and development.',                  stat: '500+ matches',     statLabel: 'per institution/year' },
              { icon: Shield,    tag: 'Compliance', tagColor: 'bg-green-500/20 text-green-300',   iconBg: 'bg-green-500',  title: 'Accreditation Support',      description: 'Generate compliance reports and demonstrate institutional impact for accreditation bodies.',                    stat: 'NAAC & NBA',       statLabel: 'ready reports' },
            ].map((benefit, idx) => {
              const Icon = benefit.icon
              return (
                <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:bg-white/8 hover:border-white/20 transition-all group">
                  <div className="h-1 bg-brand-gradient" />
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${benefit.tagColor}`}>{benefit.tag}</span>
                      <div className={`w-10 h-10 ${benefit.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-1.5">{benefit.title}</h3>
                      <p className="text-sm text-white/45 leading-relaxed">{benefit.description}</p>
                    </div>
                    <div className="pt-3 border-t border-white/8 flex items-center justify-between">
                      <div>
                        <div className="text-base font-bold text-brand-gradient">{benefit.stat}</div>
                        <div className="text-xs text-white/35">{benefit.statLabel}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-white/70 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          </Animate>
        </div>
      </section>

      {/* Alumni Community Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0d0720] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-teal-600/15 blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Animate variant="slideLeft" className="space-y-6">
              <div className="inline-block bg-white/8 border border-white/12 text-white/60 rounded-full px-4 py-1.5 text-sm font-medium">Community</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Build a Connected Alumni Community</h2>
              <p className="text-lg text-white/45">
                Your alumni are your institution&apos;s greatest advocates. KAPPLR makes it easy to keep them engaged, connected, and invested in your success.
              </p>
              <ul className="space-y-3">
                {['Strengthen institutional bonds', 'Create lasting relationships', 'Unlock career opportunities', 'Drive fundraising success'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-gradient flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/use-cases">
                <Button size="lg" className="rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white backdrop-blur-sm">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </Animate>
            <Animate variant="slideRight">
              <div className="relative">
                <div className="absolute inset-0 bg-brand-gradient opacity-15 blur-3xl rounded-3xl pointer-events-none" />
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/alumni-header-1-nDRXimGOHF9MC0fpDacvoGpjXSrNFL.jpg"
                  alt="Alumni community - diverse people from different generations"
                  width={500}
                  height={500}
                  className="relative rounded-2xl w-full h-full object-cover border border-white/10"
                />
              </div>
            </Animate>
          </div>
        </div>
      </section>

      {/* How It Works — Teaser */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0a0518] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-purple-700/10 blur-[100px] pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <Animate variant="fadeUp" className="text-center mb-12 space-y-3">
            <div className="inline-block bg-white/8 border border-white/12 text-white/60 rounded-full px-4 py-1.5 text-sm font-medium">Simple Process</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Up &amp; Running in 4 Steps</h2>
            <p className="text-white/45 max-w-xl mx-auto">
              Launch your alumni platform in minutes — no technical expertise required.
            </p>
          </Animate>

          {(() => {
            const steps = [
              { icon: Settings, title: 'Create Your Portal', desc: "Set up a branded, custom portal with your institution's logo, colours, and fields in minutes.", detail: 'Step 1 · Portal Setup', meta: 'Takes ~5 minutes', status: 'done' },
              { icon: Users,    title: 'Import Alumni',       desc: 'Upload your existing alumni list via Excel or CSV, or invite alumni directly by email.',          detail: 'Step 2 · Data Import',  meta: 'CSV & Excel supported', status: 'done' },
              { icon: Zap,      title: 'Launch Engagement',   desc: 'Send campaigns via WhatsApp, Email, and SMS. Host events and kick off fundraising drives.',       detail: 'Step 3 · Go Live',      meta: 'All channels ready',    status: 'active' },
              { icon: BarChart3,title: 'Track Impact',        desc: 'Monitor engagement metrics and generate NAAC / NBA-ready accreditation reports instantly.',       detail: 'Step 4 · Analytics',    meta: 'NAAC & NBA ready',      status: 'upcoming' },
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
                            ${isDone ? 'bg-white/10 border-violet-500' : ''}
                            ${isActive ? 'bg-brand-gradient border-transparent shadow-lg shadow-purple-900 scale-110' : ''}
                            ${s.status === 'upcoming' ? 'bg-white/5 border-white/15' : ''}
                          `}>
                            {isDone
                              ? <CheckCircle2 className="w-6 h-6 text-violet-400" />
                              : <Icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-white/25'}`} />
                            }
                          </div>
                          <span className={`text-xs font-semibold text-center leading-tight hidden sm:block
                            ${isDone ? 'text-violet-400' : ''}
                            ${isActive ? 'text-white' : ''}
                            ${s.status === 'upcoming' ? 'text-white/25' : ''}
                          `}>
                            {s.title}
                          </span>
                        </div>
                        {idx < steps.length - 1 && (
                          <div className={`flex-1 h-0.5 mx-2 rounded-full ${idx < 2 ? 'bg-violet-500' : 'bg-white/10'}`} />
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
                      <div key={idx} className={`rounded-2xl p-5 flex flex-col gap-4 transition-all
                        ${isActive ? 'bg-white/10 border-2 border-violet-500/60 shadow-lg shadow-purple-900/40' : 'bg-white/5 border border-white/8'}
                        ${isUpcoming ? 'opacity-50' : ''}
                      `}>
                        <div className="flex items-start justify-between gap-2">
                          <span className={`text-xs font-semibold ${isDone ? 'text-violet-400' : isActive ? 'text-violet-300' : 'text-white/25'}`}>
                            {s.detail}
                          </span>
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0
                            ${isDone ? 'bg-violet-500/20' : isActive ? 'bg-brand-gradient' : 'bg-white/5'}
                          `}>
                            <Icon className={`w-4 h-4 ${isDone ? 'text-violet-400' : isActive ? 'text-white' : 'text-white/25'}`} />
                          </div>
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className={`text-sm leading-relaxed ${isUpcoming ? 'text-white/25' : 'text-white/70'}`}>{s.desc}</p>
                          <p className={`text-xs ${isUpcoming ? 'text-white/20' : 'text-white/35'}`}>{s.meta}</p>
                        </div>
                        <div className="pt-2 border-t border-white/8">
                          {isDone && (
                            <span className="flex items-center gap-1.5 text-xs text-violet-400 font-medium">
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
                            <span className="text-xs text-white/20 font-medium">Coming up next</span>
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
              <Button size="lg" className="rounded-full bg-white/8 hover:bg-white/12 border border-white/15 text-white">
                See Detailed Walkthrough <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Spotlight */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0d0720] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-purple-600/15 blur-[80px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <Animate variant="fadeUp" className="text-center mb-16 space-y-4">
            <div className="inline-block bg-white/8 border border-white/12 text-white/60 rounded-full px-4 py-1.5 text-sm font-medium">Platform Highlights</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Everything Alumni Engagement Needs</h2>
          </Animate>
          <Animate variant="fadeUp" delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Handshake, title: 'Mentorship & Placement', desc: 'Match students with alumni mentors automatically. Post jobs, internships, and let alumni refer candidates directly.',       href: '/features' },
              { icon: BarChart3, title: 'Real-Time Analytics',    desc: 'Track engagement rates, donations, event attendance, and generate NAAC/NBA-ready accreditation reports instantly.',          href: '/features' },
              { icon: Shield,    title: 'Enterprise-Grade Security', desc: 'Data encrypted at rest and in transit. GDPR-compliant. Role-based access controls for admins and alumni.',             href: '/features' },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/8 hover:border-white/20 transition-all space-y-4 group">
                  <div className="w-14 h-14 bg-brand-gradient rounded-2xl flex items-center justify-center">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="text-white/45">{item.desc}</p>
                  <Link href={item.href} className="inline-flex items-center text-violet-400 text-sm font-medium hover:text-violet-300 transition-colors">
                    Learn more <ArrowRight className="ml-1 w-3.5 h-3.5" />
                  </Link>
                </div>
              )
            })}
          </div>
          </Animate>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0518] relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-teal-600/15 blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <Animate variant="fadeUp" className="text-center mb-14 space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/8 border border-white/12 text-white/60 rounded-full px-4 py-1.5 text-sm font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
              Multi-Channel
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Reach Alumni Where They Already Are</h2>
            <p className="text-lg text-white/45 max-w-2xl mx-auto">
              KAPPLR connects with tools your alumni already use — no new downloads or accounts needed.
            </p>
          </Animate>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Animate variant="slideLeft" className="space-y-6">
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: MessageSquare, label: 'WhatsApp', sub: '2B+ users',   iconColor: 'text-green-400',  bg: 'bg-green-500/10',  border: 'border-green-500/20',  dot: 'bg-green-400' },
                  { icon: Mail,          label: 'Email',    sub: 'Automated',   iconColor: 'text-violet-400', bg: 'bg-violet-500/10', border: 'border-violet-500/20', dot: 'bg-violet-400' },
                  { icon: Smartphone,    label: 'SMS',      sub: 'Instant OTP', iconColor: 'text-teal-400',   bg: 'bg-teal-500/10',   border: 'border-teal-500/20',   dot: 'bg-teal-400' },
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
                        <div className="text-xs text-white/35 mt-0.5">{ch.sub}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="bg-white/5 border border-white/8 rounded-2xl p-6 space-y-4">
                {[
                  { icon: Zap,         text: 'Send bulk WhatsApp messages with one click', color: 'text-green-400 bg-green-500/15' },
                  { icon: Mail,        text: 'Automated email sequences for campaigns',    color: 'text-violet-400 bg-violet-500/15' },
                  { icon: Smartphone,  text: 'SMS OTP & transactional notifications',      color: 'text-teal-400 bg-teal-500/15' },
                  { icon: Users,       text: 'Personalised messaging via merge tags',      color: 'text-white/70 bg-white/8' },
                ].map((item, idx) => {
                  const Icon = item.icon
                  return (
                    <div key={idx} className="flex items-center gap-4">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${item.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm text-white/60">{item.text}</span>
                    </div>
                  )
                })}
              </div>
            </Animate>

            <Animate variant="slideRight">
            <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-64 h-64 rounded-full border border-white/5" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-44 h-44 rounded-full border border-white/5" />
              </div>
              <p className="text-xs font-semibold text-white/30 uppercase tracking-widest text-center mb-6 relative z-10">Connected Integrations</p>
              <div className="relative z-10 grid grid-cols-3 gap-5">
                {[
                  { label: 'WhatsApp', bg: 'bg-green-500',   letter: 'W'  },
                  { label: 'Gmail',    bg: 'bg-red-500',     letter: 'G'  },
                  { label: 'SMS',      bg: 'bg-teal-500',    letter: 'S'  },
                  { label: 'Zoom',     bg: 'bg-blue-600',    letter: 'Z'  },
                  { label: 'KAPPLR',   bg: '',               letter: 'K', center: true },
                  { label: 'LinkedIn', bg: 'bg-sky-600',     letter: 'in' },
                  { label: 'Razorpay', bg: 'bg-indigo-500',  letter: 'R'  },
                  { label: 'Google',   bg: 'bg-yellow-500',  letter: 'G'  },
                  { label: 'UPI',      bg: 'bg-orange-500',  letter: 'U'  },
                ].map((app, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white font-extrabold text-base shadow-lg hover:scale-105 transition-transform
                      ${app.center ? 'bg-brand-gradient scale-110 ring-4 ring-violet-500/30' : app.bg}
                    `}>
                      {app.letter}
                    </div>
                    <span className={`text-xs font-medium ${app.center ? 'text-white font-bold' : 'text-white/35'}`}>{app.label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-white/8 text-center relative z-10">
                <span className="text-xs text-white/25">+ More integrations coming soon</span>
              </div>
            </div>
            </Animate>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0d0720] relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-violet-700/15 blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <Animate variant="fadeUp" className="text-center mb-16 space-y-4">
            <div className="inline-block bg-white/8 border border-white/12 text-white/60 rounded-full px-4 py-1.5 text-sm font-medium">What They Say</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Trusted by Academic Leaders</h2>
            <p className="text-lg text-white/45 max-w-xl mx-auto">
              Institutions across India rely on KAPPLR to power their alumni success.
            </p>
          </Animate>
          <Animate variant="fadeUp" delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quote: "KAPPLR transformed how we manage alumni. Our reunion attendance doubled and fundraising hit a record high in the very first year.",                                            name: "Dr. Priya Sharma",  role: "Dean, Alumni Affairs",   institution: "St. Xavier's College, Mumbai", initials: "PS", color: "bg-violet-500" },
              { quote: "The WhatsApp integration alone saved our team 20 hours a week. Alumni respond so much faster now and engagement is at an all-time high.",                                     name: "Rajesh Kumar",      role: "Alumni Coordinator",      institution: "IIT Bombay Alumni Cell",        initials: "RK", color: "bg-purple-500" },
              { quote: "We were struggling with data scattered in spreadsheets. KAPPLR centralised everything and also helped with our NAAC accreditation reports.",                                  name: "Prof. Anita Desai", role: "Principal",               institution: "Fergusson College, Pune",       initials: "AD", color: "bg-teal-500" },
            ].map((t, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 space-y-6 hover:bg-white/8 hover:border-white/20 transition-all flex flex-col">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-white/55 italic flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3 pt-2 border-t border-white/8">
                  <div className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{t.name}</div>
                    <div className="text-xs text-white/35">{t.role} · {t.institution}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </Animate>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0518] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[300px] rounded-full bg-purple-600/20 blur-[100px]" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <Animate variant="scaleIn">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-10 md:p-16 text-center space-y-8">
            <div className="inline-block bg-white/10 border border-white/15 text-white/70 rounded-full px-4 py-1.5 text-sm font-semibold">Zero Risk</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Start Free for 30 Days</h2>
            <p className="text-lg text-white/45 max-w-xl mx-auto">
              Full access to every feature. No credit card. No commitment. Cancel anytime.
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-white/45">
              {['Alumni Directory', 'Event Management', 'WhatsApp Integration', 'Fundraising Campaigns', 'Analytics Dashboard', 'Mobile App'].map((f, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-violet-400 flex-shrink-0" />
                  {f}
                </div>
              ))}
            </div>
            <Link href="/pricing">
              <Button size="lg" className="bg-brand-gradient hover:opacity-90 text-white rounded-full px-10" style={{ boxShadow: '0 0 40px rgba(139,92,246,0.4)' }}>
                Start Your Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <p className="text-xs text-white/25">After trial, pricing is tailored to your institution size &amp; needs.</p>
          </div>
          </Animate>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0518]/30 pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />
        <Animate variant="fadeIn">
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Strengthen Your Alumni Ecosystem?</h2>
          <p className="text-lg text-white/80">
            Join 50+ institutions already using KAPPLR to build engaged, connected alumni communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing">
              <Button size="lg" className="bg-white text-[#0a0518] hover:bg-white/90 rounded-full px-8 font-semibold">
                Start Your Free Trial Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/features">
              <Button size="lg" className="border border-white/50 bg-white/10 text-white hover:bg-white/20 rounded-full px-8 backdrop-blur-sm">
                Explore Features
              </Button>
            </Link>
          </div>
          <p className="text-sm text-white/50">No credit card required · Setup in under 10 minutes · Dedicated onboarding support</p>
        </div>
        </Animate>
      </section>

      <Footer />
    </div>
  )
}
