import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DeleteCall } from "../../Backend/API/APICalls";
import "./styles/GetSingleProduct.scss";

function GetSingleProductCard(props) {
  const [click, setClick] = useState(true);
  const navigateTo = useNavigate();
  const deleteHandler = async (id) => {
    let result = await DeleteCall(id);
    setClick(false);
    return console.log(result);
  };

  function handleOnClick(id) {
    return navigateTo("/UpdateProduct", { state: { id: id } });
  }
  return (
    <div>
      {click ? (
        <div>
          <div className="parent">
            <div className="container">
              <div>
                <img src={props.data.image} className="img" alt="#" />
              </div>
              <div className="title">{props.data.title}</div>
              <div className="price">${props.data.price}</div>
              <div className="desc">{props.data.description}</div>
              <div>
                <button
                  className="deletebtn"
                  onClick={() => {
                    deleteHandler(props.data.id);
                  }}
                >
                  Delete
                </button>
                <button
                  className="updatebtn"
                  onClick={() => {
                    handleOnClick(props.data.id);
                  }}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="deleted-item">
          Item Deleted. &nbsp;
          <div
            className="redirect"
            onClick={() => {
              return navigateTo("/Product");
            }}
          >
            Click here to return to Product page.
          </div>
        </div>
      )}
    </div>
  );
}

export default GetSingleProductCard;
