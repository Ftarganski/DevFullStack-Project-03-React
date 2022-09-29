import React, { useState } from "react";
import "../../assets/css/auth.css";
import cover from "../../assets/img/login.jpg";
import logo from "../../assets/img/logo.jpg";
import {
  Grid,
  Stack,
  TextField,
  Button,
  InputAdornment,
  OutlinedInput,
  IconButton,
  FormControl,
  InputLabel,
} from "@mui/material";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import PedalBikeIcon from "@mui/icons-material/PedalBike";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";

const Login = () => {
  const [visibilityToggle, setVisibilityToggle] = useState(false);

  const toggleVisibility = () => {
    setVisibilityToggle(!visibilityToggle);
  };

  return (
    <Grid container spacing={2} style={{ height: "100vh" }}>
      <Grid classname="leftSide" item sx={0} xs={0} md={7} lg={8}>
        <Stack
          spacing={2}
          style={{
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={cover} style={{ width: "100%" }} alt="Logo" />
        </Stack>
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <Stack
          spacing={2}
          style={{
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: 16,
            paddindRigth: 16,
            boxSizing: "borde-box",
          }}
        >
          <img
            src={logo}
            style={{
              width: "150px",
            }}
            alt="Logo"
          />

          <h1>Partiu pedal?</h1>
          <Grid container>
            <Grid
              item
              xs={12}
              sx={{
                marginBottom: "16px",
              }}
            >
              <TextField
                fullWidth="true"
                label="E-mail"
                type="email"
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                marginBottom: "16px",
              }}
            >
              <FormControl sx={{ width: "100%" }}>
                <InputLabel>Senha</InputLabel>
                <OutlinedInput
                  color="primary"
                  fullWidth="true"
                  label="Senha"
                  type={visibilityToggle ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Exibir"
                        onClick={toggleVisibility}
                      >
                        {visibilityToggle ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  variant="outlined"
                />
              </FormControl>
            </Grid>

            <Grid
              item
              xs={12}
              sx={{
                marginBottom: "16px",
              }}
            >
              <Button
                fullWidth="true"
                variant="contained"
                endIcon={<DirectionsBikeIcon />}
              >
                Entrar
              </Button>
            </Grid>

            <Grid item xs={12} sx={{ marginBottom: "16px" }}>
              <Link to="/register">
                <Button
                  fullWidth="true"
                  variant="contained"
                  endIcon={<PedalBikeIcon />}
                >
                  Cadastrar
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Login;
