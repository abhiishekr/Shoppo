import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import "./styles/AddProduct.scss";
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
    <div className="form">

      <Form onFinish={handleRegistration} onFinishFailed={onFinishFailed}>
        <Form.Item
          label="Title"
          name="title"
          rules={[
            {
              required: true,
              message: "Please enter the Title",
            },

          ]}
        >
          <Input  className="prod-title"/>
        </Form.Item>

        <Form.Item
          label="Price"
          name="price"
          rules={[
            {
              required: true,
              message: "Please enter the Price",
            },
          ]}
        >
          <Input  className="prod-price"/>
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[
            {
              required: true,
              message: "Please enter the Description",
            },
          ]}
        >
          <Input  className="prod-description"/>
        </Form.Item>
        <Form.Item
          name="image"
          label="Image"
          rules={[
            {
              required: true,
              message: "Please Input Image URL",
            },
          ]}
        >
          <Input  className="prod-image"/>
        </Form.Item>
        <Form.Item
          name="category"
          label="Category"
          rules={[
            {
              required: true,
              message: "Please enter the Category",
            },
          ]}
        >
          <Input  className="prod-category"/>
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
