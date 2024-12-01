/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xll: '1400px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    extend: {
      fontFamily: {
        man: ['Manrope'],
      },
      colors: {
        red_45: "var(--red_45)",
        red_50: "var(--red_50)",
        red_55: "var(--red_55)",
        red_60: "var(--red_60)",
        red_80: "var(--red_80)",
        red_90: "var(--red_90)",
        red_95: "var(--red_95)",
        red_99: "var(--red_99)",


        black_6: "var(--black_6)",
        black_8: "var(--black_8)",
        black_10: "var(--black_10)",
        black_12: "var(--black_12)",
        black_15: "var(--black_15)",
        black_20: "var(--black_20)",
        black_25: "var(--black_25)",
        black_30: "var(--black_30)",


        gray_60: "var(--gray_60)",
        gray_65: "var(--gray_65)",
        gray_70: "var(--gray_70)",
        gray_75: "var(--gray_75)",
        gray_90: "var(--gray_90)",
        gray_95: "var(--gray_95)",
        gray_97: "var(--gray_97)",
        gray_99: "var(--gray_99)",
      },
      fontSize: {
        font_14_18: "var(--font_14_18)",
        font_14_18_mini: "var(--font_14_18_mini)",
        font_18_24: "var(--font_18_24)",
        font_18_22: "var(--font_18_22)",
        font_28_58: "var(--font_28_58)",
        font_24_38: "var(--font_24_38)",
        font_24_48: "var(--font_24_48)",
        font_16_20: "var(--font_16_20)",
        font_24_40: "var(--font_24_40)",
      },
      backgroundImage: {
        none: 'none',
        'gradient-maruf': 'linear-gradient(to top,"var(--red_50)"',

      },
      maxWidth: ({ theme, breakpoints }) => ({
        ...theme('spacing'),
        wrapper: '1920px',
        ...breakpoints(theme('screens')),
      }),
    },
  },
  plugins: [],
}

