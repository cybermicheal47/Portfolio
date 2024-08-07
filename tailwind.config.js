/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "custom": { "min": "300px", "max": "639px" },
        "secondcust": { "min": "768px", "max": "1023px" },
        "thirdcust": { "min": "640px", "max": "1022px" },
      },
    },
  },
  plugins: [],
};
