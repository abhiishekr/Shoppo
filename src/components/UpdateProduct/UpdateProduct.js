import React, { useEffect, useState } from "react";
import { GetSingleCall, PatchCall } from "../../Backend/API/APICalls";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


function UpdateProduct() {
  const { state } = useLocation();
  const { id } = state;
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
    console.log(temp);
  }
  return (
    <div>
      <Navbar display={false}/>
       <div className="form">
        <form onSubmit={handleSubmit(handleRegistration)}>
          <label>Product Name</label>
          <input
            className="prod-name"
            type="text"
            placeholder={response.title}
            {...register("title")}
          />
          <label>Product Price</label>
          <input
            className="prod-price"
            type="text"
            placeholder={response.price}
            {...register("price")}
          />
          <label>Product Description</label>
          <input
            className="prod-description"
            type="text"
            placeholder={response.description}
            {...register("description")}
          />
          <label>Product Image</label>
          <input
            className="prod-image"
            type="text"
            placeholder={response.image}
            {...register("image")}
          />
          <label>Product Category</label>
          <input
            className="prod-category"
            type="text"
            placeholder={response.category}
            {...register("category")}
          />
          <button className="submitbtn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateProduct;
