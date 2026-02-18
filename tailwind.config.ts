import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#FDFDFC',
        surface: '#F8F8F6',
        grid: '#E8E8E3',
        ink: {
          primary: '#121212',
          secondary: '#666660',
        },
        accent: {
          live: '#10B981',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        tighterPlus: '-0.03em',
      },
    },
  },
  plugins: [],
}

export default config
