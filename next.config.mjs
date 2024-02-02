/** @type {import('next').NextConfig} */
const prefix =
  process.env.NODE_ENV === 'production' ? 'https://ngeetl.github.io/yetion/' : ''

const nextConfig = {
  output: 'export',
  assetPrefix: prefix,
//   basePath: "/yetion",
  }
export default nextConfig;
