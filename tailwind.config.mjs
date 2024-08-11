/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      colors: {
        snow: "#FFFAFA",
        slate: {
          150: "rgb(234, 239, 245)",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
