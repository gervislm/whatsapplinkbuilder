import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import logo from "../img/logo.png";

const FormElement = () => {
  const [text, setText] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(number);
  };

  const copyLink = (e) => {
    let link = document.querySelector(".link").innerText;
    let linkNew = link.replace(/\++/g, "");
    navigator.clipboard.writeText(linkNew);
    let button = e.target;
    button.style.color = "greenyellow";
    button.innerText = "Copied";
    const form = button.parentElement;
    const tip = document.createElement("SPAN");
    tip.innerText = "*** Whatsapp link is in your CLIPBOAD ***";
    tip.style.color = "yellow";
    form.insertBefore(tip, button);
    setTimeout(() => {
      button.style.color = "white";
      button.innerText = "Copy";
      form.removeChild(tip);
    }, 1000);
  };

  // const animationButton = () => {};
  return (
    <Container Fluid>
      <Row className="justify-content-center text-center">
        <Col xs={12} lg={6}>
          <img src={logo} alt="logo" />
          <h1 className="title">Whatsapp link builder</h1>
        </Col>
      </Row>
      <Row className="justify-content-center text-center">
        <Col xs={12} lg={6}>
          <div className="link">{`api.whatsapp.com/send?phone=${number}&text=${text}`}</div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={10}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicNumber">
              <Form.Label className="textlabel">Whatsapp Number</Form.Label>
              <Form.Control
                type="text"
                pattern="[0-9]*"
                inputmode="numeric"
                value={number}
                placeholder="Enter whatsapp number"
                onChange={(e) => setNumber(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicText">
              <Form.Label className="textlabel">Message</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter text for your link"
                rows={3}
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </Form.Group>
            <Button
              style={{ height: 100, marginTop: 50 }}
              variant="primary"
              size="lg"
              block
              onClick={copyLink}
              className="animate__lightSpeedOutLeft"
            >
              Copy
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default FormElement;
