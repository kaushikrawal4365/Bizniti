import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { ChatWidget } from '@/components/ChatWidget';
import { CookieBanner } from '@/components/CookieBanner';
import { StickyMobileCTA } from '@/components/StickyMobileCTA';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://bizniti-v1.vercel.app'),
  title: {
    default: 'BizNiti — Strategy that moves',
    template: '%s — BizNiti',
  },
  description:
    'BizNiti connects strategy, digital experiences and marketing systems to help businesses move with more clarity across web, SEO, PPC, content, and executive leadership.',
  keywords: [
    'digital marketing agency',
    'website development',
    'SEO strategy',
    'PPC advertising',
    'fractional CMO',
    'content marketing',
    'email marketing',
    'Atlanta marketing partner',
  ],
  authors: [{ name: 'BizNiti Strategy Team' }],
  creator: 'BizNiti',
  publisher: 'BizNiti',
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'BizNiti — Strategy that moves',
    description: 'Digital strategy, web experiences and marketing systems built to move businesses forward with clarity.',
    url: 'https://bizniti-v1.vercel.app',
    siteName: 'BizNiti',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BizNiti — Strategy that moves',
    description: 'Digital strategy, web experiences and marketing systems built to move businesses forward with clarity.',
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
        <ChatWidget />
        <CookieBanner />
        <StickyMobileCTA />
        <Analytics />
      </body>
    </html>
  );
}
