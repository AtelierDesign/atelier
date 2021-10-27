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
	  domains: ['cdn.ady.systems', 'ady.systems', 'd37ni96g2zvg5.cloudfront.net'],
	},
  experimental: {
    urlImports: ['https://cdn.ady.systems/', 'https://use.typekit.net/'],
  },
}
