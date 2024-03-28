/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: { typedRoutes: true, serverComponentsExternalPackages: ["@resvg/resvg-js"], },
};

export default config;
