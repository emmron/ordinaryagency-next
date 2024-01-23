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
};

module.exports = nextConfig;
