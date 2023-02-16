import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import GetProduct from "./components/GetProduct/GetProduct";
import GetSingleProduct from "./components/GetSingleProduct/GetSingleProduct";
import AddProduct from "./components/AddProduct/AddProduct";
import UpdateProduct from "./components/UpdateProduct/UpdateProduct";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register"
import { Route, Routes } from "react-router-dom";



function App() {
  return (
    <>
    <Routes>
      <Route path="/" exact element = {<Login/>} />
      <Route path="/Product" exact element = {<GetProduct/>} />
      <Route path="/singleProduct/" exact element={<GetSingleProduct/>}/>
      <Route path="/Register" exact element = {<Register/>} />
      <Route path="/Nav" exact element={<Navbar/>}/>
      <Route path="/AddProduct" exact element={<AddProduct/>}/>
    </Routes>
    </>
  );
}

export default App;
