import * as React from "react";
import Box from "@mui/material/Box"
import AppBar from "../components/AppBar";
import Toolbar from "../components/Toolbar";
import { Button } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
const rightLink = {
  fontSize: 16,
  color: "common.white",
  ml: 3,
};

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ flex: 1 }} />
          <Link to="/" style={{textDecoration:'none',color:'white'}}>Blogging Website</Link>
          <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            <Button sx={{ margin: 2 }} color="secondary" variant="contained">
              Sign In
            </Button>
            <Button sx={{ margin: 2 }} color="secondary" variant="contained">
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
