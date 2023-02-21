import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import GetProductCard from "./GetProductCard";
import { updated } from "../Context/UpdateSlice";
import { useDispatch } from "react-redux";

function GetProduct() {
  const navigateTo = useNavigate();
  const [user, setUser] = useState(false);
  const dispatch=useDispatch();

  useEffect(() => {
    dispatch(
      updated({
        updated:false,
      })
    )
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
      <Navbar display={true} />
      {user ? <GetProductCard /> : <div>{redirectLogin()}</div>}
    </div>
  );
}

export default GetProduct;
