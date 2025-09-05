/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    turbo: {}, // Enable Turbopack for faster builds
    reactCompiler: true, // Enable React Compiler for better performance
  },
  bundlePagesRouterDependencies: true,
}

export default nextConfig
