/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        system: "system-ui, sans-serif"
      },
      colors: {
        swing: {
          primary: "#F7EEAB",
          text: "#632F12"
        }
      }
    }
  },
  plugins: []
}
