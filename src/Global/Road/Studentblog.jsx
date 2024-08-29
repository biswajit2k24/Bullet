import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Studentblog.css";
import Header from "../Header/Header";
function Studentblog() {
  const care = [
    {
      id: 1,
      que: "What Is Career Planning?",
      position: "Careers / By Rachel Palta / July 14,2022",
      desci:
        "You may think that a successful career is equal parts hard work and being in the right place at the right time. And while hard work often plays a role, having the career you want is less about luck and more about career planning. Crafting a career plan allows you to set the course you",
    },
    {
      id: 2,
      que: "What Is Career Planning?",
      position: "Careers / By Rachel Palta / July 14,2022",
      desci:
        "You may think that a successful career is equal parts hard work and being in the right place at the right time. And while hard work often plays a role, having the career you want is less about luck and more about career planning. Crafting a career plan allows you to set the course you",
    },
    {
      id: 3,
      que: "What Is Career Planning?",
      position: "Careers / By Rachel Palta / July 14,2022",
      desci:
        "You may think that a successful career is equal parts hard work and being in the right place at the right time. And while hard work often plays a role, having the career you want is less about luck and more about career planning. Crafting a career plan allows you to set the course you",
    },
    {
      id: 4,
      que: "What Is Career Planning?",
      position: "Careers / By Rachel Palta / July 14,2022",
      desci:
        "You may think that a successful career is equal parts hard work and being in the right place at the right time. And while hard work often plays a role, having the career you want is less about luck and more about career planning. Crafting a career plan allows you to set the course you",
    },
    {
      id: 5,
      que: "What Is Career Planning?",
      position: "Careers / By Rachel Palta / July 14,2022",
      desci:
        "You may think that a successful career is equal parts hard work and being in the right place at the right time. And while hard work often plays a role, having the career you want is less about luck and more about career planning. Crafting a career plan allows you to set the course you",
    },
    {
      id: 6,
      que: "What Is Career Planning?",
      position: "Careers / By Rachel Palta / July 14,2022",
      desci:
        "You may think that a successful career is equal parts hard work and being in the right place at the right time. And while hard work often plays a role, having the career you want is less about luck and more about career planning. Crafting a career plan allows you to set the course you",
    },
    {
      id: 7,
      que: "What Is Career Planning?",
      position: "Careers / By Rachel Palta / July 14,2022",
      desci:
        "You may think that a successful career is equal parts hard work and being in the right place at the right time. And while hard work often plays a role, having the career you want is less about luck and more about career planning. Crafting a career plan allows you to set the course you",
    },
    {
      id: 8,
      que: "What Is Career Planning?",
      position: "Careers / By Rachel Palta / July 14,2022",
      desci:
        "You may think that a successful career is equal parts hard work and being in the right place at the right time. And while hard work often plays a role, having the career you want is less about luck and more about career planning. Crafting a career plan allows you to set the course you",
    },
    {
      id: 9,
      que: "What Is Career Planning?",
      position: "Careers / By Rachel Palta / July 14,2022",
      desci:
        "You may think that a successful career is equal parts hard work and being in the right place at the right time. And while hard work often plays a role, having the career you want is less about luck and more about career planning. Crafting a career plan allows you to set the course you",
    },
    {
      id: 10,
      que: "What Is Career Planning?",
      position: "Careers / By Rachel Palta / July 14,2022",
      desci:
        "You may think that a successful career is equal parts hard work and being in the right place at the right time. And while hard work often plays a role, having the career you want is less about luck and more about career planning. Crafting a career plan allows you to set the course you",
    },
    {
      id: 11,
      que: "What Is Career Planning?",
      position: "Careers / By Rachel Palta / July 14,2022",
      desci:
        "You may think that a successful career is equal parts hard work and being in the right place at the right time. And while hard work often plays a role, having the career you want is less about luck and more about career planning. Crafting a career plan allows you to set the course you",
    },
    {
      id: 12,
      que: "What Is Career Planning?",
      position: "Careers / By Rachel Palta / July 14,2022",
      desci:
        "You may think that a successful career is equal parts hard work and being in the right place at the right time. And while hard work often plays a role, having the career you want is less about luck and more about career planning. Crafting a career plan allows you to set the course you",
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 5;
  const totalPages = Math.ceil(care.length / cardsPerPage);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = care.slice(indexOfFirstCard, indexOfLastCard);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <Header />
      <Container style={{ padding: "2rem" }}>
        {currentCards.map((caret) => (
          <Row key={caret.id} className="row-1">
            <Col lg={6} sm={6} className="col-1">
              <Card className="career-card">
                <Card.Title className="title">
                  {caret.que}
                  <Card.Subtitle>{caret.position}</Card.Subtitle>
                </Card.Title>
                <Card.Body style={{ fontSize: "13px" }}>
                  {caret.desci}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ))}
        <div className="pagination">
          {/* <Button onClick={prevPage} disabled={currentPage === 1}>
            Previous
          </Button> */}
          {Array.from({ length: totalPages }, (_, index) => (
            <Button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
              variant="primary"
              style={{ margin: "0 5px" }}
            >
              {index + 1}
            </Button>
          ))}
          <Button onClick={nextPage} disabled={currentPage === totalPages}>
            Next Page
          </Button>
        </div>
      </Container>
      <Container fluid style={{ backgroundColor: "#DAC199" }}>
        {" "}
        <Row>
          <Col className="all-coll">
            {" "}
            <div>
              All Copyrights Reserved by <span> Bullet</span>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Studentblog;
