import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./styles/Login.scss";
import Footer from "../Footer/Footer";

function Login() {
  const { register, handleSubmit } = useForm();
  const [validation, setValidation] = useState(true);
  const navigateTo = useNavigate();
  function redirectRegister() {
    navigateTo("/Register");
  }

  const onSubmit = async (data) => {
    const temp = JSON.parse(localStorage.getItem("user"));
    if (temp === null) {
      setValidation(false);
    } else if (data.email === temp.email && data.password === temp.password) {
      setValidation(true);
      navigateTo("/Product");
    } else {
      setValidation(false);
      
    }
  };

  return (
    <div>
      <Navbar display={false}/>
      <div className="form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Email</label>
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="email"
            {...register("email")}
          />
          <label>Password</label>
          <input
            className="form-control"
            type="password"
            placeholder="password"
            name="password"
            {...register("password")}
          />

          <button className="loginbtn" type="submit">
            Login
          </button>
          <button className="loginbtn" onClick={() => redirectRegister()}>Register</button>
          </form>
          {validation ? <span></span> : <span className="validation">Invalid email or password</span>}
      </div>
      <Footer/>
    </div>
  );
}

export default Login;
