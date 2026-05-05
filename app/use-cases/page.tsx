import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Use Cases – Alumni Solutions for Schools, Colleges & Universities',
  description: 'Discover how KAPPLR serves schools, colleges, and universities across India. Alumni directories, fundraising, mentorship, placement support, and NAAC accreditation tools.',
  alternates: { canonical: '/use-cases' },
  openGraph: {
    title: 'KAPPLR Use Cases – For Schools, Colleges & Universities',
    description: 'Whether you run a school, college, or university — KAPPLR has tailored alumni engagement solutions to help your institution grow.',
    url: 'https://kapplr.com/use-cases',
  },
}

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  ArrowRight, Building2, GraduationCap, Landmark, Users, Award,
  TrendingUp, Handshake, MessageSquare, BarChart3, Zap, CheckCircle2,
  Star, FileText, Heart,
} from 'lucide-react'
import { Animate, Stagger } from '@/components/animate'

export default function UseCasesPage() {
  return (
    <div className="min-h-screen bg-[#0a0518]">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#0a0518]" style={{ minHeight: 'calc(60vh - 80px)' }}>
        <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] rounded-full bg-purple-700/40 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[10%] w-[450px] h-[450px] rounded-full bg-teal-500/25 blur-[110px] pointer-events-none" />
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
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse flex-shrink-0" />
              Schools · Colleges · Universities
            </div>
          </Animate>

          <Animate variant="fadeUp" delay={0.1}>
            <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold leading-[1.06] tracking-tight text-white">
              Built for Every<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-300 to-violet-400">
                Indian Institution
              </span>
            </h1>
          </Animate>

          <Animate variant="fadeUp" delay={0.2}>
            <p className="text-lg text-white/55 max-w-2xl leading-relaxed">
              Whether you run a school, college, or university — KAPPLR has tailored alumni engagement solutions
              designed for your scale, your goals, and the Indian academic context.
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
              <Link href="/features">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 bg-white/10 hover:bg-white/20 border-white/20 text-white backdrop-blur-sm text-base"
                >
                  Explore Features
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
              { value: '50+',   label: 'Institutions on KAPPLR',   dot: 'bg-violet-400' },
              { value: '3',     label: 'Institution Types Served',  dot: 'bg-teal-400' },
              { value: '1000+', label: 'Alumni Reconnected / Month',dot: 'bg-green-400' },
              { value: '95%',   label: 'User Satisfaction Rate',    dot: 'bg-amber-400' },
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

      {/* ── Institution type cards ── */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#0a0518] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-violet-700/20 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-cyan-700/10 blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <Animate variant="fadeUp" className="text-center mb-16 space-y-5">
            <div className="inline-flex items-center gap-2 bg-white/8 border border-violet-500/30 text-violet-300 rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              Who It&apos;s For
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Tailored for Your{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400">
                Institution Type
              </span>
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
              Each institution type has unique alumni engagement goals. KAPPLR adapts to yours.
            </p>
          </Animate>

          <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Building2,
                title: 'Schools',
                subtitle: 'Strengthen Alumni Networks',
                desc: 'Help high school alumni stay connected, organise reunions, and contribute to school development funds.',
                color: 'from-teal-500 to-cyan-600',
                border: 'border-teal-500/25',
                text: 'text-teal-300',
                glow: 'bg-teal-600/15',
                tag: 'K–12 & High Schools',
                benefits: ['Host virtual & in-person reunions', 'Career guidance by alumni', 'Fundraise for school development', 'Alumni success story showcase', 'Job placement support'],
              },
              {
                icon: GraduationCap,
                title: 'Colleges',
                subtitle: 'Build Engaged Communities',
                desc: 'Create vibrant alumni networks that drive institutional growth, mentorship, and sustained giving.',
                color: 'from-violet-500 to-purple-600',
                border: 'border-violet-500/25',
                text: 'text-violet-300',
                glow: 'bg-violet-600/15',
                tag: 'Arts, Science & Commerce',
                benefits: ['Mentorship programs', 'Manage events & webinars', 'Streamline fundraising', 'Support placement drives', 'Recognise alumni achievements'],
              },
              {
                icon: Landmark,
                title: 'Universities',
                subtitle: 'Scale Alumni Engagement',
                desc: 'Manage large-scale alumni networks across multiple faculties with centralised control and advanced reporting.',
                color: 'from-amber-500 to-orange-500',
                border: 'border-amber-500/25',
                text: 'text-amber-300',
                glow: 'bg-amber-600/15',
                tag: 'Multi-faculty Universities',
                benefits: ['Multi-school alumni management', 'Advanced analytics & reporting', 'Customisable portals per faculty', 'Major donor relationship management', 'NAAC / NBA accreditation support'],
              },
            ].map((uc, idx) => {
              const Icon = uc.icon
              return (
                <div key={idx} className={`group relative overflow-hidden rounded-3xl bg-white/4 border ${uc.border} hover:bg-white/7 hover:-translate-y-1.5 transition-all duration-300 flex flex-col`}>
                  <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${uc.color}`} />
                  <div className={`absolute -top-8 -right-8 w-40 h-40 rounded-full ${uc.glow} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                  <div className="p-8 flex flex-col gap-6 flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${uc.color} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <span className={`text-[11px] font-bold px-3 py-1 rounded-full bg-white/5 border ${uc.border} ${uc.text}`}>{uc.tag}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold text-white mb-1">{uc.title}</h3>
                      <p className={`text-sm font-semibold ${uc.text} mb-3`}>{uc.subtitle}</p>
                      <p className="text-sm text-white/50 leading-relaxed">{uc.desc}</p>
                    </div>
                    <ul className="space-y-3 flex-1">
                      {uc.benefits.map((b, i) => (
                        <li key={i} className="flex items-center gap-3 group/item">
                          <div className={`w-5 h-5 rounded-lg bg-gradient-to-br ${uc.color} flex items-center justify-center flex-shrink-0 shadow group-hover/item:scale-110 transition-transform`}>
                            <CheckCircle2 className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-sm text-white/60 group-hover/item:text-white/85 transition-colors">{b}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/pricing">
                      <Button className={`w-full rounded-xl bg-gradient-to-r ${uc.color} hover:opacity-90 text-white font-semibold group/btn mt-2`}>
                        Get Started <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              )
            })}
          </Stagger>
        </div>
      </section>

      {/* ── Schools Deep-Dive ── */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#0d0720] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-teal-600/12 blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Animate variant="slideLeft" className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/8 border border-teal-500/30 text-teal-300 rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                For Schools
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Give Your School{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-300 to-violet-400">
                  A Living Legacy
                </span>
              </h2>
              <p className="text-lg text-white/50 leading-relaxed">
                Schools often have the strongest emotional alumni bonds. KAPPLR turns that nostalgia into active engagement — reunions, giving campaigns, and career mentorship by successful alumni.
              </p>
              <ul className="space-y-4">
                {[
                  { text: 'Batch-wise reunion planning & RSVP management',   color: 'from-teal-500 to-cyan-500' },
                  { text: 'Alumni career talks for current students',          color: 'from-green-500 to-emerald-600' },
                  { text: 'School development fundraising with UPI & Razorpay',color: 'from-violet-500 to-purple-600' },
                  { text: 'Alumni success stories wall',                       color: 'from-blue-500 to-cyan-500' },
                  { text: 'WhatsApp batch groups auto-managed',                color: 'from-emerald-500 to-teal-500' },
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
                <Button size="lg" className="rounded-full bg-gradient-to-r from-teal-600 to-cyan-500 hover:from-teal-500 hover:to-cyan-400 text-white font-semibold shadow-lg shadow-teal-900/40 group">
                  Start for Schools <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </Animate>

            <Animate variant="slideRight">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-teal-500/40 via-cyan-500/20 to-violet-500/30 rounded-3xl blur-sm" />
                <div className="relative bg-white/10 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 shadow-2xl space-y-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] text-white/40 font-semibold uppercase tracking-widest">School Portal</p>
                      <h3 className="text-white font-bold text-lg mt-0.5">Delhi Public School Alumni</h3>
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Building2 className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: 'Alumni',    value: '5,200', color: 'text-teal-400' },
                      { label: 'Batches',   value: '38',    color: 'text-cyan-400' },
                      { label: 'Donations', value: '₹18L',  color: 'text-green-400' },
                    ].map((s, i) => (
                      <div key={i} className="bg-white/6 rounded-2xl p-3 text-center border border-white/8 space-y-1">
                        <p className={`text-base font-bold ${s.color}`}>{s.value}</p>
                        <p className="text-[10px] text-white/40">{s.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2.5">
                    <p className="text-[11px] text-white/35 font-semibold uppercase tracking-widest">Upcoming Reunions</p>
                    {[
                      { batch: 'Batch 2010', date: 'Jun 14', rsvp: 84 },
                      { batch: 'Batch 2015', date: 'Jul 22', rsvp: 57 },
                      { batch: 'Batch 2020', date: 'Aug 3',  rsvp: 31 },
                    ].map((r, i) => (
                      <div key={i} className="flex items-center gap-3 p-2.5 bg-white/4 rounded-xl border border-white/6">
                        <span className="text-sm">🎓</span>
                        <span className="text-sm text-white/70 flex-1">{r.batch} Reunion</span>
                        <span className="text-xs text-teal-400 font-semibold">{r.rsvp} going</span>
                        <span className="text-xs text-white/25">{r.date}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-green-400 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    School development campaign: 72% funded
                  </div>
                </div>
              </div>
            </Animate>
          </div>
        </div>
      </section>

      {/* ── Colleges Deep-Dive ── */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#0a0518] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-violet-600/12 blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Mockup left */}
            <Animate variant="slideLeft">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-violet-500/40 via-purple-500/20 to-cyan-500/30 rounded-3xl blur-sm" />
                <div className="relative bg-white/10 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 shadow-2xl space-y-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] text-white/40 font-semibold uppercase tracking-widest">College Portal</p>
                      <h3 className="text-white font-bold text-lg mt-0.5">St. Xavier&apos;s College</h3>
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                      <GraduationCap className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  {/* Engagement bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-white/45">Monthly Engagement Rate</span>
                      <span className="text-white font-bold">78%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-[78%] bg-gradient-to-r from-violet-500 to-purple-600 rounded-full" />
                    </div>
                  </div>
                  {/* Mentorship stats */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/6 rounded-2xl p-3.5 border border-white/8 space-y-1">
                      <p className="text-[10px] text-white/35">Mentorship Matches</p>
                      <p className="text-xl font-black text-violet-400">248</p>
                    </div>
                    <div className="bg-white/6 rounded-2xl p-3.5 border border-white/8 space-y-1">
                      <p className="text-[10px] text-white/35">Placement via Alumni</p>
                      <p className="text-xl font-black text-teal-400">92</p>
                    </div>
                  </div>
                  {/* Activity feed */}
                  <div className="space-y-2.5">
                    <p className="text-[11px] text-white/35 font-semibold uppercase tracking-widest">Recent Activity</p>
                    {[
                      { emoji: '🤝', text: '5 new mentorship matches this week',   time: '2h ago' },
                      { emoji: '💼', text: 'Ravi posted 3 internships at Infosys', time: '5h ago' },
                      { emoji: '🎉', text: 'Annual alumni meet: 340 registered',   time: '1d ago' },
                    ].map((a, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="text-sm">{a.emoji}</span>
                        <span className="text-white/60 text-xs flex-1 truncate">{a.text}</span>
                        <span className="text-white/25 text-xs flex-shrink-0">{a.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Animate>

            {/* Text right */}
            <Animate variant="slideRight" className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/8 border border-violet-500/30 text-violet-300 rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                For Colleges
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                The Engine Behind{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400">
                  College Growth
                </span>
              </h2>
              <p className="text-lg text-white/50 leading-relaxed">
                Colleges juggle mentorship, placements, fundraising, and community — all at once. KAPPLR consolidates every function into a single platform your alumni team can run without a developer.
              </p>
              <ul className="space-y-4">
                {[
                  { text: 'Smart alumni-to-student mentorship matching',   color: 'from-violet-500 to-purple-600' },
                  { text: 'Job & internship board powered by alumni',       color: 'from-blue-500 to-cyan-500' },
                  { text: 'Fundraising with recognition leaderboard',       color: 'from-pink-500 to-rose-600' },
                  { text: 'Annual meet & event management with RSVP',      color: 'from-teal-500 to-cyan-500' },
                  { text: 'NAAC C5 criterion alumni data export',           color: 'from-amber-500 to-orange-500' },
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
                <Button size="lg" className="rounded-full bg-gradient-to-r from-violet-600 to-purple-500 hover:from-violet-500 hover:to-purple-400 text-white font-semibold shadow-lg shadow-violet-900/40 group">
                  Start for Colleges <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </Animate>
          </div>
        </div>
      </section>

      {/* ── Universities Deep-Dive ── */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#0d0720] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-amber-600/10 blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Animate variant="slideLeft" className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/8 border border-amber-500/30 text-amber-300 rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                For Universities
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Manage Alumni at{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-300 to-violet-400">
                  University Scale
                </span>
              </h2>
              <p className="text-lg text-white/50 leading-relaxed">
                Universities span multiple faculties, thousands of batches, and complex reporting needs. KAPPLR&apos;s enterprise-ready multi-portal architecture handles it all from one command centre.
              </p>
              <ul className="space-y-4">
                {[
                  { text: 'Multi-faculty portals under one admin account',  color: 'from-amber-500 to-orange-500' },
                  { text: 'Cross-department analytics in one dashboard',     color: 'from-violet-500 to-purple-600' },
                  { text: 'Major donor CRM & relationship management',       color: 'from-pink-500 to-rose-600' },
                  { text: 'NAAC / NBA C5 & A3 criterion reports — auto',    color: 'from-teal-500 to-cyan-500' },
                  { text: 'Role-based staff access across departments',      color: 'from-blue-500 to-cyan-500' },
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
                <Button size="lg" className="rounded-full bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-500 hover:to-orange-400 text-white font-semibold shadow-lg shadow-amber-900/40 group">
                  Start for Universities <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </Animate>

            <Animate variant="slideRight">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-amber-500/35 via-orange-500/20 to-violet-500/25 rounded-3xl blur-sm" />
                <div className="relative bg-white/10 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 shadow-2xl space-y-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] text-white/40 font-semibold uppercase tracking-widest">University HQ</p>
                      <h3 className="text-white font-bold text-lg mt-0.5">Mumbai University</h3>
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Landmark className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  {/* Faculty portals */}
                  <div className="space-y-2">
                    <p className="text-[11px] text-white/35 font-semibold uppercase tracking-widest">Faculty Portals</p>
                    {[
                      { name: 'Engineering',  alumni: '18,200', engage: 82, color: 'from-violet-500 to-purple-600' },
                      { name: 'Commerce',     alumni: '12,400', engage: 74, color: 'from-teal-500 to-cyan-500' },
                      { name: 'Law',          alumni: '6,800',  engage: 68, color: 'from-amber-500 to-orange-500' },
                    ].map((f, i) => (
                      <div key={i} className="bg-white/4 rounded-xl p-3 border border-white/6 space-y-1.5">
                        <div className="flex justify-between text-xs">
                          <span className="text-white/60 font-medium">{f.name}</span>
                          <span className="text-white/30">{f.alumni} alumni</span>
                        </div>
                        <div className="h-1.5 bg-white/8 rounded-full overflow-hidden">
                          <div className={`h-full bg-gradient-to-r ${f.color} rounded-full`} style={{ width: `${f.engage}%` }} />
                        </div>
                        <p className="text-[10px] text-white/30">{f.engage}% engagement rate</p>
                      </div>
                    ))}
                  </div>
                  {/* NAAC badge */}
                  <div className="flex items-center gap-3 bg-amber-500/10 border border-amber-500/25 rounded-2xl p-3.5">
                    <FileText className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-white">NAAC Report Generated</p>
                      <p className="text-xs text-white/40">C5 & A3 criteria — exported in 1 click</p>
                    </div>
                    <span className="ml-auto text-xs text-amber-400 font-bold">✓ Done</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/6 rounded-2xl p-3 text-center border border-white/8">
                      <p className="text-base font-bold text-white">37,400</p>
                      <p className="text-[10px] text-white/40">Total Alumni</p>
                    </div>
                    <div className="bg-white/6 rounded-2xl p-3 text-center border border-white/8">
                      <p className="text-base font-bold text-amber-400">₹52L</p>
                      <p className="text-[10px] text-white/40">Funds Raised</p>
                    </div>
                  </div>
                </div>
              </div>
            </Animate>
          </div>
        </div>
      </section>

      {/* ── Cross-cutting use cases ── */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#0a0518] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[400px] rounded-full bg-violet-700/15 blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <Animate variant="fadeUp" className="text-center mb-16 space-y-5">
            <div className="inline-flex items-center gap-2 bg-white/8 border border-violet-500/30 text-violet-300 rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              Common Use Cases
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Every Institution Needs{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400">
                These
              </span>
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              These workflows work equally well whether you run a school, college, or university.
            </p>
          </Animate>

          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Users,         title: 'Alumni Reunions',           desc: 'Plan, invite, and manage batch reunions end-to-end — virtual or in-person — with automated RSVP.',        color: 'from-violet-500 to-purple-600' },
              { icon: Handshake,     title: 'Mentorship Programs',       desc: 'Auto-match alumni mentors with students based on industry, skills, and interests.',                       color: 'from-teal-500 to-cyan-600' },
              { icon: Award,         title: 'Fundraising Campaigns',     desc: 'Run UPI-enabled donation drives with real-time progress bars and donor recognition walls.',              color: 'from-pink-500 to-rose-600' },
              { icon: MessageSquare, title: 'Multi-Channel Outreach',    desc: 'Reach alumni via WhatsApp, Email & SMS from one dashboard with personalised merge-tag content.',         color: 'from-green-500 to-emerald-600' },
              { icon: FileText,      title: 'NAAC / NBA Reports',        desc: 'Auto-generate C5 alumni engagement criterion reports for accreditation submissions in seconds.',          color: 'from-amber-500 to-orange-500' },
              { icon: Heart,         title: 'Alumni Recognition',        desc: 'Feature Distinguished Alumni Awards, success stories, and leaderboards to inspire and reward giving.',   color: 'from-fuchsia-500 to-pink-600' },
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

      {/* ── Testimonials ── */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#0d0720] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-violet-700/15 blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <Animate variant="fadeUp" className="text-center mb-16 space-y-5">
            <div className="inline-flex items-center gap-2 bg-white/8 border border-yellow-500/30 text-yellow-300 rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
              Real Results
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Trusted by{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-300 to-violet-400">
                Academic Leaders
              </span>
            </h2>
          </Animate>

          <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                quote: 'KAPPLR transformed how we manage alumni. Our reunion attendance doubled and fundraising hit a record high in the very first year.',
                name: 'Dr. Priya Sharma', role: 'Dean, Alumni Affairs', institution: "St. Xavier's College, Mumbai",
                initials: 'PS', color: 'from-violet-500 to-purple-600', border: 'border-violet-500/25', type: 'College',
              },
              {
                quote: 'As a school, we were struggling to stay connected with alumni across 25+ batches. KAPPLR gave us a single home for all of them.',
                name: 'Suresh Iyer', role: 'Principal', institution: 'DPS RK Puram, New Delhi',
                initials: 'SI', color: 'from-teal-500 to-cyan-600', border: 'border-teal-500/25', type: 'School',
              },
              {
                quote: 'The NAAC report feature alone saved our team two weeks of manual work before our accreditation submission. Absolutely worth it.',
                name: 'Prof. Anita Desai', role: 'Vice Chancellor', institution: 'Fergusson University, Pune',
                initials: 'AD', color: 'from-amber-500 to-orange-500', border: 'border-amber-500/25', type: 'University',
              },
            ].map((t, idx) => (
              <div key={idx} className={`group relative overflow-hidden bg-white/4 border ${t.border} rounded-2xl p-6 flex flex-col gap-5 hover:bg-white/7 hover:-translate-y-1 transition-all duration-300`}>
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${t.color}`} />
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/5 border ${t.border} bg-clip-text text-transparent bg-gradient-to-r ${t.color}`}>{t.type}</span>
                </div>
                <p className="text-sm text-white/60 leading-relaxed flex-1 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/8">
                  <div className={`w-10 h-10 bg-gradient-to-br ${t.color} rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>{t.initials}</div>
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
              Join 50+ institutions across India
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Ready to Transform Your<br className="hidden sm:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-cyan-200 to-violet-300">
                {' '}Alumni Engagement?
              </span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Whether you&apos;re a school, college, or university — KAPPLR has you covered. Start your free 30-day trial today.
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
                  Start Your Free Trial
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
