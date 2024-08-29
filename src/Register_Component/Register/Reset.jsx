import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate ,NavLink } from "react-router-dom";
import logo from "../../assets/main_Logo.png";


function Reset() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/login");
  };

  return (
    <>
      <Container fluid className="head-container">
        <Row>
          <Col as={NavLink} to="/Global">
            <img src={logo} alt="logo" className="logo1" />
          </Col>
        </Row>
      </Container>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          height: "30rem",
          gap: "1rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Row>
          <Col className="he1">Reset Password</Col>
        </Row>
        <Row>
          <Col lg={12} sm={12}>
            <Form.Control
              type="email"
              placeholder="Email*"
              name="email"
              className="for1"
            />
          </Col>
        </Row>
        <Row className="rogo">
          <Col className="reg--row">
            <Button type="submit" variant="success" className="reg-btn">
              Submit
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className="reser-col">
            Return to{" "}
            <span onClick={handleButtonClick} className="login-link">
              Login
            </span>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Reset;
