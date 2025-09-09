import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://smirnov-igor.com';
  return [
    { url: `${base}/`, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/about`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/business`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/education`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/contact`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/blog/burnout-recovery`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/psychology-for-business`, changeFrequency: 'monthly', priority: 0.6 }
  ];
}
