import { MetadataRoute } from 'next';
import { services } from '@/content/services';
import { insights } from '@/content/insights';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bizniti-v1.vercel.app';
  const currentDate = new Date().toISOString();

  // Static pages
  const staticPages = [
    '',
    '/about',
    '/services',
    '/contact',
    '/insights',
    '/faqs',
    '/careers',
    '/privacy',
    '/terms',
    '/thank-you',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic Service pages
  const servicePages = services.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // Dynamic Insight pages
  const insightPages = insights.map((i) => ({
    url: `${baseUrl}/insights/${i.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...insightPages];
}
