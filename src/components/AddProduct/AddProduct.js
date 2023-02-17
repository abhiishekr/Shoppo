import React, { useState } from "react";
import { PostCall } from "../../Backend/API/APICalls";
import { useForm } from "react-hook-form";
import "./styles/AddProduct.scss";
import {Button} from "antd"


function AddProduct() {
  const [data, setData] = useState({});
  const { register, handleSubmit } = useForm();
  
  const handleRegistration = (data) => {
    setData(data);
    getData(data);
  };

  async function getData(data) {
    const temp = await PostCall(data);
    return setData(temp);
    
  }
  console.log(data)

  return (
    <div>
      <h1>Add Product Page</h1>
      <div className="form">
        <form onSubmit={handleSubmit(handleRegistration)}>
          <input className="input-box"
            type="text"
            label="product-name"
            placeholder="title"
            {...register("title")}
          />
          <input className="input-box"
            type="text"
            label="price"
            placeholder="price"
            {...register("price")}
          />
          <input className="input-box"
            type="text"
            label="Description"
            placeholder="description"
            {...register("description")}
          />
          <input className="input-box"
            type="text"
            label="image"
            placeholder="image"
            {...register("image")}
          />
          <input className="input-box"
            type="text"
            label="category"
            placeholder="category"
            {...register("category")}
          />
          <Button className="submitbtn" type="primary" onClick={handleSubmit(handleRegistration)}>Submit</Button>
        </form>
      </div>

    </div>
  );
}

export default AddProduct;
