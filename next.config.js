/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  disableStaticImages: true,
  sassOptions: {
    includePaths: [ './styles' ]
  }
}

module.exports = nextConfig
