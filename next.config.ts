import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',   // statik export üçün
  images: {
    unoptimized: true // şəkillərin düzgün işləməsi üçün
  }
};

export default nextConfig;
