/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }),
      dropShadow: {
        'lg': '0 10px 15px rgba(0, 0, 0, 0.5)',
        'md': '0 4px 6px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
