import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Box,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import { Mail, Notifications } from "@mui/icons-material";
import React, { useState } from "react";

// making our own custom component with custom styling.
const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0px 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none", // for screen < 600px.
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex", // for screen >= 600px
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex", // for screen < 600px
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none", // for screen >= 600px
  },
}));

const Navbar = () => {
  const [isMenuOpen, SetIsMenuOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolBar>
        {/* For Screens >= 600px  */}
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          RAFFAY DEV
        </Typography>
        {/* For Screens < 600px  */}
        <CodeOutlinedIcon sx={{ display: { xs: "block", sm: "none" } }} />

        <Search>
          <InputBase placeholder="search...." />
        </Search>

        {/* For Screens >= 600px  */}
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail color="white" />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications color="white" />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=30&q=80"
            onClick={() => SetIsMenuOpen((prevState) => true)}
          />
        </Icons>
        {/* For Screens < 600px  */}
        <UserBox>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=30&q=80"
            onClick={() => SetIsMenuOpen((prevState) => true)}
          />
          <Typography variant="span">John Doe</Typography>
        </UserBox>
      </StyledToolBar>

      {/* Menu Component For Other Navigational Links  */}
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={isMenuOpen}
        onClose={() => SetIsMenuOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
