/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/bolt12.html",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
