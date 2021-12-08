import "./App.css";
import { Layout, Row, Col} from "antd";
import NavBar from "./components/header/navbar";
import Slider from "./components/header/slider";
import Articles from "./components/content/articles";
import Newsletter from "./components/footer/newsletter";
import FooterMenu from "./components/footer/footerMenu";
import Copyright from "./components/footer/copyright";
import { Components } from "antd/lib/date-picker/generatePicker";

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header>
        <NavBar></NavBar>
        <Slider></Slider>
      </Header>
      <Content>
        <Articles></Articles>
      </Content>
      <Footer>
        <Row>
          <Col offset={0} span={24} style={{ padding:"100px 0px 100px 0px",textAlign:"center", backgroundColor:"#162D8C", color:"white"}}>
            <Newsletter></Newsletter>
            <FooterMenu></FooterMenu>
            <Copyright></Copyright>
          </Col>
        </Row>
       
      </Footer>
    </Layout>
  );
}

export default App;
