/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { max: "425px" },
        "3xl": "1600px",

        // 'sm': '640px',
        // => @media (min-width: 640px) { ... }

        // 'md': '768px',
        // => @media (min-width: 768px) { ... }

        // 'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        // 'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        // '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        "primary-purple-05": "#4B1979",
        "primary-purple-04": "#7126B5",
        "primary-purple-03": "#A06ECE",
        "primary-purple-02": "#D0B7E6",
        "primary-purple-01": "#E2D4F0",
        "primary-cream-05": "#AA9B87",
        "primary-cream-04": "#D4C2A8",
        "primary-cream-03": "#FFE9CA",
        "primary-cream-02": "#FFF0DC",
        "primary-cream-01": "#FFF8ED",
        "alert-danger": "#FA2C5A",
        "alert-warning": "#F9CC00",
        "alert-success": "#73CA5C",
        "neutral-05": "#151515",
        "neutral-04": "#3C3C3C",
        "neutral-03": "#8A8A8A",
        "neutral-02": "#D0D0D0",
        "neutral-01": "#FFFFFF",
        gray: "#EEEEEE",
      },
      boxShadow: {
        low: "0px 0px 4px rgba(0, 0, 0, 0.15)",
        high: "0px 0px 10px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [
    // require("daisyui")
  ],
};
