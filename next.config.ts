import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    output: 'export',
    trailingSlash: true,
    images: {
        remotePatterns: [
            {
                hostname: "portfolio-image-assets.mihou.dev"
            },
            {
                hostname: "pub-084dc2a53d6c4eb59db97bcd1add47d3.r2.dev"
            },
            {
                hostname: "exponie.mihou.dev"
            }
        ],
        unoptimized: true
    }
};

export default nextConfig;
