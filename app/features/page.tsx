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
import { ArrowRight, Users, Handshake, DollarSign, BarChart3, Mail, Shield, Zap } from 'lucide-react'
import Image from 'next/image'

export default function FeaturesPage() {
  const features = [
    {
      icon: Users,
      title: 'Dynamic Alumni Directory',
      description: 'Comprehensive database with advanced search, filtering, and alumni profiles including career details, contact information, and interests.',
      image: '/features-directory.jpg'
    },
    {
      icon: Handshake,
      title: 'Placement & Mentorship Hub',
      description: 'Connect students with alumni mentors and job opportunities. Facilitate career growth through guided mentorship programs.',
      image: '/features-mentorship.jpg'
    },
    {
      icon: DollarSign,
      title: 'Fundraising & Donations',
      description: 'Streamlined donation platform with campaign management, donor recognition, and transparent tracking of contributions.',
      image: '/features-fundraising.jpg'
    },
    {
      icon: Mail,
      title: 'Communication Tools',
      description: 'WhatsApp, Email, and SMS integration for multi-channel engagement. Send targeted campaigns and personalized messages.',
      image: '/features-communication.jpg'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Real-time insights into alumni engagement, fundraising performance, and institutional impact metrics.',
      image: '/features-analytics.jpg'
    },
    {
      icon: Shield,
      title: 'Secure Cloud Platform',
      description: 'Enterprise-grade security with data encryption, GDPR compliance, and regular backups for peace of mind.',
      image: '/features-security.jpg'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Powerful Features Built for Alumni Engagement
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to connect, engage, and grow your alumni community in one integrated platform.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            const isEven = idx % 2 === 0
            
            return (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {isEven ? (
                  <>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <Icon className="w-12 h-12 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h2 className="text-3xl font-bold text-foreground mb-3">{feature.title}</h2>
                          <p className="text-lg text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                      <Link href="/pricing">
                        <Button className="bg-primary hover:bg-secondary text-primary-foreground">
                          Learn More <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                    <div className="relative h-96 rounded-2xl overflow-hidden border border-border bg-muted">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="relative h-96 rounded-2xl overflow-hidden border border-border bg-muted">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <Icon className="w-12 h-12 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h2 className="text-3xl font-bold text-foreground mb-3">{feature.title}</h2>
                          <p className="text-lg text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                      <Link href="/pricing">
                        <Button className="bg-primary hover:bg-secondary text-primary-foreground">
                          Learn More <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
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
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Explore All Features?</h2>
          <p className="text-lg opacity-90">
            Start your free 30-day trial and experience the full power of KAPPLR.
          </p>
          <Link href="/pricing">
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-muted">
              Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
