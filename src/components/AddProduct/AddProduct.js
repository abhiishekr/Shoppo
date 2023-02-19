import React, { useState } from "react";
import { PostCall } from "../../Backend/API/APICalls";
import { useForm } from "react-hook-form";
import "./styles/AddProduct.scss";
import AddProductCard from "./AddProductCard";



function AddProduct() {
  
  return (
    <div>
      <AddProductCard/>
    </div>
  );
}

export default AddProduct;
