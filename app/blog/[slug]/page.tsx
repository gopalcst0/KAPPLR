import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Calendar, Clock, ArrowLeft, Tag, Share2, BookOpen } from 'lucide-react'

// ─── Post data ───────────────────────────────────────────────────────────────
const posts: Record<string, Post> = {
  'how-alumni-networks-drive-enrollment': {
    slug: 'how-alumni-networks-drive-enrollment',
    title: 'How Alumni Networks Drive Enrollment by 40%',
    category: 'Enrollment',
    date: 'Apr 28, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80',
    author: { name: 'Priya Sharma', role: 'Head of Growth, KAPPLR', avatar: 'PS' },
    body: `
Alumni engagement has quietly become one of the most powerful levers in institutional recruitment. When prospective students see thriving, engaged alumni communities, it signals quality — not just of academics, but of the lifetime network they're buying into.

## The Data Is Clear

A 2025 study across 120 higher education institutions found that schools with structured alumni engagement programs saw **40% higher enrollment rates** compared to peers without such programs. The mechanism is straightforward: alumni become authentic brand ambassadors who share genuine stories on social media, respond to direct inquiries from prospects, and host information sessions in their cities.

## Why Traditional Outreach Falls Short

Most institutions still rely on:
- Annual reunion events
- Quarterly newsletters with sub-20% open rates  
- LinkedIn group posts that few alumni see

These touchpoints are too infrequent and too passive to build real connection. Alumni disengage within 2 years of graduation if there's no proactive outreach.

## The KAPPLR Approach

KAPPLR flips the model. Instead of waiting for alumni to come to you, it creates automated, personalised touchpoints throughout the year:

**1. Milestone Moments** — Birthdays, work anniversaries, and graduation anniversaries are automatically recognised, keeping alumni feeling valued.

**2. Chapter Networks** — City-based alumni chapters are managed through WhatsApp groups, enabling local meetups and genuine community building.

**3. Referral Pipelines** — Alumni are equipped with simple sharing tools to refer prospective students, complete with a dashboard tracking their impact.

**4. Testimonial Engine** — Happy alumni are nudged at the right moments to leave reviews, record video testimonials, or participate in virtual open days.

## Getting Started

You don't need to overhaul your entire alumni relations strategy on day one. Begin with:

1. **Audit your current alumni database** — How many emails bounce? How many alumni have you heard from in the last 12 months?
2. **Identify your 20 most engaged alumni** — These champions will anchor your first cohort.
3. **Set a 90-day engagement target** — Aim to double your active alumni touchpoints in the first quarter.

KAPPLR customers typically see measurable enrollment referral traffic within the first 60 days of going live.

## Conclusion

Alumni networks are an underutilised enrollment asset at almost every institution. With the right platform and strategy, they can become your highest-converting recruitment channel — at a fraction of the cost of traditional paid media.
    `,
  },
  'building-alumni-engagement-strategy': {
    slug: 'building-alumni-engagement-strategy',
    title: 'Building a Year-Round Alumni Engagement Strategy',
    category: 'Strategy',
    date: 'Apr 20, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80',
    author: { name: 'Rohan Mehta', role: 'Alumni Relations Consultant', avatar: 'RM' },
    body: `
One-off reunion events are no longer enough. Alumni expect ongoing, meaningful connection — and institutions that deliver it reap the rewards in donations, referrals, and reputation.

## Why Year-Round Engagement Matters

Alumni engagement follows a predictable decay curve. Studies show:
- **90%** of alumni feel connected immediately after graduation
- **60%** remain engaged at the 1-year mark
- **Only 18%** report feeling connected 5 years post-graduation

The drop happens because most institutions only reach out when they need something — a donation, a survey response, a recruitment referral.

## Building Your Engagement Calendar

A year-round strategy maps touchpoints across all 12 months, balancing value delivery with asks.

**Q1 — Reconnect Quarter**  
January and February are ideal for "we're thinking of you" outreach. Share industry reports, offer exclusive alumni webinars, celebrate batch anniversaries.

**Q2 — Contribution Quarter**  
Spring is the traditional giving season. Prime alumni with impact stories before making donation asks. Run mentorship matching drives.

**Q3 — Community Quarter**  
Summer brings informal energy. Host city chapter meetups, alumni treks, and networking mixers. This is when word-of-mouth spreads naturally.

**Q4 — Recognition Quarter**  
Celebrate outstanding alumni publicly. Year-end award programmes and "alumni of the year" features drive pride and re-engagement among dormant contacts.

## The Role of Technology

Manual management of a year-round calendar across thousands of alumni is impossible without the right tools. KAPPLR automates the scheduling, personalisation, and multi-channel delivery so your team focuses on strategy, not logistics.

## Conclusion

Shift from reactive to proactive alumni engagement. Build a calendar, automate the touchpoints, and watch your community compound in value year after year.
    `,
  },
  'whatsapp-for-alumni-communication': {
    slug: 'whatsapp-for-alumni-communication',
    title: 'Why WhatsApp Is the #1 Channel for Alumni Communication',
    category: 'Communication',
    date: 'Apr 14, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&q=80',
    author: { name: 'Ananya Singh', role: 'Product Lead, KAPPLR', avatar: 'AS' },
    body: `
Email newsletters are still the default for most alumni offices. But the data tells a different story: WhatsApp messages average a **98% open rate** compared to email's 18-22%.

## Why WhatsApp Works for Alumni

Alumni already use WhatsApp every day — for family, friends, and work. When your institution communicates through a channel they already trust and check constantly, the friction disappears.

Key advantages:
- **Instant delivery** — Messages arrive within seconds, not queued in promotional folders
- **Rich media support** — Share images, videos, and documents naturally
- **Two-way conversation** — Alumni can respond, ask questions, and feel heard
- **Group dynamics** — Chapter groups create organic peer-to-peer engagement

## Getting Compliance Right

Managing alumni on WhatsApp at scale requires care around consent and data privacy. KAPPLR's WhatsApp integration is built on the official Meta Business API, ensuring:
- Double opt-in flows for all contacts
- GDPR and DPDP compliant data handling
- Opt-out respected instantly across all automations

## What to Send on WhatsApp

Not all content suits WhatsApp. Best performers:
- Event reminders and RSVPs
- Milestone congratulations
- Quick polls and feedback requests
- Breaking institution news
- Short video messages from leadership

Avoid: long-form newsletters, dense text, frequent promotional asks.

## Conclusion

WhatsApp isn't just a messaging app — it's the engagement layer your alumni relations programme has been missing. Pair it with email and SMS for a multi-channel approach that reaches alumni wherever they are.
    `,
  },
  'alumni-fundraising-best-practices': {
    slug: 'alumni-fundraising-best-practices',
    title: 'Alumni Fundraising Best Practices for 2026',
    category: 'Fundraising',
    date: 'Apr 7, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1200&q=80',
    author: { name: 'Vikram Nair', role: 'Advancement Director', avatar: 'VN' },
    body: `
Alumni giving in 2026 looks very different from a decade ago. Here are the strategies that are actually moving the needle.

## Micro-Donation Campaigns

Large one-time gifts are increasingly rare, especially from younger alumni. Micro-donation campaigns — think ₹500/month or $10/month recurring — are dramatically outperforming traditional annual fund appeals.

The psychology is simple: small amounts feel achievable, recurring gifts compound, and donors feel ongoing ownership of the institution's success.

## Peer-to-Peer Fundraising

Your most passionate alumni are your best fundraisers. Equip them with personalised fundraising pages and let them rally their networks. Peer-to-peer campaigns typically raise 3-5x more than institution-led campaigns.

KAPPLR's fundraising module gives each alumni ambassador their own shareable page with real-time tracking of their impact.

## Impact Storytelling

Before any ask, show donors what their money does. Feature a scholarship recipient. Show a lab upgrade funded by alumni gifts. Make the connection between donation and outcome vivid and specific.

## Matching Gift Programmes

Corporate matching programmes are massively underutilised in India and South Asia. Partner with alumni-founded companies to offer 2x or 3x matches on giving days — the urgency and multiplied impact reliably breaks giving records.

## Conclusion

The future of alumni fundraising is personalised, digital-first, and relationship-driven. Institutions that invest in genuine year-round engagement before making the ask will consistently outperform those that only reach out when they need donations.
    `,
  },
  'mentorship-programs-that-work': {
    slug: 'mentorship-programs-that-work',
    title: 'Alumni Mentorship Programs That Actually Work',
    category: 'Mentorship',
    date: 'Mar 31, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80',
    author: { name: 'Deepa Iyer', role: 'Community Success, KAPPLR', avatar: 'DI' },
    body: `
Alumni mentorship programmes are one of the most requested—and most abandoned—alumni engagement initiatives. High initial sign-up rates, poor long-term follow-through. Here's how to fix it.

## Why Most Programmes Fail

The common failure pattern:
1. Institution recruits mentors in a burst of enthusiasm
2. Matching is done manually, slowly, with poor criteria
3. First meetings happen weeks after sign-up — momentum lost
4. No structured cadence, so conversations fizzle
5. No recognition for mentors, reducing their motivation to stay

## The Framework That Works

**Step 1: Smart Matching**  
Match on industry, role, geography, and stated goals — not just graduation year. KAPPLR's matching algorithm surfaces the top 3 mentor options for each mentee within 48 hours of sign-up.

**Step 2: Structured First 90 Days**  
Provide both parties a conversation guide for the first three sessions. Having a script removes the awkwardness and sets clear expectations.

**Step 3: Accountability Nudges**  
Automated reminders 48 hours before each scheduled session. Post-session check-ins to log progress. Neither party needs to remember — the system does it for them.

**Step 4: Visible Recognition**  
Publicly celebrate mentors who complete the programme. A "Top Mentor" badge on their alumni profile, a certificate, and a mention in the institution newsletter goes a long way.

## Measuring Success

Track:
- Match acceptance rate (target >80%)
- 90-day retention rate (target >70%)
- Mentee satisfaction score (NPS >50)
- Career outcome reporting at 6 months

## Conclusion

Mentorship done right is the highest-value offering you can give alumni on both sides of the relationship. The key is structure, speed of matching, and ongoing accountability. KAPPLR handles all three.
    `,
  },
  'measuring-alumni-engagement-roi': {
    slug: 'measuring-alumni-engagement-roi',
    title: 'Measuring the ROI of Alumni Engagement Programs',
    category: 'Analytics',
    date: 'Mar 24, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    author: { name: 'Karan Bose', role: 'Data & Analytics, KAPPLR', avatar: 'KB' },
    body: `
"We know alumni engagement is important, but we can't measure it." This is the most common conversation in advancement offices. Here's how to change that.

## The ROI Framework

Alumni engagement ROI has four components:

**1. Direct Revenue**  
Alumni donations, sponsorships, and ticket sales from events. This is the easiest to measure and usually the only number leadership reports.

**2. Enrollment Value**  
Track referrals from alumni to prospective students. If 20 alumni each refer 2 prospects and your conversion rate is 25%, that's 10 enrolled students — with a lifetime value of crores.

**3. Employment & Placement Value**  
How many current students got internships or jobs through the alumni network? Apply your average placement fee to quantify this.

**4. Brand & Reputation Value**  
Harder to measure, but track alumni NPS, social media mentions, and press coverage driven by alumni stories. These feed the top of your enrollment funnel.

## Key Metrics Dashboard

Every alumni relations team should track monthly:
- Active alumni rate (engaged in last 90 days)
- Message open and response rates by channel
- Donation participation rate (% of alumni who gave, not just total amount)
- Referral conversion pipeline
- Mentorship programme completion rate
- Alumni satisfaction score (NPS)

KAPPLR's analytics dashboard surfaces all of these in one view, with trends, benchmarks, and exportable reports for board presentations.

## Making the Case to Leadership

When pitching budget, translate engagement metrics to institutional value. One enrolled student referred by an alumnus represents ₹4-12L in tuition revenue — making even a modest engagement programme ROI-positive within the first year.

## Conclusion

You can't improve what you don't measure. Build your metrics framework before you launch your engagement programme so you can demonstrate ROI clearly and secure continued investment.
    `,
  },
}

