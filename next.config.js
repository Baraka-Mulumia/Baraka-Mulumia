/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // allow image domains
  images: {
    domains: ["cdn.sanity.io"],
  },
};

module.exports = nextConfig;
