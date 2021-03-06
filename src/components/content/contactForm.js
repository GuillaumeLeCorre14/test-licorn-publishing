import React from "react";
import { notification, Row, Col, Form, Input, Button } from "antd";
import ContactImage from "../../assets/photos/photo-contact.png";
import "./contactForm.css";
import { ArrowRightOutlined } from "@ant-design/icons";
const { TextArea } = Input;

function ContactForm() {
  const [contactForm] = Form.useForm();

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "Message envoyé avec succès",
      placement: "bottomRight",
      description: "Nous vous répondrons dans les meilleurs délais.",
      duration: 3,
    });
  };

  const onFinish = (values) => {
    openNotificationWithIcon("success");
    contactForm.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="contactForm">
      <img className="ContactImageMobile" src={ContactImage} alt="contactimage" style={{ width: "85%" }} />
      <Row>
        <Col
          className="contactForm-col1"
          xs={{ offset: 2, span: 10 }}
          md={{ offset: 6, span: 12 }}
          lg={{ offset: 4, span: 6 }}
          xl={{ offset: 4, span: 8 }}
          style={{ marginTop: "-5%" }}
        >
          <img className="ContactImageDesktop" src={ContactImage} alt="contactimage" style={{ width: "100%" }} />
        </Col>
        <Col
          className="contactForm-col2"
          xs={{ offset: 2, span: 20 }}
          md={{ offset: 6, span: 12 }}
          lg={{ offset: 0, span: 6 }}
          xl={{ offset: 0, span: 8 }}
          style={{ backgroundColor: "white", padding: "1%", boxShadow: "0 0 65px 0 rgba(0,0,0,0.15)" }}
        >
          <h1 style={{ fontSize: "45px" }}>Lorem ipsum</h1>
          <div style={{ paddingLeft: "20%", paddingRight: "20%", textAlign: "center" }}>
            <p>Lorem ipsum dolor sit amet. Eos quis fuga qui accusamus aperiam non earum ?</p>
          </div>
          <Form
            name="basic"
            // labelCol={{ offset: 2, span: 20 }}
            // wrapperCol={{ offset: 2, span: 20 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
            form={contactForm}
          >
            <Row>
              <Col lg={{ span: 10, offset: 1 }} md={{ span: 10, offset: 1 }} xs={{ span: 10, offset: 1 }}>
                <Form.Item label="First name" name="firstname" rules={[{ required: false, message: "Please input your firstname!" }]}>
                  <Input placeholder="Jane" style={{ backgroundColor: "#f1f1f1", border: "none" }} />
                </Form.Item>
              </Col>
              <Col lg={{ span: 10 }} md={{ span: 10 }} xs={{ span: 10, offset: 2 }}>
                <Form.Item label="Last name" name="lastname" rules={[{ required: false, message: "Please input your lastname!" }]}>
                  <Input placeholder="Smith" style={{ backgroundColor: "#f1f1f1", border: "none" }} />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col lg={{ span: 22, offset: 1 }} md={{ span: 22, offset: 1 }} xs={{ span: 22, offset: 1 }}>
                <Form.Item
                  label="Email Address"
                  name="mail"
                  rules={[
                    {
                      type: "email",
                      message: "This is not valid E-mail!",
                    },
                    { required: false, message: "Please input your mail adress" },
                  ]}
                >
                  <Input placeholder="janesmith@example.com" style={{ backgroundColor: "#f1f1f1", border: "none" }} />
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col lg={{ span: 22, offset: 1 }} md={{ span: 22, offset: 1 }} xs={{ span: 22, offset: 1 }}>
                <Form.Item label="Message" name="message" rules={[{ required: false, message: "Please input your message" }]}>
                  <TextArea placeholder="Hey, ..." style={{ backgroundColor: "#f1f1f1", border: "none" }} />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
              <Button type="primary" htmlType="submit" style={{ height: "40px", width: "180px" }}>
                <ArrowRightOutlined />
                Lorem Ipsum
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default ContactForm;
