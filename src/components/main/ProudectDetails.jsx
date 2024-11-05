import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

const ProudectDetails = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 3, flexDirection: {xs: "column", sm: "row"} }}>

      <Box sx={{display: "flex"}}>
        <img width={300} src="./images/1.jpg" alt="" />
      </Box>

      <Box sx={{textAlign: {xs: "center", sm: "left"}}}>
        <Typography variant="h5">fgfgf</Typography>

        <Typography>$12.5</Typography>

        <Typography variant="body1">
          loregdrkolk,ol,kol l,l ,ohbhrriywruib{" "}
        </Typography>

        <Stack sx={{justifyContent: {xs: "center", sm: "left"}}} gap={1} direction={"row"} my={2}>
          {["./images/2.jpg", "./images/1.jpg", "./images/banner-15.jpg"].map(
            (item) => {
              return (
                <img
                  style={{ borderRadius: 3 }}
                  height={100}
                  width={90}
                  key={item}
                  src={item}
                  alt=""
                />
              );
            }
          )}
        </Stack>

        <Button
          sx={{ mb: { xs: 1, sm: 0, }, textTransform: "capitalize" }}
          variant="contained">
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Buy now
        </Button>
      </Box>

    </Box>
  );
};

export default ProudectDetails;
