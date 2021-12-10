module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '14': '3.5rem',
        '22': '5.5rem',
        '72': '18rem',
        '22': '50rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
