import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FFE501",
          light: "#FFF44F",
          dark: "#E6CE00",
        },
        brand: {
          blue: "#2563EB",
          "blue-light": "#3B82F6",
          "blue-dark": "#1D4ED8",
          indigo: "#4F46E5",
        },
        dark: {
          DEFAULT: "#0A0A0A",
          100: "#1A1A1A",
          200: "#2A2A2A",
          300: "#3A3A3A",
          400: "#4A4A4A",
        },
        light: {
          DEFAULT: "#FFFFFF",
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
        },
        text: {
          primary: "#0A0A0A",
          secondary: "#6B7280",
          muted: "#9CA3AF",
          inverse: "#FFFFFF",
          "inverse-muted": "#A1A1AA",
        },
        success: "#22C55E",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        inter: ["var(--font-inter)"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(255, 229, 1, 0.3)" },
          "50%": {
            boxShadow:
              "0 0 50px rgba(255, 229, 1, 0.65), 0 0 80px rgba(255, 229, 1, 0.2)",
          },
        },
        aurora: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "25%": { transform: "translate(4%, -6%) scale(1.06)" },
          "50%": { transform: "translate(-5%, 7%) scale(0.96)" },
          "75%": { transform: "translate(-7%, -4%) scale(1.04)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-glow": "pulse-glow 2.5s ease-in-out infinite",
        aurora: "aurora 22s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
