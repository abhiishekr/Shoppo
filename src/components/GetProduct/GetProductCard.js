import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetCall } from "../../Backend/API/APICalls";

function GetProductCard() {
  const navigateTo = useNavigate();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    GetProducts();
  }, []);

  const GetProducts = async () => {
    const a = await GetCall();

    await localStorage.setItem("products", JSON.stringify(a));
    const x = JSON.parse(await localStorage.getItem("products"));
    setProducts(x);
  };
  const GotoSingleProd = (id) => {
    return navigateTo("/singleProduct/", { state: { id: id } });
  };

  return (
    <div>
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
    </div>
  );
}

export default GetProductCard;
