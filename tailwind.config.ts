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
      colors: {
        "hb-blue": "#5FB0CA",
        "hb-green": "#81CA5F",
        "hb-yellow": "#CAC65F",
        "hb-purple": "#4F2496",
        "hb-red": "#CA5F5F",
        "hb-orange": "#CA925F",
      },
    },
  },
  plugins: [],
};
export default config;
