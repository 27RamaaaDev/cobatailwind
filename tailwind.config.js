/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        background: "#040E21",
        secondaryBg: "#091427",
        grayText: "#868490",
        orange: "#F8E7A1",
        card: "#101B2E",
      },
    },
  },
  plugins: [],
}

