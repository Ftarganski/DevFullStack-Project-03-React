import React from "react";
import { useEffect } from "react";
import { userIsLoggedIn } from "../../services/auth/auth";

const Checkout = ({ history }) => {
  useEffect(() => {
    userIsLoggedIn();
  });
  return <h1>Finalizar Compra</h1>;
};

export default Checkout;
