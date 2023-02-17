import React, { useEffect, useState } from "react";
import { GetSingleCall, PatchCall } from "../../Backend/API/APICalls";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./styles/UpdateProduct.scss"
import {Button} from "antd"


function UpdateProduct() {
  const { state } = useLocation();
  const { id } = state;
  const [updated,setUpdated]=useState(true)
  const [response,setResponse]=useState({});
  const { register, handleSubmit } = useForm();
  const handleRegistration = (data) => {
      return updateData(data)
  };
  useEffect(()=>{
    getData(id)

  },[])
  async function getData(id){
    const res=await GetSingleCall(id);
    return setResponse(res)
  }
  async function updateData(data) {
    const temp = await PatchCall(id,data);
    setUpdated(false);
    return console.log(temp)

    console.log(temp);
  }
  return (
    <div>
      <Navbar display={false}/>
      
       <div className="form">
        <form onSubmit={handleSubmit(handleRegistration)}>
          <label className="label">Product Name</label>
          <input
            className="input-box"
            type="text"
            placeholder={response.title}
            {...register("title")}
          />
          <label className="label">Product Price</label>
          <input
            className="input-box"
            type="text"
            placeholder={response.price}
            {...register("price")}
          />
          <label className="label">Product Description</label>
          <input
            className="input-box"
            type="text"
            placeholder={response.description}
            {...register("description")}
          />
          <label className="label">Product Image</label>
          <input
            className="input-box"
            type="text"
            placeholder={response.image}
            {...register("image")}
          />
          <label className="label">Product Category</label>
          <input
            className="input-box"
            type="text"
            placeholder={response.category}
            {...register("category")}
          />
          <Button className="submitbtn" type="primary" onClick={handleSubmit(handleRegistration)}>
            Submit
          </Button>
        </form>
        {updated ? <div></div>:<span className="item-updated">Item updated</span>}
      </div>
    </div>
  );
}

export default UpdateProduct;
