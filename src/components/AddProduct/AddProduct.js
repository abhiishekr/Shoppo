import React from "react";
import AddProductCard from "./AddProductCard";
import Navbar from "../Navbar/Navbar";



function AddProduct() {
  
  return (
    <div>
      <Navbar display={false} />
      <AddProductCard/>
    </div>
  );
}

export default AddProduct;
