const path = require('path')

module.exports = {
  // pageExtensions: ['page.js', 'page.jsx','page.ts','page.tsx'],
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}