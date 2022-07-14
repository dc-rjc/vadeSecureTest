/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto, sans-serif",
    },
    extend: {
      spacing: require("./src/helpers/styles/spacing.js"),
      borderRadius: require("./src/helpers/styles/spacing.js"),
      minWidth: require("./src/helpers/styles/spacing.js"),
      minHeight: require("./src/helpers/styles/spacing.js"),
      maxWidth: require("./src/helpers/styles/spacing.js"),
      lineHeight: require("./src/helpers/styles/spacing.js"),
      colors: require("./src/helpers/styles/color.js"),
    },
  },
  plugins: [],
};
