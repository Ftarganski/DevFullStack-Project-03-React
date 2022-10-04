import React from "react";
import "./about.css";
import {
  Grid,
  List,
  ListItem,
  Typography,
  Stack,
  Button,
  IconButton,
  TextField,
} from "@mui/material";

const About = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{ padding: "40px", boxSizing: "border-box" }}
    >
      <Grid item xs={12} md={6} lg={8} sx={{ padding: "20px !important" }}>
        <Typography
          variant="h4"
          component="h4"
          style={{ padding: "0 0 25px 50px", boxSizing: "border-box" }}
        >
          Sobre
        </Typography>
        <div className="boxTotal">
          <Grid container spacing={2}>
            <Grid item>1111</Grid>
            <Grid item>2222</Grid>
          </Grid>
        </div>
      </Grid>

      <Grid item xs={12} md={6} lg={4} sx={{ padding: "20px !important" }}>
        <Typography
          variant="h4"
          component="h4"
          style={{ padding: "0 0 25px 50px", boxSizing: "border-box" }}
        >
          Bike Fit
        </Typography>
        <div className="boxTotal">
          <Grid container spacing={2}>
            <Grid item>1111</Grid>
            <Grid item>2222</Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
};

export default About;
