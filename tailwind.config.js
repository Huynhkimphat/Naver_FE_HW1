/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "banner-img": "url('/static/banner.png')",
        "download-img": "url('/static/downloadBg.png')",
      },
    },
  },
  plugins: [],
};
