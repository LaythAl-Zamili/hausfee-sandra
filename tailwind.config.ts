import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#3B7C6E",
        accent: "#F0B429",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        display: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: { soft: "0 6px 30px rgba(0,0,0,0.08)" },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
export default config;
