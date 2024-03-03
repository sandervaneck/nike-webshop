"use client";

import { PropsWithChildren } from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { PaletteOptions } from "@mui/material";

interface ExtendedPaletteOptions extends PaletteOptions {
  default?: {
    main: string;
  };
}

export const theme = createTheme({
  typography: { fontFamily: "Work_Sans, sans-serif" },
  palette: {
    primary: {
      main: "#3f51b5",
      light: "#757ce8",
      dark: "#002884",
    },
    error: {
      main: "#ea3a3d",
      light: "#ea3a3d",
      dark: "#ea3a3d",
    },
    warning: {
      main: "#FF8412",
      light: "#FF8412",
      dark: "#FF8412",
    },
    success: {
      main: "#369941",
      light: "#369941",
      dark: "#369941",
    },
    info: {
      main: "#e0e0e0",
      dark: "000000DE",
    },
  } as ExtendedPaletteOptions,
});
