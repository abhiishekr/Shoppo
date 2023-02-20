import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import GetSingleProductCard from "./GetSingleProductCard";
import { GetSingleCall } from "../../Backend/API/APICalls";
import Store from "../Store/Store";

import { useDispatch } from "react-redux";

function GetSingleProduct() {
  const { state } = useLocation();
  const { id } = state;
  const [data, setData] = useState({});
  const [user, setUser] = useState(false);
  const navigateTo=useNavigate();
  const dispatch=useDispatch();

  // console.log(data)
  async function getData(id) {
    const temp = await GetSingleCall(id);
    await localStorage.setItem("singleProduct", JSON.stringify(temp));
    const a = JSON.parse(await localStorage.getItem("singleProduct"));
    setData(a);
  }
  useEffect(() => {
    const temp=localStorage.getItem("login")
    if(temp){
    setUser(temp)}
    else {
      redirectLogin()
    }
    if (Store.getState().updated.updated.updated === true) {
      setData(JSON.parse(localStorage.getItem("singleProduct")))
    } else {
      getData(id);
    }
  }, []);

  function redirectLogin() {
    return navigateTo("/");
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
