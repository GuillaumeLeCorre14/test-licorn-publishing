import React from "react";
import { useState } from "react";
import { Row, Col, Button } from "antd";
import "./articles.css";
import CardType1 from "./cardType1";
import CardType2 from "./cardType2";
import BrainSVG from "../../../assets/icons/IconBrain.svg";
import HandSVG from "../../../assets/icons/IconHand.svg";
import ImpactSVG from "../../../assets/icons/IconImpact.svg";
import ImgWheelchair from "../../../assets/photos/photoWheelchair-cardtype2.png";
import ImgKid from "../../../assets/photos/photoKid-cardtype2.png";
import ImgMother from "../../../assets/photos/photoMother-cardtype2.png";
import ImgStet from "../../../assets/photos/photoStet-cardtype2.png";
import ImageTension from "../../../assets/photos/photoTension-cardtype1-res.png";
import ImageTablet from "../../../assets/photos/photoTablet-cardtype1-res.png";
import Points3x3 from "../../../assets/icons/points-3x3.svg";

function Articles() {
  const [viewMore, setViewMore] = useState(false);

  const changeViewMore = () => {
    setViewMore(!viewMore);
  };
  return (
    <>
      <div className="articles">
        {/* Ligne du titre de la section article */}
        <Row>
          <Col lg={{ span: 18, offset: 3 }} md={{ span: 20, offset: 2 }} xs={{ span: 22, offset: 1 }}>
            <Row>
              <Col
                style={{
                  backgroundImage: `url(${Points3x3})`,
                  backgroundSize: "20%",
                  backgroundRepeat: "no-repeat",
                  padding: "10px",
                  backgroundPosition: "0% 0%",
                }}
                lg={{ span: 10, offset: 0 }}
                md={{ span: 10, offset: 0 }}
                xs={{ span: 24, offset: 0 }}
              >
                <h1 style={{ textAlign: "left", fontSize: "40px", padding: "0px 0px 0px 40px", margin: "0px" }}>Lorem ipsum</h1>
                <h1 style={{ textAlign: "left", fontSize: "40px", padding: "0px 0px 0px 40px", margin: "0px" }}>dolor sit amet</h1>
              </Col>
            </Row>
          </Col>
        </Row>
        {/* Première ligne de la section article */}
        <Row>
          <Col lg={{ span: 18, offset: 3 }} md={{ span: 20, offset: 2 }} xs={{ span: 22, offset: 1 }}>
            <Row>
              {/* Première Card de la ligne 1*/}
              <Col
                className="col1"
                style={{ minHeight: "200px", padding: "5px" }}
                lg={{ span: 10, offset: 0 }}
                md={{ span: 10, offset: 0 }}
                xs={{ span: 24, offset: 0 }}
              >
                <CardType1
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  image={ImageTension}
                  title="Lorem Ipsum"
                  iconColorBackground="#007eea"
                  icon={HandSVG}
                  articleheader="true"
                />
              </Col>
              {/* Deuxieme Card de la ligne 1*/}
              <Col
                className="col2"
                style={{ top: "-60px", padding: "5px" }}
                lg={{ span: 7, offset: 0 }}
                md={{ span: 7, offset: 0 }}
                xs={{ span: 24, offset: 0 }}
              >
                <CardType2
                  color="#FA0E5A"
                  description="Lorem ipsum dolor sit amet eos quis fuga qui accusamus aperiam non earum repudiandae"
                  icon={BrainSVG}
                  image={ImgKid}
                />
              </Col>
              {/* Troisième Card de la ligne 1*/}
              <Col
                className="col3"
                style={{ top: "-30px", padding: "5px" }}
                lg={{ span: 7, offset: 0 }}
                md={{ span: 7, offset: 0 }}
                xs={{ span: 24, offset: 0 }}
              >
                <CardType2
                  color="#0073A6"
                  description="Lorem ipsum dolor sit amet eos quis fuga qui accusamus aperiam"
                  icon={ImpactSVG}
                  image={ImgWheelchair}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        {/* Deuxième ligne de la section article */}
        <Row>
          <Col lg={{ span: 18, offset: 3 }} md={{ span: 20, offset: 2 }} xs={{ span: 22, offset: 1 }}>
            <Row>
              {/* Première Card de la ligne 2*/}
              <Col
                className="col1"
                style={{ minHeight: "200px", padding: "5px" }}
                lg={{ span: 10, offset: 0 }}
                md={{ span: 10, offset: 0 }}
                xs={{ span: 24, offset: 0 }}
              >
                <CardType1
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  image={ImageTablet}
                  title="Lorem Ipsum"
                  iconColorBackground="#0073a6"
                  icon={ImpactSVG}
                />
              </Col>
              {/* Deuxieme Card de la ligne 2*/}
              <Col
                className="col2"
                style={{ top: "-60px", padding: "5px" }}
                lg={{ span: 7, offset: 0 }}
                md={{ span: 7, offset: 0 }}
                xs={{ span: 24, offset: 0 }}
              >
                <CardType2
                  color="#0073A6"
                  description="Lorem ipsum dolor sit amet eos quis fuga qui accusamus aperiam"
                  icon={HandSVG}
                  image={ImgStet}
                />
              </Col>
              {/* Troisième Card de la ligne 2*/}
              <Col
                className="col3"
                style={{ top: "-30px", padding: "5px" }}
                lg={{ span: 7, offset: 0 }}
                md={{ span: 7, offset: 0 }}
                xs={{ span: 24, offset: 0 }}
              >
                <CardType2 color="#FA0E5A" description="Lorem ipsum dolor sit amet " icon={BrainSVG} image={ImgMother} />
              </Col>
            </Row>
          </Col>
          {viewMore ? (
            <Row>
              <Col lg={{ span: 18, offset: 3 }} md={{ span: 20, offset: 2 }} xs={{ span: 22, offset: 1 }}>
                <Row>
                  {/* Première Card de la ligne 1*/}
                  <Col
                    className="col1"
                    style={{ minHeight: "200px", padding: "5px" }}
                    lg={{ span: 10, offset: 0 }}
                    md={{ span: 10, offset: 0 }}
                    xs={{ span: 24, offset: 0 }}
                  >
                    <CardType1
                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                      image={ImageTension}
                      title="Lorem Ipsum"
                      iconColorBackground="#007eea"
                      icon={HandSVG}
                      articleheader="true"
                    />
                  </Col>
                  {/* Deuxieme Card de la ligne 1*/}
                  <Col
                    className="col2"
                    style={{ top: "-60px", padding: "5px" }}
                    lg={{ span: 7, offset: 0 }}
                    md={{ span: 7, offset: 0 }}
                    xs={{ span: 24, offset: 0 }}
                  >
                    <CardType2
                      color="#FA0E5A"
                      description="Lorem ipsum dolor sit amet eos quis fuga qui accusamus aperiam non earum repudiandae"
                      icon={BrainSVG}
                      image={ImgKid}
                    />
                  </Col>
                  {/* Troisième Card de la ligne 1*/}
                  <Col
                    className="col3"
                    style={{ top: "-30px", padding: "5px" }}
                    lg={{ span: 7, offset: 0 }}
                    md={{ span: 7, offset: 0 }}
                    xs={{ span: 24, offset: 0 }}
                  >
                    <CardType2
                      color="#0073A6"
                      description="Lorem ipsum dolor sit amet eos quis fuga qui accusamus aperiam"
                      icon={ImpactSVG}
                      image={ImgWheelchair}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          ) : null}
        </Row>
        <div className="space-mobile">
          <br />
          <br />
        </div>
        <Row>
          <Col lg={{ span: 10, offset: 7 }} md={{ span: 10, offset: 7 }} xs={{ span: 20, offset: 2 }}>
            <Button
              style={{
                fontSize: "15px",
                height: "40px",
                width: "180px",
                backgroundColor: "#007EEA",
                border: "1px solid #007EEA",
                color: "white",
                fontFamily: "Sen",
                borderRadius: "0px",
              }}
              onClick={() => changeViewMore()}
            >
              {viewMore ? "View Less" : "View More"}
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Articles;
