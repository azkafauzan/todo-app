import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        dark: {
          primary: "#18181b",
          secondary: "#27272a",
        },
        light: {
          primary: "#f3f4f6",
          secondary: "#d1d5db",
        },
      },
    },
  },
  plugins: [],
}
export default config
