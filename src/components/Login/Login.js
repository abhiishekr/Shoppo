import React from "react";
import Navbar from "../Navbar/Navbar";
import LoginCard from "./LoginCard";

function Login() {
  

  return (
    <div>
      <Navbar display={false} />
     <LoginCard/>
    </div>
  );
}

export default Login;
