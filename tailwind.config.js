/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        appear: "appear 0.3s ease-in-out",
      },
      keyframes: {
        appear: {
          "0%": {opacity: '0', transform: "translateY(3rem)" },
          "100%": {opacity: '1', transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
