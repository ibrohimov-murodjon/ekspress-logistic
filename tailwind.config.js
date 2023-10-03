/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik"],
        krub: ["Krub"],
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        bold: "600",
      },
      screens: {
        desktop: { max: "1161px" },
        desktopSm: { max: "910px" },
        tabletLg: { max: "835px" },
        tabletMd: { max: "700px" },
        mobileLg: { max: "545px" },
      },
      colors: {
        bgVideo: "rgba(0,0,0,.6)",
        darkGray: "rgba(255, 255, 255, 0.20)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
