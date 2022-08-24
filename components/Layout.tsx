import {Col, Container, Row} from "react-bootstrap";
import Header from "./Header";
import Footer from './Footer';
import React, {ReactNode} from "react";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Container className="jakl">
      <Row className="mx-4">
        <Col>
          <Header />
        </Col>
      </Row>
      <Row className="mx-4">
        <Col>
          <main className="content h-100 my-3 py-3">
            { children }
          </main>
        </Col>
      </Row>
      <Row className="mx-4 mt-5">
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  )
}

export default Layout;