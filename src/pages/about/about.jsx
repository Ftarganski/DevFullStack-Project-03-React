import React from "react";
import "./about.css";
import { equipeData } from "./equipe";
import InfoIcon from "@mui/icons-material/Info";
import {
  Grid,
  Typography,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Modal,
  Stack,
} from "@mui/material";
import Strava from "../../assets/img/strava-orange.png";
import { Link } from "react-router-dom";
import bikefit from "../../assets/img/bikefit.jpg";

const About = () => {
  const [open, setOpen] = React.useState(false);
  const [atletaList, setAtleta] = React.useState(false);
  const handleOpen = (newAtleta) => {
    setOpen(true);
    setAtleta(newAtleta);
  };
  const handleClose = () => setOpen(false);

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
            <Grid item>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              voluptatem et laboriosam in deserunt, eius aliquid fugiat,
              repellat repellendus doloribus vero maxime voluptates odit, quasi
              corporis porro odio amet unde.
            </Grid>
            <Grid item>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
              error ipsam ipsum itaque aliquid rem sapiente cupiditate sint
              doloremque, nisi, quidem provident voluptates consequatur ex iste,
              nostrum debitis tenetur! Laborum.
            </Grid>
            <Grid item>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              voluptatem et laboriosam in deserunt, eius aliquid fugiat,
              repellat repellendus doloribus vero maxime voluptates odit, quasi
              corporis porro odio amet unde.
            </Grid>
            <Grid item>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
              error ipsam ipsum itaque aliquid rem sapiente cupiditate sint
              doloremque, nisi, quidem provident voluptates consequatur ex iste,
              nostrum debitis tenetur! Laborum.
            </Grid>
            <Grid item>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              voluptatem et laboriosam in deserunt, eius aliquid fugiat,
              repellat repellendus doloribus vero maxime voluptates odit, quasi
              corporis porro odio amet unde.
            </Grid>
            <Grid item>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
              error ipsam ipsum itaque aliquid rem sapiente cupiditate sint
              doloremque, nisi, quidem provident voluptates consequatur ex iste,
              nostrum debitis tenetur! Laborum.
            </Grid>
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

        <Stack spacing={2} className="stackImage">
          <img src={bikefit} alt="Logo" />
        </Stack>

          <Typography
            spacing={2}
            variant="p"
            component="p"
            sx={{ paddingTop: "16px" }}
          >
            Bike Fit é o processo de ajustar uma bicicleta para um ciclista para
            otimizar seu conforto, desempenho e eficiência. Os ciclistas
            geralmente sofrem lesões por uso excessivo, como paralisia do
            ciclista, costas do ciclista e dor anterior no joelho . e isso
            geralmente se deve a um ciclo configurado incorretamente.
          </Typography>
          <Typography variant="p" component="p" sx={{ paddingTop: "16px" }}>
            O bike fit visa prevenir lesões, aumentar a eficiência, conforto e
            melhorar o desempenho de todos os ciclistas. O ajuste da bicicleta é
            para qualquer pessoa que anda de bicicleta, principalmente se
            ocorreu uma lesão por uso excessivo, para maximizar sua diversão e
            desempenho.
          </Typography>



        </div>

      </Grid>

      <Grid item xs={12} md={12} lg={12} sx={{ padding: "20px !important" }}>
        <Typography
          variant="h4"
          component="h4"
          style={{ padding: "0 0 25px 50px", boxSizing: "border-box" }}
        >
          Nossos Atletas
        </Typography>

        <div className="boxTotal">
          <ImageList
            sx={{ width: "100%", height: "100%" }}
            className="imageList"
            gap={20}
          >
            {equipeData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  style={{ filter: "drop-shadow(4px 4px 6px #222)" }}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.atleta}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.atleta}
                  subtitle={`Equipe: ${item.equipe}`}
                  actionIcon={
                    <IconButton
                      onClick={() => handleOpen(item)}
                      sx={{ color: "rgba(255, 255, 255, 0.75)" }}
                      aria-label={`info about ${item.atleta}`}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
            ))}
          </ImageList>

          {/* MODAL */}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
          >
            <Grid container spacing={2} className="modal">
              <Grid item xs={12} md={5} lg={5} className="imageModalBox">
                <img
                  className="imageModal"
                  src={`${atletaList?.img}`}
                  srcSet={`${atletaList?.img}`}
                  alt={atletaList.atleta}
                  loading="lazy"
                />
              </Grid>

              <Grid item xs={12} md={7} lg={7} className="modalText">
                <Typography
                  fullwidth
                  id="modal-modal-title"
                  variant="h4"
                  component="h4"
                >
                  {atletaList?.atleta}
                </Typography>

                <Typography variant="h6" component="h6">
                  Equipe: {atletaList?.equipe}
                </Typography>

                <Grid container className="country">
                  <Typography variant="p" component="p">
                    Nacionalidade: {atletaList?.pais}
                  </Typography>

                  <div className="flagSpan">
                    <img
                      className="flag"
                      src={`${atletaList?.flag}`}
                      srcSet={`${atletaList?.flag}`}
                      alt={atletaList.flag}
                      loading="lazy"
                    />
                  </div>
                </Grid>

                <Typography variant="p" component="p">
                  Vitórias: {atletaList?.vitorias}
                </Typography>

                <Typography variant="p" component="p">
                  Podiums: {atletaList?.podiums}
                </Typography>

                <Typography variant="h6" component="h6">
                  Perfil Strava:{" "}
                  <IconButton edge="end" className="button">
                    <Link
                      onClick={() =>
                        window.open(`${atletaList?.profile}`, "_blank")
                      }
                    >
                      <div>
                        <img
                          src={Strava}
                          alt=""
                          style={{
                            height: "1em",
                          }}
                        />
                      </div>
                    </Link>
                  </IconButton>
                </Typography>
              </Grid>
            </Grid>
          </Modal>
        </div>
      </Grid>
    </Grid>
  );
};

export default About;
