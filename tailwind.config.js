/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#ABAAF3",
        secondary: "#5D3FC2",
        brandColor: "#322460",
        primaryDark: "#2b4ec6",
        secondaryDark: "#322460",
        neutral: "#2a0f8f",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        sm: "rgba(0, 0, 0, 0.2) 0px 2px 4px",
      },
    },
  },
  plugins: [],
};
