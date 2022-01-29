const { withPlaiceholder } = require('@plaiceholder/next');

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.ady.systems', 'ady.systems', 'images.unsplash.com'],
  },
  experimental: {
    urlImports: ['https://cdn.ady.systems/', 'https://cdn.skypack.dev/'],
  },
};

module.exports = withPlaiceholder({
  // your Next.js config
  images: {
    domains: ['cdn.ady.systems', 'ady.systems', 'images.unsplash.com'],
  },
});
