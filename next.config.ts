import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/tools/missed-call-calculator",
        destination: "/free-tools/missed-call-calculator",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
