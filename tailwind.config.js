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
        "gray-5000": "#333333",
        "gray-5500": "#f6f6f6",
        "gray-6000": "#f0f4f5",
        "red-1000": "#e2574c",
        "blue-1000": "#2a8da6",
        primary: "#3c3c3c",
        muted: "#c2c1c1",
      },
      backgroundColor: {
        "light-gray": "rgb(0 0 0 / 0.051)",
        "dark-gray": "#303030",
      },
      lineHeight: {
        paragraph: "27px",
        heading: "50px",
        large: "65px",
      },
      fontSize: {
        "heading-1": "45px",
        "heading-2": "37px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
