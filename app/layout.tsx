import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'KAPPLR – Alumni Engagement Platform for Schools & Colleges in India',
    template: '%s | KAPPLR',
  },
  description: 'KAPPLR is India\'s leading alumni management software for schools, colleges, and universities. Engage alumni, run fundraising campaigns, manage mentorship programs, and generate accreditation reports — all in one platform.',
  keywords: [
    'alumni management software India',
    'alumni engagement platform',
    'college alumni portal',
    'school alumni network',
    'university alumni management',
    'alumni tracking system',
    'alumni fundraising software',
    'alumni mentorship platform',
    'alumni directory software',
    'NAAC alumni reports',
    'NBA accreditation alumni',
    'WhatsApp alumni engagement',
    'alumni mobile app India',
    'alumni reunion management',
    'alumni placement hub',
    'KAPPLR',
    'alumni CRM India',
    'higher education alumni software',
    'alumni management system India',
    'alumni portal for schools',
    'alumni software for colleges',
    'alumni portal for colleges',
    'educational institute alumni network',
    'NAAC alumni data management',
    'boost college placements through alumni',
    'MyLeading Campus alumni',
    'from the house of MyLeading Campus',
  ],
  authors: [{ name: 'KAPPLR', url: 'https://kapplr.com' }],
  creator: 'KAPPLR',
  publisher: 'KAPPLR',
  metadataBase: new URL('https://kapplr.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://kapplr.com',
    siteName: 'KAPPLR',
    title: 'KAPPLR – Alumni Engagement Platform for Schools & Colleges in India',
    description: 'Turn your alumni into contributors, mentors, and brand ambassadors. KAPPLR is a complete alumni management system trusted by academic leaders across India.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'KAPPLR – Alumni Engagement Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KAPPLR – Alumni Engagement Platform',
    description: 'India\'s most trusted alumni management software for schools, colleges & universities.',
    images: ['/og-image.png'],
    creator: '@kapplr',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/logo-removebg.png',
        type: 'image/png',
      },
    ],
    apple: '/logo-removebg.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
