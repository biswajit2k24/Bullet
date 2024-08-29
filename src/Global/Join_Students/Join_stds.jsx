import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { HiArrowLongRight } from "react-icons/hi2";
import male from "../../assets/male.png";
import accenture from "../../assets/accenture.png";
import electronics from "../../assets/electronics.png";
import quantium from "../../assets/quantium.png";
import man1 from "../../assets/man1.png";
import man2 from "../../assets/man2.png";
import man3 from "../../assets/man3.png";
import "./Join_stds.css";
function Join_stds() {
  const cardi = [
    { id: 1, name: accenture, des: "SEE PROGRAM" },
    { id: 2, name: quantium, des: "SEE PROGRAM" },
    { id: 3, name: electronics, des: "SEE PROGRAM" },
    { id: 4, name: quantium, des: "SEE PROGRAM" },
    { id: 5, name: accenture, des: "SEE PROGRAM" },
    { id: 6, name: quantium, des: "SEE PROGRAM" },
    { id: 7, name: electronics, des: "SEE PROGRAM" },
    { id: 8, name: quantium, des: "SEE PROGRAM" },
    { id: 9, name: electronics, des: "SEE PROGRAM" },
    { id: 10, name: quantium, des: "SEE PROGRAM" },
  ];
  const cari = [
    {
      id: 1,
      imgoo: man1,
      descc:
        "You can't have a say at the table if you don’t have a seat at the table. So these programs and these opportunities for people who look like me, act like me and think like me, are an opportunity to have a seat at the table so we can have a better future for the people behind us.",
      name: "JON DOE",
      clg: "Mentor Global University",
    },
    {
      id: 2,
      imgoo: man2,
      descc:
        "You can't have a say at the table if you don’t have a seat at the table. So these programs and these opportunities for people who look like me, act like me and think like me, are an opportunity to have a seat at the table so we can have a better future for the people behind us.",
      name: "JON DOE",
      clg: "Mentor Global University",
    },
    {
      id: 3,
      imgoo: man3,
      descc:
        "You can't have a say at the table if you don’t have a seat at the table. So these programs and these opportunities for people who look like me, act like me and think like me, are an opportunity to have a seat at the table so we can have a better future for the people behind us.",
      name: "JON DOE",
      clg: "Mentor Global University",
    },
  ];
  return (
    <>
      <Container>
        <Row>
          <Col style={{ padding: "2%" }} className="jo4" lg={7}>
            <div className="jo1">
              Join students who are getting genuine career advantage by
              completing our programs
            </div>
            <div className="jo2">
              At Forage, every student has a chance to get ahead. Build your
              resume, experience what real work looks like and learn critical
              skills, all amongst some of the best students across the world.
            </div>
            <div>
              <div className="jo3">
                Enroll Now{" "}
                <HiArrowLongRight
                  style={{ fontSize: "40px", marginLeft: "1rem" }}
                />
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <img src={male} alt="" className="male1" />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="exp-row">
            Experience work with virtual programs from innovative global
            companies.
          </Col>
        </Row>
        <Row lg={4} style={{ padding: "80px" }} className="car-col">
          {cardi.map((idr) => (
            <Col>
              <Card className="cdr">
                <Card.Img variant="top" src={idr.name} className="imgo" />
                <Card.Body>{idr.des}</Card.Body>
              </Card>{" "}
            </Col>
          ))}
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="sound-row">
            Sound too good to be true? Hear it directly from Forage students
            who’ve landed jobs.
          </Col>
        </Row>
        <Row>
          <Col lg={2}></Col>
          <Col className="student-row">
            Students who complete our programs are getting hired by our partner
            companies because they are better prepared and more confident.
          </Col>
          <Col lg={2}></Col>
        </Row>
        <Row style={{ marginTop: "2rem", marginLeft: "2rem" }}>
          {cari.map((curd) => (
            <Col>
              <Card className="d1">
                <Card.Img variant="top" src={curd.imgoo} className="imgoo" />
              </Card>
              <Card className="d2">
                <Card.Body>{curd.descc}</Card.Body>
                <Card.Title>{curd.name}</Card.Title>
                <Card.Subtitle style={{ fontSize: "13px" }}>
                  {curd.clg}
                </Card.Subtitle>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className="employer-row">
          <Col lg={2}></Col>
          <Col>
            Are you an employer looking to build a world{" "}
            <span>where opportunity is truly & evenly distributed?</span>
          </Col>
          <Col lg={2}></Col>
        </Row>
        <Row>
          <Col className="arrow-row">
            <div className="request">
              <div className="reqq">
                {" "}
                Request Demo{" "}
                <HiArrowLongRight
                  style={{ fontSize: "40px", marginLeft: "1rem" }}
                />{" "}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="cont-our">
        <Row className="lou">
          <Col style={{ fontSize: "30px", textDecorationLine: "underline" }}>
            OUR MISSION
          </Col>
        </Row>
        <Row className="lou">
          <Col style={{ fontSize: "28px" }}>
            We want to build a world where opportunity is truly evenly
            distributed, where technology allows more people to find the perfect
            career.
          </Col>
        </Row>
        <Row className="lou">
          <Col lg={9}></Col>
          <Col>
            <div className="bullet-btnn">
              <div style={{ marginLeft: "30px" }}>
                Work at Bullet{" "}
                <HiArrowLongRight
                  style={{ fontSize: "40px", marginLeft: "1rem" }}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Join_stds;
