import React from "react";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import { Box, Container, Stack } from "@mui/material";
import Add from "./components/Add";

const App = () => {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <SideBar />
        <Feed />
        <RightBar />
      </Stack>
      <Add />
    </Box>
  );
};

export default App;
