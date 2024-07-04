/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#070724",
        button: {
          active: "var(--color-button-active)",
          hover: "#D8D8D8",
        },
      },
      width: {
        "planet-size": "var(--planet-img-size)",
      }
    },
  },
  plugins: [],
}