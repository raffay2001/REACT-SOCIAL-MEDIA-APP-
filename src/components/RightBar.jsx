import { Box } from "@mui/material";
import React from "react";

const RightBar = () => {
  return (
    <Box sx={{ display: { xs: "none", sm: "block" } }} flex={3} p={2}>
      <Box position="fixed">
        Hello
      </Box>
    </Box>
  );
};

export default RightBar;
