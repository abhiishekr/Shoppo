import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import GetSingleProductCard from "./GetSingleProductCard";
import { GetSingleCall } from "../../Backend/API/APICalls";
import Store from "../Store/Store";

function GetSingleProduct() {
  const { state } = useLocation();
  const { id } = state;
  const [data, setData] = useState({});

  

  async function getData(id) {
    const temp = await GetSingleCall(id);
    await localStorage.setItem("singleProduct", JSON.stringify(temp));
    const a = JSON.parse(await localStorage.getItem("singleProduct"));
    setData(a);
  }
  useEffect(() => {
    if (Store.getState().updated.updated.updated === true) {
      setData(JSON.parse(localStorage.getItem("singleProduct")))
    } else {
      getData(id);
    }
  }, []);

  return (
    <div>
      <Navbar display={false} />
      <GetSingleProductCard data={data} />
    </div>
  );
}

export default GetSingleProduct;
