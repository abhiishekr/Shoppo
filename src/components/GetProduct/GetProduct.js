import React, { useState, useEffect } from "react";
import "./styles/products.scss";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Store from "../Store/Store";
import GetProductCard from "./GetProductCard";

function GetProduct() {
  const navigateTo = useNavigate();
  const [user, setUser] = useState(false);
  useEffect(() => {
    getUser();
  }, []);

  function getUser() {
    setUser(Store.getState().userLogin.userLogin.userLogin);
  }
  function redirectLogin() {
    return navigateTo("/");
  }

  return (
    <div>
      <Navbar display={true} />
      {user ? <GetProductCard /> : <div>{redirectLogin()}</div>}
    </div>
  );
}

export default GetProduct;
