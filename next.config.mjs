/** @type {import('next').NextConfig} */
import createMDX from '@next/mdx';

const withMDX = createMDX({ extension: /\.mdx?$/ });

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  experimental: { mdxRs: true },
  images: { remotePatterns: [{ protocol: 'https', hostname: '**' }] },
};

export default withMDX(nextConfig);
