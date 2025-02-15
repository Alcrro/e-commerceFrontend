import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'alexandru-roventa.s3.eu-central-1.amazonaws.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
