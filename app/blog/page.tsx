import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'

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

const categoryColors: Record<string, string> = {
  Enrollment: 'bg-violet-100 text-violet-700',
  Strategy: 'bg-teal-100 text-teal-700',
  Communication: 'bg-sky-100 text-sky-700',
  Fundraising: 'bg-amber-100 text-amber-700',
  Mentorship: 'bg-pink-100 text-pink-700',
  Analytics: 'bg-emerald-100 text-emerald-700',
}

export default function BlogListingPage() {
  const [featured, ...rest] = posts

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-slate-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold bg-brand-gradient text-white">
            KAPPLR Blog
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Insights for{' '}
            <span className="text-brand-gradient">Alumni Relations</span> Teams
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strategies, case studies, and best practices to help you build a thriving alumni community.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 space-y-16">
        {/* Featured post */}
        <Link href={`/blog/${featured.slug}`} className="group block">
          <div className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-64 md:h-auto">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent md:bg-none" />
            </div>
            <div className="bg-white p-8 sm:p-10 flex flex-col justify-center space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-brand-gradient text-white">
                  Featured
                </span>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[featured.category]}`}>
                  {featured.category}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                {featured.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{featured.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{featured.readTime}</span>
              </div>
              <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                Read Article <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </Link>

        {/* Grid */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-8">Latest Articles</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <article className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1 space-y-3">
                    <div className="flex items-center gap-2">
                      <Tag className="w-3 h-3 text-muted-foreground" />
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${categoryColors[post.category]}`}>
                        {post.category}
                      </span>
                    </div>
                    <h3 className="font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
