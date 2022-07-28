import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {ICONS} from "../icons";

const Contact: React.FC = () => {
  return (
    <Container className="contact text-primary">
      <Row>
        <Col>
          <h2 className="p-2 text-center fw-bold h2">Contact</h2>
        </Col>
      </Row>
      <Container className="p-0 w-75">
        <Row className="pb-2 align-items-center">
          <Col className="p-0 d-flex align-items-start">
            <FontAwesomeIcon className="d-inline-block" size="lg" icon={ICONS['faPhone']} />
            <a className="ml-2 d-inline-block" href="tel:302-464-1039">(302) 464-1039</a>
          </Col>
        </Row>
        <Row className="pb-2 align-items-center">
          <Col className="p-0 d-flex align-items-start">
            <FontAwesomeIcon className="d-inline-block" size="lg" icon={ICONS['faLocationDot']} />
            <a className="ml-2 d-inline-block" href="https://g.page/jaklbeer?share">128 Patriot Drive, Suite 11, Middletown, DE 19709</a>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Contact;