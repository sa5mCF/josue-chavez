import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/components/**/*.{vue,js,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/plugins/**/*.{js,ts}',
    './app/app.vue',
    './app/error.vue'
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0E0C',
        surface: '#111715',
        primary: '#10B981',
        accent: '#F59E0B',
        'secondary-accent': '#34D399',
        'text-primary': '#E6F1EC',
        'text-secondary': '#9CA3AF',
        border: '#1F2A27',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Roboto Mono', 'monospace'],
      }
    },
  },
  plugins: [],
} satisfies Config
