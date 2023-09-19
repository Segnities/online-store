/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['wallpapers.com'],
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:7886/:path*'
            }
        ]
    },
    env: {
        api: 'http://localhost:7886/'
    }
}

module.exports = nextConfig
