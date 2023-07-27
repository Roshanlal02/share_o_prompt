/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
//   webpack(config) {
//     config.experimental = {
//       ...config.experimental,
//       topLevelAwait: true,
//     };
//     return config;
//   },
};

module.exports = nextConfig;
