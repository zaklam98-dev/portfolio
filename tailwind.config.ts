import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F9F9F9",
        surface: "#FFFFFF",
        ink: "#161616",
        body: "#2B2B2B",
        muted: "#5E5E5E",
        border: "#DEDEDC",
        teal: {
          DEFAULT: "#1DB1A3",
          light: "#88D6D9",
        },
        coral: "#E35F3D",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      borderRadius: {
        xl2: "20px",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        logoPop: {
          "0%": { transform: "translateY(0) scale(1) rotate(0deg)" },
          "75%": { transform: "translateY(-2.6px) scale(1.055) rotate(-2.1deg)" },
          "100%": { transform: "translateY(-2px) scale(1.04) rotate(-1.5deg)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease-out both",
        "logo-pop": "logoPop 320ms cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
