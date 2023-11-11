"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Button, Icon, useTheme } from "@mui/material";
import Sidebar from "../sidebar/page";
import axios from "axios";
import { useRouter } from "next/navigation";
import { styled } from "@mui/system";

// const theme=useTheme()

const Header = () => {
  const router = useRouter();
  const handleLogout = async () => {
    console.log("sdf");
    const response = await axios.get("/api/auth/logout");
    const res = response.status;
    if (res === 200) {
      router.push("/");
    }

    // Perform logout actions here, such as clearing tokens or session
    // After logout, you can redirect the user to the login page
    // Example: window.location.href = '/login';
  };
  return (
    <AppBar
      position="static"
      sx={{
        background:
          "linear-gradient( 109.6deg, rgba(156,252,248,1) 11.2%, rgba(110,123,251,1) 91.1% );",
      }}
    >
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu"></IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Sidebar />
          My App
        </Typography>
        <Button color="inherit" variant="outlined" onClick={handleLogout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
