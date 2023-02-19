import React from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { user } from "../Context/RegisterSlice";
// import "./styles/Register.scss";
import Navbar from "../Navbar/Navbar";

import RegisterCard from "./RegisterCard";

function Register() {
  
 

  return (
    <div>
      {/* <Navbar display={false} /> */}
      <RegisterCard/>
    </div>
  );
}

export default Register;
