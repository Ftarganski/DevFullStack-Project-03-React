import "./App.css";
import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Strava from "./assets/img/strava.png";
import Logo from "./assets/img/logo-branco.png";

const Login = lazy(() => import("./pages/login/login"));
const Register = lazy(() => import("./pages/register/register"));
const Catalog = lazy(() => import("./pages/catalog/catalog"));
const Cart = lazy(() => import("./pages/cart/cart"));
const Checkout = lazy(() => import("./pages/checkout/checkout"));
const Product = lazy(() => import("./pages/product/product"));
const NotFound = lazy(() => import("./pages/not-found/not-found"));

function App() {
  useEffect(() => {}, []);

  return (
    <Router>
      <AppBar position={"static"}>
        <Toolbar
          style={{
            justifyContent: "space-between",
            backgroundColor: "#000",
          }}
        >
          <div
            style={{
              height: "125px",
              width: "250px",
            }}
          >
            <Link to="/">
              <span
                style={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={Logo}
                  alt=""
                  style={{
                    height: "75%",
                  }}
                />
              </span>
            </Link>
          </div>
          <Typography variant="h4" component="h2">
            <Link to="/catalog">Pedal Floripa MTB</Link>
          </Typography>
          <div
            style={{
              width: "250px",
            }}
          >
            <IconButton edge="end">
              <Link to="/cart">
                <ShoppingCartIcon
                  style={{
                    color: "#fff",
                  }}
                />
              </Link>
            </IconButton>
            <IconButton
              edge="end"
              style={{
                marginLeft: 16,
              }}
            >
              <Link to="/login">
                <LogoutIcon
                  style={{
                    color: "#fff",
                  }}
                />
              </Link>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <Suspense fallback={"Carregando..."}>
        <Routes>
          <Route exact path="/" element={<Catalog />} />
          <Route exact path="/catalog" element={<Catalog />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <Grid
        container
        spacing={2}
        sx={{ height: "150px", backgroundColor: "#000", marginTop: "30px" }}
      >
       
       <Grid
          item
          xs={12}
          md={3}
          lg={3}
          sx={{
            color: "#fff",
            padding: "0 !important",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ul className="menuBottom">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>Sobre</li>
            </Link>
            <Link to="/register">
              <li>Cadastro</li>
            </Link>
            <Link to="/login">
              <li>Login</li>
            </Link>
          </ul>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          sx={{
            color: "#fff",
            padding: "0 !important",
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          
            <IconButton edge="end">
              <Link to="/cart">
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

            <IconButton edge="end">
              <Link to="/cart">
                <InstagramIcon
                  style={{
                    color: "#fff",
                  }}
                />
              </Link>
            </IconButton>

            <IconButton edge="end">
              <Link to="/cart">
                <YouTubeIcon
                  style={{
                    color: "#fff",
                  }}
                />
              </Link>
            </IconButton>

            <IconButton edge="end">
              <Link to="/cart">
                <WhatsAppIcon
                  style={{
                    color: "#fff",
                  }}
                />
              </Link>
            </IconButton>
         
        </Grid>

   

        <Grid
          item

          className="logoBottom"
          xs={12}
          md={3}
          lg={3}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 !important",
          }}
        >
          <span
            style={{
              height: "100px",
            }}
          >
            <Link to="/">
              <img
                src={Logo}
                alt=""
                style={{
                  height: "100%",
                }}
              />
            </Link>
          </span>
        </Grid>
      </Grid>
    </Router>
  );
}

export default App;
