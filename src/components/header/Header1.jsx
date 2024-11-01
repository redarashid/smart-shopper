import React, { useContext } from "react";
import { ColorModeContext } from "../../theme";
import { Box, IconButton, Stack, Typography, useTheme } from "@mui/material";
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
    <Box sx={{ bgcolor: "#2B3445" }}>
      <Stack direction={"row"} alignItems={"center"} display={"flex"}>
        <Typography
          variant="body2"
          sx={{
            bgcolor: "#1F2937",
            p: "3px 10px",
            mr: 2,
            color: "#FFF",
            fontWeight: "600",
            fontSize: "12px",
            borderRadius: 12,
          }}>
          Hot
        </Typography>
        <Typography variant="body2" sx={{ color: "#FFF", fontSize: "12px" }}>
          Free Express Shipping
        </Typography>

        <Box flexGrow={1} />

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
      </Stack>
    </Box>
  );
};

export default Header1;
