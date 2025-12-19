import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Rewrite any request to /leads/* that isn't a static file to the Leads SPA entry point
      {
        source: "/leads/:path*",
        destination: "/leads/index.html",
      },
    ];
  },
};

export default nextConfig;
