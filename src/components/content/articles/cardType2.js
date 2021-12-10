import React from "react";
import { Row, Col } from "antd";
import "./cardtype2.css";
import { ArrowRightOutlined } from "@ant-design/icons";

const CardType2 = (props) => {
  const iconColorBackground = props.color || "#FA0E5A";
  const description = props.description;
  const iconSVG = props.icon;
  const image = props.image;
  return (
    <div className="CardType2">
      <Row align="middle">
        <Col style={{ backgroundColor: iconColorBackground, padding: "20px 10px 20px 10px" }} span={6}>
          <img src={iconSVG} alt="img" style={{ width: "50%" }} />
        </Col>{" "}
        <Col span={18} style={{ textTransform: "uppercase" }}>
          <ArrowRightOutlined style={{ paddingRight: "5px" }} />
          <b>
            <u>
              <a style={{ color: "black" }} href="/">
                Lorem ipsum
              </a>
            </u>
          </b>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <img src={image} alt="img" style={{ width: "100%" }} />
        </Col>
      </Row>
      <Row align="middle">
        <Col offset={2} span={20} style={{ textAlign: "left", minHeight: "100px", padding: "20px 5px 20px 5px", fontFamily: "Sen-Bold" }}>
          {description}
        </Col>
      </Row>
    </div>
  );
};

export default CardType2;
