/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#1E5E4B",
        secondaryColor: "#F2F7F4",
        blackColor: "#001115",
        lightGrey: "#C0C0C0",
        darkGrey: "#959595",
      },
      fontFamily: {
        Ubuntu: ["Ubuntu"],
        Montserrat: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
