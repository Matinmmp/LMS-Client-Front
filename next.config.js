/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    experimental: {
        optimizeCss: true,
        swcMinify: true,
    },

    compilerOptions: {
        target: "es2015"
    },
      
    compress: true,
    optimizeFonts: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'buckettest.storage.c2.liara.space',
            },
            {
                protocol: 'https',
                hostname: 'lottie.host'
            },
            {
                protocol: 'https',
                hostname: '"www.google.com'
            }
        ]
    }
};

module.exports = nextConfig

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//     enabled: process.env.ANALYZE === 'true',
// });
// module.exports = withBundleAnalyzer({});