interface Post {
  slug: string
  title: string
  category: string
  date: string
  readTime: string
  image: string
  author: { name: string; role: string; avatar: string }
  body: string
}

const categoryColors: Record<string, string> = {
  Enrollment: 'bg-violet-100 text-violet-700',
  Strategy: 'bg-teal-100 text-teal-700',
  Communication: 'bg-sky-100 text-sky-700',
  Fundraising: 'bg-amber-100 text-amber-700',
  Mentorship: 'bg-pink-100 text-pink-700',
  Analytics: 'bg-emerald-100 text-emerald-700',
}

// Render markdown-like body to JSX
function renderBody(body: string) {
  const lines = body.trim().split('\n')
  const elements: React.ReactNode[] = []
  let key = 0

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()
    if (!line) {
      key++
      continue
    }
    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={key++} className="text-2xl font-bold text-foreground mt-10 mb-4">
          {line.slice(3)}
        </h2>
      )
    } else if (line.startsWith('**') && line.endsWith('**') && !line.slice(2, -2).includes('**')) {
      elements.push(
        <p key={key++} className="font-semibold text-foreground mt-5 mb-1">
          {line.slice(2, -2)}
        </p>
      )
    } else if (line.startsWith('- ')) {
      const items: string[] = []
      while (i < lines.length && lines[i].trim().startsWith('- ')) {
        items.push(lines[i].trim().slice(2))
        i++
      }
      i-- // back up one since loop will increment
      elements.push(
        <ul key={key++} className="list-disc list-inside space-y-1.5 my-4 text-muted-foreground">
          {items.map((item, idx) => (
            <li key={idx} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
          ))}
        </ul>
      )
    } else {
      elements.push(
        <p
          key={key++}
          className="text-muted-foreground leading-relaxed my-3"
          dangerouslySetInnerHTML={{
            __html: line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>'),
          }}
        />
      )
    }
  }

  return elements
}

