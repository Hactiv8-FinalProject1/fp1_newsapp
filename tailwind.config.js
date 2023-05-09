/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./src/**/**/*.{html,js,jsx}", "./public/*.{html,js,jsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#0059b3",
        secondary: "#BBBBBB",
        dark: " #004080",
      },
    },
  },
  plugins: [],
};
