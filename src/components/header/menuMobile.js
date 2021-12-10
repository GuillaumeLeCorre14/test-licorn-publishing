import React from "react";
import { Menu, Row, Col, Button } from "antd";
import Logo from "../../assets/logo/logo-licorn.svg";
import IconFlower from "../../assets/icons/IconFlower.svg";
import IconHeart from "../../assets/icons/IconHeart.svg";
import IconFile from "../../assets/icons/IconFile.svg";
import "./columnLeft.css";
import { FacebookFilled, TwitterOutlined, InstagramOutlined } from "@ant-design/icons";

function MenuMobile() {
  return (
    <div className="MenuMobile">
      <Menu mode="horizontal">
        <Menu.Item key="1">LOREM</Menu.Item>
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
