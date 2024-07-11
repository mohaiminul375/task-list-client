/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      maname: '"Maname", serif',
      "playwrite-hr": '"Playwrite HR", cursive',
    },
  },
  plugins: [require("daisyui")],
};
