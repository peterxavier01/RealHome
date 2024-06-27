/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/peterxavier01/**",
      },
      {
        protocol: "https",
        hostname: "imgur.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
