import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import "./styles/Login.scss";

function LoginCard() {
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

      localStorage.setItem("login",JSON.stringify(data));
      navigateTo("/Product");
    } else {
      setValidation(false);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <div className="form">
        <Form onFinish={onSubmit} onFinishFailed={onFinishFailed}>
          <Form.Item
            label="E-mail"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your E-mail!",
              },
              {
                type: "email",
                message: "Please enter the correct E-mail",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          <Button className="registerbtn" type="primary" onClick={() => redirectRegister()}>
            Register
          </Button>
        </Form>
        {validation ? (
          <span></span>
        ) : (
          <span className="validation">Invalid email or password</span>
        )}
      </div>
    </div>
  );
}

export default LoginCard;
