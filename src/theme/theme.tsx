// styles/ThemeProvider.js
"use client";

import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#02bbde",
    },
    secondary: {
      main: "#edf2ff",
    },
  },
});

function CustomThemeProvider({ children }: any) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default CustomThemeProvider;
