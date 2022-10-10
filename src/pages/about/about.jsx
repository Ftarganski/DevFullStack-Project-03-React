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
          <Grid item>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptatem et laboriosam in deserunt, eius aliquid fugiat, repellat repellendus doloribus vero maxime voluptates odit, quasi corporis porro odio amet unde.</Grid>
            <Grid item>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed error ipsam ipsum itaque aliquid rem sapiente cupiditate sint doloremque, nisi, quidem provident voluptates consequatur ex iste, nostrum debitis tenetur! Laborum.</Grid>
            <Grid item>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptatem et laboriosam in deserunt, eius aliquid fugiat, repellat repellendus doloribus vero maxime voluptates odit, quasi corporis porro odio amet unde.</Grid>
            <Grid item>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed error ipsam ipsum itaque aliquid rem sapiente cupiditate sint doloremque, nisi, quidem provident voluptates consequatur ex iste, nostrum debitis tenetur! Laborum.</Grid>
            <Grid item>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptatem et laboriosam in deserunt, eius aliquid fugiat, repellat repellendus doloribus vero maxime voluptates odit, quasi corporis porro odio amet unde.</Grid>
            <Grid item>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed error ipsam ipsum itaque aliquid rem sapiente cupiditate sint doloremque, nisi, quidem provident voluptates consequatur ex iste, nostrum debitis tenetur! Laborum.</Grid>
           
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
            <Grid item>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptatem et laboriosam in deserunt, eius aliquid fugiat, repellat repellendus doloribus vero maxime voluptates odit, quasi corporis porro odio amet unde.</Grid>
            <Grid item>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed error ipsam ipsum itaque aliquid rem sapiente cupiditate sint doloremque, nisi, quidem provident voluptates consequatur ex iste, nostrum debitis tenetur! Laborum.</Grid>
            <Grid item>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed error ipsam ipsum itaque aliquid rem sapiente cupiditate sint doloremque, nisi, quidem provident voluptates consequatur ex iste, nostrum debitis tenetur! Laborum.</Grid>
            <Grid item>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed error ipsam ipsum itaque aliquid rem sapiente cupiditate sint doloremque, nisi, quidem provident voluptates consequatur ex iste, nostrum debitis tenetur! Laborum.</Grid>
            <Grid item>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed error ipsam ipsum itaque aliquid rem sapiente cupiditate sint doloremque, nisi, quidem provident voluptates consequatur ex iste, nostrum debitis tenetur! Laborum.</Grid>
           </Grid>
        </div>
      </Grid>
    </Grid>
  );
};

export default About;
