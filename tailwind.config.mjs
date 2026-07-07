/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['Georgia', 'Times New Roman', 'serif'],
      },
      colors: {
        rose: {
          DEFAULT: '#7A4048',
          dark: '#6B3540',
          accent: '#B76E79',
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
