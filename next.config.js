/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['zupimages.net'],
    minimumCacheTTL: 31536000,
  }
}
module.exports = nextConfig
