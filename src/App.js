import { Layout, Row, Col } from "antd";
import { useState, useEffect } from "react";
import ColumnLeft from "./components/header/columnLeft";
import ColumnRight from "./components/header/columnRight";
import MenuMobile from "./components/header/menuMobile";
import Articles from "./components/content/articles/articles";
import ContactForm from "./components/content/contactForm";
import Newsletter from "./components/footer/newsletter";
import FooterMenu from "./components/footer/footerMenu";
import Copyright from "./components/footer/copyright";
import IconScrollTop from "./assets/icons/IconScrollTop.svg";
import "./App.css";
import { UpCircleFilled } from "@ant-design/icons";

const { Header, Footer, Content } = Layout;

function App() {
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scroll(0, 0);
  };
  return (
    <>
      <Layout>
        <Header>
          <div className="MenuMobile">
            <MenuMobile />
          </div>
          <Row>
            <Col xs={{ span: 24, offset: 0 }} lg={{ span: 12, offset: 0 }}>
              <ColumnLeft />
            </Col>
            <Col xs={{ span: 0, offset: 0 }} lg={{ span: 12, offset: 0 }}>
              <ColumnRight />
            </Col>
          </Row>
        </Header>
        <Content>
          <Row>
            <Col
              offset={0}
              span={24}
              style={{
                padding: "100px 0px 100px 0px",
                backgroundColor: "white",
                textAlign: "center",
                color: "#353535",
              }}
            >
              <Articles></Articles>
            </Col>
          </Row>
          <Row>
            <Col
              offset={0}
              span={24}
              style={{
                padding: "200px 0px 200px 0px",
                backgroundColor: "#F1F1F1",
                textAlign: "center",
                color: "#353535",
              }}
            >
              <ContactForm></ContactForm>
            </Col>
          </Row>
        </Content>
        <Footer>
          <Row>
            <Col
              offset={0}
              span={24}
              style={{
                padding: "100px 0px 100px 0px",
                textAlign: "center",
                backgroundColor: "#162D8C",
                color: "white",
              }}
            >
              <Newsletter></Newsletter>
              <FooterMenu></FooterMenu>
              <Copyright></Copyright>
            </Col>
          </Row>
          {showButton ? (
            <div className="IconScrollTop">
              <button onClick={scrollToTop}>
                <UpCircleFilled style={{ color: "#007eea", fontSize: "50px" }} />
              </button>
            </div>
          ) : null}
        </Footer>
      </Layout>
    </>
  );
}

export default App;
