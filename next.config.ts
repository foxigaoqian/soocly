import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/epa-608-practice-test",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
