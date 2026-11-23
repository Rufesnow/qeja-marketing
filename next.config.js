/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  transpilePackages: ['geist'], // needed for the Geist font package in the pages router
}

module.exports = nextConfig
