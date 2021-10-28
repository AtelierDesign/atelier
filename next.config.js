const withPWA = require('next-pwa');

module.exports = withPWA({
  crossOrigin: 'anonymous',
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
  },
});

module.exports = {
  reactStrictMode: true,
	images: {
	  domains: ['cdn.ady.systems', 'ady.systems'],
	},
  experimental: {
    urlImports: ['https://cdn.ady.systems/'],
  },
}
