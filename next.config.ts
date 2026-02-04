import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 85, 90],
  },
  async redirects() {
    return [
      {
        source: '/wp-content/:path*',
        destination: '/images/:path*',
        permanent: true,
      },
      {
        source: '/index.php/:path*',
        destination: '/:path*',
        permanent: true,
      },
      {
        source: '/index.php',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
