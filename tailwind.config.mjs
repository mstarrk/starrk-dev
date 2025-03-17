/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          light: "rgb(125, 96, 255)",
          DEFAULT: "rgb(86, 63, 211)",
          dark: "rgb(54, 38, 145)",
        },
        accent: {
          light: "rgb(255, 106, 151)",
          DEFAULT: "rgb(240, 65, 116)",
          dark: "rgb(186, 35, 79)",
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "100%",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
