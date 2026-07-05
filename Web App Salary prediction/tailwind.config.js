/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#0F5132",
        secondary: "#198754",
        accent: "#D1E7DD",
        background: "#FFFFFF",
        section: "#F8F9FA",
        text: "#212529",
        muted: "#6C757D",
        success: "#28A745",
      },

      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },

      boxShadow: {
        card: "0 10px 35px rgba(0,0,0,0.08)",
      },

      borderRadius: {
        xl2: "20px",
      },

      backgroundImage: {
        hero:
          "linear-gradient(135deg,#F8F9FA 0%,#D1E7DD 100%)",
      },
    },
  },

  plugins: [],
};