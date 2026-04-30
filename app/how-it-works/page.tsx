import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'How It Works – Launch Your Alumni Platform in 4 Steps',
  description: 'See how KAPPLR works: create your branded portal, import alumni, launch engagement campaigns, and track impact — all in under 10 minutes. No tech expertise needed.',
  alternates: { canonical: '/how-it-works' },
  openGraph: {
    title: 'How KAPPLR Works – Alumni Engagement in 4 Simple Steps',
    description: 'Set up your institution\'s alumni portal in minutes. Import alumni, run campaigns, and generate reports — no technical expertise required.',
    url: 'https://kapplr.com/how-it-works',
  },
}

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Settings, Users, Zap, BarChart3 } from 'lucide-react'
import Image from 'next/image'

export default function HowItWorksPage() {
  const steps = [
    {
      step: 1,
      icon: Settings,
      title: 'Create Your Portal',
      description: 'Set up your branded alumni portal in minutes. Customize colors, branding, and modules to match your institution\'s identity.',
      details: [
        'Choose from pre-built templates',
        'Add your institution branding',
        'Configure custom fields',
        'Set up user permissions'
      ],
      image: '/howitworks-step1.jpg'
    },
    {
      step: 2,
      icon: Users,
      title: 'Invite Your Alumni',
      description: 'Import your existing alumni database or invite alumni through email. They can sign up in seconds and build their profiles.',
      details: [
        'Bulk import from Excel or CSV',
        'Automated invitation emails',
        'Customizable welcome messages',
        'Mobile app access included'
      ],
      image: '/howitworks-step2.jpg'
    },
    {
      step: 3,
      icon: Zap,
      title: 'Launch Engagement',
      description: 'Start running campaigns, events, and initiatives. Connect alumni through mentorship, jobs, fundraising, and community activities.',
      details: [
        'Create and manage events',
        'Launch fundraising campaigns',
        'Run mentorship programs',
        'Multi-channel communications'
      ],
      image: '/howitworks-step3.jpg'
    },
    {
      step: 4,
      icon: BarChart3,
      title: 'Track & Measure Success',
      description: 'Monitor engagement metrics and measure the impact of your alumni initiatives with comprehensive analytics dashboards.',
      details: [
        'Real-time engagement metrics',
        'Campaign performance tracking',
        'Alumni impact reports',
        'Export data for accreditation'
      ],
      image: '/howitworks-step4.jpg'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Get Started in 4 Simple Steps
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Launch your alumni engagement platform in minutes, not months. Our intuitive setup process gets you up and running quickly.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-24">
          {steps.map((item, idx) => {
            const Icon = item.icon
            const isEven = idx % 2 === 0

            return (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {isEven ? (
                  <>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-primary">
                            <Icon className="w-8 h-8 text-primary-foreground" />
                          </div>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-primary uppercase tracking-wide">Step {item.step}</div>
                          <h2 className="text-3xl font-bold text-foreground mt-1">{item.title}</h2>
                        </div>
                      </div>

                      <p className="text-lg text-muted-foreground">{item.description}</p>

                      <div className="space-y-3">
                        <h3 className="font-semibold text-foreground">What You Can Do:</h3>
                        <ul className="space-y-2">
                          {item.details.map((detail, didx) => (
                            <li key={didx} className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                              <span className="text-muted-foreground">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="relative h-96 rounded-2xl overflow-hidden border border-border bg-muted">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="relative h-96 rounded-2xl overflow-hidden border border-border bg-muted">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-primary">
                            <Icon className="w-8 h-8 text-primary-foreground" />
                          </div>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-primary uppercase tracking-wide">Step {item.step}</div>
                          <h2 className="text-3xl font-bold text-foreground mt-1">{item.title}</h2>
                        </div>
                      </div>

                      <p className="text-lg text-muted-foreground">{item.description}</p>

                      <div className="space-y-3">
                        <h3 className="font-semibold text-foreground">What You Can Do:</h3>
                        <ul className="space-y-2">
                          {item.details.map((detail, didx) => (
                            <li key={didx} className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                              <span className="text-muted-foreground">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Get Started?</h2>
          <p className="text-lg opacity-90">
            Launch your alumni engagement platform today with a free 30-day trial.
          </p>
          <Link href="/pricing">
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-muted">
              Start Your Free Trial <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
