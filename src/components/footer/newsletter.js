import React from "react";
import { useState } from "react";
import logo from "../../assets/logo/logo-licorn.svg";
import { notification, Form, Input } from "antd";
import { FacebookFilled, TwitterOutlined, InstagramOutlined } from "@ant-design/icons";

function Newsletter() {
  const [mail, setMail] = useState();

  const openNotificationWithIcon = (type, mail) => {
    notification[type]({
      message: "Merci ! ",
      placement: "bottomRight",
      description: "Vous recevrez désormais notre actualité à cette adresse mail : " + mail,
      duration: 3,
    });
  };
  const onFinish = () => {
    openNotificationWithIcon("success", mail);
  };

  const onChangeMail = (e) => {
    setMail(e.target.value);
  };
  return (
    <>
      <img src={logo} alt="logo-licorn" style={{ backgroundColor: "#162D8C" }} />
      <br />
      <br />
      <br />
      <h1 style={{ fontSize: "53px", color: "white", margin: "0px" }}>Newsletter</h1>
      <Form onFinish={onFinish}>
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
          onChange={onChangeMail}
        ></Input>
      </Form>
      <br></br>
      <a style={{ color: "white" }} href="https://www.facebook.com">
        <FacebookFilled style={{ margin: "5px" }} />
      </a>
      <a style={{ color: "white" }} href="https://www.twitter.com">
        <TwitterOutlined style={{ margin: "5px" }} />
      </a>
      <a style={{ color: "white" }} href="https://www.instagram.com">
        <InstagramOutlined style={{ margin: "5px" }} />
      </a>
      <br />
      <br />
      <br />
    </>
  );
}

export default Newsletter;
