import { KeyboardArrowUp } from "@mui/icons-material";
import { Fab, useScrollTrigger, Zoom } from "@mui/material";
import React from "react";

// const trigger = useScrollTrigger({
//     threshold: 100,
//   })

//   const scrollToTop = useCallback(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" })
//   }, [])

const ScrollToTop = () => {
  return (
    <Zoom in={useScrollTrigger({threshold: 100})}>
      <Fab
        onClick={()=> {
          window.scrollTo(0, 0)
        }}
        size="small"
        sx={{ position: "fixed", bottom: 33, right: 33 }}
        color="primary"
        aria-label="add">
        <KeyboardArrowUp fontSize="medium" />
      </Fab>
    </Zoom>
  );
};

export default ScrollToTop;
