import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Blog – Alumni Relations Insights | KAPPLR',
  description: 'Strategies, case studies, and best practices to help you build a thriving alumni community.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'KAPPLR Blog – Alumni Relations Insights',
    description: 'In-depth articles on alumni engagement, fundraising, mentorship, and institutional growth.',
    url: 'https://kapplr.com/blog',
  },
}

import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { Animate, Stagger } from '@/components/animate'

const posts = [
  {
    slug: 'how-alumni-networks-drive-enrollment',
    title: 'How Alumni Networks Drive Enrollment by 40%',
    excerpt:
      'Discover how top institutions are leveraging engaged alumni communities to influence prospective students and boost enrollment numbers significantly.',
    category: 'Enrollment',
    date: 'Apr 28, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
    featured: true,
  },
  {
    slug: 'building-alumni-engagement-strategy',
    title: 'Building a Year-Round Alumni Engagement Strategy',
    excerpt:
      'One-off reunion events are no longer enough. Learn how to keep alumni connected, giving, and referring throughout the entire year.',
    category: 'Strategy',
    date: 'Apr 20, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
    featured: false,
  },
  {
    slug: 'whatsapp-for-alumni-communication',
    title: 'Why WhatsApp Is the #1 Channel for Alumni Communication',
    excerpt:
      'Email open rates for alumni newsletters hover around 18%. WhatsApp messages see 98%. Here\'s how institutions are shifting their outreach strategy.',
    category: 'Communication',
    date: 'Apr 14, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80',
    featured: false,
  },
  {
    slug: 'alumni-fundraising-best-practices',
    title: 'Alumni Fundraising Best Practices for 2026',
    excerpt:
      'From micro-donation campaigns to legacy giving programs, explore the tactics that are generating record alumni contributions this year.',
    category: 'Fundraising',
    date: 'Apr 7, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&q=80',
    featured: false,
  },
  {
    slug: 'mentorship-programs-that-work',
    title: 'Alumni Mentorship Programs That Actually Work',
    excerpt:
      'Poorly structured mentorship initiatives fizzle out after a semester. Here\'s the KAPPLR framework that keeps mentors engaged and mentees succeeding.',
    category: 'Mentorship',
    date: 'Mar 31, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80',
    featured: false,
  },
  {
    slug: 'measuring-alumni-engagement-roi',
    title: 'Measuring the ROI of Alumni Engagement Programs',
    excerpt:
      'How do you justify the budget? We break down the key metrics every institutional advancement office should be tracking — and how to report them.',
    category: 'Analytics',
    date: 'Mar 24, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    featured: false,
  },
]

const categoryBadge: Record<string, string> = {
  Enrollment:    'bg-violet-500/15 text-violet-300 border border-violet-500/30',
  Strategy:      'bg-teal-500/15 text-teal-300 border border-teal-500/30',
  Communication: 'bg-sky-500/15 text-sky-300 border border-sky-500/30',
  Fundraising:   'bg-amber-500/15 text-amber-300 border border-amber-500/30',
  Mentorship:    'bg-pink-500/15 text-pink-300 border border-pink-500/30',
  Analytics:     'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30',
}

const categoryAccent: Record<string, string> = {
  Enrollment:    'from-violet-500',
  Strategy:      'from-teal-500',
  Communication: 'from-sky-500',
  Fundraising:   'from-amber-500',
  Mentorship:    'from-pink-500',
  Analytics:     'from-emerald-500',
}

export default function BlogListingPage() {
  const [featured, ...rest] = posts

  return (
    <div className="min-h-screen bg-[#0a0518]">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] rounded-full bg-purple-700/40 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] rounded-full bg-teal-500/25 blur-[110px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="max-w-3xl mx-auto text-center space-y-5 relative z-10">
          <Animate variant="fadeUp" delay={0}>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 text-sm text-white/75 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse flex-shrink-0" />
              KAPPLR Blog
            </div>
          </Animate>
          <Animate variant="fadeUp" delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.06] tracking-tight text-white">
              Insights for{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400">
                Alumni Relations
              </span>{' '}
              Teams
            </h1>
          </Animate>
          <Animate variant="fadeUp" delay={0.2}>
            <p className="text-lg text-white/55 max-w-xl mx-auto leading-relaxed">
              Strategies, case studies, and best practices to help you build a thriving alumni community.
            </p>
          </Animate>
          <Animate variant="fadeUp" delay={0.3}>
            <div className="flex flex-wrap justify-center gap-2 pt-2">
              {['All', 'Enrollment', 'Strategy', 'Communication', 'Fundraising', 'Mentorship', 'Analytics'].map((cat, i) => (
                <span
                  key={cat}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full border cursor-default transition-colors ${
                    i === 0
                      ? 'bg-white/15 border-white/20 text-white'
                      : 'bg-white/4 border-white/10 text-white/45 hover:bg-white/10 hover:text-white/75'
                  }`}
                >
                  {cat}
                </span>
              ))}
            </div>
          </Animate>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-24 space-y-20">

        {/* ── Featured post – editorial hero card ── */}
        <Animate variant="fadeUp">
          <Link href={`/blog/${featured.slug}`} className="group block">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-violet-900/20">
              <div className="relative h-80 sm:h-[440px]">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0518] via-[#0a0518]/55 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 md:p-12">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/20 border border-white/25 text-white backdrop-blur-sm">
                    Featured
                  </span>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm ${categoryBadge[featured.category]}`}>
                    {featured.category}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-snug max-w-3xl mb-3 group-hover:text-violet-200 transition-colors">
                  {featured.title}
                </h2>
                <p className="text-white/55 leading-relaxed max-w-2xl text-sm sm:text-base mb-5">
                  {featured.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-5 text-xs text-white/40">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{featured.date}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{featured.readTime}</span>
                  <span className="inline-flex items-center gap-1 font-semibold text-violet-300 group-hover:gap-2 transition-all ml-auto">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </Animate>

        {/* ── Article grid ── */}
        <div>
          <Animate variant="fadeUp">
            <h2 className="text-2xl font-extrabold text-white mb-8">Latest Articles</h2>
          </Animate>
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" childVariant="fadeUp">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block h-full">
                <article className="relative bg-white/4 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/6 transition-colors h-full flex flex-col">
                  <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${categoryAccent[post.category]} to-transparent`} />
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0720]/90 via-[#0d0720]/20 to-transparent" />
                    <span className={`absolute bottom-3 left-3 text-xs font-semibold px-2.5 py-0.5 rounded-full ${categoryBadge[post.category]}`}>
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1 space-y-3">
                    <h3 className="font-bold text-white leading-snug group-hover:text-violet-200 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-white/40 leading-relaxed flex-1">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-white/30 pt-3 border-t border-white/8">
                      <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" />{post.date}</span>
                      <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" />{post.readTime}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </Stagger>
        </div>
      </main>

      {/* ── CTA strip ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900 via-purple-900 to-teal-900" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-violet-600/25 blur-[100px] pointer-events-none" />
        <Animate variant="fadeIn">
          <div className="max-w-2xl mx-auto text-center space-y-4 relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Ready to Build Your{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-300 to-cyan-300">
                Alumni Community?
              </span>
            </h2>
            <p className="text-white/50 text-base">
              Join 50+ institutions already transforming alumni engagement with KAPPLR.
            </p>
            <Link href="/contact">
              <span className="mt-2 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white font-semibold rounded-full shadow-lg shadow-violet-900/40 cursor-pointer transition-all group">
                Get a Free Demo <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          </div>
        </Animate>
      </section>

      <Footer />
    </div>
  )
}
