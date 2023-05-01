import React from "react";
import "./Contact.css";
import { Container, Row, Col } from "react-bootstrap";

const Contact = () => {
  return (
    //   <div className=" bg-black vh-50 d-flex flex-column">
    //   <div className="row flex-grow-1">
    //     <div className="col-sm-8 col-md-8 col-lg-8">
    //       <p className="text-white">Some text goes here.</p>
    //     </div>
    //     <div className="col-sm-4 col-md-4 col-lg-4 d-flex align-items-center justify-content-end">
    //       <a className="text-white" href="https://pressbuddy.in//">Powered by Pressbuddy</a>
    //     </div>
    //   </div>
    // </div>
    <div className=" bg-black vh-40">
      <Container style={{ marginTop: "40px" }}>
        <Row>
          <Col md={12} lg={4} className="d-flex  justify-content-flex-start ">
            <Row
              style={{ paddingLeft: "0px", marginBottom: "50px" }}
              
            >
              <Col md={12}>
                <h2 className="heading-left"> Contact Us</h2>
                
              </Col>
              <Col md={12}>
                <h5 className="text-left">Address</h5>
                <p className="p-left">Near Vitthal temple, shevantai building, Shop no. 2, Chaitanya nagar, Sangamner</p>
              </Col>
              <Col md={12}>
                <h5 className="text-left" style={{ fontWeight: "normal" }}>Mail</h5>
                <p className="p-left">contact@kykro.com</p>
              </Col>
              <Col md={12}>
                <h5 className="text-left" style={{ fontWeight: "normal" }}>Phone</h5>
                <p className="p-left">+918654258785</p>
              </Col>
            </Row>
          </Col>

          <Col md={12} lg={8}>
            <Row>
              <Col md={12} lg={12} className="mb-4">
                <a
                  className="text-right"
                  href="https://www.pressbuddy.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  © 2023 KyKro. All Rights Reserved | Powered by Pressbuddy
                </a>
              </Col>
              <Col md={12} lg={12} className="mb-4">
                <ul className="contact-icon">
                  <li>
                    <a href="#" className="facebook">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="twitter">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="rss">
                      <i className="fa fa-rss"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="vk">
                      <i className="fa fa-vk"></i>
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
