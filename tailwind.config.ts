import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        vocalmind: {
          purple: {
            600: '#6B5B95',
            700: '#5A4A84',
          },
          blue: {
            600: '#4A5899',
            700: '#3A4888',
          },
          cyan: '#40E0D0',
          pink: '#FF69B4',
        },
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'gradient': 'gradient 8s linear infinite',
        'drift': 'drift 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        drift: {
          '0%': { transform: 'translateY(0px) translateX(0px)', opacity: '0' },
          '50%': { opacity: '0.5' },
          '100%': { transform: 'translateY(-100px) translateX(20px)', opacity: '0' },
        },
      },
      backgroundSize: {
        '400': '400% 400%',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;

