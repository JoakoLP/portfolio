/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // sans: ["Neue Montreal"],
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("tailwindcss-animated")],
};