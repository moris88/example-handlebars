/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{hbs,js}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#C9102E'
        },
        secondary: {
          DEFAULT: '#B10B25'
        }
      }
    }
  },
  plugins: []
}

