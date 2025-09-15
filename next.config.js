/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,
  // Enable static HTML export if needed
  // output: 'export',
  // distDir: 'build',
  // Optional: Configure page extensions if using custom page extensions
  // pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  // Optional: Configure webpack
  webpack: (config, { isServer }) => {
    // Add your webpack configurations here if needed
    return config;
  },
  // Optional: Configure redirects/rewrites
  async redirects() {
    return [
      // Add your redirects here
    ]
  },
  // Optional: Configure headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
