import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetCall } from "../../Backend/API/APICalls";
import { Card, Col, Row } from "antd";
import "./styles/products.scss";

function GetProductCard() {
  const navigateTo = useNavigate();
  const { Meta } = Card;
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
              className="card"
            >
              <Card
                className="product-image"
                style={{
                  height: 750,
                }}
                cover={<img alt="#" src={product.image} />}
              >
                <Meta
                  className="product-details"
                  title={product.title}
                  description={`$${product.price} `}
                />
                <Meta
                  className="product-category"
                  description={`${product.category}`}
                />
              </Card>
            </div>
            // <div
            //   onClick={() => {
            //     GotoSingleProd(product.id);
            //   }}
            //   key={product.id}
            //   className="cart"
            // >
            //   <div>
            //     <img src={product.image} width="250px" alt="#" />
            //   </div>
            //   <div className="product-description">
            //     <p className="product-title">{product.title}</p>
            //     <p className="product-price">{`$${product.price}`}</p>
            //     <p className="product-des">
            //       {`Description: ${product.description}`}
            //     </p>
            //   </div>
            // </div>
          );
        })}
      </div>
    </div>
  );
}

export default GetProductCard;
