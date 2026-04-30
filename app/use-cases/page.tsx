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
import { ArrowRight, Building2, GraduationCap, Landmark } from 'lucide-react'
import Image from 'next/image'

export default function UseCasesPage() {
  const useCases = [
    {
      icon: Building2,
      title: 'Schools',
      subtitle: 'Strengthen Alumni Networks',
      description: 'Help high school alumni stay connected, organize reunions, and contribute to school development funds.',
      benefits: [
        'Host virtual and in-person reunions',
        'Organize career guidance sessions',
        'Fundraise for school development',
        'Showcase alumni success stories',
        'Job placement support for graduates'
      ],
      image: '/usecase-schools.jpg'
    },
    {
      icon: GraduationCap,
      title: 'Colleges',
      subtitle: 'Build Engaged Alumni Communities',
      description: 'Create vibrant alumni networks that drive institutional growth, mentorship, and sustained giving.',
      benefits: [
        'Facilitate mentorship programs',
        'Manage alumni events and webinars',
        'Streamline fundraising campaigns',
        'Support placement initiatives',
        'Recognize alumni achievements'
      ],
      image: '/usecase-colleges.jpg'
    },
    {
      icon: Landmark,
      title: 'Universities',
      subtitle: 'Scale Alumni Engagement',
      description: 'Manage large-scale alumni networks across multiple schools and faculties with centralized management.',
      benefits: [
        'Multi-school alumni management',
        'Advanced analytics and reporting',
        'Customizable alumni portals',
        'Major donor relationship management',
        'Accreditation support and compliance'
      ],
      image: '/usecase-universities.jpg'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Built for Every Institution
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            KAPPLR is designed to serve schools, colleges, and universities of all sizes with tailored features for your needs.
          </p>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          {useCases.map((useCase, idx) => {
            const Icon = useCase.icon
            const isEven = idx % 2 === 0

            return (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {isEven ? (
                  <>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <Icon className="w-14 h-14 text-primary flex-shrink-0" />
                        <div>
                          <h2 className="text-3xl font-bold text-foreground">{useCase.title}</h2>
                          <p className="text-lg text-primary font-semibold mt-1">{useCase.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-lg text-muted-foreground">{useCase.description}</p>
                      
                      <div className="space-y-3">
                        <h3 className="font-semibold text-foreground">Key Benefits:</h3>
                        <ul className="space-y-2">
                          {useCase.benefits.map((benefit, bidx) => (
                            <li key={bidx} className="flex items-start gap-3">
                              <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link href="/pricing">
                        <Button className="bg-primary hover:bg-secondary text-primary-foreground">
                          Get Started <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                    <div className="relative h-96 rounded-2xl overflow-hidden border border-border bg-muted">
                      <Image
                        src={useCase.image}
                        alt={useCase.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="relative h-96 rounded-2xl overflow-hidden border border-border bg-muted">
                      <Image
                        src={useCase.image}
                        alt={useCase.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <Icon className="w-14 h-14 text-primary flex-shrink-0" />
                        <div>
                          <h2 className="text-3xl font-bold text-foreground">{useCase.title}</h2>
                          <p className="text-lg text-primary font-semibold mt-1">{useCase.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-lg text-muted-foreground">{useCase.description}</p>
                      
                      <div className="space-y-3">
                        <h3 className="font-semibold text-foreground">Key Benefits:</h3>
                        <ul className="space-y-2">
                          {useCase.benefits.map((benefit, bidx) => (
                            <li key={bidx} className="flex items-start gap-3">
                              <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link href="/pricing">
                        <Button className="bg-primary hover:bg-secondary text-primary-foreground">
                          Get Started <ArrowRight className="ml-2 w-4 h-4" />
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
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Transform Your Alumni Engagement?</h2>
          <p className="text-lg opacity-90">
            Join institutions across India already strengthening their alumni networks with KAPPLR.
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
