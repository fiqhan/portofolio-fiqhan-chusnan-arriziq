import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://challenges.cloudflare.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self' data: blob: https://challenges.cloudflare.com https://*.challenges.cloudflare.com;",
          },
        ],
      },
    ];
  },
};

export default function configure() {
  return nextConfig;
}
