const createMDX = require('@next/mdx');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  redirects: async () => [
    {
      source: '/work',
      destination: '/about',
      permanent: true,
    },
  ],
};

const withMDX = createMDX();

module.exports = withMDX(nextConfig);
