import React from "react";
import "./cart.css";
import { productsCart } from "./productsCart";
import { Link } from "react-router-dom";
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
import DeleteIcon from "@mui/icons-material/Delete";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const Cart = () => {
  const totals = [
    [299, null],
    [299, 199],
    [299, null],
    [299, 199],
  ];

  const total = totals.reduce((previousValue, currentValue) => {
    return currentValue[0] + previousValue;
  }, 0);

  const totalPromo = totals.reduce((previousValue, currentValue) => {
    if (currentValue[1]) {
      return currentValue[0] - currentValue[1] + previousValue;
    }
    return 0 + previousValue;
  }, 0);

  return (
    <Grid
      container
      spacing={2}
      sx={{ padding: "40px", boxSizing: "border-box" }}
    >
      <Grid item xs={12} md={6} lg={8} sx={{ padding: "20px !important" }}>
        <div
          style={{
            boxSizing: "border-box",
            backgroundColor: "#fff",
            borderRadius: "15px",
            boxShadow: "4px 4px 12px -6px rgba(0,0,0,0.6)",
          }}
        >
          <List sx={{ width: "100%" }}>
            {Object.keys(productsCart).map((id) => {
              return (
                <ListItem
                  sx={{ alignItems: "center" }}
                  secondaryAction={
                    <IconButton
                      sx={{ right: "16px" }}
                      edge="end"
                      aria-label="delete"
                    >
                      <DeleteIcon />
                    </IconButton>
                  }
                  alignItems="flex-start"
                >
                  <Stack sx={{ flexGrow: 1 }} className="stackImage">
                                    
                    <span >
                    <img  src={productsCart[id].images[0]} alt=""/>
                      
                    </span>
                  </Stack>
                  <Stack sx={{ flexGrow: 2 }} direction="row">
                    <Stack
                      direction="column"
                      sx={{
                        justifyContent: "center",
                        paddingLeft: "5px",
                        boxSizing: "border-box",
                        flexGrow: 2,
                      }}
                    >
                      <Typography
                        sx={{
                          display: "inline",
                          fontWeight: "600",
                          fontSize: "1.2em",
                        }}
                        component="h6"
                        variant="h6"
                      >
                        {productsCart[id].name}
                      </Typography>
                      <Typography
                        sx={{
                          display: "inline",
                          fontSize: "0.9em",
                          color: "#666666",
                        }}
                        componente="p"
                        variant="p"
                      >
                        {productsCart[id].description.substr(0, 75)}...
                      </Typography>
                    </Stack>
                    <Stack
                      direction="row"
                      sx={{
                        alignItems: "center",
                        flexGrow: 1,
                        paddingLeft: "15px",
                        paddingRigth: "15px",
                        boxSizing: "border-box",
                      }}
                    >
                      {productsCart[id].promo_price ? (
                        <Typography
                          sx={{
                            display: "inline",
                            color: "red",
                            fontWeight: "700",
                            fontSize: "16px",
                            paddingLeft: "5px",
                            paddingRigth: "5px",
                            boxSizing: "border-box",
                          }}
                          component="p"
                          variant="p"
                        >
                          {productsCart[id].promo_price.toLocaleString(
                            "pt-BR",
                            { style: "currency", currency: "BRL" }
                          )}
                        </Typography>
                      ) : (
                        <span style={{ minWidth: "74px" }} />
                      )}

                      <Typography
                        sx={{
                          display: "inline",
                          paddingLeft: "5px",
                          paddiiRight: "5px",
                          boxSizing: "border-box",
                          textDecoration: productsCart[id].promo_price
                            ? "line-through"
                            : "none",
                          fondSize: productsCart[id].promo_price
                            ? "12px"
                            : "14px",
                        }}
                        component="p"
                        variant="p"
                      >
                        {productsCart[id].price.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </Typography>
                    </Stack>

                    <Stack
                      className="stackQuantity"
                      direction="row"
                      sx={{
                        alignItems: "center",
                        flexGrow: 1,
                      }}
                    >
                      <TextField size="small" type="number" />
                    </Stack>
                  </Stack>
                </ListItem>
              );
            })}
          </List>
        </div>
      </Grid>

      <Grid item xs={12} md={12} lg={4} sx={{ padding: "20px!import" }}>
        <div
          className="boxTotal"
          style={{
            boxSizing: "border-box",
            backgroundColor: "#fff",
            borderRadius: "15px",
            boxShadow: "4px 4px 12px -6px rgba(0,0,0,0.6)",
          }}
        >
          <ul
            style={{
              margin: 0,
              listStyle: "none",
              paddingLeft: 0,
            }}
            className="listTotal"
          >
            <li>
              <span>Total: </span>
              <span>
                {total.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </li>

            <li>
              <span>Desconto: </span>
              <span>
                {totalPromo.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </li>

            <li>
              <span>Valor Final: </span>
              <span>
                {(total - totalPromo).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </li>
          </ul>
          <Link to="/checkout">
            <Button style={{backgroundColor:"#000"}} variant="contained" fullWidth  startIcon={<AttachMoneyIcon/>}>
              Confirmar Pagamento
            </Button>
          </Link>
        </div>
      </Grid>
    </Grid>
  );
};

export default Cart;
