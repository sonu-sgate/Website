import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar  position="sticky" style={{ backgroundColor: "#28282AFF" }}>
      <Toolbar>
        {/* Logo and Name */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ flexGrow: 1, textDecoration: "none", color: "inherit" }}
        >
          Blogger
        </Typography>

        {/* About Us Link */}
        <Button component={Link} to="/about" color="inherit">
          About Us
        </Button>

        {/* Menu for small screens */}
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          onClick={handleMenuClick}
          sx={{ display: { xs: "block", sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Sign Up and Sign In Buttons */}
        <Button
          sx={{ "@media (max-width:600px)": { display: "none" } }}
          component={Link}
          to="/signup"
          color="inherit"
        >
          Sign Up
        </Button>
        <Button
          sx={{ "@media (max-width:600px)": { display: "none" } }}
          component={Link}
          to="/signin"
          color="inherit"
        >
          Sign In
        </Button>

        {/* Responsive Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <MenuItem component={Link} to="/about" onClick={handleMenuClose}>
            About Us
          </MenuItem>
          <MenuItem component={Link} to="/signup" onClick={handleMenuClose}>
            Sign Up
          </MenuItem>
          <MenuItem component={Link} to="/signin" onClick={handleMenuClose}>
            Sign In
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
