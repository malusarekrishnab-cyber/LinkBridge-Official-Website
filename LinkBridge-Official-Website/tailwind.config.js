/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        midnight: {
          950: '#030712',
          900: '#070c18',
          850: '#0b1122',
          800: '#0f172a',
          700: '#1e293b',
        },
        obsidian: {
          cyan: '#0891b2',
          cyanGlow: '#06b6d4',
        },
        purpleTheme: {
          midnight: '#6366f1',
          electric: '#8b5cf6',
          dark: '#4f46e5',
        },
        cyanAccent: {
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.35)',
        'glow-purple': '0 0 25px -5px rgba(139, 92, 246, 0.35)',
        'glow-card': '0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 20px -5px rgba(6, 182, 212, 0.15)',
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
