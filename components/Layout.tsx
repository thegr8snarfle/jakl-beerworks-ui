import {Col, Container, Row} from "react-bootstrap";
import Header from "./Header";
import Footer from './Footer';
import Navigation from "./Navigation";

// @ts-ignore
export default function Layout({ children }) {
  return (
    <Container className="jakl p-4">
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col>
          <main className="row content h-100 my-3 py-3">
            { children }
          </main>
        </Col>
      </Row>
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  )
}