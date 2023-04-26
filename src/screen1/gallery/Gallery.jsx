import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Gallery.css";

const About = (props) => {
  return (
    <div className=" gallery-container">
      <Container fluid style={{ marginTop: "70px" }}>
        <Row>
          <Col md={12} className="d-flex  justify-content-center ">
            <Row style={{ marginBottom: "20px" }}>
              <Col md={12}>
                <h1>GALLERY</h1>
              </Col>
            </Row>
          </Col>

          <Col md={12}>
            <Row>
              {props.details.map((value, index) => (
                <Col md={6} lg={3} className="card-container">
                  <div className="card " key={index}>
                    <div className="img-wrapper">
                    <img
                      className="card-img-top hover-zoom"
                      src={value.img}
                      alt="Card image"
                    />
                    </div>
                    <div className="card-body">
                      <h4 className="card-title">{value.title}</h4>
                      <p className="card-text">{value.description}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
