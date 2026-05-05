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
import { ArrowRight, Check, Star, Zap, Shield, HeadphonesIcon, Building2, GraduationCap, Landmark } from 'lucide-react'

export default function PricingPage() {
  const features = [
    { label: 'Alumni Directory Management', tier: 'all' },
    { label: 'Customizable Alumni Portal', tier: 'all' },
    { label: 'Event Management', tier: 'all' },
    { label: 'Fundraising Module', tier: 'all' },
    { label: 'Mentorship Program', tier: 'all' },
    { label: 'Job Board', tier: 'all' },
    { label: 'Email & SMS Integration', tier: 'all' },
    { label: 'WhatsApp Integration', tier: 'all' },
    { label: 'Mobile App for Alumni', tier: 'all' },
    { label: 'Analytics Dashboard', tier: 'all' },
    { label: 'Accreditation Reports', tier: 'all' },
    { label: 'API Access', tier: 'all' },
    { label: 'Priority Support', tier: 'all' },
    { label: 'Custom Integrations', tier: 'all' },
  ]

  const plans = [
    {
      icon: Building2,
      name: 'Schools',
      tagline: 'Perfect for schools & small colleges',
      price: 'Custom',
      color: 'from-violet-500/10 to-purple-500/10',
      border: 'border-violet-200',
      iconBg: 'bg-violet-500',
      highlights: ['Up to 5,000 alumni', 'Core engagement tools', 'Email & WhatsApp', 'Basic analytics', 'Email support'],
    },
    {
      icon: GraduationCap,
      name: 'Colleges',
      tagline: 'For growing alumni communities',
      price: 'Custom',
      color: 'from-primary/15 to-secondary/15',
      border: 'border-primary',
      iconBg: 'bg-primary',
      popular: true,
      highlights: ['Up to 25,000 alumni', 'All School features', 'Fundraising & donations', 'Advanced analytics', 'Priority support', 'Custom portal branding'],
    },
    {
      icon: Landmark,
      name: 'Universities',
      tagline: 'Enterprise-scale alumni management',
      price: 'Custom',
      color: 'from-teal-500/10 to-cyan-500/10',
      border: 'border-teal-200',
      iconBg: 'bg-teal-500',
      highlights: ['Unlimited alumni', 'All College features', 'Multi-school management', 'Dedicated account manager', 'SLA guarantee', 'Custom integrations & API'],
    },
  ]

  const faqs = [
    {
      question: 'What is included in the free trial?',
      answer: "Your free trial gives you access to all KAPPLR features for 30 days. You can add unlimited alumni, launch campaigns, and explore every module without any restrictions."
    },
    {
      question: 'Do I need a credit card for the free trial?',
      answer: "No, absolutely not. You can start your free trial with just your email address. No credit card is required, and we won't charge you without explicit consent."
    },
    {
      question: 'Can I cancel anytime?',
      answer: "Yes, you can cancel your subscription at any time. If you're not satisfied with KAPPLR, we'll process your cancellation immediately with no penalties."
    },
    {
      question: 'What happens after the free trial?',
      answer: "After your 30-day trial ends, we'll discuss pricing options tailored to your institution's size and needs. Custom pricing is available for schools, colleges, and universities."
    },
    {
      question: 'Is there a long-term commitment?',
      answer: 'No long-term contracts required. We offer flexible monthly or annual subscriptions so you can choose what works best for your institution.'
    },
    {
      question: 'Do you offer discounts for long-term subscriptions?',
      answer: 'Yes! Annual subscriptions get a 20% discount compared to monthly plans. Contact our sales team for bulk institution pricing.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <Navbar />

      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center space-y-5">
        <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium">Simple, Transparent Pricing</div>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">
          Start Free. Scale as You Grow.
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          30-day free trial with full access to every feature. No credit card required. Pricing tailored to your institution after trial.
        </p>
        <div className="flex flex-wrap justify-center gap-6 pt-2 text-sm text-muted-foreground">
          {[
            { icon: Zap, text: '30-day free trial' },
            { icon: Shield, text: 'No credit card needed' },
            { icon: HeadphonesIcon, text: 'Dedicated onboarding' },
            { icon: Star, text: '95% satisfaction rate' },
          ].map((b, i) => {
            const Icon = b.icon
            return (
              <div key={i} className="flex items-center gap-2">
                <Icon className="w-4 h-4 text-primary" />
                <span>{b.text}</span>
              </div>
            )
          })}
        </div>
      </section>

      {/* Trial Banner */}
      <section className="pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-primary rounded-3xl p-8 md:p-12 text-center text-primary-foreground space-y-5 shadow-sm">
          <div className="inline-block bg-white/20 rounded-full px-4 py-1.5 text-sm font-semibold">Limited Time — Free Access</div>
          <h2 className="text-3xl md:text-4xl font-bold">Try All Features Free for 30 Days</h2>
          <p className="opacity-90 max-w-xl mx-auto">Every plan starts with a full-featured 30-day trial. No restrictions, no hidden limits.</p>
          <Link href="https://app.kapplr.com/signup" target="_blank">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-10 mt-2">
              Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <p className="text-sm opacity-70">No credit card · Cancel anytime · Full access</p>
        </div>
      </section>

      {/* Plan Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-3xl font-bold text-foreground">Plans for Every Institution</h2>
            <p className="text-muted-foreground">All plans include the free trial. Final pricing is customised to your size &amp; requirements.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, idx) => {
              const Icon = plan.icon
              return (
                <div
                  key={idx}
                  className={`relative rounded-3xl border-2 ${plan.border} bg-gradient-to-br ${plan.color} p-8 flex flex-col gap-6 ${plan.popular ? 'shadow-2xl scale-[1.02]' : 'shadow-sm'} transition-shadow`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold rounded-full px-4 py-1.5 shadow">
                      MOST POPULAR
                    </div>
                  )}
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${plan.iconBg} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-xl text-foreground">{plan.name}</div>
                      <div className="text-sm text-muted-foreground">{plan.tagline}</div>
                    </div>
                  </div>

                  <div>
                    <div className="text-3xl font-extrabold text-foreground">{plan.price}</div>
                    <div className="text-sm text-muted-foreground mt-1">Pricing tailored to your needs</div>
                  </div>

                  <ul className="space-y-2 flex-1">
                    {plan.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact">
                    <Button
                      size="lg"
                      className={`w-full rounded-full ${plan.popular ? 'bg-primary hover:bg-secondary text-primary-foreground' : 'bg-white hover:bg-muted text-foreground border border-border'}`}
                    >
                      Get a Quote <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Feature Checklist */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30 border-y border-border">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 space-y-3">
            <h2 className="text-2xl font-bold text-foreground">Everything Included in Every Plan</h2>
            <p className="text-muted-foreground">No feature gating. No paywalls surprises. All plans include:</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {features.map((f, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white rounded-xl border border-border px-4 py-3">
                <Check className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-foreground">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { stat: '50+', label: 'Institutions Trust Us' },
            { stat: '1,000+', label: 'Alumni Reconnected Monthly' },
            { stat: '95%', label: 'User Satisfaction Rate' },
          ].map((s, i) => (
            <div key={i} className="space-y-1">
              <div className="text-4xl font-extrabold text-primary">{s.stat}</div>
              <p className="text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 space-y-3">
            <h2 className="text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Everything you need to know about pricing and our platform.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <details key={idx} className="bg-white border border-border rounded-2xl px-6 py-4 group cursor-pointer">
                <summary className="flex items-center justify-between font-semibold text-foreground hover:text-primary transition-colors list-none">
                  {faq.question}
                  <span className="text-primary text-lg ml-4 group-open:rotate-45 transition-transform duration-200 flex-shrink-0">+</span>
                </summary>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Transform Your Alumni Engagement?</h2>
          <p className="text-lg opacity-90">Join 50+ institutions already using KAPPLR. Start your free trial today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link href="https://app.kapplr.com/signup" target="_blank">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-10">
                Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" className="bg-transparent border border-white/80 text-white hover:bg-white/10 rounded-full px-10">
                Talk to Sales
              </Button>
            </Link>
          </div>
          <p className="text-sm opacity-70">No credit card required · Full access · Cancel anytime</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
