import type { MetadataRoute } from 'next';
export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://smirnov-igor.com';
  return { rules: { userAgent: '*', allow: '/', disallow: ['/api/', '/_next/'] }, sitemap: `${base}/sitemap.xml` };
}
