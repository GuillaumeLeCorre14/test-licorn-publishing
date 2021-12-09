import React from "react";
import { Row, Col } from "antd";
import "./cardType1.css";
import ArrowDownSVG from "../../../assets/icons/IconArrowDown.svg";
import ArrowDownSVG2 from "../../../assets/icons/IconArrowDown2.svg";

const CardType1 = (props) => {
  const description = props.description;
  const title = props.title;
  const iconSVG = props.icon;
  const iconColorBackground = props.iconColorBackground;
  //const articleHeader = props.articleheader || false;
  return (
    <>
      <Row
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundSize: "cover",
          // backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          // width: "100%",
          // minHeight: "300px",
          // padding: "0px 0px 50px 0px",
        }}
      >
        <Col span={24}>
          <Row align="middle">
            <Col style={{ backgroundColor: iconColorBackground, padding: "20px 10px 20px 10px" }} span={6}>
              <img src={iconSVG} alt="img" style={{ width: "50%" }} />
            </Col>
          </Row>
          <Row align="middle">
            <Col span={24}>
              {iconColorBackground === "#007eea" ? (
                <img src={ArrowDownSVG} alt="img" />
              ) : (
                <img src={ArrowDownSVG2} alt="img" />
              )}
              {/* <img src={ArrowDownSVG} alt="img" /> */}
              <br />
              <br />
              <div>
                <h1 className="title-card1" style={{ fontSize: "20px", color: "white", textDecoration: "underline" }}>
                  {title}
                </h1>
                <br />
                <br />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row align="middle">
        <Col
          offset={0}
          span={24}
          style={{ textAlign: "left", minHeight: "100px", padding: "20px 0px 20px 0px", fontFamily: "Sen-Bold" }}
        >
          <p style={{ color: "#353535", fontSize: "22px", padding: "0px", margin: "0px" }}> {title}</p>
          <p style={{ color: "#2F2F2F" }}>{description}</p>
        </Col>
      </Row>
    </>
  );
};

export default CardType1;
