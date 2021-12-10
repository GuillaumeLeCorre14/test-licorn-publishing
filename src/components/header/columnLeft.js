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
      <Row>
        <Col lg={{ span: 24, offset: 0 }}>
          {/* Menu => 4 colonnes */}
          <Row className="MenuLeftDesktop" style={{ backgroundColor: "#162d8c", fontSize: "14px", padding: "0% 0% 0% 0% ", textAlign: "center" }}>
            <Col className="tab" offset={0} span={6}>
              <a href="/">
                <img src={Logo} alt="logo-licorn" />
              </a>
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
          <Row style={{ backgroundColor: "#162d8c", paddingBottom: "12%", paddingTop: "12%" }}>
            <Col offset={0} span={24}>
              <div className="SliderLeft">
                <h1 style={{ color: "white", fontSize: "60px", lineHeight: "74px" }}>Lorem ipsum dolor sit amet</h1>
                <p style={{ color: "white", fontSize: "25px", lineHeight: "32px" }}>Eos quis fuga qui accusamus aperiam non earum repudiandae</p>
                <Button className="CTA-Homepage">
                  <a href="/">Lorem ipsum</a>
                </Button>
                <Row>
                  <Col lg={{ span: 3, offset: 0 }} sm={{ span: 0, offset: 0 }} xs={{ span: 0, offset: 0 }}>
                    <u>Prev</u>
                  </Col>
                  <Col lg={{ span: 3, offset: 0 }} sm={{ span: 0, offset: 0 }} xs={{ span: 0, offset: 0 }}>
                    Next
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          {/* Section "Follow us" => 1 colonne */}
          <Row style={{ color: "black", backgroundColor: "white" }}>
            <Col offset={0} span={24}>
              <center>
                <p style={{ fontSize: "15px", letterSpacing: "1.76", color: "#353535", fontWeight: "bold" }}>
                  FOLLOW US
                  <a style={{ color: "black" }} href="https://www.facebook.com">
                    <FacebookFilled className="facebook" style={{ margin: "5px 5px 5px 35px " }} />
                  </a>
                  <a style={{ color: "black" }} href="https://www.twitter.com">
                    <TwitterOutlined className="twitter" style={{ margin: "5px" }} />
                  </a>
                  <a style={{ color: "black" }} href="https://www.instagram.com">
                    <InstagramOutlined className="instagram" style={{ margin: "5px" }} />
                  </a>
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
