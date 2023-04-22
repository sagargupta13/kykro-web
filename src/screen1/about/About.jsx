import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css";
import Aboutimg1 from "../images/Aboutimg1.jpg";
import Aboutimg2 from "../images/Aboutimg2.jpg";
import Aboutimg3 from "../images/Aboutimg3.jpg";
import Aboutimg4 from "../images/Aboutimg4.jpg";
const About = () => {
  return (
    <div className=" bg-white vh-40">
      <Container style={{ marginTop: "70px" }}>
        <Row>
          <Col md={6} className="d-flex  justify-content-flex-start ">
            <Row style={{paddingLeft:'25px',marginBottom:'20px'}}>
              <Col md={12}>
                <h1 style={{color:'palevioletred'}}>Welcome</h1>
              </Col>
              <Col md={12}>
                <h5>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores animi, ea optio eius ab nisi totam quod, hic tempora
                  deserunt dignissimos suscipit maiores harum fugit nihil,
                  repellat ipsum corporis recusandae molestiae perferendis sint
                  enim voluptate. Numquam autem sed animi ut.
                </h5>
              </Col>
              <Col md={12}>
                <h5 style={{fontWeight:'normal'}}>
                
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eveniet ipsa illum odio ut magnam fuga veritatis sed.
                  Voluptatibus, eaque. Molestiae doloremque odio eligendi
                  cupiditate vitae ut velit enim, aspernatur totam perspiciatis
                  et doloribus animi adipisci dolor in sunt non consequuntur?
                </h5>
              </Col>
            </Row>
          </Col>

          <Col md={6}>
            <Row>
              <Col md={6}  className="mb-4">
                <img src={Aboutimg1} alt="image1" className="img-fluid" />
              </Col>
              <Col md={6}  className="mb-4">
                <img src={Aboutimg2} alt="image2" className="img-fluid" />
              </Col>
              <Col md={6}  className="mb-4">
                <img src={Aboutimg3} alt="image3" className="img-fluid" />
              </Col>
              <Col md={6}  className="mb-4">
                <img src={Aboutimg4} alt="image4" className="img-fluid" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
