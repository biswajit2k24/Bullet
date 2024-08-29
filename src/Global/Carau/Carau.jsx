import React from "react";
import { Container, Card, Carousel, Row, Col } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import Citi from "../../assets/citi.png";
import Elect from "../../assets/electronicsarts.png";
import King from "../../assets/kingandwood.png";
import Gr from "../../assets/gr.png";
import cardimg from "../../assets/cardimg.png";
import visa from "../../assets/visa.png";
import "./Carau.css";
import { HiArrowLongRight } from "react-icons/hi2";
function Carau() {
  const datat = [
    {
      id: 1,
      img: cardimg,
      name: visa, 
      desc: "Token Service technology Virtual Experience Program",
    },
    {
      id: 2,
      img: cardimg,
      name: visa,
      desc: "Token Service technology Virtual Experience Program",
    },
    {
      id: 3,
      img: cardimg,
      name: visa,
      desc: "Token Service technology Virtual Experience Program",
    },
    {
      id: 4,
      img: cardimg,
      name: visa,
      desc: "Token Service technology Virtual Experience Program",
    },
    {
      id: 5,
      img: cardimg,
      name: visa,
      desc: "Token Service technology Virtual Experience Program",
    },
  ];

  const datat1 = [
    {
      id: 1,
      summ: "Register for Forage, and enroll in programs that help you explore career options.",
    },
    {
      id: 2,
      summ: "Register for Forage, and enroll in programs that help you explore career options.",
    },
    {
      id: 3,
      summ: "Register for Forage, and enroll in programs that help you explore career options.",
    },
    {
      id: 4,
      summ: "Register for Forage, and enroll in programs that help you explore career options.",
    },
  ];

  return (
    <>
      {" "}
      <Marquee className="marqu">
        <img
          src={Elect}
          alt="Electronics Arts"
          className="im1"
          style={{ width: "15rem", height: "3rem" }}
        />
        <img
          src={King}
          alt="King and Wood"
          className="im1"
          style={{ width: "5rem", height: "5rem" }}
        />
        <img
          src={Citi}
          alt="Citi"
          className="im1"
          style={{ width: "6rem", height: "4rem" }}
        />
        <img
          src={Gr}
          alt="GR"
          className="im1"
          style={{ width: "5rem", height: "5rem" }}
        />
      </Marquee>
      <Container  className="cont2">
        <Row style={{width:"100%"}}>
          <Col  className="col-cont" >
            {" "}
            {datat.map((card) => (
              <Card className="car">
                <Card.Img variant="top" src={card.img} className="car1" />
                <div className="divv"></div>
                <Card.Img variant="top" src={card.name} className="car2" />
                <Card.Text className="car3">{card.desc}</Card.Text>
              </Card>
            ))}
          </Col>
        </Row>
      
     
        <Row>
          <Col className="carau1">Learn directly from top companies</Col>
        </Row>
        <Row>
          <Col className="carau2">
            Virtual work experience programs replicate work at top companies and
            help you gain the skills to be successful when applying and working
            there. In only 5-6 hours, learn the relevant tools necessary to
            complete a typical work day at that company. Our virtual work
            experience programs are 100% free, open-access, and self-paced. No
            experience or application is required!
          </Col>
        </Row>
        <Row>
          <Col className="cdr-col"
            lg={12} sm={12}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            {datat1.map((dat) => (
              <Card className="car4">
                <Row>
                  <Col lg={4} sm={4}></Col>
                  <Col lg={4} sm={4}>
                    <div className="ide1">{dat.id}</div>
                  </Col>
                  <Col lg={4} sm={4}></Col>
                </Row>
                <Row>
                  <Col className="car5">{dat.summ}</Col>
                </Row>
              </Card>
            ))}
          </Col>
        </Row>
        <Row>
          <Col style={{ display: "flex", justifyContent: "center" }}>
            <div className="car6">
              Find a program
              <HiArrowLongRight
                style={{ fontSize: "30px", width: "2rem", marginLeft: "1rem" }}
              />
            </div>
          </Col>
        </Row>
      </Container>
      
    </>
  );
}

export default Carau;
