import React, { useState } from "react";
import { Row, Col, Carousel } from "react-bootstrap";
import "./Home.css";
import headerimg1 from "../images/headerimg1.jpg"

import headerimg3 from "../images/headerimg3.jpg"

import headerimg5 from "../images/headerimg5.jpg"


const Home = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
  return (
    <div className= "Container-fluid" >
      
       
      
    <Carousel activeIndex={index} onSelect={handleSelect} interval={5000}>
      <Carousel.Item>
        <img 
          className="d-block w-100 "
          src={headerimg1}
          alt="First slide"
        />
        <Carousel.Caption>
          <Row>
          <p>Welcome</p>
          <h3>KyKro Body Massage</h3>
          <p>Additional information about the slider</p>
          </Row>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={headerimg3}
          alt="Second slide"
        />
        <Carousel.Caption>
          <Row>
          <p>Welcome</p>
          <h3>Best Beauty and Spa</h3>
          <p>Additional information about the slider</p>
          </Row>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={headerimg5}
          alt="Third slide"
        />
        <Carousel.Caption>
        <Row>
          <p>Welcome</p>
          <h3>Make a Amazing Look</h3>
          <p>Additional information about the slider</p>
          </Row>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
  </div>
  )
}

export default Home