import { createTheme } from "@mui/material";

// NOTE -  Como red: Material tiene muchos temas predefinidos por si no quieres crearlo desde cero

import { red } from "@mui/material/colors";

export const purpleTheme = createTheme({
  palette: {
    primary: {
      main: '#5f9ea0'
      // main: '#262254'
    },
    secondary: {
      main: '#543884'
    },
    error: {
      main: red.A400 // intensidad de color
    }
  }
});