// Related posts (exclude current)
function getRelated(currentSlug: string, count = 3) {
  return Object.values(posts)
    .filter((p) => p.slug !== currentSlug)
    .slice(0, count)
}

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }))
}

export default async function SingleBlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts[slug]
  if (!post) notFound()

  const related = getRelated(slug)

  return (
    <>
      <Navbar />

      {/* Hero image */}
      <div className="w-full h-72 sm:h-96 relative overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12">
        <div className="grid lg:grid-cols-[1fr_320px] gap-12">
          {/* Article */}
          <article>
            {/* Back link */}
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[post.category]}`}>
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="w-3.5 h-3.5" />{post.date}
              </span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="w-3.5 h-3.5" />{post.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-snug mb-6">
              {post.title}
            </h1>

            {/* Author */}
            <div className="flex items-center gap-3 mb-8 pb-8 border-b border-border">
              <div className="w-10 h-10 rounded-full bg-brand-gradient flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                {post.author.avatar}
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">{post.author.name}</div>
                <div className="text-xs text-muted-foreground">{post.author.role}</div>
              </div>
            </div>

            {/* Body */}
            <div className="prose-like">{renderBody(post.body)}</div>

            {/* Share */}
            <div className="mt-12 pt-8 border-t border-border flex items-center gap-3">
              <Share2 className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Share this article</span>
              {['LinkedIn', 'Twitter', 'WhatsApp'].map((s) => (
                <span
                  key={s}
                  className="text-xs px-3 py-1.5 rounded-full border border-border hover:border-primary hover:text-primary cursor-pointer transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* CTA card */}
            <div className="bg-brand-gradient rounded-2xl p-6 text-white space-y-3">
              <BookOpen className="w-7 h-7 text-white/80" />
              <h3 className="font-bold text-lg leading-snug">Ready to build your alumni community?</h3>
              <p className="text-sm text-white/80">Join 200+ institutions using KAPPLR to engage alumni at scale.</p>
              <Link href="/pricing">
                <span className="mt-2 inline-block px-5 py-2.5 bg-white text-primary font-semibold text-sm rounded-full cursor-pointer hover:bg-white/90 transition">
                  Start Free Trial
                </span>
              </Link>
            </div>

            {/* Related posts */}
            <div>
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <Tag className="w-4 h-4 text-primary" /> Related Articles
              </h3>
              <div className="space-y-4">
                {related.map((p) => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className="group flex gap-3 items-start">
                    <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-2">
                        {p.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">{p.readTime}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* More articles */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold text-foreground mb-8">More Articles</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {related.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
                <article className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="relative h-44 overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-5 flex flex-col flex-1 space-y-2">
                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full self-start ${categoryColors[p.category]}`}>
                      {p.category}
                    </span>
                    <h3 className="font-bold text-foreground leading-snug group-hover:text-primary transition-colors flex-1">
                      {p.title}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground pt-2 border-t border-border">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{p.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{p.readTime}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
