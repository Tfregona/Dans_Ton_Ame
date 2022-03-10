const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      blue: colors.blue,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      purple: colors.purple,
      yellow: colors.yellow,
      dta_pinklight: "#EAD8CA",
      dta_pink: "#D9A6A0",
      dta_brown: "#9E8B81",
      dta_graylight: "#E7E5E6",
      dta_gray: "#E1D7D6",
      dta_graydark: "#A2A09D",
    },
    extend: {},
  },
  plugins: [],
};
