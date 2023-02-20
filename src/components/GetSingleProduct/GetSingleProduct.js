import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import GetSingleProductCard from "./GetSingleProductCard";
import { GetSingleCall } from "../../Backend/API/APICalls";
import Store from "../Store/Store";

function GetSingleProduct() {
  const { state } = useLocation();
  const { id } = state;
  const [data, setData] = useState({});
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

  async function getData(id) {
    const temp = await GetSingleCall(id);
    await localStorage.setItem("singleProduct", JSON.stringify(temp));
    const a = JSON.parse(await localStorage.getItem("singleProduct"));
    setData(a);
  }
  useEffect(() => {
    if (Store.getState().updated.updated.updated === true) {
      setData(JSON.parse(localStorage.getItem("singleProduct")));
    } else {
      getData(id);
    }
  }, []);

  return (
    <div>
      <Navbar home={true} />
      {user ? (
        <GetSingleProductCard data={data} />
      ) : (
        <div>{redirectLogin()}</div>
      )}
    </div>
  );
}

export default GetSingleProduct;
