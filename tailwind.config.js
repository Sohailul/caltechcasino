module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        casinotheme: {
          primary: "#FD749B",
          secondary: "#281AC8",
          accent: "#250B3E",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [
    require("daisyui"),
    require('tailwind-scrollbar-hide')
  ],
}