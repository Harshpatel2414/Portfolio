/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'nature': "url('/public/nature.avif')",
        'flash': "url('/public/flash.png')",
      }
    },
  },
  plugins: [],
}

