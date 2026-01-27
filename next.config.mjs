/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // For GitLab Pages deployment
  basePath: '/tushar-chadha-portfolio',
  assetPrefix: '/tushar-chadha-portfolio',
};

export default nextConfig;
