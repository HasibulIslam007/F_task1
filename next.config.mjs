/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static demo served from a CDN-backed mock image — skip the image optimizer
  // (fewer moving parts on Vercel, no remotePatterns surface).
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
