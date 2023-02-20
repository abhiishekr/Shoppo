import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import GetSingleProductCard from "./GetSingleProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, states } from "../Context/UpdateSlice";

function GetSingleProduct() {
  const { state } = useLocation();
  const { id } = state;
  const navigateTo = useNavigate();
  const [user, setUser] = useState(false);
  const dispatch=useDispatch();
  const data=useSelector(states)
  // console.log(data)
  useEffect(() => {
    const temp=localStorage.getItem("login")
    if(temp){
    setUser(temp)}
    else {
      redirectLogin()
    }
    getData(id)
  }, []);

  function redirectLogin() {
    return navigateTo("/");
  }
  
  async function getData(id) {
    dispatch (fetchProduct(id));
  }

  return (
    <div>
    {data ? (<div>
      <Navbar home={true} />
      {user ? (
        <GetSingleProductCard data={data} />
      ) : (
        <div>{redirectLogin()}</div>
      )}
    </div>):(<div></div>)}
    </div>
  );
}

export default GetSingleProduct;
