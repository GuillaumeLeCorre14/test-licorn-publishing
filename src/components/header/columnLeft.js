import React from "react";
import { Row, Col, Button } from "antd";
import Logo from "../../assets/logo/logo-licorn.svg";
import IconFlower from "../../assets/icons/IconFlower.svg";
import IconHeart from "../../assets/icons/IconHeart.svg";
import IconFile from "../../assets/icons/IconFile.svg";
import "./columnLeft.css";
import { FacebookFilled, TwitterOutlined, InstagramOutlined } from "@ant-design/icons";

function ColumnLeft() {
  return (
    <div className="ColumnLeft">
      <Row className="MenuLeft" style={{ backgroundColor: "#162d8c" }}>
        <Col offset={0} span={24}>
          {/* Menu => 4 colonnes */}
          <Row style={{ fontSize: "14px", padding: "0% 0% 0% 0% ", textAlign: "center" }}>
            <Col className="tab" offset={0} span={6}>
              <img src={Logo} alt="logo-licorn" />
            </Col>
            <Col className="tab" offset={0} span={6}>
              <img src={IconFlower} alt="logo-licorn" />
              <br />
              LOREM
              <br />
              <div style={{ marginTop: "-8%", color: "red", fontSize: "30px" }}>•</div>
            </Col>
            <Col className="tab" offset={0} span={6}>
              <img src={IconHeart} alt="logo-licorn" />
              <br />
              LOREM
            </Col>
            <Col className="tab" offset={0} span={6}>
              <img src={IconFile} alt="logo-licorn" />
              <br />
              LOREM
            </Col>
          </Row>
          {/* Slider/background => 1 colonne */}
          <Row style={{ backgroundColor: "#162d8c", paddingBottom: "18%", paddingTop: "18%" }}>
            <Col offset={0} span={24}>
              <div className="SliderLeft">
                <h1 style={{ color: "white", fontSize: "60px", lineHeight: "74px" }}>Loremp ipsum dolor sit amet</h1>
                <p style={{ color: "white", fontSize: "25px", lineHeight: "32px" }}>
                  Eos quis fuga qui accusamus aperiam non earum repudiandae
                </p>
                <Button
                  style={{
                    color: "white",
                    backgroundColor: "#007EEA",
                    border: "0px",
                    borderRadius: "0px",
                    height: "50px",
                    width: "150px",
                  }}
                >
                  <a href="/">Lorem ipsum</a>
                </Button>
              </div>
            </Col>
          </Row>
          {/* Section "Follow us" => 1 colonne */}
          <Row style={{ color: "black", backgroundColor: "white" }}>
            <Col offset={0} span={24}>
              <center>
                <p style={{ fontSize: "15px", letterSpacing: "1.76", color: "#353535", fontWeight: "bold" }}>
                  FOLLOW US
                  <FacebookFilled style={{ margin: "5px 5px 5px 35px " }} />
                  <TwitterOutlined style={{ margin: "5px" }} />
                  <InstagramOutlined style={{ margin: "5px" }} />
                </p>
              </center>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default ColumnLeft;
