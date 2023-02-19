import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { PostCall } from "../../Backend/API/APICalls";

function AddProductCard() {
  const [data, setData] = useState({});

  const handleRegistration = (data) => {
    setData(data);
    getData(data);
  };

  async function getData(data) {
    const temp = await PostCall(data);
    return setData(temp);
  }
  console.log(data);
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Form onFinish={handleRegistration} onFinishFailed={onFinishFailed}>
        <Form.Item
          label="Title"
          name="title"
          rules={[
            {
              required: true,
              message: "Please input your E-mail!",
            },
            {
              type: "text",
              message: "Please enter the correct E-mail",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Price"
          name="price"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[
            {
              required: true,
              message: "Passwords don't match !",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="image"
          label="Image"
          rules={[
            {
              required: true,
              message: "Passwords don't match !",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="category"
          label="Category"
          rules={[
            {
              required: true,
              message: "Passwords don't match !",
            },
          ]}
        >
          <Input />
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
    </div>
  );
}

export default AddProductCard;
