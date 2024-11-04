import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";

const Section = () => {
  const theme = useTheme();
  return (
    <Container
      sx={{ mt: 3, bgcolor: theme.palette.mode === "dark" ? "#000" : "#fff" }}>
      <Stack
        divider={
          useMediaQuery("(min-width:600px)") ? (
            <Divider orientation="vertical" flexItem />
          ) : null
        }
        sx={{ flexWrap: "wrap" }}
        direction={"row"}
        alignItems={"center"}>
        <MyIcon
          icon={<ElectricBoltIcon fontSize="large" />}
          title={"Fast Delivery"}
          subTitle={"Start from $10"}
        />
        <MyIcon
          icon={<WorkspacePremiumOutlinedIcon fontSize="large" />}
          title={"Money Guarantee"}
          subTitle={"7 Days Back"}
        />
        <MyIcon
          icon={<AccessAlarmOutlinedIcon fontSize="large" />}
          title={"365 Days"}
          subTitle={"For free return"}
        />
        <MyIcon
          icon={<CreditScoreOutlinedIcon fontSize="large" />}
          title={"Payment"}
          subTitle={"Secure system"}
        />
      </Stack>
    </Container>
  );
};

export default Section;

const MyIcon = ({ icon, title, subTitle }) => {
  const theme = useTheme();
  return (
    <Box
            className="border"
      sx={{
        justifyContent: useMediaQuery("(min-width:600px)") ? "center" : "left", 
        flexGrow: 1,
        width: 250,
        display: "flex",
        alignItems: "center",
        gap: 3,
        p: 1.6,
      }}>
      {icon}
      <Box>
        <Typography variant="body1">{title}</Typography>
        <Typography
          sx={{ fontWeight: 300, color: theme.palette.text.secondary }}>
          {subTitle}
        </Typography>
      </Box>
    </Box>
  );
};
