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
              <Icon name="faPhone" size="2x" className="p-3"/>
              <a className="ml-2 d-inline-block" href="tel:302-464-1039">(302) 464-1039</a>
            </li>
            <li  className="d-flex align-items-center">
              <Icon name="faLocationDot" size="2x" className="p-3"/>
              <a className="ml-2 d-inline-block" href="https://g.page/jaklbeer?share">128 Patriot Drive, Suite 11,
                Middletown, DE 19709
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      <Row class="justify-items-start">
        <Col>
          <ul className="list-unstyled m-0">
            <li className="d-inline-block">
              <a className="d-block" rel="noreferrer" href="https://www.facebook.com/jaklbeer" target="_blank">
                <Icon name="facebook" size="3x" className="p-3" />
              </a>
            </li>
            <li className="d-inline-block">
              <Icon name="instagram" size="3x" className="p-3" />
              <a className="d-block" rel="noreferrer" href="https://www.instagram.com/jaklbeer" target="_blank">
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact;