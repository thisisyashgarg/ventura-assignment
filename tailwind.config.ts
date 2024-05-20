import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          900: "#14153D",
        },
        green: {
          500: "#4FAF54",
        },
        gray: {
          50: "#F4F5F4",
          400: "#82818B",
        },
      },
    },
  },
  plugins: [],
}
export default config
