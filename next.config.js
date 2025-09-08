// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: { appDir: true },  // УДАЛИТЬ эту строку
  images: { unoptimized: true },      // можно оставить, если нужно
};

module.exports = nextConfig;
