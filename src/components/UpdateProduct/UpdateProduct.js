import React, { useEffect, useState } from "react";
import { GetSingleCall, PatchCall } from "../../Backend/API/APICalls";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

import UpdateProductCard from "./UpdateProductCard";


function UpdateProduct() {
  const { state } = useLocation();
  const { id } = state;
  const [updated,setUpdated]=useState(true)
  const [response,setResponse]=useState({});
  // const handleRegistration = (data) => {
  //     return updateData(data)
  // };
  // useEffect(()=>{
  //   getData(id)

  // },[])
  // async function getData(id){
  //   const res=await GetSingleCall(id);
  //   return setResponse(res)
  // }
  // async function updateData(data) {
  //   const temp = await PatchCall(id,data);
  //   setUpdated(false);
  //   return console.log(temp)

  // }
  // console.log(response)
  return (
    <div>
      {/* <Navbar display={false}/> */}
      
       <UpdateProductCard id={id}/>
        {updated ? <div></div>:<span className="item-updated">Item updated</span>}
      </div>
  );
}

export default UpdateProduct;
