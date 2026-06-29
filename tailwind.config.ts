import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        accent: '#FF6B00',
        highlight: '#FFD700'
      }
    }
  },
  plugins: []
};

export default config;