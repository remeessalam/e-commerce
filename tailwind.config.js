/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundcolor: "#0f0f0f",
        primary: "#d9aa16",
      },
    },
  },
  plugins: [],
};
