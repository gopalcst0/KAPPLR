import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Pricing – Start Free for 30 Days | KAPPLR',
  description: 'KAPPLR offers flexible, custom pricing for schools, colleges, and universities. Start with a free 30-day trial — no credit card required. Full access to all features.',
  alternates: { canonical: '/pricing' },
  openGraph: {
    title: 'KAPPLR Pricing – Free 30-Day Trial for All Institutions',
    description: 'Start free for 30 days with full access. Custom pricing available for schools, colleges, and universities across India.',
    url: 'https://kapplr.com/pricing',
  },
}

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  ArrowRight, Check, Star, Zap, Shield, HeadphonesIcon,
  Building2, GraduationCap, Landmark, CheckCircle2, Users,
  MessageSquare, Award, BarChart3, Smartphone, Settings,
} from 'lucide-react'
import { Animate, Stagger } from '@/components/animate'

export default function PricingPage() {
  const faqs = [
    {
      question: 'What is included in the free trial?',
      answer: 'Your free trial gives you access to all KAPPLR features for 30 days. You can add unlimited alumni, launch campaigns, and explore every module without any restrictions.',
    },
    {
      question: 'Do I need a credit card for the free trial?',
      answer: "No, absolutely not. You can start your free trial with just your email address. No credit card is required, and we won't charge you without explicit consent.",
    },
    {
      question: 'Can I cancel anytime?',
      answer: "Yes, you can cancel your subscription at any time. If you're not satisfied with KAPPLR, we'll process your cancellation immediately with no penalties.",
    },
    {
      question: 'What happens after the free trial?',
      answer: "After your 30-day trial ends, we'll discuss pricing options tailored to your institution's size and needs. Custom pricing is available for schools, colleges, and universities.",
    },
    {
      question: 'Is there a long-term commitment?',
      answer: 'No long-term contracts required. We offer flexible monthly or annual subscriptions so you can choose what works best for your institution.',
    },
    {
      question: 'Do you offer discounts for long-term subscriptions?',
      answer: 'Yes! Annual subscriptions get a 20% discount compared to monthly plans. Contact our sales team for bulk institution pricing.',
    },
  ]

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
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse flex-shrink-0" />
              Simple, Transparent Pricing
            </div>
          </Animate>

          <Animate variant="fadeUp" delay={0.1}>
            <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold leading-[1.06] tracking-tight text-white">
              Start Free.<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400">
                Scale as You Grow.
              </span>
            </h1>
          </Animate>

          <Animate variant="fadeUp" delay={0.2}>
            <p className="text-lg text-white/55 max-w-2xl leading-relaxed">
              30-day free trial with full access to every feature. No credit card required.
              Pricing tailored to your institution after the trial.
            </p>
          </Animate>

          <Animate variant="fadeUp" delay={0.3}>
            <div className="flex flex-wrap justify-center gap-5 text-sm text-white/55">
              {[
                { icon: Zap,            text: '30-day free trial' },
                { icon: Shield,         text: 'No credit card needed' },
                { icon: HeadphonesIcon, text: 'Dedicated onboarding' },
                { icon: Star,           text: '95% satisfaction rate' },
              ].map((b, i) => {
                const Icon = b.icon
                return (
                  <div key={i} className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-violet-400 flex-shrink-0" />
                    <span>{b.text}</span>
                  </div>
                )
              })}
            </div>
          </Animate>

          <Animate variant="fadeUp" delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="https://app.kapplr.com/signup" target="_blank">
                <Button
                  size="lg"
                  className="bg-brand-gradient hover:opacity-90 text-white rounded-full px-8 font-semibold text-base"
                  style={{ boxShadow: '0 0 40px rgba(139,92,246,0.45)' }}
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 bg-white/10 hover:bg-white/20 border-white/20 text-white backdrop-blur-sm text-base"
                >
                  Talk to Sales
                </Button>
              </Link>
            </div>
          </Animate>
        </div>
      </section>

      {/* ── Free trial banner ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0a0518] border-y border-white/8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 via-purple-600/5 to-cyan-600/10 pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <Animate variant="scaleIn">
            <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-violet-500/50 via-purple-400/25 to-cyan-500/40">
              <div className="relative bg-[#0f0a2a] rounded-3xl overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-violet-600/15 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-cyan-600/10 blur-2xl pointer-events-none" />
                <div className="relative px-10 py-12 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                  <div className="flex-1 space-y-3">
                    <div className="inline-flex items-center gap-2 bg-white/8 border border-violet-500/30 text-violet-300 rounded-full px-4 py-1.5 text-sm font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                      Zero Risk · Full Access
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                      Try All Features Free for{' '}
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400">30 Days</span>
                    </h2>
                    <p className="text-white/50 max-w-lg">
                      Every plan starts with a full-featured 30-day trial. No restrictions, no hidden limits, no credit card.
                    </p>
                  </div>
                  <div className="flex-shrink-0 flex flex-col items-center gap-3">
                    <Link href="https://app.kapplr.com/signup" target="_blank">
                      <Button size="lg" className="bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white rounded-xl px-10 font-semibold shadow-xl shadow-violet-900/50 group">
                        Start Free Trial
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <p className="text-xs text-white/25">No credit card · Cancel anytime · Full access</p>
                  </div>
                </div>
              </div>
            </div>
          </Animate>
        </div>
      </section>

      {/* ── Plan cards ── */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#0a0518] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-violet-700/20 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-cyan-700/10 blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <Animate variant="fadeUp" className="text-center mb-16 space-y-5">
            <div className="inline-flex items-center gap-2 bg-white/8 border border-violet-500/30 text-violet-300 rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              Plans for Every Institution
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Custom Pricing,{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400">
                Zero Surprises
              </span>
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              All plans include the free trial. Final pricing is customised to your size &amp; requirements.
            </p>
          </Animate>

          <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Building2,
                name: 'Schools',
                tagline: 'Perfect for schools & small colleges',
                color: 'from-teal-500 to-cyan-600',
                border: 'border-teal-500/30',
                glow: 'bg-teal-600/15',
                text: 'text-teal-300',
                highlights: ['Up to 5,000 alumni', 'Core engagement tools', 'Email & WhatsApp', 'Basic analytics', 'Email support'],
              },
              {
                icon: GraduationCap,
                name: 'Colleges',
                tagline: 'For growing alumni communities',
                color: 'from-violet-500 to-purple-600',
                border: 'border-violet-500/40',
                glow: 'bg-violet-600/20',
                text: 'text-violet-300',
                popular: true,
                highlights: ['Up to 25,000 alumni', 'All School features', 'Fundraising & donations', 'Advanced analytics', 'Priority support', 'Custom portal branding'],
              },
              {
                icon: Landmark,
                name: 'Universities',
                tagline: 'Enterprise-scale alumni management',
                color: 'from-amber-500 to-orange-500',
                border: 'border-amber-500/30',
                glow: 'bg-amber-600/15',
                text: 'text-amber-300',
                highlights: ['Unlimited alumni', 'All College features', 'Multi-school management', 'Dedicated account manager', 'SLA guarantee', 'Custom integrations & API'],
              },
            ].map((plan, idx) => {
              const Icon = plan.icon
              return (
                <div
                  key={idx}
                  className={`relative overflow-hidden rounded-3xl bg-white/4 border ${plan.border} flex flex-col gap-6 p-8 hover:-translate-y-1 transition-all duration-300 ${plan.popular ? 'bg-white/7 scale-[1.02]' : ''}`}
                >
                  {/* Top gradient line */}
                  <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${plan.color}`} />
                  {/* Corner glow */}
                  <div className={`absolute -top-8 -right-8 w-40 h-40 rounded-full ${plan.glow} blur-2xl pointer-events-none`} />

                  {plan.popular && (
                    <div className={`absolute -top-px left-1/2 -translate-x-1/2 bg-gradient-to-r ${plan.color} text-white text-[11px] font-extrabold rounded-b-xl px-5 py-1.5 shadow-lg tracking-widest uppercase`}>
                      Most Popular
                    </div>
                  )}

                  <div className="flex items-center gap-4 mt-4">
                    <div className={`w-13 h-13 w-12 h-12 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-extrabold text-xl text-white">{plan.name}</div>
                      <div className={`text-xs font-medium mt-0.5 ${plan.text}`}>{plan.tagline}</div>
                    </div>
                  </div>

                  <div>
                    <div className="text-4xl font-black text-white">Custom</div>
                    <div className="text-sm text-white/35 mt-1">Pricing tailored to your institution</div>
                  </div>

                  <ul className="space-y-3 flex-1">
                    {plan.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-3 group/item">
                        <div className={`w-5 h-5 rounded-lg bg-gradient-to-br ${plan.color} flex items-center justify-center flex-shrink-0 shadow group-hover/item:scale-110 transition-transform`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm text-white/60 group-hover/item:text-white/85 transition-colors">{h}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact">
                    <Button
                      size="lg"
                      className={`w-full rounded-xl bg-gradient-to-r ${plan.color} hover:opacity-90 text-white font-semibold group/btn`}
                    >
                      Get a Quote <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              )
            })}
          </Stagger>
        </div>
      </section>

      {/* ── Everything included ── */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#0d0720] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-purple-600/12 blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <Animate variant="fadeUp" className="text-center mb-16 space-y-5">
            <div className="inline-flex items-center gap-2 bg-white/8 border border-violet-500/30 text-violet-300 rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              No Feature Gating
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Everything Included{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400">
                in Every Plan
              </span>
            </h2>
            <p className="text-lg text-white/50 max-w-xl mx-auto">No paywalled features. No surprise add-ons. All plans include every module from day one.</p>
          </Animate>

          <Stagger className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { icon: Users,         label: 'Alumni Directory Management' },
              { icon: Settings,      label: 'Customisable Alumni Portal' },
              { icon: Zap,           label: 'Event Management' },
              { icon: Award,         label: 'Fundraising Module' },
              { icon: HeadphonesIcon,label: 'Mentorship Program' },
              { icon: BarChart3,     label: 'Job Board' },
              { icon: MessageSquare, label: 'Email & SMS Integration' },
              { icon: MessageSquare, label: 'WhatsApp Integration' },
              { icon: Smartphone,    label: 'Mobile App for Alumni' },
              { icon: BarChart3,     label: 'Analytics Dashboard' },
              { icon: Shield,        label: 'Accreditation Reports' },
              { icon: Settings,      label: 'API Access' },
              { icon: Star,          label: 'Priority Support' },
              { icon: Zap,           label: 'Custom Integrations' },
            ].map(({ icon: Icon, label }, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white/4 border border-white/8 rounded-xl px-4 py-3 hover:bg-white/7 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-violet-400 flex-shrink-0" />
                <span className="text-sm text-white/60 font-medium">{label}</span>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── Trust stats ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0a0518] border-y border-white/8">
        <div className="max-w-7xl mx-auto">
          <Stagger className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6" childVariant="fadeUp">
            {[
              { value: '50+',   label: 'Institutions Trust KAPPLR', dot: 'bg-violet-400' },
              { value: '1000+', label: 'Alumni Reconnected / Month', dot: 'bg-teal-400' },
              { value: '₹10Cr+',label: 'Fundraising Facilitated',   dot: 'bg-amber-400' },
              { value: '95%',   label: 'User Satisfaction Rate',    dot: 'bg-green-400' },
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

      {/* ── FAQ ── */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#0d0720] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-violet-700/12 blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10">
          <Animate variant="fadeUp" className="text-center mb-16 space-y-5">
            <div className="inline-flex items-center gap-2 bg-white/8 border border-violet-500/30 text-violet-300 rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              FAQ
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Frequently Asked{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400">
                Questions
              </span>
            </h2>
            <p className="text-lg text-white/50">Everything you need to know about pricing and our platform.</p>
          </Animate>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group bg-white/4 border border-white/8 rounded-2xl px-6 py-4 cursor-pointer hover:bg-white/6 transition-colors">
                <summary className="flex items-center justify-between font-semibold text-white hover:text-violet-300 transition-colors list-none">
                  {faq.question}
                  <span className="text-violet-400 text-lg ml-4 group-open:rotate-45 transition-transform duration-200 flex-shrink-0">+</span>
                </summary>
                <p className="text-white/50 mt-3 text-sm leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
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
              Join forward-thinking institutes transforming their graduate networks into active, engaged communities.
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
              <Link href="https://app.kapplr.com/signup" target="_blank">
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
