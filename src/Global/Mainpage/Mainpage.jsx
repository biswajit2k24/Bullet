import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import round from "../../assets/round.png";
import gol from "../../assets/gol.png";
import { HiArrowLongRight } from "react-icons/hi2";
import "./Mainpage.css";
import Header from "../Header/Header";
function Mainpage() {

  return (
    
    <>
    <Header/>
      <Container>
        <Row>
          <Col lg={6} className="ro">
            <div className="ro1">
              Showcase your skills. Find your career fit.
            </div>
            <div className="ro2">
              Bite-sized 5-6 hour virtual work experience programs that give
              students a genuine career advantage with Fortune 500 companies with
            </div>
            <div className="ro3">
              Start Now{" "}
              <HiArrowLongRight
                style={{ fontSize: "40px", marginLeft: "1rem" }}
              />
            </div>
            <div className="ro4">
              Forage virtual work experiences are always free for students as
              our partner companies are committed to ensuring equity, diversity,
              and access of opportunity for everyone.
            </div>
          </Col>
          <Col lg={6}>
            <img src={round} alt="" className="roun1" />
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col>
            <img src={gol} alt="" className="gol-img" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Mainpage;
