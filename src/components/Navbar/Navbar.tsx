import React from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            E-Commerce App
          </Typography>
          <Box component="div" sx={{ flexGrow: 1, mx: 10 }}>
            <Button
              color="inherit"
              variant="text"
              onClick={() => navigate("/")}
            >
              Home
            </Button>
            <Button
              color="inherit"
              variant="text"
              onClick={() => navigate("/cart")}
            >
              Cart
            </Button>
          </Box>
          <Button color="inherit" onClick={() => navigate("/login")}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
