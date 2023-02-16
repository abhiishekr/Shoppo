import React, { useState, useEffect } from "react";
import { GetSingleCall, DeleteCall } from "../../Backend/API/APICalls";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles/GetSingleProduct.scss";
import Navbar from "../Navbar/Navbar";

function GetSingleProduct() {
  const { state } = useLocation();

  const { id } = state;
  const [data, setData] = useState({});
  const [click, setClick] = useState(true);
  useEffect(() => {
    async function getData(id) {
      const temp = await GetSingleCall(id);
      console.log(temp)
      return setData(temp);
    }
    getData(id);
  }, []);


  const deleteHandler = async (id) => {
    let result = await DeleteCall(id);
    setClick(false);
    return console.log(result);
  };
  const navigateTo = useNavigate();
  function handleOnClick(id) {
   return navigateTo("/UpdateProduct", { state: { id: id } });
  }

  return (
    <div>
      <Navbar display={false} />
      {click ? (
        <div>
          <div className="parent">
            <div className="container">
              <div>
                <img src={data.image} className="img" alt="#" />
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
          </div>
        </div>
      ) : (
        <div className="deleted-item">
          Item Deleted
          <a className="redirect-link" href="/product">
            Click here to return to Product page
          </a>
        </div>
      )}
    </div>
  );
}

export default GetSingleProduct;
