/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SERVER_URL: process.env.SERVER_URL,
    CLINIC_ID: process.env.CLINIC_ID,
  },
  images: {
    domains: ["dentapp-image.s3.eu-central-1.amazonaws.com"],
  },
  output: "standalone",
};

module.exports = nextConfig;
