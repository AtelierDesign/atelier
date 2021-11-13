const withTM = require('next-transpile-modules')(['three']);
module.exports = withTM();

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.ady.systems', 'ady.systems', 'images.unsplash.com']
  },
  experimental: {
    urlImports: ['https://cdn.ady.systems/', 'https://cdn.skypack.dev/']
  }
};
