import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./styles/Login.scss";
import { Input } from "antd";

function Login() {
  const { register, handleSubmit, control } = useForm();
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
      <Navbar display={false} />
      <div className="form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Email</label>
          <Controller
            control={control}
            className="form-control"
            type="text"
            name="email"
            placeholder="email"
            {...register("email")}
            
            render={({ field }) => <Input {...field} />}
          />
          <label>Password</label>
          <Controller
            className="form-control"
            type="text"
            control={control}
            placeholder="password"
            name="password"
            {...register("password")}
            render={({ field }) => <Input {...field} />}
          />
          
          <button className="loginbtn" type="primary" onClick={()=>{onSubmit()}}>
            Login
          </button>
          <button className="loginbtn" onClick={() => redirectRegister()}>
            Register
          </button>
        </form>
        {validation ? (
          <span></span>
        ) : (
          <span className="validation">Invalid email or password</span>
        )}
      </div>
    </div>
  );
}

export default Login;
