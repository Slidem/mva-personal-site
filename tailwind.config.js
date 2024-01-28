/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      listStyleImage: {
        checkMark: "url('public/checkmark.webp')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
