import React, { useState } from "react";
import { PatchCall } from "../../Backend/API/APICalls";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";

function UpdateProduct() {
  const { state } = useLocation();
  const { id } = state;
  const [data, setData] = useState({});
  const { register, handleSubmit } = useForm();
  const handleRegistration = (data) => {
      setData(data);
      getData(data);
  };

  async function getData(data) {
    const temp = await PatchCall(id, data);
    return setData(temp);
  }
  console.log(id);

  return (
    <div>
      <div className="form">
        <form onSubmit={handleSubmit(handleRegistration)}>
          <input
            className="prod-name"
            type="text"
            label="product-name"
            placeholder="title"
            {...register("title")}
          />
          <input
            className="prod-price"
            type="text"
            label="price"
            placeholder="price"
            {...register("price")}
          />
          <input
            className="prod-description"
            type="text"
            label="Description"
            placeholder="description"
            {...register("description")}
          />
          <input
            className="prod-image"
            type="text"
            label="image"
            placeholder="image"
            {...register("image")}
          />
          <input
            className="prod-category"
            type="text"
            label="category"
            placeholder="category"
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
