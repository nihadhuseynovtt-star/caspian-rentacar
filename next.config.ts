/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Static HTML export üçün
  distDir: 'dist',   // Vercel üçün 'dist' daha yaxşıdır, 'out' yerinə
  images: {
    unoptimized: true,  // Static export üçün şəkilləri optimallaşdırma
  },
  trailingSlash: true,  // URL-lərin sonunda / olması (SEO üçün yaxşı)
}

module.exports = nextConfig