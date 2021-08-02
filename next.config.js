const svgr = require('@svgr/webpack')

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net'],
  },
  future: {
    webpack5: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}
