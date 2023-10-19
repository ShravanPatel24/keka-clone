/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.kekastatic.net","images.pexels.com"], // Add the domain causing the error
  },
};

module.exports = nextConfig;
