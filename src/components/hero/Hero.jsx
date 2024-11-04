import { ArrowForward } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Slider.css";

const mySlider = [
  { text: "MEN", link: "./images/banner-15.jpg" },
  { text: "WOMAN", link: "./images/banner-25.jpg" },
];

const Hero = () => {
  const theme = useTheme();
  return (
    <Container
      sx={{
        gap: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mt: 2.5,
      }}>
      <Swiper
        pagination={{ dynamicBullets: true }}
        modules={[Pagination]}
        className="mySwiper">
        {mySlider.map((item) => {
          return (
            <SwiperSlide key={item.link} className="parent-slider">
              <img src={item.link} alt="" />

              <Box
                sx={{
                  [theme.breakpoints.up("sm")]: {
                    position: "absolute",
                    textAlign: "left",
                    left: "10%",
                  },
                  [theme.breakpoints.down("sm")]: {
                    pt: 4,
                    pb: 6,
                  },
                }}>
                <Typography sx={{ color: "#222" }} variant="h5">
                  LIFESTYLE COLLECTION
                </Typography>

                <Typography
                  variant="h4"
                  sx={{ color: "#222", fontWeight: "600" }}>
                  {item.text}
                </Typography>

                <Stack
                  sx={{
                    justifyContent: { xs: "center", sm: "left" },
                  }}
                  direction={"row"}
                  alignItems={"center"}>
                  <Typography sx={{ color: "#333" }} variant="h5">
                    {" "}
                    SALE UP TO
                  </Typography>
                  <Typography variant="h4" color="#D23F57">
                    30% OFF
                  </Typography>
                </Stack>
                <Typography
                  sx={{
                    color: "#000",
                    fontWeight: 300,
                    my: 1,
                  }}
                  variant="body1">
                  Get Free Shipping on orders over $99.00
                </Typography>

                <Button
                  sx={{
                    px: 5,
                    py: 1,
                    mt: 2,
                    backgroundColor: "#222",
                    boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                    color: "#fff",
                    borderRadius: "1px",
                    "&:hover": {
                      bgcolor: "#151515",
                      boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                    },
                  }}
                  variant="contained">
                  shop now
                </Button>
              </Box>
            </SwiperSlide>
          );
        })}

      </Swiper>

      <Box sx={{ display: { xs: "none", md: "block", minWidth: "26.6%" } }}>
        <Box sx={{ position: "relative" }}>
          <img width={"100%"} src="./images/banner-17.jpg" alt="" />

          <Stack
            sx={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              ml: 3,
            }}>
            <Typography
              variant="caption"
              sx={{ fontSize: "18px", color: "#283445" }}>
              NEW ARRIVALS
            </Typography>

            <Typography
              variant="h6"
              sx={{ lineHeight: "16px", color: "#283445", mt: 1 }}>
              SUMMER
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: "#2B3445",
              }}>
              SALE 20% OFF
            </Typography>

            <Link
              sx={{
                color: "#2B3445",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                transition: "0.2s",

                "&:hover": {
                  color: "#D23F57",
                },
              }}
              href="#"
              underline="none">
              shop now
              <ArrowForward sx={{ fontSize: "13px" }} />
            </Link>
          </Stack>
        </Box>

        <Box sx={{ position: "relative" }}>
          <img width={"100%"} src="./images/banner-16.jpg" alt="" />

          <Stack
            sx={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              ml: 3,
            }}>
            <Typography
              variant="caption"
              sx={{ fontSize: "18px", color: "#283445" }}>
              GAMING 4K
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: "#2B3445",
                lineHeight: "16px",
                mt: 1,
              }}>
              DESKTOPS &
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: "#2B3445",
              }}>
              LAPTOPS
            </Typography>

            <Link
              sx={{
                color: "#2B3445",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                transition: "0.2s",

                "&:hover": {
                  color: "#D23F57",
                },
              }}
              href="#"
              underline="none">
              shop now
              <ArrowForward sx={{ fontSize: "13px" }} />
            </Link>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default Hero;
