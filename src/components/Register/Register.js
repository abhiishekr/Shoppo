import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { user } from "../Context/RegisterSlice";
import "./styles/Register.scss";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

function Register() {
  const { register, handleSubmit } = useForm();
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
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="email"
            {...register("email",{ required: true })}
          />
          <label>Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="password"
            {...register("password",{ required: true })}
          />
          <label>Confirm Password</label>
          <input
            className="form-control"
            type="password"
            name="confirmPassword"
            placeholder="ConfirmPassword"
            {...register("confirmPassword",{ required: true })}
          />
          <button className="loginbtn" type="submit">
            Register
          </button>
          <a className="login-link" href="/">Already have an account? Click here to login</a>
          
        </form>
        <Footer/>
      </div>
    </div>
  );
}

export default Register;
