import React, { useState } from "react";
import "../../assets/css/auth.css";
import cover from "../../assets/img/login.jpg";
import logo from "../../assets/img/logo_preto.png";
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
    <Grid container spacing={2} className="authTotal">
      <Grid item className="leftSide" xs={0} md={8} lg={8}>
        <Stack spacing={2} className="stackImage">
          <img src={cover} alt="Logo" />
        </Stack>
      </Grid>

      <Grid item className="rigthSide" xs={12} md={4} lg={4}>
        <Stack spacing={2} className="formRigth">
        <span style={{ width: "120px"}}>
          <Link to="/">
          <img src={logo} style={{ width: "120px" }} alt="Logo" />
          </Link>
          </span>
          <h1>Partiu pedal?</h1>
          <Grid container>
            <Grid item xs={12} sx={{ marginBottom: "16px" }}>
              <TextField
              style={{backgroundColor:"white", borderRadius: "5px"}}
                fullWidth="true"
                label="E-mail"
                type="email"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sx={{ marginBottom: "16px" }}>
              <FormControl sx={{ width: "100%" }}>
                <InputLabel>Senha</InputLabel>
                <OutlinedInput
                style={{backgroundColor:"white", borderRadius: "5px"}}
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

            <Grid item xs={12} sx={{ marginBottom: "16px" }}>
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
