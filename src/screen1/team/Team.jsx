import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Team.css";

const Team = (props) => {
  return (
    <div className="  team-container">
      <Container style={{ marginTop: "70px" }}>
        <Row>
          <Col md={12} className="d-flex  justify-content-center ">
            <Row style={{ marginBottom: "20px" }}>
              <Col md={12}>
                <h1 className="team-heading">OUR TEAM</h1>
              </Col>
            </Row>
          </Col>

          <Col md={12}>
            <Row>
              {props.details.map((value, index) => (
                <Col md={6} lg={3} className="team-card-container">
                  <div className="card" key={index}>
                    <img
                      className="team-card-img-top "
                      src={value.img}
                      alt="Member image"
                    />
                    <div className="team-card-body">
                      <h4 className="team-card-title">{value.title}</h4>
                      <h4 className="team-card-name">{value.name}</h4>
                      <p className="card-text">{value.description}</p>
                      <ul className="team-icon">
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
  );
};

export default Team;
