import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Store from "../Store/Store";

import UpdateProductCard from "./UpdateProductCard";

function UpdateProduct() {
  const { state } = useLocation();
  const { id } = state;
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
      <Navbar home={true} />

      {user ? <UpdateProductCard id={id} /> : <div>{redirectLogin()}</div>}
    </div>
  );
}

export default UpdateProduct;
