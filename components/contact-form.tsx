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

  const inputCls = 'w-full rounded-xl border border-white/10 bg-white/6 px-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-colors'
  const selectCls = 'w-full rounded-xl border border-white/10 bg-white/6 px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-colors [&>option]:bg-[#1a1035] [&>option]:text-white'
  const labelCls = 'text-sm font-medium text-white/60'

  if (submitted) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center py-16 space-y-5">
        <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
          <Mail className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-extrabold text-white">Message Sent!</h2>
        <p className="text-white/50 max-w-sm">
          Thanks for reaching out. We&apos;ll get back to you at{' '}
          <span className="font-semibold text-violet-300">{form.email}</span> within 4 hours.
        </p>
        <Button
          onClick={() => {
            setSubmitted(false)
            setForm({ name: '', email: '', institution: '', role: '', subject: '', message: '' })
          }}
          className="rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/15 mt-2"
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="mb-2">
        <h2 className="text-xl font-extrabold text-white">Send Us a Message</h2>
        <p className="text-sm text-white/40 mt-1">We read every message personally and reply within 4 hours.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className={labelCls} htmlFor="name">
            Full Name <span className="text-rose-400">*</span>
          </label>
          <input
            id="name" name="name" required
            value={form.name} onChange={handleChange}
            placeholder="Dr. Priya Sharma"
            className={inputCls}
          />
        </div>
        <div className="space-y-1.5">
          <label className={labelCls} htmlFor="email">
            Work Email <span className="text-rose-400">*</span>
          </label>
          <input
            id="email" name="email" type="email" required
            value={form.email} onChange={handleChange}
            placeholder="you@institution.edu.in"
            className={inputCls}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className={labelCls} htmlFor="institution">Institution Name</label>
          <input
            id="institution" name="institution"
            value={form.institution} onChange={handleChange}
            placeholder="St. Xavier's College"
            className={inputCls}
          />
        </div>
        <div className="space-y-1.5">
          <label className={labelCls} htmlFor="role">Your Role</label>
          <select
            id="role" name="role"
            value={form.role} onChange={handleChange}
            className={selectCls}
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
        <label className={labelCls} htmlFor="subject">
          Subject <span className="text-rose-400">*</span>
        </label>
        <select
          id="subject" name="subject" required
          value={form.subject} onChange={handleChange}
          className={selectCls}
        >
          <option value="">Select a topic…</option>
          <option>Request a Demo</option>
          <option>Pricing &amp; Plans</option>
          <option>Technical Support</option>
          <option>Partnership Enquiry</option>
          <option>General Question</option>
        </select>
      </div>

      <div className="space-y-1.5">
        <label className={labelCls} htmlFor="message">
          Message <span className="text-rose-400">*</span>
        </label>
        <textarea
          id="message" name="message" required rows={5}
          value={form.message} onChange={handleChange}
          placeholder="Tell us about your institution and what you're looking for…"
          className={`${inputCls} resize-none`}
        />
      </div>

      <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white rounded-xl font-semibold shadow-lg shadow-violet-900/40 group">
        Send Message <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
      </Button>
      <p className="text-xs text-white/25 text-center">
        We respect your privacy. Your data is never shared with third parties.
      </p>
    </form>
  )
}
