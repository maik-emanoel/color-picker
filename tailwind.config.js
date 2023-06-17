/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hueGradient': "linear-gradient(90deg, #FF0000 5.21%, #FF8A00 16.48%, #FFE600 27.74%, #14FF00 39.35%, #00A3FF 49.37%, #0500FF 61.18%, #AD00FF 72.26%, #FF00C7 83.53%, #FF0000 94.61%);"
      }
    },
  },
  plugins: [],
}

