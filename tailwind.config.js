/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#646464",
        light: "#ffffff",
        main: "#f5ebe0",
        navBg: "#e3d5ca",
        button: "#ccd5ae",
        border: "#a3b18a",
        progressBar: "#dad7cd",
      },
    },
  },
  plugins: [],
};
