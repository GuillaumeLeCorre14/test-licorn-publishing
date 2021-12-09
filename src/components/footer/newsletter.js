import React from "react";
import logo from "../../assets/logo/logo-licorn.svg";
import { Form, Input } from "antd";
import { FacebookFilled, TwitterOutlined, InstagramOutlined } from "@ant-design/icons";

function Newsletter() {
  return (
    <>
      <img src={logo} alt="logo-licorn" style={{ backgroundColor: "#162D8C" }} />
      <br />
      <br />
      <br />
      <h1 style={{ fontSize: "53px", color: "white", margin: "0px" }}>Newsletter</h1>
      <Form>
        <Input
          placeholder="MAIL ADDRESS"
          style={{
            margin: "0px",
            color: "rgba(255,255,255, 0.8)",
            padding: "10px",
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
            borderBottom: "1px solid rgba(255,255,255, 0.3)",
            backgroundColor: "#162D8C",
            fontFamily: "Sen",
            textAlign: "center",
            height: "15px",
            width: "300px",
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        ></Input>
      </Form>
      <br></br>
      <FacebookFilled style={{ margin: "5px" }} />
      <TwitterOutlined style={{ margin: "5px" }} />
      <InstagramOutlined style={{ margin: "5px" }} />
      <br />
      <br />
      <br />
    </>
  );
}

export default Newsletter;
