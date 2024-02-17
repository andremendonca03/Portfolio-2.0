import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: "578px",
      md: "768px",
      lg: "992px",
      xl: "1275px",
      "2xl": "1396px",
      "3xl": "1560px",
      "4xl": "2000px",
    },
    extend: {
      borderRadius: {
        sm: "2px",
        DEFAULT: "5px",
        md: "10px",
        lg: "15px",
        xl: "20px",
        "2xl": "25px",
        "3xl": "35px",
      },
      colors: {
        r: {
          bg: "var(--color-root-bg)",
          bgGlassy: "var(--color-root-bgGlassy)",
          text: "var(--color-root-text)",
          "text-muted": "var(--color-root-text-muted)",
          accent: "var(--color-root-accent)",
          "accent-80": "var(--color-root-accent-80)",
        },
        p: {
          DEFAULT: "#493BE3",
          80: "#5345F5",
          text: "#C5C3D7",
        },
        s: {
          DEFAULT: "#E3442F",
          80: "#F54545",
          text: "#530909",
        },
        n: {
          darkBg: "#111111",
          black: "#000000",
          grey: "#DDDDDD",
          white: "#FFFFFF",
        },
        m: {
          success: "#3CC13B",
          "success-light": "#9DDF9C",
          warning: "#F3BB1C",
          "warning-light": "#F8DC8D",
          error: "#F03738",
          "error-light": "#F79A9B",
        },
      },
      spacing: {
        1: "5px",
        2: "10px",
        3: "15px",
        4: "25px",
        5: "40px",
        6: "60px",
        7: "90px",
        8: "120px",
        9: "150px",
        10: "180px",
      },
      zIndex: {
        1: '1',
        2: '2',
        5: '5',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
      },
    },
  },
  safelist: [
    'border-s',
    'border-s-80',
    'border-p',
    'border-p-80',
    'bg-s',
    'bg-p',
    'bg-p-80',
    'bg-s-80',
    'hover:bg-p-80',
    'hover:bg-s-80',
    'shadow-p',
    'shadow-s',
    'hover:shadow-p-80',
    'hover:shadow-s-80',
  ],
  plugins: [],
}
export default config;
