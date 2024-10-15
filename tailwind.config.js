/** @type {import('tailwindcss').Config} */
module.exports = {
  important : true ,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container : {
      padding : '2rem'
    }, 
    extend: {
      colors: {
        primary : '#009aff',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
