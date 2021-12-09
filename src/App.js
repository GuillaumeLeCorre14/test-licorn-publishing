import { Layout, Row, Col } from "antd";
import NavBar from "./components/header/navbar";
import Slider from "./components/header/slider";
import Articles from "./components/content/articles/articles";
import ContactForm from "./components/content/contactForm";
import Newsletter from "./components/footer/newsletter";
import FooterMenu from "./components/footer/footerMenu";
import Copyright from "./components/footer/copyright";

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <>
      <Layout>
        <Header>
          <NavBar></NavBar>
          <Slider></Slider>
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
        </Footer>
      </Layout>
    </>
  );
}

export default App;
