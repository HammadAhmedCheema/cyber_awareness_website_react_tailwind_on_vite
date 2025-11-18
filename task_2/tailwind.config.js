/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0D1117', // A dark GitHub-like background
        'hacker-green': '#39FF14', // Bright neon green for text
        'terminal-border': '#30363d', // A subtle border color
        'glow-green': 'rgba(57, 255, 20, 0.5)', // For glow effects
      },
      fontFamily: {
        'mono': ['Fira Code', 'monospace'], // A popular coding font
      },
      boxShadow: {
        'glow': '0 0 15px rgba(57, 255, 20, 0.4)', // Neon glow effect
      },
    },
  },
  plugins: [],
}