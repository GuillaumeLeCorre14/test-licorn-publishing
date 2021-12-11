import React from "react";
import { useState } from "react";
import logo from "../../assets/logo/logo-licorn.svg";
import IconScrollTop from "../../assets/icons/IconScrollTop.svg";
import { notification, Form, Input, Button } from "antd";
import { FacebookFilled, TwitterOutlined, InstagramOutlined } from "@ant-design/icons";
import "./newsletter.css";

function Newsletter() {
  const [mail, setMail] = useState();
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisible);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

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
          placeholder="EMAIL ADDRESS"
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
        <FacebookFilled className="facebook" style={{ margin: "5px" }} />
      </a>
      <a style={{ color: "white" }} href="https://www.twitter.com">
        <TwitterOutlined className="twitter" style={{ margin: "5px" }} />
      </a>
      <a style={{ color: "white" }} href="https://www.instagram.com">
        <InstagramOutlined className="instagram" style={{ margin: "5px" }} />
      </a>
      <br />
      <br />
      <br />
    </>
  );
}

export default Newsletter;
