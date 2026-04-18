/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'], // For fun bubbly headers
      },
      colors: {
        'oslob-blue': '#0A2463', // Deep ocean
        'oslob-cyan': '#00C2FF', // Bright shallow water
        'oslob-yellow': '#FFDE00', // Sun
        'oslob-pink': '#FF6B6B', // Coral
        'oslob-sand': '#FEF9F0', // Sand background
        'oslob-green': '#3E8914', // Tropical leaves
      },
      boxShadow: {
        'fun': '8px 8px 0px rgba(0,0,0,1)', // Solid offset shadow for fun retro feel
        'fun-soft': '4px 4px 0px rgba(10, 36, 99, 0.2)',
      }
    },
  },
  plugins: [],
}
