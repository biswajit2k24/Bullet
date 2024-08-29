import React, { useState } from "react";
import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import logo1 from "../../assets/main_Logo.png";
import "./Header.css";

function Header() {
    const [activeButton, setActiveButton] = useState("login");
    const navigate = useNavigate();
  
    const handleButtonClick = (button) => {
      setActiveButton(button);
      if (button === "signup") {
        navigate("/register");
      }
      if (button === "login") {
        navigate("/login");
      }
    };
    

 
  return (
    <Navbar expand="lg">
    <Container>
      <Row>
        <Col lg={5} sm={12}>
          <Navbar.Brand as={NavLink} to="/Global">
            <img src={logo1} alt="" className="logo2" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{ marginLeft: "12rem" }}
          />
        </Col>
        <Col
          lg={8}
          sm={3}
          style={{ marginRight: "-8rem", gap: "5rem", display: "flex" }}
        >
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="me-auto"
              style={{ gap: "1rem", display: "flex" }}
            >
              <Nav.Link as={NavLink} to="/Global/course-catalog" className="navu">
                Course catalog
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/Global/student-blog"
                className="navu"
              >
                Student Blog
              </Nav.Link>
              <Nav.Link className="navu">For Mentee</Nav.Link>
              <Nav.Link href="#link" className="navu">
                For Mentor
              </Nav.Link>
              <div className="btnn-main">
                <div
                  className={`btnn-main1 ${
                    activeButton === "signup" ? "active-btn" : ""
                  }`}
                  onClick={() => handleButtonClick("signup")}
                >
                  Sign up
                </div>
                <div
                  className={`btnn-main1 ${
                    activeButton === "login" ? "active-btn" : ""
                  }`}
                  onClick={() => handleButtonClick("login")}
                  
                >
                  Login
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Col>
      </Row>
    </Container>
  </Navbar>
  )
}

export default Header
