/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d2ol7oe51mr4n9.cloudfront.net"
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ],
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85, 90]
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(self), microphone=(), geolocation=(), payment=()"
          }
        ]
      }
    ];
  }
};

export default nextConfig;
