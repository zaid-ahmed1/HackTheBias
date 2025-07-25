import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },

  webpack: (config, { isServer }) => {
    // Only apply webpack config on client side to avoid SSR issues
    if (!isServer) {
      // Prevent multiple instances of Three.js
      config.resolve.alias = {
        ...config.resolve.alias,
        three: require.resolve('three'),
        '@react-three/fiber': require.resolve('@react-three/fiber'),
        '@react-three/drei': require.resolve('@react-three/drei'),
      };

      // Optimize for WebGL
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
      };
    }
    return config;
  },

  // Optimize for Three.js
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
};

export default nextConfig;
