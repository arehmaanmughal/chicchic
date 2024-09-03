import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    screens: {
      xs: '0px', // Smallest screen
      sm: "480px", // Small screen
      md: "768px", // Medium screen
      lg: "1024px", // Large screen
      xl: "1280px", // Extra large screen
    },
    colors: {
      primary: "#fc6e6a", // Your primary color
      black: "#464d56", // Text color for black
      white: "#ffffff", // Background color for white
      body: "#f9f9f9", // Background color for body
      gray: "#ede7df", // Light gray for borders or backgrounds
      green: "#4caf50", // Green for success
      red: "#f44336", // Red for errors or cancellations
      yellow: "#ffeb3b", // Yellow for warnings or pending states
    },
  },

  plugins: [],
};
export default config;
