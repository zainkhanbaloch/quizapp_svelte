/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/routes/**/*.{svelte,html,js,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

