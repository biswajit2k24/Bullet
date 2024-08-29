import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate , NavLink} from "react-router-dom";
import { BiSolidSchool } from "react-icons/bi";
import { IoSchoolSharp } from "react-icons/io5";
import { FaSchool } from "react-icons/fa6";
import logo from "../../assets/main_Logo.png";
import glogo from "../../assets/google.png";
import "./Register.css";
import valid from "../Valid";

const Register = ({ isLoginProp }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    currentStatus: "",
    referral: "",
    agreeTerms: false,
    receiveEmails: "",
  });

  const [errors, setErrors] = useState({});
  const [isLogin, setIsLogin] = useState(isLoginProp); // Initialize with prop value
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = valid(formData); // Validate the form data
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      // Navigate to a different page if validation is successful
      navigate("/Global");
    }
  };

  const toggleLogin = () => {
    setIsLogin((isLogin) => !isLogin); // Prevent changing from login mode to register mode
  };
  const handleEmailLinkClick = () => {
    navigate("/login/reset");
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
      <Container className="he">
        <Row>
          <Col className="he1">{isLogin ? "Login" : "Register Now"}</Col>
        </Row>

        <>
          <Row>
            <Col className="he2">
              Create a free Forage account to access virtual experience
              programs, jobs & opportunities.
            </Col>
          </Row>
          <Row>
            <Col className="he3">
              <div className="he4">
                <img src={glogo} alt="" className="he5" />
                <div> Continue with Google</div>
              </div>
            </Col>
          </Row>
        </>
      </Container>

      <Container fluid className="he7">
        <Row>
          <Col className="h6">
            <hr />
          </Col>
          or
          <Col className="h6">
            <hr />
          </Col>
        </Row>
      </Container>

      <Form onSubmit={handleSubmit}>
        <Container className="re-container">
          {!isLogin && (
            <Row>
              <Col lg={6} sm={12}>
                <Form.Control
                  type="text"
                  placeholder="First Name*"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="for1"
                  isInvalid={!!errors.firstName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.firstName}
                </Form.Control.Feedback>
              </Col>
              <Col lg={6} sm={12}>
                <Form.Control
                  type="text"
                  placeholder="Last Name*"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="for1"
                  isInvalid={!!errors.lastName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.lastName}
                </Form.Control.Feedback>
              </Col>
            </Row>
          )}
          <Row>
            <Col lg={6} sm={12}>
              <Form.Control
                type="email"
                placeholder="Email*"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="for1"
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Col>
            <Col lg={6} sm={12}>
              <Form.Control
                type="password"
                placeholder="Password (Minimum 8 Characters) *"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="for1"
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Col>
          </Row>
          {!isLogin && (
            <>
              <Row className="ree">
                <Col className="roe">What best describes you currently? *</Col>
              </Row>
              <Row className="ree">
                <Col lg={4}>
                  <div className="re1">
                    <Form.Check
                      inline
                      name="currentStatus"
                      value="highSchool"
                      checked={formData.currentStatus === "highSchool"}
                      onChange={handleChange}
                      className="group1"
                      type="radio"
                      isInvalid={!!errors.currentStatus}
                    />
                    <div>
                      <BiSolidSchool className="log" />
                    </div>
                    <div>In High School</div>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="re1">
                    <Form.Check
                      inline
                      name="currentStatus"
                      value="university"
                      checked={formData.currentStatus === "university"}
                      onChange={handleChange}
                      className="group1"
                      type="radio"
                      isInvalid={!!errors.currentStatus}
                    />
                    <div>
                      <FaSchool className="log" />
                    </div>
                    <div>In University/College</div>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="re1">
                    <Form.Check
                      inline
                      name="currentStatus"
                      value="career"
                      checked={formData.currentStatus === "career"}
                      onChange={handleChange}
                      className="group1"
                      type="radio"
                      isInvalid={!!errors.currentStatus}
                    />
                    <div>
                      <IoSchoolSharp className="log" />
                    </div>
                    <div>In Career</div>
                  </div>
                </Col>
              </Row>
              <Form.Control.Feedback type="invalid">
                {errors.currentStatus}
              </Form.Control.Feedback>
              <Row>
                <Col>
                  <Form.Label>How did you hear about us?</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={1}
                    name="referral"
                    value={formData.referral}
                    onChange={handleChange}
                    className="for1"
                  />
                </Col>
              </Row>
              <Row className="for2">
                <Col lg={12} sm={12}>
                  <Form.Check
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    label="By ticking this box, you agree to the terms of service and that your parent/legal guardian has agreed to you participating in our programs. If you do not agree, or do not have parental/legal consent, then you may explore our programs here."
                    isInvalid={!!errors.agreeTerms}
                    className="foro2"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.agreeTerms}
                  </Form.Control.Feedback>
                </Col>
              </Row>
              <Row style={{ marginLeft: "10px", gap: "10px" }} className="for2">
                <Col lg={12} className="forio2">
                  If you would like to understand how we handle your personal
                  data, please read our privacy policy.
                </Col>
                <Col lg={12} className="forio2">
                  We would love to contact you about new virtual programmes, job
                  opportunities and career-related help by email.
                </Col>
                <Col lg={12} className="forio2">
                  You can unsubscribe from our mailing list at any time using
                  the links provided in each email.
                </Col>
              </Row>
              <Row className="for2">
                <Col>
                  <Form.Check
                    type="radio"
                    name="receiveEmails"
                    value="yes"
                    checked={formData.receiveEmails === "yes"}
                    onChange={handleChange}
                    label="You can unsubscribe from our mailing list at any time using the links provided in each email."
                    isInvalid={!!errors.receiveEmails}
                    className="foro2"
                  />
                  <Form.Check
                    type="radio"
                    name="receiveEmails"
                    value="no"
                    checked={formData.receiveEmails === "no"}
                    onChange={handleChange}
                    label="No thanks - I'm not interested in receiving this information"
                    isInvalid={!!errors.receiveEmails}
                    className="foro2"
                  />
                  <Form.Control.Feedback
                    type="invalid"
                    style={{ display: "block" }}
                  >
                    {errors.receiveEmails}
                  </Form.Control.Feedback>
                </Col>
              </Row>
            </>
          )}
          <Row className="rogo">
            <Col className="reg--row">
              <Button type="submit" variant="success" className="reg-btn">
                {isLogin ? "Login" : "Register"}
              </Button>
            </Col>
          </Row>
          <Row style={{ color: "#7C7C7C" }} className="rogo">
            <Col className="reg--row">
              {isLogin
                ? "Forgot your Password?"
                : ""}
            </Col>
          </Row>
          <Row style={{ fontWeight: "600" }} className="rogo">
            <Col className="reg--row">
              <div className="lojj" onClick={handleEmailLinkClick}>
                {isLogin ? "Email me a login link" : ""}
              </div>
            </Col>
          </Row>
          <Row style={{ color: "#7C7C7C" }} className="rogo">
            <Col className="reg--row">
              {isLogin
                ? "Don't have an account?"
                : "Already have a Forage account?"}
            </Col>
          </Row>
          <Row style={{ fontWeight: "600" }} className="rogo">
            <Col className="reg--row">
              <div className="lojj" onClick={toggleLogin}>
                {isLogin ? "Register" : "Login"}
              </div>
            </Col>
          </Row>
        </Container>
      </Form>
    </>
  );
};

export default Register;
