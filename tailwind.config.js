/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    mytheme: {
      primary: '#06b6d4',
      'primary-focus': '#4506cb',
      'primary-content': '#ffffff',
      secondary: '#f000b8',
      'secondary-focus': '#bd0091',
      'secondary-content': '#ffffff',
      accent: '#37cdbe',
      'accent-focus': '#2aa79b',
      'accent-content': '#ffffff',
      neutral: '#3d4451',
      'neutral-focus': '#2a2e37',
      'neutral-content': '#ffffff',
      'base-100': '#ffffff',
      'base-200': '#f9fafb',
      'base-300': '#d1d5db',
      'base-content': '#1f2937',
      info: '#2094f3',
      success: '#009485',
      warning: '#ff9900',
      error: '#ff5724'
    },

    patterns: {
      opacities: {
        100: '1',
        80: '.80',
        60: '.60',
        40: '.40',
        20: '.20',
        10: '.10',
        5: '.05'
      },
      sizes: {
        1: '0.25rem',
        2: '0.5rem',
        4: '1rem',
        6: '1.5rem',
        8: '2rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        32: '8rem'
      }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')]
};
