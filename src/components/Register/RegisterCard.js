import React from "react";
import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { user } from "../Context/RegisterSlice";
import { useNavigate } from "react-router-dom";

function RegisterCard() {
  const dispatch = useDispatch();
  const navigateTo=useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
    dispatch(
      user({
        email: values.email,
        password: values.password,
        isRegistered: true,
      })
    )
    localStorage.setItem("user",JSON.stringify(values))
    navigateTo('/')

  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
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
        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Passwords don't match !",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <a className="login-link" href="/">
        Already have an account? Click here to login
      </a>
    </div>
  );
}

export default RegisterCard;
