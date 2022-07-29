/** @type {import('next').NextConfig} */
const nextConfig = {
  // redirects() {
  //   return [
  //     {
  //       source: '**',
  //       destination: '/'
  //     }
  //   ]
  // },
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
