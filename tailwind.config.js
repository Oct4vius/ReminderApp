/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF9843',
        'secundary': '#FF7C10',
        'tertiary':  '#DC6300'
      }
    },
  },
  plugins: [],
}

