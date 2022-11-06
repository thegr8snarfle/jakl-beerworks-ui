/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    untappedAPIToken: '4aGvUsf-HHsKKKLwC-G6',
    environment: 'production',
    port: 80,
    test: 'PROD_DEV'
  },
  headers: async function() {
    return [{
      source: '/:path*',
      headers: [
        {key: 'Cache-Control', value: 'public, s-maxage=10, stale-while-revalidate=59'}
      ]
    } ]
  },
  poweredByHeader: false,
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
