import { useState , react }  from "react";
import { Col, Container, Row, Modal,Form, ModalBody } from "react-bootstrap";
import lal from "../../assets/main_Logo.png";
import "./Footer.css";
import { HiArrowLongRight } from "react-icons/hi2";
import { IoIosArrowRoundUp } from "react-icons/io";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container className="foot-cont">
      <Row>
        <Col>
          <img src={lal} alt="" className="logo4" />
        </Col>
        <Col>
          <div className="allin">Company</div>
          <div className="allone">
            <div>About</div>
            <div>Press</div>
            <div>Careers</div>
          </div>
        </Col>
        <Col>
          <div className="allin">Support</div>
          <div className="allone">
            <div> Contact</div>
            <div>FAQs</div>
          </div>
        </Col>
        <Col>
          <div className="allin">For Student</div>
          <div className="allone">
            <div>All Programs</div>
            <div>Tech Programs</div>
            <div> Consulting Programs</div>
            <div> Finance Programs</div>
            <div> Student Blog</div>
          </div>
        </Col>
        <Col>
          <div className="allin">For Employers</div>
          <div className="allone">
            <div>Why Forage</div>
            <div>Employer Resources</div>
            <div>Request a Demo</div>
          </div>
        </Col>
        <Col>
          <div className="allin">For Educators</div>
          <div className="allone">
            <div>Educator Resources</div>
            <div>Awards</div>
            <div>Register as an Educator</div>
          </div>
        </Col>
      </Row>
      <Row className="priv-row">
        <Col lg={4}></Col>
        <Col className="priv-col">
          <div>Privacy Policy</div>
          <div>Cookie Policy</div>
          <div>Terms of Use</div> <div>Sitemap</div>
        </Col>
        <Col lg={3}></Col>
      </Row>
      <Row>
        <Col lg={5}>
          <div className="arro-box" onClick={scrollToTop}>
            <IoIosArrowRoundUp style={{ fontSize: "2rem" }} />
          </div>
        </Col>
        <Col className="reser-col" lg={5}>
          All Copyrights Reserved by <span>Bullet</span>
        </Col>
        <Col lg={2}>
          <div className="help-btnn" onClick={handleShow}>
            <div style={{ marginLeft: "1rem" }}>
              Help{" "}
              <HiArrowLongRight
                style={{ fontSize: "30px", width: "2rem", marginLeft: "1rem" }}
              />
            </div>
          </div>
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton style={{padding:"20px", backgroundColor:"#144714",color:"#FFFFFF",display:"flex",alignItems:"center"}}>
          <Modal.Title>Help</Modal.Title>
        </Modal.Header>
        <ModalBody style={{padding:"20px"}}><Form.Control type="text" placeholder="How can we Help ?"  /></ModalBody>
        <div style={{display:"flex",justifyContent:"space-between",padding:"20px"}}><div className="byu">Send</div><div className="byu">Contact</div></div>
        
      </Modal>
    </Container>
    
  );
}

export default Footer;
