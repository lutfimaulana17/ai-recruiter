/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**', // ⛔️ Not officially supported (just for concept)
          pathname: '/**',
        },
      ],
    },
  };

export default nextConfig;
