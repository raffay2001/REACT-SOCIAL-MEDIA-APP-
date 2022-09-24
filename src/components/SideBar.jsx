import { Box } from "@mui/material";
import React from "react";

const SideBar = () => {
  return (<Box sx={{background: 'orange', display: {xs: 'none', 'sm': 'block'}}} flex={1} p={2}>SideBar</Box>);
};

export default SideBar;
