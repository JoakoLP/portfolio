/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require("tailwindcss/colors");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      fontFamily: {
        // sans: ["Neue Montreal"],
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer"), require("flowbite/plugin"), require("tailwindcss-animated")],
});
