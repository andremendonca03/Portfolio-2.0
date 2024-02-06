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
      }
    },
  },
  plugins: [],
}
export default config;
