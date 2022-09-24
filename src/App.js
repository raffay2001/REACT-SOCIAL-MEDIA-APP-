import React from "react";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import { Box, Container, Stack } from "@mui/material";

const App = () => {
  return (
    <Box>
      {/* navbar  */}
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <SideBar />
        <Feed />
        <RightBar />
      </Stack>
    </Box>
  );
};

export default App;
