import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Store from "../Store/Store";
import "./styles/UpdateProduct.scss";
import { useLocation } from "react-router-dom";
import { PatchCall } from "../../Backend/API/APICalls";


function UpdateProductCard(props) {
  const { state } = useLocation();
  const { id } = state;
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [update, showUpdate] = useState(false);

  useEffect(() => {
    if (Store.getState().updated === true) {
      console.log("first");
    }
  }, []);
  async function updateFunc(data) {
    const temp = await PatchCall(id, data);
    return updateFunc(temp);
  }

  const { register, handleSubmit } = useForm();
  const handleRegistration = (data) => {
    updateFunc(data);
    formJson(title, price, description, image, category);
    // dispatch(
    //   updated({
    //     updated: true,
    //   })
    // );
  };

  function formJson(title, price, description, image, category) {
    const items = {
      title: title,
      price: price,
      description: description,
      image: image,
      category: category,
    };
    localStorage.setItem("singleProduct", JSON.stringify(items));
    showUpdate(true);
  }

  return (
    <div>
      <div className="update-form">
        <form onSubmit={handleSubmit(handleRegistration)}>
          <label>Title</label>
          <input
            className="prod"
            type="text"
            defaultValue={props.data.title}
            placeholder="title"
            required={true}
            {...register("title", {
              onChange: (e) => {
                setTitle(e.target.value);
              },
            })}
          />

          <label>Price</label>
          <input
            className="prod"
            type="text"
            placeholder="price"
            defaultValue={price}
            required={true}
            {...register("price", {
              onChange: (e) => {
                setPrice(e.target.value);
              },
            })}
          />
          <label>Description</label>
          <input
            className="prod"
            type="text"
            defaultValue={description}
            placeholder="description"
            required={true}
            {...register("description", {
              onChange: (e) => {
                setDescription(e.target.value);
              },
            })}
          />
          <label>Image</label>
          <input
            className="prod"
            type="text"
            placeholder="image"
            defaultValue={image}
            required={true}
            {...register("image", {
              onChange: (e) => {
                setImage(e.target.value);
              },
            })}
          />
          <label>Category</label>
          <input
            className="prod"
            type="text"
            label="category"
            placeholder="category"
            defaultValue={category}
            required={true}
            {...register("category", {
              onChange: (e) => {
                setCategory(e.target.value);
              },
            })}
          />
          <button className="submitbtn" type="submit">
            Submit
          </button>
        </form>
        {update ? <div className="item-updated">Item Updated!</div> : " "}
      </div>
    </div>
  );
}

export default UpdateProductCard;
