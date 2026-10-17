import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self';",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://challenges.cloudflare.com;",
              "style-src 'self' 'unsafe-inline';",
              "img-src 'self' data: https:;",
              // TAMBAHKAN FRAME-SRC DAN CHILD-SRC DI SINI UNTUK CLOUDFLARE:
              "frame-src 'self' https://challenges.cloudflare.com;",
              "child-src 'self' https://challenges.cloudflare.com;",
              "connect-src 'self' data: blob: https://challenges.cloudflare.com https://*.challenges.cloudflare.com;",
            ].join(" "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
