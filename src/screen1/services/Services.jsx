import React from "react";
import "./Services.css";
import { Container, Row, Col } from "react-bootstrap";

const Services = () => {
  return (
    <div className="bg-image">
      <Container>
        <h1 style={{color:'white',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'70px'}}>SERVICES</h1>
        <Row>
          <Col sm={12} md={12} lg={3} className="left-boxes">
            <Row>
              <Col
                sm={12}
                md={4}
                lg={12}
               
                className="left-box white"
              >
                <h4>Oil Massage </h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </Col>
              <Col
                sm={12}
                md={4}
                lg={12}
                
                className="left-box pink"
              >
                <h4>Skin Scrub </h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </Col>
              <Col
                sm={12}
                md={4}
                lg={12}
                
                className="left-box white"
              >
                <h4>Body Wrap </h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </Col>
            </Row>
          </Col>
          <Col sm={12} md={12} lg={7} className="right-boxes" >
          <Row  >
              <Col
                sm={12}
                md={6}
                lg={6}
               
                className="right-box light-pink"
               
              >
                <h4>Oil Massage </h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </Col>
              <Col
                sm={12}
                md={6}
                lg={6}
                
                className="right-box blue "
              >
                <h4>Skin Scrub </h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </Col>
              <Col
                sm={12}
                md={6}
                lg={6}
                
                className="right-box orange "
              >
                <h4>Body Wrap </h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </Col>
              <Col
                sm={12}
                md={6}
                lg={6}
                
                className="right-box green"
              >
                <h4>Body Wrap </h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
