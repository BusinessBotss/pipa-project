import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        'bg-soft': 'var(--bg-soft)',
        card: 'var(--card)',
        'card-2': 'var(--card-2)',
        line: 'var(--line)',
        'line-strong': 'var(--line-strong)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        gold: 'var(--gold)',
        'gold-soft': 'var(--gold-soft)',
        'gold-glow': 'var(--gold-glow)',
        sea: 'var(--sea)',
        sand: 'var(--sand)',
        wood: 'var(--wood)',
        whatsapp: 'var(--whatsapp)',
        danger: 'var(--danger)',
        success: 'var(--success)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      maxWidth: {
        content: '1200px',
        prose: '760px',
      },
    },
  },
  plugins: [],
};

export default config;
