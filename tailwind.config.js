/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      raleway: "var(--font-raleway)",
      "playfair-display": "var(--font-playfair)",
    },
    extend: {
      screens: {
        "max-sm": { max: "767px" },
        "md-lg": {
          min: "767px", // Minimum width
          max: "1023px", // Maximum width
        },
      },
      colors: {
        "gray-1000": "#f3f2f2",
        "gray-2000": "#242424",
        "gray-3000": "#797979",
        "gray-4000": "#e6e6e6",
        primary: "#3c3c3c",
        muted: "#c2c1c1",
        "red-1000": "#e2574c",
      },
      backgroundColor: {
        "light-gray": "rgb(0 0 0 / 0.051)",
        "dark-gray": "#303030",
      },
      lineHeight: {
        paragraph: "27px",
        heading: "50px",
      },
    },
  },
  plugins: [],
};
