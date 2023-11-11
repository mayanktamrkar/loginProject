"use client";
import React, { useState } from "react";

import { Box, Card, Divider, Grid, TextField, Typography } from "@mui/material";

const Admin = () => {
  const [data, setData] = useState({
    url: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name
    const value = e.target.value
    
    console.log(e,name,value,'event');
    


    
    
  }
  return (
    <Box
      sx={{
        width: "auto",
        height: "85vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "500px",
          height: "300px",
          // background: "grey",
          p: 3,
        }}
      >
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <Divider component="div" role="v">
              <Typography variant="h6" textAlign="center">
                Add url with username and password
              </Typography>
            </Divider>
          </Grid>
          <Grid container border="1px solid grey" padding={3} borderRadius={3}>
            <Grid item xs={12}>
              <TextField
                value=""
                label="Enter the url"
                size="small"
                fullWidth
                margin="dense"
                name="url"
                onChange={onChangeHandler}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value=""
                label="Enter the email"
                size="small"
                fullWidth
                margin="dense"
                name="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value=""
                label="Enter the password"
                size="small"
                fullWidth
                name="password"
                margin="dense"
              />
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default Admin;
