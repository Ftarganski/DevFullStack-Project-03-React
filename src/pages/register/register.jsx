import React, { useState } from "react";
import "../../assets/css/auth.css";
import cover from "../../assets/img/login.jpg";
import logo from "../../assets/img/logo.jpg";
import { Link } from "react-router-dom";
import {
  Grid,
  TextField,
  Button,
  Stack,
  InputAdornment,
  OutlinedInput,
  IconButton,
  FormControl,
  InputLabel,
} from "@mui/material";
import PedalBikeIcon from "@mui/icons-material/PedalBike";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import { Visibility } from "@mui/icons-material";
import { VisibilityOff } from "@mui/icons-material";

const Register = () => {
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
          <img src={logo} style={{ width: "120px" }} alt="Logo" />
          <h1>Bora pedalar conosco!</h1>
          <Grid container>
            <Grid item xs={12} sx={{ marginBottom: "16px" }}>
              <TextField
                fullWidth="true"
                label="Usuário"
                type="text"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sx={{ marginBottom: "16px" }}>
              <TextField
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
                  color="primary"
                  fulWidth="true"
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
            <Grid item xs={12} sx={{ margimBottom: "16px" }}>
              <TextField
                color="primary"
                fullWidth="true"
                label="Confirmar"
                type={visibilityToggle ? "text" : "password"}
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sx={{ marginTop: "16px"}}>
              <Button
                fullWidth="true"
                variant="contained"
                endIcon={<PedalBikeIcon />}
              >
                Cadastrar
              </Button>
            </Grid>

            <Grid item xs={12} sx={{ marginTop: "16px", marginBottom: "16px"}}>
              <Link to="/login">
                <Button
                  fullWidth="true"
                  variant="contained"
                  endIcon={<DirectionsBikeIcon />}
                >
                  Entrar
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Register;
