/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#FFF8F8",
        primary: "#FF4D6D",
        secondary: "#FADADD",
        ink: "#222222",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 60px -15px rgba(255, 77, 109, 0.25)",
        gentle: "0 10px 30px -10px rgba(34, 34, 34, 0.08)",
      },
    },
  },
  plugins: [],
};
