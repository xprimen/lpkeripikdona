module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'title': ['Work Sans'],
        'body': ['DM Sans'],
      },
      spacing: {
        '120': '30rem',
        '160': '40rem',
        '184': '46rem'
      },
      colors: {
        'warning': '#F49B3F',
        'primary': '#5EAE53',
        'danger': '#EB8E78',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-textshadow')
  ],
}
