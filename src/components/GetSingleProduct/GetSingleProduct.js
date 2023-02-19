import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./styles/GetSingleProduct.scss";
import Navbar from "../Navbar/Navbar";
import GetSingleProductCard from "./GetSingleProductCard";
import { GetSingleCall } from "../../Backend/API/APICalls";

function GetSingleProduct() {
  const { state } = useLocation();
  const { id } = state;
  const [data, setData] = useState({});

  useEffect(() => {
    async function getData(id) {
      const temp = await GetSingleCall(id);
      await localStorage.setItem("singleProduct", JSON.stringify(temp))
      const a =JSON.parse(await localStorage.getItem("singleProduct"));
      setData(a);
    }
    getData(id);
  }, []);




  return (
    <div>
      <Navbar display={false} />
      <GetSingleProductCard data={data}/>
    </div>
  );
}

export default GetSingleProduct;
