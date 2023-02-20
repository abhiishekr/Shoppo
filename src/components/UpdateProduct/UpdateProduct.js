import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { states } from "../Context/UpdateSlice";
import Navbar from "../Navbar/Navbar";
import UpdateProductCard from "./UpdateProductCard";

function UpdateProduct() {
  const { state } = useLocation();
  const { id } = state;
  const navigateTo = useNavigate();
  const data=useSelector(states)
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
      <Navbar home={true} />

      {user ? <UpdateProductCard data={data.id} /> : <div>{redirectLogin()}</div>}
    </div>
  );
}

export default UpdateProduct;
