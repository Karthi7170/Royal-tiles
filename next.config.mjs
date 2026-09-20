/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d2ol7oe51mr4n9.cloudfront.net"
      }
    ],
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85, 90]
  }
};

export default nextConfig;
