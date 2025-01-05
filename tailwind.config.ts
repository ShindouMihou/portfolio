import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        horizons: ['var(--font-horizons)'],
        spaceMono: ['var(--font-space-mono)']
      },
      keyframes: {
        'blur-transition': {
          '0%': { filter: 'blur(8px)', opacity: '0' },
          '100%': { filter: 'blur(0px)', opacity: '1' }
        },
        'reverse-blur-transition': {
          '0%': { filter: 'blur(0px)', opacity: '1' },
          '100%': { filter: 'blur(8px)', opacity: '0' }
        },
        'fade-in-up': {
          '0%': { transform: 'translate3d(0,20px,0)', opacity: '0'},
          '100%': { transform: 'translate3d(0,0,0)', opacity: '1'}
        },
        'fade-out-down': {
          '0%': { transform: 'translate3d(0,0,0)', opacity: '1'},
          '100%': { transform: 'translate3d(0,-20px,0)', opacity: '0'}
        }
      },
      animation: {
        'blur-transition': 'blur-transition 250ms ease-in-out',
        'reverse-blur-transition': 'reverse-blur-transition 1s ease-in-out',
        'fade-in-up': 'fade-in-up 1s ease-in-out',
        'fade-out-down': 'fade-out-down 1s ease-in-out'
      },
      scrollbar: {
        none: {
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          '&': {
            '-ms-overflow-style': 'none',  /* IE & Edge */
            'scrollbar-width': 'none',    /* Firefox */
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
