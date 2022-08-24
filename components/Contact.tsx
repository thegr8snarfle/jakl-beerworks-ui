import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import Icon from "./Icon";

const Contact: React.FC = () => {
  return (
    <Container className="text-primary">
      <Row>
        <Col>
          <h2 className="p-2 text-center fw-bold h2">Contact</h2>
        </Col>
      </Row>
      <Row className="">
        <Col>
          <ul className="list-unstyled m-0">
            <li className="d-flex align-items-center">
              <Icon name="faPhone" className="px-3 py-2" style={{ fontSize: '1.5rem'}}/>
              <a className="ml-2 d-inline-block" href="tel:302-464-1039">(302) 464-1039</a>
            </li>
            <li  className="d-flex align-items-center">
              <Icon name="faLocationDot" className="px-3 py-2" style={{ fontSize: '1.5rem'}}/>
              <a className="ml-2 d-inline-block" href="https://g.page/jaklbeer?share">128 Patriot Drive, Suite 11,
                Middletown, DE 19709
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact;