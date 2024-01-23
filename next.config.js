/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\.md$/,
        use: 'remark-loader',
      });
    }
    return config;
  },
  // Removed exportPathMap and output as they are not needed for Cloudflare Pages
};

module.exports = nextConfig;
