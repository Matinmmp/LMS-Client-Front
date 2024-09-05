/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'buckettest.storage.c2.liara.space',
            },
        ]
    }
};

module.exports = nextConfig
