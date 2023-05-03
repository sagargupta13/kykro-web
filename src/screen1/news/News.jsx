import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import "./News.css";
import Newsimg1 from "../images/Newsimg1.jpg";
const News = (props) => {
  return (
    <div className=" bg-white vh-40">
      <Container style={{ marginTop: "70px" }}>
        <Row>
          <Col md={12} lg={6} >
            <Row>
          <div className="container ">
      <div className="card row ">
        <div className="no-gutters">
          <div className="col-md-4 mb-3 mb-md-0">
            <img src={Newsimg1} className="card-img" alt="Card Image" style={{width:'350px'}}/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card Title</h5>
              <p className="card-text">Lorem ipsum dolor sit amet</p>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                {/* <a href="#" className="calendar"> */}
                <i className="fa fa-calendar" aria-hidden="true"></i>
                           02 May 2023
                </div>
                <div>
                {/* <a href="#" className="clock"> */}
                <i class="fa fa-clock-o" aria-hidden="true"></i>
                           9:00 AM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Row>    
              
              
          </Col>
            

          <Col md={12} lg={6}>
            <Row>
              {/* <Col md={6} lg={6} className="mb-4">
                <img src={Aboutimg1} alt="image1" className="img-fluid" />
              </Col>
              <Col md={6} lg={6} className="mb-4">
                <img src={Aboutimg2} alt="image2" className="img-fluid" />
              </Col> */}
              {props.details.map((value, index) => (
                <Col md={6} lg={6} className="team-card-container">
                  <div className="card" key={index}>
                    <img
                      className="team-card-img-top "
                      src={value.img}
                      alt="Member image"
                    />
                    <div className="team-card-body">
                      <h4 className="team-card-title">{value.title}</h4>
                      <h4 className="team-card-name">{value.name}</h4>
                      <button className="btn btn-black btn-read-more">Read More</button>
                      <ul className="team-icon">
                        <li>
                        <i className="fa fa-calendar" aria-hidden="true"></i>
                           02 May 2023
                        </li>
                        <li>
                          <a href="#" className="twitter">
                          <i class="fa fa-clock-o" aria-hidden="true"></i>
                           9:00 AM
                          </a>
                        </li>
                       
                      </ul>
                    </div>
                  </div>
                </Col>
              ))}
             
            </Row>
          </Col>
        
        </Row>
      </Container>
    </div>
  )
}

export default News