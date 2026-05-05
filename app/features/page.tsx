import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Features – Alumni Directory, Fundraising, Mentorship & More',
  description: 'Explore KAPPLR\'s powerful features: alumni directory, placement hub, fundraising campaigns, WhatsApp integration, event management, analytics dashboard, and accreditation reports.',
  alternates: { canonical: '/features' },
  openGraph: {
    title: 'KAPPLR Features – Everything Your Alumni Engagement Needs',
    description: 'From alumni directories to fundraising and mentorship — KAPPLR has every tool your institution needs to engage alumni effectively.',
    url: 'https://kapplr.com/features',
  },
}

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  ArrowRight, Users, Handshake, Award, BarChart3, Mail,
  Shield, Zap, Settings, MessageSquare, Smartphone, TrendingUp,
  CheckCircle2, Star, FileText, Globe, Lock, Bell,
} from 'lucide-react'
import { Animate, Stagger } from '@/components/animate'

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-[#0a0518]">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#0a0518]" style={{ minHeight: 'calc(60vh - 80px)' }}>
        {/* Glow orbs */}
        <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] rounded-full bg-purple-700/40 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[10%] w-[450px] h-[450px] rounded-full bg-teal-500/25 blur-[110px] pointer-events-none" />
        {/* Dot-grid */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div
          className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col items-center text-center gap-8 py-24 md:py-32"
          style={{ minHeight: 'calc(60vh - 80px)', justifyContent: 'center' }}
        >
          <Animate variant="fadeUp" delay={0}>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 text-sm text-white/75 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse flex-shrink-0" />
              Complete Alumni Management Platform
            </div>
          </Animate>

          <Animate variant="fadeUp" delay={0.1}>
            <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold leading-[1.06] tracking-tight text-white">
              Every Tool Your<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400">
                Alumni Team Needs
              </span>
            </h1>
          </Animate>

          <Animate variant="fadeUp" delay={0.2}>
            <p className="text-lg text-white/55 max-w-2xl leading-relaxed">
              From alumni directories and fundraising to WhatsApp campaigns and NAAC accreditation reports —
              KAPPLR is purpose-built for Indian educational institutions.
            </p>
          </Animate>

          <Animate variant="fadeUp" delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-3">
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
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-[#0a0518] border-y border-white/8">
        <div className="max-w-7xl mx-auto">
          <Stagger className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6" childVariant="fadeUp">
            {[
              { value: '8+',    label: 'Core Feature Modules',    dot: 'bg-violet-400' },
              { value: '50+',   label: 'Institutions Live',        dot: 'bg-teal-400' },
              { value: '98%',   label: 'WhatsApp Open Rate',       dot: 'bg-green-400' },
              { value: 'NAAC',  label: 'Accreditation Ready',      dot: 'bg-amber-400' },
            ].map(({ value, label, dot }, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/8 hover:bg-white/8 transition-colors">
                <div className={`w-2.5 h-2.5 rounded-full ${dot}`} />
                <div className="text-3xl font-bold text-white">{value}</div>
                <p className="text-sm text-white/45">{label}</p>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── All Features Grid ── */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#0a0518] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-violet-700/20 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-cyan-700/10 blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <Animate variant="fadeUp" className="text-center mb-16 space-y-5">
            <div className="inline-flex items-center gap-2 bg-white/8 border border-violet-500/30 text-violet-300 rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              Platform Features
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Everything in{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400">
                One Platform
              </span>
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
              A complete alumni management system for India — from registration to NAAC accreditation reports.
            </p>
          </Animate>

          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 [grid-auto-rows:1fr]">
            {[
              { icon: Users,         title: 'Alumni Database',         desc: 'Auto-updating, searchable database to locate alumni by batch, location, or career field.',                    color: 'from-violet-500 to-purple-600' },
              { icon: Settings,      title: 'Registration Portal',     desc: 'Branded self-registration portal for alumni to update profiles and stay connected in seconds.',              color: 'from-blue-500 to-cyan-500' },
              { icon: MessageSquare, title: 'Communication Tools',     desc: 'Email, WhatsApp & SMS from one unified dashboard with personalisation and merge tags.',                      color: 'from-green-500 to-emerald-600' },
              { icon: Zap,           title: 'Event Management',        desc: 'Manage reunions, webinars, and networking events with automated RSVP and attendance tracking.',             color: 'from-yellow-500 to-orange-500' },
              { icon: Award,         title: 'Fundraising & Donations', desc: 'Run targeted fundraising campaigns, track donors, and recognise contributors transparently.',               color: 'from-pink-500 to-rose-600' },
              { icon: Handshake,     title: 'Job & Placement Support', desc: 'Connect alumni with opportunities and help them mentor current students into their careers.',               color: 'from-teal-500 to-cyan-600' },
              { icon: TrendingUp,    title: 'Alumni Directory',        desc: 'Advanced filterable directory searchable by year, department, industry, and location.',                     color: 'from-indigo-500 to-violet-600' },
              { icon: BarChart3,     title: 'Analytics Dashboard',     desc: 'Real-time engagement metrics, fundraising KPIs, and NAAC / NBA-ready accreditation reports.',              color: 'from-fuchsia-500 to-pink-600' },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="group relative overflow-hidden rounded-2xl bg-white/4 border border-white/8 hover:border-white/20 transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full min-h-[240px]">
                  <div className={`h-1 w-full bg-gradient-to-r ${item.color} flex-shrink-0`} />
                  <div className={`absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-8 blur-3xl transition-opacity duration-500 pointer-events-none`} />
                  <div className="p-6 flex flex-col gap-4 flex-1">
                    <div className="flex items-center justify-between">
                      <div className={`w-11 h-11 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <ArrowRight className="w-4 h-4 text-white/15 group-hover:text-white/50 group-hover:translate-x-0.5 transition-all duration-300" />
                    </div>
                    <div className="flex-1 space-y-1.5">
                      <h3 className="text-sm font-bold text-white">{item.title}</h3>
                      <p className="text-xs text-white/45 leading-relaxed">{item.desc}</p>
                    </div>
                    <Link href="/pricing" className={`text-xs font-semibold bg-clip-text text-transparent bg-gradient-to-r ${item.color} inline-flex items-center gap-1 w-fit mt-auto`}>
                      Get started →
                    </Link>
                  </div>
                </div>
              )
            })}
          </Stagger>
        </div>
      </section>

      {/* ── Feature Deep-Dive: Alumni Directory ── */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#0d0720] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-violet-600/12 blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Animate variant="slideLeft" className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/8 border border-violet-500/30 text-violet-300 rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                Alumni Database
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Find Any Alumni{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400">
                  Instantly
                </span>
              </h2>
              <p className="text-lg text-white/50 leading-relaxed">
                A smart, auto-updating alumni database that grows itself. Filter by batch, department, industry, city or job role in seconds.
              </p>
              <ul className="space-y-4">
                {[
                  { text: 'Advanced search & multi-filter',       color: 'from-violet-500 to-purple-600' },
                  { text: 'Self-updating alumni profiles',         color: 'from-blue-500 to-cyan-500' },
                  { text: 'Bulk CSV / Excel import & export',      color: 'from-teal-500 to-cyan-500' },
                  { text: 'Duplicate detection & data cleansing',  color: 'from-indigo-500 to-violet-600' },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 group">
                    <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                      <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-white/70 group-hover:text-white transition-colors font-medium">{item.text}</span>
                  </li>
                ))}
              </ul>
            </Animate>

            <Animate variant="slideRight">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-violet-500/40 via-purple-500/20 to-cyan-500/30 rounded-3xl blur-sm" />
                <div className="relative bg-white/10 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 shadow-2xl space-y-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] text-white/40 font-semibold uppercase tracking-widest">Alumni Directory</p>
                      <h3 className="text-white font-bold text-lg mt-0.5">12,400 Records</h3>
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  {/* Fake search bar */}
                  <div className="flex items-center gap-3 bg-white/6 border border-white/10 rounded-xl px-4 py-2.5">
                    <div className="w-3.5 h-3.5 rounded-full border border-white/30 flex-shrink-0" />
                    <span className="text-white/30 text-sm">Search by name, batch, city…</span>
                  </div>
                  {/* Filter chips */}
                  <div className="flex flex-wrap gap-2">
                    {['Batch 2015', 'Mumbai', 'Engineering', 'Finance'].map((chip, i) => (
                      <span key={i} className="bg-violet-500/20 border border-violet-500/30 text-violet-300 text-xs font-medium px-3 py-1 rounded-full">{chip}</span>
                    ))}
                  </div>
                  {/* Alumni list */}
                  <div className="space-y-3">
                    {[
                      { name: 'Rohan Mehta',   role: 'Sr. Engineer · Infosys',      batch: '2015' },
                      { name: 'Priya Sharma',  role: 'Product Manager · Flipkart',  batch: '2017' },
                      { name: 'Amit Joshi',    role: 'CA · Deloitte India',          batch: '2016' },
                      { name: 'Neha Kapoor',   role: 'Founder · EdTech Startup',    batch: '2014' },
                    ].map((a, i) => (
                      <div key={i} className="flex items-center gap-3 p-2.5 bg-white/4 rounded-xl border border-white/6 hover:bg-white/8 transition-colors">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0">
                          {a.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-white truncate">{a.name}</p>
                          <p className="text-xs text-white/40 truncate">{a.role}</p>
                        </div>
                        <span className="text-[10px] text-white/25 flex-shrink-0">'{a.batch}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-center text-xs text-white/25">Showing 4 of 12,400 alumni</p>
                </div>
              </div>
            </Animate>
          </div>
        </div>
      </section>

      {/* ── Feature Deep-Dive: Communication ── */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#0a0518] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-green-600/10 blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Mockup left */}
            <Animate variant="slideLeft">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-green-500/30 via-teal-500/20 to-cyan-500/25 rounded-3xl blur-sm" />
                <div className="relative bg-white/10 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 shadow-2xl space-y-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] text-white/40 font-semibold uppercase tracking-widest">Campaign Outreach</p>
                      <h3 className="text-white font-bold text-lg mt-0.5">Reunion Blast — Batch 2020</h3>
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                      <MessageSquare className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  {/* Channel pills */}
                  <div className="flex gap-2">
                    {[
                      { label: 'WhatsApp', dot: 'bg-green-400' },
                      { label: 'Email',    dot: 'bg-violet-400' },
                      { label: 'SMS',      dot: 'bg-teal-400' },
                    ].map(ch => (
                      <div key={ch.label} className="flex items-center gap-1.5 bg-white/6 border border-white/10 rounded-full px-3 py-1.5 text-xs text-white/55">
                        <span className={`w-1.5 h-1.5 rounded-full ${ch.dot} flex-shrink-0`} />
                        {ch.label}
                      </div>
                    ))}
                  </div>
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white/6 rounded-2xl p-3 space-y-1 border border-white/8 text-center">
                      <p className="text-lg font-bold text-white">2,400</p>
                      <p className="text-[10px] text-white/40">Sent</p>
                    </div>
                    <div className="bg-white/6 rounded-2xl p-3 space-y-1 border border-white/8 text-center">
                      <p className="text-lg font-bold text-green-400">98%</p>
                      <p className="text-[10px] text-white/40">Delivered</p>
                    </div>
                    <div className="bg-white/6 rounded-2xl p-3 space-y-1 border border-white/8 text-center">
                      <p className="text-lg font-bold text-teal-400">64%</p>
                      <p className="text-[10px] text-white/40">Opened</p>
                    </div>
                  </div>
                  {/* Message preview */}
                  <div className="bg-white/4 border border-white/8 rounded-2xl p-4 space-y-2">
                    <p className="text-[10px] text-white/30 font-semibold uppercase tracking-wider">Message Preview</p>
                    <p className="text-sm text-white/60 leading-relaxed">
                      Hi <span className="text-violet-300 font-medium">{'{{First Name}}'}</span>, your Batch 2020 Reunion is happening on <span className="text-teal-300 font-medium">June 15th</span> at our campus. RSVP now →
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-green-400 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Campaign delivered in &lt; 5 seconds
                  </div>
                </div>
              </div>
            </Animate>

            {/* Text right */}
            <Animate variant="slideRight" className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/8 border border-green-500/30 text-green-300 rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Communication
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Reach Alumni on{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-teal-300 to-cyan-400">
                  Every Channel
                </span>
              </h2>
              <p className="text-lg text-white/50 leading-relaxed">
                Send bulk WhatsApp blasts, automated email sequences, and instant SMS — all from one dashboard with personalised merge tags.
              </p>
              <ul className="space-y-4">
                {[
                  { text: 'WhatsApp bulk messaging with 98% open rate',    color: 'from-green-500 to-emerald-600' },
                  { text: 'Automated email drip sequences for events',      color: 'from-violet-500 to-purple-600' },
                  { text: 'SMS OTP & transactional notifications',          color: 'from-teal-500 to-cyan-500' },
                  { text: 'Personalised merge tags & dynamic content',      color: 'from-blue-500 to-cyan-500' },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 group">
                    <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                      <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-white/70 group-hover:text-white transition-colors font-medium">{item.text}</span>
                  </li>
                ))}
              </ul>
              <Link href="/pricing">
                <Button size="lg" className="rounded-full bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-500 hover:to-emerald-400 text-white font-semibold shadow-lg shadow-green-900/40 group">
                  Start Free Trial <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </Animate>
          </div>
        </div>
      </section>

      {/* ── Feature Deep-Dive: Fundraising ── */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#0d0720] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-pink-600/12 blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Animate variant="slideLeft" className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/8 border border-pink-500/30 text-pink-300 rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
                Fundraising
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Turn Alumni into{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-rose-300 to-violet-400">
                  Donors
                </span>
              </h2>
              <p className="text-lg text-white/50 leading-relaxed">
                Run targeted donation campaigns, celebrate contributors publicly, and track every rupee with full transparency — all in one dashboard.
              </p>
              <ul className="space-y-4">
                {[
                  { text: 'Create & manage donation campaigns',             color: 'from-pink-500 to-rose-600' },
                  { text: 'Razorpay & UPI payment integration',             color: 'from-orange-500 to-amber-500' },
                  { text: 'Donor leaderboard & recognition wall',           color: 'from-fuchsia-500 to-pink-600' },
                  { text: 'Automated donation receipts & tax certificates', color: 'from-violet-500 to-purple-600' },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 group">
                    <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                      <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-white/70 group-hover:text-white transition-colors font-medium">{item.text}</span>
                  </li>
                ))}
              </ul>
            </Animate>

            <Animate variant="slideRight">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-pink-500/30 via-rose-500/20 to-violet-500/25 rounded-3xl blur-sm" />
                <div className="relative bg-white/10 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 shadow-2xl space-y-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] text-white/40 font-semibold uppercase tracking-widest">Fundraising Campaign</p>
                      <h3 className="text-white font-bold text-lg mt-0.5">Library Renovation Fund</h3>
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  {/* Progress */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/50">₹8,40,000 raised</span>
                      <span className="text-pink-400 font-bold">84%</span>
                    </div>
                    <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-[84%] bg-gradient-to-r from-pink-500 to-rose-600 rounded-full" />
                    </div>
                    <p className="text-xs text-white/30">Goal: ₹10,00,000 · 18 days left</p>
                  </div>
                  {/* Top donors */}
                  <div className="space-y-2.5">
                    <p className="text-[11px] text-white/35 font-semibold uppercase tracking-widest">Top Donors</p>
                    {[
                      { name: 'Ravi Gupta',    amount: '₹50,000', rank: '🥇' },
                      { name: 'Sunita Patel',  amount: '₹35,000', rank: '🥈' },
                      { name: 'Arun Sharma',   amount: '₹25,000', rank: '🥉' },
                    ].map((d, i) => (
                      <div key={i} className="flex items-center gap-3 p-2.5 bg-white/4 rounded-xl border border-white/6">
                        <span className="text-base leading-none">{d.rank}</span>
                        <span className="text-sm text-white/70 flex-1">{d.name}</span>
                        <span className="text-sm font-bold text-pink-400">{d.amount}</span>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/6 rounded-2xl p-3 text-center border border-white/8">
                      <p className="text-base font-bold text-white">142</p>
                      <p className="text-[10px] text-white/40">Total Donors</p>
                    </div>
                    <div className="bg-white/6 rounded-2xl p-3 text-center border border-white/8">
                      <p className="text-base font-bold text-pink-400">₹5,915</p>
                      <p className="text-[10px] text-white/40">Avg. Donation</p>
                    </div>
                  </div>
                </div>
              </div>
            </Animate>
          </div>
        </div>
      </section>

      {/* ── Feature Deep-Dive: Analytics & NAAC ── */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#0a0518] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-fuchsia-600/10 blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Mockup left */}
            <Animate variant="slideLeft">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-fuchsia-500/30 via-purple-500/20 to-pink-500/25 rounded-3xl blur-sm" />
                <div className="relative bg-white/10 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 shadow-2xl space-y-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] text-white/40 font-semibold uppercase tracking-widest">Analytics Overview</p>
                      <h3 className="text-white font-bold text-lg mt-0.5">Q1 2026 Report</h3>
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-fuchsia-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                      <BarChart3 className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  {/* KPI row */}
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: 'Engagement Rate',  value: '+47%', color: 'text-violet-400' },
                      { label: 'Profile Updates',  value: '2,300', color: 'text-teal-400' },
                      { label: 'Events Attended',  value: '890',  color: 'text-pink-400' },
                      { label: 'Jobs Posted',       value: '124',  color: 'text-amber-400' },
                    ].map((k, i) => (
                      <div key={i} className="bg-white/6 rounded-2xl p-3.5 border border-white/8 space-y-1">
                        <p className="text-[10px] text-white/35">{k.label}</p>
                        <p className={`text-xl font-black ${k.color}`}>{k.value}</p>
                      </div>
                    ))}
                  </div>
                  {/* Bar chart placeholder */}
                  <div className="space-y-2">
                    <p className="text-[11px] text-white/35 font-semibold uppercase tracking-widest">Monthly Engagement</p>
                    <div className="flex items-end gap-1.5 h-20">
                      {[40, 55, 35, 70, 60, 85, 78, 90, 65, 80, 95, 72].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t-sm bg-gradient-to-t from-fuchsia-500 to-pink-400 opacity-70"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between text-[10px] text-white/25">
                      <span>Jan</span><span>Jun</span><span>Dec</span>
                    </div>
                  </div>
                  {/* NAAC badge */}
                  <div className="flex items-center gap-3 bg-amber-500/10 border border-amber-500/25 rounded-2xl p-3.5">
                    <FileText className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-white">NAAC / NBA Export Ready</p>
                      <p className="text-xs text-white/40">One-click accreditation report generation</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-amber-400 flex-shrink-0 ml-auto" />
                  </div>
                </div>
              </div>
            </Animate>

            {/* Text right */}
            <Animate variant="slideRight" className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/8 border border-fuchsia-500/30 text-fuchsia-300 rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 animate-pulse" />
                Analytics & Reports
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Insights &amp;{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-pink-300 to-violet-400">
                  Accreditation Ready
                </span>
              </h2>
              <p className="text-lg text-white/50 leading-relaxed">
                Track every metric that matters — from engagement rates to fundraising KPIs — and generate NAAC & NBA-ready reports in a single click.
              </p>
              <ul className="space-y-4">
                {[
                  { text: 'Real-time engagement & fundraising KPIs',     color: 'from-fuchsia-500 to-pink-600' },
                  { text: 'NAAC & NBA accreditation report export',        color: 'from-amber-500 to-orange-500' },
                  { text: 'Batch-wise alumni activity breakdowns',         color: 'from-violet-500 to-purple-600' },
                  { text: 'Placement & mentorship outcome tracking',       color: 'from-teal-500 to-cyan-500' },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 group">
                    <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                      <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-white/70 group-hover:text-white transition-colors font-medium">{item.text}</span>
                  </li>
                ))}
              </ul>
            </Animate>
          </div>
        </div>
      </section>

      {/* ── More Features — 3-col cards ── */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#0d0720] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-purple-600/12 blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <Animate variant="fadeUp" className="text-center mb-16 space-y-5">
            <div className="inline-flex items-center gap-2 bg-white/8 border border-cyan-500/30 text-cyan-300 rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              And Much More
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Built for{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-violet-400">
                Indian Institutions
              </span>
            </h2>
          </Animate>

          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Zap,        title: 'Event Management',        desc: 'Run reunions, webinars, and networking events with automated RSVP, ticketing, and attendance tracking.',  color: 'from-yellow-500 to-orange-500' },
              { icon: Handshake,  title: 'Mentorship Hub',          desc: 'Smart alumni-to-student matching by industry, skills, and availability. Schedule 1:1 sessions seamlessly.',  color: 'from-teal-500 to-cyan-600' },
              { icon: Globe,      title: 'Alumni Mobile App',       desc: 'Dedicated branded mobile app for iOS & Android. Alumni stay connected on the go — no desktop required.', color: 'from-blue-500 to-cyan-500' },
              { icon: Settings,   title: 'Custom Branded Portal',   desc: 'White-label your alumni portal with your logo, colours, domain, and fully custom registration fields.',    color: 'from-violet-500 to-purple-600' },
              { icon: Lock,       title: 'Enterprise Security',     desc: 'Data encrypted at rest and in transit. GDPR-compliant, daily backups, and role-based access control.',   color: 'from-red-500 to-rose-600' },
              { icon: Bell,       title: 'Smart Notifications',     desc: 'Auto-reminders for events, donation drives, and profile completion. Reduce manual follow-up by 80%.',   color: 'from-pink-500 to-fuchsia-600' },
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
                  <div className={`absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${item.color} transition-all duration-500`} />
                </div>
              )
            })}
          </Stagger>
        </div>
      </section>

      {/* ── Comparison / Why KAPPLR over spreadsheets ── */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#0a0518] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-violet-700/15 blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <Animate variant="fadeUp" className="text-center mb-16 space-y-5">
            <div className="inline-flex items-center gap-2 bg-white/8 border border-violet-500/30 text-violet-300 rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              KAPPLR vs Manual Methods
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Why Not Just Use{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400">
                Spreadsheets?
              </span>
            </h2>
          </Animate>

          <Animate variant="fadeUp">
            <div className="overflow-hidden rounded-2xl border border-white/10">
              {/* Header */}
              <div className="grid grid-cols-3 bg-white/6 border-b border-white/10 px-6 py-4">
                <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Capability</p>
                <p className="text-xs font-bold text-white/40 uppercase tracking-widest text-center">Spreadsheets</p>
                <p className="text-xs font-bold text-violet-300 uppercase tracking-widest text-center">KAPPLR</p>
              </div>
              {[
                { cap: 'Bulk WhatsApp / Email campaigns',  manual: '❌ Manual',    kapplr: '✅ One click' },
                { cap: 'NAAC accreditation reports',       manual: '❌ Hours of work', kapplr: '✅ Auto-generated' },
                { cap: 'Alumni self-registration portal',  manual: '❌ Not possible', kapplr: '✅ Branded portal' },
                { cap: 'Real-time engagement analytics',   manual: '❌ Manual tallying', kapplr: '✅ Live dashboard' },
                { cap: 'Fundraising & UPI payments',       manual: '❌ Separate tool', kapplr: '✅ Built-in' },
                { cap: 'Alumni mobile app',                manual: '❌ Not possible', kapplr: '✅ iOS & Android' },
                { cap: 'Mentorship matching',              manual: '❌ Manual emails', kapplr: '✅ Smart matching' },
              ].map((row, i) => (
                <div key={i} className={`grid grid-cols-3 px-6 py-4 border-b border-white/6 hover:bg-white/3 transition-colors ${i % 2 === 0 ? '' : 'bg-white/2'}`}>
                  <p className="text-sm text-white/70 font-medium">{row.cap}</p>
                  <p className="text-sm text-white/35 text-center">{row.manual}</p>
                  <p className="text-sm text-violet-300 font-semibold text-center">{row.kapplr}</p>
                </div>
              ))}
            </div>
          </Animate>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900 via-purple-900 to-teal-900" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-violet-600/25 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-teal-500/20 blur-[100px] pointer-events-none" />

        <Animate variant="fadeIn">
          <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 rounded-full px-5 py-2 text-sm font-semibold backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
              All features included in your 30-day free trial
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Experience Every Feature<br className="hidden sm:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-cyan-200 to-violet-300">
                {' '}Free for 30 Days
              </span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              No credit card. No commitment. Full access to every module from day one.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/50">
              {['No credit card required', 'Setup in under 10 minutes', 'Dedicated onboarding support'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Link href="/pricing">
                <Button size="lg" className="bg-white text-[#0a0518] hover:bg-white/95 rounded-xl px-10 font-bold shadow-2xl shadow-white/20 group">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" className="border border-white/30 bg-white/10 text-white hover:bg-white/20 rounded-xl px-8 backdrop-blur-sm font-semibold">
                  Talk to Sales
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
