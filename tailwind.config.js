const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');




module.exports = {
  darkMode: false, // or 'media' or 'class'
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  corePlugins: {
    ringWidth: false,
    outline: false,
    accessibility: false,
  },
  theme: {
    extend: {
      borderRadius: {
        'none': '0',
        'xs': '8px',
        'sm': '10px',
        'md': '12px',
        'large': '18px',
        'lg': '18px',
        'xl': '24px',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        sans: ['SF Pro Display', 'sans-serif'],
      },
    },
    container: {
      center: true,
      padding: '0rem'
    },
    colors: {
      'lime-light': '#b5e48c',
      'lime': '#aaf683',
      'lime-dark': '#70e000',
      'charcoal': '#231f20',
      'soft-white': 'rgba(240,240,240,0.8)',
      'pewter': '#91AEC1',
      'drey': '#474A48',
      'drey-light': '#54494B',
      'sun': '#ffff3f',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      blue: colors.blue
    },
  },
  variants: {
    mixBlendMode: ['responsive'],
    backgroundBlendMode: ['responsive'],
    isolation: ['responsive'],
    extend: {}
  },
  plugins: [
    require('tailwindcss-blend-mode')(),
    require('@tailwindcss/aspect-ratio'),
  ],
}
