import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Contact Us – Get in Touch with KAPPLR',
  description: 'Contact the KAPPLR team for a demo, pricing query, or support. Reach us at support@myleadingcampus.com or call +91 98743 44994. Based in Kolkata, India.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact KAPPLR – Request a Demo or Get Support',
    description: 'Have a question about alumni engagement? Our team is ready to help. Get in touch for a personalised demo or pricing consultation.',
    url: 'https://kapplr.com/contact',
  },
}

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ContactForm } from '@/components/contact-form'
import { Mail, Phone, MapPin, MessageSquare, Clock, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Animate, Stagger } from '@/components/animate'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0a0518]">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#0a0518]" style={{ minHeight: 'calc(45vh - 80px)' }}>
        <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] rounded-full bg-purple-700/40 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] rounded-full bg-teal-500/25 blur-[110px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div
          className="relative z-10 max-w-3xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col items-center text-center gap-6 py-20 md:py-28"
          style={{ minHeight: 'calc(45vh - 80px)', justifyContent: 'center' }}
        >
          <Animate variant="fadeUp" delay={0}>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 text-sm text-white/75 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse flex-shrink-0" />
              Get In Touch
            </div>
          </Animate>
          <Animate variant="fadeUp" delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.06] tracking-tight text-white">
              We&apos;d Love to{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400">
                Hear From You
              </span>
            </h1>
          </Animate>
          <Animate variant="fadeUp" delay={0.2}>
            <p className="text-lg text-white/55 max-w-xl leading-relaxed">
              Have a question, want a demo, or need help getting started? Our team typically replies within a few hours.
            </p>
          </Animate>
        </div>
      </section>

      {/* ── Contact info cards ── */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-[#0a0518] border-y border-white/8">
        <div className="max-w-5xl mx-auto">
          <Stagger className="grid grid-cols-1 sm:grid-cols-3 gap-4" childVariant="fadeUp">
            {[
              { icon: Mail,   label: 'Email Us',   value: 'support@myleadingcampus.com', sub: 'We reply within 4 hours', color: 'from-violet-500 to-purple-600', border: 'border-violet-500/25' },
              { icon: Phone,  label: 'Call Us',    value: '+91 98743 44994',              sub: 'Mon–Sat, 9am–6pm IST',   color: 'from-green-500 to-emerald-600',  border: 'border-green-500/25' },
              { icon: MapPin, label: 'Our Office', value: 'Kolkata, West Bengal',         sub: 'India',                  color: 'from-teal-500 to-cyan-600',       border: 'border-teal-500/25' },
            ].map((c) => {
              const Icon = c.icon
              return (
                <div key={c.label} className={`relative overflow-hidden bg-white/4 border ${c.border} rounded-2xl p-6 flex items-start gap-4 hover:bg-white/7 transition-colors`}>
                  <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${c.color}`} />
                  <div className={`w-11 h-11 bg-gradient-to-br ${c.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-[11px] text-white/35 font-semibold uppercase tracking-widest mb-1">{c.label}</div>
                    <div className="font-semibold text-white text-sm break-all">{c.value}</div>
                    <div className="text-xs text-white/40 mt-0.5">{c.sub}</div>
                  </div>
                </div>
              )
            })}
          </Stagger>
        </div>
      </section>

      {/* ── Form + Sidebar ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0518] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-violet-700/15 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-teal-600/10 blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Sidebar */}
          <div className="space-y-5">
            {/* What happens next */}
            <Animate variant="slideLeft">
              <div className="relative overflow-hidden bg-white/4 border border-violet-500/25 rounded-2xl p-6 space-y-5">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 to-purple-600" />
                <div className="font-bold text-white text-base">What Happens Next?</div>
                <ol className="space-y-4">
                  {[
                    { n: '01', t: 'Submit your message',    d: 'Fill the form and hit send.' },
                    { n: '02', t: 'We review your request', d: 'Our team reads every message personally.' },
                    { n: '03', t: 'Quick response',          d: 'Expect a reply within 4 business hours.' },
                    { n: '04', t: 'Demo or onboarding',      d: "We'll set up a free demo tailored to your institution." },
                  ].map((s) => (
                    <li key={s.n} className="flex gap-3">
                      <div className="w-7 h-7 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg text-white text-[10px] font-black flex items-center justify-center flex-shrink-0 mt-0.5 shadow">{s.n}</div>
                      <div>
                        <div className="text-sm font-semibold text-white">{s.t}</div>
                        <div className="text-xs text-white/40 mt-0.5">{s.d}</div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </Animate>

            {/* Support hours */}
            <Animate variant="slideLeft">
              <div className="relative overflow-hidden bg-white/4 border border-teal-500/25 rounded-2xl p-6 space-y-4">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-teal-500 to-cyan-600" />
                <div className="flex items-center gap-2 text-teal-300 font-semibold">
                  <Clock className="w-4 h-4" />
                  Support Hours
                </div>
                <ul className="text-sm text-white/50 space-y-1.5">
                  <li className="flex justify-between"><span>Monday – Friday</span><span className="text-white/70">9am – 7pm IST</span></li>
                  <li className="flex justify-between"><span>Saturday</span><span className="text-white/70">10am – 4pm IST</span></li>
                  <li className="flex justify-between"><span>Sunday</span><span className="text-white/35">Closed</span></li>
                </ul>
              </div>
            </Animate>

            {/* WhatsApp */}
            <Animate variant="slideLeft">
              <div className="relative overflow-hidden bg-white/4 border border-green-500/25 rounded-2xl p-6 space-y-3">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-green-500 to-emerald-600" />
                <div className="flex items-center gap-2 text-green-300 font-semibold">
                  <MessageSquare className="w-4 h-4" />
                  WhatsApp Us
                </div>
                <p className="text-sm text-white/50">Prefer chat? Reach us instantly on WhatsApp for quick queries.</p>
                <a
                  href="https://wa.me/919874344994"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-green-400 hover:text-green-300 transition-colors group"
                >
                  Open WhatsApp Chat <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </Animate>
          </div>

          {/* Form */}
          <Animate variant="slideRight" className="lg:col-span-2">
            <div className="relative overflow-hidden bg-white/4 border border-white/10 rounded-3xl p-8 shadow-2xl">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-500" />
              <ContactForm />
            </div>
          </Animate>
        </div>
      </section>

      {/* ── Trust strip ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900 via-purple-900 to-teal-900" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-violet-600/25 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-teal-500/20 blur-[100px] pointer-events-none" />
        <Animate variant="fadeIn">
          <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Join{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-cyan-200 to-violet-300">
                50+ Institutions
              </span>{' '}Already on KAPPLR
            </h2>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/55">
              {['No credit card required', 'Free 30-day trial', 'Dedicated onboarding support'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Animate>
      </section>

      <Footer />
    </div>
  )
}

