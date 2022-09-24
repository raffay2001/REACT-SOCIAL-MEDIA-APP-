import { Box } from "@mui/material";
import React from "react";

const RightBar = () => {
  return <Box sx={{background: 'lightpink', display: {xs: 'none', sm: 'block'}}} flex={3} p={2}>RightBar</Box>;
};

export default RightBar;
