import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/screens/**/*.{js,ts,jsx,tsx}",
    "./src/Layout/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      xl: { max: "1279px" }, // => @media (max-width: 1279px) { ... }
      lg: { max: "1000px" }, // => @media (max-width: 999px) { ... }
      md: { max: "768px" }, // => @media (max-width: 767px) { ... }
      sm: { max: "640px" }, // => @media (max-width: 639px) { ... }
      xs: { max: "440px" }, // => @media (max-width: 480px) { ... },
      ms: { max: "350px" }, // => @media (max-width: 350px) { ... }
    },
  },
  plugins: [nextui()],
};
export default config;
