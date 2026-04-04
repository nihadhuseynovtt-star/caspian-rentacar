// next.config.ts
const nextConfig = {
  // Build sürətini artırmaq üçün
  swcMinify: true,
  
  // TypeScript/ESLint xətalarını ignore et (əgər varsa)
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig