import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const FormElement = () => {
  const [text, setText] = useState("");
  const [number, setNumber] = useState("");
  // const [link, setLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(number);
  };

  const copyLink = () => {
    let link = document.querySelector(".link").innerText;
    let linkNew = link.replace(/\++/g, "");
    navigator.clipboard.writeText(linkNew);
  };
  return (
    <Container>
      <Row className="justify-content-center text-center">
        <Col xs={6}>
          <img src="./logo.png" alt="" className="img-fluid" />
        </Col>
      </Row>
      <Row>
        <Col>
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
