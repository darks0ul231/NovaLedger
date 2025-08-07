/** @type {import('tailwindcss').Config} */
module.exports = {
  experimental: {
    nesting: true, // Enable Tailwind's built-in nesting
  },
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      borderColor: {
        border: 'var(--border)', // Map `border-border` to `--border`
      },
    },
  },
  plugins: [],
};