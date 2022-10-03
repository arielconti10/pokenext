/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa')({
  dest: 'public',
})

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const isProd = process.env.NODE_ENV === 'production'

module.exports = withBundleAnalyzer(
  withPWA({
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ['raw.githubusercontent.com'],
      dangerouslyAllowSVG: true,
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
      minimumCacheTTL: 60,
      maxWidth: 1920,
      maxHeight: 1080,
      quality: 80,
    },
    headers: [
      {
        source: '/:all*(svg|jpg|png)',
        locale: false,
        key: 'Cache-Control',
        value: 'public, max-age=31536000, immutable',
      },
    ],
    pwa: {
      dest: 'public',
      disable: !isProd,
    },
  }),
)
