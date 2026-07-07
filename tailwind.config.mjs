/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        rose: {
          DEFAULT: '#B76E79',
          dark: '#9C5560',
          light: '#D4A5A5',
        },
        cream: {
          DEFAULT: '#FDF8F4',
          dark: '#F9F5F0',
        },
        border: '#EDE4D8',
      },
    },
  },
  plugins: [],
};
