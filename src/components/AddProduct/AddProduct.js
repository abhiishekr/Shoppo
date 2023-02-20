import React, { useEffect, useState } from "react";
import AddProductCard from "./AddProductCard";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import Store from "../Store/Store";

function AddProduct() {
  const navigateTo = useNavigate();
  const [user, setUser] = useState(false);
  useEffect(() => {
    const temp=localStorage.getItem("login")
    if(temp){
    setUser(temp)}
    else {
      redirectLogin()
    }
  }, []);

  function redirectLogin() {
    return navigateTo("/");
  }

  return (
    <div>
      <Navbar display={false} home={true} />
      {user ? <AddProductCard /> : <div>{redirectLogin()}</div>}
    </div>
  );
}

export default AddProduct;
