/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    untappedAPIToken: '4aGvUsf-HHsKKKLwC-G6',
    mapboxAPIToken: 'pk.eyJ1IjoiamFrbGJlZXJ3b3JrcyIsImEiOiJjbGE2OGwyY2swa3V5M29ydmkyOWU1c3p2In0.4HxMcOGCT6u9P1vNm5NTTQ',
    environment: 'local',
    port: 80
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
