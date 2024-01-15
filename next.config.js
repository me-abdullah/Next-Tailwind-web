/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    plugins: ['macros'],
    'fontawesome-svg-core': {
      'license': 'free'
    },
  
    appDir: true,
  },
}

module.exports = nextConfig
