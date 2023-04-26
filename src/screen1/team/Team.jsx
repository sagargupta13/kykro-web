import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import "./Team.css";

const Team = (props) => {
  return (
    <div className="  team-container">
    <Container  style={{ marginTop: "70px" }}>
      <Row>
        <Col md={12} className="d-flex  justify-content-center ">
          <Row style={{ marginBottom: "20px" }}>
            <Col md={12}>
              <h1 className='team-heading'>OUR TEAM</h1>
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

export default Team