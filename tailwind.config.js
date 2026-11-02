const c = (v) => `rgb(var(--${v}) / <alpha-value>)`
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { bg: c('bg'), surface: c('surface'), ink: c('ink'), mute: c('mute'), line: c('line'), cyan: c('cyan'), violet: c('violet') },
      fontFamily: {
        display: ['Sora', '"Noto Sans Devanagari"', 'system-ui', 'sans-serif'],
        body: ['Manrope', '"Noto Sans Devanagari"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
