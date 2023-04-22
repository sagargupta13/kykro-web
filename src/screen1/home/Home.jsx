import React, { useState } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import "./Home.css";
import headerimg1 from "../images/headerimg1.jpg"

const Home = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
  return (
    <div className="App container-fluid">
    <Carousel activeIndex={index} onSelect={handleSelect} interval={5000}>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src={headerimg1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Welcome</h3>
          <p>Text for the first image</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={headerimg1}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Welcome</h3>
          <p>Text for the second image</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={headerimg1}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Welcome</h3>
          <p>Text for the third image</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Container>
      <Row>
        <Col>
          <h2>Another Text</h2>
          <p>Additional information about the slider</p>
        </Col>
      </Row>
    </Container>
  </div>
  )
}

export default Home