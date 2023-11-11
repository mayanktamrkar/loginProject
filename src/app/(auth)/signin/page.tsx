"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { Alert, Box } from "@mui/material";
import { useRouter } from "next/navigation";
import axios from "axios";
import { kStringMaxLength } from "buffer";
import { useSnackbar } from "notistack";
import "../../page.module.css";

const StyledContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const StyledPaper = styled(Paper)({
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "400px",
  height: "250px",
  borderRadius: "10px",
});

const StyledTextField = styled(TextField)({
  margin: "0.5rem",
  width: "100%",
});

const StyledButton = styled(Button)({
  background:
    "linear-gradient( 109.6deg, rgba(156,252,248,1) 11.2%, rgba(110,123,251,1) 91.1% );",
  margin: "1rem 0",
});

const SignupPage = () => {
  const { enqueueSnackbar } = useSnackbar();

  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {
    try {
      const response = await axios.post("/api/auth/signin", user);
      const res = response.status;
      if (res === 200) {
        enqueueSnackbar("Login Successfully!", { variant: "success" });
        router.push("/dashboard");
      }
      // toast.success("Login success");
      // router.push("/profile");
    } catch (error: any) {
      console.log("Login failed", error.message);
      enqueueSnackbar("wrong email and password!", { variant: "warning" });

      // toast.error(error.message);
    } finally {
      // setLoading(false);
    }
  };

  return (
    <div className="background-image">
      <Box sx={{ display: "flex", alignItems: "center", height: "90vh" }}>
        <StyledContainer>
          <StyledPaper elevation={5}>
            <Typography variant="h5" gutterBottom>
              Sign Up
            </Typography>
            <StyledTextField
              label="Email"
              variant="outlined"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <StyledTextField
              label="Password"
              type="password"
              variant="outlined"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />

            <StyledButton variant="contained" color="primary" onClick={onLogin}>
              Sign Up
            </StyledButton>
          </StyledPaper>
        </StyledContainer>
      </Box>
    </div>
  );
};

export default SignupPage;
