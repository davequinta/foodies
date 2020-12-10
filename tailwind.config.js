module.exports = {
  darkMode: 'media', // 'media' or 'class'
  theme: {
    screens: {
      sm: { max: '640px' },
      md: { min: '640px' },
      lg: { min: '768px' },
      xl: { min: '1024px' },
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#FFD600',
      rescard: '#FFF1BF',
      lightyellow: '#FFEA79'
    }),
    extend: {
      colors: {
        'accent-1': '#333',
      },
      lineHeight: {
        title: '0.85rem',
      },
      zIndex: {
        '-5': '-5',
      },
      width: {
        'section-big': '55%',
        'section-small': '45%',
        100: '30rem',
        105: '35rem',
        110: '40rem',
        115: '45rem',
        120: '50rem',
        128: '72rem',
        130: '80rem',
      },
      rotate: {
        '-.64': '-0.64deg',
      },
      inset: {
        '-98': '-25rem',
        '-100': '-30rem',
        '-105': '-35rem',
        '-110': '-40rem',
        '-115': '-45rem',
      },
      height: {
        100: '30rem',
        102: '32rem',
        105: '35rem',
        110: '40rem',
        130: '60rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
