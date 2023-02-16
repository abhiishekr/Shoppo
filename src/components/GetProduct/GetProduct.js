import React, { useState, useEffect } from "react";
import "./styles/products.scss";
import { GetCall } from "../../Backend/API/APICalls";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";



function GetProduct() {
  useEffect(() => {
    GetProducts();
    getUser();
  }, []);
  
  const [products, setProducts] = useState([]);
  const navigateTo = useNavigate();

  const GetProducts = async () => {
    const products = await GetCall();
    setProducts(products);
  };
  

  const [user, setUser] = useState(false);
  function getUser() {
    if (localStorage.user) {
      setUser(true);
    } else {
      setUser(false);
    }
  }
  function redirectLogin() {
    return navigateTo("/");
  }

  const GotoSingleProd = (id) => {
    return navigateTo("/singleProduct/",{ state: { id: id }});
  };
  return (
    
    <div>
     <Navbar display={true}/>
      {user ? (
        <div className="Product-container">
          {products.map((product) => {
            return (
              <div
                onClick={() => {
                  GotoSingleProd(product.id);
                }}
                key={product.id}
                className="cart"
              >
                <div>
                  <img src={product.image} width="250px" alt="#" />
                </div>
                <div className="product-description">
                  <p className="product-title">{product.title}</p>
                  <p className="product-price">{`$${product.price}`}</p>
                  <p className="product-des">
                    {`Description: ${product.description}`}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          You Are not logged in,{" "}
          <a
            onClick={() => {
              redirectLogin();
            }}
          >
            Click here to LogIn
          </a>
        </div>
      )}
    </div>
  );
}

export default GetProduct;
