import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import GetProduct from "./components/GetProduct/GetProduct";
import GetSingleProduct from "./components/GetSingleProduct/GetSingleProduct";
import AddProduct from "./components/AddProduct/AddProduct";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register"
import { Route, Routes } from "react-router-dom";
import UpdateProduct from "./components/UpdateProduct/UpdateProduct";



function App() {
  return (
    <>
    <Routes>
      <Route path="/" element = {<Login/>} />
      <Route path="/Product" element = {<GetProduct/>} />
      <Route path="/singleProduct/" element={<GetSingleProduct/>}/>
      <Route path="/Register" element = {<Register/>} />
      <Route path="/Nav" element={<Navbar/>}/>
      <Route path="/AddProduct" element={<AddProduct/>}/>
      <Route path="/UpdateProduct" element={<UpdateProduct/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
