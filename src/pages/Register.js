import React, { useState } from "react";
import { Form, ButtonToolbar, Button } from "rsuite";
import { Row, Col } from "rsuite";
import CountingRegister from "./componant/CountingRegister";
import Unicorn from '../images/giphy.gif';
import { Link } from "react-router-dom";



function Register() {
  const [count, setCount] = useState(20);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setCount(count + 1);
  };

  return (
    <>
      <div className="container mx-auto">
        <Row className="my-20">
          <Col lg={12} sm={12} xs={24}>
          <img src={Unicorn} style={{width:"50%",display:"block",margin:"auto",marginBottom:"20px"}}/>
            <CountingRegister count={count} />
          </Col>
          <Col lg={12} sm={12} xs={24}>
            <div
              style={{
                margin: "20px",
                padding: "30px",
                border: "1px solid #00000040",
                borderRadius: "15px",
              }}
            >
              <Form onSubmit={handleFormSubmit}>
                <Form.Group controlId="name">
                  <Form.ControlLabel>ชื่อ</Form.ControlLabel>
                  <Form.Control name="name" />
                  <Form.HelpText>กรุณากรอกชื่อ</Form.HelpText>
                </Form.Group>
                <Form.Group controlId="last-name">
                  <Form.ControlLabel>นามสกุล</Form.ControlLabel>
                  <Form.Control name="last-name" />
                  <Form.HelpText>กรุณากรอกนามสกุล</Form.HelpText>
                </Form.Group>
                <Form.Group controlId="phone">
                  <Form.ControlLabel>เบอร์โทร</Form.ControlLabel>
                  <Form.Control name="phone" />
                  <Form.HelpText>กรุณากรอกเบอร์โทร</Form.HelpText>
                </Form.Group>
                <Form.Group>
                  <ButtonToolbar>
                    <Link to="/visitors">
                    <Button type="submit" appearance="primary">
                      Submit
                    </Button>
                    </Link>
                    {/* <Button appearance="default">Cancel</Button> */}
                  </ButtonToolbar>
                </Form.Group>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Register;
