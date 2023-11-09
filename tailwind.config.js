/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00FF88",
        secondary: "#006B6C",
        text: "#F0FDF2",
        dark: "#2F4858",
        light: "#BFFCFB",
      },
    },
  },
  plugins: [],
};
