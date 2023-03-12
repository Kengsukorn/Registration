/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        'h1' : '0',
        'h2' : '0',
      }
    },
  },
  plugins: [],
}