import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode

          myColor: {
            main: "#F6F9Fc",
          },

          bg: {
            secoundry: "#F6F9FC"
          },

          neutral: {
            main: "#64748B",
          },
          favColor: {
            main: grey[300],
          },
        }
      : {
          myColor: {
            main: "#252b32",
          },
          // palette values for dark mode
          neutral: {
            main: "#64748B",
          },

          bg : {
            secoundry: "#1D2021"
          },

          favColor: {
            main: grey[800],
          },
          text: {
            primary: "#fff",
          },
        }),
  },
});

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState(
    () => localStorage.getItem("mode") || "light"
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => {
          const newMode = prev === "light" ? "dark" : "light";
          localStorage.setItem("mode", newMode);
          return newMode;
        });
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return [theme, colorMode];
};
