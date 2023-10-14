import daisyui from "daisyui";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        lightTheme: {
          primary: "#a4c92c",
          secondary: "#bced8e",
          accent: "#145189",
          neutral: "#2a1c31",
          "base-100": "#4f3357",
          info: "#80c1ef",
          success: "#51ecda",
          warning: "#f18f0e",
          error: "#ea6676",
          body:{
            "background-color":"#e3e6e6"
          }
        },
      },
    ],
  },
};
export default config;
