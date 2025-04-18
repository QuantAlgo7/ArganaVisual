/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0D4C73', // sapphire blue
          light: '#1A6998',
          dark: '#083551',
        },
        secondary: {
          DEFAULT: '#0B3D19', // deep green
          light: '#155F27',
          dark: '#072812',
        },
        accent: {
          DEFAULT: '#00F5C4', // digital neon
          light: '#45FFD9',
          dark: '#00C49E',
          glow: 'rgba(0, 245, 196, 0.15)',
        },
        dark: {
          DEFAULT: '#121212',
          light: '#1E1E1E',
          lighter: '#252525',
          card: '#1A1A1A',
        },
        light: {
          DEFAULT: '#E9E9E9',
          dark: '#CCCCCC',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Syne', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 8px rgba(0, 245, 196, 0)' },
          '50%': { boxShadow: '0 0 15px rgba(0, 245, 196, 0.3)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 0v30M0 15h30' stroke='%232A2A2A' stroke-opacity='.1' fill='none' fill-rule='evenodd'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};