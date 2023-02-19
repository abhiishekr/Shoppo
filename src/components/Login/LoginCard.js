import React, { useState } from 'react'
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Input,Button } from "antd";
import { useDispatch } from "react-redux";
import { userLogin } from "../Context/LoginSlice";
import "./styles/Login.scss";

function LoginCard() {
    const { handleSubmit, control } = useForm();
  const [validation, setValidation] = useState(true);
  const navigateTo = useNavigate();
  const dispatch=useDispatch();
  function redirectRegister() {
    navigateTo("/Register");
  }


  const onSubmit = async (data) => {
    const temp = JSON.parse(localStorage.getItem("user"));
    if (temp === null) {
      setValidation(false);
    } else if (data.email === temp.email && data.password === temp.password) {
      setValidation(true);
      dispatch(
        userLogin({
          email:data.email,
          userLogin:true
        })
      )
      navigateTo("/Product");
    } else {
      setValidation(false);
    }

  };
  return (
    <div>
      <div className="form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Email</label>
          <Controller
            control={control}
            name="email"
            render={({ field }) => <Input {...field} type="text"  className="email" placeholder="email" />}
          />
          <label>Password</label>
          <Controller
            control={control}
            name="password"
            render={({ field }) => <Input {...field} type="password"  className="password" placeholder="password" />}
          />
          
          <Button className="loginbtn" type="primary" onClick={handleSubmit(onSubmit)}>
            Login
          </Button>
          <Button className="loginbtn" type="primary" onClick={() => redirectRegister()}>
            Register
          </Button>
        </form>
        {validation ? (
          <span></span>
        ) : (
          <span className="validation">Invalid email or password</span>
        )}
      </div>
    </div>
  )
}

export default LoginCard