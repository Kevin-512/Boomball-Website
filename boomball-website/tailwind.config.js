/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: "true",
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "var(--font-luckiestGuy)",
      secondary: "var(--font-nunitoSans)",
    },
    extend: {
      colors: {
        primary: "#10151f",
        secondary: "#171d29",
        tertiary: "#3091e6",
        accent: {
          DEFAULT: "#9F2424",
          hover: "#801c1c",
        },
      },
    },
    plugins: [],
  },
};
