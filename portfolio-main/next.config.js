/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://avatars.githubusercontent.com/u/139938613?s=400&u=3307ad614c532f668543ad211dd4f7c78678da77&v=4',
        port: '',
        pathname: '/u/**',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
