/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // For GitLab Pages deployment
  // If deploying to https://tushar-chadha1.gitlab.io/tushar-chadha-portfolio/
  // basePath: '/tushar-chadha-portfolio',
  // assetPrefix: '/tushar-chadha-portfolio',
};

export default nextConfig;
