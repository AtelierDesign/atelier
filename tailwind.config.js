const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');



module.exports = {
  darkMode: false, // or 'media' or 'class'
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {
      borderRadius: {
        'none': '0',
        'large': '12px',
        'lg': '18px',
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
    extend: {},
  },
  plugins: [
    require('tailwindcss-blend-mode')(),
    require('@tailwindcss/aspect-ratio'),
  ],
}
