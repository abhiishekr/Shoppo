import React, { useState, useEffect } from "react";
import { GetSingleCall, DeleteCall } from "../../Backend/API/APICalls";
import { useLocation } from "react-router-dom";
import "./styles/GetSingleProduct.scss";

function GetSingleProduct() {
  const { state } = useLocation();
  

  const { id } = state;
  const [data, setData] = useState({});
  useEffect(() => {
    async function getData(id) {
      const temp = await GetSingleCall(id);
      return setData(temp);
    }
    getData(id);
  }, []);
  console.log(data);

  const deleteHandler = async (id) => {
    let result = await DeleteCall(id);
    return console.log(result);
  };
  function handleOnClick(id) {
    console.log("handle")
  }

  return (
    <div className="parent">
      {
        <div className="container">
          <div>
            <img src={data.image} className="img" alt="#"/>
          </div>
          <div className="title">{data.title}</div>
          <div className="price">${data.price}</div>
          <div className="desc">{data.description}</div>
          <div>
            <button
              className="deletebtn"
              onClick={() => {
                deleteHandler(data.id);
              }}
            >
              Delete
            </button>
            <button
              className="updatebtn"
              onClick={() => {
                handleOnClick(data.id);
              }}
            >
              Update
            </button>{" "}
          </div>
        </div>
      }
    </div>
  );
}

export default GetSingleProduct;
