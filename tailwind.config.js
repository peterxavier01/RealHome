/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      "light-gray": "rgb(0 0 0 / 0.051)",
      "dark-gray": "#303030",
    }),
    extend: {
      screens: {
        "max-sm": { max: "767px" },
        "md-lg": {
          min: "767px", // Minimum width
          max: "1023px", // Maximum width
        },
      },
    },
  },
  plugins: [],
};
