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
<<<<<<< Updated upstream
	  domains: ['cdn.hldtru.space', 'hldtru.io', 'hldtru.space', 'cdn.hldtru.io'],
	}
=======
	  domains: ['cdn.ady.systems', 'ady.systems'],
	},
  experimental: {
    urlImports: ['https://cdn.ady.systems/'],
  },
>>>>>>> Stashed changes
}
