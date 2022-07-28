import {Container, Col, Row} from "react-bootstrap";
import Hours from './Hours';
import Contact from "./Contact";

const Footer = () => {
  return (
    <Container>
      <Row className="gy-3" xs={1} md={2}>
        <Col className="border-top border-5 border-secondary pt-4">
          <Hours></Hours>
        </Col>
        <Col className="border-top border-5 border-secondary pt-4">
          <Contact></Contact>
        </Col>
      </Row>
      <Row className="mt-4" >
        <Col className="align-baseline">
          <p className="p-3 text-center font-weight-bolder text-primary">&copy;2022 JAKL Beerworks LLC.</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer;