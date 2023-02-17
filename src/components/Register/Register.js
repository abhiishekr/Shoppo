import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { user } from "../Context/RegisterSlice";
import "./styles/Register.scss";
import Navbar from "../Navbar/Navbar";
import { Input,Button } from "antd";

function Register() {
  const { control, handleSubmit} = useForm();
  const dispatch = useDispatch();
  const navigateTo=useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    dispatch(
      user({
        email: data.email,
        password: data.password,
        isRegistered:true
      })
    );
    localStorage.setItem("user",JSON.stringify(data))
    if(localStorage)
    navigateTo("/")

  };

  return (
    <div>
      <Navbar display={false}/>
      <div className="form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Email</label>
          <Controller
            control={control}
            name="email"
            render={({ field }) => <Input {...field} type="email" className="email" placeholder="email" required={true}/>}
          />
          <label>Password</label>
          <Controller
            control={control}
            name="password"
            render={({ field }) => <Input {...field} type="password" className="password" placeholder="password" />}
          />
          <label>Confirm Password</label>
          <Controller
            control={control}
            name="confirmPassword"
            render={({ field }) => <Input {...field} type="password" className="password" placeholder="confirm password" />}
          />
          <Button className="registerbtn" type="primary" onClick={handleSubmit(onSubmit)}>
            Register
          </Button>
          <a className="login-link" href="/">Already have an account? Click here to login</a>
          
        </form>
      </div>
    </div>
  );
}

export default Register;
