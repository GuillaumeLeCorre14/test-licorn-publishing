import React from "react";
import { Menu } from "antd";
import Logo from "../../assets/logo/logo-licorn.svg";
import "./columnLeft.css";

function MenuMobile() {
  return (
    <div className="MenuMobile">
      <Menu mode="horizontal">
        <Menu.Item key="1">
          {" "}
          <img src={Logo} alt="logo-licorn" style={{ padding: "20px" }} />
        </Menu.Item>
        <Menu.Item key="2">LOREM</Menu.Item>
        <Menu.Item key="3">LOREM</Menu.Item>
        <Menu.Item key="4">LOREM</Menu.Item>
        <Menu.Item key="5">LOREM</Menu.Item>
        <Menu.Item key="6">LOREM</Menu.Item>
        <Menu.Item key="7">LOREM</Menu.Item>
      </Menu>
    </div>
  );
}

export default MenuMobile;
