/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // Client proposal pages are static HTML in /public/proposals/<name>/
      { source: '/proposals/pop', destination: '/proposals/pop/index.html' },
    ];
  },
};

export default nextConfig;
