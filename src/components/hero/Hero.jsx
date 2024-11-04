import { Box, Container } from "@mui/material";
import React from "react";

const Hero = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mt: 2.5,
      }}>
      <Box className="left">Slider</Box>

      <Box className="right">

        <Box className={"border"}>
          <img src="../../images/banner-17.jpg" alt="" />
        </Box>

        <Box className={"border"}>
          Img2
        </Box>


      </Box>
    </Container>
  );
};

export default Hero;
