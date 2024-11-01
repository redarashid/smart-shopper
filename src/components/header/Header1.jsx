import React, { useContext } from "react";
import { ColorModeContext } from "../../theme";
import { IconButton, useTheme } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";

const Header1 = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  const handleToggle = () => {
    const newMode = theme.palette.mode === "dark" ? "light" : "dark";
    localStorage.setItem("mode", newMode);
    colorMode.toggleColorMode();
  };

  return (
    <div>
      <div>
        <IconButton
          onClick={handleToggle}
          color="inherit"
          aria-label="toggle theme">
          {theme.palette.mode === "light" ? (
            <LightModeOutlined />
          ) : (
            <DarkModeOutlined />
          )}
        </IconButton>
      </div>
    </div>
  );
};

export default Header1;
