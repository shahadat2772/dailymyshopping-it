/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FD841F",

          secondary: "#F57328",

          accent: "#400D51",

          neutral: "#28222A",

          "base-100": "#FFFF",

          info: "#ACCCE7",

          success: "#7FB77E",

          warning: "#E14D2A",

          error: "#CD104D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
