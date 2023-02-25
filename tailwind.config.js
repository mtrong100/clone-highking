/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "Poppins",
      },
      colors: {
        primary: "#3E82FC",
        grayblue: "#5D616F",
        textcolor: "#5D616F",
        red: "#FE2C54",
        lightprimary: "#ECF3FF",
      },
      backgroundImage: {
        hero: "url('assets/Background.png')",
      },
      boxShadow: {
        buttonShadow: "0px 4px 60px rgba(62, 130, 252, 0.35)",
        aboutShadow: "0px 54px 104px rgba(0, 0, 0, 0.04)",
      },
    },
  },
  plugins: [],
};
