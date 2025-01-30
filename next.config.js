/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    experimental: {
        optimizeCss: true,
        swcMinify: true,
    },


    compress: true,
    optimizeFonts: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.vc-virtual-learn.com',
            },
        ]
    }
};

module.exports = nextConfig

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//     enabled: process.env.ANALYZE === 'true',
// })



// module.exports = withBundleAnalyzer(nextConfig);