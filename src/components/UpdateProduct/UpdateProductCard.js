import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { GetSingleCall } from "../../Backend/API/APICalls";
import "./styles/UpdateProduct.scss"


function UpdateProductCard(props) {
  const [title,setTitle]=useState("");
  const [price,setPrice]=useState("");
  const [description,setDescription]=useState("");
  const [image,setImage]=useState("");
  const [category,setCategory]=useState("");
function handleOnChange(e){
  return setTitle(e)
}
  
useEffect(() => {
  getData(props.id)

}, [])

const { register, handleSubmit } = useForm();
  const handleRegistration = (data) => {
    console.log(data)
  };
async function getData(id) {
  const res = await GetSingleCall(id);
  setTitle(res.title);
  setPrice(res.price);
  setDescription(res.description);
  setImage(res.image);
  setCategory(res.category);
}

  return (
    <div>
<div className="update-form">
        <form onSubmit={handleSubmit(handleRegistration)}>
          <label>Title</label>
          <input
            className="prod"
            type="text"
            defaultValue={title}
            onChange={(e)=>{handleOnChange(e)}}
            placeholder="title"
            required={true}
            {...register("title")}
          />
          <label>Price</label>
          <input
            className="prod"
            type="text"
            placeholder="price"
            defaultValue={price}
            required={true}
            {...register("price")}
          />
          <label>Description</label>
          <input
            className="prod"
            type="text"
            defaultValue={description}
            placeholder="description"
            required={true}
            {...register("description")}
          />
          <label>Image</label>
          <input
            className="prod"
            type="text"
            placeholder="image"
            defaultValue={image}
            required={true}
            {...register("image")}
          />
          <label>Category</label>
          <input
            className="prod"
            type="text"
            label="category"
            placeholder="category"
            defaultValue={category}
            required={true}
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

export default UpdateProductCard;
