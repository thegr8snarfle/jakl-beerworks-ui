/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    untappedAPIToken: 'YXVzdGluLmt1bHBAZ21haWwuY29tOjRhR3ZVc2YtSEhzS0tLTHdDLUc2',
    environment: 'production',
    port: 80,
    test: 'PROD_DEV'
  },
  devIndicators: {
    buildActivity: true,
    buildActivityPosition: 'top-right'
  },
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [ './styles' ]
  }
}

module.exports = nextConfig
