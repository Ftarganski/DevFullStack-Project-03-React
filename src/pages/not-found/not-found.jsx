import React from "react";
import "./not-found.css";
import { Grid, Typography } from "@mui/material";
import ImageNotFound from "../../assets/img/not-found.png";


const NotFound = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        padding: "40px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Grid item xs={12} md={12} lg={12} sx={{ padding: "20px !important", textAlign: "center" }}>
        <Typography variant="h1" component="h2">
          Oooops!!!!
        </Typography>
      </Grid>

      <Grid item xs={12} md={12} lg={12} sx={{ padding: "20px !important", textAlign: "center"  }}>
        <spam style={{width: "50%"}}>
          <img
            src={ImageNotFound}
            alt=""
            style={{
              width: "50%",
            }}
          />
        </spam>
      </Grid>

      <Grid item xs={12} md={12} lg={12} sx={{ padding: "20px !important", textAlign: "center"  }}>
        <Typography variant="h3" component="h2">
          Você pedalou para fora da trilha!
        </Typography>
      </Grid>
    </Grid>
  );
};

export default NotFound;
