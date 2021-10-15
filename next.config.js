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
	  domains: ['d37ni96g2zvg5.cloudfront.net', 'cdn.hldtru.space', 'hldtru.io', 'hldtru.space', 'cdn.hldtru.io'],
	}
}
