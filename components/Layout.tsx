import {Col, Container, Row} from "react-bootstrap";
import Header from "./Header";
import Footer from './Footer';
import React, {ReactNode} from "react";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Container className="jakl">
      <Row className="header-container mx-0 my-sm-2 mx-lg-4 top-0" style={{ zIndex: 1000 }}>
        <Col className="p-0">
          <Header />
        </Col>
      </Row>
      <Row className="main mx-0 mx-lg-4">
        <Col className="p-0">
          <main className="content-container h-100 lg-my-3 lg-py-3">
            { children }
          </main>
        </Col>
      </Row>
      <Row className="footer-container m-0 mx-md-2 mt-5">
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  )
}

export default Layout;