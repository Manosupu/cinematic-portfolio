/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // Static HTML export
  trailingSlash: true,       // GitHub Pages routing
  basePath: '/cinematic-portfolio',  // GitHub Pages repo sub-path
  assetPrefix: '/cinematic-portfolio/',
  reactCompiler: true,
  images: {
    unoptimized: true,       // Required for static export (no server-side image optimization)
    qualities: [75, 80, 95, 100],
  },
};

export default nextConfig;
