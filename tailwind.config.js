/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        // gold
        primary: {
          light: "#f0fdfa",
          DEFAULT: "#E6B15D",
          dark: "#0f766e",
        },
        secondary: {
          // teal
          light: "#f0fdfa",
          DEFAULT: "#025463",
          dark: "#0f766e",
        },
        darkSecondary: {
          // gray
          light: "#f0fdfa",
          DEFAULT: "#6b7280",
          dark: "#0f766e",
        },
        qora: {
          // black
          light: "#f0fdfa",
          DEFAULT: "#181818",
          dark: "#0f766e",
        },
        kulrang: {
          // dark gray
          light: "#f0fdfa",
          DEFAULT: "#5B5B5B",
          dark: "#0f766e",
        },
        sariq: {
          // yellow
          light: "#f0fdfa",
          DEFAULT: "#E6B05D",
          dark: "#0f766e",
        },
        textDark: {
          // oq
          light: "#f0fdfa",
          DEFAULT: "#ffffff",
          dark: "#0f766e",
        },
        bgDark: {
          // kok
          light: "#f0fdfa",
          DEFAULT: "#0f172a",
          dark: "#0f766e",
        },
      },
      fontFamily: {
        cinzel: ["'Cinzel Decorative'", ...fontFamily.serif],
        cormorant: ["'Cormorant Upright'", ...fontFamily.serif],
        inter: ["'Inter'", ...fontFamily.serif],
        josefinSans: ["'Josefin Sans'", ...fontFamily.serif],
      },
      fontSize: {
        biggest: "44px",
        middleSize: "32px",
        cormorantBig: "24px",
        yigirma: "20px",
        cormorantSmall: "18px",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addComponents }) {
      addComponents({
        ".hover-effect": {
          "&:hover": {
            color: "#E6B15D",
          },
        },
      });
    },
    function ({ addBase }) {
      addBase({
        html: { scrollBehavior: "smooth" },
        "::-webkit-scrollbar": { width: "8px", height: "8px" },
        "::-webkit-scrollbar-thumb": {
          backgroundColor: "theme(colors.secondary)",
          borderRadius: "10px",
        },
        "::-webkit-scrollbar-track": {
          backgroundColor: "#f1f1f1",
        },
        ".dark ::-webkit-scrollbar-thumb": {
          backgroundColor: "theme(colors.darkSecondary)",
        },
        ".dark ::-webkit-scrollbar-track": {
          backgroundColor: "#1f2937",
        },
      });
    },
  ],
};
