import React, { useContext } from "react";
import { ColorModeContext } from "../../theme";
import { Box, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const options = [
  "AR",
  "EN",

]


const Header1 = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  const handleToggle = () => {
    const newMode = theme.palette.mode === "dark" ? "light" : "dark";
    localStorage.setItem("mode", newMode);
    colorMode.toggleColorMode();
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
              <LightModeOutlined fontSize="small" />
            ) : (
              <DarkModeOutlined fontSize="small" />
            )}
          </IconButton>
        </div>

        <List
          component="nav"
          aria-label="Device settings"
          sx={{ bgcolor: "background.paper" }}>
          <ListItemButton
            id="lock-button"
            aria-haspopup="listbox"
            aria-controls="lock-menu"
            aria-label="when device is locked"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClickListItem}>
            <ListItemText
              secondary={options[selectedIndex]}
            />
          </ListItemButton>
        </List>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "lock-button",
            role: "listbox",
          }}>
          {options.map((option, index) => (
            <MenuItem
              key={option}
              disabled={index === 0}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}>
              {option}
            </MenuItem>
          ))}
        </Menu>

        <TwitterIcon
          sx={{
            fontSize: "16px",
            color: "#FFF",
          }}
        />
        <FacebookIcon
          sx={{
            fontSize: "16px",
            mx: 1,
            color: "#FFF",
          }}
        />
        <InstagramIcon
          sx={{
            fontSize: "16px",
            color: "#FFF",
          }}
        />
      </Stack>
    </Box>
  );
};

export default Header1;
