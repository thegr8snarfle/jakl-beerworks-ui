import {Col, Container, Row} from "react-bootstrap";
import React from "react";

const Hours: React.FC = () => {

  return (
    <Container className="hours text-primary">
      <h2 className="p-2 fw-bold h2 text-center">Hours</h2>
      <Container className="p-0">
        <Row>
          <Col className="days fs-5 text-left">
            <p className="p-2">Monday - 4PM to 9PM </p>
            <p className="p-2">Tuesday - Closed</p>
            <p className="p-2">Wednesday - 4PM to 9PM</p>
            <p className="p-2">Thursday - 4PM to 9PM</p>
            <p className="p-2">Friday - 4PM to 10PM</p>
            <p className="p-2">Saturday - Noon to 10PM</p>
            <p className="p-2">Sunday - Noon to 7PM</p>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Hours;