/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/*.html", "./static/scripts/*.js"],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}

