import React from "react";
import { Row, Col } from "antd";
import IconUser from "../../assets/icons/IconUser.svg";
import IconCalendar from "../../assets/icons/IconCalendar.svg";
import IconPhone from "../../assets/icons/IconPhone.svg";
import { SearchOutlined } from "@ant-design/icons";

import "./columnRight.css";
import PhotoHeader from "../../assets/photos/photo-header.png";

function ColumnRight() {
  return (
    <div className="ColumnRight">
      <Row>
        <Col offset={0} span={24}>
          {/* Menu => 4 colonnes */}
          <Row style={{ fontSize: "14px", padding: "0% 0% 0% 0% ", color: "grey", textAlign: "center" }}>
            <Col className="tab" offset={0} span={6}>
              <img src={IconCalendar} alt="logo-licorn" />
              <br />
              LOREM
            </Col>
            <Col className="tab" offset={0} span={6}>
              <img src={IconUser} alt="logo-licorn" />
              <br />
              LOREM
            </Col>
            <Col className="tab" offset={0} span={6}>
              <img src={IconPhone} alt="logo-licorn" />
              <br />
              LOREM
            </Col>
            <Col
              className="tab"
              offset={0}
              span={6}
              style={{
                fontSize: "30px",
                backgroundColor: "#007ee2",
                color: "white",
                textAlign: "center",
                paddingTop: "35px",
              }}
            >
              <SearchOutlined />
            </Col>
          </Row>
          {/* Image => 1 colonnes */}
          <Row>
            <Col offset={0} span={24}>
              <img className="PhotoHeader" src={PhotoHeader} alt="PhotoHeader" />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default ColumnRight;
