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
import { Mail, Phone, MapPin, MessageSquare, Clock, ArrowRight } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <Navbar />

      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium">Get In Touch</div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">We&apos;d Love to Hear From You</h1>
          <p className="text-lg text-muted-foreground">
            Have a question, want a demo, or need help getting started? Our team typically replies within a few hours.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: Mail,    label: 'Email Us',    value: 'support@myleadingcampus.com', sub: 'We reply within 4 hours',    color: 'bg-blue-50 text-blue-600' },
            { icon: Phone,   label: 'Call Us',     value: '+91 98743 44994',              sub: 'Mon–Sat, 9am–6pm IST',       color: 'bg-green-50 text-green-600' },
            { icon: MapPin,  label: 'Our Office',  value: 'Kolkata, West Bengal',         sub: 'India',                      color: 'bg-violet-50 text-violet-600' },
          ].map((c) => {
            const Icon = c.icon
            return (
              <div key={c.label} className="bg-white rounded-2xl border border-border p-6 flex items-start gap-4 shadow-sm">
                <div className={`w-11 h-11 ${c.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-1">{c.label}</div>
                  <div className="font-semibold text-foreground break-all">{c.value}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{c.sub}</div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-10 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-border p-6 shadow-sm space-y-4">
              <div className="font-semibold text-foreground text-lg">What Happens Next?</div>
              <ol className="space-y-4">
                {[
                  { n: '1', t: 'Submit your message',   d: 'Fill the form and hit send.' },
                  { n: '2', t: 'We review your request', d: 'Our team reads every message personally.' },
                  { n: '3', t: 'Quick response',         d: 'Expect a reply within 4 business hours.' },
                  { n: '4', t: 'Demo or onboarding',     d: "We'll set up a free demo tailored to your institution." },
                ].map((s) => (
                  <li key={s.n} className="flex gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full text-primary-foreground text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{s.n}</div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">{s.t}</div>
                      <div className="text-xs text-muted-foreground">{s.d}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-primary font-semibold">
                <Clock className="w-4 h-4" />
                Support Hours
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Monday – Friday: 9am – 7pm IST</li>
                <li>Saturday: 10am – 4pm IST</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>

            <div className="bg-white border border-border rounded-2xl p-6 space-y-3 shadow-sm">
              <div className="flex items-center gap-2 text-foreground font-semibold">
                <MessageSquare className="w-4 h-4 text-primary" />
                WhatsApp Us
              </div>
              <p className="text-sm text-muted-foreground">Prefer chat? Reach us instantly on WhatsApp for quick queries.</p>
              <a
                href="https://wa.me/919874344994"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-green-600 hover:underline"
              >
                Open WhatsApp Chat <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Form (client component) */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-border shadow-sm p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

