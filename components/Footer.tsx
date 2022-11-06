import {Container, Col, Row} from "react-bootstrap";
import Hours from './Hours';
import Contact from "./Contact";
import Icon from "./Icon";
import React from "react";

const Footer = () => {
  return (
    <Container>
      <Row className="gy-3 mx-0" xs={1} md={2}>
        <Col className="border-top border-5 border-secondary py-2 order-1">
          <Hours></Hours>
        </Col>
        <Col className="border-top border-5 border-secondary py-2 order-0">
          <Contact></Contact>
        </Col>
      </Row>
      <Row className="mt-2" >
        <Col className="align-baseline">
          <ul className="list-unstyled m-0 w-100 text-center">
            <li className="d-inline-block">
              <a className="d-block" rel="noreferrer" href="https://www.facebook.com/jaklbeer" target="_blank">
                <Icon name="facebook" size="2x" className="px-3 p-2" />
              </a>
            </li>
            <li className="d-inline-block">
              <a className="d-block" rel="noreferrer" href="https://www.instagram.com/jaklbeer" target="_blank">
                <Icon name="instagram" size="2x" className="px-3 p-2" />
              </a>
            </li>
          </ul>
          <p className="p-2 text-center font-weight-bolder text-primary">&copy;2022 JAKL Beerworks LLC.</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer;