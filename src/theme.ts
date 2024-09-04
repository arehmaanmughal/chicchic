// theme.ts
import { createTheme } from "@mui/material/styles";

// Customize your breakpoints
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0, // Smallest screen
      sm: 576, // Small screen
      md: 768, // Medium screen
      lg: 992, // Large screen
      xl: 1200, // Extra large screen
    },
  },
  palette: {
    primary: {
      light: "#ffffff",
      main: "#fc6e6a",
      dark: "#464d56",
      
    },
    secondary : {
      main : "#f9f9f9"
    }
  },
});

export default theme;
