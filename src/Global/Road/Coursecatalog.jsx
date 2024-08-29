import { useState } from "react";
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap";
import { PiDiamondsFourFill } from "react-icons/pi";
import { FaClock } from "react-icons/fa6";
import { HiLockOpen } from "react-icons/hi";
import { HiArrowLongRight } from "react-icons/hi2";
import { CiFilter } from "react-icons/ci";
import cardimg from "../../assets/cardimg.png";
import visa from "../../assets/visa.png";
import male1 from "../../assets/male1.png";
import halfround from "../../assets/round.png";
import "./Coursecatalog.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function Coursecatalog() {
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
    {
      id: 6,
      img: cardimg,
      name: visa,
      desc: "Token Service technology Virtual Experience Program",
    },
    {
      id: 7,
      img: cardimg,
      name: visa,
      desc: "Token Service technology Virtual Experience Program",
    },
    {
      id: 8,
      img: cardimg,
      name: visa,
      desc: "Token Service technology Virtual Experience Program",
    },
    {
      id: 9,
      img: cardimg,
      name: visa,
      desc: "Token Service technology Virtual Experience Program",
    },
    {
      id: 10,
      img: cardimg,
      name: visa,
      desc: "Token Service technology Virtual Experience Program",
    },
    {
      id: 11,
      img: cardimg,
      name: visa,
      desc: "Token Service technology Virtual Experience Program",
    },
    {
      id: 12,
      img: cardimg,
      name: visa,
      desc: "Token Service technology Virtual Experience Program",
    },
    {
      id: 13,
      img: cardimg,
      name: visa,
      desc: "Token Service technology Virtual Experience Program",
    },
    {
      id: 14,
      img: cardimg,
      name: visa,
      desc: "Token Service technology Virtual Experience Program",
    },
    {
      id: 15,
      img: cardimg,
      name: visa,
      desc: "Token Service technology Virtual Experience Program",
    },
    {
      id: 16,
      img: cardimg,
      name: visa,
      desc: "Token Service technology Virtual Experience Program",
    },
    {
      id: 17,
      img: cardimg,
      name: visa,
      desc: "Token Service technology Virtual Experience Program",
    },
    {
      id: 18,
      img: cardimg,
      name: visa,
      desc: "Token Service technology Virtual Experience Program",
    },
    {
      id: 19,
      img: cardimg,
      name: visa,
      desc: "Token Service technology Virtual Experience Program",
    },
  ];


  const [visibleCards, setVisibleCards] = useState(8);
  const [showMore, setShowMore] = useState(false);

 

  const handleShowMore = () => {
    setVisibleCards(datat.length);
    setShowMore(true);
  };

  const handleShowLess = () => {
    setVisibleCards(8);
    setShowMore(false);
  };

  return (
    <>
 <Header/>
      <Container fluid>
        <Row style={{ marginTop: "2rem" }}>
          <Col lg={5}>
            <img src={halfround} alt="" className="halfround" />
          </Col>
          <Col className="col-02" lg={7}>
            {" "}
            <div className="bghg">
              <div className="expp-row">
                <div>Explore Bullet</div> <div>Work Experience Programs</div>
              </div>
              <div className="find-row">
                <div>
                  {" "}
                  Find the perfect program to showcase your knowledge & get
                </div>
                noticed by recruiters from top companies.
              </div>
            </div>{" "}
            <div className="explore-btnn">
              {" "}
              <div>Explore Programs</div>{" "}
            </div>{" "}
          </Col>
        </Row>
      </Container>
      <Container className="tech-cont">
        <Row>
          <Col className="tech-row">Tech Virtual Experience Programs</Col>
        </Row>
        <Row>
          <Col className="techy-row">
            Join the ranks of leading Tech students around the world, and enroll
            in one of our Tech programs
          </Col>
        </Row>
        <Row>
          <Col>
            <Form>
              <Form.Select
                aria-label="Default select example"
                style={{ background: "none" }}
              >
                <option>Tech</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form>
          </Col>
          <Col>
            <Form.Select
              aria-label="Default select example"
              style={{ background: "none", color: "green" }}
            >
              <option>Company</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Check // prettier-ignore
              type="Checkbox"
              id=""
              label="Show me new programs"
            />
          </Col>
          <Col>
            <div>
              <CiFilter />
              Clear all filters
            </div>
          </Col>
        </Row>
        <Row>
          {datat.slice(0, visibleCards).map((card, index) => (
            <Col lg={3} key={index} className="col-cont">
              <Card className="car" style={{ width: "25rem" }}>
                <Card.Img variant="top" src={card.img} className="car1" />
                <div className="divv"></div>
                <Card.Img variant="top" src={card.name} className="car2" />
                <Card.Text className="car3">{card.desc}</Card.Text>
              </Card>
            </Col>
          ))}
        </Row>
        <Row>
          <Col className="text-center">
            {visibleCards < datat.length && (
              <Button onClick={handleShowMore} className="mt-3">
                Load More
              </Button>
            )}
            {showMore && (
              <Button onClick={handleShowLess} className="mt-3">
                Load Less
              </Button>
            )}
          </Col>
        </Row>
      </Container>
      <Container>
        <Row style={{ marginTop: "2rem" }}>
          <Col>
            <img src={male1} alt="" className="male1-img" />
          </Col>
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div>
              <div className="col--1">
                Accessible experience from top companies
              </div>
              <div className="col--2">
                Virtual work experience programs replicate work at top
                companies, and connect students to the companies themselves. In
                only 5-6 hours, learn relevant tools and skills necessary to
                complete tasks that replicate an employee’s work day.
              </div>
            </div>
            <div className="col--4">
              <div className="col--3">
                <HiLockOpen className="col--5" />
                No applications or experience required
              </div>
              <div className="col--3">
                <FaClock className="col--5" />
                Learn highly relevant skills in your own time, at your own pace
              </div>
              <div className="col--3">
                <PiDiamondsFourFill className="col--5" />
                Your talent matters more than your connections
              </div>

              <div className="col--6">
                <div>Enroll Now</div>{" "}
                <div>
                  <HiArrowLongRight style={{ fontSize: "30px" }} />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row className="fl-row">
          <Col lg={3}>
            <img src={halfround} alt="" className="hfr" />
          </Col>
          <Col lg={6} className="become-col">
            <div className="become">Become a forager</div>
            <div>
              <div className="become1">Enroll Now</div>
            </div>
          </Col>
          <Col lg={3}>
            <img src={halfround} alt="" className="hffr" />
          </Col>
        </Row>
      </Container>
      
      <Footer />
    </>
  );
}
