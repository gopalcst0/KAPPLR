'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Mail, ArrowRight } from 'lucide-react'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    institution: '',
    role: '',
    subject: '',
    message: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center py-16 space-y-4">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
          <Mail className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-foreground">Message Sent!</h2>
        <p className="text-muted-foreground max-w-sm">
          Thanks for reaching out. We&apos;ll get back to you at{' '}
          <span className="font-semibold text-foreground">{form.email}</span> within 4 hours.
        </p>
        <Button
          onClick={() => {
            setSubmitted(false)
            setForm({ name: '', email: '', institution: '', role: '', subject: '', message: '' })
          }}
          variant="outline"
          className="rounded-full mt-2"
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <h2 className="text-xl font-bold text-foreground mb-2">Send Us a Message</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-foreground" htmlFor="name">
            Full Name <span className="text-destructive">*</span>
          </label>
          <input
            id="name" name="name" required
            value={form.name} onChange={handleChange}
            placeholder="Dr. Priya Sharma"
            className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-foreground" htmlFor="email">
            Work Email <span className="text-destructive">*</span>
          </label>
          <input
            id="email" name="email" type="email" required
            value={form.email} onChange={handleChange}
            placeholder="you@institution.edu.in"
            className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-foreground" htmlFor="institution">Institution Name</label>
          <input
            id="institution" name="institution"
            value={form.institution} onChange={handleChange}
            placeholder="St. Xavier's College"
            className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-foreground" htmlFor="role">Your Role</label>
          <select
            id="role" name="role"
            value={form.role} onChange={handleChange}
            className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
          >
            <option value="">Select role…</option>
            <option>Principal / Director</option>
            <option>Dean / HOD</option>
            <option>Alumni Coordinator</option>
            <option>IT Administrator</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-sm font-medium text-foreground" htmlFor="subject">
          Subject <span className="text-destructive">*</span>
        </label>
        <select
          id="subject" name="subject" required
          value={form.subject} onChange={handleChange}
          className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
        >
          <option value="">Select a topic…</option>
          <option>Request a Demo</option>
          <option>Pricing & Plans</option>
          <option>Technical Support</option>
          <option>Partnership Enquiry</option>
          <option>General Question</option>
        </select>
      </div>

      <div className="space-y-1.5">
        <label className="text-sm font-medium text-foreground" htmlFor="message">
          Message <span className="text-destructive">*</span>
        </label>
        <textarea
          id="message" name="message" required rows={5}
          value={form.message} onChange={handleChange}
          placeholder="Tell us about your institution and what you're looking for…"
          className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
        />
      </div>

      <Button type="submit" size="lg" className="w-full bg-primary hover:bg-secondary text-primary-foreground rounded-full">
        Send Message <ArrowRight className="ml-2 w-4 h-4" />
      </Button>
      <p className="text-xs text-muted-foreground text-center">
        We respect your privacy. Your data is never shared with third parties.
      </p>
    </form>
  )
}
