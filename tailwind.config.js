import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundcolor: "#0f0f0f",
        primary: "#d9aa16",
        primary1: "#F0801C",
        secondary: "#0F0F0F",
        quaternary: "#050E15",
      },
      boxShadow: {
        large: "0px 0px 30px 10px rgba(0, 0, 0, 0.5)",
      },
      backgroundImage: {
        default: 'url("./src/assets/images/bg.png")',
      },
      textStroke: {
        DEFAULT: "1px",
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-stroke": {
          "text-shadow":
            "1px 1px 0 #F0801C, -1px -1px 0 #F0801C, 1px -1px 0 #F0801C, -1px 1px 0 #F0801C",
        },
      });
    },
    addVariablesForColors,
  ],
};

function addVariablesForColors({ addBase, theme }) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
